// Frisch gemessene Semrush-Kennzahlen für die wichtigsten Verzeichnisse (Datenbank US, Oktober 2026).
// Ergänzt die Werte der Ursprungsliste, ersetzt sie nicht: Authority Score und organischer Traffic messen etwas anderes als DR und Gesamtbesuche.
import data from '../db/fresh-semrush.json'

export const FRESH_STAND = 'Oktober 2026'
export const freshCount = () => Object.keys(data).length
export const getFresh = (slug) => data[slug] || null
export const freshSlugs = () => Object.keys(data).filter((s) => data[s].authority != null || data[s].traffic_us != null)
