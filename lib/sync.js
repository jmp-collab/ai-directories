// Gleicht Merkliste, Herzen, Verlauf, gelesene Artikel und Abzeichen zwischen Browser und Konto ab.
// Beim Login: Vereinigung aus beiden Seiten. Danach gilt der Browser als Quelle und schreibt Änderungen nach.
import { lies, schreib } from './herz'

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

export async function erstAbgleich(sb, uid) {
    const { data: server } = await sb.from('saved_items').select('art, pfad, titel, zeit').eq('user_id', uid)
    for (const [key, art] of Object.entries(ARTEN)) {
        const lokal = alsZeilen(key, uid)
        const vomServer = (server || []).filter((z) => z.art === art)
        const bekannt = new Set(lokal.map((z) => z.pfad))
        const neu = [...lokal, ...vomServer.filter((z) => !bekannt.has(z.pfad))]
        const begrenzt = key === 'aigeddon-verlauf' ? ausZeilen(key, neu).slice(0, 8) : ausZeilen(key, neu)
        localStorage.setItem(key, JSON.stringify(begrenzt))
        if (lokal.length) await sb.from('saved_items').upsert(lokal, { onConflict: 'user_id,art,pfad', ignoreDuplicates: false })
    }
    const lokaleAbzeichen = lies('aigeddon-abzeichen', []) || []
    const { data: abz } = await sb.from('badges').select('name').eq('user_id', uid)
    const alle = [...new Set([...lokaleAbzeichen, ...(abz || []).map((a) => a.name)])]
    localStorage.setItem('aigeddon-abzeichen', JSON.stringify(alle))
    const fehlen = lokaleAbzeichen.filter((n) => !(abz || []).some((a) => a.name === n))
    if (fehlen.length) await sb.from('badges').upsert(fehlen.map((name) => ({ user_id: uid, name })), { onConflict: 'user_id,name', ignoreDuplicates: true })
}

// Nach einer lokalen Änderung: Zeilen der Art hochladen, auf dem Server fehlende lokale Löschungen nachziehen.
export async function schreibeNach(sb, uid, key) {
    if (key === 'aigeddon-abzeichen') {
        const namen = lies(key, []) || []
        if (namen.length) await sb.from('badges').upsert(namen.map((name) => ({ user_id: uid, name })), { onConflict: 'user_id,name', ignoreDuplicates: true })
        return
    }
    const art = ARTEN[key]
    if (!art) return
    const lokal = alsZeilen(key, uid)
    if (lokal.length) await sb.from('saved_items').upsert(lokal, { onConflict: 'user_id,art,pfad' })
    if (art === 'merk' || art === 'herz') {
        const { data } = await sb.from('saved_items').select('pfad').eq('user_id', uid).eq('art', art)
        const behalten = new Set(lokal.map((z) => z.pfad))
        const weg = (data || []).map((z) => z.pfad).filter((p) => !behalten.has(p))
        if (weg.length) await sb.from('saved_items').delete().eq('user_id', uid).eq('art', art).in('pfad', weg)
    }
}

export const SYNC_KEYS = [...Object.keys(ARTEN), 'aigeddon-abzeichen']
export { schreib }
