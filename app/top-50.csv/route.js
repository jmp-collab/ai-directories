import { getTop50 } from '../../lib/top50'
import { pricingLabel } from '../../utils/i18n-de'

export const dynamic = 'force-static'

const cell = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`

// Die Top 50 als CSV für Excel und Google Sheets (Semikolon, UTF-8 mit BOM).
export function GET() {
    const head = ['Platz', 'Verzeichnis', 'Jean-Score', 'Domain Rating', 'Besuche/Monat', 'Preis', 'Freischaltung laut Verzeichnis', 'Link-Typ laut Verzeichnis', 'Einreichen', 'Rabattcode']
    const rows = getTop50().map((d, i) => [
        i + 1,
        d.name,
        d.score,
        d.domain_rating,
        d.monthly_visits,
        pricingLabel(d.pricing),
        d.check?.approval || '',
        d.check?.link_type || '',
        d.submission_link,
        d.dealCode || '',
    ])
    const csv = [head, ...rows].map((r) => r.map(cell).join(';')).join('\n')
    return new Response('﻿' + csv, { headers: { 'Content-Type': 'text/csv; charset=utf-8' } })
}
