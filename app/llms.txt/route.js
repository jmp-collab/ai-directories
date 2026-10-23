import { getDirectories, getSiteStats, LISTS } from '../../lib/data'
import { SITE_NAME, absoluteUrl } from '../../lib/site'
import { getScore } from '../../lib/score'
import { DACH, DACH_STAND } from '../../lib/dach'
import { ARTIKEL } from '../../lib/ratgeber'
import { getCheck, checkCount, CHECK_STAND } from '../../lib/checks'
import { getTools, TOOLS_STAND } from '../../lib/tools'
import { getPrompts } from '../../lib/prompts'
import { getTutorials } from '../../lib/tutorials'
import { getKbRubriken, kbStats, KB_SOURCES } from '../../lib/kb'
import { experienceLabel, pricingLabel, dealLabel, formatRating, formatVisits } from '../../utils/i18n-de'

export const dynamic = 'force-static'

// llms.txt (https://llmstxt.org): kompakte Markdown-Fassung für KI-Assistenten und Answer Engines.
export function GET() {
    const stats = getSiteStats()
    // Angaben der Verzeichnisse selbst (Freischaltung, Link-Typ, Status), nur wo belegt.
    const checkNote = (d) => {
        const c = getCheck(d.slug)
        if (!c) return ''
        if (c.status) return ` ACHTUNG, derzeit nicht eintragbar: ${c.status}`
        return [c.approval && ` Freischaltung laut Verzeichnis: ${c.approval}.`, c.link_type && ` Link-Typ laut Verzeichnis: ${c.link_type}.`]
            .filter(Boolean)
            .join('')
    }

    const rows = [...getDirectories()]
        .sort((a, b) => b.domain_rating - a.domain_rating)
        .map(
            (d) =>
                `- [${d.name}](${absoluteUrl(`/verzeichnis/${d.slug}`)}): Jean-Score ${getScore(d).total}/100, DR ${formatRating(d.domain_rating)}, ${formatVisits(d.monthly_visits)} Besuche/Monat, ${pricingLabel(d.pricing)}, Einreichung ${getCheck(d.slug)?.status ? 'derzeit zu' : experienceLabel(d.submission_experience).toLowerCase()}${d.dealCode ? `, Rabattcode ${d.dealCode} (${dealLabel(d.dealText)})` : ''}.${getCheck(d.slug)?.status ? '' : ` Eintragen: ${d.submission_link}`}${checkNote(d)}`
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
- [Deutsche KI-Verzeichnisse](${absoluteUrl('/deutsche-ki-verzeichnisse')})

## Werkzeuge und Ratgeber
- [Freischaltdauer und Link-Typ, belegt für ${checkCount()} Verzeichnisse (Stand ${CHECK_STAND})](${absoluteUrl('/freischaltung')})
- [Launch-Kit: Einreichungstexte erzeugen](${absoluteUrl('/launch-kit')})
- [Quiz](${absoluteUrl('/quiz')})
- [Vergleich](${absoluteUrl('/vergleich')})
- [Glossar](${absoluteUrl('/glossar')})
${ARTIKEL.map((a) => `- [${a.title}](${absoluteUrl(`/ratgeber/${a.slug}`)}): ${a.description}`).join('\n')}

## Deutschsprachige KI-Verzeichnisse (Semrush, Stand ${DACH_STAND})
${DACH.map((d) => `- [${d.name}](${d.link}): Authority Score ${d.authority}, organischer Traffic DE ${d.traffic}/Monat. ${d.note} Eintragen: ${d.submission_link}`).join('\n')}

## KI-Tool-Datenbank

${kbStats().gesamt} KI-Tools aus ${KB_SOURCES.map((s) => s.repo).join(', ')}; Konsens = Anzahl der Listen, in denen ein Tool steht. Übersicht: ${absoluteUrl('/ki-tools')}

${getKbRubriken().map((r) => `- [${r.name}](${absoluteUrl(`/ki-tools/${r.key}`)}): ${r.tools.length} Tools. Konsens-Favoriten: ${r.tools.filter((t) => t.konsens > 1).slice(0, 5).map((t) => t.name).join(', ') || 'keine'}.`).join('\n')}

## Tutorials

${getTutorials().map((t) => `- [${t.title}](${absoluteUrl(`/tutorials/${t.slug}`)}): ${t.description}`).join('\n')}

Prompt-Check (Score für eigene Prompts): ${absoluteUrl('/prompt-check')} · Downloads: ${absoluteUrl('/downloads')}

## Prompt-Bibliothek

Vorlagen auf Deutsch zum Ausfüllen, mit Absprung zu ChatGPT, Claude, Perplexity und Grok. Eigener Prompt mit Score: ${absoluteUrl('/prompt-baukasten')}

${getPrompts().map((p) => `- [${p.title}](${absoluteUrl(`/prompts/${p.slug}`)}): ${p.ziel}`).join('\n')}

## KI-Tools (Angaben laut Anbieter, Stand ${TOOLS_STAND})
${getTools().map((t) => `- [${t.name}](${absoluteUrl(`/tools/${t.slug}`)}): ${t.category}. ${t.summary_de} Gratis-Tarif: ${t.free_plan === true ? 'ja' : t.free_plan === false ? 'nein' : 'keine Angabe'}. Bezahlt ab: ${t.price_from || 'keine Angabe'}.`).join('\n')}

## Alle Verzeichnisse, sortiert nach Domain Rating
${rows}
`

    return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
