import Link from 'next/link'
import JsonLd from '../../components/JsonLd'
import Breadcrumbs, { breadcrumbSchema } from '../../components/Breadcrumbs'
import Faq, { faqSchema } from '../../components/Faq'
import LeadMagnetBox from '../../components/LeadMagnetBox'
import { Band } from '../../components/Deko'
import ApiRechner from '../../components/ApiRechner'
import { SITE_NAME } from '../../../lib/site'
import { RECHNER } from '../../../lib/rechner'
import { API_MODELLE, PREISE_STAND } from '../../../lib/preise'

const R = RECHNER.find((r) => r.slug === 'api-kosten')

export const metadata = {
    title: 'KI-API-Kostenrechner: GPT, Claude und Gemini Kosten pro Monat berechnen',
    description: 'Was kostet deine KI-Anwendung? Anfragen, Input- und Output-Tokens einstellen und die Monatskosten aller aktuellen Modelle von OpenAI, Anthropic und Google vergleichen. Preise laut Anbieter.',
    alternates: { canonical: '/rechner/api-kosten' },
}

const FAQ = [
    {
        "q": "Was ist ein Token?",
        "a": "Ein Token ist ein Textstück, mit dem Sprachmodelle rechnen. Auf Deutsch entspricht ein Token grob 3 bis 4 Zeichen. Abgerechnet werden Eingabe (Input) und Antwort (Output) getrennt; Output ist meist deutlich teurer."
    },
    {
        "q": "Wie senke ich die API-Kosten?",
        "a": "Kürzere Prompts, ein kleineres Modell für einfache Aufgaben, Caching für wiederkehrenden Kontext und Batch-Verarbeitung für nicht eilige Aufgaben. Batch halbiert bei OpenAI und Google den Preis."
    },
    {
        "q": "Sind die Preise aktuell?",
        "a": "Sie stammen von den offiziellen Preisseiten mit dem angegebenen Datum und werden monatlich geprüft. Vor großen Projekten immer auf der Anbieterseite gegenprüfen."
    }
]

export default function Page() {
    const crumbs = [
        { name: SITE_NAME, path: '/' },
        { name: 'Rechner', path: '/rechner' },
        { name: R.titel, path: '/rechner/api-kosten' },
    ]
    const schema = [
        breadcrumbSchema(crumbs),
        {
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: R.titel,
            applicationCategory: 'FinanceApplication',
            operatingSystem: 'Web',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
            description: R.kurz,
        },
        faqSchema(FAQ),
    ]
    return (
        <>
            <JsonLd data={schema} />
            <Breadcrumbs items={crumbs} />
            <section className="hero">
                <p className="eyebrow">
                    Rechner · {R.emoji}
                </p>
                <h1>{R.titel}</h1>
                <p className="lead">{R.kurz}</p>
            </section>
            <Band farbe="blau" id="rechnen" titel="Jetzt rechnen">
                <ApiRechner />
            </Band>
            <section aria-labelledby="preise">
                <h2 id="preise">Preistabelle pro 1 Million Tokens</h2>
                <div className="table-scroll">
                <table>
                    <thead>
                        <tr>
                            <th>Modell</th>
                            <th>Input</th>
                            <th>Output</th>
                            <th>Quelle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {API_MODELLE.map((m) => (
                            <tr key={m.id}>
                                <td>
                                    {m.name}
                                    {m.hinweis && <small> ({m.hinweis})</small>}
                                </td>
                                <td>{m.input} $</td>
                                <td>{m.output} $</td>
                                <td>
                                    <a href={m.quelle} rel="nofollow noopener noreferrer">
                                        {m.anbieter}
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
                <p className="source">Stand {PREISE_STAND}, Standardverarbeitung ohne Cache, Batch oder Datenresidenz-Aufschläge.</p>
            </section>
            <Band farbe="pink" id="faq" titel="Fragen und Antworten 🙋">
                <Faq items={FAQ} />
            </Band>
            <section aria-labelledby="mehr">
                <h2 id="mehr">Weitere Rechner</h2>
                <ul className="link-cards">
                    {RECHNER.filter((r) => r.slug !== R.slug).map((r) => (
                        <li key={r.slug}>
                            <Link href={`/rechner/${r.slug}`}>
                                <strong>
                                    {r.emoji} {r.titel}
                                </strong>
                            </Link>
                            <span>{r.kurz}</span>
                        </li>
                    ))}
                </ul>
            </section>
            <LeadMagnetBox id="prompt-spickzettel" />
        </>
    )
}
