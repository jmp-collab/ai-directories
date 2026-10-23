'use client'

import { useMemo, useState } from 'react'
import { API_MODELLE } from '../../lib/preise'

const usd = (v) => (v < 0.01 ? `${v.toFixed(4)} $` : v < 1 ? `${v.toFixed(3)} $` : `${new Intl.NumberFormat('de-DE', { maximumFractionDigits: 2 }).format(v)} $`)

// Was kostet meine KI-Anwendung über die API? Alle Modelle auf einen Blick, sortiert nach Preis.
export default function ApiRechner() {
    const [anfragen, setAnfragen] = useState(1000)
    const [input, setInput] = useState(1500)
    const [output, setOutput] = useState(500)
    const [text, setText] = useState('')
    const [auswahl, setAuswahl] = useState(API_MODELLE.map((m) => m.id))

    const geschaetzt = text.trim() ? Math.round(text.trim().length / 3.5) : null

    const liste = useMemo(() => {
        const inp = geschaetzt ?? input
        return API_MODELLE.filter((m) => auswahl.includes(m.id))
            .map((m) => {
                const proAnfrage = (inp * m.input + output * m.output) / 1e6
                return { ...m, proAnfrage, tag: proAnfrage * anfragen, monat: proAnfrage * anfragen * 30 }
            })
            .sort((a, b) => a.monat - b.monat)
    }, [anfragen, input, output, auswahl, geschaetzt])

    const max = Math.max(...liste.map((m) => m.monat), 0.0001)
    const toggle = (id) => setAuswahl((a) => (a.includes(id) ? (a.length > 1 ? a.filter((x) => x !== id) : a) : [...a, id]))

    return (
        <div className="rechner">
            <div className="rechner-input">
                <label>
                    <span>
                        Anfragen pro Tag <b>{new Intl.NumberFormat('de-DE').format(anfragen)}</b>
                    </span>
                    <input type="range" min="10" max="100000" step="10" value={anfragen} onChange={(e) => setAnfragen(Number(e.target.value))} />
                </label>
                <label>
                    <span>
                        Input-Tokens pro Anfrage <b>{geschaetzt ? `${geschaetzt} (aus Text geschätzt)` : input}</b>
                    </span>
                    <input type="range" min="50" max="50000" step="50" value={input} disabled={Boolean(geschaetzt)} onChange={(e) => setInput(Number(e.target.value))} />
                </label>
                <label>
                    <span>
                        Output-Tokens pro Anfrage <b>{output}</b>
                    </span>
                    <input type="range" min="50" max="8000" step="50" value={output} onChange={(e) => setOutput(Number(e.target.value))} />
                </label>
                <label>
                    <span>Oder Beispiel-Prompt einfügen (Tokens werden geschätzt)</span>
                    <textarea rows={3} value={text} onChange={(e) => setText(e.target.value)} placeholder="Dein typischer Prompt samt Kontext …" />
                </label>
                <div className="kb-chips" role="group" aria-label="Modelle">
                    {API_MODELLE.map((m) => (
                        <button key={m.id} type="button" className={auswahl.includes(m.id) ? 'is-active' : ''} onClick={() => toggle(m.id)} aria-pressed={auswahl.includes(m.id)}>
                            {m.name}
                        </button>
                    ))}
                </div>
            </div>
            <div className="rechner-output" aria-live="polite">
                <p className="rechner-urteil">
                    <span aria-hidden="true">💸</span> Kosten pro Monat (30 Tage)
                </p>
                <ol className="api-liste">
                    {liste.map((m, i) => (
                        <li key={m.id}>
                            <span className="api-name">
                                {i === 0 ? '🥇 ' : ''}
                                {m.name}
                                <small>{m.anbieter}</small>
                            </span>
                            <span className="api-bar">
                                <span style={{ width: `${Math.max(2, (m.monat / max) * 100)}%` }} />
                            </span>
                            <span className="api-preis">
                                {usd(m.monat)}
                                <small>{usd(m.proAnfrage)} / Anfrage</small>
                            </span>
                        </li>
                    ))}
                </ol>
                <p className="rechner-hinweis">Standardpreise ohne Caching und Batch (Batch spart bei vielen Anbietern 50 %). Tokens aus Text: grobe Schätzung, 1 Token ≈ 3,5 Zeichen auf Deutsch.</p>
            </div>
        </div>
    )
}
