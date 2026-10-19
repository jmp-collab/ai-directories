'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { PriceBadge, ExperienceBadge } from './Badges'
import { formatRating, formatVisits } from '../../utils/i18n-de'

const SORTS = {
    rating: { label: 'Domain Rating', fn: (a, b) => b.domain_rating - a.domain_rating || b.monthly_visits - a.monthly_visits },
    visits: { label: 'Besuche', fn: (a, b) => b.monthly_visits - a.monthly_visits },
    name: { label: 'Name', fn: (a, b) => a.name.localeCompare(b.name, 'de') },
}

export default function DirectoryTable({ directories, interactive = true, defaultSort = 'rating', caption }) {
    const [query, setQuery] = useState('')
    const [pricing, setPricing] = useState('all')
    const [experience, setExperience] = useState('all')
    const [sort, setSort] = useState(defaultSort)

    const rows = useMemo(() => {
        const q = query.trim().toLowerCase()
        return directories
            .filter((d) => !q || d.name.toLowerCase().includes(q) || d.link.toLowerCase().includes(q))
            .filter((d) => pricing === 'all' || d.pricing === pricing)
            .filter((d) => experience === 'all' || d.submission_experience === experience)
            .sort(SORTS[sort].fn)
    }, [directories, query, pricing, experience, sort])

    return (
        <div className="table-block">
            {interactive && (
                <form className="filters" role="search" onSubmit={(e) => e.preventDefault()}>
                    <label>
                        <span>Suche 🔎</span>
                        <input
                            type="search"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="z. B. Futurepedia, launch, tools (Tippfehler sind erlaubt)"
                        />
                    </label>
                    <label>
                        <span>Preis</span>
                        <select value={pricing} onChange={(e) => setPricing(e.target.value)}>
                            <option value="all">Alle</option>
                            <option value="Free">Kostenlos 🎁</option>
                            <option value="Paid">Kostenpflichtig 💸</option>
                        </select>
                    </label>
                    <label>
                        <span>Einreichung</span>
                        <select value={experience} onChange={(e) => setExperience(e.target.value)}>
                            <option value="all">Alle</option>
                            <option value="Good">Reibungslos 🧈</option>
                            <option value="Bad">Hakelig 🌵</option>
                        </select>
                    </label>
                    <label>
                        <span>Sortieren nach</span>
                        <select value={sort} onChange={(e) => setSort(e.target.value)}>
                            {Object.entries(SORTS).map(([key, s]) => (
                                <option key={key} value={key}>
                                    {s.label}
                                </option>
                            ))}
                        </select>
                    </label>
                    <p className="filters-count" aria-live="polite">
                        {rows.length} von {directories.length} Verzeichnissen{rows.length === 0 ? ' (die Tabelle ist leer, das Leben auch ein bisschen)' : ''}
                    </p>
                </form>
            )}
            <div className="table-scroll">
                <table>
                    {caption && <caption>{caption}</caption>}
                    <thead>
                        <tr>
                            <th scope="col">Verzeichnis</th>
                            <th scope="col" className="num">
                                <abbr title="Domain Rating (Ahrefs, 0 bis 100). Je höher, desto stolzer die Domain.">DR</abbr>
                            </th>
                            <th scope="col" className="num">Besuche/Monat</th>
                            <th scope="col">Preis</th>
                            <th scope="col">Einreichung</th>
                            <th scope="col">
                                <span className="sr-only">Eintragen</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((d) => (
                            <tr key={d.slug}>
                                <th scope="row">
                                    <Link href={`/verzeichnis/${d.slug}`}>{d.name}</Link>
                                    {d.dealCode && <span className="deal-flag">Rabatt</span>}
                                </th>
                                <td className="num">{formatRating(d.domain_rating)}</td>
                                <td className="num">{formatVisits(d.monthly_visits)}</td>
                                <td>
                                    <PriceBadge value={d.pricing} />
                                </td>
                                <td>
                                    <ExperienceBadge value={d.submission_experience} />
                                </td>
                                <td>
                                    <a
                                        className="submit-link"
                                        href={d.submission_link}
                                        target="_blank"
                                        rel="nofollow noopener noreferrer"
                                        aria-label={`${d.name}: Tool eintragen (externer Link)`}
                                    >
                                        Eintragen ↗ 🚀
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {rows.length === 0 && <p className="empty">Nichts gefunden. Entweder gibt es das Verzeichnis nicht, oder dein Filter ist strenger als dein Steuerberater. Lockern oder anderen Suchbegriff probieren.</p>}
        </div>
    )
}
