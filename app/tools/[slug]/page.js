import Link from 'next/link'
import { notFound } from 'next/navigation'
import JsonLd from '../../components/JsonLd'
import Breadcrumbs, { breadcrumbSchema } from '../../components/Breadcrumbs'
import { SITE_NAME, absoluteUrl } from '../../../lib/site'
import { getTools, getTool, getAlternatives, toolHref, toolRel, TOOLS_STAND } from '../../../lib/tools'
import { comparisonsForTool } from '../../../lib/comparisons'
import { getPrompts, PROMPT_KATEGORIEN } from '../../../lib/prompts'
import { getKbTools, getKbRubrik } from '../../../lib/kb'
import { RUBRIK_RATGEBER } from '../../../lib/rubrik-ratgeber'
import { ZIELGRUPPEN } from '../../../lib/zielgruppen'
import { ABO_PREISE, breakEvenMonate } from '../../../lib/abo-preise'
import { hatAlternativenHub } from '../../../lib/alternativen'
import Faq, { faqSchema } from '../../components/Faq'
import { Band } from '../../components/Deko'

export const dynamicParams = false

export function generateStaticParams() {
    return getTools().map((t) => ({ slug: t.slug }))
}

export function generateMetadata({ params }) {
    const t = getTool(params.slug)
    if (!t) return {}
    return {
        title: `${t.name}: Preis, Gratis-Tarif & Alternativen`,
        description: `${t.summary_de} ${t.free_plan ? 'Mit Gratis-Tarif. ' : ''}${t.price_from ? `Bezahlt ab ${t.price_from}. ` : ''}Dazu Alternativen aus ${t.category}.`.slice(0, 300),
        alternates: { canonical: `/tools/${t.slug}` },
    }
}

const yesNo = (v) => (v === true ? 'Ja' : v === false ? 'Nein' : 'keine Angabe')

// Steckbrief-Kategorie → Rubrik der KI-Tool-Datenbank (für Auswahlkriterien und Datenbank-Link)
const KAT_RUBRIK = {
    'KI-Chat & Recherche': 'chatbots',
    Schreiben: 'schreiben',
    SEO: 'schreiben',
    Produktivität: 'produktivitaet',
    'Meeting & Transkription': 'produktivitaet',
    'Präsentation & Dokumente': 'produktivitaet',
    Automatisierung: 'agenten',
    Design: 'bild',
    'Video & Avatare': 'video',
    'Audio & Voice': 'audio',
    'Funnel & Marketing': 'marketing',
    'E-Mail & Newsletter': 'marketing',
    Formulare: 'marketing',
    'Website & Landingpage': 'marketing',
    Coding: 'coding',
}

// FAQ nur aus den Steckbrief-Daten (laut Anbieter), damit nichts erfunden ist.
function toolFaq(t, alternativen, abo) {
    const f = []
    f.push({
        q: `Ist ${t.name} kostenlos?`,
        a:
            t.free_plan === true
                ? `Ja, ${t.name} hat laut Anbieter einen Gratis-Tarif.${t.price_from ? ` Bezahlte Tarife beginnen bei ${t.price_from}.` : ''}`
                : t.free_plan === false
                  ? `Nein, einen dauerhaften Gratis-Tarif nennt ${t.name} nicht.${t.free_trial ? ` Es gibt aber eine Testphase (${t.free_trial}).` : ''}${t.price_from ? ` Bezahlt ab ${t.price_from}.` : ''}`
                  : `Einen Gratis-Tarif nennt die Preisseite nicht eindeutig.${t.free_trial ? ` Testphase: ${t.free_trial}.` : ''} Prüfe den aktuellen Stand auf der Preisseite des Anbieters.`,
    })
    if (t.price_from) f.push({ q: `Was kostet ${t.name}?`, a: `Laut Anbieter ab ${t.price_from} (Stand ${TOOLS_STAND}). Preise können sich ändern, maßgeblich ist die Preisseite von ${t.name}.` })
    if (abo)
        f.push({
            q: `Lohnt sich bei ${t.name} das Jahresabo?`,
            a: `${abo.plan} kostet monatlich gezahlt $${abo.monatlich.toLocaleString('de-DE')} und bei jährlicher Zahlung $${abo.jaehrlich.toLocaleString('de-DE')} pro Monat. Das Jahresabo lohnt sich, wenn du ${t.name} mindestens ${breakEvenMonate(abo)} Monate im Jahr nutzt.`,
        })
    if (t.german_ui !== null && t.german_ui !== undefined)
        f.push({ q: `Gibt es ${t.name} auf Deutsch?`, a: t.german_ui ? `Ja, die Oberfläche von ${t.name} gibt es laut Anbieter auf Deutsch.` : `Die Oberfläche von ${t.name} ist laut Anbieter nicht auf Deutsch verfügbar.` })
    f.push({ q: `Für wen eignet sich ${t.name}?`, a: `${t.best_for_de}. ${t.summary_de}` })
    if (alternativen.length) f.push({ q: `Welche Alternativen zu ${t.name} gibt es?`, a: `Aus derselben Kategorie (${t.category}): ${alternativen.slice(0, 5).map((a) => a.name).join(', ')}. Alle mit Preisen laut Anbieter weiter unten auf dieser Seite.` })
    return f
}

