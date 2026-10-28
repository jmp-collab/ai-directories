'use client'

import { useCallback, useEffect, useState } from 'react'

// Eingetragene Verzeichnisse liegen nur im Browser. Ein Event hält mehrere Tabellen auf derselben Seite synchron.
const KEY = 'kiv-eingetragen'
const EVENT = 'kiv-tracker'

function read() {
    try {
        return new Set(JSON.parse(localStorage.getItem(KEY) || '[]'))
    } catch {
        return new Set()
    }
}

export default function useTracker() {
    const [done, setDone] = useState(() => new Set())

    useEffect(() => {
        const sync = () => setDone(read())
        sync()
        window.addEventListener(EVENT, sync)
        window.addEventListener('storage', sync)
        return () => {
            window.removeEventListener(EVENT, sync)
            window.removeEventListener('storage', sync)
        }
    }, [])

    const toggle = useCallback((slug) => {
        const next = read()
        next.has(slug) ? next.delete(slug) : next.add(slug)
        try {
            localStorage.setItem(KEY, JSON.stringify([...next]))
        } catch {
            // Speicher gesperrt (privates Fenster): Häkchen gilt dann nur bis zum Neuladen.
        }
        setDone(next)
        window.dispatchEvent(new Event(EVENT))
        return next
    }, [])

    return { done, toggle }
}

export const RANKS = [
    [0, 'Frischling', 'Noch kein Eintrag. Der erste ist der schwerste, versprochen.'],
    [1, 'Linkfriedhof-Gärtner', 'Du hast angefangen. Jean ist ein bisschen stolz.'],
    [5, 'Backlink-Lehrling', 'Fünf Einträge. Die Formulare kennen deinen Namen.'],
    [15, 'Verzeichnis-Veteran', 'Fünfzehn! Deine Zwischenablage braucht Urlaub.'],
    [30, 'Backlink-Baron', 'Dreißig Einträge. Du bist jetzt offiziell schwer zu ignorieren.'],
    [60, 'Jean-Level', 'Sechzig. Ab jetzt grüßt dich das Maskottchen persönlich.'],
]

export const rankFor = (n) => [...RANKS].reverse().find(([min]) => n >= min)
