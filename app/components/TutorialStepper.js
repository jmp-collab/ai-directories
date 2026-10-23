'use client'

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import BeforeAfter from './BeforeAfter'
import SendToAI from './SendToAI'
import konfetti from '../../lib/konfetti'

const useIsoLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect

// Schritte als gleitende Karten: Pfeiltasten, Wischen, Punkte, Fortschrittsbalken, #schritt-n in der URL.
// Alle Schritte stehen im HTML (für Suchmaschinen); sichtbar ist nur der aktive.
export default function TutorialStepper({ schritte, quiz, finale }) {
    const total = schritte.length + (quiz?.length ? 1 : 0)
    const [i, setI] = useState(0)
    const [height, setHeight] = useState(null)
    const slides = useRef([])
    const touch = useRef(null)
    const root = useRef(null)

    const go = useCallback(
        (n, scroll = true) => {
            const next = Math.max(0, Math.min(total - 1, n))
            setI(next)
            if (typeof window !== 'undefined') history.replaceState(null, '', `#schritt-${next + 1}`)
            if (scroll && root.current) {
                const top = root.current.getBoundingClientRect().top
                if (top < 0) root.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
        },
        [total]
    )

    useEffect(() => {
        const m = location.hash.match(/^#schritt-(\d+)$/)
        if (m) go(Number(m[1]) - 1, false)
    }, [go])

    useIsoLayoutEffect(() => {
        const el = slides.current[i]
        if (!el) return
        const update = () => setHeight(el.offsetHeight)
        update()
        const ro = new ResizeObserver(update)
        ro.observe(el)
        return () => ro.disconnect()
    }, [i])

    const onKey = (e) => {
        if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return
        if (e.key === 'ArrowRight') go(i + 1)
        if (e.key === 'ArrowLeft') go(i - 1)
    }
    const onTouchStart = (e) => (touch.current = e.touches[0].clientX)
    const onTouchEnd = (e) => {
        if (touch.current == null) return
        const dx = e.changedTouches[0].clientX - touch.current
        if (Math.abs(dx) > 60) go(i + (dx < 0 ? 1 : -1))
        touch.current = null
    }

    return (
        <section className="stepper" ref={root} onKeyDown={onKey} aria-roledescription="Schritt-für-Schritt-Anleitung">
            <div className="stepper-progress" aria-hidden="true">
                <span style={{ width: `${((i + 1) / total) * 100}%` }} />
            </div>
            <ol className="stepper-dots">
                {Array.from({ length: total }, (_, n) => (
                    <li key={n}>
                        <button
                            type="button"
                            className={n === i ? 'is-active' : n < i ? 'is-done' : ''}
                            onClick={() => go(n)}
                            aria-label={n < schritte.length ? `Schritt ${n + 1}: ${schritte[n].titel}` : 'Quiz'}
                            aria-current={n === i ? 'step' : undefined}
                        >
                            {n < schritte.length ? n + 1 : '🏁'}
                        </button>
                    </li>
                ))}
            </ol>
            <div className="stepper-viewport" style={height ? { height } : undefined} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
                <div className="stepper-track" style={{ transform: `translateX(-${i * 100}%)` }}>
                    {schritte.map((s, n) => (
                        <article
                            key={n}
                            ref={(el) => (slides.current[n] = el)}
                            className={`stepper-slide${n === i ? ' is-active' : ''}`}
                            aria-hidden={n !== i}
                            id={`schritt-${n + 1}`}
                        >
                            <p className="stepper-count">
                                Schritt {n + 1} von {schritte.length}
                            </p>
                            <h2>{s.titel}</h2>
                            {s.text.map((p, k) => (
                                <p key={k}>{p}</p>
                            ))}
                            {s.vergleich && <BeforeAfter {...s.vergleich} />}
                            {s.jean && (
                                <p className="stepper-jean">
                                    <span aria-hidden="true">🧔</span> <b>Jean:</b> {s.jean}
                                </p>
                            )}
                            {s.ausprobieren && (
                                <div className="stepper-try">
                                    <p className="send-to-ai-label">Gleich ausprobieren</p>
                                    <pre>{s.ausprobieren}</pre>
                                    <SendToAI prompt={s.ausprobieren} />
                                </div>
                            )}
                        </article>
                    ))}
                    {quiz?.length > 0 && (
                        <article
                            ref={(el) => (slides.current[schritte.length] = el)}
                            className={`stepper-slide${i === schritte.length ? ' is-active' : ''}`}
                            aria-hidden={i !== schritte.length}
                            id={`schritt-${schritte.length + 1}`}
                        >
                            <Quiz fragen={quiz} finale={finale} />
                        </article>
                    )}
                </div>
            </div>
            <div className="stepper-nav">
                <button type="button" className="copy-button" onClick={() => go(i - 1)} disabled={i === 0}>
                    ← Zurück
                </button>
                <span>
                    {i + 1} / {total}
                </span>
                <button type="button" className="button" onClick={() => go(i + 1)} disabled={i === total - 1}>
                    {i === schritte.length - 1 && quiz?.length ? 'Zum Quiz 🏁' : 'Weiter →'}
                </button>
            </div>
        </section>
    )
}

function Quiz({ fragen, finale }) {
    const [antworten, setAntworten] = useState({})
    const fertig = Object.keys(antworten).length === fragen.length
    const richtig = fragen.filter((f, n) => antworten[n] === f.richtig).length

    useEffect(() => {
        if (fertig) konfetti(richtig === fragen.length ? 60 : 25)
    }, [fertig, richtig, fragen.length])

    return (
        <div className="quiz-box">
            <p className="stepper-count">Abschluss-Quiz</p>
            <h2>Hast du's drauf?</h2>
            {fragen.map((f, n) => (
                <fieldset key={n} className="quiz-frage">
                    <legend>{f.frage}</legend>
                    {f.antworten.map((a, k) => {
                        const gewaehlt = antworten[n] === k
                        const zustand = antworten[n] == null ? '' : k === f.richtig ? ' is-right' : gewaehlt ? ' is-wrong' : ''
                        return (
                            <button key={k} type="button" className={`quiz-antwort${zustand}`} disabled={antworten[n] != null} onClick={() => setAntworten({ ...antworten, [n]: k })}>
                                {a}
                            </button>
                        )
                    })}
                    {antworten[n] != null && <p className="quiz-erklaerung">{antworten[n] === f.richtig ? '✅ ' : '❌ '}{f.erklaerung}</p>}
                </fieldset>
            ))}
            {fertig && (
                <div className="quiz-ergebnis" role="status">
                    <p>
                        <strong>
                            {richtig} von {fragen.length} richtig.
                        </strong>{' '}
                        {richtig === fragen.length ? 'Promptgott-Niveau erreicht ☢️' : 'Solide! Ein Blick zurück lohnt sich.'}
                    </p>
                    {finale}
                </div>
            )}
        </div>
    )
}
