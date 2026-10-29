-- AIGeddon Konten: Profile, Merkliste, Abzeichen, Einwilligungen. Jede Tabelle mit RLS.

create table public.profiles (
    id uuid primary key references auth.users (id) on delete cascade,
    handle text not null unique check (handle ~ '^[a-z0-9_]{3,24}$'),
    anzeigename text not null default 'Neues Mitglied' check (char_length(anzeigename) between 1 and 40),
    avatar_pfad text,
    banner_pfad text,
    banner_verlauf text not null default 'sonne' check (banner_verlauf in ('sonne', 'meer', 'wald', 'nacht', 'beere', 'atom')),
    akzent text not null default '' check (akzent in ('', 'blau', 'gruen', 'lila')),
    oeffentlich boolean not null default true,
    rolle text not null default 'nutzer' check (rolle in ('nutzer', 'moderator', 'admin')),
    punkte integer not null default 0,
    erstellt timestamptz not null default now(),
    geaendert timestamptz not null default now()
);

-- Angaben, die bei privaten Profilen verborgen bleiben.
create table public.profil_details (
    id uuid primary key references public.profiles (id) on delete cascade,
    bio text not null default '' check (char_length(bio) <= 300),
    beruf text not null default '' check (char_length(beruf) <= 60),
    pronomen text not null default '' check (char_length(pronomen) <= 20),
    links jsonb not null default '[]'::jsonb check (jsonb_typeof(links) = 'array' and jsonb_array_length(links) <= 3)
);

-- Nur für den Nutzer selbst: Einwilligungen, Segment, Plan und Sperre. Plan und Sperre setzt nur der Server.
create table public.konten (
    id uuid primary key references auth.users (id) on delete cascade,
    newsletter boolean not null default false,
    angebote boolean not null default false,
    segment jsonb not null default '{}'::jsonb,
    plan text not null default 'gratis' check (plan in ('gratis', 'pro', 'team')),
    gesperrt_bis timestamptz,
    geaendert timestamptz not null default now()
);

-- Nachweis jeder Einwilligung. Wird ausschließlich per Trigger geschrieben, nie direkt vom Browser.
create table public.einwilligungs_log (
    id bigint generated always as identity primary key,
    user_id uuid not null references auth.users (id) on delete cascade,
    art text not null check (art in ('konto', 'newsletter', 'angebote')),
    erteilt boolean not null,
    zeit timestamptz not null default now()
);

create table public.saved_items (
    user_id uuid not null references auth.users (id) on delete cascade,
    art text not null check (art in ('merk', 'herz', 'verlauf', 'gelesen')),
    pfad text not null check (char_length(pfad) <= 300),
    titel text not null default '' check (char_length(titel) <= 200),
    zeit timestamptz not null default now(),
    primary key (user_id, art, pfad)
);

create table public.badges (
    user_id uuid not null references auth.users (id) on delete cascade,
    name text not null check (char_length(name) <= 60),
    zeit timestamptz not null default now(),
    primary key (user_id, name)
);

create index einwilligungs_log_user_idx on public.einwilligungs_log (user_id);

-- Hilfsfunktionen
create or replace function public.ist_admin()
returns boolean language sql stable security definer set search_path = '' as $$
    select exists (select 1 from public.profiles p where p.id = (select auth.uid()) and p.rolle = 'admin')
$$;

create or replace function public.ist_moderator()
returns boolean language sql stable security definer set search_path = '' as $$
    select exists (select 1 from public.profiles p where p.id = (select auth.uid()) and p.rolle in ('moderator', 'admin'))
$$;

create or replace function public.setze_geaendert()
returns trigger language plpgsql set search_path = '' as $$
begin
    new.geaendert = now();
    return new;
end $$;

create trigger profiles_geaendert before update on public.profiles for each row execute function public.setze_geaendert();
create trigger konten_geaendert before update on public.konten for each row execute function public.setze_geaendert();

-- Jede Änderung einer Einwilligung wird im selben Schritt protokolliert, damit Stand und Nachweis nie auseinanderlaufen.
create or replace function public.protokolliere_einwilligung()
returns trigger language plpgsql security definer set search_path = '' as $$
begin
    if new.newsletter is distinct from old.newsletter then
        insert into public.einwilligungs_log (user_id, art, erteilt) values (new.id, 'newsletter', new.newsletter);
    end if;
    if new.angebote is distinct from old.angebote then
        insert into public.einwilligungs_log (user_id, art, erteilt) values (new.id, 'angebote', new.angebote);
    end if;
    return new;
