-- Test für Migration 0001. Jede Erwartung ist eine Prüfung; ein Verstoß bricht den Lauf mit Fehler ab.
\set ON_ERROR_STOP 1
insert into auth.users (id, email) values ('aaaaaaaa-0000-0000-0000-000000000001','a@x.de'), ('bbbbbbbb-0000-0000-0000-000000000002','b@x.de');
update public.profiles set oeffentlich = false where id = 'bbbbbbbb-0000-0000-0000-000000000002';
update public.profil_details set bio = 'geheim' where id = 'bbbbbbbb-0000-0000-0000-000000000002';
insert into public.badges (user_id, name) values ('bbbbbbbb-0000-0000-0000-000000000002', 'Neugier-Abzeichen'), ('aaaaaaaa-0000-0000-0000-000000000001', 'Neugier-Abzeichen');
select test.gleich((select count(*) from public.profiles)::text, '2', 'Trigger legt Profile an');
select test.gleich((select count(*) from public.einwilligungs_log)::text, '2', 'Konto-Einwilligung protokolliert');

set role anon;
select test.gleich((select count(*) from public.profiles)::text, '2', 'Gast sieht Profilkarten');
select test.gleich((select count(*) from public.profil_details where id = 'bbbbbbbb-0000-0000-0000-000000000002')::text, '0', 'Gast sieht private Details nicht');
select test.gleich((select count(*) from public.konten)::text, '0', 'Gast sieht keine Konten');
select test.gleich((select count(*) from public.badges)::text, '1', 'Gast sieht nur Abzeichen öffentlicher Profile');
reset role;

set role authenticated;
select set_config('request.jwt.claim.sub', 'aaaaaaaa-0000-0000-0000-000000000001', false);
select test.gleich((select count(*) from public.konten)::text, '1', 'A sieht nur das eigene Konto');
update public.profiles set anzeigename = 'Ada' where id = 'aaaaaaaa-0000-0000-0000-000000000001';
select test.gleich((select anzeigename from public.profiles where id = 'aaaaaaaa-0000-0000-0000-000000000001'), 'Ada', 'A ändert eigenen Namen');
update public.profiles set anzeigename = 'Hack' where id = 'bbbbbbbb-0000-0000-0000-000000000002';
select test.gleich((select anzeigename from public.profiles where id = 'bbbbbbbb-0000-0000-0000-000000000002'), 'Neues Mitglied', 'A kann B nicht umbenennen');
select test.scheitert($$update public.profiles set rolle = 'admin' where id = 'aaaaaaaa-0000-0000-0000-000000000001'$$, '%permission denied%');
select test.scheitert($$update public.konten set plan = 'pro' where id = 'aaaaaaaa-0000-0000-0000-000000000001'$$, '%permission denied%');
update public.konten set newsletter = true where id = 'aaaaaaaa-0000-0000-0000-000000000001';
select test.gleich((select string_agg(art || ':' || erteilt, ',' order by id) from public.einwilligungs_log), 'konto:true,newsletter:true', 'Einwilligung per Trigger protokolliert');
select test.scheitert($$insert into public.einwilligungs_log (user_id, art, erteilt) values ('aaaaaaaa-0000-0000-0000-000000000001', 'angebote', true)$$, '%row-level security%');
insert into public.saved_items (user_id, art, pfad) values ('aaaaaaaa-0000-0000-0000-000000000001', 'merk', '/ki-news');
select test.scheitert($$insert into public.saved_items (user_id, art, pfad) values ('bbbbbbbb-0000-0000-0000-000000000002', 'merk', '/x')$$, '%row-level security%');
select test.gleich((select count(*) from public.profil_details where id = 'bbbbbbbb-0000-0000-0000-000000000002')::text, '0', 'A sieht private Details von B nicht');
insert into public.badges (user_id, name) values ('aaaaaaaa-0000-0000-0000-000000000001', 'Kopier-Abzeichen');
select test.scheitert($$insert into public.badges (user_id, name) values ('aaaaaaaa-0000-0000-0000-000000000001', 'Erfundenes Super-Abzeichen')$$, '%row-level security%');
select public.konto_loeschen();
reset role;
select test.gleich((select count(*) from auth.users)::text, '1', 'Konto gelöscht');
select test.gleich((select count(*) from public.saved_items)::text, '0', 'Daten per Kaskade gelöscht');
