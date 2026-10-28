'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { lies, schreib } from '../../lib/herz'

// Auf Artikelseiten: merkt sich, wie weit du gelesen hast, bietet beim nächsten Mal „Weiterlesen“ an
// und zeigt beim Lesen die ungefähre Restzeit. Alles nur im eigenen Browser.
const LESESEITEN = /^\/(ratgeber|ki-news|tutorials)\/[^/]+\/?$/
const WPM = 200

export default function LeseHelfer() {
    const pfad = usePathname() || '/'
    const [stelle, setStelle] = useState(null)
    const [rest, setRest] = useState(null)

    useEffect(() => {
        setStelle(null)
        setRest(null)
        if (!LESESEITEN.test(pfad)) return
        const stand = (lies('aigeddon-lesestand', {}) || {})[pfad]
        const gelesen = (lies('aigeddon-gelesen', []) || []).includes(pfad)
        if (stand && stand > 0.1 && stand < 0.9 && !gelesen) setStelle(stand)

        const text = (document.querySelector('main article') || document.querySelector('main'))?.innerText || ''
        const minuten = text.split(/\s+/).filter(Boolean).length / WPM
        let zuletzt = 0
        const scroll = () => {
            const max = document.documentElement.scrollHeight - window.innerHeight
            const anteil = max > 0 ? Math.min(1, window.scrollY / max) : 0
            setRest(anteil > 0.05 && anteil < 0.9 && minuten > 2 ? Math.max(1, Math.round(minuten * (1 - anteil))) : null)
            if (anteil > 0.05) setStelle(null)
            const jetzt = Date.now()
            if (jetzt - zuletzt > 1500) {
                zuletzt = jetzt
                const alle = lies('aigeddon-lesestand', {}) || {}
                alle[pfad] = Math.round(anteil * 100) / 100
                // Nur die 30 jüngsten Artikel behalten.
                const schluessel = Object.keys(alle)
                if (schluessel.length > 30) delete alle[schluessel[0]]
                schreib('aigeddon-lesestand', alle)
            }
        }
        window.addEventListener('scroll', scroll, { passive: true })
        return () => window.removeEventListener('scroll', scroll)
    }, [pfad])

    const springen = () => {
        const max = document.documentElement.scrollHeight - window.innerHeight
        window.scrollTo({ top: max * stelle, behavior: 'smooth' })
        setStelle(null)
    }

    if (stelle)
        return (
            <div className="lese-pille" role="region" aria-label="Weiterlesen">
                <button type="button" className="lese-pille-knopf" onClick={springen}>
                    📖 Weiterlesen, wo du warst ({Math.round(stelle * 100)} %) ↓
                </button>
                <button type="button" className="lese-pille-zu" aria-label="Hinweis schließen" onClick={() => setStelle(null)}>
                    ×
                </button>
            </div>
        )
    if (rest)
        return (
            <p className="lese-pille lese-rest" aria-hidden="true">
                ⏳ noch ca. {rest} Min.
            </p>
        )
    return null
}
