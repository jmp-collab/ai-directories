import db from '../db/directories.json'
import slugify from '../utils/slugify'
import getStats, { byRating } from '../utils/stats'

const directories = db.data.map((d) => ({ ...d, slug: slugify(d.name) }))
const bySlug = new Map(directories.map((d) => [d.slug, d]))
const ranked = [...directories].sort(byRating)

export const getDirectories = () => directories
export const getDirectory = (slug) => bySlug.get(slug)
export const getSiteStats = () => getStats(directories)

// Platz nach Domain Rating (1 = stärkste Domain)
export const getRank = (slug) => ranked.findIndex((d) => d.slug === slug) + 1

// Anteil der Liste mit weniger Traffic, z. B. 0.82 -> "mehr Besuche als 82 %"
export const getVisitsPercentile = (directory) => {
    const lower = directories.filter((d) => d.monthly_visits < directory.monthly_visits).length
    return Math.round((lower / directories.length) * 100)
}

// Ähnliche Verzeichnisse: gleiches Preismodell, möglichst nahe Domain Rating
export const getAlternatives = (directory, limit = 6) =>
    directories
        .filter((d) => d.slug !== directory.slug && d.pricing === directory.pricing)
        .sort(
            (a, b) =>
                Math.abs(a.domain_rating - directory.domain_rating) - Math.abs(b.domain_rating - directory.domain_rating) ||
                b.monthly_visits - a.monthly_visits
        )
        .slice(0, limit)

export const LISTS = {
    kostenlos: {
        title: 'Kostenlose KI-Verzeichnisse',
        h1: (n) => `${n} kostenlose KI-Verzeichnisse für deinen Tool-Launch`,
        description: (n) =>
            `${n} KI-Verzeichnisse, in die du dein Tool gratis eintragen kannst. Mit Domain Rating, Traffic und Einschätzung, wie reibungslos die Einreichung läuft.`,
        lead: 'Null Budget, trotzdem Sichtbarkeit: Diese Verzeichnisse nehmen dein KI-Tool kostenlos auf. Sortiert nach Domain Rating, damit du mit den stärksten Domains anfängst. Schwäbische Hausfrauen und Startup-Gründer im Bootstrapping-Modus applaudieren.',
        filter: (d) => d.pricing === 'Free',
    },
    'domain-rating-50-plus': {
        title: 'KI-Verzeichnisse mit Domain Rating 50+',
        h1: (n) => `${n} starke KI-Verzeichnisse mit Domain Rating ab 50`,
        description: (n) =>
            `${n} Verzeichnisse und Startup-Plattformen mit Domain Rating 50 oder höher. Die Einträge, die für Backlinks und Markenbekanntheit am meisten bringen.`,
        lead: 'Wenn du nur Zeit für eine Handvoll Einträge hast, nimm diese. Hohe Domain Rating heißt: Der Link zählt mehr, und die Seite wird öfter von Google und KI-Suchen gecrawlt. Die Fitnessstudio-Fraktion unter den Domains, mit Bizeps und Backlinks.',
        filter: (d) => d.domain_rating >= 50,
    },
    rabattcodes: {
        title: 'Rabattcodes für KI-Verzeichnisse',
        h1: (n) => `${n} Rabattcodes für bezahlte Einträge in KI-Verzeichnissen`,
        description: (n) =>
            `${n} Rabattcodes für kostenpflichtige KI-Verzeichnisse, von 10 bis 70 % Nachlass. Mit Domain Rating und Traffic, damit du siehst, ob sich der Eintrag lohnt.`,
        lead: 'Bezahlte Einträge lohnen sich nur, wenn Preis und Reichweite zusammenpassen. Diese Codes drücken den Preis. Ob ein Code noch gilt, entscheidet der Anbieter, also vor dem Bezahlen testen. Black Friday ist hier an 365 Tagen, zumindest theoretisch.',
        filter: (d) => Boolean(d.dealCode),
    },
}

export const getList = (slug) => {
    const list = LISTS[slug]
    if (!list) return null
    const items = directories.filter(list.filter).sort(byRating)
    return { slug, ...list, items }
}
