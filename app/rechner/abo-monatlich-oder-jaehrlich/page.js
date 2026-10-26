import Link from 'next/link'
import JsonLd from '../../components/JsonLd'
import Breadcrumbs, { breadcrumbSchema } from '../../components/Breadcrumbs'
import Faq, { faqSchema } from '../../components/Faq'
import LeadMagnetBox from '../../components/LeadMagnetBox'
import { Band } from '../../components/Deko'
import AboRechner from '../../components/AboRechner'
import { SITE_NAME } from '../../../lib/site'
import { RECHNER } from '../../../lib/rechner'
import { ABO_PREISE, breakEvenMonate } from '../../../lib/abo-preise'
import Vernetzt, { seitenPfad } from '../../components/Vernetzt'

const R = RECHNER.find((r) => r.slug === 'abo-monatlich-oder-jaehrlich')

export const metadata = {
    title: 'KI-Abo monatlich oder jährlich? Rechner mit Break-even',
    description: `Für ${ABO_PREISE.map((a) => a.name).join(', ')}: Nutzungsdauer einstellen und sehen, ob sich das Jahresabo lohnt. Preise laut Anbieter.`,
    alternates: { canonical: '/rechner/abo-monatlich-oder-jaehrlich' },
}

const FAQ = [
    {
        q: 'Wann lohnt sich ein Jahresabo für KI-Tools?',
        a: 'Wenn du das Tool mindestens so viele Monate nutzt, wie der Break-even angibt. Beim Jahresabo zahlst du 12 Monate im Voraus, auch wenn du in einzelnen Monaten pausierst.',
    },
    {
        q: 'Welches Jahresabo spart am meisten?',
        a: `Prozentual laut Anbieterpreisen Otter.ai Pro: $${ABO_PREISE.find((a) => a.slug === 'otter-ai').jaehrlich.toLocaleString('de-DE')} statt $${ABO_PREISE.find((a) => a.slug === 'otter-ai').monatlich.toLocaleString('de-DE')} im Monat, das Jahresabo lohnt sich dort schon ab ${breakEvenMonate(ABO_PREISE.find((a) => a.slug === 'otter-ai'))} Monaten Nutzung.`,
    },
    {
        q: 'Sind die Preise inklusive Steuer?',
        a: 'Die Werte stammen von den Preisseiten der Anbieter in US-Dollar. Ob Umsatzsteuer dazukommt, hängt vom Anbieter und deinem Standort ab. Prüfe den Endpreis im Bestellprozess.',
    },
]

function Page() {
    const crumbs = [
        { name: SITE_NAME, path: '/' },
        { name: 'Rechner', path: '/rechner' },
        { name: R.titel, path: `/rechner/${R.slug}` },
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
                <p className="eyebrow">Rechner · {R.emoji}</p>
                <h1>{R.titel}</h1>
                <p className="lead">{R.kurz}</p>
            </section>
            <Band farbe="gelb" id="rechnen" titel="Jetzt rechnen">
                <AboRechner />
            </Band>
            <section aria-labelledby="tabelle">
                <h2 id="tabelle">Alle Preise auf einen Blick</h2>
                <div className="table-scroll">
                    <table>
                        <caption>Preis pro Monat laut Anbieter in US-Dollar</caption>
                        <thead>
                            <tr>
                                <th scope="col">Tool</th>
                                <th scope="col">monatlich</th>
                                <th scope="col">jährlich</th>
                                <th scope="col">lohnt ab</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ABO_PREISE.map((a) => (
                                <tr key={a.slug}>
                                    <th scope="row">
                                        <Link href={`/tools/${a.slug}`}>
                                            {a.name} {a.plan}
                                        </Link>
                                    </th>
                                    <td>${a.monatlich.toLocaleString('de-DE')}</td>
                                    <td>${a.jaehrlich.toLocaleString('de-DE')}</td>
                                    <td>{breakEvenMonate(a)} Monaten</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
            <p className="box box-tipp">
                Lohnt sich das Abo überhaupt? Der <Link href="/rechner/ki-zeitersparnis">KI-Zeitersparnis-Rechner</Link> stellt gesparte Stunden gegen die Kosten. Gratis-Tarife findest du unter <Link href="/ki-tools/kostenlos">kostenlose KI-Tools</Link>.
            </p>
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
            <Vernetzt pfad={seitenPfad('/rechner/abo-monatlich-oder-jaehrlich')} />
        </>
    )
}
