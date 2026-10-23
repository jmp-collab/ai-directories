import Link from 'next/link'
import { notFound } from 'next/navigation'
import JsonLd from '../../components/JsonLd'
import Breadcrumbs, { breadcrumbSchema } from '../../components/Breadcrumbs'
import KiTestSuite from '../../components/KiTestSuite'
import { Band } from '../../components/Deko'
import { SITE_NAME } from '../../../lib/site'
import { TEST_KATEGORIEN, getTestKategorie, getTestKategorien } from '../../../lib/kitests'

export const dynamicParams = false

export function generateStaticParams() {
    return getTestKategorien().map((k) => ({ kategorie: k.key }))
}

export function generateMetadata({ params }) {
    const k = getTestKategorie(params.kategorie)
    if (!k) return {}
    return {
        title: `KI-Test ${k.name}: Chatbots im Vergleich`,
        description: `${k.intro} ${k.tests.length} Testaufgaben zum Selbermachen mit Lösung und Bewertung.`.slice(0, 300),
        alternates: { canonical: `/ki-test/${k.key}` },
    }
}

export default function KategoriePage({ params }) {
    const k = getTestKategorie(params.kategorie)
    if (!k) notFound()
    const andere = getTestKategorien().filter((x) => x.key !== k.key)
    const crumbs = [
        { name: SITE_NAME, path: '/' },
        { name: 'KI-Test', path: '/ki-test' },
        { name: k.name, path: `/ki-test/${k.key}` },
    ]
    return (
        <>
            <JsonLd data={breadcrumbSchema(crumbs)} />
            <Breadcrumbs items={crumbs} />
            <section className="hero">
                <p className="eyebrow">
                    KI-Test · {k.emoji} {k.name}
                </p>
                <h1>KI-Test {k.name}: Wer besteht?</h1>
                <p className="lead">{k.intro}</p>
            </section>
            <section aria-labelledby="aufgaben">
                <h2 id="aufgaben">{k.tests.length} Aufgaben zum Selbsttesten</h2>
                <KiTestSuite tests={k.tests} kategorien={TEST_KATEGORIEN} />
            </section>
            <Band farbe={k.farbe === 'dunkel' ? 'blau' : k.farbe} id="mehr" titel="Weitere Testkategorien">
                <ul className="link-cards">
                    {andere.map((x) => (
                        <li key={x.key}>
                            <Link href={`/ki-test/${x.key}`}>
                                <strong>
                                    {x.emoji} {x.name}
                                </strong>
                            </Link>
                            <span>{x.tests.length} Aufgaben</span>
                        </li>
                    ))}
                </ul>
                <p>
                    <Link href="/ki-test">← Zum kompletten KI-Test</Link>
                </p>
            </Band>
        </>
    )
}
