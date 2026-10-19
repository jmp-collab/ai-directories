import Link from 'next/link'
import JsonLd from '../components/JsonLd'
import Jean from '../components/Jean'
import Breadcrumbs, { breadcrumbSchema } from '../components/Breadcrumbs'
import { SITE_NAME, absoluteUrl } from '../../lib/site'

export const metadata = {
    title: 'Über Jean Maurice Port',
    description:
        'Jean Maurice Port ist SEO-Manager bei der MotoMobilityGroup und baut diese Liste der KI-Verzeichnisse. Projekte, Profile und der Bart dahinter.',
    alternates: { canonical: '/ueber-jean' },
    openGraph: { url: '/ueber-jean', images: ['/jean.jpg'] },
}

const LINKS = [
    {
        group: 'Projekte, an denen ich arbeite',
        items: [
            ['racing-planet.de', 'https://www.racing-planet.de/', 'Tuningteile für Roller, Mopeds und Simson. Hier mache ich SEO.'],
            ['scooter-center.com', 'https://www.scooter-center.com/', 'Vespa- und Lambretta-Teile, ebenfalls MotoMobilityGroup.'],
            ['pepeparts.nl', 'https://www.pepeparts.nl/', 'Ersatzteile für die Niederlande.'],
            ['scooter-attack.com', 'https://www.scooter-attack.com/', 'Roller-Tuning, schnell und laut.'],
            ['moped-garage.net', 'https://www.moped-garage.net/', 'Ersatzteile für Mopeds und Mofas.'],
        ],
    },
    { group: 'Eigenes', items: [['LeberCure', 'https://lebercure.com/', 'Mein eigener Shopify-Shop.']] },
    {
        group: 'Profile',
        items: [
            ['Hugging Face: jmp1987', 'https://huggingface.co/jmp1987', 'Meine KI-Spielwiese.'],
            ['Hugging Face: Racing Planet', 'https://huggingface.co/RacingPlanet', 'Die Racing-Planet-Organisation auf Hugging Face.'],
            ['GitHub: jmp-collab', 'https://github.com/jmp-collab', 'Code, Experimente und gelegentlich Chaos.'],
        ],
    },
]

export default function AboutPage() {
    const crumbs = [
        { name: SITE_NAME, path: '/' },
        { name: 'Über Jean', path: '/ueber-jean' },
    ]
    const schema = [
        breadcrumbSchema(crumbs),
        {
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Jean Maurice Port',
            jobTitle: 'SEO-Manager',
            worksFor: { '@type': 'Organization', name: 'MotoMobilityGroup' },
            image: absoluteUrl('/jean.jpg'),
            url: absoluteUrl('/ueber-jean'),
            sameAs: LINKS.find((g) => g.group === 'Profile').items.map((i) => i[1]),
        },
    ]

    return (
        <>
            <JsonLd data={schema} />
            <Breadcrumbs items={crumbs} />
            <section className="hero">
                <div className="about-head">
                    <img className="about-photo" src="/jean.jpg" alt="Jean Maurice Port" width="160" height="160" />
                    <div>
                        <p className="eyebrow">Der Typ hinter der Liste 🧔</p>
                        <h1>Jean Maurice Port</h1>
                        <p className="lead">
                            SEO-Manager bei der MotoMobilityGroup. Tagsüber kümmere ich mich um Rankings für Roller- und
                            Mopedteile, nachts baue ich Tools, Spiele und Listen wie diese. Lieblingsthemen: Simson-Tuning,
                            Motorsport und KI-Werkzeuge, die wirklich Arbeit sparen.
                        </p>
                    </div>
                </div>
                <Jean>Ja, das bin ich. Ja, der Bart ist echt. Nein, ich trage keine Perücke im Winter.</Jean>
            </section>
            {LINKS.map((g) => (
                <section key={g.group}>
                    <h2>{g.group}</h2>
                    <ul className="link-cards">
                        {g.items.map(([name, href, text]) => (
                            <li key={href}>
                                <a href={href} target="_blank" rel="noopener noreferrer">
                                    <strong>{name}</strong> ↗
                                </a>
                                <span>{text}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
            <p>
                <Link href="/">← Zurück zu den KI-Verzeichnissen</Link>
            </p>
        </>
    )
}
