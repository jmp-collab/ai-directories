'use client'

import { useEffect, useState } from 'react'
import { lies } from '../../lib/herz'

// Zeigt auf /ki-news, wie viele Meldungen seit deinem letzten Besuch neu sind. Rechnet nur im Browser.
export default function NeuSeit({ daten }) {
    const [info, setInfo] = useState(null)
    useEffect(() => {
        let vorher = null
        try {
            vorher = sessionStorage.getItem('aigeddon-vorher')
        } catch {}
        if (vorher === null) vorher = lies('aigeddon-zuletzt', '')
        if (!vorher) return
        const tag = vorher.slice(0, 10)
        const neu = daten.filter((d) => d > tag).length
        if (neu > 0) setInfo([neu, new Date(vorher).toLocaleDateString('de-DE', { day: 'numeric', month: 'long' })])
    }, [daten])
    if (!info) return null
    return (
        <p className="neu-seit">
            <span aria-hidden="true">🆕</span> Willkommen zurück! Seit deinem letzten Besuch am {info[1]} {info[0] === 1 ? 'ist 1 Meldung' : `sind ${info[0]} Meldungen`}{' '}
            dazugekommen.
        </p>
    )
}
