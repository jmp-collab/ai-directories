'use client'

import { useMemo, useState } from 'react'
import SendToAI from './SendToAI'

// Rollen-Prompts zum Aufklappen und Absenden. Die Prompts sind englisch; auf Wunsch wird
// „Antworte auf Deutsch.“ angehängt, dann antwortet jede KI deutsch.
export default function PromptArchiv({ prompts, kategorien }) {
    const [q, setQ] = useState('')
    const [kat, setKat] = useState('')
    const [deutsch, setDeutsch] = useState(true)
    const [offen, setOffen] = useState(null)

    const liste = useMemo(() => {
        const s = q.trim().toLowerCase()
        return prompts.filter((p) => (!kat || p.kategorie === kat) && (!s || p.titel.toLowerCase().includes(s) || p.original.toLowerCase().includes(s) || p.prompt.toLowerCase().includes(s)))
    }, [prompts, q, kat])

    const fertig = (p) => (deutsch ? `${p.prompt}\n\nAntworte auf Deutsch.` : p.prompt)

    return (
        <section className="kb-explorer" aria-label="Prompt-Archiv durchsuchen">
            <div className="kb-filter">
                <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Rolle suchen, z. B. „Coach“, „SEO“ oder „Koch“" aria-label="Suche" />
                <div className="kb-chips" role="group" aria-label="Kategorie">
                    <button type="button" className={!kat ? 'is-active' : ''} onClick={() => setKat('')}>
                        Alle
                    </button>
                    {Object.entries(kategorien).map(([key, name]) => (
                        <button key={key} type="button" className={kat === key ? 'is-active' : ''} onClick={() => setKat(key)}>
                            {name}
                        </button>
                    ))}
                </div>
                <div className="kb-toggles">
                    <label>
                        <input type="checkbox" checked={deutsch} onChange={(e) => setDeutsch(e.target.checked)} /> 🇩🇪 „Antworte auf Deutsch.“ anhängen
                    </label>
                </div>
                <p className="kb-count" aria-live="polite">
                    {liste.length} Rollen
                </p>
            </div>
            <ul className="archiv-list">
                {liste.map((p) => {
                    const auf = offen === p.slug
                    return (
                        <li key={p.slug} id={p.slug} className={auf ? 'is-open' : ''}>
                            <button type="button" className="archiv-head" onClick={() => setOffen(auf ? null : p.slug)} aria-expanded={auf}>
                                <strong>{p.titel}</strong>
                                <span lang="en">{p.original}</span>
                                <span className="archiv-toggle" aria-hidden="true">
                                    {auf ? '−' : '+'}
                                </span>
                            </button>
                            {auf && (
                                <div className="archiv-body">
                                    <pre lang="en">{fertig(p)}</pre>
                                    <SendToAI prompt={fertig(p)} />
                                    {p.beitrag && <p className="archiv-credit">Beitrag von @{p.beitrag} auf prompts.chat</p>}
                                </div>
                            )}
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}
