import Link from 'next/link'
import './globals.css'
import { SITE_URL, SITE_NAME, SITE_TAGLINE, REPO_URL, withBase } from '../lib/site'
import Reveal from './components/Reveal'
import LeadBox from './components/LeadBox'
import { SidebarLeft, SidebarRight, MobileDock } from './components/Sidebars'
import BackToTop from './components/BackToTop'
import JeanIcon from './components/JeanIcon'
import BartModus from './components/BartModus'

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
                        <LeadBox />
                        <Reveal />
                    </main>
                    <aside className="sidebar sidebar-right" aria-label="Deals, Tools und Neuigkeiten">
                        <SidebarRight />
                    </aside>
                </div>
                <footer className="site-footer">
                    <div className="container">
                        <p>
                            Gebaut von <Link href="/ueber-jean">Jean Maurice Port</Link>, SEO-Manager mit Bart und Humor. ·{' '}
                            <Link href="/werben">Werben</Link> · <Link href="/transparenz">Transparenz</Link> ·{' '}
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
