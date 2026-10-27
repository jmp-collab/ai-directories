// Echte Änderungsdaten für Sitemap und Schema: letzter Git-Commit der Dateien, aus denen eine Seite entsteht.
// Nur serverseitig beim Bauen nutzen. Ohne Git-Historie (z. B. flacher Checkout) fällt es auf das Baudatum zurück.
import { execSync } from 'node:child_process'

const cache = new Map()
const BAUDATUM = new Date()

export function dateiStand(...dateien) {
    const key = dateien.join('|')
    if (!cache.has(key)) {
        let d = null
        try {
            const out = execSync(`git log -1 --format=%cI -- ${dateien.map((f) => `"${f}"`).join(' ')}`, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim()
            if (out) d = new Date(out)
        } catch {
            d = null
        }
        cache.set(key, d || BAUDATUM)
    }
    return cache.get(key)
}

// Spätestes von mehreren Daten (z. B. Prüfdatum eines Artikels und letzter Textänderung).
export const spaetestes = (...daten) => new Date(Math.max(...daten.filter(Boolean).map((d) => new Date(d).getTime())))

// Statische Seite: Änderungsdatum der zugehörigen page.js (app/<pfad>/page.js) plus optionaler Datendateien.
export const seitenStand = (pfad, ...daten) => dateiStand(`app${pfad === '/' ? '' : pfad}/page.js`, ...daten)
