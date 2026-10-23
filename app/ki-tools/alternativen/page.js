import Link from 'next/link'
import JsonLd from '../../components/JsonLd'
import Breadcrumbs, { breadcrumbSchema } from '../../components/Breadcrumbs'
import { SITE_NAME } from '../../../lib/site'
import { KB_RUBRIKEN } from '../../../lib/kb'
import { getAlternativenHubs } from '../../../lib/alternativen'

export const metadata = {
    title: 'Alternativen zu bekannten KI-Tools: Midjourney, Perplexity, Copilot & Co.',
    description: 'Alternativen zu Midjourney, Perplexity, Notion AI, Claude, Gemini, GitHub Copilot, ElevenLabs, Synthesia und mehr, sortiert nach Empfehlung der größten Community-Listen.',
    alternates: { canonical: '/ki-tools/alternativen' },
}

export default function AlternativenIndex() {
    const hubs = getAlternativenHubs()
    const crumbs = [
        { name: SITE_NAME, path: '/' },
        { name: 'KI-Tool-Datenbank', path: '/ki-tools' },
        { name: 'Alternativen', path: '/ki-tools/alternativen' },
    ]
    return (
        <>
            <JsonLd data={breadcrumbSchema(crumbs)} />
            <Breadcrumbs items={crumbs} />
            <section className="hero">
                <p className="eyebrow">{hubs.length + 1} Übersichten</p>
                <h1>Alternativen zu bekannten KI-Tools</h1>
                <p className="lead">Zu teuer, zu wenig Datenschutz, falscher Schwerpunkt? Hier findest du für die bekanntesten KI-Tools passende Alternativen, mit Gratis- und Open-Source-Optionen.</p>
            </section>
            <ul className="entry-tiles">
                <li>
                    <Link href="/ki-tools/chatgpt-alternativen" style={{ '--tile': '#bfdbfe' }}>
                        <span className="entry-emoji" aria-hidden="true">
                            💬
                        </span>
                        <strong>ChatGPT-Alternativen</strong>
                        <span>Chatbots und KI-Suchmaschinen</span>
                    </Link>
                </li>
                {hubs.map((h, i) => (
                    <li key={h.slug}>
                        <Link href={`/ki-tools/alternativen/${h.slug}`} style={{ '--tile': ['#fde68a', '#a7f3d0', '#fbcfe8', '#c7d2fe', '#fed7aa', '#99f6e4'][i % 6] }}>
                            <span className="entry-emoji" aria-hidden="true">
                                🔁
                            </span>
                            <strong>{h.tool.name}-Alternativen</strong>
                            <span>{KB_RUBRIKEN[h.tool.rubrik].name}</span>
                            <span className="entry-count">{h.liste.length} Tools</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
