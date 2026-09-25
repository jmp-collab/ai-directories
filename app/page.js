import Link from 'next/link'
import DirectoryTable from './components/DirectoryTable'
import JsonLd from './components/JsonLd'
import Faq, { faqSchema } from './components/Faq'
import { getDirectories, getSiteStats } from '../lib/data'
import { SITE_NAME, SITE_URL, absoluteUrl } from '../lib/site'
import getFaq from '../utils/faq-de'
import { formatNumber } from '../utils/i18n-de'

export function generateMetadata() {
    const stats = getSiteStats()
    return {
        title: { absolute: `${stats.total} KI-Verzeichnisse: AI Directories für deinen Tool-Launch` },
        description: `Die deutsche Liste der KI-Verzeichnisse: ${stats.total} AI Directories mit Domain Rating, Traffic, Preis und Einreichungs-Check. ${stats.free.length} davon kostenlos. Tool eintragen, Backlinks holen.`,
        alternates: { canonical: '/' },
        openGraph: { url: '/' },
    }
}

export default function Home() {
    const directories = getDirectories()
    const stats = getSiteStats()
    const faq = getFaq(stats)
    const updated = new Intl.DateTimeFormat('de-DE', { month: 'long', year: 'numeric' }).format(new Date())

    const schema = [
        {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: SITE_NAME,
            url: SITE_URL,
            inLanguage: 'de-DE',
        },
        {
            '@context': 'https://schema.org',
            '@type': 'Dataset',
            name: 'KI-Verzeichnisse: Liste der AI Directories',
            description: `${stats.total} KI-Verzeichnisse und Startup-Plattformen mit Domain Rating, geschätzten monatlichen Besuchen, Preismodell und Bewertung der Einreichung.`,
            url: SITE_URL,
            inLanguage: 'de-DE',
            dateModified: new Date().toISOString().slice(0, 10),
            keywords: ['KI-Verzeichnis', 'AI Directory', 'KI-Tool eintragen', 'Backlinks', 'Startup Launch'],
            variableMeasured: ['Domain Rating', 'Besuche pro Monat', 'Preismodell', 'Einreichung'],
            distribution: {
                '@type': 'DataDownload',
                encodingFormat: 'application/json',
                contentUrl: absoluteUrl('/api/directories'),
            },
        },
        {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'KI-Verzeichnisse nach Domain Rating',
            numberOfItems: stats.total,
            itemListElement: [...directories]
                .sort((a, b) => b.domain_rating - a.domain_rating)
                .map((d, i) => ({
                    '@type': 'ListItem',
                    position: i + 1,
                    name: d.name,
                    url: absoluteUrl(`/verzeichnis/${d.slug}`),
                })),
        },
        faqSchema(faq),
    ]

    return (
        <>
            <JsonLd data={schema} />

            <section className="hero">
                <p className="eyebrow">Stand: {updated}</p>
                <h1>
                    KI-Verzeichnisse: {stats.total} AI Directories, in die du dein KI-Tool eintragen kannst
                </h1>
                <p className="lead">
                    <strong>Kurz gesagt:</strong> Hier findest du {stats.total} KI-Verzeichnisse, Startup-Plattformen und
                    Launch-Seiten mit Domain Rating, Traffic, Preis und einer ehrlichen Einschätzung, wie gut die Einreichung
                    klappt. {stats.free.length} sind kostenlos, bei {stats.freeAndSmooth.length} geht der Eintrag gratis und ohne
                    Stolpersteine.
                </p>
                <dl className="stats">
                    <div>
                        <dt>Verzeichnisse</dt>
                        <dd>{formatNumber(stats.total)}</dd>
                    </div>
                    <div>
                        <dt>Kostenlos</dt>
                        <dd>{formatNumber(stats.free.length)}</dd>
                    </div>
                    <div>
                        <dt>Domain Rating 50+</dt>
                        <dd>{formatNumber(stats.strong.length)}</dd>
                    </div>
                    <div>
                        <dt>Mit Rabattcode</dt>
                        <dd>{formatNumber(stats.withDeal.length)}</dd>
                    </div>
                </dl>
                <ul className="quick-links">
                    <li>
                        <Link href="/liste/kostenlos">Nur kostenlose anzeigen →</Link>
                    </li>
                    <li>
                        <Link href="/liste/domain-rating-50-plus">Die stärksten Domains →</Link>
                    </li>
                    <li>
                        <Link href="/liste/rabattcodes">Rabattcodes →</Link>
                    </li>
                </ul>
            </section>

            <section aria-labelledby="warum">
                <h2 id="warum">Warum überhaupt KI-Verzeichnisse?</h2>
                <p>
                    Wer ein KI-Tool launcht, hat am Anfang drei Probleme: keine Backlinks, keine Sichtbarkeit, keine ersten
                    Nutzer. Verzeichnisse lösen keins davon komplett. Aber sie bringen dir mit ein paar Stunden Arbeit
                    themenrelevante Links, erste Referral-Klicks und Nennungen, die auch ChatGPT, Perplexity und Google AI
                    Overviews aufgreifen. Aus SEO-Sicht gilt trotzdem: lieber 20 passende Verzeichnisse mit echtem Traffic als
                    200 Linkfriedhöfe.
                </p>
            </section>

            <section aria-labelledby="top-kostenlos">
                <h2 id="top-kostenlos">Top 10: kostenlos und reibungslos</h2>
                <p>Mein Startpunkt, wenn das Budget bei null liegt. Sortiert nach Domain Rating.</p>
                <DirectoryTable directories={stats.topFreeSmooth} interactive={false} />
            </section>

            <section aria-labelledby="alle">
                <h2 id="alle">Alle {stats.total} KI-Verzeichnisse</h2>
                <p>Filtern, sortieren, eintragen. Ein Klick auf den Namen zeigt Details, Einschätzung und Alternativen.</p>
                <DirectoryTable directories={directories} />
            </section>

            <section aria-labelledby="checkliste">
                <h2 id="checkliste">Checkliste: So trägst du dein Tool richtig ein</h2>
                <ol className="checklist">
                    <li>
                        <strong>Einmal sauber vorbereiten.</strong> Name, Einzeiler (max. 60 Zeichen), Beschreibung mit 100 bis 300
                        Wörtern, Logo als PNG/SVG, 3 bis 5 Screenshots, Kategorie, Preismodell, Kontakt-Mail.
                    </li>
                    <li>
                        <strong>Überall gleich benennen.</strong> Gleicher Name, gleicher Einzeiler, gleiche URL. So erkennen Google
                        und KI-Systeme dein Tool als eine Marke statt als zehn verschiedene.
                    </li>
                    <li>
                        <strong>Mit den starken, kostenlosen anfangen.</strong> Die Top 10 oben bringen am meisten pro Minute.
                    </li>
                    <li>
                        <strong>UTM-Parameter setzen.</strong> Zum Beispiel <code>?utm_source=verzeichnisname&amp;utm_medium=directory</code>,
                        damit du in der Analyse siehst, welches Verzeichnis wirklich Nutzer bringt.
                    </li>
                    <li>
                        <strong>Buch führen.</strong> Datum, Verzeichnis, Status, Link zur Listing-Seite. Nach 4 Wochen prüfen, was
                        live ist und was Klicks bringt.
                    </li>
                    <li>
                        <strong>Erst dann Geld ausgeben.</strong> Bezahlte Einträge nur, wenn Traffic und Zielgruppe passen. Vorher
                        nach dofollow fragen und Rabattcodes checken.
                    </li>
                </ol>
            </section>

            <section aria-labelledby="legende">
                <h2 id="legende">So liest du die Tabelle</h2>
                <dl className="legend">
                    <dt>Domain Rating (DR)</dt>
                    <dd>
                        Ahrefs-Wert von 0 bis 100 für die Linkstärke einer Domain. Ab etwa 50 wird es für ein junges Tool richtig
                        interessant.
                    </dd>
                    <dt>Besuche/Monat</dt>
                    <dd>Geschätzter Traffic der Verzeichnis-Domain. Ein Richtwert, keine Garantie für Klicks auf deinen Eintrag.</dd>
                    <dt>Einreichung</dt>
                    <dd>
                        Reibungslos heißt: Formular funktioniert, Eintrag geht ohne Umwege live. Hakelig heißt: Formular kaputt, nur
                        per Mail, lange Wartezeit oder Pflicht-Backlink.
                    </dd>
                    <dt>Preis</dt>
                    <dd>Kostenlos oder kostenpflichtig. Viele kostenlose Verzeichnisse verkaufen zusätzlich Featured-Plätze.</dd>
                </dl>
            </section>

            <section aria-labelledby="faq">
                <h2 id="faq">Häufige Fragen zu KI-Verzeichnissen</h2>
                <Faq items={faq} />
            </section>
        </>
    )
}