export default function ToolPage({ params }) {
    const t = getTool(params.slug)
    if (!t) notFound()
    const alternatives = getAlternatives(t)
    const rubrik = getKbRubrik(KAT_RUBRIK[t.category])
    const rat = rubrik && RUBRIK_RATGEBER[rubrik.key]
    const kb = getKbTools().find((k) => k.profil?.slug === t.slug)
    const abo = ABO_PREISE.find((a) => a.slug === t.slug)
    const einsaetze = kb
        ? ZIELGRUPPEN.flatMap((z) => z.aufgaben.filter(([, , , tools]) => tools.includes(kb.slug)).map(([emoji, aufgabe]) => ({ z, emoji, aufgabe })))
        : []
    const faq = toolFaq(t, alternatives, abo)
    const crumbs = [
        { name: SITE_NAME, path: '/' },
        { name: 'KI-Tools', path: '/tools' },
        { name: t.name, path: `/tools/${t.slug}` },
    ]
    const schema = [
        breadcrumbSchema(crumbs),
        {
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: t.name,
            applicationCategory: t.category,
            operatingSystem: 'Web',
            url: t.url,
            description: t.summary_de,
        },
        faqSchema(faq),
    ]
    return (
        <>
            <JsonLd data={schema} />
            <Breadcrumbs items={crumbs} />
            <section className="hero">
                <p className="eyebrow">{t.category}</p>
                <h1>{t.name}: Preis, Gratis-Tarif und Alternativen</h1>
                <p className="lead">{t.summary_de}</p>
                <p>
                    <strong>Am besten für:</strong> {t.best_for_de}
                </p>
                <p className="cta-row">
                    <a className="button" href={toolHref(t)} target="_blank" rel={toolRel(t)}>
                        {t.name} ansehen ↗{t.affiliate && <sup>*</sup>}
                    </a>
                    {t.pricing_url && (
                        <a href={t.pricing_url} target="_blank" rel="noopener noreferrer">
                            Preisseite ↗
                        </a>
                    )}
                </p>
            </section>
            <dl className="facts">
                <div>
                    <dt>Gratis-Tarif</dt>
                    <dd>{yesNo(t.free_plan)}</dd>
                </div>
                <div>
                    <dt>Testphase</dt>
                    <dd>{t.free_trial || '–'}</dd>
                </div>
                <div>
                    <dt>Bezahlt ab</dt>
                    <dd>
                        {t.price_from || 'keine Angabe'}
                        <small>laut Anbieter, {TOOLS_STAND}</small>
                    </dd>
                </div>
                <div>
                    <dt>Oberfläche auf Deutsch</dt>
                    <dd>{yesNo(t.german_ui)}</dd>
                </div>
            </dl>
            {t.source && (
                <p className="source">
                    Quelle: <a href={t.source} target="_blank" rel="nofollow noopener noreferrer">{new URL(t.source).hostname}</a>
                    {t.affiliate && <> · * Partnerlink, <Link href="/transparenz">mehr dazu</Link></>}
                </p>
            )}
            <section aria-labelledby="kosten" className="box box-info">
                <h2 id="kosten">Was kostet {t.name}? 💸</h2>
                <p>
                    {t.free_plan === true
                        ? `Du kannst ${t.name} kostenlos starten.`
                        : t.free_plan === false
                          ? `${t.name} hat keinen dauerhaften Gratis-Tarif${t.free_trial ? `, aber eine Testphase (${t.free_trial})` : ''}.`
                          : `Ob es einen Gratis-Tarif gibt, verrät die Preisseite nicht eindeutig.`}{' '}
                    {t.price_from ? `Bezahlt geht es laut Anbieter ab ${t.price_from} los.` : 'Einen festen Einstiegspreis nennt der Anbieter nicht.'}
                </p>
                {abo && (
                    <p>
                        <strong>Monatlich oder jährlich?</strong> Das Jahresabo für {abo.plan} lohnt sich ab {breakEvenMonate(abo)} Monaten Nutzung.{' '}
                        <Link href="/rechner/abo-monatlich-oder-jaehrlich">Im Abo-Rechner durchrechnen →</Link>
                    </p>
                )}
                <p>
                    Lohnt sich das Abo überhaupt? Der <Link href="/rechner/ki-zeitersparnis">KI-Zeitersparnis-Rechner</Link> stellt gesparte Stunden gegen die
                    Kosten.
                </p>
            </section>
            {rat && (
                <Band farbe="mint" id="pruefen" titel={`So prüfst du ${t.name}, bevor du zahlst 🧭`} sticker={`${rat.kriterien.length} Kriterien`}>
                    <ul className="kriterien-grid">
                        {rat.kriterien.map(([icon, titel, text]) => (
                            <li key={titel}>
                                <span className="kriterien-icon" aria-hidden="true">
                                    {icon}
                                </span>
                                <strong>{titel}</strong>
                                <span>{text}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="box box-tipp">{rat.tipp}</p>
                </Band>
            )}
            {einsaetze.length > 0 && (
                <section aria-labelledby="einsatz">
                    <h2 id="einsatz">Wofür {t.name} im Alltag taugt 🛠️</h2>
                    <ul className="link-cards">
                        {einsaetze.slice(0, 6).map(({ z, emoji, aufgabe }) => (
                            <li key={z.slug + aufgabe}>
                                <Link href={`/ki-tools/fuer/${z.slug}`}>
                                    <strong>
                                        {emoji} {aufgabe}
                                    </strong>
                                </Link>
                                <span>{z.titel}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            )}
            {comparisonsForTool(t.slug).map((c) => (
                <p key={c.slug} className="service-hint">
                    <strong>Im direkten Vergleich:</strong> <Link href={`/tool-vergleiche/${c.slug}`}>{c.title} →</Link>
                </p>
            ))}
            {(() => {
                const passend = getPrompts().filter((p) => p.tools.includes(t.slug)).slice(0, 4)
                return passend.length > 0 ? (
                    <section aria-labelledby="prompts">
                        <h2 id="prompts">Fertige Prompts für {t.name}</h2>
                        <ul className="link-cards">
                            {passend.map((p) => (
                                <li key={p.slug}>
                                    <Link href={`/prompts/${p.slug}`}>
                                        <strong>{p.title}</strong>
                                    </Link>
                                    <span>{p.ziel}</span>
                                    <Link href={`/prompts/kategorie/${p.kategorie}`}>{PROMPT_KATEGORIEN[p.kategorie].name} →</Link>
                                </li>
                            ))}
                        </ul>
                    </section>
                ) : null
            })()}
            {alternatives.length > 0 && (
                <section aria-labelledby="alternativen">
                    <h2 id="alternativen">Alternativen zu {t.name}</h2>
                    <ul className="link-cards">
                        {alternatives.map((a) => (
                            <li key={a.slug}>
                                <Link href={`/tools/${a.slug}`}>
                                    <strong>{a.name}</strong>
                                </Link>
                                <span>{a.summary_de}</span>
                                <span>
                                    {a.free_plan ? 'Gratis-Tarif · ' : ''}
                                    {a.price_from ? `ab ${a.price_from}` : 'Preis auf Anfrage'}
                                </span>
                            </li>
                        ))}
                    </ul>
                </section>
            )}
            <section aria-labelledby="faq">
                <h2 id="faq">Häufige Fragen zu {t.name} 🙋</h2>
                <Faq items={faq} />
            </section>
            <p className="cta-row">
                <Link href="/tools">← Alle KI-Tools mit Preisen</Link>
                {kb && <Link href={`/ki-tools/tool/${kb.slug}`}>{t.name} in der KI-Tool-Datenbank</Link>}
                {kb && hatAlternativenHub(kb.slug) && <Link href={`/ki-tools/alternativen/${kb.slug}`}>Alle Alternativen zu {t.name}</Link>}
                {rubrik && <Link href={`/ki-tools/${rubrik.key}`}>Rubrik {rubrik.name}</Link>}
            </p>
        </>
    )
}
