-- Lokaler Test für Migration 0003: Kommentare, Forum, Moderation, Benachrichtigungen, Punkte.
\set ON_ERROR_STOP 0
insert into auth.users (id, email) values
    ('d0000000-0000-0000-0000-000000000001', 'd1@x.de'),
    ('d0000000-0000-0000-0000-000000000002', 'd2@x.de'),
    ('d0000000-0000-0000-0000-000000000003', 'mod@x.de');
update public.profiles set handle = 'dora' where id = 'd0000000-0000-0000-0000-000000000001';
update public.profiles set handle = 'emil' where id = 'd0000000-0000-0000-0000-000000000002';
update public.profiles set handle = 'moni', rolle = 'moderator' where id = 'd0000000-0000-0000-0000-000000000003';
insert into public.wortfilter values ('casino');

set role authenticated;
select set_config('request.jwt.claim.sub', 'd0000000-0000-0000-0000-000000000001', false);
insert into public.comments (pfad, text) values ('/ratgeber/test', 'Toller Artikel, danke!');
select 'dora kommentar status=' || status from public.comments where text like 'Toller%';
\echo '--- erwarte Fehler: fremde user_id wird überschrieben, status nicht setzbar'
insert into public.comments (pfad, text, status) values ('/ratgeber/test', 'x', 'ausgeblendet');
insert into public.comments (pfad, text) values ('/ratgeber/test', 'Hier gibts Casino-Boni!');
select 'wortfilter status=' || status from public.comments where text like '%Casino%';
insert into public.forum_themen (kategorie_id, titel, text) values ('ki-tools', 'Welches Tool für Podcasts?', 'Suche ein KI-Tool für Schnitt.');
\echo '--- erwarte Fehler: Team-Kategorie'
insert into public.forum_themen (kategorie_id, titel, text) values ('ankuendigungen', 'Ich kündige was an', 'Hallo');
\echo '--- erwarte Fehler: Ratenlimit (5 in 10 Minuten)'
insert into public.comments (pfad, text) values ('/a', '3');
insert into public.comments (pfad, text) values ('/a', '4');
insert into public.comments (pfad, text) values ('/a', '5');

select set_config('request.jwt.claim.sub', 'd0000000-0000-0000-0000-000000000002', false);
select 'emil sieht wortfilter-kommentar=' || count(*) from public.comments where text like '%Casino%';
insert into public.comments (pfad, parent_id, text) select '/ratgeber/test', id, 'Finde ich auch, @dora!' from public.comments where text like 'Toller%';
\echo '--- erwarte Fehler: Antwort auf Antwort'
insert into public.comments (pfad, parent_id, text) select '/ratgeber/test', id, 'tief' from public.comments where text like 'Finde%';
\echo '--- erwarte Fehler: fremden Kommentar bearbeiten (0 Zeilen)'
update public.comments set text = 'gehackt' where text like 'Toller%';
select 'nach Angriff=' || text from public.comments where text like 'Toller%';
insert into public.forum_beitraege (thema_id, text) select id, 'Probier Tool X, das kann das.' from public.forum_themen where titel like 'Welches%';
insert into public.reaktionen (ziel_art, ziel_id, emoji) select 'kommentar', id, '👍' from public.comments where text like 'Toller%';
\echo '--- erwarte Fehler: Lösung markieren als Fremder'
select public.loesung_markieren((select id from public.forum_themen limit 1), (select id from public.forum_beitraege limit 1));
\echo '--- erwarte Fehler: moderieren ohne Rolle'
select public.moderieren('kommentar', (select id from public.comments where text like 'Toller%'), 'ausgeblendet', 'test');
insert into public.meldungen (ziel_art, ziel_id, grund, text) values ('kommentar', '1', 'spam', 'Werbung');
\echo '--- erwarte Fehler: Abzeichen selbst vergeben'
insert into public.badges (user_id, name) values ('d0000000-0000-0000-0000-000000000002', 'Problemlöser-Abzeichen');

select set_config('request.jwt.claim.sub', 'd0000000-0000-0000-0000-000000000001', false);
select 'dora benachrichtigungen=' || string_agg(art, ',' order by id) from public.benachrichtigungen;
select public.loesung_markieren((select id from public.forum_themen limit 1), (select id from public.forum_beitraege limit 1));
select 'thema geloest=' || (geloest_beitrag_id is not null) || ' antworten=' || antworten from public.forum_themen;
select public.alles_gelesen();
select 'ungelesen=' || count(*) from public.benachrichtigungen where not gelesen;
\echo '--- erwarte Fehler: benachrichtigung text ändern'
update public.benachrichtigungen set text = 'x';

select set_config('request.jwt.claim.sub', 'd0000000-0000-0000-0000-000000000003', false);
select 'mod sieht meldungen=' || count(*) from public.meldungen;
select 'mod sieht pruefen=' || count(*) from public.comments where status = 'pruefen';
select public.moderieren('kommentar', (select id from public.comments where text like '%Casino%'), 'ausgeblendet', 'Spam');
select public.meldung_entscheiden((select id from public.meldungen limit 1), 'erledigt', 'Ausgeblendet, danke!');
select public.sperren('d0000000-0000-0000-0000-000000000002', 7, 'Test-Sperre');
select 'log=' || string_agg(aktion, ',' order by id) from public.moderations_log;

select set_config('request.jwt.claim.sub', 'd0000000-0000-0000-0000-000000000002', false);
\echo '--- erwarte Fehler: gesperrt'
insert into public.comments (pfad, text) values ('/x', 'darf ich?');
select 'emil benachrichtigungen=' || string_agg(art, ',' order by id) from public.benachrichtigungen;
reset role;

set role anon;
select 'gast sieht kommentare=' || count(*) from public.comments;
\echo '--- erwarte Fehler: gast schreibt'
insert into public.comments (pfad, text) values ('/x', 'anonym');
reset role;

select 'punkte ' || string_agg(handle || ':' || punkte, ' ' order by handle) from public.profiles where handle in ('dora', 'emil', 'moni');
select 'abzeichen ' || string_agg(p.handle || ':' || b.name, ' ' order by p.handle, b.name) from public.badges b join public.profiles p on p.id = b.user_id where p.handle in ('dora', 'emil');
delete from auth.users where id = 'd0000000-0000-0000-0000-000000000001';
select 'nach löschen dora: kommentare ohne autor=' || count(*) from public.comments where user_id is null;
