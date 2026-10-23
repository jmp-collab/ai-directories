import Vergleich from './Vergleich'
import Jean from '../components/Jean'
import Breadcrumbs, { breadcrumbSchema } from '../components/Breadcrumbs'
import JsonLd from '../components/JsonLd'
import { getDirectories } from '../../lib/data'

export const metadata = {
    title: 'KI-Verzeichnisse vergleichen: bis zu 3 nebeneinander',
    description:
        'Vergleiche bis zu drei KI-Verzeichnisse nach Jean-Score, Domain Rating, Traffic, Preis und Einreichung. Der Sieger jeder Zeile ist markiert.',
    alternates: { canonical: '/vergleich' },
    openGraph: { url: '/vergleich' },
}

export default function VergleichPage() {
    const crumbs = [
        { name: 'AIGeddon', path: '/' },
        { name: 'Vergleich', path: '/vergleich' },
    ]
    const options = [...getDirectories()]
        .sort((a, b) => a.name.localeCompare(b.name, 'de'))
        .map(({ name, slug, domain_rating, monthly_visits, pricing, submission_experience, dealCode, dealText }) => ({
            name,
            slug,
            domain_rating,
            monthly_visits,
            pricing,
            submission_experience,
            dealCode: dealCode || '',
            dealText: dealText || '',
        }))
    return (
        <>
            <JsonLd data={breadcrumbSchema(crumbs)} />
            <Breadcrumbs items={crumbs} />
            <section className="hero">
                <h1>KI-Verzeichnisse vergleichen</h1>
                <p className="lead">Bis zu drei Verzeichnisse nebeneinander. Die beste Zahl jeder Zeile bekommt die Krone.</p>
                <Jean>Wie beim Moped-Kauf: erst vergleichen, dann eintragen. Oder umgekehrt, wenn du gern bereust.</Jean>
            </section>
            <Vergleich options={options} />
        </>
    )
}
