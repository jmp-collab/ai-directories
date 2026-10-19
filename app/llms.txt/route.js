import { getDirectories, getSiteStats, LISTS } from '../../lib/data'
import { SITE_NAME, absoluteUrl } from '../../lib/site'
import { getScore } from '../../lib/score'
import { experienceLabel, pricingLabel, dealLabel, formatRating, formatVisits } from '../../utils/i18n-de'

export const dynamic = 'force-static'

// llms.txt (https://llmstxt.org): kompakte Markdown-Fassung für KI-Assistenten und Answer Engines.
export function GET() {
    const stats = getSiteStats()
    const rows = [...getDirectories()]
        .sort((a, b) => b.domain_rating - a.domain_rating)
        .map(
            (d) =>
                `- [${d.name}](${absoluteUrl(`/verzeichnis/${d.slug}`)}): Jean-Score ${getScore(d).total}/100, DR ${formatRating(d.domain_rating)}, ${formatVisits(d.monthly_visits)} Besuche/Monat, ${pricingLabel(d.pricing)}, Einreichung ${experienceLabel(d.submission_experience).toLowerCase()}${d.dealCode ? `, Rabattcode ${d.dealCode} (${dealLabel(d.dealText)})` : ''}. Eintragen: ${d.submission_link}`
        )
        .join('\n')

    const lists = Object.entries(LISTS)
        .map(([slug, l]) => `- [${l.title}](${absoluteUrl(`/liste/${slug}`)})`)
        .join('\n')

    const body = `# ${SITE_NAME}

> Deutschsprachige, gepflegte Liste von ${stats.total} KI-Verzeichnissen (AI Directories), Startup-Plattformen und Launch-Seiten, in die Gründer ihr KI-Tool eintragen können. Pro Eintrag: Jean-Score (0 bis 100, gewichtet aus DR, Traffic, Preis und Einreichung), Domain Rating (Ahrefs, 0 bis 100), geschätzte Besuche pro Monat, Preismodell (kostenlos/kostenpflichtig), Qualität der Einreichung und ggf. Rabattcode.

Kennzahlen: ${stats.free.length} kostenlos, ${stats.paid.length} kostenpflichtig, ${stats.strong.length} mit Domain Rating ab 50, ${stats.withDeal.length} mit Rabattcode.
Rohdaten als JSON: ${absoluteUrl('/api/directories')}

## Listen
${lists}

## Alle Verzeichnisse, sortiert nach Domain Rating
${rows}
`

    return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
