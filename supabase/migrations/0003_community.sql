-- AIGeddon Community: Kommentare unter allen Inhalten, Forum, Reaktionen, Meldungen, Moderation,
-- Benachrichtigungen und Reputation. Autoren verweisen auf profiles; beim Löschen eines Kontos bleiben
-- Beiträge ohne Namen stehen (on delete set null).

-- ---------- Hilfsfunktionen ----------

-- Darf der angemeldete Nutzer gerade schreiben? (angemeldet und nicht gesperrt)
create or replace function public.darf_schreiben()
returns boolean language sql stable security definer set search_path = '' as $$
    select exists (
        select 1 from public.konten k
        where k.id = (select auth.uid()) and k.regeln_akzeptiert is not null and (k.gesperrt_bis is null or k.gesperrt_bis < now())
    )
$$;

-- Wortfilter: Treffer landen zur Prüfung bei der Moderation statt sofort sichtbar zu sein.
create table public.wortfilter (
    wort text primary key check (char_length(wort) between 2 and 60)
);

create or replace function public.braucht_pruefung(t text)
returns boolean language sql stable security definer set search_path = '' as $$
    select exists (select 1 from public.wortfilter w where t ilike '%' || w.wort || '%')
        or (select count(*) from regexp_matches(t, 'https?://', 'g')) > 3
$$;

-- Punkte gutschreiben (umgeht die Spaltenrechte, nur aus Triggern aufgerufen).
create or replace function public.punkte_plus(uid uuid, n integer)
returns void language sql security definer set search_path = '' as $$
    update public.profiles set punkte = greatest(0, punkte + n) where id = uid
$$;

-- Community-Abzeichen vergibt nur der Server.
create or replace function public.vergib_abzeichen(uid uuid, abzeichen text)
returns void language sql security definer set search_path = '' as $$
    insert into public.badges (user_id, name) values (uid, abzeichen) on conflict do nothing
$$;

create or replace function public.benachrichtige(empfaenger uuid, absender uuid, art_ text, link_ text, text_ text)
returns void language plpgsql security definer set search_path = '' as $$
begin
    if empfaenger is null or empfaenger = absender then
        return;
    end if;
    insert into public.benachrichtigungen (user_id, von, art, link, text) values (empfaenger, absender, art_, left(link_, 300), left(text_, 200));
end $$;

-- ---------- Tabellen ----------

create table public.comments (
    id bigint generated always as identity primary key,
    -- Nur Inhaltsbereiche der Seite, höchstens drei Ebenen tief (oder die Startseite).
    pfad text not null check (char_length(pfad) <= 300 and (pfad = '/' or pfad ~ '^/(ratgeber|ki-news|tutorials|tools|prompts|skills|verzeichnis|tool-vergleiche|ki-tools|glossar|rechner|ki-test|neue-ki-modelle|beste-ki-tools|deutsche-ki-verzeichnisse|liste|launch-kit|ki-verzeichnis|top-50|freischaltung|vergleich|tool-finder|prompt-baukasten|prompt-check|quiz|downloads|guides|neu-entdeckt|ueber-jean|so-pruefen-wir|werben|transparenz)(/[a-z0-9_.-]+){0,3}$')),
    parent_id bigint references public.comments (id) on delete cascade,
    user_id uuid references public.profiles (id) on delete set null default auth.uid(),
    text text not null check (char_length(text) between 1 and 2000),
    status text not null default 'sichtbar' check (status in ('sichtbar', 'pruefen', 'ausgeblendet', 'geloescht')),
    erstellt timestamptz not null default now(),
    bearbeitet timestamptz,
    belohnt boolean not null default false,
    -- Wann die Punkte vergeben wurden (für das Tageslimit, auch bei später Freigabe).
    belohnt_am timestamptz,
    -- Benachrichtigungen gehen pro Inhalt nur einmal raus, auch nach erneuter Prüfung und Freigabe.
    gemeldet boolean not null default false
);
create index comments_pfad_idx on public.comments (pfad, erstellt);
create index comments_user_idx on public.comments (user_id);
create index comments_parent_idx on public.comments (parent_id);

create table public.forum_kategorien (
    id text primary key check (id ~ '^[a-z0-9-]{2,40}$'),
    name text not null,
    beschreibung text not null default '',
    emoji text not null default '💬',
    sortierung integer not null default 0,
    gesponsert_von text,
    nur_team boolean not null default false
);

create table public.forum_themen (
    id bigint generated always as identity primary key,
    kategorie_id text not null references public.forum_kategorien (id),
    user_id uuid references public.profiles (id) on delete set null default auth.uid(),
    titel text not null check (char_length(titel) between 5 and 140),
    text text not null check (char_length(text) between 1 and 10000),
    status text not null default 'sichtbar' check (status in ('sichtbar', 'pruefen', 'ausgeblendet', 'geloescht')),
    angepinnt boolean not null default false,
    geschlossen boolean not null default false,
    geloest_beitrag_id bigint,
    antworten integer not null default 0,
    letzte_aktivitaet timestamptz not null default now(),
    erstellt timestamptz not null default now(),
    bearbeitet timestamptz,
    belohnt boolean not null default false,
    gemeldet boolean not null default false,
    suche tsvector generated always as (to_tsvector('german', titel || ' ' || text)) stored
);
create index forum_themen_kat_idx on public.forum_themen (kategorie_id, angepinnt desc, letzte_aktivitaet desc);
create index forum_themen_user_idx on public.forum_themen (user_id);
create index forum_themen_suche_idx on public.forum_themen using gin (suche);

