import Link from 'next/link'
import DirectoryTable from './components/DirectoryTable'
import JsonLd from './components/JsonLd'
import Faq, { faqSchema } from './components/Faq'
import SchicksalsWuerfel from './components/SchicksalsWuerfel'
import Jean, { HELLO } from './components/Jean'
import ToolPartners from './components/ToolPartners'
import TrackerPanel from './components/TrackerPanel'
import { Band, Trenner } from './components/Deko'
import { kbStats } from '../lib/kb'
import { getPrompts } from '../lib/prompts'
import { getTutorials } from '../lib/tutorials'
import archiv from '../db/prompt-archiv.json'
import { TESTS } from '../lib/kitests'

const testCount = TESTS.length
import { effectiveRating } from '../lib/fresh'
import { hasStatusIssue } from '../lib/checks'
import { getDirectories, getSiteStats } from '../lib/data'
import { SITE_NAME, SITE_URL, absoluteUrl, withBase } from '../lib/site'
import getFaq from '../utils/faq-de'
import { formatNumber } from '../utils/i18n-de'

export function generateMetadata() {
    const stats = getSiteStats()
    return {
        title: { absolute: `${stats.total} KI-Verzeichnisse für deinen Tool-Launch | AIGeddon` },
        description: `Die deutsche Liste der KI-Verzeichnisse: ${stats.total} AI Directories mit Domain Rating, Traffic, Preis und Einreichungs-Check. ${stats.free.length} davon kostenlos. Tool eintragen, Backlinks holen, nebenbei lachen.`,
        alternates: { canonical: '/' },
        openGraph: { url: '/' },
    }
}

