-- Schritt 17: Launch-Tracker in der Cloud. Pro Konto und Verzeichnis ein Eintrag mit Status, Notiz und Erinnerung.
-- Nur die Person selbst sieht und ändert ihre Einträge.

create table public.launch_eintraege (
    user_id uuid not null references auth.users (id) on delete cascade default auth.uid(),
    -- Slug eines Verzeichnisses aus db/directories.json (Kleinbuchstaben, Ziffern, Bindestriche).
    slug text not null check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$' and char_length(slug) <= 80),
    status text not null default 'geplant' check (status in ('geplant', 'eingereicht', 'live', 'abgelehnt')),
    notiz text not null default '' check (char_length(notiz) <= 500),
    erinnerung date check (erinnerung is null or erinnerung between date '2020-01-01' and date '2100-12-31'),
    aktualisiert timestamptz not null default now(),
    primary key (user_id, slug)
);

-- Konto und Zeitstempel setzt immer der Server. Höchstens 1000 Einträge pro Konto.
create or replace function public.launch_vor()
returns trigger language plpgsql security definer set search_path = '' as $$
begin
    new.user_id := (select auth.uid());
    new.aktualisiert := now();
    if tg_op = 'INSERT' then
        perform pg_advisory_xact_lock(hashtext('aigeddon-launch-' || coalesce(new.user_id::text, '')));
        if (select count(*) from public.launch_eintraege where user_id = new.user_id) >= 1000 then
            raise exception 'zu_viele' using errcode = 'P0001';
        end if;
    end if;
    return new;
end $$;
create trigger launch_eintraege_vor before insert or update on public.launch_eintraege for each row execute function public.launch_vor();
revoke execute on function public.launch_vor() from public, anon, authenticated;

alter table public.launch_eintraege enable row level security;
create policy "Eigene Launch-Einträge lesen" on public.launch_eintraege for select to authenticated using ((select auth.uid()) = user_id);
create policy "Eigene Launch-Einträge anlegen" on public.launch_eintraege for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "Eigene Launch-Einträge ändern" on public.launch_eintraege for update to authenticated
    using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "Eigene Launch-Einträge löschen" on public.launch_eintraege for delete to authenticated using ((select auth.uid()) = user_id);

revoke all on public.launch_eintraege from anon, authenticated;
grant select, delete on public.launch_eintraege to authenticated;
grant insert (slug, status, notiz, erinnerung) on public.launch_eintraege to authenticated;
-- slug gehört dazu, weil ein Upsert alle gesendeten Spalten auch im Update-Zweig schreibt.
grant update (slug, status, notiz, erinnerung) on public.launch_eintraege to authenticated;
