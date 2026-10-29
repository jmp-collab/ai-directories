import Link from 'next/link'
import { getGuides } from '../lib/guides'
import './globals.css'
import { SITE_URL, SITE_NAME, SITE_TAGLINE, REPO_URL, withBase } from '../lib/site'
import Reveal from './components/Reveal'
import LeadBox from './components/LeadBox'
import JeansSenf from './components/JeansSenf'
import LeseFortschritt from './components/LeseFortschritt'
import Gruss from './components/Gruss'
import LeadForm from './components/LeadForm'
import { SidebarLeft, SidebarRight, MobileDock } from './components/Sidebars'
import BackToTop from './components/BackToTop'
import JeanIcon, { JeanSprite } from './components/JeanIcon'
import BartModus from './components/BartModus'
import ToastHost from './components/ToastHost'
import Herzstuecke from './components/Herzstuecke'
import SeitenAktionen from './components/SeitenAktionen'
import FooterExtras from './components/FooterExtras'
import LeseHelfer from './components/LeseHelfer'
import KontoKnopf from './components/KontoKnopf'
import KontoSync from './components/KontoSync'
import Glocke from './components/community/Glocke'
import Kommentare from './components/community/Kommentare'
import { KONTO_AKTIV } from '../lib/konto'
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
        logo: absoluteUrl('/opengraph-image.png'),
        founder: { '@type': 'Person', name: 'Jean Maurice Port', url: absoluteUrl('/ueber-jean') },
        sameAs: ['https://www.youtube.com/@AIGeddon', REPO_URL],
        publishingPrinciples: absoluteUrl('/so-pruefen-wir'),
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
            ['/ki-news', 'KI-News der Woche'],
            ['/neue-ki-modelle', 'Neue KI-Modelle 2026'],
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
            ['/neu-entdeckt', 'Neu entdeckte Verzeichnisse'],
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
            ['/skills', 'KI-Skills'],
            ['/tutorials', 'Tutorials'],
            ...(getGuides().length ? [['/guides', 'Gratis-Guides']] : []),
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
    ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION ? { verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } } : {}),
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
                <LeseFortschritt />
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
                        <Gruss />
                        <div className="konto-leiste">
                            <Glocke />
                            <KontoKnopf />
                        </div>
                        <nav aria-label="Hauptnavigation">
                            <ul>
                                <li>
                                    <Link href="/liste/kostenlos">Gratis 🎁</Link>
                                </li>
                                <li>
                                    <Link href="/ki-news">News 📰</Link>
                                </li>
                                <li>
                                    <Link href="/prompts">Prompts 💬</Link>
                                </li>
                                <li>
                                    <Link href="/skills">Skills 🧩</Link>
                                </li>
                                {KONTO_AKTIV && (
                                    <li>
                                        <Link href="/forum">Forum 🗣️</Link>
                                    </li>
                                )}
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
                        <SeitenAktionen />
                        <Kommentare />
                        <JeansSenf />
                        <LeadForm />
                        <LeadBox />
                        <Reveal />
                    </main>
                    <aside className="sidebar sidebar-right" aria-label="Deals, Tools und Neuigkeiten">
                        <SidebarRight />
                    </aside>
                </div>
                <footer className="site-footer">
                    <div className="moped-strecke" aria-hidden="true">
                        <svg className="moped" viewBox="0 0 64 36" width="64" height="36">
                            <circle cx="12" cy="28" r="7" fill="none" stroke="currentColor" strokeWidth="3" />
                            <circle cx="52" cy="28" r="7" fill="none" stroke="currentColor" strokeWidth="3" />
                            <path d="M12 28 L22 16 H38 L46 28" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
                            <path d="M22 16 C24 10 34 10 38 16" fill="#ffe14d" stroke="currentColor" strokeWidth="2.5" />
                            <path d="M46 28 L50 12 H56" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                            <circle cx="30" cy="6" r="4" fill="#ff6fa8" stroke="currentColor" strokeWidth="2" />
                        </svg>
                        <span className="moped-wolke">💨</span>
                    </div>
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
                        <FooterExtras />
                        <p>
                            Gebaut von <Link href="/ueber-jean">Jean Maurice Port</Link>, SEO-Manager mit Humor. ·{' '}
                            <Link href="/werben">Werben</Link> · <Link href="/transparenz">Transparenz</Link> · <Link href="/so-pruefen-wir">So prüfen wir</Link> ·{' '}
                            <Link href="/datenschutz">Datenschutz</Link> · <Link href="/merkliste">Merkliste ⭐</Link> ·{' '}
                            {KONTO_AKTIV && (
                                <>
                                    <Link href="/forum">Forum</Link> · <Link href="/community-regeln">Community-Regeln</Link> ·{' '}
                                </>
                            )}
                            <a href="https://www.youtube.com/@AIGeddon">YouTube</a>
                        </p>
                        <p>
                            Open Source auf <a href={REPO_URL}>GitHub</a> (Pull Requests werden mit Konfetti empfangen) · Rohdaten als{' '}
                            <a href={withBase('/api/directories')}>JSON-API</a> · Für KI-Assistenten, die auch mal lachen wollen:{' '}
                            <a href={withBase('/llms.txt')}>llms.txt</a>
                        </p>
                        <p className="footer-liebe">
                            Mit ❤️, viel ☕ und einem Schuss Zweitakt-Öl von Hand geschraubt. Kein Algorithmus wurde beim Lesen dieser Zeile verletzt.
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
                <Herzstuecke />
                <ToastHost />
                <LeseHelfer />
                <KontoSync />
            </body>
        </html>
    )
}
