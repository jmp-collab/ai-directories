'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import konfetti from '../../lib/konfetti'
import { lies, schreib, sitzung, toast } from '../../lib/herz'

// Kleine Aufmerksamkeiten für Besucher. Alles läuft lokal im Browser, nichts wird gezählt oder gesendet.
const KUERZEL = [
    ['h', '/', 'Startseite'],
    ['n', '/ki-news', 'KI-News'],
    ['p', '/prompts', 'Prompts'],
    ['s', '/skills', 'Skills'],
    ['r', '/ratgeber', 'Ratgeber'],
    ['m', '/merkliste', 'Deine Merkliste'],
]
const ABZEICHEN = [
    [3, 'Neugier-Abzeichen', '🔍'],
    [6, 'Entdecker-Abzeichen', '🧭'],
    [10, 'Weltreise-Abzeichen', '🌍'],
]
const LESESEITEN = /^\/(ratgeber|ki-news|tutorials)\/[^/]+\/?$/

// Saison nach Datum: Monat (1-12), Tag. Rückgabe [Name, Emoji].
const saison = (d) => {
    const m = d.getMonth() + 1
    const t = d.getDate()
    if ((m === 10 && t >= 24) || (m === 11 && t <= 1)) return ['halloween', '🎃']
    if (m === 12 && t <= 24) return ['advent', '❄️']
    if ((m === 12 && t >= 31) || (m === 1 && t <= 1)) return ['silvester', '🎆']
    if ((m === 3 && t >= 20) || m === 4) return ['fruehling', '🌸']
    if ((m === 6 && t >= 21) || m === 7 || m === 8) return ['sommer', '☀️']
    return null
}

