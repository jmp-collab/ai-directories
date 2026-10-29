// Launch-Tracker im Konto: Status, Notiz und Erinnerung je Verzeichnis (Tabelle launch_eintraege, Migration 0004).
// Ein gemeinsamer Speicher für alle Komponenten einer Seite. Ohne Anmeldung bleibt der Tracker im Browser (useTracker).
import { supabase, istAktuell } from './konto'
import { alleZeilen } from './sync'

export const STATUS = [
    ['geplant', 'Geplant', '📝'],
    ['eingereicht', 'Eingereicht', '📨'],
    ['live', 'Live', '✅'],
    ['abgelehnt', 'Abgelehnt', '🚫'],
]
// Als „eingetragen“ zählt für Fortschritt und Rang, was eingereicht oder live ist.
export const ZAEHLT = new Set(['eingereicht', 'live'])
export const LOKAL_KEY = 'kiv-eingetragen'

let stand = { uid: null, bereit: false, fehler: false, eintraege: new Map() }
const hoerer = new Set()
const melde = (neu) => {
    stand = { ...stand, ...neu }
    hoerer.forEach((f) => f(stand))
}

export function beobachteLaunch(f) {
    hoerer.add(f)
    f(stand)
    return () => hoerer.delete(f)
}

// Lädt die Einträge des Kontos einmal pro Seite. Späte Antworten eines anderen Kontos werden verworfen.
// Laufende Speichervorgänge je Eintrag (Promise-Kette).
const ketten = new Map()
let laeuft = null
// frisch: beim Öffnen der Tracker-Seite neu laden, damit Änderungen von anderen Geräten sichtbar werden.
// still: im Hintergrund neu laden (nach einem Speicherfehler), die Anzeige bleibt dabei stehen.
export function ladeLaunch(uid, frisch = false, still = false) {
    if (!uid) return null
    if (stand.uid === uid && (laeuft || (stand.bereit && !frisch))) return laeuft
    if (!(still && stand.uid === uid && stand.bereit)) melde({ uid, bereit: false, fehler: false, eintraege: new Map() })
    laeuft = (async () => {
        // Erst offene Speichervorgänge abwarten, sonst liest das Neuladen einen veralteten Stand.
        await Promise.allSettled([...ketten.values()])
        const sb = await supabase()
        const { data, error } = await alleZeilen(() => sb.from('launch_eintraege').select('slug, status, notiz, erinnerung, aktualisiert').order('slug'))
        if (!istAktuell(uid) || stand.uid !== uid) return
        if (error) return melde({ bereit: true, fehler: true })
        melde({ bereit: true, eintraege: new Map(data.map((z) => [z.slug, z])) })
    })().finally(() => {
        laeuft = null
    })
    return laeuft
}

// Ändert einen Eintrag sofort in der Anzeige und speichert ihn. Scheitert das Speichern, gilt wieder der alte Stand.
// Speichern je Verzeichnis nacheinander, damit eine ältere Änderung keine neuere überschreibt.
export function setzeLaunch(uid, slug, felder) {
    if (!uid || stand.uid !== uid) return Promise.resolve(false)
    // Sofort anzeigen, gespeichert wird in der Reihenfolge der Änderungen.
    const alt = stand.eintraege.get(slug)
    const neu = { slug, status: 'geplant', notiz: '', erinnerung: null, ...alt, ...felder }
    const map = new Map(stand.eintraege)
    map.set(slug, neu)
    melde({ eintraege: map })
    const lauf = (ketten.get(slug) || Promise.resolve()).then(async () => {
        const sb = await supabase()
        const { error } = await sb
            .from('launch_eintraege')
            .upsert({ slug, status: neu.status, notiz: neu.notiz, erinnerung: neu.erinnerung || null }, { onConflict: 'user_id,slug' })
        // Bei einem Fehler den bestätigten Stand vom Server holen, sobald alle Änderungen durch sind.
        if (error && stand.uid === uid) setTimeout(() => ladeLaunch(uid, true, true), 0)
        return !error
    })
    ketten.set(slug, lauf.catch(() => false))
    return lauf
}

// Häkchen aus dem Browser ins Konto übernehmen: fehlende Verzeichnisse werden als „eingereicht“ angelegt,
// vorhandene Einträge im Konto bleiben unverändert.
export async function uebernehmeLokal(uid, erlaubt) {
    if (!uid || stand.uid !== uid) return 0
    let lokal = []
    try {
        lokal = JSON.parse(localStorage.getItem(LOKAL_KEY) || '[]')
    } catch {}
    const fehlen = lokal.filter((s) => typeof s === 'string' && erlaubt.has(s) && !stand.eintraege.has(s))
    if (!fehlen.length) return 0
    const sb = await supabase()
    const zeilen = fehlen.map((slug) => ({ slug, status: 'eingereicht', notiz: '', erinnerung: null }))
    const { error } = await sb.from('launch_eintraege').upsert(zeilen, { onConflict: 'user_id,slug', ignoreDuplicates: true })
    if (error || stand.uid !== uid) return -1
    const map = new Map(stand.eintraege)
    zeilen.forEach((z) => map.has(z.slug) || map.set(z.slug, z))
    melde({ eintraege: map })
    return fehlen.length
}

export const lokaleHaekchen = () => {
    try {
        return JSON.parse(localStorage.getItem(LOKAL_KEY) || '[]').filter((s) => typeof s === 'string')
    } catch {
        return []
    }
}

// Heutiges Datum als YYYY-MM-DD in Ortszeit, für fällige Erinnerungen.
export const heute = () => {
    const d = new Date()
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}
