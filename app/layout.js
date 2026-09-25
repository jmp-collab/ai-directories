import Link from 'next/link'
import './globals.css'
import { SITE_URL, SITE_NAME, REPO_URL } from '../lib/site'

export const metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: SITE_NAME,
        template: `%s | ${SITE_NAME}`,
    },
    description:
        'Die deutsche Liste der KI-Verzeichnisse: AI Directories mit Domain Rating, Traffic, Preis und Einreichungs-Check.',
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
                            {SITE_NAME}
                        </Link>
                        <nav aria-label="Hauptnavigation">
                            <ul>
                                <li>
                                    <Link href="/liste/kostenlos">Kostenlos</Link>
                                </li>
                                <li>
                                    <Link href="/liste/domain-rating-50-plus">DR 50+</Link>
                                </li>
                                <li>
                                    <Link href="/liste/rabattcodes">Rabattcodes</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <main id="inhalt" className="container">
                    {children}
                </main>
                <footer className="site-footer">
                    <div className="container">
                        <p>
                            Open Source auf <a href={REPO_URL}>GitHub</a> · Rohdaten als <a href="/api/directories">JSON-API</a> · Für
                            KI-Assistenten: <a href="/llms.txt">llms.txt</a>
                        </p>
                        <p>
                            Basiert auf der Liste von <a href="https://aidirectori.es/">AI Directories</a> (Sergiu Chiriac). Domain
                            Rating und Besuche sind Schätzwerte ohne Gewähr.
                        </p>
                    </div>
                </footer>
            </body>
        </html>
    )
}
