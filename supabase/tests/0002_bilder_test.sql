-- Test für Migration 0002. Jede Erwartung ist eine Prüfung.
\set ON_ERROR_STOP 1
insert into auth.users (id, email) values ('cccccccc-0000-0000-0000-000000000003','c@x.de');
set role authenticated;
select set_config('request.jwt.claim.sub', 'cccccccc-0000-0000-0000-000000000003', false);
insert into storage.objects (bucket_id, name) values ('avatare', 'cccccccc-0000-0000-0000-000000000003/1.webp');
select test.gleich((select count(*) from storage.objects)::text, '1', 'Upload in eigenen Ordner');
select test.scheitert($$insert into storage.objects (bucket_id, name) values ('avatare', 'bbbbbbbb-0000-0000-0000-000000000002/1.webp')$$, '%row-level security%');
insert into storage.objects (bucket_id, name) values ('avatare', 'cccccccc-0000-0000-0000-000000000003/2.webp'), ('avatare', 'cccccccc-0000-0000-0000-000000000003/3.webp');
select test.scheitert($$insert into storage.objects (bucket_id, name) values ('avatare', 'cccccccc-0000-0000-0000-000000000003/4.webp')$$, '%row-level security%');
update public.profiles set avatar_pfad = 'cccccccc-0000-0000-0000-000000000003/1.webp' where id = 'cccccccc-0000-0000-0000-000000000003';
select test.gleich((select avatar_pfad from public.profiles where id = 'cccccccc-0000-0000-0000-000000000003'), 'cccccccc-0000-0000-0000-000000000003/1.webp', 'Avatar-Pfad gespeichert');
select test.scheitert($$update public.profiles set avatar_pfad = 'bbbbbbbb-0000-0000-0000-000000000002/x.webp' where id = 'cccccccc-0000-0000-0000-000000000003'$$, '%avatar_im_eigenen_ordner%');
update public.profil_details set links = '["https://aigeddon.de", "https://example.org/x"]' where id = 'cccccccc-0000-0000-0000-000000000003';
select test.scheitert($$update public.profil_details set links = '["javascript:alert(1)"]' where id = 'cccccccc-0000-0000-0000-000000000003'$$, '%links_nur_https%');
select test.scheitert($$update public.profil_details set links = '["https://a.de","https://b.de","https://c.de","https://d.de"]' where id = 'cccccccc-0000-0000-0000-000000000003'$$, '%links_check%');
reset role;
