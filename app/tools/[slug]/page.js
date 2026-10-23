import Link from 'next/link'
import { notFound } from 'next/navigation'
import JsonLd from '../../components/JsonLd'
import Breadcrumbs, { breadcrumbSchema } from '../../components/Breadcrumbs'
import { SITE_NAME, absoluteUrl } from '../../../lib/site'
import { getTools, getTool, getAlternatives, toolHref, toolRel, TOOLS_STAND } from '../../../lib/tools'
import { comparisonsForTool } from '../../../lib/comparisons'

export const dynamicParams = false

export function generateStaticParams() {
    return getTools().map((t) => ({ slug: t.slug }))
}

export function generateMetadata({ params }) {
    const t = getTool(params.slug)
    if (!t) return {}
    return {
        title: `${t.name}: Preis, Gratis-Tarif & Alternativen`,
        description: `${t.summary_de} ${t.free_plan ? 'Mit Gratis-Tarif. ' : ''}${t.price_from ? `Bezahlt ab ${t.price_from}. ` : ''}Dazu Alternativen aus ${t.category}.`.slice(0, 300),
        alternates: { canonical: `/tools/${t.slug}` },
    }
}

const yesNo = (v) => (v === true ? 'Ja' : v === false ? 'Nein' : 'keine Angabe')

export default function ToolPage({ params }) {
    const t = getTool(params.slug)
    if (!t) notFound()
    const alternatives = getAlternatives(t)
    const crumbs = [
        { name: SITE_NAME, path: '/' },
        { name: 'KI-Tools', path: '/tools' },
        { name: t.name, path: `/tools/${t.slug}` },
    ]
    const schema = [
        breadcrumbSchema(crumbs),
        {
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: t.name,
            applicationCategory: t.category,
            operatingSystem: 'Web',
            url: t.url,
            description: t.summary_de,
        },
    ]
    return (
        <>
            <JsonLd data={schema} />
            <Breadcrumbs items={crumbs} />
            <section className="hero">
                <p className="eyebrow">{t.category}</p>
                <h1>{t.name}: Preis, Gratis-Tarif und Alternativen</h1>
                <p className="lead">{t.summary_de}</p>
                <p>
                    <strong>Am besten für:</strong> {t.best_for_de}
                </p>
                <p className="cta-row">
                    <a className="button" href={toolHref(t)} target="_blank" rel={toolRel(t)}>
                        {t.name} ansehen ↗{t.affiliate && <sup>*</sup>}
                    </a>
                    {t.pricing_url && (
                        <a href={t.pricing_url} target="_blank" rel="noopener noreferrer">
                            Preisseite ↗
                        </a>
                    )}
                </p>
            </section>
            <dl className="facts">
                <div>
                    <dt>Gratis-Tarif</dt>
                    <dd>{yesNo(t.free_plan)}</dd>
                </div>
                <div>
                    <dt>Testphase</dt>
                    <dd>{t.free_trial || '–'}</dd>
                </div>
                <div>
                    <dt>Bezahlt ab</dt>
                    <dd>
                        {t.price_from || 'keine Angabe'}
                        <small>laut Anbieter, {TOOLS_STAND}</small>
                    </dd>
                </div>
                <div>
                    <dt>Oberfläche auf Deutsch</dt>
                    <dd>{yesNo(t.german_ui)}</dd>
                </div>
            </dl>
            {t.source && (
                <p className="source">
                    Quelle: <a href={t.source} target="_blank" rel="nofollow noopener noreferrer">{new URL(t.source).hostname}</a>
                    {t.affiliate && <> · * Partnerlink, <Link href="/transparenz">mehr dazu</Link></>}
                </p>
            )}
            {comparisonsForTool(t.slug).map((c) => (
                <p key={c.slug} className="service-hint">
                    <strong>Im direkten Vergleich:</strong> <Link href={`/tool-vergleiche/${c.slug}`}>{c.title} →</Link>
                </p>
            ))}
            {alternatives.length > 0 && (
                <section aria-labelledby="alternativen">
                    <h2 id="alternativen">Alternativen zu {t.name}</h2>
                    <ul className="link-cards">
                        {alternatives.map((a) => (
                            <li key={a.slug}>
                                <Link href={`/tools/${a.slug}`}>
                                    <strong>{a.name}</strong>
                                </Link>
                                <span>{a.summary_de}</span>
                                <span>
                                    {a.free_plan ? 'Gratis-Tarif · ' : ''}
                                    {a.price_from ? `ab ${a.price_from}` : 'Preis auf Anfrage'}
                                </span>
                            </li>
                        ))}
                    </ul>
                </section>
            )}
            <p>
                <Link href="/tools">← Alle KI-Tools</Link>
            </p>
        </>
    )
}
