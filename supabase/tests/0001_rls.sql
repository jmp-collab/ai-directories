-- Lokaler RLS-Test: psql -f supabase/tests/auth-stub.sql -f supabase/migrations/0001_fundament.sql -f supabase/tests/0001_rls.sql
-- Zeilen nach "erwarte Fehler" müssen mit permission denied oder einer RLS-Verletzung scheitern.
\set ON_ERROR_STOP 0
insert into auth.users (id, email) values ('aaaaaaaa-0000-0000-0000-000000000001','a@x.de'), ('bbbbbbbb-0000-0000-0000-000000000002','b@x.de');
update public.profiles set oeffentlich = false where id = 'bbbbbbbb-0000-0000-0000-000000000002';
update public.profil_details set bio = 'geheim' where id = 'bbbbbbbb-0000-0000-0000-000000000002';
select 'trigger: profile=' || count(*) from public.profiles;
select 'log konto=' || count(*) from public.einwilligungs_log;

set role anon;
select 'anon profiles=' || count(*) from public.profiles;
select 'anon details privat sichtbar=' || count(*) from public.profil_details where id = 'bbbbbbbb-0000-0000-0000-000000000002';
select 'anon konten=' || count(*) from public.konten;
reset role;

set role authenticated;
select set_config('request.jwt.claim.sub', 'aaaaaaaa-0000-0000-0000-000000000001', false);
select 'A sieht konten=' || count(*) from public.konten;
update public.profiles set anzeigename = 'Ada' where id = 'aaaaaaaa-0000-0000-0000-000000000001';
select 'A name=' || anzeigename from public.profiles where id = 'aaaaaaaa-0000-0000-0000-000000000001';
update public.profiles set anzeigename = 'Hack' where id = 'bbbbbbbb-0000-0000-0000-000000000002';
select 'B name nach Angriff=' || anzeigename from public.profiles where id = 'bbbbbbbb-0000-0000-0000-000000000002';
\echo '--- erwarte Fehler: rolle'
update public.profiles set rolle = 'admin' where id = 'aaaaaaaa-0000-0000-0000-000000000001';
\echo '--- erwarte Fehler: plan'
update public.konten set plan = 'pro' where id = 'aaaaaaaa-0000-0000-0000-000000000001';
update public.konten set newsletter = true where id = 'aaaaaaaa-0000-0000-0000-000000000001';
select 'A log=' || string_agg(art || ':' || erteilt, ',') from public.einwilligungs_log;
\echo '--- erwarte Fehler: log direkt'
insert into public.einwilligungs_log (user_id, art, erteilt) values ('aaaaaaaa-0000-0000-0000-000000000001', 'angebote', true);
insert into public.saved_items (user_id, art, pfad) values ('aaaaaaaa-0000-0000-0000-000000000001', 'merk', '/ki-news');
\echo '--- erwarte Fehler: fremder Eintrag'
insert into public.saved_items (user_id, art, pfad) values ('bbbbbbbb-0000-0000-0000-000000000002', 'merk', '/x');
select 'A details B privat=' || count(*) from public.profil_details where id = 'bbbbbbbb-0000-0000-0000-000000000002';
select public.konto_loeschen();
reset role;
select 'nach Löschen users=' || count(*) || ' profiles=' || (select count(*) from public.profiles) || ' saved=' || (select count(*) from public.saved_items) from auth.users;
