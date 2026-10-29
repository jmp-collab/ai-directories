-- Test für Migration 0004: Launch-Tracker. Nur eigene Einträge, Server setzt Konto und Zeit.
\set ON_ERROR_STOP 1
insert into auth.users (id, email) values ('e0000000-0000-0000-0000-000000000001', 'l1@x.de'), ('e0000000-0000-0000-0000-000000000002', 'l2@x.de');

set role authenticated;
select set_config('request.jwt.claim.sub', 'e0000000-0000-0000-0000-000000000001', false);
insert into public.launch_eintraege (slug, status, notiz, erinnerung) values ('theres-an-ai-for-that', 'eingereicht', 'Formular ausgefüllt', date '2026-11-05');
insert into public.launch_eintraege (slug) values ('futurepedia');
select test.gleich((select count(*) from public.launch_eintraege)::text, '2', 'Eigene Einträge angelegt');
select test.gleich((select status from public.launch_eintraege where slug = 'futurepedia'), 'geplant', 'Status standardmäßig geplant');
select test.scheitert($$insert into public.launch_eintraege (user_id, slug) values ('e0000000-0000-0000-0000-000000000002', 'x')$$, '%permission denied%');
select test.scheitert($$insert into public.launch_eintraege (slug, status) values ('toolify', 'bezahlt')$$, '%check constraint%');
select test.scheitert($$insert into public.launch_eintraege (slug) values ('<script>')$$, '%check constraint%');
select test.scheitert($$insert into public.launch_eintraege (slug, notiz) values ('lang', repeat('x', 501))$$, '%check constraint%');
select test.scheitert($$update public.launch_eintraege set aktualisiert = now() - interval '1 year'$$, '%permission denied%');
update public.launch_eintraege set status = 'live' where slug = 'theres-an-ai-for-that';
select test.gleich((select status from public.launch_eintraege where slug = 'theres-an-ai-for-that'), 'live', 'Status geändert');
-- So schreibt der Client per Upsert (PostgREST setzt alle gesendeten Spalten im Update-Zweig).
insert into public.launch_eintraege (slug, status) values ('futurepedia', 'eingereicht') on conflict (user_id, slug) do update set slug = excluded.slug, status = excluded.status;
select test.gleich((select status || '/' || count(*) over () from public.launch_eintraege where slug = 'futurepedia'), 'eingereicht/1', 'Upsert ändert den eigenen Eintrag');

select set_config('request.jwt.claim.sub', 'e0000000-0000-0000-0000-000000000002', false);
select test.gleich((select count(*) from public.launch_eintraege)::text, '0', 'B sieht keine fremden Einträge');
update public.launch_eintraege set notiz = 'gehackt';
delete from public.launch_eintraege;
reset role;
select test.gleich((select count(*) from public.launch_eintraege where notiz = 'gehackt')::text || '/' || (select count(*) from public.launch_eintraege)::text, '0/2', 'B ändert und löscht nichts Fremdes');

set role anon;
select set_config('request.jwt.claim.sub', '', false);
select test.scheitert($$select count(*) from public.launch_eintraege$$, '%permission denied%');
reset role;

-- Obergrenze 1000 Einträge pro Konto.
select set_config('request.jwt.claim.sub', 'e0000000-0000-0000-0000-000000000002', false);
insert into public.launch_eintraege (slug) select 'v-' || i from generate_series(1, 1000) i;
set role authenticated;
select set_config('request.jwt.claim.sub', 'e0000000-0000-0000-0000-000000000002', false);
select test.scheitert($$insert into public.launch_eintraege (slug) values ('einer-zu-viel')$$, '%zu_viele%');
reset role;

-- Konto löschen entfernt die Einträge.
delete from auth.users where id = 'e0000000-0000-0000-0000-000000000001';
select test.gleich((select count(*) from public.launch_eintraege where user_id = 'e0000000-0000-0000-0000-000000000001')::text, '0', 'Einträge gehen mit dem Konto');
