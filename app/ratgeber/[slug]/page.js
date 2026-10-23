import Link from 'next/link'
import { notFound } from 'next/navigation'
import Breadcrumbs, { breadcrumbSchema } from '../../components/Breadcrumbs'
import JsonLd from '../../components/JsonLd'
import Jean from '../../components/Jean'
import { ARTIKEL, getArtikel } from '../../../lib/ratgeber'
import { absoluteUrl } from '../../../lib/site'

export const dynamicParams = false

export function generateStaticParams() {
    return ARTIKEL.map((a) => ({ slug: a.slug }))
}

export function generateMetadata({ params }) {
    const a = getArtikel(params.slug)
    if (!a) return {}
    return {
        title: a.title,
        description: a.description,
        alternates: { canonical: `/ratgeber/${a.slug}` },
        openGraph: { url: `/ratgeber/${a.slug}`, type: 'article' },
    }
}

const slugId = (h) =>
    h
        .toLowerCase()
        .replace(/[äöüß]/g, (c) => ({ ä: 'ae', ö: 'oe', ü: 'ue', ß: 'ss' })[c])
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')

export default function ArtikelPage({ params }) {
    const a = getArtikel(params.slug)
    if (!a) notFound()
    const crumbs = [
        { name: 'AIGeddon', path: '/' },
        { name: 'Ratgeber', path: '/ratgeber' },
        { name: a.title, path: `/ratgeber/${a.slug}` },
    ]
    const schema = [
        breadcrumbSchema(crumbs),
        {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: a.title,
            description: a.description,
            inLanguage: 'de-DE',
            url: absoluteUrl(`/ratgeber/${a.slug}`),
            author: { '@type': 'Person', name: 'Jean Maurice Port', url: absoluteUrl('/ueber-jean') },
            image: absoluteUrl('/ratgeber/opengraph-image.png'),
        },
    ]
    const others = ARTIKEL.filter((x) => x.slug !== a.slug)
    return (
        <article>
            <JsonLd data={schema} />
            <Breadcrumbs items={crumbs} />
            <header className="hero">
                <p className="eyebrow">{a.minutes} Minuten Lesezeit</p>
                <h1>{a.title}</h1>
                <p className="lead">{a.description}</p>
                <Jean>{a.jean}</Jean>
            </header>
            <nav aria-label="Inhalt" className="toc">
                <strong>Inhalt</strong>
                <ol>
                    {a.sections.map((s) => (
                        <li key={s.h}>
                            <a href={`#${slugId(s.h)}`}>{s.h}</a>
                        </li>
                    ))}
                </ol>
            </nav>
            <div className="prose">
                {a.sections.map((s) => (
                    <section key={s.h} aria-labelledby={slugId(s.h)}>
                        <h2 id={slugId(s.h)}>{s.h}</h2>
                        {s.p.map((p) => (
                            <p key={p.slice(0, 40)}>{p}</p>
                        ))}
                    </section>
                ))}
            </div>
            <section aria-labelledby="weiter">
                <h2 id="weiter">Weiterlesen und loslegen</h2>
                <ul className="quick-links">
                    {(a.links || []).map(([href, label]) => (
                        <li key={href}>
                            <Link href={href}>{label} →</Link>
                        </li>
                    ))}
                    {others.map((o) => (
                        <li key={o.slug}>
                            <Link href={`/ratgeber/${o.slug}`}>{o.title} →</Link>
                        </li>
                    ))}
                    <li>
                        <Link href="/launch-kit">Launch-Kit öffnen →</Link>
                    </li>
                    <li>
                        <Link href="/">Zu allen KI-Verzeichnissen →</Link>
                    </li>
                </ul>
            </section>
        </article>
    )
}
