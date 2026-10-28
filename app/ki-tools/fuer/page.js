import Link from 'next/link'
import JsonLd from '../../components/JsonLd'
import Breadcrumbs, { breadcrumbSchema } from '../../components/Breadcrumbs'
import { SITE_NAME } from '../../../lib/site'
import { ZIELGRUPPEN } from '../../../lib/zielgruppen'
import Vernetzt, { seitenPfad } from '../../components/Vernetzt'

export const metadata = {
    title: 'KI-Tools nach Zielgruppe: Lehrer, Schüler, Shops & mehr',
    description: 'Welche KI-Tools passen zu deinem Beruf? Übersichten für Lehrkräfte, Schüler, Studierende, Selbstständige, Onlinehändler, Content Creator, HR, Handwerk, Entwickler und Marketing, mit Aufgaben, Tools und fertigen Prompts.',
    alternates: { canonical: '/ki-tools/fuer' },
}

const EMOJI = { lehrer: '🍎', studenten: '🎓', selbststaendige: '💼', entwickler: '💻', marketing: '📣', onlinehaendler: '🛒', 'content-creator': '🎥', 'hr-recruiting': '🤝', handwerk: '🔨', schueler: '🎒' }
const FARBEN = ['#fde68a', '#a7f3d0', '#bfdbfe', '#fbcfe8', '#ddd6fe']

function ZielgruppenIndex() {
    const crumbs = [
        { name: SITE_NAME, path: '/' },
        { name: 'KI-Tool-Datenbank', path: '/ki-tools' },
        { name: 'KI-Tools nach Zielgruppe', path: '/ki-tools/fuer' },
    ]
    return (
        <>
            <JsonLd data={breadcrumbSchema(crumbs)} />
            <Breadcrumbs items={crumbs} />
            <section className="hero">
                <p className="eyebrow">{ZIELGRUPPEN.length} Zielgruppen</p>
                <h1>KI-Tools nach Zielgruppe</h1>
                <p className="lead">Nicht jedes KI-Tool passt zu jedem Job. Hier findest du je Zielgruppe die wichtigsten Aufgaben, passende Werkzeuge und fertige Prompts.</p>
            </section>
            <ul className="entry-tiles">
                {ZIELGRUPPEN.map((z, i) => (
                    <li key={z.slug}>
                        <Link href={`/ki-tools/fuer/${z.slug}`} style={{ '--tile': FARBEN[i % FARBEN.length] }}>
                            <span className="entry-emoji" aria-hidden="true">
                                {EMOJI[z.slug]}
                            </span>
                            <strong>{z.titel}</strong>
                            <span>{z.intro.split(':')[0]}</span>
                            <span className="entry-count">{z.aufgaben.length} Aufgaben</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default function Seite() {
    return (
        <>
            <ZielgruppenIndex />
            <Vernetzt pfad={seitenPfad('/ki-tools/fuer')} />
        </>
    )
}
