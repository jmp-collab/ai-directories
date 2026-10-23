import Link from 'next/link'
import { notFound } from 'next/navigation'
import JsonLd from '../../components/JsonLd'
import Faq, { faqSchema } from '../../components/Faq'
import Breadcrumbs, { breadcrumbSchema } from '../../components/Breadcrumbs'
import { PriceBadge, ExperienceBadge } from '../../components/Badges'
import DirectoryTable from '../../components/DirectoryTable'
import { getDirectories, getDirectory, getRank, getVisitsPercentile, getAlternatives } from '../../../lib/data'
import { getVerdict } from '../../../lib/verdict'
import { jeanLine } from '../../../lib/score'
import Jean from '../../components/Jean'
import ScoreBar from '../../components/ScoreBar'
import CopyButton from '../../components/CopyButton'
import FreshBox from '../../components/FreshBox'
import CheckBox from '../../components/CheckBox'
import { getCheck, hasStatusIssue } from '../../../lib/checks'
import { absoluteUrl } from '../../../lib/site'
import { submitRel } from '../../../lib/monetization'
import { dealLabel, formatRating, formatVisits, pricingLabel } from '../../../utils/i18n-de'

export const dynamicParams = false

export function generateStaticParams() {
    return getDirectories().map((d) => ({ slug: d.slug }))
}

export function generateMetadata({ params }) {
    const d = getDirectory(params.slug)
    if (!d) return {}
    const price = d.pricing ? pricingLabel(d.pricing).toLowerCase() : 'Preis unklar'
    return {
        title: `${d.name} eintragen: Kosten, Domain Rating & Erfahrung`,
        description: `${d.name} im Check: ${price}, Domain Rating ${formatRating(d.domain_rating)}, ca. ${formatVisits(d.monthly_visits)} Besuche im Monat. So trägst du dein KI-Tool ein, plus Alternativen.`,
        alternates: { canonical: `/verzeichnis/${d.slug}` },
        openGraph: { url: `/verzeichnis/${d.slug}` },
    }
}

function buildFaq(d, rank, total) {
    const price =
        d.pricing === 'Free'
            ? `Ja, der Eintrag bei ${d.name} ist kostenlos.`
            : d.pricing === 'Paid'
              ? `Nein, ${d.name} verlangt für den Eintrag Geld.${d.dealCode ? ` Mit dem Code ${d.dealCode} gibt es ${dealLabel(d.dealText)}.` : ''}`
              : `Dazu liegen keine gesicherten Daten vor. Prüf den Preis direkt auf der Einreichungsseite.`
    return [
        { q: `Ist ${d.name} kostenlos?`, a: price },
        {
            q: `Welches Domain Rating hat ${d.name}?`,
            a: `${d.name} hat ein Domain Rating von ${formatRating(d.domain_rating)} (Ahrefs, Skala 0 bis 100). Damit liegt es auf Platz ${rank} von ${total} Verzeichnissen dieser Liste.`,
        },
        {
            q: `Wie trage ich mein KI-Tool bei ${d.name} ein?`,
            a: getCheck(d.slug)?.status
                ? `Im Moment gar nicht. ${getCheck(d.slug).status} Stand: Oktober 2026. Nimm solange eine der Alternativen auf dieser Seite.`
                : `Über die Einreichungsseite ${d.submission_link}. Halte Name, Einzeiler, Beschreibung, Logo und Screenshots bereit. ${
                d.submission_experience === 'Good'
                    ? 'Die Einreichung läuft nach bisherigen Tests reibungslos.'
                    : d.submission_experience === 'Bad'
                      ? 'Die Einreichung gilt als hakelig, plan also etwas mehr Zeit ein.'
                      : 'Zur Einreichung gibt es noch keine Erfahrungswerte.'
            }`,
        },
    ]
}

