import Link from 'next/link'
import { notFound } from 'next/navigation'
import JsonLd from '../../components/JsonLd'
import Breadcrumbs, { breadcrumbSchema } from '../../components/Breadcrumbs'
import DirectoryTable from '../../components/DirectoryTable'
import DealCards from '../../components/DealCards'
import LeadBox from '../../components/LeadBox'
import { LISTS, getList } from '../../../lib/data'
import { absoluteUrl } from '../../../lib/site'

export const dynamicParams = false

export function generateStaticParams() {
    return Object.keys(LISTS).map((slug) => ({ slug }))
}

export function generateMetadata({ params }) {
    const list = getList(params.slug)
    if (!list) return {}
    return {
        title: list.title.length > 45 ? list.title : `${list.title}: ${list.items.length} Einträge`,
        description: list.description(list.items.length),
        alternates: { canonical: `/liste/${list.slug}` },
        openGraph: { url: `/liste/${list.slug}` },
    }
}

export default function ListPage({ params }) {
    const list = getList(params.slug)
    if (!list) notFound()

    const crumbs = [
        { name: 'AIGeddon', path: '/' },
        { name: list.title, path: `/liste/${list.slug}` },
    ]

    const schema = [
        breadcrumbSchema(crumbs),
        {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: list.title,
            numberOfItems: list.items.length,
            itemListElement: list.items.map((d, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                name: d.name,
                url: absoluteUrl(`/verzeichnis/${d.slug}`),
            })),
        },
    ]

    const others = Object.entries(LISTS).filter(([slug]) => slug !== list.slug)

    return (
        <>
            <JsonLd data={schema} />
            <Breadcrumbs items={crumbs} />
            <section className="hero">
                <h1>{list.h1(list.items.length)}</h1>
                <p className="lead">{list.lead}</p>
            </section>

            {list.slug === 'rabattcodes' && (
                <>
                    <DealCards directories={list.items} />
                    <LeadBox
                        title="Deal-Alarm 🚨"
                        text="Neue Rabattcodes und Gratis-Aktionen der Verzeichnisse landen zuerst im Newsletter. Wer zu spät kommt, zahlt Listenpreis."
                    />
                    <h2>Alle Codes als Tabelle</h2>
                </>
            )}
            <DirectoryTable directories={list.items} />

            <section aria-labelledby="weitere">
                <h2 id="weitere">Weitere Listen, weil du noch nicht genug hast 📚</h2>
                <ul className="quick-links">
                    {others.map(([slug, l]) => (
                        <li key={slug}>
                            <Link href={`/liste/${slug}`}>{l.title} →</Link>
                        </li>
                    ))}
                    <li>
                        <Link href="/">Zurück zum Buffet: alle KI-Verzeichnisse →</Link>
                    </li>
                </ul>
            </section>
        </>
    )
}
