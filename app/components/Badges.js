import { experienceLabel, pricingLabel } from '../../utils/i18n-de'

export function PriceBadge({ value }) {
    if (!value) return <span className="badge badge-neutral">{pricingLabel(value)}</span>
    return <span className={`badge ${value === 'Free' ? 'badge-good' : 'badge-bad'}`}>{pricingLabel(value)}</span>
}

export function ExperienceBadge({ value }) {
    if (!value) return <span className="badge badge-neutral">{experienceLabel(value)}</span>
    return <span className={`badge ${value === 'Good' ? 'badge-good' : 'badge-bad'}`}>{experienceLabel(value)}</span>
}
