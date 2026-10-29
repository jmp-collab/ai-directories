-- Profilbilder und Banner. Öffentliche Buckets (Bilder sind per URL abrufbar), schreiben nur in den eigenen Ordner <user_id>/.
-- Der Browser kodiert jedes Bild vorher als WebP neu; das entfernt EXIF- und GPS-Daten.

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values
    ('avatare', 'avatare', true, 524288, array['image/webp', 'image/png', 'image/jpeg']),
    ('banner', 'banner', true, 1048576, array['image/webp', 'image/png', 'image/jpeg'])
on conflict (id) do nothing;

-- Höchstens 3 Dateien pro Bucket und Konto (der Editor lädt neu hoch und löscht danach das alte Bild).
-- Gezählt wird über eine eigene Funktion, weil eine Regel auf storage.objects die Tabelle nicht selbst abfragen darf.
-- Die Sperre pro Konto und Bucket sorgt dafür, dass gleichzeitige Uploads nacheinander gezählt werden.
create or replace function public.eigene_bilder(bucket text)
returns integer language plpgsql volatile security definer set search_path = '' as $$
begin
    perform pg_advisory_xact_lock(hashtext('aigeddon-bilder-' || coalesce((select auth.uid())::text, '') || '-' || bucket));
    return (select count(*)::integer from storage.objects o where o.bucket_id = bucket and (storage.foldername(o.name))[1] = (select auth.uid())::text);
end $$;
revoke execute on function public.eigene_bilder(text) from public, anon;

create policy "Eigene Profilbilder hochladen" on storage.objects for insert to authenticated
    with check (
        bucket_id in ('avatare', 'banner')
        and (storage.foldername(name))[1] = (select auth.uid())::text
        and public.eigene_bilder(bucket_id) < 3
    );
create policy "Eigene Profilbilder ersetzen" on storage.objects for update to authenticated
    using (bucket_id in ('avatare', 'banner') and (storage.foldername(name))[1] = (select auth.uid())::text)
    with check (bucket_id in ('avatare', 'banner') and (storage.foldername(name))[1] = (select auth.uid())::text);
create policy "Eigene Profilbilder löschen" on storage.objects for delete to authenticated
    using (bucket_id in ('avatare', 'banner') and (storage.foldername(name))[1] = (select auth.uid())::text);
create policy "Eigene Profilbilder auflisten" on storage.objects for select to authenticated
    using (bucket_id in ('avatare', 'banner') and (storage.foldername(name))[1] = (select auth.uid())::text);

-- Bildpfade im Profil dürfen nur auf den eigenen Ordner zeigen.
alter table public.profiles add constraint avatar_im_eigenen_ordner check (avatar_pfad is null or avatar_pfad like id::text || '/%');
alter table public.profiles add constraint banner_im_eigenen_ordner check (banner_pfad is null or banner_pfad like id::text || '/%');

-- Links im Profil: höchstens 3, nur https, je höchstens 200 Zeichen.
create or replace function public.links_gueltig(l jsonb)
returns boolean language sql immutable set search_path = '' as $$
    select coalesce(bool_and(jsonb_typeof(e) = 'string' and (e #>> '{}') ~ '^https://[^\s]{3,190}$'), true)
    from jsonb_array_elements(l) e
$$;
alter table public.profil_details add constraint links_nur_https check (public.links_gueltig(links));