create table public.forum_beitraege (
    id bigint generated always as identity primary key,
    thema_id bigint not null references public.forum_themen (id) on delete cascade,
    user_id uuid references public.profiles (id) on delete set null default auth.uid(),
    text text not null check (char_length(text) between 1 and 10000),
    status text not null default 'sichtbar' check (status in ('sichtbar', 'pruefen', 'ausgeblendet', 'geloescht')),
    erstellt timestamptz not null default now(),
    bearbeitet timestamptz,
    belohnt boolean not null default false,
    gemeldet boolean not null default false
);
create index forum_beitraege_thema_idx on public.forum_beitraege (thema_id, erstellt);
create index forum_beitraege_user_idx on public.forum_beitraege (user_id);

alter table public.forum_themen add constraint geloest_fk foreign key (geloest_beitrag_id) references public.forum_beitraege (id) on delete set null;

create table public.thema_abos (
    user_id uuid not null references public.profiles (id) on delete cascade default auth.uid(),
    thema_id bigint not null references public.forum_themen (id) on delete cascade,
    primary key (user_id, thema_id)
);
create index thema_abos_thema_idx on public.thema_abos (thema_id);

create table public.reaktionen (
    ziel_art text not null check (ziel_art in ('kommentar', 'thema', 'beitrag')),
    ziel_id bigint not null,
    user_id uuid not null references public.profiles (id) on delete cascade default auth.uid(),
    emoji text not null check (emoji in ('👍', '❤️', '💡', '😂', '🎉')),
    erstellt timestamptz not null default now(),
    primary key (ziel_art, ziel_id, user_id, emoji)
);
create index reaktionen_user_idx on public.reaktionen (user_id);

create table public.meldungen (
    id bigint generated always as identity primary key,
    ziel_art text not null check (ziel_art in ('kommentar', 'thema', 'beitrag', 'profil')),
    ziel_id text not null check (char_length(ziel_id) <= 60),
    grund text not null check (grund in ('beleidigung', 'spam', 'rechtswidrig', 'persoenliche-daten', 'falschinformation', 'urheberrecht', 'sonstiges')),
    text text not null default '' check (char_length(text) <= 500),
    melder uuid references public.profiles (id) on delete set null default auth.uid(),
    status text not null default 'offen' check (status in ('offen', 'erledigt', 'abgelehnt')),
    entscheidung text not null default '' check (char_length(entscheidung) <= 500),
    erledigt_von uuid references public.profiles (id) on delete set null,
    erledigt_am timestamptz,
    erstellt timestamptz not null default now()
);
create index meldungen_status_idx on public.meldungen (status, erstellt);
-- Pro Person höchstens eine offene Meldung je Inhalt.
create unique index meldungen_einmal_idx on public.meldungen (melder, ziel_art, ziel_id) where status = 'offen';
create index meldungen_melder_idx on public.meldungen (melder);
create index meldungen_erledigt_von_idx on public.meldungen (erledigt_von);

create table public.moderations_log (
    id bigint generated always as identity primary key,
    moderator uuid references public.profiles (id) on delete set null,
    aktion text not null,
    ziel_art text not null,
    ziel_id text not null,
    grund text not null default '',
    zeit timestamptz not null default now()
);
create index moderations_log_moderator_idx on public.moderations_log (moderator);

create table public.benachrichtigungen (
    id bigint generated always as identity primary key,
    user_id uuid not null references public.profiles (id) on delete cascade,
    von uuid references public.profiles (id) on delete set null,
    art text not null check (art in ('antwort', 'erwaehnung', 'loesung', 'moderation', 'abzeichen')),
    link text not null,
    text text not null,
    gelesen boolean not null default false,
    erstellt timestamptz not null default now()
);
create index benachrichtigungen_user_idx on public.benachrichtigungen (user_id, gelesen, erstellt desc);
create index benachrichtigungen_von_idx on public.benachrichtigungen (von);

-- ---------- Trigger: Schreibschutz, Ratenlimit, Prüfung ----------

create or replace function public.vor_inhalt()
returns trigger language plpgsql security definer set search_path = '' as $$
declare
    anzahl integer;
    pruef_text text;
