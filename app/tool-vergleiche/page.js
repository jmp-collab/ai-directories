import Link from 'next/link'
import JsonLd from '../components/JsonLd'
import Breadcrumbs, { breadcrumbSchema } from '../components/Breadcrumbs'
import JeanIcon from '../components/JeanIcon'
import { SITE_NAME } from '../../lib/site'
import { getComparisons } from '../../lib/comparisons'

export const metadata = {
    title: 'KI-Tool-Vergleiche: welches Tool für welchen Zweck?',
    description:
        'Make vs. Zapier vs. n8n, Semrush vs. SE Ranking, beehiiv vs. Kit und mehr: Preise, Gratis-Tarife und eine klare Empfehlung je Anwendungsfall.',
    alternates: { canonical: '/tool-vergleiche' },
}

export default function ComparisonsPage() {
    const comparisons = getComparisons()
    const crumbs = [
        { name: SITE_NAME, path: '/' },
        { name: 'Tool-Vergleiche', path: '/tool-vergleiche' },
    ]
    return (
        <>
            <JsonLd data={[breadcrumbSchema(crumbs)]} />
            <Breadcrumbs items={crumbs} />
            <section className="hero">
                <p className="eyebrow">Entscheidungshilfe ⚖️</p>
                <h1>KI-Tool-Vergleiche</h1>
                <p className="lead">Für jede Aufgabe eine klare Empfehlung, abgeleitet aus den Angaben der Anbieter. Kein Tool hat für seinen Platz bezahlt.</p>
            </section>
            <ul className="link-cards">
                {comparisons.map((c) => (
                    <li key={c.slug}>
                        <Link href={`/tool-vergleiche/${c.slug}`}>
                            <strong>{c.title}</strong>
                        </Link>
                        <span>{c.intro}</span>
                    </li>
                ))}
            </ul>
            <p className="source">
                <JeanIcon badge="werkzeug" size={28} /> Alle Tools einzeln: <Link href="/tools">KI-Tool-Verzeichnis</Link>
            </p>
        </>
    )
}
