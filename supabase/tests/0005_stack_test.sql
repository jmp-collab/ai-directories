-- Test für Migration 0005: Mein KI-Stack. Nur eigene Einträge, gültige Werte, Obergrenze.
\set ON_ERROR_STOP 1
insert into auth.users (id, email) values ('f0000000-0000-0000-0000-000000000001', 's1@x.de'), ('f0000000-0000-0000-0000-000000000002', 's2@x.de');

set role authenticated;
select set_config('request.jwt.claim.sub', 'f0000000-0000-0000-0000-000000000001', false);
insert into public.stack_eintraege (tool_slug, name, tarif, betrag, waehrung, intervall) values ('claude', 'Claude', 'Pro', 20, 'USD', 'monat');
insert into public.stack_eintraege (name, betrag, intervall) values ('Eigenes Tool', 120, 'jahr');
select test.gleich((select count(*) from public.stack_eintraege)::text, '2', 'Eigene Stack-Einträge angelegt');
select test.gleich((select waehrung || '/' || intervall from public.stack_eintraege where name = 'Eigenes Tool'), 'EUR/jahr', 'Standardwährung Euro');
select test.scheitert($$insert into public.stack_eintraege (user_id, name) values ('f0000000-0000-0000-0000-000000000002', 'x')$$, '%permission denied%');
select test.scheitert($$insert into public.stack_eintraege (name, betrag) values ('minus', -1)$$, '%check constraint%');
select test.scheitert($$insert into public.stack_eintraege (name, waehrung) values ('yen', 'JPY')$$, '%check constraint%');
select test.scheitert($$insert into public.stack_eintraege (name) values ('   ')$$, '%check constraint%');
select test.scheitert($$insert into public.stack_eintraege (tool_slug, name) values ('<b>', 'x')$$, '%check constraint%');
select test.scheitert($$update public.stack_eintraege set erstellt = now() - interval '1 year'$$, '%permission denied%');
update public.stack_eintraege set betrag = 17, intervall = 'monat', tarif = 'Pro jährlich' where tool_slug = 'claude';
select test.gleich((select betrag::text from public.stack_eintraege where tool_slug = 'claude'), '17.00', 'Betrag geändert');

select set_config('request.jwt.claim.sub', 'f0000000-0000-0000-0000-000000000002', false);
select test.gleich((select count(*) from public.stack_eintraege)::text, '0', 'B sieht keinen fremden Stack');
update public.stack_eintraege set betrag = 0;
delete from public.stack_eintraege;
reset role;
select test.gleich((select count(*) from public.stack_eintraege where betrag > 0)::text, '2', 'B ändert und löscht nichts Fremdes');

set role anon;
select set_config('request.jwt.claim.sub', '', false);
select test.scheitert($$select count(*) from public.stack_eintraege$$, '%permission denied%');
reset role;

-- Obergrenze 100 Einträge pro Konto.
select set_config('request.jwt.claim.sub', 'f0000000-0000-0000-0000-000000000002', false);
insert into public.stack_eintraege (name) select 'Tool ' || i from generate_series(1, 100) i;
set role authenticated;
select test.scheitert($$insert into public.stack_eintraege (name) values ('einer zu viel')$$, '%zu_viele%');
reset role;

delete from auth.users where id = 'f0000000-0000-0000-0000-000000000001';
select test.gleich((select count(*) from public.stack_eintraege where user_id = 'f0000000-0000-0000-0000-000000000001')::text, '0', 'Stack geht mit dem Konto');
