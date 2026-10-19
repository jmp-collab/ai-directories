// Angaben der Verzeichnisse selbst zu Freischaltdauer, Link-Typ und Status, geprüft im Oktober 2026.
// Jede Angabe hat eine Quelle auf der Seite des Verzeichnisses; Zitate in Originalsprache.
import data from '../db/checks.json'

export const CHECK_STAND = 'Oktober 2026'
export const getCheck = (slug) => data[slug] || null
export const hasStatusIssue = (slug) => Boolean(data[slug]?.status)
export const checkCount = () => Object.keys(data).length
