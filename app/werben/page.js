import Link from 'next/link'
import JsonLd from '../components/JsonLd'
import Jean from '../components/Jean'
import Breadcrumbs, { breadcrumbSchema } from '../components/Breadcrumbs'
import { SITE_NAME } from '../../lib/site'
import { mailto, YOUTUBE_URL } from '../../lib/monetization'
import { getSiteStats } from '../../lib/data'

export const metadata = {
    title: 'Werben auf AIGeddon: Featured-Platz, Newsletter, Launch-Service',
    description:
        'Für Betreiber von KI-Verzeichnissen und KI-Tools: Featured-Platz, geprüftes Profil, Newsletter- und YouTube-Sponsoring oder der Launch-Service, bei dem wir dein Tool in die passenden Verzeichnisse eintragen.',
    alternates: { canonical: '/werben' },
}

const OFFERS = [
    {
        name: 'Launch-Service',
        for: 'Für Gründer',
        text: 'Wir tragen dein KI-Tool in die passenden Verzeichnisse ein: Auswahl nach Jean-Score, Texte auf Deutsch und Englisch, Screenshots, Tracking-Links und ein Protokoll, wo du gelistet bist.',
        subject: 'Anfrage Launch-Service',
    },
    {
        name: 'Featured-Platz',
        for: 'Für Verzeichnisse',
        text: 'Dein Verzeichnis oben in den passenden Listen und auf thematisch nahen Detailseiten, klar als Anzeige gekennzeichnet.',
        subject: 'Anfrage Featured-Platz',
    },
    {
        name: 'Geprüftes Profil',
        for: 'Für Verzeichnisse',
        text: 'Wir prüfen Freischaltdauer, Link-Typ und Ablauf mit Beleg und zeigen das Ergebnis auf deiner Detailseite. Das Urteil kaufst du nicht, nur die Prüfung.',
        subject: 'Anfrage geprüftes Profil',
    },
    {
        name: 'Newsletter- und YouTube-Sponsoring',
        for: 'Für KI-Tools',
        text: 'Erwähnung im AIGeddon Briefing oder ein Use-Case-Video auf dem YouTube-Kanal, für Tools, die wir selbst sinnvoll finden.',
        subject: 'Anfrage Sponsoring',
    },
]

export default function AdvertisePage() {
    const stats = getSiteStats()
    const crumbs = [
        { name: SITE_NAME, path: '/' },
        { name: 'Werben', path: '/werben' },
    ]
    return (
        <>
            <JsonLd data={[breadcrumbSchema(crumbs)]} />
            <Breadcrumbs items={crumbs} />
            <section className="hero">
                <p className="eyebrow">Für Gründer, Verzeichnisse und KI-Tools 💼</p>
                <h1>Mit AIGeddon arbeiten</h1>
                <p className="lead">
                    Hier landen Gründer, die gerade ein KI-Tool launchen und {stats.total} Verzeichnisse vergleichen. Genau
                    dann suchen sie Reichweite, Werkzeuge und jemanden, der ihnen die Einreichungen abnimmt.
                </p>
                <Jean>Bezahlt wird für Sichtbarkeit, nie für ein besseres Urteil. Sonst wäre ich ja Influencer.</Jean>
            </section>
            <ul className="link-cards">
                {OFFERS.map((o) => {
                    const href = mailto(o.subject)
                    return (
                        <li key={o.name}>
                            <strong>{o.name}</strong>
                            <span>{o.for}</span>
                            <span>{o.text}</span>
                            {href && (
                                <a className="button" href={href}>
                                    Anfragen →
                                </a>
                            )}
                        </li>
                    )
                })}
            </ul>
            {!mailto('x') && (
                <p>
                    Anfragen gehen vorerst über den <a href={YOUTUBE_URL}>YouTube-Kanal</a>.
                </p>
            )}
            <p>
                Wie wir Geld verdienen und was das für Bewertungen bedeutet, steht unter{' '}
                <Link href="/transparenz">Transparenz</Link>.
            </p>
        </>
    )
}
