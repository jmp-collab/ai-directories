'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'

const STEP = 48

// Durchsuchbare Tool-Liste. Daten kommen schlank vom Server (kbForClient), gefiltert wird im Browser.
export default function KbExplorer({ tools, rubriken, rubrik: fest }) {
    const [q, setQ] = useState('')
    const [rubrik, setRubrik] = useState(fest || '')
    const [nurKonsens, setNurKonsens] = useState(false)
    const [nurOpen, setNurOpen] = useState(false)
    const [nurGratis, setNurGratis] = useState(false)
    const [sort, setSort] = useState('konsens')
    const [limit, setLimit] = useState(STEP)

    // Suche aus der Adresszeile übernehmen (?q=…), z. B. aus der Google-Sitelinks-Suche
    useEffect(() => {
        const s = new URLSearchParams(window.location.search).get('q')
        if (s) setQ(s)
    }, [])

    const liste = useMemo(() => {
        const s = q.trim().toLowerCase()
        return tools
            .filter((t) => (!rubrik || t.r === rubrik) && (!nurKonsens || t.k > 1) && (!nurOpen || t.o) && (!nurGratis || t.g))
            .filter((t) => !s || t.n.toLowerCase().includes(s) || t.d.toLowerCase().includes(s))
            .sort((a, b) => (sort === 'az' ? a.n.localeCompare(b.n) : b.k - a.k || a.n.localeCompare(b.n)))
    }, [tools, q, rubrik, nurKonsens, nurOpen, nurGratis, sort])

    const reset = (fn) => (v) => {
        fn(v)
        setLimit(STEP)
    }

    return (
        <section className="kb-explorer" aria-label="KI-Tools durchsuchen">
            <div className="kb-filter">
                <input type="search" value={q} onChange={(e) => reset(setQ)(e.target.value)} placeholder="Tool oder Aufgabe suchen, z. B. „Transkription“ oder „Logo“" aria-label="Suche" />
                {!fest && (
                    <div className="kb-chips" role="group" aria-label="Rubrik">
                        <button type="button" className={!rubrik ? 'is-active' : ''} onClick={() => reset(setRubrik)('')}>
                            Alle
                        </button>
                        {rubriken.map((r) => (
                            <button key={r.key} type="button" className={rubrik === r.key ? 'is-active' : ''} onClick={() => reset(setRubrik)(r.key)}>
                                {r.name.replace(/^KI[- ](für |fürs )?/, '')} <small>{r.count}</small>
                            </button>
                        ))}
                    </div>
                )}
                <div className="kb-toggles">
                    <label>
                        <input type="checkbox" checked={nurKonsens} onChange={(e) => reset(setNurKonsens)(e.target.checked)} /> 🏆 nur Konsens (2+ Listen)
                    </label>
                    <label>
                        <input type="checkbox" checked={nurOpen} onChange={(e) => reset(setNurOpen)(e.target.checked)} /> 🔓 Open Source
                    </label>
                    <label>
                        <input type="checkbox" checked={nurGratis} onChange={(e) => reset(setNurGratis)(e.target.checked)} /> 🆓 gratis laut Liste
                    </label>
                    <label>
                        Sortierung{' '}
                        <select value={sort} onChange={(e) => setSort(e.target.value)}>
                            <option value="konsens">Konsens zuerst</option>
                            <option value="az">A–Z</option>
                        </select>
                    </label>
                </div>
                <p className="kb-count" aria-live="polite">
                    {liste.length} Tools
                </p>
            </div>
            <ul className="kb-list">
                {liste.slice(0, limit).map((t) => (
                    <li key={t.s} id={t.s} className={t.k === 3 ? 'is-gold' : t.k === 2 ? 'is-silver' : ''}>
                        <div className="kb-head">
                            <a href={t.u} target="_blank" rel="nofollow noopener noreferrer">
                                <strong>{t.n}</strong> ↗
                            </a>
                            <span className="kb-badges">
                                {t.k === 3 && <span title="In allen 3 Listen">🏆 3/3</span>}
                                {t.k === 2 && <span title="In 2 von 3 Listen">🥈 2/3</span>}
                                {t.o === 1 && <span title="Open Source">🔓</span>}
                                {t.g === 1 && <span title="Gratis laut Quelle">🆓</span>}
                            </span>
                        </div>
                        {t.d && <p lang={t.e ? 'en' : 'de'}>{t.d}</p>}
                        {t.p && (
                            <Link className="kb-profil" href={`/tools/${t.p}`}>
                                🧔 Jeans Steckbrief: Preise, Gratis-Tarif, Alternativen →
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
            {liste.length > limit && (
                <p className="kb-more">
                    <button type="button" className="button" onClick={() => setLimit(limit + STEP)}>
                        {Math.min(STEP, liste.length - limit)} weitere laden ({liste.length - limit} übrig)
                    </button>
                </p>
            )}
        </section>
    )
}
