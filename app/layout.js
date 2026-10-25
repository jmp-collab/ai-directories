import Link from 'next/link'
import './globals.css'
import { SITE_URL, SITE_NAME, SITE_TAGLINE, REPO_URL, withBase } from '../lib/site'
import Reveal from './components/Reveal'
import LeadBox from './components/LeadBox'
import LeadForm from './components/LeadForm'
import { SidebarLeft, SidebarRight, MobileDock } from './components/Sidebars'
import BackToTop from './components/BackToTop'
import JeanIcon, { JeanSprite } from './components/JeanIcon'
import BartModus from './components/BartModus'
import JsonLd from './components/JsonLd'
import { absoluteUrl } from '../lib/site'
import { getKbRubriken } from '../lib/kb'
import { getTestKategorien } from '../lib/kitests'
import { RECHNER } from '../lib/rechner'

const SITE_SCHEMA = [
    {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organisation`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: absoluteUrl('/jean-cool.jpg'),
        founder: { '@type': 'Person', name: 'Jean Maurice Port', url: absoluteUrl('/ueber-jean') },
        sameAs: ['https://www.youtube.com/@AIGeddon', REPO_URL],
    },
    {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: SITE_URL,
        inLanguage: 'de-DE',
        publisher: { '@id': `${SITE_URL}/#organisation` },
        potentialAction: {
            '@type': 'SearchAction',
            target: { '@type': 'EntryPoint', urlTemplate: `${absoluteUrl('/ki-tools')}?q={search_term_string}` },
            'query-input': 'required name=search_term_string',
        },
    },
]

// Linknetz im Footer: jede Rubrik von jeder Seite aus erreichbar (Hub and Spoke).
const footerSpalten = () => [
    [
        'KI-Tools',
        [
            ['/ki-tools', 'KI-Tool-Datenbank'],
            ['/beste-ki-tools', 'Beste KI-Tools 2026'],
            ['/tool-finder', 'KI-Tool-Finder'],
            ['/ki-tools/kostenlos', 'Kostenlose KI-Tools'],
            ['/ki-tools/chatgpt-alternativen', 'ChatGPT-Alternativen'],
            ['/ki-tools/alternativen', 'Tool-Alternativen'],
            ['/ki-tools/fuer', 'KI nach Zielgruppe'],
            ...getKbRubriken()
                .slice(0, 8)
                .map((r) => [`/ki-tools/${r.key}`, r.name]),
            ['/tools', 'KI-Tools mit Preisen'],
            ['/tool-vergleiche', 'Tool-Vergleiche'],
        ],
    ],
    [
        'KI-Verzeichnisse',
        [
            ['/ki-verzeichnis', 'Was ist ein KI-Verzeichnis?'],
            ['/#alle', 'Alle KI-Verzeichnisse'],
            ['/liste/kostenlos', 'Kostenlose KI-Verzeichnisse'],
            ['/liste/domain-rating-50-plus', 'Domain Rating 50+'],
            ['/deutsche-ki-verzeichnisse', 'Deutsche KI-Verzeichnisse'],
            ['/top-50', 'Top 50'],
            ['/liste/rabattcodes', 'Rabattcodes'],
            ['/freischaltung', 'Freischaltdauer'],
            ['/launch-kit', 'Launch-Kit'],
        ],
    ],
    [
        'KI-Test & Rechner',
        [
            ['/ki-test', 'KI-Test: Chatbots vergleichen'],
            ...getTestKategorien().map((k) => [`/ki-test/${k.key}`, `KI-Test ${k.name}`]),
            ['/rechner', 'KI-Rechner'],
            ...RECHNER.map((r) => [`/rechner/${r.slug}`, r.titel]),
        ],
    ],
    [
        'Prompts & Lernen',
        [
            ['/prompts', 'Prompt-Bibliothek'],
            ['/prompts/archiv', 'Prompt-Archiv'],
            ['/prompt-baukasten', 'Prompt-Baukasten'],
            ['/prompt-check', 'Prompt-Check'],
            ['/tutorials', 'Tutorials'],
            ['/downloads', 'Downloads'],
            ['/ratgeber', 'Ratgeber'],
            ['/glossar', 'KI-Glossar'],
        ],
    ],
]

const TICKER = [
    '☢️ Die KI-Apokalypse kommt. Dein Tool sollte vorher gelistet sein',
    '🚨 Eilmeldung: Backlink gesichtet, Gründer weint vor Glück',
    '🤖 Kein Roboter wurde beim Pflegen dieser Liste gelangweilt',
    '📈 DR 90 klingt toll, ist aber auch nur eine Zahl mit Selbstbewusstsein',
    '☕ Dieser Ticker läuft auf Kaffee und Domain Rating',
    '🔗 nofollow ist auch eine Form von Liebe',
    '🏆 20 passende Einträge schlagen 200 Linkfriedhöfe',
]

