'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { lies, schreib, toast, ruhig, verleihe } from '../../lib/herz'
import { StrahlenHerz } from './HerzIcons'

// Herz, Merken und Teilen unter jeder Seite. Gespeichert wird nur im eigenen Browser, gezählt wird nichts.
const sauber = (t) => (t || '').replace(/\s*\|\s*AIGeddon\s*$/, '').trim()

function herzRegen(knopf) {
    if (ruhig() || !knopf) return
    const r = knopf.getBoundingClientRect()
    for (let i = 0; i < 9; i++) {
        const h = document.createElement('span')
        h.className = 'herz-flug'
        h.setAttribute('aria-hidden', 'true')
        h.textContent = ['❤️', '💖', '💛', '💜'][i % 4]
        h.style.left = `${r.left + r.width / 2}px`
        h.style.top = `${r.top}px`
        h.style.setProperty('--dx', `${(Math.random() - 0.5) * 140}px`)
        h.style.animationDelay = `${i * 40}ms`
        document.body.appendChild(h)
        setTimeout(() => h.remove(), 1400)
    }
}

export default function SeitenAktionen() {
    const pfad = usePathname() || '/'
    const [herz, setHerz] = useState(false)
    const [gemerkt, setGemerkt] = useState(false)
    const [bereit, setBereit] = useState(false)

    useEffect(() => {
        setHerz((lies('aigeddon-herzen', []) || []).includes(pfad))
        setGemerkt((lies('aigeddon-merkliste', []) || []).some((m) => m.pfad === pfad))
        setBereit(true)
    }, [pfad])

    if (pfad === '/merkliste' || pfad === '/merkliste/') return null

    const herzKlick = (e) => {
        const alle = new Set(lies('aigeddon-herzen', []) || [])
        if (alle.has(pfad)) {
            alle.delete(pfad)
            setHerz(false)
        } else {
            alle.add(pfad)
            setHerz(true)
            herzRegen(e.currentTarget)
            if (alle.size === 5) verleihe('Herzensmensch-Abzeichen')
            else toast(alle.size === 1 ? 'Dein erstes Herz! Danke, das freut uns wirklich.' : 'Danke für dein Herz!', '❤️')
        }
        schreib('aigeddon-herzen', [...alle])
    }

    const merkKlick = () => {
        const liste = (lies('aigeddon-merkliste', []) || []).filter((m) => m.pfad !== pfad)
        if (gemerkt) {
            schreib('aigeddon-merkliste', liste)
            setGemerkt(false)
            toast('Von der Merkliste genommen.', '🗑️')
        } else {
            schreib('aigeddon-merkliste', [{ pfad, titel: sauber(document.title), zeit: Date.now() }, ...liste].slice(0, 100))
            setGemerkt(true)
            toast('Gemerkt! Du findest die Seite unter Merkliste (Taste m).', '⭐')
        }
    }

    const teilen = async () => {
        const url = window.location.href.split('#')[0]
        try {
            if (navigator.share) {
                await navigator.share({ title: sauber(document.title), url })
                verleihe('Botschafter-Abzeichen')
                return
            }
            await navigator.clipboard.writeText(url)
            if (!verleihe('Botschafter-Abzeichen')) toast('Link kopiert. Danke fürs Weitersagen!', '🔗')
        } catch {}
    }

    return (
        <div className="seiten-aktionen" aria-label="Seite bewerten, merken oder teilen" role="group">
            <StrahlenHerz size={36} className="seiten-aktionen-icon" />
            <span className="seiten-aktionen-frage">Hat dir die Seite geholfen?</span>
            <button type="button" className={`aktion-knopf${herz ? ' an' : ''}`} aria-pressed={bereit ? herz : undefined} onClick={herzKlick}>
                <span aria-hidden="true">{herz ? '❤️' : '🤍'}</span> {herz ? 'Danke!' : 'Gefällt mir'}
            </button>
            <button type="button" className={`aktion-knopf${gemerkt ? ' an' : ''}`} aria-pressed={bereit ? gemerkt : undefined} onClick={merkKlick}>
                <span aria-hidden="true">{gemerkt ? '⭐' : '☆'}</span> {gemerkt ? 'Gemerkt' : 'Merken'}
            </button>
            <button type="button" className="aktion-knopf" onClick={teilen}>
                <span aria-hidden="true">💌</span> Teilen
            </button>
            <span className="seiten-aktionen-hinweis">Bleibt nur in deinem Browser, wir zählen nichts.</span>
        </div>
    )
}
