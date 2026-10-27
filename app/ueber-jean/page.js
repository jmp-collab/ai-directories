import Link from 'next/link'
import JsonLd from '../components/JsonLd'
import Jean from '../components/Jean'
import Breadcrumbs, { breadcrumbSchema } from '../components/Breadcrumbs'
import { SITE_NAME, absoluteUrl, withBase } from '../../lib/site'
import { AUTOR_ID } from '../../lib/autor'
import Vernetzt, { seitenPfad } from '../components/Vernetzt'

export const metadata = {
    title: 'Über Jean Maurice Port: SEO/SGE Manager & KI-Praktiker',
    description:
        'Jean Maurice Port ist Senior SEO/SGE Manager bei der MotoMobilityGroup, war Head of AI bei Greyheart Media und baut diese Liste der KI-Verzeichnisse. Werdegang, Schwerpunkte, Projekte, Zertifikate.',
    alternates: { canonical: '/ueber-jean' },
    openGraph: { url: '/ueber-jean', images: [absoluteUrl('/jean.jpg')] },
}

const FACTS = [
    ['Im Online-Marketing', 'seit 2015', 'Geschäftsführung, Agentur, Inhouse'],
    ['SEO und SGE', 'Senior', 'iGaming, E-Commerce, KI-Suche'],
    ['Generative KI', 'seit 2023', 'Engineer, dann Head of AI'],
    ['Studium', 'M.A.', 'Wirtschaft, Universität Trier'],
]

const CAREER = [
    {
        role: 'Senior SEO/SGE Manager',
        org: 'MotoMobilityGroup',
        time: 'seit Aug. 2025',
        place: 'Jena, hybrid',
        text: 'SEO und Sichtbarkeit in KI-Suchen für mehrere internationale Onlineshops. Technisches SEO, Content, mehrsprachige Produktdaten, Produktimporte und interaktive Formate.',
    },
    {
        role: 'Head of Artificial Intelligence',
        org: 'Greyheart Media Ltd',
        time: 'Aug. 2024 bis Aug. 2025',
        place: 'Leeds, hybrid',
        text: 'Verantwortung für generative KI: Tools, Workflows, LLM-Betrieb (LLMOps) und KI-gestützte Recherche.',
    },
    {
        role: 'Generative AI Engineer',
        org: 'selbstständig',
        time: 'Jan. 2023 bis Aug. 2024',
        place: 'remote',
        text: 'Prompt Engineering, KI-gestützte Content-Produktion, Business-Intelligence-Projekte, Python und SEO für Kunden.',
    },
    {
        role: 'Senior SEO Manager',
        org: 'iGaming.com',
        time: 'Juni 2020 bis Dez. 2022',
        place: 'Bulgarien, remote',
        text: 'SEO in einem der härtesten Wettbewerbsumfelder überhaupt.',
    },
    {
        role: 'Managing Director Marketing',
        org: 'Digital Media Transformers',
        time: 'Nov. 2016 bis Jan. 2021',
        place: 'Saarland',
        text: 'Strategieberatung mit eigenem Beratungskonzept „OIODO“: digitale Geschäftsmodelle, Competitive Intelligence, SEO/SXO, Linkbuilding, Paid Media, Affiliate, Automatisierung, Schulungen und Workshops.',
    },
    {
        role: 'CEO & Head of Marketing',
        org: 'kannkind GmbH',
        time: 'Aug. 2015 bis Aug. 2017',
        place: 'Kandel',
        text: 'Geschäftsführung und Marketing aus einer Hand.',
    },
]

const SKILLS = [
    ['SEO und KI-Suche', 'Technisches SEO, SEO-Audits, SGE und Google AI Overviews, Content-Strategie, Linkaufbau, interne Verlinkung'],
    ['Generative KI', 'LLMs, Prompt Engineering, LLMOps, Google Gemini und GPT, Python, KI-Workflows und Automatisierung'],
    ['E-Commerce', 'Mehrsprachige Produktdaten, PIM- und Importplanung, Fitment-Daten, Conversion-Funnels, Affiliate-Management'],
    ['Strategie', 'Geschäftsmodellinnovation, Competitive Intelligence, SOSTAC-Planung, Data-driven Marketing, Paid Search'],
]


const CERTS = [
    ['Google Ads', 'Search, Display, Leistungsanalyse, KI-gestützte Performance-Anzeigen, Offline-Umsatz (Skillshop, 2025)'],
    ['Google Cloud: Generative KI', 'Generative AI Fundamentals, Large Language Models, Attention Mechanism, Encoder-Decoder, Transformer und BERT, Image Captioning, Responsible AI (2024)'],
    ['Google Cloud: Transformation', 'Digital Transformation, Innovating with Data, Infrastructure and Application Modernization (2024)'],
    ['Weitere', 'Semrush Senior Expert, Google Digital Garage, Certified SOSTAC Planning Expert (Smart Insights)'],
]

