-- Schritt 18: Mein KI-Stack. Eigene Tools mit Tarif und Kosten; nur die Person selbst sieht und ändert ihre Einträge.
-- Beträge trägt jede Person selbst ein. Wir rechnen nicht zwischen Währungen um.

create table public.stack_eintraege (
    id bigint generated always as identity primary key,
    user_id uuid not null references auth.users (id) on delete cascade default auth.uid(),
    -- Slug eines Tool-Steckbriefs (db/tools.json) oder leer bei eigenen Tools.
    tool_slug text check (tool_slug is null or (tool_slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$' and char_length(tool_slug) <= 80)),
    name text not null check (char_length(btrim(name)) between 1 and 80),
    tarif text not null default '' check (char_length(tarif) <= 60),
    betrag numeric(10, 2) not null default 0 check (betrag >= 0 and betrag <= 100000),
    waehrung text not null default 'EUR' check (waehrung in ('EUR', 'USD')),
    intervall text not null default 'monat' check (intervall in ('monat', 'jahr')),
    notiz text not null default '' check (char_length(notiz) <= 300),
    erstellt timestamptz not null default now()
);
create index stack_eintraege_user_idx on public.stack_eintraege (user_id);

-- Konto und Zeitpunkt setzt der Server. Höchstens 100 Einträge pro Konto.
create or replace function public.stack_vor()
returns trigger language plpgsql security definer set search_path = '' as $$
begin
    if tg_op = 'INSERT' then
        new.user_id := (select auth.uid());
        new.erstellt := now();
        perform pg_advisory_xact_lock(hashtext('aigeddon-stack-' || coalesce(new.user_id::text, '')));
        if (select count(*) from public.stack_eintraege where user_id = new.user_id) >= 100 then
            raise exception 'zu_viele' using errcode = 'P0001';
        end if;
    else
        new.user_id := old.user_id;
        new.erstellt := old.erstellt;
    end if;
    return new;
end $$;
create trigger stack_eintraege_vor before insert or update on public.stack_eintraege for each row execute function public.stack_vor();
revoke execute on function public.stack_vor() from public, anon, authenticated;

alter table public.stack_eintraege enable row level security;
create policy "Eigenen Stack lesen" on public.stack_eintraege for select to authenticated using ((select auth.uid()) = user_id);
create policy "Eigenen Stack ergänzen" on public.stack_eintraege for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "Eigenen Stack ändern" on public.stack_eintraege for update to authenticated
    using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "Eigenen Stack löschen" on public.stack_eintraege for delete to authenticated using ((select auth.uid()) = user_id);

revoke all on public.stack_eintraege from anon, authenticated;
grant select, delete on public.stack_eintraege to authenticated;
grant insert (tool_slug, name, tarif, betrag, waehrung, intervall, notiz) on public.stack_eintraege to authenticated;
grant update (tool_slug, name, tarif, betrag, waehrung, intervall, notiz) on public.stack_eintraege to authenticated;
