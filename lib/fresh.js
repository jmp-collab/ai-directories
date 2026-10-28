// Frisch gemessene Semrush-Kennzahlen für die wichtigsten Verzeichnisse (Datenbank US, Oktober 2026).
// Ergänzt die Werte der Hauptliste, ersetzt sie nicht: Authority Score und organischer Traffic messen etwas anderes als DR und Gesamtbesuche.
import data from '../db/fresh-semrush.json'

export const FRESH_STAND = 'Oktober 2026'
export const freshCount = () => Object.keys(data).length
export const getFresh = (slug) => data[slug] || null
// DR ab 50, aber frisch gemessener Authority Score bis 10: Der DR ist dann nicht belastbar.
export const isDrSuspect = (d) => {
    const f = data[d.slug]
    return Boolean(f && f.authority != null && f.authority <= 10 && d.domain_rating >= 50)
}

// DR für Bewertungen: bei fragwürdigem DR der gemessene Authority Score.
export const effectiveRating = (d) => (isDrSuspect(d) ? data[d.slug].authority : d.domain_rating)

export const freshSlugs = () => Object.keys(data).filter((s) => data[s].authority != null || data[s].traffic_us != null)