begin
    if tg_op = 'INSERT' then
        new.user_id := (select auth.uid());
        -- Gleichzeitige Anfragen desselben Kontos nacheinander prüfen, damit das Ratenlimit nicht umgangen wird.
        perform pg_advisory_xact_lock(hashtext('aigeddon-inhalt-' || coalesce(new.user_id::text, '')));
        new.erstellt := now();
        if not exists (select 1 from public.konten k where k.id = new.user_id and k.regeln_akzeptiert is not null) then
            raise exception 'regeln_fehlen' using errcode = 'P0001';
        end if;
        if not public.darf_schreiben() then
            raise exception 'schreiben_gesperrt' using errcode = 'P0001';
        end if;
        select (select count(*) from public.comments where user_id = new.user_id and erstellt > now() - interval '10 minutes')
             + (select count(*) from public.forum_beitraege where user_id = new.user_id and erstellt > now() - interval '10 minutes')
             + (select count(*) from public.forum_themen where user_id = new.user_id and erstellt > now() - interval '10 minutes')
          into anzahl;
        if anzahl >= 5 then
            raise exception 'zu_schnell' using errcode = 'P0001';
        end if;
        new.status := 'sichtbar';
    else
        -- Nutzer dürfen nur den Text ändern, und nur 15 Minuten lang. Status ändert nur die Moderation (RPC).
        if not public.darf_schreiben() then
            raise exception 'schreiben_gesperrt' using errcode = 'P0001';
        end if;
        if new.erstellt < now() - interval '15 minutes' then
            raise exception 'bearbeiten_abgelaufen' using errcode = 'P0001';
        end if;
        new.bearbeitet := now();
    end if;
    pruef_text := new.text;
    if tg_table_name = 'forum_themen' then
        pruef_text := new.titel || ' ' || new.text;
    end if;
    if public.braucht_pruefung(pruef_text) then
        new.status := 'pruefen';
    end if;
    return new;
end $$;

create trigger comments_vor before insert or update of text on public.comments for each row execute function public.vor_inhalt();
create trigger themen_vor before insert or update of titel, text on public.forum_themen for each row execute function public.vor_inhalt();
create trigger beitraege_vor before insert or update of text on public.forum_beitraege for each row execute function public.vor_inhalt();

-- Meldungen: höchstens 10 pro Stunde und Konto, gleichzeitige Anfragen nacheinander.
create or replace function public.meldung_vor()
returns trigger language plpgsql security definer set search_path = '' as $$
begin
    new.melder := (select auth.uid());
    perform pg_advisory_xact_lock(hashtext('aigeddon-meldung-' || coalesce(new.melder::text, '')));
    if (select count(*) from public.meldungen where melder = new.melder and erstellt > now() - interval '1 hour') >= 10 then
        raise exception 'zu_schnell' using errcode = 'P0001';
    end if;
    new.status := 'offen';
    new.erstellt := now();
    return new;
end $$;

-- Antworten nur eine Ebene tief und nur auf derselben Seite.
create or replace function public.kommentar_ebene()
returns trigger language plpgsql set search_path = '' as $$
declare
    eltern record;
begin
    if new.parent_id is not null then
        select pfad, parent_id into eltern from public.comments where id = new.parent_id;
        if eltern is null or eltern.parent_id is not null or eltern.pfad <> new.pfad then
            raise exception 'antwort_ungueltig' using errcode = 'P0001';
        end if;
    end if;
    return new;
end $$;
create trigger comments_ebene before insert on public.comments for each row execute function public.kommentar_ebene();
create trigger meldungen_vor before insert on public.meldungen for each row execute function public.meldung_vor();

-- In geschlossenen Themen und in Team-Kategorien darf nicht jeder schreiben.
create or replace function public.beitrag_erlaubt()
returns trigger language plpgsql security definer set search_path = '' as $$
begin
    if exists (select 1 from public.forum_themen t where t.id = new.thema_id and (t.geschlossen or t.status <> 'sichtbar')) and not public.ist_moderator() then
        raise exception 'thema_geschlossen' using errcode = 'P0001';
    end if;
    return new;
end $$;
create trigger beitraege_erlaubt before insert on public.forum_beitraege for each row execute function public.beitrag_erlaubt();

create or replace function public.thema_erlaubt()
returns trigger language plpgsql security definer set search_path = '' as $$
begin
    if exists (select 1 from public.forum_kategorien k where k.id = new.kategorie_id and k.nur_team) and not public.ist_moderator() then
        raise exception 'nur_team' using errcode = 'P0001';
    end if;
    new.angepinnt := false;
    new.geschlossen := false;
    new.geloest_beitrag_id := null;
    new.antworten := 0;
    new.letzte_aktivitaet := now();
    return new;
end $$;
create trigger themen_erlaubt before insert on public.forum_themen for each row execute function public.thema_erlaubt();

-- ---------- Trigger: Zähler, Punkte, Abzeichen, Benachrichtigungen ----------

-- Belohnungen und Benachrichtigungen hängen an der Sichtbarkeit: Punkte gibt es, sobald ein Inhalt sichtbar wird,
-- und sie werden wieder abgezogen, wenn er ausgeblendet oder zurückgezogen wird. Benachrichtigungen gehen raus,
-- sobald ein Inhalt erstmals sichtbar ist (direkt oder nach Freigabe durch die Moderation).

create or replace function public.melde_kommentar(k public.comments)
returns void language plpgsql security definer set search_path = '' as $$
declare
    eltern_autor uuid;
    erwaehnt record;
begin
    if k.parent_id is not null then
        select user_id into eltern_autor from public.comments where id = k.parent_id;
        perform public.benachrichtige(eltern_autor, k.user_id, 'antwort', k.pfad || '#kommentar-' || k.id, 'hat auf deinen Kommentar geantwortet');
    end if;
    for erwaehnt in
        select distinct p.id from public.profiles p
        where p.handle in (select lower(m[1]) from regexp_matches(k.text, '@([a-zA-Z0-9_]{3,24})', 'g') as m)
        limit 5
    loop
        perform public.benachrichtige(erwaehnt.id, k.user_id, 'erwaehnung', k.pfad || '#kommentar-' || k.id, 'hat dich in einem Kommentar erwähnt');
    end loop;
