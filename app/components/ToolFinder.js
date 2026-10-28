'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import konfetti from '../../lib/konfetti'
import { verleihe } from '../../lib/herz'

const AUFGABEN = [
    ['schreiben', '✍️', 'Texte schreiben', ['schreiben', 'marketing']],
    ['chatbots', '💬', 'Fragen & Chatten', ['chatbots']],
    ['suche', '🔎', 'Recherche mit Quellen', ['suche', 'recherche']],
    ['bild', '🖼️', 'Bilder & Design', ['bild']],
    ['video', '🎬', 'Videos', ['video']],
    ['audio', '🎙️', 'Stimme & Transkription', ['audio']],
    ['musik', '🎵', 'Musik', ['musik']],
    ['coding', '💻', 'Programmieren', ['coding']],
    ['produktivitaet', '⚡', 'Meetings & Produktivität', ['produktivitaet']],
    ['agenten', '🤖', 'Automatisieren & Agenten', ['agenten']],
]

const BUDGET = [
    ['gratis', '🆓', 'Nur kostenlos'],
    ['egal', '💳', 'Darf etwas kosten'],
]

const TECHNIK = [
    ['einfach', '🖱️', 'Einfach im Browser'],
    ['offen', '🔓', 'Open Source, selbst hosten ist okay'],
]

// Drei Fragen, dann die passenden Tools aus der Datenbank, sortiert nach Konsens.
export default function ToolFinder({ tools }) {
    const [schritt, setSchritt] = useState(0)
    const [aufgabe, setAufgabe] = useState(null)
    const [budget, setBudget] = useState(null)
    const [technik, setTechnik] = useState(null)

    const treffer = useMemo(() => {
        if (schritt < 3) return []
        const rubriken = AUFGABEN.find((a) => a[0] === aufgabe)[3]
        return tools
            .filter((t) => rubriken.includes(t.r))
            .filter((t) => budget !== 'gratis' || t.o || t.g || t.f)
            .map((t) => ({ ...t, punkte: t.k * 10 + (technik === 'offen' && t.o ? 15 : 0) + (technik === 'einfach' && !t.o ? 8 : 0) + (t.p ? 5 : 0) + (t.d ? 2 : 0) }))
            .sort((a, b) => b.punkte - a.punkte)
            .slice(0, 6)
    }, [schritt, aufgabe, budget, technik, tools])

    const waehle = (setter, wert, naechster) => {
        setter(wert)
        setSchritt(naechster)
        if (naechster === 3) {
            setTimeout(() => konfetti(35), 250)
            verleihe('Detektiv-Abzeichen')
        }
    }

    const frage = (titel, optionen, setter, aktuell, naechster) => (
        <div className="finder-step" key={titel}>
            <p className="finder-q">{titel}</p>
            <div className="finder-options">
                {optionen.map(([id, emoji, label]) => (
                    <button key={id} type="button" className={aktuell === id ? 'is-active' : ''} onClick={() => waehle(setter, id, naechster)}>
                        <span aria-hidden="true">{emoji}</span> {label}
                    </button>
                ))}
            </div>
        </div>
    )

    return (
        <div className="finder">
            <ol className="finder-progress" aria-label="Fortschritt">
                {['Aufgabe', 'Budget', 'Technik', 'Ergebnis'].map((l, i) => (
                    <li key={l} className={i < schritt ? 'is-done' : i === schritt ? 'is-active' : ''}>
                        {l}
                    </li>
                ))}
            </ol>
            <div className="finder-stage" key={schritt}>
                {schritt === 0 && frage('Wobei soll dir KI helfen?', AUFGABEN, setAufgabe, aufgabe, 1)}
                {schritt === 1 && frage('Wie viel darf es kosten?', BUDGET, setBudget, budget, 2)}
                {schritt === 2 && frage('Wie technisch darf es sein?', TECHNIK, setTechnik, technik, 3)}
                {schritt === 3 && (
                    <div className="finder-step">
                        <p className="finder-q">Deine Top {treffer.length} 🎯</p>
                        {treffer.length === 0 ? (
                            <p>Mit diesen Filtern gibt es keinen Treffer. Probier „Darf etwas kosten“.</p>
                        ) : (
                            <ol className="finder-results">
                                {treffer.map((t, i) => (
                                    <li key={t.s} style={{ '--i': i }}>
                                        <span className="finder-rank">{i + 1}</span>
                                        <div>
                                            <span className="kb-name">
                                                <Link href={`/ki-tools/tool/${t.s}`}>
                                                    <strong>{t.n}</strong>
                                                </Link>
                                                <a className="kb-extern" href={t.u} target="_blank" rel="nofollow noopener noreferrer" aria-label={`${t.n} beim Anbieter öffnen`}>
                                                    ↗
                                                </a>
                                            </span>{' '}
                                            {t.k === 3 && <span title="In allen 3 Listen">🏆</span>}
                                            {t.k === 2 && <span title="In 2 von 3 Listen">🥈</span>}
                                            {t.o === 1 && <span title="Open Source">🔓</span>}
                                            {t.d && <p>{t.d}</p>}
                                            {t.p && <Link href={`/tools/${t.p}`}>🧔 Steckbrief mit Preisen →</Link>}
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        )}
                    </div>
                )}
            </div>
            {schritt > 0 && (
                <p className="finder-nav">
                    <button type="button" className="copy-button" onClick={() => setSchritt(schritt - 1)}>
                        ← Zurück
                    </button>
                    <button
                        type="button"
                        className="copy-button"
                        onClick={() => {
                            setSchritt(0)
                            setAufgabe(null)
                            setBudget(null)
                            setTechnik(null)
                        }}
                    >
                        Neu starten
                    </button>
                </p>
            )}
        </div>
    )
}