export default function DirectoryPage({ params }) {
    const d = getDirectory(params.slug)
    if (!d) notFound()

    const total = getDirectories().length
    const rank = getRank(d.slug)
    const percentile = getVisitsPercentile(d)
    const verdict = getVerdict(d)
    const alternatives = getAlternatives(d)
    const faq = buildFaq(d, rank, total)
    const crumbs = [
        { name: 'AIGeddon', path: '/' },
        { name: d.name, path: `/verzeichnis/${d.slug}` },
    ]

    const schema = [
        breadcrumbSchema(crumbs),
        {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: `${d.name} eintragen`,
            url: absoluteUrl(`/verzeichnis/${d.slug}`),
            inLanguage: 'de-DE',
            about: { '@type': 'WebSite', name: d.name, url: d.link },
        },
        faqSchema(faq),
    ]

    return (
        <article>
            <JsonLd data={schema} />
            <Breadcrumbs items={crumbs} />

            <header className="detail-header">
                <div>
                    <h1>{d.name} eintragen: lohnt sich das? Wir haben nachgerechnet (halbwegs)</h1>
                    <p className="badges">
                        <PriceBadge value={d.pricing} /> <ExperienceBadge value={d.submission_experience} blocked={hasStatusIssue(d.slug)} />
                    </p>
                </div>
            </header>

            <div className={`verdict verdict-${verdict.tone}`}>
                <p className="verdict-label">Jeans Urteil: {verdict.short}</p>
                <p>
                    <strong>{d.name}</strong> ist ein {d.pricing ? `${pricingLabel(d.pricing).toLowerCase()}es ` : ''}Verzeichnis mit Domain Rating {formatRating(d.domain_rating)} und
                    {d.monthly_visits ? ` rund ${formatVisits(d.monthly_visits)} Besuchen im Monat.` : ' ohne belastbare Traffic-Daten.'}{' '}
                    {verdict.text}
                </p>
            </div>

            <Jean>{jeanLine(d)}</Jean>

            <p className="cta-row">
                <a className="button" href={hasStatusIssue(d.slug) ? d.link : d.submission_link} target="_blank" rel={hasStatusIssue(d.slug) ? 'nofollow noopener noreferrer' : submitRel(d)}>
                    {hasStatusIssue(d.slug) ? `Website von ${d.name} ansehen ↗` : `Jetzt bei ${d.name} eintragen 🚀`}
                    {d.affiliate && !hasStatusIssue(d.slug) && <sup title="Partnerlink: Wir erhalten ggf. eine Provision.">*</sup>}
                </a>
                <a href={d.link} target="_blank" rel="nofollow noopener noreferrer">
                    Erst mal die Website bestaunen ↗
                </a>
                <CopyButton label="Link zu dieser Seite kopieren 🔗" done="Link kopiert ✓" />
            </p>

            <section aria-labelledby="zahlen">
                <h2 id="zahlen">{d.name} in Zahlen 🔢</h2>
                <ScoreBar directory={d} />
                <dl className="facts">
                    <div>
                        <dt>Domain Rating</dt>
                        <dd>
                            {formatRating(d.domain_rating)} <small>Platz {rank} von {total}</small>
                        </dd>
                    </div>
                    <div>
                        <dt>Besuche/Monat</dt>
                        <dd>
                            {formatVisits(d.monthly_visits)}
                            {d.monthly_visits > 0 && <small>mehr als {percentile} % der Liste, Angeber</small>}
                        </dd>
                    </div>
                    <div>
                        <dt>Preis</dt>
                        <dd>{pricingLabel(d.pricing)}</dd>
                    </div>
                    <div>
                        <dt>Einreichung</dt>
                        <dd>
                            <ExperienceBadge value={d.submission_experience} blocked={hasStatusIssue(d.slug)} />
                        </dd>
                    </div>
                </dl>
                <FreshBox directory={d} />
                <CheckBox slug={d.slug} />
            </section>

            {d.dealCode && (
                <section aria-labelledby="rabatt" className="deal-box">
                    <h2 id="rabatt">Rabattcode für {d.name} 🤑</h2>
                    <p>
                        Code <code>{d.dealCode}</code> <CopyButton value={d.dealCode} label="Code kopieren" /> beim Checkout eingeben: {dealLabel(d.dealText)}. Ob der Code noch gilt,
                        entscheidet der Anbieter. Wir haften nicht für gebrochene Sparherzen.
                    </p>
                </section>
            )}

            <section aria-labelledby="alternativen">
                <h2 id="alternativen">Alternativen zu {d.name} (falls ihr nicht zusammenfindet) 💔</h2>
                <p>
                    {d.pricing === 'Free' ? 'Ebenfalls kostenlos' : d.pricing === 'Paid' ? 'Ebenfalls kostenpflichtig' : 'Ähnlich eingestuft'} und
                    mit ähnlicher Domain Rating. Wenn du ohnehin am Eintragen bist, nimm die gleich mit. Wer A sagt, kann auch B tippen.
                </p>
                <DirectoryTable directories={alternatives} interactive={false} />
            </section>

            <section aria-labelledby="faq">
                <h2 id="faq">Fragen zu {d.name} 🙋</h2>
                <Faq items={faq} />
            </section>

            <p>
                <Link href="/">← Zurück zu allen {total} KI-Verzeichnissen, das Karussell wartet</Link>
            </p>
        </article>
    )
}