end $$;

create or replace function public.melde_beitrag(b public.forum_beitraege)
returns void language plpgsql security definer set search_path = '' as $$
declare
    abo record;
    erwaehnt record;
    link_ text;
begin
    link_ := '/forum/thema?id=' || b.thema_id || '#beitrag-' || b.id;
    for abo in select user_id from public.thema_abos where thema_id = b.thema_id loop
        perform public.benachrichtige(abo.user_id, b.user_id, 'antwort', link_, 'hat in einem Thema geantwortet, dem du folgst');
    end loop;
    for erwaehnt in
        select distinct p.id from public.profiles p
        where p.handle in (select lower(m[1]) from regexp_matches(b.text, '@([a-zA-Z0-9_]{3,24})', 'g') as m)
        limit 5
    loop
        perform public.benachrichtige(erwaehnt.id, b.user_id, 'erwaehnung', link_, 'hat dich im Forum erwähnt');
    end loop;
end $$;

-- Gemeinsamer Trigger nach Insert und jedem Update für alle drei Inhaltstabellen (auch wenn ein Bearbeiten den Status ändert).
create or replace function public.nach_inhalt()
returns trigger language plpgsql security definer set search_path = '' as $$
declare
    wert integer := case when tg_table_name = 'forum_themen' then 2 else 1 end;
    war_sichtbar boolean := tg_op = 'UPDATE' and old.status = 'sichtbar';
    ist_sichtbar boolean := new.status = 'sichtbar';
    erstmals boolean := ist_sichtbar and not new.gemeldet and (tg_op = 'INSERT' or old.status <> 'sichtbar');
begin
    if tg_op = 'INSERT' and new.user_id is not null then
        if tg_table_name = 'forum_beitraege' then
            insert into public.thema_abos (user_id, thema_id) values (new.user_id, new.thema_id) on conflict do nothing;
        elsif tg_table_name = 'forum_themen' then
            insert into public.thema_abos (user_id, thema_id) values (new.user_id, new.id) on conflict do nothing;
        end if;
    end if;
    -- Antwortzähler und Aktivität zählen nur sichtbare Antworten.
    if tg_table_name = 'forum_beitraege' then
        if ist_sichtbar and not war_sichtbar then
            update public.forum_themen set antworten = antworten + 1, letzte_aktivitaet = now() where id = new.thema_id;
        elsif war_sichtbar and not ist_sichtbar then
            update public.forum_themen t set antworten = greatest(0, t.antworten - 1),
                letzte_aktivitaet = coalesce((select max(b.erstellt) from public.forum_beitraege b where b.thema_id = new.thema_id and b.status = 'sichtbar' and b.id <> new.id), t.erstellt)
            where t.id = new.thema_id;
            -- War die Antwort als Lösung markiert, wird die Markierung samt Bonus zurückgenommen.
            update public.forum_themen t set geloest_beitrag_id = null where t.id = new.thema_id and t.geloest_beitrag_id = new.id;
            if found and new.user_id is not null and new.user_id is distinct from (select user_id from public.forum_themen where id = new.thema_id) then
                perform public.punkte_plus(new.user_id, -15);
            end if;
        end if;
    end if;
    -- Punkte: vergeben beim Sichtbarwerden, zurück nur, wenn sie für diesen Inhalt auch vergeben wurden (Spalte belohnt).
    -- Kommentare bringen höchstens 10 Punkte pro Tag, damit sich die Bestenliste nicht mit Masse füllen lässt.
    -- Gelöschte Konten (user_id null) bekommen keine Punkte und Abzeichen mehr, Benachrichtigungen gehen trotzdem raus.
    if new.user_id is not null then
        if ist_sichtbar and not war_sichtbar and not new.belohnt then
            if tg_table_name <> 'comments'
                or (select count(*) from public.comments c where c.user_id = new.user_id and c.belohnt and c.belohnt_am > now() - interval '1 day') < 10 then
                perform public.punkte_plus(new.user_id, wert);
                if tg_table_name = 'comments' then
                    update public.comments set belohnt = true, belohnt_am = now() where id = new.id;
                else
                    execute format('update public.%I set belohnt = true where id = $1', tg_table_name) using new.id;
                end if;
            end if;
        elsif war_sichtbar and not ist_sichtbar and new.belohnt then
            perform public.punkte_plus(new.user_id, -wert);
            execute format('update public.%I set belohnt = false where id = $1', tg_table_name) using new.id;
        end if;
    end if;
    if erstmals then
        execute format('update public.%I set gemeldet = true where id = $1', tg_table_name) using new.id;
    end if;
    if erstmals and new.user_id is null then
        if tg_table_name = 'comments' then
            perform public.melde_kommentar(new::public.comments);
        elsif tg_table_name = 'forum_beitraege' then
            perform public.melde_beitrag(new::public.forum_beitraege);
        end if;
    elsif erstmals then
        if tg_table_name = 'comments' then
            perform public.vergib_abzeichen(new.user_id, 'Erster-Kommentar-Abzeichen');
            perform public.melde_kommentar(new::public.comments);
        elsif tg_table_name = 'forum_themen' then
            perform public.vergib_abzeichen(new.user_id, 'Forums-Starter-Abzeichen');
        else
            perform public.melde_beitrag(new::public.forum_beitraege);
        end if;
    end if;
    return null;
