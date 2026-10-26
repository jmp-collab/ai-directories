import Link from 'next/link'
import { notFound } from 'next/navigation'
import JsonLd from '../../components/JsonLd'
import Breadcrumbs, { breadcrumbSchema } from '../../components/Breadcrumbs'
import Jean from '../../components/Jean'
import JeanIcon from '../../components/JeanIcon'
import Faq from '../../components/Faq'
import { SITE_NAME } from '../../../lib/site'
import { getComparisons, getComparison } from '../../../lib/comparisons'
import { getTool, toolHref, toolRel, TOOLS_STAND } from '../../../lib/tools'

export const dynamicParams = false

export function generateStaticParams() {
    return getComparisons().map((c) => ({ slug: c.slug }))
}

export function generateMetadata({ params }) {
    const c = getComparison(params.slug)
    if (!c) return {}
    return {
        title: c.title.length > 40 ? `${c.title} im Vergleich` : `${c.title}: Vergleich & Empfehlung`,
        description: `${c.intro} Preise, Gratis-Tarife und welches Tool für welchen Zweck passt (Stand ${TOOLS_STAND}).`,
        alternates: { canonical: `/tool-vergleiche/${c.slug}` },
    }
}

const yesNo = (v) => (v === true ? 'Ja' : v === false ? 'Nein' : 'keine Angabe')

const ROWS = [
    ['Am besten für', (t) => t.best_for_de],
    ['Gratis-Tarif', (t) => yesNo(t.free_plan)],
    ['Testphase', (t) => t.free_trial || '–'],
    ['Bezahlt ab', (t) => t.price_from || 'keine Angabe'],
    ['Oberfläche auf Deutsch', (t) => yesNo(t.german_ui)],
]

export default function ComparisonPage({ params }) {
    const c = getComparison(params.slug)
    if (!c) notFound()
    const crumbs = [
        { name: SITE_NAME, path: '/' },
        { name: 'Tool-Vergleiche', path: '/tool-vergleiche' },
        { name: c.title, path: `/tool-vergleiche/${c.slug}` },
    ]
    const faq = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: c.picks.map(([question, slug, why]) => ({
            '@type': 'Question',
            name: `Welches Tool passt, wenn gilt: ${question}?`,
            acceptedAnswer: { '@type': 'Answer', text: `${getTool(slug)?.name}. ${why}` },
        })),
    }
    for (const [q, a] of c.faq || []) faq.mainEntity.push({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })
    const anyAffiliate = c.items.some((t) => t.affiliate)
    return (
        <>
            <JsonLd data={[breadcrumbSchema(crumbs), faq]} />
            <Breadcrumbs items={crumbs} />
            <section className="hero">
                <p className="eyebrow">{c.topic} im Vergleich ⚖️</p>
                <h1>{c.title}</h1>
                <p className="lead">{c.intro}</p>
                <Jean>Kurzfassung: Es gibt kein bestes Tool, nur das beste für deinen Zweck. Deshalb unten pro Fall eine klare Ansage.</Jean>
            </section>

            <section aria-labelledby="empfehlung">
                <h2 id="empfehlung">Jeans Empfehlung je Anwendungsfall</h2>
                <ul className="link-cards">
                    {c.picks.map(([question, slug, why]) => {
                        const t = getTool(slug)
                        return (
                            <li key={question}>
                                <span>{question}</span>
                                <a href={toolHref(t)} target="_blank" rel={toolRel(t)}>
                                    <strong>
                                        <JeanIcon badge="pokal" size={24} /> {t.name}
                                    </strong>{' '}
                                    ↗{t.affiliate && <sup>*</sup>}
                                </a>
                                <span>{why}</span>
                            </li>
                        )
                    })}
                </ul>
            </section>

            <section aria-labelledby="tabelle">
                <h2 id="tabelle">Die Fakten nebeneinander</h2>
                <div className="table-scroll">
                    <table>
                        <caption className="sr-only">{c.title}: Preise und Eigenschaften laut Anbieter</caption>
                        <thead>
                            <tr>
                                <th scope="col">
                                    <span className="sr-only">Merkmal</span>
                                </th>
                                {c.items.map((t) => (
                                    <th scope="col" key={t.slug}>
                                        <Link href={`/tools/${t.slug}`}>{t.name}</Link>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {ROWS.map(([label, get]) => (
                                <tr key={label}>
                                    <th scope="row">{label}</th>
                                    {c.items.map((t) => (
                                        <td key={t.slug}>{get(t)}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="source">
                    Angaben laut Anbieter, Stand {TOOLS_STAND}. Maßgeblich ist die jeweilige Preisseite.
                    {anyAffiliate && (
                        <>
                            {' '}
                            * Partnerlink, <Link href="/transparenz">mehr dazu</Link>.
                        </>
                    )}
                </p>
            </section>
            {c.unterschiede?.length > 0 && (
                <section aria-labelledby="unterschiede">
                    <h2 id="unterschiede">Die wichtigsten Unterschiede 🔍</h2>
                    <dl className="unterschiede">
                        {c.unterschiede.map(([titel, text]) => (
                            <div key={titel}>
                                <dt>{titel}</dt>
                                <dd>{text}</dd>
                            </div>
                        ))}
                    </dl>
                </section>
            )}
            {c.faq?.length > 0 && (
                <section aria-labelledby="faq">
                    <h2 id="faq">Häufige Fragen 🙋</h2>
                    <Faq items={c.faq} />
                </section>
            )}
            {c.quellen?.length > 0 && (
                <section aria-labelledby="quellen" className="quellen-block">
                    <h2 id="quellen">Quellen und Stand 🔎</h2>
                    <p>Unterschiede und Antworten wurden {c.geprueft ? `am ${new Date(c.geprueft).toLocaleDateString('de-DE')} ` : ''}auf den Seiten der Anbieter geprüft.</p>
                    <ul className="quellen">
                        {c.quellen.map((q) => (
                            <li key={q.url}>
                                <a href={q.url} rel="noopener nofollow" target="_blank">
                                    {q.titel}
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
            )}
            <p>
                <Link href="/tool-vergleiche">← Alle Tool-Vergleiche</Link> · <Link href="/tools">KI-Tool-Verzeichnis</Link>
            </p>
        </>
    )
}
