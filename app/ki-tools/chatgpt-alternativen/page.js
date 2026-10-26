import Link from 'next/link'
import JsonLd from '../../components/JsonLd'
import Breadcrumbs, { breadcrumbSchema } from '../../components/Breadcrumbs'
import Faq, { faqSchema } from '../../components/Faq'
import ToolCards from '../../components/ToolCards'
import { Band } from '../../components/Deko'
import { SITE_NAME } from '../../../lib/site'
import { getKbRubrik } from '../../../lib/kb'
import Vernetzt, { seitenPfad } from '../../components/Vernetzt'

const FAQ = [
    {
        q: 'Was ist die beste ChatGPT-Alternative?',
        a: 'Die meistempfohlenen Alternativen in den großen Community-Listen sind Claude von Anthropic und Gemini von Google; für Recherche mit Quellen Perplexity. Welche für dich besser ist, zeigt ein direkter Vergleich mit denselben Aufgaben im KI-Test.',
    },
    {
        q: 'Gibt es kostenlose ChatGPT-Alternativen?',
        a: 'Ja. Viele Chatbots haben einen Gratis-Tarif, und mit Open-Source-Werkzeugen wie Ollama kannst du Sprachmodelle sogar lokal und ohne laufende Kosten betreiben.',
    },
    {
        q: 'Welche ChatGPT-Alternative ist am datenschutzfreundlichsten?',
        a: 'Am meisten Kontrolle hast du mit lokal betriebenen Modellen, weil die Daten deinen Rechner nicht verlassen. Bei Cloud-Diensten lohnt der Blick in die Einstellungen zum Training mit deinen Daten.',
    },
]

export const metadata = {
    title: 'ChatGPT-Alternativen 2026: Claude, Gemini, Perplexity & Co.',
    description: 'Die besten ChatGPT-Alternativen im Überblick: Chatbots und KI-Suchmaschinen, nach Empfehlung der größten Community-Listen. Mit Selbsttest zum direkten Vergleich.',
    alternates: { canonical: '/ki-tools/chatgpt-alternativen' },
}

function ChatgptAlternativen() {
    const sortiert = (r) => [...r.tools].filter((t) => t.slug !== 'chatgpt').sort((a, b) => b.konsens - a.konsens || Number(b.deutsch) - Number(a.deutsch))
    const chat = sortiert(getKbRubrik('chatbots'))
    const suche = sortiert(getKbRubrik('suche'))
    const crumbs = [
        { name: SITE_NAME, path: '/' },
        { name: 'KI-Tools', path: '/ki-tools' },
        { name: 'ChatGPT-Alternativen', path: '/ki-tools/chatgpt-alternativen' },
    ]
    const schema = [
        breadcrumbSchema(crumbs),
        {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'ChatGPT-Alternativen',
            itemListElement: chat.slice(0, 10).map((t, i) => ({ '@type': 'ListItem', position: i + 1, name: t.name, url: t.url })),
        },
        faqSchema(FAQ),
    ]
    return (
        <>
            <JsonLd data={schema} />
            <Breadcrumbs items={crumbs} />
            <section className="hero">
                <p className="eyebrow">{chat.length + suche.length} Alternativen</p>
                <h1>ChatGPT-Alternativen: {chat.length} Chatbots und {suche.length} KI-Suchmaschinen</h1>
                <p className="lead">ChatGPT ist nicht die einzige gute KI. Hier stehen die Alternativen, die die großen Community-Listen empfehlen, mit den Favoriten oben.</p>
            </section>
            <p className="box box-tipp">
                Nicht raten, testen: Im <Link href="/ki-test">KI-Test</Link> schickst du dieselben Aufgaben an ChatGPT, Claude, Gemini, Perplexity und Grok und bekommst deine eigene Rangliste.
            </p>
            <section aria-labelledby="chatbots">
                <h2 id="chatbots">🤖 Chatbots als ChatGPT-Alternative</h2>
                <ToolCards tools={chat.slice(0, 18)} />
                <p>
                    <Link href="/ki-tools/chatbots">Alle {chat.length + 1} Chatbots in der Datenbank →</Link>
                </p>
            </section>
            <Band farbe="blau" id="suche" titel="🔎 KI-Suchmaschinen: Antworten mit Quellen">
                <ToolCards tools={suche} />
            </Band>
            <Band farbe="pink" id="faq" titel="Fragen zu ChatGPT-Alternativen 🙋">
                <Faq items={FAQ} />
            </Band>
        </>
    )
}

export default function Seite() {
    return (
        <>
            <ChatgptAlternativen />
            <Vernetzt pfad={seitenPfad('/ki-tools/chatgpt-alternativen')} />
        </>
    )
}
