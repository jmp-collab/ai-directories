import Link from 'next/link'
import JeanIcon from './JeanIcon'
import TrackerMini from './TrackerMini'
import CopyButton from './CopyButton'
import { getDirectories } from '../../lib/data'
import { getScore } from '../../lib/score'
import { hasStatusIssue } from '../../lib/checks'
import { isDrSuspect } from '../../lib/fresh'
import { getTools } from '../../lib/tools'
import { dealLabel } from '../../utils/i18n-de'
import { NEWSLETTER_URL, YOUTUBE_SUBSCRIBE_URL, submitRel } from '../../lib/monetization'
import { withBase } from '../../lib/site'

// Tageswechsel ohne Server: Die Seite wird täglich neu gebaut, der Tag des Jahres wählt Deal und Tool.
const dayIndex = () => {
    const now = new Date()
    return Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000)
}

const KOMPASS = [
    ['/#alle', 'Alle Verzeichnisse', 'lupe', false],
    ['/prompts', 'Prompt-Bibliothek', 'prompt', true],
    ['/prompts/archiv', 'Prompt-Archiv (103 Rollen)', 'prompt', false],
    ['/prompt-baukasten', 'Prompt-Baukasten', 'prompt', false],
    ['/prompt-check', 'Prompt-Check', 'lupe', true],
    ['/tutorials', 'Tutorials', 'pokal', true],
    ['/downloads', 'Gratis-Downloads', 'herz', true],
    ['/ki-tools', 'KI-Tool-Datenbank', 'lupe', false],
    ['/ki-test', 'KI-Test: Chatbots vergleichen', 'pokal', true],
    ['/tools', 'KI-Tools mit Preisen', 'werkzeug', false],
    ['/tool-vergleiche', 'Tool-Vergleiche', 'pokal', true],
    ['/top-50', 'Top 50 Verzeichnisse', 'herz', false],
    ['/liste/rabattcodes', 'Deals', 'deal', false],
    ['/launch-kit', 'Launch-Kit', 'rakete', false],
    ['/freischaltung', 'Freischaltung & Sperren', 'strahlung', false],
    ['/quiz', 'Quiz', 'pokal', false],
    ['/ratgeber', 'Ratgeber', 'post', false],
    ['/ueber-jean', 'Über Jean', 'tattoo', true],
]

function Widget({ icon, cool, title, children }) {
    return (
        <section className="widget">
            <p className="widget-title">
                <JeanIcon badge={icon} cool={cool} size={34} />
                <span>{title}</span>
            </p>
            {children}
        </section>
    )
}

export function SidebarLeft() {
    const directories = getDirectories()
    const top = directories
        .filter((d) => d.pricing === 'Free' && d.submission_experience === 'Good' && !hasStatusIssue(d.slug) && !isDrSuspect(d))
        .map((d) => ({ ...d, score: getScore(d).total }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 3)
    return (
        <>
            <Widget icon="lupe" title="Jeans Kompass">
                <ul className="kompass">
                    {KOMPASS.map(([href, label, icon, cool]) => (
                        <li key={href}>
                            <Link href={href}>
                                <JeanIcon badge={icon} cool={cool} size={26} />
                                <span>{label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </Widget>
            <Widget icon="pokal" title="Dein Fortschritt">
                <TrackerMini total={directories.length} />
            </Widget>
            <Widget icon="herz" title="Jeans Gratis-Top-3">
                <ol className="widget-list">
                    {top.map((d) => (
                        <li key={d.slug}>
                            <Link href={`/verzeichnis/${d.slug}`}>{d.name}</Link> <span className="score-pill" style={{ '--score': d.score }}>{d.score}</span>
                        </li>
                    ))}
                </ol>
            </Widget>
        </>
    )
}

export function SidebarRight() {
    const day = dayIndex()
    const deals = getDirectories().filter((d) => d.dealCode && !hasStatusIssue(d.slug))
    const deal = deals[day % deals.length]
    const tools = getTools()
    const tool = tools[day % tools.length]
    const hasNewsletter = Boolean(NEWSLETTER_URL)
    return (
        <>
            <Widget icon={hasNewsletter ? 'post' : 'play'} cool title={hasNewsletter ? 'AIGeddon Briefing' : 'AIGeddon auf YouTube'}>
                <p>{hasNewsletter ? 'Neue Verzeichnisse, Sperren und Deals einmal pro Woche.' : 'KI-Use-Cases, Prompts und Tutorials als Video.'}</p>
                <a className="button button-small" href={hasNewsletter ? `${NEWSLETTER_URL.replace(/\/$/, '')}/subscribe` : YOUTUBE_SUBSCRIBE_URL} target="_blank" rel="noopener">
                    {hasNewsletter ? 'Abonnieren →' : 'Kanal abonnieren →'}
                </a>
            </Widget>
            {deal && (
                <Widget icon="deal" title="Deal des Tages">
                    <p>
                        <strong>{dealLabel(deal.dealText)}</strong> bei <Link href={`/verzeichnis/${deal.slug}`}>{deal.name}</Link>
                    </p>
                    <p className="widget-code">
                        <code>{deal.dealCode}</code> <CopyButton value={deal.dealCode} label="Kopieren" />
                    </p>
                    <p className="widget-note">
                        <a href={deal.submission_link} target="_blank" rel={submitRel(deal)}>
                            Einlösen ↗{deal.affiliate && <sup>*</sup>}
                        </a>{' '}
                        · <Link href="/liste/rabattcodes">alle Deals</Link>
                    </p>
                </Widget>
            )}
            {tool && (
                <Widget icon="werkzeug" title="Tool des Tages">
                    <p>
                        <Link href={`/tools/${tool.slug}`}>
                            <strong>{tool.name}</strong>
                        </Link>{' '}
                        <span className="widget-note">{tool.category}</span>
                    </p>
                    <p className="widget-note">{tool.free_plan ? 'Mit Gratis-Tarif. ' : ''}{tool.price_from ? `Bezahlt ab ${tool.price_from}.` : ''}</p>
                </Widget>
            )}
            <Widget icon="rakete" title="Launch-Service">
                <p>Keine Zeit für 50 Formulare? Wir tragen dein Tool ein.</p>
                <Link className="button button-small" href="/werben">
                    Ansehen →
                </Link>
            </Widget>
            <Link href="/ueber-jean" className="widget widget-photo">
                <img src={withBase('/jean-cool.jpg')} alt="Jean Maurice Port mit Sonnenbrille im Lager" width="240" height="240" loading="lazy" />
                <span>„Mal sehen, ob das hält.“ Jean in echt →</span>
            </Link>
        </>
    )
}

export function MobileDock() {
    return (
        <nav className="mobile-dock" aria-label="Schnellzugriff">
            <Link href="/#alle">
                <JeanIcon badge="lupe" size={28} />
                <span>Liste</span>
            </Link>
            <Link href="/tools">
                <JeanIcon badge="werkzeug" size={28} />
                <span>Tools</span>
            </Link>
            <Link href="/prompts">
                <JeanIcon badge="prompt" size={28} />
                <span>Prompts</span>
            </Link>
            <a href={NEWSLETTER_URL ? `${NEWSLETTER_URL.replace(/\/$/, '')}/subscribe` : YOUTUBE_SUBSCRIBE_URL} target="_blank" rel="noopener">
                <JeanIcon cool badge={NEWSLETTER_URL ? 'post' : 'play'} size={28} />
                <span>Abo</span>
            </a>
        </nav>
    )
}
