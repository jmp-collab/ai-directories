import JsonLd from '../components/JsonLd'
import Breadcrumbs, { breadcrumbSchema } from '../components/Breadcrumbs'
import LeadMagnetBox from '../components/LeadMagnetBox'
import { SITE_NAME } from '../../lib/site'
import { LEADMAGNETS } from '../../lib/leadmagnets'

export const metadata = {
    title: 'Gratis-Downloads: Prompt-Spickzettel & Prompt-Paket',
    description: 'Gratis-Downloads von AIGeddon: Prompt-Spickzettel zum Ausdrucken, alle Prompt-Vorlagen als Datei und die Top 50 KI-Verzeichnisse als Tabelle.',
    alternates: { canonical: '/downloads' },
}

export default function DownloadsPage() {
    const crumbs = [
        { name: SITE_NAME, path: '/' },
        { name: 'Downloads', path: '/downloads' },
    ]
    return (
        <>
            <JsonLd data={breadcrumbSchema(crumbs)} />
            <Breadcrumbs items={crumbs} />
            <section className="hero">
                <p className="eyebrow">Downloads</p>
                <h1>Gratis zum Mitnehmen</h1>
                <p className="lead">Spickzettel, Prompt-Paket und Tabellen. Einmal holen, immer griffbereit.</p>
            </section>
            {LEADMAGNETS.map((m) => (
                <LeadMagnetBox key={m.id} id={m.id} />
            ))}
        </>
    )
}
