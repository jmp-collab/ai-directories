'use client'

import { useEffect, useMemo, useState } from 'react'
import SendToAI from './SendToAI'
import konfetti from '../../lib/konfetti'
import { BEWERTUNG, TEST_KIS } from '../../lib/kitests'

const KEY = 'aigeddon-kitest-v1'
const PUNKTE = Object.fromEntries(BEWERTUNG.map(([k, , p]) => [k, p]))

const load = () => {
    try {
        return JSON.parse(localStorage.getItem(KEY)) || null
    } catch {
        return null
    }
}

// Selbsttest: Aufgabe an mehrere KIs schicken, Antworten bewerten, Ergebnis als Rangliste.
// Alles bleibt im Browser (localStorage), nichts wird übertragen.
export default function KiTestSuite({ tests, kategorien }) {
    const [kis, setKis] = useState(['chatgpt', 'claude', 'gemini'])
    const [noten, setNoten] = useState({})
    const [geladen, setGeladen] = useState(false)

    useEffect(() => {
        const s = load()
        if (s) {
            if (Array.isArray(s.kis) && s.kis.length) setKis(s.kis)
            if (s.noten) setNoten(s.noten)
        }
        setGeladen(true)
    }, [])

    useEffect(() => {
        if (!geladen) return
        try {
            localStorage.setItem(KEY, JSON.stringify({ kis, noten }))
        } catch {}
    }, [kis, noten, geladen])

    const toggleKi = (id) => setKis((k) => (k.includes(id) ? (k.length > 1 ? k.filter((x) => x !== id) : k) : [...k, id]))
    const setNote = (test, ki, wert) => setNoten((n) => ({ ...n, [`${test}:${ki}`]: n[`${test}:${ki}`] === wert ? undefined : wert }))

    const ergebnis = useMemo(
        () =>
            kis
                .map((ki) => {
                    const bewertet = tests.filter((t) => noten[`${t.id}:${ki}`])
                    const punkte = bewertet.reduce((s, t) => s + PUNKTE[noten[`${t.id}:${ki}`]], 0)
                    return { ki, name: TEST_KIS.find((x) => x.id === ki).name, bewertet: bewertet.length, punkte, prozent: bewertet.length ? Math.round((punkte / (bewertet.length * 2)) * 100) : 0 }
                })
                .sort((a, b) => b.prozent - a.prozent || b.bewertet - a.bewertet),
        [kis, noten, tests]
    )

    const gesamt = tests.length * kis.length
    const erledigt = tests.reduce((s, t) => s + kis.filter((ki) => noten[`${t.id}:${ki}`]).length, 0)
    const fertig = erledigt === gesamt && gesamt > 0

    useEffect(() => {
        if (fertig) konfetti(70)
    }, [fertig])

    const teilen = ergebnis.map((e, i) => `${i + 1}. ${e.name}: ${e.prozent} % (${e.bewertet} Aufgaben)`).join('\n')

    return (
        <div className="kitest">
            <div className="kitest-setup">
                <p className="send-to-ai-label">Welche KIs testest du?</p>
                <div className="kb-chips" role="group" aria-label="KIs auswählen">
                    {TEST_KIS.map((k) => (
                        <button key={k.id} type="button" className={kis.includes(k.id) ? 'is-active' : ''} onClick={() => toggleKi(k.id)} aria-pressed={kis.includes(k.id)}>
                            {k.name}
                        </button>
                    ))}
                </div>
                <div className="kitest-progress" aria-label={`${erledigt} von ${gesamt} Bewertungen`}>
                    <span style={{ width: `${gesamt ? (erledigt / gesamt) * 100 : 0}%` }} />
                </div>
                <p className="kitest-progress-text">
                    {erledigt} von {gesamt} Bewertungen
                    {erledigt > 0 && (
                        <button type="button" className="kitest-reset" onClick={() => setNoten({})}>
                            zurücksetzen
                        </button>
                    )}
                </p>
            </div>

            <ol className="kitest-list">
                {tests.map((t, n) => {
                    const kat = kategorien[t.kategorie]
                    return (
                        <li key={t.id} id={`test-${t.id}`} className={`kitest-card band-${kat.farbe}`}>
                            <p className="kitest-meta">
                                <span>
                                    {kat.emoji} {kat.name}
                                </span>
                                <span>Aufgabe {n + 1}</span>
                            </p>
                            <h3>{t.titel}</h3>
                            <pre>{t.prompt}</pre>
                            <SendToAI prompt={t.prompt} />
                            <details className="kitest-kriterien">
                                <summary>Woran du eine gute Antwort erkennst {t.loesung ? '(mit Lösung)' : ''}</summary>
                                <ul>
                                    {t.kriterien.map((k) => (
                                        <li key={k}>{k}</li>
                                    ))}
                                </ul>
                                {t.loesung && (
                                    <p>
                                        <strong>Lösung:</strong> {t.loesung}
                                    </p>
                                )}
                            </details>
                            <div className="kitest-rate">
                                {kis.map((ki) => (
                                    <div key={ki} className="kitest-rate-row">
                                        <span>{TEST_KIS.find((x) => x.id === ki).name}</span>
                                        <div role="group" aria-label={`Bewertung ${TEST_KIS.find((x) => x.id === ki).name}`}>
                                            {BEWERTUNG.map(([wert, label]) => (
                                                <button
                                                    key={wert}
                                                    type="button"
                                                    className={`rate-${wert}${noten[`${t.id}:${ki}`] === wert ? ' is-active' : ''}`}
                                                    aria-pressed={noten[`${t.id}:${ki}`] === wert}
                                                    onClick={() => setNote(t.id, ki, wert)}
                                                >
                                                    {label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </li>
                    )
                })}
            </ol>

            <section className="kitest-result" aria-live="polite">
                <h3>{fertig ? '🏆 Dein Testergebnis' : '📊 Zwischenstand'}</h3>
                <ol>
                    {ergebnis.map((e, i) => (
                        <li key={e.ki}>
                            <span className="kitest-result-name">
                                {i === 0 && e.bewertet > 0 ? '👑 ' : ''}
                                {e.name}
                            </span>
                            <span className="kitest-bar">
                                <span style={{ width: `${e.prozent}%` }} />
                            </span>
                            <span className="kitest-result-pct">{e.bewertet ? `${e.prozent} %` : '–'}</span>
                        </li>
                    ))}
                </ol>
                {erledigt > 0 && (
                    <button
                        type="button"
                        className="copy-button"
                        onClick={() => navigator.clipboard?.writeText(`Mein KI-Test auf AIGeddon:\n${teilen}`).catch(() => {})}
                    >
                        Ergebnis kopieren
                    </button>
                )}
                <p className="kitest-note">Deine Bewertungen bleiben in deinem Browser. Ergebnisse hängen von Modellversion, Tarif und Tagesform der KI ab; wiederhole den Test ruhig.</p>
            </section>
        </div>
    )
}