end $$;

create trigger comments_nach after insert or update on public.comments for each row execute function public.nach_inhalt();
create trigger themen_nach after insert or update on public.forum_themen for each row execute function public.nach_inhalt();
create trigger beitraege_nach after insert or update on public.forum_beitraege for each row execute function public.nach_inhalt();

-- Reaktionen: Punkte für die Autorin oder den Autor, Abzeichen ab 10 erhaltenen Reaktionen.
create or replace function public.nach_reaktion()
returns trigger language plpgsql security definer set search_path = '' as $$
declare
    autor uuid;
    erhalten integer;
    r record;
begin
    if tg_op = 'DELETE' then
        r := old;
    else
        r := new;
    end if;
    if r.ziel_art = 'kommentar' then
        select user_id into autor from public.comments where id = r.ziel_id;
    elsif r.ziel_art = 'thema' then
        select user_id into autor from public.forum_themen where id = r.ziel_id;
    else
        select user_id into autor from public.forum_beitraege where id = r.ziel_id;
    end if;
    if autor is null or autor = r.user_id then
        return null;
    end if;
    if tg_op = 'DELETE' then
        perform public.punkte_plus(autor, -1);
        return null;
    end if;
    perform public.punkte_plus(autor, 1);
    select count(*) into erhalten from public.reaktionen re
    where (re.ziel_art = 'kommentar' and re.ziel_id in (select id from public.comments where user_id = autor))
       or (re.ziel_art = 'thema' and re.ziel_id in (select id from public.forum_themen where user_id = autor))
       or (re.ziel_art = 'beitrag' and re.ziel_id in (select id from public.forum_beitraege where user_id = autor));
    if erhalten >= 10 then
        perform public.vergib_abzeichen(autor, 'Hilfsbereit-Abzeichen');
    end if;
    return null;
end $$;
create trigger reaktionen_nach after insert or delete on public.reaktionen for each row execute function public.nach_reaktion();

-- Reaktionen nur auf existierende, sichtbare Inhalte.
create or replace function public.reaktion_gueltig()
returns trigger language plpgsql security definer set search_path = '' as $$
begin
    new.user_id := (select auth.uid());
    if not public.darf_schreiben() then
        raise exception 'schreiben_gesperrt' using errcode = 'P0001';
    end if;
    if (new.ziel_art = 'kommentar' and not exists (select 1 from public.comments where id = new.ziel_id and status = 'sichtbar'))
        or (new.ziel_art = 'thema' and not exists (select 1 from public.forum_themen where id = new.ziel_id and status = 'sichtbar'))
        or (new.ziel_art = 'beitrag' and not exists (
            select 1 from public.forum_beitraege b join public.forum_themen t on t.id = b.thema_id
            where b.id = new.ziel_id and b.status = 'sichtbar' and t.status = 'sichtbar')) then
        raise exception 'ziel_fehlt' using errcode = 'P0001';
    end if;
    return new;
end $$;
create trigger reaktionen_vor before insert on public.reaktionen for each row execute function public.reaktion_gueltig();

-- ---------- RPCs für Nutzer ----------

-- Eigenen Kommentar oder Beitrag zurückziehen (Text wird entfernt, die Stelle bleibt für Antworten erkennbar).
create or replace function public.eigenes_loeschen(art_ text, id_ bigint)
returns void language plpgsql security definer set search_path = '' as $$
begin
    if art_ = 'kommentar' then
        update public.comments set status = 'geloescht' where id = id_ and user_id = (select auth.uid());
    elsif art_ = 'beitrag' then
        update public.forum_beitraege set status = 'geloescht' where id = id_ and user_id = (select auth.uid());
    elsif art_ = 'thema' then
        update public.forum_themen set status = 'geloescht' where id = id_ and user_id = (select auth.uid());
    end if;
end $$;

-- Lösung markieren: durch die Person, die das Thema gestartet hat, oder die Moderation.
create or replace function public.loesung_markieren(thema bigint, beitrag bigint)
returns void language plpgsql security definer set search_path = '' as $$
declare
    t record;
    autor uuid;
begin
    select * into t from public.forum_themen where id = thema for update;
    if t is null or (t.user_id is distinct from (select auth.uid()) and not public.ist_moderator()) then
        raise exception 'nicht_erlaubt' using errcode = 'P0001';
    end if;
    select user_id into autor from public.forum_beitraege where id = beitrag and thema_id = thema and status = 'sichtbar';
    if not found then
        raise exception 'beitrag_fehlt' using errcode = 'P0001';
    end if;
    if t.geloest_beitrag_id is not null then
        if (select user_id from public.forum_beitraege where id = t.geloest_beitrag_id) is distinct from t.user_id then
            perform public.punkte_plus((select user_id from public.forum_beitraege where id = t.geloest_beitrag_id), -15);
        end if;
    end if;
    update public.forum_themen set geloest_beitrag_id = beitrag where id = thema;
    if autor is not null and autor is distinct from t.user_id then
        perform public.punkte_plus(autor, 15);
        perform public.vergib_abzeichen(autor, 'Problemlöser-Abzeichen');
    end if;
    perform public.benachrichtige(autor, (select auth.uid()), 'loesung', '/forum/thema?id=' || thema || '#beitrag-' || beitrag, 'hat deine Antwort als Lösung markiert');
