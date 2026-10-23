import Link from 'next/link'
import JsonLd from '../components/JsonLd'
import Breadcrumbs, { breadcrumbSchema } from '../components/Breadcrumbs'
import JeanIcon from '../components/JeanIcon'
import LeadMagnetBox from '../components/LeadMagnetBox'
import { SITE_NAME } from '../../lib/site'
import { getTutorials } from '../../lib/tutorials'

export const metadata = {
    title: 'KI-Tutorials auf Deutsch: Prompt Engineering lernen',
    description: 'Interaktive Tutorials mit Vorher/Nachher-Vergleich, Prompts zum direkten Ausprobieren in ChatGPT und Claude und Abschluss-Quiz.',
    alternates: { canonical: '/tutorials' },
}

export default function TutorialsPage() {
    const crumbs = [
        { name: SITE_NAME, path: '/' },
        { name: 'Tutorials', path: '/tutorials' },
    ]
    return (
        <>
            <JsonLd data={breadcrumbSchema(crumbs)} />
            <Breadcrumbs items={crumbs} />
            <section className="hero">
                <p className="eyebrow">Tutorials</p>
                <h1>Lernen durch Klicken, nicht durch Lesen</h1>
                <p className="lead">Jeder Schritt mit Vorher/Nachher-Regler, jeder Prompt mit einem Klick in ChatGPT oder Claude, am Ende ein Quiz mit Konfetti.</p>
            </section>
            <ul className="tutorial-cards">
                {getTutorials().map((t, n) => (
                    <li key={t.slug} style={{ '--tilt': `${n % 2 ? 1 : -1}deg` }}>
                        <Link href={`/tutorials/${t.slug}`}>
                            <JeanIcon badge={t.icon} cool size={72} />
                            <span className="tutorial-meta">
                                {t.level} · {t.minuten} Min. · {t.schritte.length} Schritte
                            </span>
                            <strong>{t.title}</strong>
                            <span>{t.description}</span>
                            <span className="tutorial-go">Los geht's →</span>
                        </Link>
                    </li>
                ))}
            </ul>
            <LeadMagnetBox id="prompt-spickzettel" />
        </>
    )
}
