import Link from 'next/link'
import Breadcrumbs, { breadcrumbSchema } from '../components/Breadcrumbs'
import JsonLd from '../components/JsonLd'
import Jean from '../components/Jean'
import { getNews, NEWS_STAND } from '../../lib/news'
import { absoluteUrl } from '../../lib/site'
import Vernetzt, { seitenPfad } from '../components/Vernetzt'

export const metadata = {
    title: 'KI-News: aktuelle KI-Nachrichten verständlich erklärt',
    description: `Aktuelle KI-News auf Deutsch: neue Funktionen, Abschaltungen, Sicherheitslücken und Preise von OpenAI, Anthropic, Google und Co. Jede Meldung geprüft, mit Quellen und dem, was du jetzt tun solltest. Stand ${NEWS_STAND}.`,
    alternates: { canonical: '/ki-news' },
    openGraph: { url: '/ki-news' },
}

const datumKurz = (d) => new Date(d).toLocaleDateString('de-DE', { day: 'numeric', month: 'short' })

function KiNews() {
    const crumbs = [
        { name: 'AIGeddon', path: '/' },
        { name: 'KI-News', path: '/ki-news' },
    ]
    const liste = getNews()
    const themen = [...new Set(liste.map((n) => n.thema))]
    const schema = [
        breadcrumbSchema(crumbs),
        {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: liste.map((n, i) => ({ '@type': 'ListItem', position: i + 1, url: absoluteUrl(`/ki-news/${n.slug}`), name: n.titel })),
        },
    ]
    return (
        <>
            <JsonLd data={schema} />
            <Breadcrumbs items={crumbs} />
            <section className="hero">
                <p className="eyebrow">Stand {NEWS_STAND}</p>
                <h1>KI-News: was diese Woche wirklich wichtig ist</h1>
                <p className="lead">
                    {liste.length} Meldungen, Themen: {themen.join(', ')}. Jede mit offizieller Quelle, einem „Was du jetzt tun solltest“ und Links zu den passenden Tools, Prompts und Erklärungen hier auf der Seite.
                </p>
                <Jean>Ich lese die Pressemitteilungen, damit du es nicht musst. Übrig bleibt, was dich betrifft, und ein Witz pro Absatz als Schmerzensgeld.</Jean>
            </section>

            <section aria-labelledby="meldungen">
                <h2 id="meldungen">Alle Meldungen, neueste zuerst</h2>
                <ul className="news-liste">
                    {liste.map((n) => (
                        <li key={n.slug} className="news-karte">
                            <p className="news-meta">
                                <span className="news-thema">
                                    <span aria-hidden="true">{n.emoji}</span> {n.thema}
                                </span>
                                <time dateTime={n.datum}>{datumKurz(n.datum)}</time>
                            </p>
                            <h3>
                                <Link href={`/ki-news/${n.slug}`}>{n.titel}</Link>
                            </h3>
                            <p>{n.kurz[0]}</p>
                            <details className="klapp">
                                <summary>Was du jetzt tun solltest</summary>
                                <ul>
                                    {n.tun.slice(0, 3).map((t) => (
                                        <li key={t}>{t}</li>
                                    ))}
                                </ul>
                            </details>
                        </li>
                    ))}
                </ul>
            </section>

            <section aria-labelledby="mehr">
                <h2 id="mehr">Hintergrund statt Schlagzeile</h2>
                <ul className="link-cards">
                    <li>
                        <Link href="/neue-ki-modelle">
                            <strong>Neue KI-Modelle 2026</strong>
                        </Link>
                        <span>GPT-6, Gemini 4 Argon, Claude 5.5 und Co. mit Daten und Preisen.</span>
                    </li>
                    <li>
                        <Link href="/glossar">
                            <strong>KI-Glossar</strong>
                        </Link>
                        <span>Wenn in einer Meldung ein Begriff klemmt.</span>
                    </li>
                    <li>
                        <Link href="/tools">
                            <strong>KI-Tools mit Preisen</strong>
                        </Link>
                        <span>Steckbriefe zu den Tools aus den News.</span>
                    </li>
                    <li>
                        <Link href="/prompts">
                            <strong>Prompt-Bibliothek</strong>
                        </Link>
                        <span>Fertige Vorlagen, um Neues direkt auszuprobieren.</span>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default function Seite() {
    return (
        <>
            <KiNews />
            <Vernetzt pfad={seitenPfad('/ki-news')} />
        </>
    )
}