end $$;

-- Alle eigenen Benachrichtigungen als gelesen markieren.
create or replace function public.alles_gelesen()
returns void language sql security definer set search_path = '' as $$
    update public.benachrichtigungen set gelesen = true where user_id = (select auth.uid()) and not gelesen
$$;

-- ---------- RPCs für die Moderation ----------

create or replace function public.moderieren(art_ text, id_ bigint, neuer_status text, grund_ text)
returns void language plpgsql security definer set search_path = '' as $$
declare
    autor uuid;
begin
    if not public.ist_moderator() then
        raise exception 'nicht_erlaubt' using errcode = 'P0001';
    end if;
    if neuer_status not in ('sichtbar', 'ausgeblendet') then
        raise exception 'status_ungueltig' using errcode = 'P0001';
    end if;
    -- Freigeben nur, wenn der umgebende Kommentar oder das Thema selbst sichtbar ist.
    if neuer_status = 'sichtbar' and (
        (art_ = 'kommentar' and exists (select 1 from public.comments c join public.comments e on e.id = c.parent_id where c.id = id_ and e.status <> 'sichtbar'))
        or (art_ = 'beitrag' and exists (select 1 from public.forum_beitraege b join public.forum_themen t on t.id = b.thema_id where b.id = id_ and t.status <> 'sichtbar'))) then
        raise exception 'eltern_verborgen' using errcode = 'P0001';
    end if;
    if art_ = 'kommentar' then
        update public.comments set status = neuer_status where id = id_ returning user_id into autor;
    elsif art_ = 'beitrag' then
        update public.forum_beitraege set status = neuer_status where id = id_ returning user_id into autor;
    elsif art_ = 'thema' then
        update public.forum_themen set status = neuer_status where id = id_ returning user_id into autor;
    else
        raise exception 'art_ungueltig' using errcode = 'P0001';
    end if;
    insert into public.moderations_log (moderator, aktion, ziel_art, ziel_id, grund) values ((select auth.uid()), neuer_status, art_, id_::text, left(grund_, 500));
    if neuer_status = 'ausgeblendet' then
        perform public.benachrichtige(autor, null, 'moderation', '/community-regeln', left('Ein Beitrag von dir wurde ausgeblendet: ' || grund_, 200));
    end if;
end $$;

create or replace function public.thema_verwalten(id_ bigint, angepinnt_ boolean, geschlossen_ boolean)
returns void language plpgsql security definer set search_path = '' as $$
begin
    if not public.ist_moderator() then
        raise exception 'nicht_erlaubt' using errcode = 'P0001';
    end if;
    update public.forum_themen set angepinnt = angepinnt_, geschlossen = geschlossen_ where id = id_;
    insert into public.moderations_log (moderator, aktion, ziel_art, ziel_id) values ((select auth.uid()), 'verwalten', 'thema', id_::text);
end $$;

create or replace function public.meldung_entscheiden(id_ bigint, status_ text, entscheidung_ text)
returns void language plpgsql security definer set search_path = '' as $$
declare
    m record;
begin
    if not public.ist_moderator() then
        raise exception 'nicht_erlaubt' using errcode = 'P0001';
    end if;
    if status_ not in ('erledigt', 'abgelehnt') then
        raise exception 'status_ungueltig' using errcode = 'P0001';
    end if;
    update public.meldungen set status = status_, entscheidung = left(entscheidung_, 500), erledigt_von = (select auth.uid()), erledigt_am = now()
    where id = id_ and status = 'offen' returning * into m;
    if not found then
        raise exception 'meldung_schon_erledigt' using errcode = 'P0001';
    end if;
    insert into public.moderations_log (moderator, aktion, ziel_art, ziel_id, grund) values ((select auth.uid()), 'meldung_' || status_, 'meldung', id_::text, left(entscheidung_, 500));
    perform public.benachrichtige(m.melder, null, 'moderation', '/community-regeln', left('Deine Meldung wurde geprüft: ' || entscheidung_, 200));
end $$;

-- Gemeldeten Inhalt ausblenden und die Meldung im selben Schritt erledigen. Schlägt eins fehl, passiert keins.
create or replace function public.meldung_ausblenden(id_ bigint, entscheidung_ text)
returns void language plpgsql security definer set search_path = '' as $$
declare
    m record;
begin
    if not public.ist_moderator() then
        raise exception 'nicht_erlaubt' using errcode = 'P0001';
    end if;
    select * into m from public.meldungen where id = id_ and status = 'offen' for update;
    if m is null or m.ziel_art not in ('kommentar', 'beitrag', 'thema') then
        raise exception 'meldung_ungueltig' using errcode = 'P0001';
    end if;
    perform public.moderieren(m.ziel_art, m.ziel_id::bigint, 'ausgeblendet', m.grund);
    perform public.meldung_entscheiden(id_, 'erledigt', entscheidung_);
