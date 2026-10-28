'use client'

import { useEffect, useState } from 'react'

// Zeigt kleine, freundliche Meldungen unten links. Bleibt fünf Sekunden, lässt sich schließen.
export default function ToastHost() {
    const [liste, setListe] = useState([])
    useEffect(() => {
        let n = 0
        const neu = (e) => {
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