export default function Home() {
    const directories = getDirectories()
    const stats = getSiteStats()
    // Top 10 nach belastbarem DR: fragwürdige Werte zählen mit dem frisch gemessenen Authority Score.
    const topFree = stats.freeAndSmooth
        .filter((d) => !hasStatusIssue(d.slug))
        .sort((a, b) => effectiveRating(b) - effectiveRating(a) || b.monthly_visits - a.monthly_visits)
        .slice(0, 10)
    const faq = getFaq({ ...stats, topFreeSmooth: topFree })
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
        {
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'KI-Tool in Verzeichnisse eintragen',
            inLanguage: 'de-DE',
            totalTime: 'PT10M',
            step: [
                ['Einmal sauber vorbereiten', 'Name, Einzeiler, Beschreibung mit 100 bis 300 Wörtern, Logo, 3 bis 5 Screenshots, Kategorie, Preismodell und Kontakt-Mail bereitlegen.'],
                ['Überall gleich benennen', 'Gleicher Name, gleicher Einzeiler, gleiche URL in jedem Verzeichnis.'],
                ['Mit den starken, kostenlosen anfangen', 'Zuerst die kostenlosen Verzeichnisse mit reibungsloser Einreichung und hohem Domain Rating eintragen.'],
                ['UTM-Parameter setzen', 'Links mit utm_source und utm_medium versehen, um Klicks pro Verzeichnis zu messen.'],
                ['Buch führen', 'Datum, Verzeichnis, Status und Link zur Listing-Seite notieren und nach 4 Wochen prüfen.'],
                ['Erst dann Geld ausgeben', 'Bezahlte Einträge nur bei passendem Traffic, nach dofollow fragen und Rabattcodes nutzen.'],
            ].map(([name, text], i) => ({ '@type': 'HowToStep', position: i + 1, name, text })),
        },
        faqSchema(faq),
    ]

    return (
        <>
            <JsonLd data={schema} />

            <section className="hero">
                <p className="eyebrow">Frisch gepflegt: {updated} 🔥</p>
                <h1>
                    KI-Verzeichnisse: {stats.total} AI Directories, in die du dein KI-Tool eintragen kannst (statt es nur deiner
                    Mutter zu zeigen)
                </h1>
                <p className="lead">
                    <strong>Kurz gesagt:</strong> Hier findest du {stats.total} KI-Verzeichnisse, Startup-Plattformen und
                    Launch-Seiten mit Domain Rating, Traffic, Preis und einer ehrlichen Einschätzung, wie gut die Einreichung
                    klappt. {stats.free.length} sind kostenlos, bei {stats.freeAndSmooth.length} geht der Eintrag gratis und ohne
                    Stolpersteine. Der Rest ist Arbeit, Kaffee und gelegentlich Fluchen.
                </p>
                <Jean>
                    {HELLO[new Date().getDate() % HELLO.length]} <Link href="/ueber-jean">Mehr über mich →</Link>
                </Jean>
                <SchicksalsWuerfel
                    options={stats.freeAndSmooth.map((d) => ({
                        name: d.name,
                        slug: d.slug,
                        submission_link: d.submission_link,
                    }))}
                />
                <dl className="stats">
                    <div>
                        <dt>Verzeichnisse 📚</dt>
                        <dd data-count={stats.total}>{formatNumber(stats.total)}</dd>
                    </div>
                    <div>
                        <dt>Kostenlos (juhu) 🎁</dt>
                        <dd data-count={stats.free.length}>{formatNumber(stats.free.length)}</dd>
                    </div>
                    <div>
                        <dt>Domain Rating 50+ 💪</dt>
                        <dd data-count={stats.strong.length}>{formatNumber(stats.strong.length)}</dd>
                    </div>
                    <div>
                        <dt>Mit Rabattcode 🤑</dt>
                        <dd data-count={stats.withDeal.length}>{formatNumber(stats.withDeal.length)}</dd>
                    </div>
                </dl>
                <ul className="quick-links">
                    <li>
                        <Link href="/liste/kostenlos">Nur Gratis-Zeug, bitte →</Link>
                    </li>
                    <li>
                        <Link href="/liste/domain-rating-50-plus">Die Muskelprotze unter den Domains →</Link>
                    </li>
                    <li>
                        <Link href="/liste/rabattcodes">Rabattcodes für Sparfüchse →</Link>
                    </li>
                    <li>
                        <Link href="/deutsche-ki-verzeichnisse">Deutsche Verzeichnisse 🇩🇪 →</Link>
                    </li>
                    <li>
                        <Link href="/launch-kit">Launch-Kit: Texte erzeugen →</Link>
                    </li>
                    <li>
                        <Link href="/quiz">Quiz: Was passt zu mir? →</Link>
                    </li>
                    <li>
                        <Link href="/vergleich">Vergleichen →</Link>
                    </li>
                </ul>
            </section>

            <Band farbe="lila" id="einstieg" titel="Was suchst du heute? 🧭" sticker="Neu: KI-Tool-Datenbank">
                <ul className="entry-tiles">
                    {[
                        ['/ki-tools', '🛠️', 'KI-Tools', 'Die große Datenbank mit Konsens-Signal aus den 3 größten Community-Listen.', `${kbStats().gesamt} Tools`, '#bfdbfe'],
                        ['/#alle', '📚', 'KI-Verzeichnisse', 'Wo du dein KI-Tool einträgst, mit Domain Rating, Preis und Check.', `${stats.total} Verzeichnisse`, '#fde68a'],
                        ['/prompts', '💬', 'Prompts', 'Vorlagen zum Ausfüllen und Rollen-Prompts, mit einem Klick an ChatGPT und Claude.', `${getPrompts().length + archiv.anzahl} Prompts`, '#a7f3d0'],
                        ['/tutorials', '🎓', 'Tutorials', 'Interaktiv mit Vorher/Nachher-Regler, Quiz und Konfetti.', `${getTutorials().length} Kurse`, '#fbcfe8'],
                        ['/ki-test', '🧪', 'KI-Test', 'ChatGPT, Claude, Gemini & Co. selbst testen und Rangliste erhalten.', `${testCount} Aufgaben`, '#c7d2fe'],
                        ['/rechner', '🧮', 'KI-Rechner', 'Lohnt sich ein KI-Abo? Was kostet die API? Wie lange dauert der Launch?', '3 Rechner', '#99f6e4'],
                        ['/prompt-check', '🔍', 'Prompt-Check', 'Prompt einfügen, Score sehen, besser werden.', 'Gratis-Tool', '#ddd6fe'],
                        ['/tool-vergleiche', '🥊', 'Tool-Vergleiche', 'Make vs. Zapier, Semrush vs. Surfer und mehr, mit klarer Empfehlung.', 'Vergleiche', '#fed7aa'],
                        ['/downloads', '🎁', 'Downloads', 'Spickzettel, Prompt-Paket und Top-50-Tabelle zum Mitnehmen.', 'Gratis', '#bbf7d0'],
                        ['/top-50', '🏆', 'Top 50', 'Die 50 besten KI-Verzeichnisse nach Jean-Score.', 'Rangliste', '#fecaca'],
                    ].map(([href, emoji, name, text, count, tile]) => (
                        <li key={href}>
                            <Link href={href} style={{ '--tile': tile }}>
                                <span className="entry-emoji" aria-hidden="true">
                                    {emoji}
                                </span>
                                <strong>{name}</strong>
                                <span>{text}</span>
                                <span className="entry-count">{count}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </Band>

            <section aria-labelledby="warum">
                <h2 id="warum">Warum überhaupt KI-Verzeichnisse? 🤔</h2>
                <p>
                    Wer ein KI-Tool launcht, hat am Anfang drei Probleme: keine Backlinks, keine Sichtbarkeit, keine ersten
                    Nutzer. Dazu kommt ein viertes: Die einzige Person, die das Tool täglich benutzt, bist du selbst. Verzeichnisse
                    lösen das nicht komplett. Aber sie bringen dir mit ein paar Stunden Arbeit themenrelevante Links, erste
                    Referral-Klicks und Nennungen, die auch ChatGPT, Perplexity und Google AI Overviews aufgreifen. Aus SEO-Sicht
                    gilt trotzdem: lieber 20 passende Verzeichnisse mit echtem Traffic als 200 Linkfriedhöfe, auf denen nur noch
                    der Wind weht und ein Cookie-Banner.
                </p>
            </section>

            <Band farbe="mint" id="werkzeuge" titel="Mehr als eine Liste 🧰">
                <ul className="link-cards">
                    <li>
                        <Link href="/deutsche-ki-verzeichnisse">
                            <strong>Deutsche KI-Verzeichnisse 🇩🇪</strong>
                        </Link>
                        <span>11 deutschsprachige Portale mit Traffic, Authority Score und DSGVO-Hinweisen.</span>
                    </li>
                    <li>
                        <Link href="/launch-kit">
                            <strong>Launch-Kit 🧰</strong>
                        </Link>
                        <span>Einzeiler, Kurz- und Langbeschreibung auf Deutsch und Englisch plus UTM-Links. In 2 Minuten.</span>
                    </li>
                    <li>
                        <Link href="/quiz">
                            <strong>Quiz 🎯</strong>
                        </Link>
                        <span>Drei Fragen, fünf passende Verzeichnisse für dein Budget und deine Geduld.</span>
                    </li>
                    <li>
                        <Link href="/vergleich">
                            <strong>Vergleich 👑</strong>
                        </Link>
                        <span>Bis zu drei Verzeichnisse nebeneinander, der Sieger jeder Zeile bekommt die Krone.</span>
                    </li>
                    <li>
                        <Link href="/ratgeber">
                            <strong>Ratgeber 📖</strong>
                        </Link>
                        <span>Anleitung zum Eintragen, ehrliche SEO-Einordnung und Product-Hunt-Launch auf Deutsch.</span>
                    </li>
                    <li>
                        <Link href="/freischaltung">
                            <strong>Freischaltdauer ⏱️</strong>
                        </Link>
                        <span>Wie lange Verzeichnisse für die Aufnahme brauchen, mit Zitat und Quelle. Von sofort bis 80 Tage.</span>
                    </li>
                    <li>
                        <Link href="/glossar">
                            <strong>Glossar 🔤</strong>
                        </Link>
                        <span>DR, nofollow, UTM, AVV und GEO in einem Satz erklärt.</span>
                    </li>
                </ul>
            </Band>

            <section aria-labelledby="top-kostenlos">
                <h2 id="top-kostenlos">Top 10: kostenlos und reibungslos 🏆</h2>
                <p>
                    Mein Startpunkt, wenn das Budget bei null liegt (also bei den meisten Gründern am Montag). Sortiert nach
                    Domain Rating.
                </p>
                <DirectoryTable directories={topFree} interactive={false} />
            </section>

            <section aria-labelledby="alle">
                <h2 id="alle">Alle {stats.total} KI-Verzeichnisse 📚</h2>
                <p>
                    Filtern, sortieren, eintragen. Ein Klick auf den Namen zeigt Details, Einschätzung und Alternativen. Scrollen
                    ist gesund, Rücken inklusive.
                </p>
                <TrackerPanel
                    directories={directories.map(({ name, slug, link, submission_link }) => ({ name, slug, link, submission_link }))}
                />
                <DirectoryTable directories={directories} defaultSort="score" />
            </section>

            <Band farbe="dunkel" id="checkliste" titel="Checkliste: So trägst du dein Tool richtig ein ✅" sticker="6 Schritte">
                <ol className="checklist">
                    <li>
                        <strong>Einmal sauber vorbereiten.</strong> Name, Einzeiler (max. 60 Zeichen), Beschreibung mit 100 bis 300
                        Wörtern, Logo als PNG/SVG, 3 bis 5 Screenshots, Kategorie, Preismodell, Kontakt-Mail. Wer das zehnmal
                        neu tippt, wird zum Schreibwarenhändler seiner selbst.
                    </li>
                    <li>
                        <strong>Überall gleich benennen.</strong> Gleicher Name, gleicher Einzeiler, gleiche URL. So erkennen Google
                        und KI-Systeme dein Tool als eine Marke statt als zehn verschiedene Zwillinge mit Identitätskrise.
                    </li>
                    <li>
                        <strong>Mit den starken, kostenlosen anfangen.</strong> Die Top 10 oben bringen am meisten pro Minute. Das ist der Burger-Gutschein unter den Backlinks.
                    </li>
                    <li>
                        <strong>UTM-Parameter setzen.</strong> Zum Beispiel <code>?utm_source=verzeichnisname&amp;utm_medium=directory</code>,
                        damit du in der Analyse siehst, welches Verzeichnis wirklich Nutzer bringt und welches nur nett aussieht.
                    </li>
                    <li>
                        <strong>Buch führen.</strong> Datum, Verzeichnis, Status, Link zur Listing-Seite. Nach 4 Wochen prüfen, was
                        live ist und was Klicks bringt. Tabellenkalkulation ist die Liebessprache der SEOs.
                    </li>
                    <li>
                        <strong>Erst dann Geld ausgeben.</strong> Bezahlte Einträge nur, wenn Traffic und Zielgruppe passen. Vorher
                        nach dofollow fragen und Rabattcodes checken. Nein, „Exposure“ ist keine Währung.
                    </li>
                </ol>
            </Band>
            <Trenner art="strahlung" farbe="orange" />

            <ToolPartners limit={6} />
            <Band farbe="blau" id="legende" titel="So liest du die Tabelle 🔍">
                <dl className="legend">
                    <dt>Domain Rating (DR)</dt>
                    <dd>
                        Ahrefs-Wert von 0 bis 100 für die Linkstärke einer Domain. Ab etwa 50 wird es für ein junges Tool richtig
                        interessant. Darunter ist es eher ein Händedruck als ein Empfehlungsschreiben.
                    </dd>
                    <dt>Besuche/Monat</dt>
                    <dd>Geschätzter Traffic der Verzeichnis-Domain. Ein Richtwert, keine Garantie für Klicks auf deinen Eintrag. Nicht jeder Besucher sucht ausgerechnet dich.</dd>
                    <dt>Einreichung</dt>
                    <dd>
                        Reibungslos heißt: Formular funktioniert, Eintrag geht ohne Umwege live. Hakelig heißt: Formular kaputt, nur
                        per Mail, lange Wartezeit oder Pflicht-Backlink. Kurz: Kaktus statt Butter.
                    </dd>
                    <dt>Preis</dt>
                    <dd>Kostenlos oder kostenpflichtig. Viele kostenlose Verzeichnisse verkaufen zusätzlich Featured-Plätze. Gratis ist selten ganz gratis, aber oft nah dran.</dd>
                </dl>
            </Band>

            <section aria-labelledby="wer">
                <h2 id="wer">Wer steckt dahinter? 🧔</h2>
                <div className="about-head">
                    <img className="about-photo" src={withBase('/jean.jpg')} alt="Jean Maurice Port" width="120" height="120" loading="lazy" />
                    <p>
                        Ich bin Jean, Senior SEO/SGE Manager bei der MotoMobilityGroup. Diese Liste
                        ist mein Nebenprojekt: ehrlich bewertet, mit Humor und ohne Affiliate-Tricks.{' '}
                        <Link href="/ueber-jean">Meine Projekte und Profile →</Link>
                    </p>
                </div>
            </section>

            <Band farbe="pink" id="faq" titel="Häufige Fragen zu KI-Verzeichnissen 🙋">
                <Faq items={faq} />
            </Band>
        </>
    )
}