end $$;
revoke execute on function public.meldung_ausblenden(bigint, text) from public, anon;

create or replace function public.sperren(uid uuid, tage integer, grund_ text)
returns void language plpgsql security definer set search_path = '' as $$
begin
    if not public.ist_moderator() then
        raise exception 'nicht_erlaubt' using errcode = 'P0001';
    end if;
    if exists (select 1 from public.profiles where id = uid and rolle in ('moderator', 'admin')) and not public.ist_admin() then
        raise exception 'nicht_erlaubt' using errcode = 'P0001';
    end if;
    update public.konten set gesperrt_bis = case when tage <= 0 then null else now() + make_interval(days => least(tage, 3650)) end where id = uid;
    insert into public.moderations_log (moderator, aktion, ziel_art, ziel_id, grund)
    values ((select auth.uid()), case when tage <= 0 then 'entsperrt' else 'gesperrt_' || tage || '_tage' end, 'profil', uid::text, left(grund_, 500));
    perform public.benachrichtige(uid, null, 'moderation', '/community-regeln',
        case when tage <= 0 then 'Du kannst wieder schreiben. Willkommen zurück!' else left('Schreiben ist für ' || tage || ' Tage gesperrt: ' || grund_, 200) end);
end $$;

create or replace function public.rolle_setzen(uid uuid, rolle_ text)
returns void language plpgsql security definer set search_path = '' as $$
begin
    if not public.ist_admin() then
        raise exception 'nicht_erlaubt' using errcode = 'P0001';
    end if;
    update public.profiles set rolle = rolle_ where id = uid;
    insert into public.moderations_log (moderator, aktion, ziel_art, ziel_id) values ((select auth.uid()), 'rolle_' || rolle_, 'profil', uid::text);
end $$;

-- Interne Funktionen nicht über die API aufrufbar machen.
revoke execute on function public.punkte_plus(uuid, integer) from public, anon, authenticated;
revoke execute on function public.vergib_abzeichen(uuid, text) from public, anon, authenticated;
revoke execute on function public.benachrichtige(uuid, uuid, text, text, text) from public, anon, authenticated;
revoke execute on function public.braucht_pruefung(text) from public, anon, authenticated;
revoke execute on function public.vor_inhalt() from public, anon, authenticated;
revoke execute on function public.kommentar_ebene() from public, anon, authenticated;
revoke execute on function public.beitrag_erlaubt() from public, anon, authenticated;
revoke execute on function public.thema_erlaubt() from public, anon, authenticated;
revoke execute on function public.nach_inhalt() from public, anon, authenticated;
revoke execute on function public.melde_kommentar(public.comments) from public, anon, authenticated;
revoke execute on function public.melde_beitrag(public.forum_beitraege) from public, anon, authenticated;
revoke execute on function public.nach_reaktion() from public, anon, authenticated;
revoke execute on function public.reaktion_gueltig() from public, anon, authenticated;
revoke execute on function public.meldung_vor() from public, anon, authenticated;
revoke execute on function public.eigenes_loeschen(text, bigint) from public, anon;
revoke execute on function public.loesung_markieren(bigint, bigint) from public, anon;
revoke execute on function public.alles_gelesen() from public, anon;
revoke execute on function public.moderieren(text, bigint, text, text) from public, anon;
revoke execute on function public.thema_verwalten(bigint, boolean, boolean) from public, anon;
revoke execute on function public.meldung_entscheiden(bigint, text, text) from public, anon;
revoke execute on function public.sperren(uuid, integer, text) from public, anon;
revoke execute on function public.rolle_setzen(uuid, text) from public, anon;
revoke execute on function public.darf_schreiben() from public, anon;

-- ---------- RLS ----------

alter table public.wortfilter enable row level security;
alter table public.comments enable row level security;
alter table public.forum_kategorien enable row level security;
alter table public.forum_themen enable row level security;
alter table public.forum_beitraege enable row level security;
alter table public.thema_abos enable row level security;
alter table public.reaktionen enable row level security;
alter table public.meldungen enable row level security;
alter table public.moderations_log enable row level security;
alter table public.benachrichtigungen enable row level security;

create policy "Wortfilter nur Moderation" on public.wortfilter for all to authenticated
    using ((select public.ist_moderator())) with check ((select public.ist_moderator()));

-- Inhalte: sichtbare lesen alle; eigene und die der Moderation sieht man immer.
create policy "Kommentare lesen" on public.comments for select
    using (status = 'sichtbar' or user_id = (select auth.uid()) or (select public.ist_moderator()));
create policy "Kommentar schreiben" on public.comments for insert to authenticated
    with check (user_id = (select auth.uid()));
create policy "Eigenen Kommentar bearbeiten" on public.comments for update to authenticated
    using (user_id = (select auth.uid()) and status in ('sichtbar', 'pruefen')) with check (user_id = (select auth.uid()));

create policy "Kategorien lesen" on public.forum_kategorien for select using (true);
create policy "Kategorien verwalten" on public.forum_kategorien for all to authenticated
    using ((select public.ist_admin())) with check ((select public.ist_admin()));

