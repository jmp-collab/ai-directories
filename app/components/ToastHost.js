'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

// Zeigt kleine, freundliche Meldungen. Bleibt sechs Sekunden, lässt sich schließen.
// Automatische Meldungen (ohne Klick) höchstens eine pro Seitenaufruf, damit es liebevoll bleibt und nicht laut wird.
export default function ToastHost() {
    const pfad = usePathname()
    const [liste, setListe] = useState([])
    const autoZahl = useRef(0)

    useEffect(() => {
        autoZahl.current = 0
    }, [pfad])

    useEffect(() => {
        let n = 0
        const neu = (e) => {
            if (e.detail.auto) {
                if (autoZahl.current >= 1) return
                autoZahl.current++
            }
            const id = ++n
            setListe((l) => [...l.slice(-2), { id, ...e.detail }])
            setTimeout(() => setListe((l) => l.filter((t) => t.id !== id)), 6000)
        }
        window.addEventListener('aigeddon-toast', neu)
        return () => window.removeEventListener('aigeddon-toast', neu)
    }, [])
    return (
        <div className="toast-host" role="status" aria-live="polite">
            {liste.map((t) => (
                <p key={t.id} className="toast">
                    <span className="toast-emoji" aria-hidden="true">{t.emoji}</span>
                    <span className="toast-text">{t.text}</span>
                    <button type="button" className="toast-zu" aria-label="Meldung schließen" onClick={() => setListe((l) => l.filter((x) => x.id !== t.id))}>
                        ×
                    </button>
                </p>
            ))}
        </div>
    )
}
