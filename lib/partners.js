// Liest das zentrale Partner-Register db/partners.json. Nur Einträge mit status 'aktiv' und eingetragenem Link
// werden zu Partnerlinks; ein eingetragener coupon ersetzt den Rabattcode des Verzeichnisses.
// Bewusst getrennt von lib/monetization.js, damit das Register nicht im Browser-Bundle landet.
import register from '../db/partners.json'

const active = register.programme.filter((p) => p.status === 'aktiv' && p.partner_link)
const bySlug = (key) => Object.fromEntries(active.filter((p) => p[key]).map((p) => [p[key], p.partner_link]))

// Verzeichnisse: slug -> Affiliate-URL
export const AFFILIATES = bySlug('directory_slug')

// Werkzeuge im Tool-Verzeichnis: slug (wie in db/tools.json) -> Affiliate-URL
export const TOOL_AFFILIATES = bySlug('tool_slug')

// Eigene Rabattcodes: slug -> { code, text }, text im Format der Rohdaten, z. B. '30% discount'
export const OWN_DEALS = Object.fromEntries(
    register.programme.filter((p) => p.directory_slug && p.coupon?.code).map((p) => [p.directory_slug, p.coupon])
)
