'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { PriceBadge, ExperienceBadge } from './Badges'
import { formatRating, formatVisits } from '../../utils/i18n-de'
import { getScore } from '../../lib/score'
import { hasStatusIssue } from '../../lib/checks'
import useTracker, { RANKS } from './useTracker'
import konfetti from '../../lib/konfetti'

const SORTS = {
    score: { label: 'Jean-Score', fn: (a, b) => b.score - a.score || b.domain_rating - a.domain_rating },
    rating: { label: 'Domain Rating', fn: (a, b) => b.domain_rating - a.domain_rating || b.monthly_visits - a.monthly_visits },
    visits: { label: 'Besuche', fn: (a, b) => b.monthly_visits - a.monthly_visits },
    name: { label: 'Name', fn: (a, b) => a.name.localeCompare(b.name, 'de') },
}

const MILESTONES = new Set(RANKS.map(([min]) => min).filter(Boolean))

export default function DirectoryTable({ directories, interactive = true, defaultSort = 'rating', caption }) {
    const [query, setQuery] = useState('')
    const [pricing, setPricing] = useState('all')
    const [experience, setExperience] = useState('all')
    const [status, setStatus] = useState('all')
    const [sort, setSort] = useState(defaultSort)
    const { done, toggle } = useTracker()
    const searchRef = useRef(null)

    useEffect(() => {
        if (!interactive) return
        const onKey = (e) => {
            const tag = document.activeElement?.tagName
            if (e.key !== '/' || tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA') return
            // Nur die erste Suche auf der Seite reagiert.
            if (document.querySelector('.filters input[type=search]') !== searchRef.current) return
            e.preventDefault()
            searchRef.current?.focus()
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [interactive])

    const scored = useMemo(() => directories.map((d) => ({ ...d, score: getScore(d).total, blocked: hasStatusIssue(d.slug) })), [directories])

    const rows = useMemo(() => {
        const q = query.trim().toLowerCase()
        return scored
            .filter((d) => !q || d.name.toLowerCase().includes(q) || d.link.toLowerCase().includes(q))
            .filter((d) => pricing === 'all' || d.pricing === pricing)
            .filter((d) => experience === 'all' || (experience === 'Closed' ? d.blocked : !d.blocked && d.submission_experience === experience))
            .filter((d) => status === 'all' || (status === 'open' ? !done.has(d.slug) : done.has(d.slug)))
            .sort(SORTS[sort].fn)
    }, [scored, query, pricing, experience, status, sort, done])

    const onToggle = (slug) => {
        const next = toggle(slug)
        if (next.has(slug) && MILESTONES.has(next.size)) konfetti()
    }

    return (
        <div className="table-block">
            {interactive && (
                <form className="filters" role="search" onSubmit={(e) => e.preventDefault()}>
                    <label>
                        <span>
                            Suche 🔎 <kbd>/</kbd>
                        </span>
                        <input
                            ref={searchRef}
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
                            <option value="Closed">Gerade zu ⛔</option>
                        </select>
                    </label>
                    <label>
                        <span>Mein Status</span>
                        <select value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value="all">Alle</option>
                            <option value="open">Noch offen</option>
                            <option value="done">Eingetragen ✓</option>
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
                        {rows.length} von {directories.length} Verzeichnissen
                        {rows.length === 0 ? ' (die Tabelle ist leer, das Leben auch ein bisschen)' : ''}
                    </p>
                </form>
            )}
            <div className="table-scroll">
                <table>
                    {caption && <caption>{caption}</caption>}
                    <thead>
                        <tr>
                            <th scope="col">
                                <span className="sr-only">Eingetragen</span>✓
                            </th>
                            <th scope="col">Verzeichnis</th>
                            <th scope="col" className="num">
                                <abbr title="Jean-Score: 0 bis 100 aus Domain Rating, Traffic, Preis und Einreichung">Score</abbr>
                            </th>
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
                            <tr key={d.slug} className={done.has(d.slug) ? 'is-done' : undefined}>
                                <td>
                                    <input
                                        type="checkbox"
                                        className="track"
                                        checked={done.has(d.slug)}
                                        onChange={() => onToggle(d.slug)}
                                        aria-label={`${d.name} als eingetragen markieren`}
                                    />
                                </td>
                                <th scope="row">
                                    <Link href={`/verzeichnis/${d.slug}`}>{d.name}</Link>
                                    {d.dealCode && <span className="deal-flag">Rabatt</span>}
                                </th>
                                <td className="num">
                                    <span className="score-pill" style={{ '--score': d.score }}>
                                        {d.score}
                                    </span>
                                </td>
                                <td className="num">{formatRating(d.domain_rating)}</td>
                                <td className="num">{formatVisits(d.monthly_visits)}</td>
                                <td>
                                    <PriceBadge value={d.pricing} />
                                </td>
                                <td>
                                    <ExperienceBadge value={d.submission_experience} blocked={d.blocked} />
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
            {rows.length === 0 && (
                <p className="empty">
                    Nichts gefunden. Entweder gibt es das Verzeichnis nicht, oder dein Filter ist strenger als dein
                    Steuerberater. Lockern oder anderen Suchbegriff probieren.
                </p>
            )}
        </div>
    )
}
