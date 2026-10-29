// Gleicht Merkliste, Herzen, Verlauf, gelesene Artikel und Abzeichen zwischen Browser und Konto ab.
// Beim Login: Vereinigung aus beiden Seiten. Danach gilt der Browser als Quelle und schreibt Änderungen nach.
import { lies, schreib, ABZEICHEN_KATALOG } from './herz'

// Diese Abzeichen vergibt nur der Server (Community); der Browser lädt sie nie hoch.
const NUR_SERVER = ['Erster-Kommentar-Abzeichen', 'Forums-Starter-Abzeichen', 'Problemlöser-Abzeichen', 'Hilfsbereit-Abzeichen']
const hochladbar = (n) => ABZEICHEN_KATALOG.some(([k]) => k === n) && !NUR_SERVER.includes(n)

const ARTEN = {
    'aigeddon-merkliste': 'merk',
    'aigeddon-herzen': 'herz',
    'aigeddon-verlauf': 'verlauf',
    'aigeddon-gelesen': 'gelesen',
}

// Lokale Formate: Merkliste und Verlauf sind Objekte {pfad, titel, zeit}, Herzen und Gelesen nur Pfade.
const alsZeilen = (key, uid) =>
    (lies(key, []) || []).map((e) =>
        typeof e === 'string'
            ? { user_id: uid, art: ARTEN[key], pfad: e.slice(0, 300), titel: '' }
            : { user_id: uid, art: ARTEN[key], pfad: String(e.pfad).slice(0, 300), titel: String(e.titel || '').slice(0, 200), zeit: new Date(e.zeit || Date.now()).toISOString() }
    )

const ausZeilen = (key, zeilen) =>
    key === 'aigeddon-herzen' || key === 'aigeddon-gelesen'
        ? zeilen.map((z) => z.pfad)
        : zeilen.sort((a, b) => (a.zeit < b.zeit ? 1 : -1)).map((z) => ({ pfad: z.pfad, titel: z.titel, zeit: new Date(z.zeit).getTime() }))

// Wem gehört die Sammlung im Browser? Meldet sich jemand anderes an, wird sie vorher geleert,
// damit nichts zwischen Konten wandert. Gast-Daten ohne Besitzer werden dem ersten Konto zugeordnet.
const BESITZER = 'aigeddon-konto-uid'
// Was beim letzten Abgleich auf dem Server lag. So erkennt ein Gerät, dass ein Eintrag woanders gelöscht wurde,
// statt ihn aus seiner alten Kopie wieder hochzuladen.
const STAND = 'aigeddon-sync-stand'
const MIT_LOESCHEN = ['merk', 'herz']
const merkeStand = (art, pfade) => {
    const stand = lies(STAND, {}) || {}
    stand[art] = pfade
    try {
        localStorage.setItem(STAND, JSON.stringify(stand))
    } catch {}
}

export function lokalLeeren() {
    try {
        ;[...Object.keys(ARTEN), 'aigeddon-abzeichen', BESITZER, STAND].forEach((k) => localStorage.removeItem(k))
        sessionStorage.removeItem('aigeddon-sync')
    } catch {}
}

async function kuerzeVerlauf(sb, uid, behalten) {
    const { data, error } = await sb.from('saved_items').select('pfad').eq('user_id', uid).eq('art', 'verlauf')
    if (error || !data) return
    const weg = (data || []).map((z) => z.pfad).filter((p) => !behalten.includes(p))
    if (weg.length) await sb.from('saved_items').delete().eq('user_id', uid).eq('art', 'verlauf').in('pfad', weg)
}

