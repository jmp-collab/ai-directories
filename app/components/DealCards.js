import Link from 'next/link'
import CopyButton from './CopyButton'
import { dealLabel } from '../../utils/i18n-de'
import { hasStatusIssue } from '../../lib/checks'
import { submitRel } from '../../lib/monetization'

const percent = (d) => Number((d.dealText || '').match(/(\d+)\s*%/)?.[1] || 0)

// Rabattcodes als Karten: höchster Nachlass zuerst, gesperrte Verzeichnisse ausgeblendet.
export default function DealCards({ directories }) {
    const deals = directories.filter((d) => d.dealCode && !hasStatusIssue(d.slug)).sort((a, b) => percent(b) - percent(a))
    return (
        <ul className="deal-cards">
            {deals.map((d) => (
                <li key={d.slug}>
                    <p className="deal-off">{dealLabel(d.dealText)}</p>
                    <Link href={`/verzeichnis/${d.slug}`}>
                        <strong>{d.name}</strong>
                    </Link>
                    <code>{d.dealCode}</code>
                    <span className="deal-actions">
                        <CopyButton value={d.dealCode} label="Code kopieren" />
                        <a href={d.submission_link} target="_blank" rel={submitRel(d)}>
                            Einlösen ↗{d.affiliate && <sup>*</sup>}
                        </a>
                    </span>
                </li>
            ))}
        </ul>
    )
}
