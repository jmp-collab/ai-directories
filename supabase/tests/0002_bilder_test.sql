-- Lokaler Test für Migration 0002 (nach 0001 und 0001_rls ausführen).
\set ON_ERROR_STOP 0
insert into auth.users (id, email) values ('cccccccc-0000-0000-0000-000000000003','c@x.de');
set role authenticated;
select set_config('request.jwt.claim.sub', 'cccccccc-0000-0000-0000-000000000003', false);
insert into storage.objects (bucket_id, name) values ('avatare', 'cccccccc-0000-0000-0000-000000000003/1.webp');
select 'eigener upload=' || count(*) from storage.objects;
\echo '--- erwarte Fehler: fremder Ordner'
insert into storage.objects (bucket_id, name) values ('avatare', 'bbbbbbbb-0000-0000-0000-000000000002/1.webp');
update public.profiles set avatar_pfad = 'cccccccc-0000-0000-0000-000000000003/1.webp' where id = 'cccccccc-0000-0000-0000-000000000003';
select 'avatar=' || avatar_pfad from public.profiles where id = 'cccccccc-0000-0000-0000-000000000003';
\echo '--- erwarte Fehler: Pfad zeigt auf fremden Ordner'
update public.profiles set avatar_pfad = 'bbbbbbbb-0000-0000-0000-000000000002/x.webp' where id = 'cccccccc-0000-0000-0000-000000000003';
update public.profil_details set links = '["https://aigeddon.de", "https://example.org/x"]' where id = 'cccccccc-0000-0000-0000-000000000003';
select 'links=' || links::text from public.profil_details where id = 'cccccccc-0000-0000-0000-000000000003';
\echo '--- erwarte Fehler: javascript-Link'
update public.profil_details set links = '["javascript:alert(1)"]' where id = 'cccccccc-0000-0000-0000-000000000003';
\echo '--- erwarte Fehler: 4 Links'
update public.profil_details set links = '["https://a.de","https://b.de","https://c.de","https://d.de"]' where id = 'cccccccc-0000-0000-0000-000000000003';
reset role;