create policy "Themen lesen" on public.forum_themen for select
    using (status = 'sichtbar' or user_id = (select auth.uid()) or (select public.ist_moderator()));
create policy "Thema starten" on public.forum_themen for insert to authenticated
    with check (user_id = (select auth.uid()));
create policy "Eigenes Thema bearbeiten" on public.forum_themen for update to authenticated
    using (user_id = (select auth.uid()) and status in ('sichtbar', 'pruefen')) with check (user_id = (select auth.uid()));

create policy "Beiträge lesen" on public.forum_beitraege for select
    using (
        (status = 'sichtbar' and exists (select 1 from public.forum_themen t where t.id = forum_beitraege.thema_id and t.status = 'sichtbar'))
        or user_id = (select auth.uid())
        or (select public.ist_moderator())
    );
create policy "Beitrag schreiben" on public.forum_beitraege for insert to authenticated
    with check (user_id = (select auth.uid()));
create policy "Eigenen Beitrag bearbeiten" on public.forum_beitraege for update to authenticated
    using (user_id = (select auth.uid()) and status in ('sichtbar', 'pruefen')) with check (user_id = (select auth.uid()));

-- Nutzer ändern nur Texte; Status, Zähler und Moderationsfelder setzen Trigger und RPCs.
revoke insert, update on public.comments from anon, authenticated;
grant insert (pfad, parent_id, text) on public.comments to authenticated;
grant update (text) on public.comments to authenticated;
revoke insert, update on public.forum_themen from anon, authenticated;
grant insert (kategorie_id, titel, text) on public.forum_themen to authenticated;
grant update (titel, text) on public.forum_themen to authenticated;
revoke insert, update on public.forum_beitraege from anon, authenticated;
grant insert (thema_id, text) on public.forum_beitraege to authenticated;
grant update (text) on public.forum_beitraege to authenticated;
revoke delete on public.comments, public.forum_themen, public.forum_beitraege from anon, authenticated;

create policy "Eigene Abos lesen" on public.thema_abos for select to authenticated using (user_id = (select auth.uid()));
create policy "Thema folgen" on public.thema_abos for insert to authenticated with check (user_id = (select auth.uid()));
create policy "Thema entfolgen" on public.thema_abos for delete to authenticated using (user_id = (select auth.uid()));

create policy "Reaktionen lesen" on public.reaktionen for select using (true);
create policy "Reagieren" on public.reaktionen for insert to authenticated with check (user_id = (select auth.uid()));
create policy "Reaktion zurücknehmen" on public.reaktionen for delete to authenticated using (user_id = (select auth.uid()));
revoke update on public.reaktionen from anon, authenticated;

create policy "Melden" on public.meldungen for insert to authenticated with check (melder = (select auth.uid()));
create policy "Eigene Meldungen und Moderation lesen" on public.meldungen for select to authenticated
    using (melder = (select auth.uid()) or (select public.ist_moderator()));
revoke insert, update on public.meldungen from anon, authenticated;
grant insert (ziel_art, ziel_id, grund, text) on public.meldungen to authenticated;

create policy "Protokoll für Moderation" on public.moderations_log for select to authenticated using ((select public.ist_moderator()));
revoke insert, update, delete on public.moderations_log from anon, authenticated;

create policy "Eigene Benachrichtigungen lesen" on public.benachrichtigungen for select to authenticated using (user_id = (select auth.uid()));
create policy "Eigene Benachrichtigungen als gelesen markieren" on public.benachrichtigungen for update to authenticated
    using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));
revoke insert, update, delete on public.benachrichtigungen from anon, authenticated;
grant update (gelesen) on public.benachrichtigungen to authenticated;

-- Community-Abzeichen stehen nicht in der Liste der selbst eintragbaren Abzeichen (Migration 0001), sie vergibt nur vergib_abzeichen().

-- ---------- Startdaten ----------

insert into public.forum_kategorien (id, name, beschreibung, emoji, sortierung, nur_team) values
    ('ankuendigungen', 'Ankündigungen', 'Neuigkeiten vom AIGeddon-Team', '📣', 0, true),
    ('vorstellung', 'Stell dich vor', 'Wer bist du, woran arbeitest du, welche KI-Tools nutzt du?', '👋', 10, false),
    ('ki-tools', 'KI-Tools und Erfahrungen', 'Welches Tool taugt wofür? Erfahrungen, Vergleiche, Alternativen.', '🛠️', 20, false),
    ('prompts', 'Prompts und Skills', 'Prompts teilen, verbessern und Skills für ChatGPT, Claude und Gemini.', '💬', 30, false),
    ('launch', 'Launch und Verzeichnisse', 'Tool eintragen, Backlinks, Product Hunt, Erfahrungen mit Verzeichnissen.', '🚀', 40, false),
    ('ki-im-job', 'KI im Job', 'Automatisierung, Teams, Richtlinien, Recht und Datenschutz im Arbeitsalltag.', '💼', 50, false),
    ('hilfe', 'Hilfe und Feedback zur Seite', 'Fehler gefunden, Wunsch an AIGeddon? Hier rein.', '🧯', 60, false);