export async function erstAbgleich(sb, uid) {
    let besitzer = null
    try {
        besitzer = localStorage.getItem(BESITZER)
    } catch {}
    if (besitzer && besitzer !== uid) lokalLeeren()
    const { data: server, error: serverFehler } = await sb.from('saved_items').select('art, pfad, titel, zeit').eq('user_id', uid)
    // Ohne gültige Serverantwort nichts ändern, sonst sähe alles wie gelöscht aus.
    if (serverFehler || !server) return false
    const stand = lies(STAND, {}) || {}
    for (const [key, art] of Object.entries(ARTEN)) {
        const vomServer = (server || []).filter((z) => z.art === art)
        const aufServer = new Set(vomServer.map((z) => z.pfad))
        const zuletzt = MIT_LOESCHEN.includes(art) && Array.isArray(stand[art]) ? new Set(stand[art]) : null
        // Lokale Einträge, die beim letzten Abgleich auf dem Server lagen und jetzt fehlen, wurden auf einem anderen Gerät gelöscht.
        const lokal = alsZeilen(key, uid).filter((z) => aufServer.has(z.pfad) || !zuletzt || !zuletzt.has(z.pfad))
        const vorhanden = new Set(lokal.map((z) => z.pfad))
        const neu = [...lokal, ...vomServer.filter((z) => !vorhanden.has(z.pfad))]
        const begrenzt = key === 'aigeddon-verlauf' ? ausZeilen(key, neu).slice(0, 8) : ausZeilen(key, neu)
        localStorage.setItem(key, JSON.stringify(begrenzt))
        const hoch = lokal.filter((z) => !aufServer.has(z.pfad))
        let hochOk = true
        if (hoch.length) hochOk = !(await sb.from('saved_items').upsert(hoch, { onConflict: 'user_id,art,pfad', ignoreDuplicates: true })).error
        // Als „auf dem Server“ gilt nur, was dort wirklich angekommen ist. Sonst würde ein Fehlschlag später als Löschung gelesen.
        if (MIT_LOESCHEN.includes(art)) merkeStand(art, hochOk ? neu.map((z) => z.pfad) : vomServer.map((z) => z.pfad))
        // Der Verlauf ist auf 8 Einträge begrenzt, auch auf dem Server.
        if (art === 'verlauf') await kuerzeVerlauf(sb, uid, begrenzt.map((z) => z.pfad))
    }
    const lokaleAbzeichen = lies('aigeddon-abzeichen', []) || []
    const { data: abz, error: abzFehler } = await sb.from('badges').select('name').eq('user_id', uid)
    if (abzFehler) return false
    const alle = [...new Set([...lokaleAbzeichen, ...(abz || []).map((a) => a.name)])]
    localStorage.setItem('aigeddon-abzeichen', JSON.stringify(alle))
    const fehlen = lokaleAbzeichen.filter((n) => hochladbar(n) && !(abz || []).some((a) => a.name === n))
    if (fehlen.length) await sb.from('badges').upsert(fehlen.map((name) => ({ user_id: uid, name })), { onConflict: 'user_id,name', ignoreDuplicates: true })
    try {
        localStorage.setItem(BESITZER, uid)
    } catch {}
    // Offene Ansichten (Merkliste, Knöpfe) sollen den neuen Stand sofort zeigen.
    if (typeof window !== 'undefined') window.dispatchEvent(new CustomEvent('aigeddon-sync'))
    return true
}

// Nach einer lokalen Änderung: Zeilen der Art hochladen, auf dem Server fehlende lokale Löschungen nachziehen.
export async function schreibeNach(sb, uid, key) {
    if (key === 'aigeddon-abzeichen') {
        const namen = (lies(key, []) || []).filter(hochladbar)
        if (namen.length) await sb.from('badges').upsert(namen.map((name) => ({ user_id: uid, name })), { onConflict: 'user_id,name', ignoreDuplicates: true })
        return
    }
    const art = ARTEN[key]
    if (!art) return
    const lokal = alsZeilen(key, uid)
    if (lokal.length) {
        const { error } = await sb.from('saved_items').upsert(lokal, { onConflict: 'user_id,art,pfad' })
        // Ohne erfolgreichen Upload bleibt der bisherige Stand, damit nichts fälschlich als gelöscht gilt.
        if (error) return
    }
    if (art === 'verlauf') return kuerzeVerlauf(sb, uid, lokal.map((z) => z.pfad))
    if (art === 'merk' || art === 'herz') {
        const { data, error: lesefehler } = await sb.from('saved_items').select('pfad, titel, zeit').eq('user_id', uid).eq('art', art)
        if (lesefehler || !data) return
        const gesehen = new Set((lies(STAND, {}) || {})[art] || [])
        const lokalSet = new Set(lokal.map((z) => z.pfad))
        // Gelöscht wird nur, was dieses Gerät schon kannte und jetzt lokal entfernt hat.
        const weg = (data || []).map((z) => z.pfad).filter((p) => !lokalSet.has(p) && gesehen.has(p))
        if (weg.length) await sb.from('saved_items').delete().eq('user_id', uid).eq('art', art).in('pfad', weg)
        // Was ein anderes Gerät inzwischen ergänzt hat, kommt lokal dazu statt gelöscht zu werden.
        const neuVonWoanders = (data || []).filter((z) => !lokalSet.has(z.pfad) && !gesehen.has(z.pfad))
        if (neuVonWoanders.length) {
            const zusammen = ausZeilen(key, [...lokal, ...neuVonWoanders])
            localStorage.setItem(key, JSON.stringify(zusammen))
            window.dispatchEvent(new CustomEvent('aigeddon-sync'))
        }
        merkeStand(art, [...lokalSet, ...neuVonWoanders.map((z) => z.pfad)])
    }
}

export const SYNC_KEYS = [...Object.keys(ARTEN), 'aigeddon-abzeichen']
export { schreib }
