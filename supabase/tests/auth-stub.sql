-- Minimaler Nachbau von Supabase-Auth für lokale Tests in einem leeren Postgres.
do $$ begin if not exists (select 1 from pg_roles where rolname = 'anon') then create role anon nologin; end if; if not exists (select 1 from pg_roles where rolname = 'authenticated') then create role authenticated nologin; end if; end $$;
create schema auth;
create table auth.users (id uuid primary key default gen_random_uuid(), email text);
create function auth.uid() returns uuid language sql stable as $$ select nullif(current_setting('request.jwt.claim.sub', true), '')::uuid $$;
grant usage on schema public, auth to anon, authenticated;
grant execute on function auth.uid() to anon, authenticated;
alter default privileges in schema public grant all on tables to anon, authenticated;
alter default privileges in schema public grant execute on functions to anon, authenticated;
create schema storage;
create table storage.buckets (id text primary key, name text, public boolean, file_size_limit bigint, allowed_mime_types text[]);
create table storage.objects (id uuid primary key default gen_random_uuid(), bucket_id text references storage.buckets, name text);
alter table storage.objects enable row level security;
create function storage.foldername(name text) returns text[] language sql immutable as $$ select (string_to_array(name, '/'))[1:array_length(string_to_array(name, '/'), 1) - 1] $$;
grant usage on schema storage to anon, authenticated;
grant all on storage.objects to anon, authenticated;

-- Prüfhelfer: Tests brechen mit Fehler ab, wenn eine Erwartung nicht stimmt.
create schema if not exists test;
grant usage on schema test to anon, authenticated;
create or replace function test.scheitert(q text, muster text default '%') returns void language plpgsql as $$
begin
    execute q;
    raise exception 'TEST FEHLGESCHLAGEN, sollte scheitern: %', q;
exception when others then
    if sqlerrm like 'TEST FEHLGESCHLAGEN%' then raise; end if;
    if sqlerrm not like muster then raise exception 'TEST FEHLGESCHLAGEN, falscher Fehler "%" bei: %', sqlerrm, q; end if;
end $$;
create or replace function test.gleich(ist text, soll text, name text) returns void language plpgsql as $$
begin
    if ist is distinct from soll then raise exception 'TEST FEHLGESCHLAGEN %: ist %, soll %', name, ist, soll; end if;
    raise notice 'ok %', name;
end $$;
grant execute on function test.scheitert(text, text), test.gleich(text, text, text) to anon, authenticated;
