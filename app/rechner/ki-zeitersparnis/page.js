import Link from 'next/link'
import JsonLd from '../../components/JsonLd'
import Breadcrumbs, { breadcrumbSchema } from '../../components/Breadcrumbs'
import Faq, { faqSchema } from '../../components/Faq'
import LeadMagnetBox from '../../components/LeadMagnetBox'
import { Band } from '../../components/Deko'
import ZeitRechner from '../../components/ZeitRechner'
import { SITE_NAME } from '../../../lib/site'
import { RECHNER } from '../../../lib/rechner'
import { ABOS, PREISE_STAND } from '../../../lib/preise'
import Vernetzt, { seitenPfad } from '../../components/Vernetzt'

const R = RECHNER.find((r) => r.slug === 'ki-zeitersparnis')

export const metadata = {
    title: 'KI-Zeitersparnis-Rechner: Lohnt sich ein KI-Abo?',
    description: 'Berechne in Sekunden, ob sich ein KI-Abo lohnt: gesparte Stunden, Wert deiner Zeit, Abo-Kosten, Break-even in Minuten pro Woche. Für Einzelne und Teams.',
    alternates: { canonical: '/rechner/ki-zeitersparnis' },
}

const FAQ = [
    {
        "q": "Wie viel Zeit spart KI wirklich?",
        "a": "Das hängt stark von der Aufgabe ab. Bei Entwürfen, Zusammenfassungen und E-Mails sind 20 bis 40 Prozent realistisch, bei Aufgaben mit viel Prüfaufwand weniger. Starte im Rechner konservativ mit 15 bis 25 Prozent."
    },
    {
        "q": "Ab wann lohnt sich ein KI-Abo?",
        "a": "Sobald die gesparte Zeit mehr wert ist als das Abo. Bei 20 Dollar im Monat und 50 Euro Stundensatz reichen schon rund 6 Minuten pro Woche. Der Rechner zeigt dir den Break-even für deine Werte."
    },
    {
        "q": "Welches KI-Abo ist das beste?",
        "a": "Das beste Abo ist das, dessen KI deine Aufgaben am besten löst. Teste das mit dem KI-Test auf dieser Seite, bevor du bezahlst."
    }
]

function Page() {
    const crumbs = [
        { name: SITE_NAME, path: '/' },
        { name: 'Rechner', path: '/rechner' },
        { name: R.titel, path: '/rechner/ki-zeitersparnis' },
    ]
    const schema = [
        breadcrumbSchema(crumbs),
        {
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: R.titel,
            applicationCategory: 'FinanceApplication',
            operatingSystem: 'Web',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
            description: R.kurz,
        },
        faqSchema(FAQ),
    ]
    return (
        <>
            <JsonLd data={schema} />
            <Breadcrumbs items={crumbs} />
            <section className="hero">
                <p className="eyebrow">
                    Rechner · {R.emoji}
                </p>
                <h1>{R.titel}</h1>
                <p className="lead">{R.kurz}</p>
            </section>
            <Band farbe="mint" id="rechnen" titel="Jetzt rechnen">
                <ZeitRechner />
            </Band>
            <section aria-labelledby="quellen">
                <h2 id="quellen">Abo-Preise laut Anbieter</h2>
                <ul>
                    {ABOS.map((a) => (
                        <li key={a.id}>
                            {a.name}: {a.preis} $ pro Monat · <a href={a.quelle} rel="nofollow noopener noreferrer">{new URL(a.quelle).hostname}</a>
                        </li>
                    ))}
                </ul>
                <p className="source">Stand {PREISE_STAND}. Preise ohne Steuern; andere Abos über „Eigener Preis“ eintragen.</p>
            </section>
            <Band farbe="pink" id="faq" titel="Fragen und Antworten 🙋">
                <Faq items={FAQ} />
            </Band>
            <section aria-labelledby="mehr">
                <h2 id="mehr">Weitere Rechner</h2>
                <ul className="link-cards">
                    {RECHNER.filter((r) => r.slug !== R.slug).map((r) => (
                        <li key={r.slug}>
                            <Link href={`/rechner/${r.slug}`}>
                                <strong>
                                    {r.emoji} {r.titel}
                                </strong>
                            </Link>
                            <span>{r.kurz}</span>
                        </li>
                    ))}
                </ul>
            </section>
            <LeadMagnetBox id="prompt-spickzettel" />
        </>
    )
}

export default function Seite() {
    return (
        <>
            <Page />
            <Vernetzt pfad={seitenPfad('/rechner/ki-zeitersparnis')} />
        </>
    )
}