export const metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: SITE_NAME,
        template: `%s | ${SITE_NAME}`,
    },
    description:
        'AIGeddon: die deutsche Liste der KI-Verzeichnisse mit Domain Rating, Traffic, Preis, Freischaltdauer und Einreichungs-Check. Dazu Launch-Kit, Ratgeber und KI-Use-Cases. Ehrlich, kostenlos und mit mehr Humor, als SEO erlaubt.',
    applicationName: SITE_NAME,
    openGraph: {
        type: 'website',
        locale: 'de_DE',
        siteName: SITE_NAME,
    },
    twitter: { card: 'summary' },
    robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
    icons: { icon: '/favicon.ico' },
}

export const viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#fbfaf7' },
        { media: '(prefers-color-scheme: dark)', color: '#121417' },
    ],
}

export default function RootLayout({ children }) {
    return (
        <html lang="de">
            <body>
                <JeanSprite />
                <a className="skip-link" href="#inhalt">
                    Zum Inhalt springen
                </a>
                <header className="site-header">
                    <div className="container header-inner">
                        <Link href="/" className="brand">
                            <JeanIcon cool badge="strahlung" size={44} className="brand-icon" />
                            AIGEDDON ☢️
                            <span className="brand-sub">{SITE_TAGLINE}</span>
                        </Link>
                        <nav aria-label="Hauptnavigation">
                            <ul>
                                <li>
                                    <Link href="/liste/kostenlos">Gratis 🎁</Link>
                                </li>
                                <li>
                                    <Link href="/prompts">Prompts 💬</Link>
                                </li>
                                <li>
                                    <Link href="/tools">Tools 🛠️</Link>
                                </li>
                                <li>
                                    <Link href="/liste/rabattcodes">Deals 🏷️</Link>
                                </li>
                                <li>
                                    <Link href="/deutsche-ki-verzeichnisse">DACH 🇩🇪</Link>
                                </li>
                                <li>
                                    <Link href="/launch-kit">Launch-Kit 🧰</Link>
                                </li>
                                <li>
                                    <Link href="/ratgeber">Ratgeber 📖</Link>
                                </li>
                                <li>
                                    <Link href="/tutorials">Tutorials 🎓</Link>
                                </li>
                                <li>
                                    <Link href="/ki-test">KI-Test 🧪</Link>
                                </li>
                                <li>
                                    <Link href="/ueber-jean">Über Jean 🧔</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <div className="ticker" aria-hidden="true">
                    <div className="ticker-track">
                        {TICKER.map((t) => (
                            <span key={t}>{t}</span>
                        ))}
                    </div>
                </div>
                <div className="page-grid">
                    <aside className="sidebar sidebar-left" aria-label="Jeans Kompass">
                        <SidebarLeft />
                    </aside>
                    <main id="inhalt" className="page-main">
                        {children}
                        <LeadForm />
                        <LeadBox />
                        <Reveal />
                    </main>
                    <aside className="sidebar sidebar-right" aria-label="Deals, Tools und Neuigkeiten">
                        <SidebarRight />
                    </aside>
                </div>
                <footer className="site-footer">
                    <JsonLd data={SITE_SCHEMA} />
                    <nav className="footer-hub container" aria-label="Alle Rubriken">
                        {footerSpalten().map(([titel, links]) => (
                            <div key={titel}>
                                <p className="footer-hub-title">{titel}</p>
                                <ul>
                                    {links.map(([href, label]) => (
                                        <li key={href}>
                                            <Link href={href}>{label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </nav>
                    <div className="container">
                        <p>
                            Gebaut von <Link href="/ueber-jean">Jean Maurice Port</Link>, SEO-Manager mit Bart und Humor. ·{' '}
                            <Link href="/werben">Werben</Link> · <Link href="/transparenz">Transparenz</Link> ·{' '}
                            <Link href="/datenschutz">Datenschutz</Link> ·{' '}
                            <a href="https://www.youtube.com/@AIGeddon">YouTube</a>
                        </p>
                        <p>
                            Open Source auf <a href={REPO_URL}>GitHub</a> (Pull Requests werden mit Konfetti empfangen) · Rohdaten als{' '}
                            <a href={withBase('/api/directories')}>JSON-API</a> · Für KI-Assistenten, die auch mal lachen wollen:{' '}
                            <a href={withBase('/llms.txt')}>llms.txt</a>
                        </p>
                        <p>
                            Domain Rating und Besuche sind Schätzwerte ohne Gewähr, ungefähr so verlässlich wie ein Wetterbericht für nächsten
                            Monat. Kein Backlink wurde bei der Herstellung dieser Seite gequält.
                        </p>
                    </div>
                </footer>
                <MobileDock />
                <BackToTop />
                <BartModus />
            </body>
        </html>
    )
}