const EDUCATION = [
    ['Master of Arts, Wirtschaftswissenschaften', 'Universität Trier, 2013 bis 2017, Note 1,6'],
    ['Englische Literatur', 'Universität des Saarlandes, 2012 bis 2013'],
    ['Bachelor of Arts, Wirtschaftswissenschaften', 'Universität Trier, 2007 bis 2010, Note 1,3'],
]

const LINKS = [
    {
        group: 'Profile',
        items: [
            ['Hugging Face: jmp1987', 'https://huggingface.co/jmp1987', 'Meine KI-Spielwiese.'],
            ['GitHub: jmp-collab', 'https://github.com/jmp-collab', 'Code, Experimente und gelegentlich Chaos.'],
        ],
    },
]

function AboutPage() {
    const crumbs = [
        { name: SITE_NAME, path: '/' },
        { name: 'Über Jean', path: '/ueber-jean' },
    ]
    const schema = [
        breadcrumbSchema(crumbs),
        {
            '@context': 'https://schema.org',
            '@type': 'Person',
            '@id': AUTOR_ID,
            name: 'Jean Maurice Port',
            jobTitle: 'Senior SEO/SGE Manager',
            worksFor: { '@type': 'Organization', name: 'MotoMobilityGroup' },
            alumniOf: [
                { '@type': 'CollegeOrUniversity', name: 'Universität Trier' },
                { '@type': 'CollegeOrUniversity', name: 'Universität des Saarlandes' },
            ],
            knowsAbout: ['SEO', 'Search Generative Experience', 'Generative KI', 'Large Language Models', 'Prompt Engineering', 'E-Commerce', 'Content-Strategie'],
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
                    <img className="about-photo" src={withBase('/jean.jpg')} alt="Jean Maurice Port" width="160" height="160" />
                    <div>
                        <p className="eyebrow">Der Typ hinter der Liste 🧔</p>
                        <h1>Jean Maurice Port</h1>
                        <p className="lead">
                            Senior SEO/SGE Manager bei der MotoMobilityGroup in Jena, vorher Head of AI bei Greyheart Media.
                            Seit 2015 im Online-Marketing, seit 2023 mit generativer KI. Tagsüber Rankings, nachts Tools, Spiele
                            und Listen wie diese.
                        </p>
                    </div>
                </div>
                <Jean>Ja, das bin ich. Ja, der Bart ist echt. Nein, ich trage keine Perücke im Winter.</Jean>
            </section>

            <dl className="facts">
                {FACTS.map(([label, value, note]) => (
                    <div key={label}>
                        <dt>{label}</dt>
                        <dd>
                            {value}
                            <small>{note}</small>
                        </dd>
                    </div>
                ))}
            </dl>

            <section aria-labelledby="werdegang">
                <h2 id="werdegang">Werdegang</h2>
                <ol className="cv">
                    {CAREER.map((c) => (
                        <li key={c.role + c.org}>
                            <p className="cv-time">
                                {c.time} · {c.place}
                            </p>
                            <h3>
                                {c.role} <span>{c.org === 'selbstständig' ? 'selbstständig' : `bei ${c.org}`}</span>
                            </h3>
                            <p>{c.text}</p>
                        </li>
                    ))}
                </ol>
            </section>

            <section aria-labelledby="schwerpunkte">
                <h2 id="schwerpunkte">Schwerpunkte</h2>
                <ul className="link-cards">
                    {SKILLS.map(([name, text]) => (
                        <li key={name}>
                            <strong>{name}</strong>
                            <span>{text}</span>
                        </li>
                    ))}
                </ul>
            </section>


            <section aria-labelledby="zertifikate">
                <h2 id="zertifikate">Zertifikate</h2>
                <ul className="link-cards">
                    {CERTS.map(([name, text]) => (
                        <li key={name}>
                            <strong>{name}</strong>
                            <span>{text}</span>
                        </li>
                    ))}
                </ul>
            </section>

            <section aria-labelledby="ausbildung">
                <h2 id="ausbildung">Ausbildung und Lehre</h2>
                <ul className="link-cards">
                    {EDUCATION.map(([name, text]) => (
                        <li key={name}>
                            <strong>{name}</strong>
                            <span>{text}</span>
                        </li>
                    ))}
                    <li>
                        <strong>Vorlesungen zu Marketing und SEO</strong>
                        <span>Gastvorlesungen an der Hochschule. Unterrichten macht mir Spaß, vor allem SEO.</span>
                    </li>
                </ul>
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

export default function Seite() {
    return (
        <>
            <AboutPage />
            <Vernetzt pfad={seitenPfad('/ueber-jean')} />
        </>
    )
}
