import { experienceLabel, pricingLabel } from '../../utils/i18n-de'

export function PriceBadge({ value }) {
    if (!value) return <span className="badge badge-neutral">{pricingLabel(value)}</span>
    return <span className={`badge ${value === 'Free' ? 'badge-good' : 'badge-bad'}`}>
            {value === 'Free' ? '🎁 ' : '💸 '}
            {pricingLabel(value)}
        </span>
}

export function ExperienceBadge({ value, blocked = false }) {
    if (blocked) return <span className="badge badge-bad">⛔ Gerade zu</span>
    if (!value) return <span className="badge badge-neutral">{experienceLabel(value)}</span>
    return <span className={`badge ${value === 'Good' ? 'badge-good' : 'badge-bad'}`}>
            {value === 'Good' ? '🧈 ' : '🌵 '}
            {experienceLabel(value)}
        </span>
}