export default function Herzstuecke() {
    const pfad = usePathname() || '/'
    const router = useRouter()
    const [hilfe, setHilfe] = useState(false)
    const [deko, setDeko] = useState(null)

    // Einmal pro Seitenaufruf: Einstellungen anwenden, Saison, Besuche, Konsole, Pausen, Kopieren, Tab-Titel.
    useEffect(() => {
        const html = document.documentElement
        const akzent = lies('aigeddon-akzent')
        if (akzent) html.dataset.akzent = akzent
        if (lies('aigeddon-ruhig')) html.dataset.ruhig = 'an'
        const s = saison(new Date())
        if (s) {
            html.dataset.saison = s[0]
            setDeko(s)
        }

        if (!sitzung('aigeddon-besuch')) {
            const anzahl = (lies('aigeddon-besuche', 0) || 0) + 1
            schreib('aigeddon-besuche', anzahl)
            if (anzahl === 2) setTimeout(() => toast('Schön, dass du wieder da bist!', '👋'), 1500)
            else if ([5, 10, 25, 50, 100].includes(anzahl)) {
                setTimeout(() => {
                    toast(`Das ist dein ${anzahl}. Besuch. Danke für deine Treue!`, '🎉')
                    konfetti(80)
                }, 1500)
            }
            // Für Entwickler, die neugierig in die Konsole schauen.
            console.log(
                '%c☢️ AIGeddon%c\nHallo du neugierige Seele! Der Code ist Open Source: https://github.com/jmp-collab/ai-directories\nPull Requests werden mit Konfetti empfangen.',
                'font:bold 20px sans-serif;color:#b3164f',
                'font:13px sans-serif'
            )
            const pause = setTimeout(() => toast('Du bist seit 25 Minuten hier. Zeit für einen Schluck Wasser und einmal Strecken.', '💧'), 25 * 60 * 1000)
            return () => clearTimeout(pause)
        }
    }, [])

    useEffect(() => {
        const kopiert = () => {
            const text = String(window.getSelection() || '')
            if (text.length > 40 && !sitzung('aigeddon-kopiert')) toast('Gut kopiert! Wenn du es teilst, freut sich ein Link zurück.', '📋')
        }
        let timer
        const titel = { alt: '' }
        const sicht = () => {
            if (document.hidden) {
                titel.alt = document.title
                timer = setTimeout(() => (document.title = '👋 Bis gleich! | AIGeddon'), 30000)
            } else {
                clearTimeout(timer)
                if (titel.alt) document.title = titel.alt
            }
        }
        document.addEventListener('copy', kopiert)
        document.addEventListener('visibilitychange', sicht)
        return () => {
            document.removeEventListener('copy', kopiert)
            document.removeEventListener('visibilitychange', sicht)
            clearTimeout(timer)
        }
    }, [])

    // Pro Seite: Bereiche für Abzeichen merken, Lese-Medaille bei ganz gelesenen Artikeln.
    useEffect(() => {
        const bereich = pfad.split('/').filter(Boolean)[0] || 'start'
        const besucht = new Set(lies('aigeddon-bereiche', []) || [])
        if (!besucht.has(bereich)) {
            besucht.add(bereich)
            schreib('aigeddon-bereiche', [...besucht])
            const neu = ABZEICHEN.find(([n]) => n === besucht.size)
            if (neu) {
                const alle = lies('aigeddon-abzeichen', []) || []
                if (!alle.includes(neu[1])) {
                    schreib('aigeddon-abzeichen', [...alle, neu[1]])
                    setTimeout(() => toast(`${neu[1]} verdient: Du hast ${neu[0]} Bereiche von AIGeddon entdeckt!`, neu[2]), 1200)
                }
            }
        }
        if (!LESESEITEN.test(pfad)) return
        const gelesen = new Set(lies('aigeddon-gelesen', []) || [])
        if (gelesen.has(pfad)) return
        const start = Date.now()
        const scroll = () => {
            const ende = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight * 0.92
            if (ende && Date.now() - start > 30000) {
                gelesen.add(pfad)
                schreib('aigeddon-gelesen', [...gelesen])
                toast(`Respekt, ganz durchgelesen! Das war Artikel Nr. ${gelesen.size} für dich. Kaffee verdient.`, '🏅')
                window.removeEventListener('scroll', scroll)
            }
        }
        window.addEventListener('scroll', scroll, { passive: true })
        return () => window.removeEventListener('scroll', scroll)
    }, [pfad])

    // Tastenkürzel: ? zeigt die Hilfe, Buchstaben springen in Bereiche, t nach oben.
    useEffect(() => {
        const taste = (e) => {
            if (e.ctrlKey || e.metaKey || e.altKey) return
            const ziel = e.target
            if (ziel.closest && ziel.closest('input, textarea, select, [contenteditable="true"]')) return
            if (e.key === '?') {
                e.preventDefault()
                setHilfe((h) => !h)
                return
            }
            if (e.key === 'Escape') return setHilfe(false)
            if (e.key === 't') return window.scrollTo({ top: 0, behavior: 'smooth' })
            const k = KUERZEL.find(([key]) => key === e.key)
            if (k) {
                setHilfe(false)
                router.push(k[1])
            }
        }
        window.addEventListener('keydown', taste)
        return () => window.removeEventListener('keydown', taste)
    }, [router])

    return (
        <>
            {deko && (
                <span className={`saison-deko saison-${deko[0]}`} aria-hidden="true">
                    {deko[1]}
                </span>
            )}
            {hilfe && (
                <div className="kuerzel-overlay" role="dialog" aria-modal="false" aria-labelledby="kuerzel-titel">
                    <div className="kuerzel-karte">
                        <p className="kuerzel-titel" id="kuerzel-titel">
                            ⌨️ Tastenkürzel für Schnelle
                        </p>
                        <ul>
                            {KUERZEL.map(([k, , label]) => (
                                <li key={k}>
                                    <kbd>{k}</kbd> {label}
                                </li>
                            ))}
                            <li>
                                <kbd>t</kbd> Nach oben
                            </li>
                            <li>
                                <kbd>?</kbd> Diese Hilfe ein- und ausblenden
                            </li>
                        </ul>
                        <button type="button" className="button button-small" onClick={() => setHilfe(false)}>
                            Alles klar 👍
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}