end $$;

create trigger konten_einwilligung after update on public.konten for each row execute function public.protokolliere_einwilligung();
revoke execute on function public.protokolliere_einwilligung() from public, anon, authenticated;

-- Neues Konto: Profil mit zufälligem Handle, Details, Kontodaten, Einwilligung zum Konto protokollieren.
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = '' as $$
begin
    insert into public.profiles (id, handle) values (new.id, 'mitglied_' || substr(md5(new.id::text), 1, 15));
    insert into public.profil_details (id) values (new.id);
    insert into public.konten (id) values (new.id);
    insert into public.einwilligungs_log (user_id, art, erteilt) values (new.id, 'konto', true);
    return new;
end $$;

create trigger on_auth_user_created after insert on auth.users for each row execute function public.handle_new_user();

-- Eigenes Konto löschen (entfernt alle verknüpften Daten per Kaskade).
create or replace function public.konto_loeschen()
returns void language plpgsql security definer set search_path = '' as $$
begin
    if (select auth.uid()) is null then
        raise exception 'nicht angemeldet';
    end if;
    delete from auth.users where id = (select auth.uid());
end $$;

revoke execute on function public.konto_loeschen() from public, anon;
grant execute on function public.konto_loeschen() to authenticated;
revoke execute on function public.handle_new_user() from public, anon, authenticated;

-- RLS
alter table public.profiles enable row level security;
alter table public.profil_details enable row level security;
alter table public.konten enable row level security;
alter table public.einwilligungs_log enable row level security;
alter table public.saved_items enable row level security;
alter table public.badges enable row level security;

-- Profile: nur die Karte (Handle, Name, Bild, Rolle, Punkte) ist öffentlich. Name und Bild erscheinen auch bei privaten
-- Profilen an eigenen Beiträgen; Bio, Beruf, Pronomen und Links bleiben dann verborgen (profil_details).
create policy "Profilkarten sind öffentlich lesbar" on public.profiles for select using (true);
create policy "Eigenes Profil ändern" on public.profiles for update to authenticated
    using ((select auth.uid()) = id) with check ((select auth.uid()) = id);

-- Rolle und Punkte setzt nur der Server.
revoke update on public.profiles from anon, authenticated;
grant update (handle, anzeigename, avatar_pfad, banner_pfad, banner_verlauf, akzent, oeffentlich) on public.profiles to authenticated;

create policy "Details lesen, wenn öffentlich oder eigene" on public.profil_details for select
    using ((select auth.uid()) = id or exists (select 1 from public.profiles p where p.id = profil_details.id and p.oeffentlich));
create policy "Eigene Details ändern" on public.profil_details for update to authenticated
    using ((select auth.uid()) = id) with check ((select auth.uid()) = id);

create policy "Eigenes Konto lesen" on public.konten for select to authenticated using ((select auth.uid()) = id);
create policy "Eigenes Konto ändern" on public.konten for update to authenticated
    using ((select auth.uid()) = id) with check ((select auth.uid()) = id);
revoke update on public.konten from anon, authenticated;
grant update (newsletter, angebote, segment) on public.konten to authenticated;

create policy "Eigene Einwilligungen lesen" on public.einwilligungs_log for select to authenticated using ((select auth.uid()) = user_id);

create policy "Eigene Einträge lesen" on public.saved_items for select to authenticated using ((select auth.uid()) = user_id);
create policy "Eigene Einträge anlegen" on public.saved_items for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "Eigene Einträge ändern" on public.saved_items for update to authenticated
    using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "Eigene Einträge löschen" on public.saved_items for delete to authenticated using ((select auth.uid()) = user_id);

create policy "Abzeichen lesen, wenn Profil öffentlich oder eigene" on public.badges for select
    using ((select auth.uid()) = user_id or exists (select 1 from public.profiles p where p.id = badges.user_id and p.oeffentlich));
create policy "Eigene Abzeichen eintragen" on public.badges for insert to authenticated with check ((select auth.uid()) = user_id);
