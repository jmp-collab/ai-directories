import Link from 'next/link'
import { notFound } from 'next/navigation'
import JsonLd from '../../components/JsonLd'
import Breadcrumbs, { breadcrumbSchema } from '../../components/Breadcrumbs'
import KbExplorer from '../../components/KbExplorer'
import LeadMagnetBox from '../../components/LeadMagnetBox'
import { SITE_NAME } from '../../../lib/site'
import { getKbRubrik, getKbRubriken, kbForClient, KB_STAND } from '../../../lib/kb'
import { getPrompt } from '../../../lib/prompts'
import { getTutorial } from '../../../lib/tutorials'
import { getTools, toolHref, toolRel } from '../../../lib/tools'

export const dynamicParams = false

export function generateStaticParams() {
    return getKbRubriken().map((r) => ({ rubrik: r.key }))
}

export function generateMetadata({ params }) {
    const r = getKbRubrik(params.rubrik)
    if (!r) return {}
    const top = r.tools.filter((t) => t.konsens > 1).slice(0, 4).map((t) => t.name)
    return {
        title: `${r.name}: ${r.tools.length} Tools im Überblick`,
        description: `${r.intro} ${top.length ? `Konsens-Favoriten: ${top.join(', ')}.` : ''}`.slice(0, 300),
        alternates: { canonical: `/ki-tools/${r.key}` },
    }
}

export default function RubrikPage({ params }) {
    const r = getKbRubrik(params.rubrik)
    if (!r) notFound()
    const favoriten = r.tools.filter((t) => t.konsens > 1).slice(0, 6)
    const prompts = (r.prompts || []).map(getPrompt).filter(Boolean)
    const tutorial = r.tutorial && getTutorial(r.tutorial)
    const partner = getTools().filter((t) => t.category === KB_TOOLCAT[r.key])
    const crumbs = [
        { name: SITE_NAME, path: '/' },
        { name: 'KI-Tool-Datenbank', path: '/ki-tools' },
        { name: r.name, path: `/ki-tools/${r.key}` },
    ]
    const schema = [
        breadcrumbSchema(crumbs),
        {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: r.name,
            numberOfItems: r.tools.length,
            itemListElement: r.tools.slice(0, 30).map((t, i) => ({ '@type': 'ListItem', position: i + 1, name: t.name, url: t.url })),
        },
    ]
    return (
        <>
            <JsonLd data={schema} />
            <Breadcrumbs items={crumbs} />
            <section className="hero">
                <p className="eyebrow">KI-Tool-Datenbank · {r.tools.length} Tools</p>
                <h1>{r.name}</h1>
                <p className="lead">{r.intro}</p>
            </section>
            {favoriten.length > 0 && (
                <section aria-labelledby="favoriten">
                    <h2 id="favoriten">🏆 Konsens-Favoriten</h2>
                    <p>Diese Tools empfehlen mindestens zwei der drei großen Listen unabhängig voneinander.</p>
                    <ol className="podium">
                        {favoriten.map((t) => (
                            <li key={t.slug}>
                                <a href={t.url} target="_blank" rel="nofollow noopener noreferrer">
                                    <strong>{t.name}</strong> ↗
                                </a>
                                <span>{t.konsens === 3 ? '🏆 in allen 3 Listen' : '🥈 in 2 von 3 Listen'}</span>
                                {t.profil && <Link href={`/tools/${t.profil.slug}`}>🧔 Steckbrief mit Preisen →</Link>}
                            </li>
                        ))}
                    </ol>
                </section>
            )}
            {partner.length > 0 && (
                <section aria-labelledby="gepruft">
                    <h2 id="gepruft">🧔 Von Jean mit Preisen geprüft</h2>
                    <ul className="link-cards">
                        {partner.map((t) => (
                            <li key={t.slug}>
                                <Link href={`/tools/${t.slug}`}>
                                    <strong>{t.name}</strong>
                                </Link>
                                <span>{t.summary_de}</span>
                                <a href={toolHref(t)} target="_blank" rel={toolRel(t)}>
                                    {t.name} ansehen ↗{t.affiliate && <sup>*</sup>}
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
            )}
            <h2>Alle {r.tools.length} Tools</h2>
            <KbExplorer tools={kbForClient(r.tools)} rubrik={r.key} />
            {(prompts.length > 0 || tutorial) && (
                <section aria-labelledby="lernen">
                    <h2 id="lernen">Damit holst du mehr raus</h2>
                    <ul className="link-cards">
                        {tutorial && (
                            <li>
                                <Link href={`/tutorials/${tutorial.slug}`}>
                                    <strong>🎓 {tutorial.title}</strong>
                                </Link>
                                <span>{tutorial.minuten} Minuten, interaktiv mit Quiz</span>
                            </li>
                        )}
                        {prompts.map((p) => (
                            <li key={p.slug}>
                                <Link href={`/prompts/${p.slug}`}>
                                    <strong>💬 {p.title}</strong>
                                </Link>
                                <span>{p.ziel}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            )}
            <LeadMagnetBox id="prompt-paket" />
            <p className="source">
                Stand {KB_STAND}. Einträge aus drei offenen GitHub-Listen, Beschreibungen in Englisch aus der Quelle. <Link href="/ki-tools/quellen">Quellen und Lizenzen</Link> ·{' '}
                <Link href="/ki-tools">← alle Rubriken</Link>
            </p>
        </>
    )
}

// Rubrik der Datenbank -> Kategorie im geprüften Tool-Verzeichnis (db/tools.json)
const KB_TOOLCAT = {
    schreiben: 'SEO',
    produktivitaet: 'Automatisierung',
    agenten: 'Automatisierung',
    bild: 'Design',
    video: 'Video & Avatare',
    audio: 'Audio & Voice',
    marketing: 'Funnel & Marketing',
}
