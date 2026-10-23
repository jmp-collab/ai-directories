import Link from 'next/link'
import Breadcrumbs, { breadcrumbSchema } from '../components/Breadcrumbs'
import JsonLd from '../components/JsonLd'
import Jean from '../components/Jean'
import { GLOSSAR } from '../../lib/ratgeber'
import { absoluteUrl } from '../../lib/site'

export const metadata = {
    title: 'Glossar: Domain Rating, nofollow, UTM und mehr',
    description: `${GLOSSAR.length} Begriffe rund um KI-Verzeichnisse, Backlinks und SEO kurz erklärt: Domain Rating, Authority Score, dofollow, nofollow, UTM, AVV, GEO und mehr.`,
    alternates: { canonical: '/glossar' },
    openGraph: { url: '/glossar' },
}

export default function GlossarPage() {
    const crumbs = [
        { name: 'AIGeddon', path: '/' },
        { name: 'Glossar', path: '/glossar' },
    ]
    const schema = [
        breadcrumbSchema(crumbs),
        {
            '@context': 'https://schema.org',
            '@type': 'DefinedTermSet',
            name: 'Glossar KI-Verzeichnisse und SEO',
            url: absoluteUrl('/glossar'),
            inLanguage: 'de-DE',
            hasDefinedTerm: GLOSSAR.map(([name, description]) => ({ '@type': 'DefinedTerm', name, description })),
        },
    ]
    return (
        <>
            <JsonLd data={schema} />
            <Breadcrumbs items={crumbs} />
            <section className="hero">
                <h1>Glossar: {GLOSSAR.length} Begriffe, die dir beim Eintragen begegnen</h1>
                <p className="lead">Kurz erklärt, ohne Fachchinesisch. Zum Nachschlagen, wenn ein Formular plötzlich nach „rel=sponsored“ fragt.</p>
                <Jean>SEO-Sprech ist wie Simson-Schrauber-Sprech: klingt kompliziert, ist es aber selten.</Jean>
            </section>
            <dl className="legend glossar">
                {GLOSSAR.map(([term, text]) => (
                    <div key={term}>
                        <dt>{term}</dt>
                        <dd>{text}</dd>
                    </div>
                ))}
            </dl>
            <p>
                <Link href="/ratgeber">← Zu den Ratgebern</Link>
            </p>
        </>
    )
}
