'use client'

import { useEffect, useState } from 'react'
import { lies, schreib, toast } from '../../lib/herz'

// Farbwahl, Ruhe-Modus und ein Gruß zum Wochentag im Footer.
const FARBEN = [
    ['', 'Pink', '#b3164f'],
    ['blau', 'Blau', '#1d4ed8'],
    ['gruen', 'Grün', '#0f7a4a'],
    ['lila', 'Lila', '#6d28d9'],
]
const WOCHE = [
    'Schönen Sonntag! Heute darf die KI auch mal Pause machen.',
    'Guten Start in die Woche! Montag ist nur ein Wort.',
    'Dienstag: der Tag, an dem Pläne Wirklichkeit werden.',
    'Bergfest! Die Hälfte der Woche hast du geschafft.',
    'Donnerstag: fast Wochenende, also fast perfekt.',
    'Freitag! Zeit, etwas zu veröffentlichen und stolz zu sein.',
    'Samstag: der beste Tag für Herzensprojekte.',
]

export default function FooterExtras() {
    const [akzent, setAkzent] = useState('')
    const [still, setStill] = useState(false)
    const [gruss, setGruss] = useState('')

    useEffect(() => {
        setAkzent(lies('aigeddon-akzent', '') || '')
        setStill(Boolean(lies('aigeddon-ruhig')))
        setGruss(WOCHE[new Date().getDay()])
    }, [])

    const farbe = (wert, name) => {
        setAkzent(wert)
        schreib('aigeddon-akzent', wert)
        if (wert) document.documentElement.dataset.akzent = wert
        else delete document.documentElement.dataset.akzent
        toast(`Neue Lieblingsfarbe: ${name}. Steht dir!`, '🎨')
    }
    const ruhe = () => {
        const neu = !still
        setStill(neu)
        schreib('aigeddon-ruhig', neu)
        if (neu) document.documentElement.dataset.ruhig = 'an'
        else delete document.documentElement.dataset.ruhig
        toast(neu ? 'Ruhe-Modus an: keine Animationen, kein Konfetti.' : 'Ruhe-Modus aus. Es darf wieder wackeln.', neu ? '🌙' : '✨')
    }

    return (
        <div className="footer-extras">
            {gruss && (
                <p className="footer-woche">
                    <span aria-hidden="true">🗓️</span> {gruss}
                </p>
            )}
            <div className="footer-regler">
                <span id="farbwahl-label">Deine Farbe:</span>
                <div className="farbwahl" role="group" aria-labelledby="farbwahl-label">
                    {FARBEN.map(([wert, name, hex]) => (
                        <button
                            key={name}
                            type="button"
                            className={`farb-punkt${akzent === wert ? ' an' : ''}`}
                            style={{ background: hex }}
                            aria-pressed={akzent === wert}
                            aria-label={`Akzentfarbe ${name}`}
                            title={name}
                            onClick={() => farbe(wert, name)}
                        />
                    ))}
                </div>
                <button type="button" className="ruhe-knopf" aria-pressed={still} onClick={ruhe}>
                    {still ? '🌙 Ruhe-Modus an' : '✨ Ruhe-Modus'}
                </button>
                <a className="ruhe-knopf" href="#" onClick={(e) => (e.preventDefault(), window.dispatchEvent(new KeyboardEvent('keydown', { key: '?' })))}>
                    ⌨️ Tastenkürzel (?)
                </a>
            </div>
        </div>
    )
}
