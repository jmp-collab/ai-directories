// Konten über Supabase. Die Seite bleibt statisch; Login und Daten laufen im Browser.
// Sicherheit liegt in den RLS-Regeln (supabase/migrations). Der öffentliche Schlüssel darf im Code stehen.
// Ohne NEXT_PUBLIC_KONTO=1 bleibt alles unsichtbar und es wird kein Supabase-Code geladen.
import { withBase } from './site'

export const KONTO_AKTIV = process.env.NEXT_PUBLIC_KONTO === '1'
export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://yfxashcmtazjkpklicky.supabase.co'
export const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY || 'sb_publishable_OhF6rnuyHwV5GdnP-amD-g_rHUAEkCS'

let client = null
// Lädt supabase-js erst bei Bedarf, damit Seiten ohne Konto-Funktion nicht schwerer werden.
export async function supabase() {
    if (!KONTO_AKTIV || typeof window === 'undefined') return null
    if (!client) {
        const { createClient } = await import('@supabase/supabase-js')
        client = createClient(SUPABASE_URL, SUPABASE_KEY, {
            auth: { flowType: 'pkce', persistSession: true, autoRefreshToken: true, detectSessionInUrl: true, storageKey: 'aigeddon-auth' },
        })
    }
    return client
}

// Gemeinsamer Zustand für alle Komponenten: { bereit, user, profil }.
let stand = { bereit: false, user: null, profil: null }
const hoerer = new Set()
let gestartet = false

const melde = (neu) => {
    stand = { ...stand, ...neu }
    hoerer.forEach((f) => f(stand))
}

export async function ladeProfil() {
    const sb = await supabase()
    if (!sb || !stand.user) return null
    const { data } = await sb.from('profiles').select('*').eq('id', stand.user.id).maybeSingle()
    melde({ profil: data || null })
    return data
}

export function beobachte(f) {
    hoerer.add(f)
    f(stand)
    if (!gestartet && KONTO_AKTIV && typeof window !== 'undefined') {
        gestartet = true
        supabase().then(async (sb) => {
            if (!sb) return melde({ bereit: true })
            const { data } = await sb.auth.getSession()
            melde({ user: data.session?.user || null, bereit: true })
            if (data.session?.user) ladeProfil()
            sb.auth.onAuthStateChange((_ereignis, sitzung) => {
                const neu = sitzung?.user || null
                const wechsel = (neu && neu.id) !== (stand.user && stand.user.id)
                melde({ user: neu, profil: wechsel ? null : stand.profil })
                if (neu && wechsel) setTimeout(ladeProfil, 0)
            })
        })
    } else if (!KONTO_AKTIV) {
        melde({ bereit: true })
    }
    return () => hoerer.delete(f)
}

export const anmeldeZiel = (zurueck = '') => {
    const ziel = new URL(withBase('/anmelden/'), window.location.origin)
    if (zurueck) ziel.searchParams.set('zurueck', zurueck)
    return ziel.toString()
}

// Öffentliche Bild-URL aus dem Storage (Avatare und Banner sind öffentliche Buckets).
export const bildUrl = (bucket, pfad) => (pfad ? `${SUPABASE_URL}/storage/v1/object/public/${bucket}/${pfad}` : null)
