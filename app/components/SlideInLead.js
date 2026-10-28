'use client'

import { useEffect, useState } from 'react'

// Gleitet von rechts unten herein, sobald 55 % der Seite gelesen sind. Einmal pro Sitzung, schließbar.
// Inhalt kommt als children (Server-Komponenten wie EmailCapture), damit hier keine Konfiguration landet.
export default function SlideInLead({ title, children, id = 'lead' }) {
    const [open, setOpen] = useState(false)
    const key = `slidein-${id}`

    useEffect(() => {
        try {
            if (sessionStorage.getItem(key)) return
        } catch {}
        const onScroll = () => {
            const max = document.documentElement.scrollHeight - window.innerHeight
            if (max > 0 && window.scrollY / max > 0.55) {
                setOpen(true)
                window.removeEventListener('scroll', onScroll)
            }
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [key])

    const close = () => {
        setOpen(false)
        try {
            sessionStorage.setItem(key, '1')
        } catch {}
    }

    return (
        <aside className={`slide-in${open ? ' is-open' : ''}`} aria-hidden={!open} aria-label={title}>
            <button type="button" className="slide-in-close" onClick={close} aria-label="Schließen" tabIndex={open ? 0 : -1}>
                ×
            </button>
            <p className="slide-in-title">{title}</p>
            {children}
        </aside>
    )
}
