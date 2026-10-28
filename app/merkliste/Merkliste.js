'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { lies, schreib } from '../../lib/herz'

const ABZEICHEN = [
    ['Neugier-Abzeichen', '🔍', '3 Bereiche entdeckt'],
    ['Entdecker-Abzeichen', '🧭', '6 Bereiche entdeckt'],
    ['Weltreise-Abzeichen', '🌍', '10 Bereiche entdeckt'],
]

export default function Merkliste() {
    const [daten, setDaten] = useState(null)

    useEffect(() => {
        setDaten({
            liste: lies('aigeddon-merkliste', []) || [],
            herzen: (lies('aigeddon-herzen', []) || []).length,
            gelesen: (lies('aigeddon-gelesen', []) || []).length,
            bereiche: (lies('aigeddon-bereiche', []) || []).length,
            abzeichen: lies('aigeddon-abzeichen', []) || [],
            besuche: lies('aigeddon-besuche', 0) || 0,
        })
    }, [])

    if (!daten) return <p className="widget-note">Lade deine Merkliste …</p>

    const entfernen = (pfad) => {
        const liste = daten.liste.filter((m) => m.pfad !== pfad)
        schreib('aigeddon-merkliste', liste)
        setDaten({ ...daten, liste })
    }

    return (
        <>
            <h2>⭐ Gemerkte Seiten</h2>
            {daten.liste.length === 0 ? (
                <p className="merk-leer">
                    Noch leer. Unter jeder Seite findest du den Knopf <strong>☆ Merken</strong>. Probier es gleich bei den{' '}
                    <Link href="/ki-news">KI-News</Link> oder im <Link href="/ratgeber">Ratgeber</Link> aus.
                </p>
            ) : (
                <ul className="merk-liste">
                    {daten.liste.map((m) => (
                        <li key={m.pfad}>
                            <Link href={m.pfad}>{m.titel || m.pfad}</Link>
                            <span className="widget-note"> gemerkt am {new Date(m.zeit).toLocaleDateString('de-DE')}</span>
                            <button type="button" className="merk-weg" onClick={() => entfernen(m.pfad)} aria-label={`${m.titel || m.pfad} entfernen`}>
                                ✕
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            <h2>🏅 Deine kleine Sammlung</h2>
            <ul className="merk-stats">
                <li>
                    <strong>{daten.besuche}</strong> {daten.besuche === 1 ? 'Besuch' : 'Besuche'}
                </li>
                <li>
                    <strong>{daten.herzen}</strong> {daten.herzen === 1 ? 'Herz' : 'Herzen'} verschenkt
                </li>
                <li>
                    <strong>{daten.gelesen}</strong> Artikel ganz gelesen
                </li>
                <li>
                    <strong>{daten.bereiche}</strong> {daten.bereiche === 1 ? 'Bereich' : 'Bereiche'} entdeckt
                </li>
            </ul>
            <ul className="merk-abzeichen">
                {ABZEICHEN.map(([name, emoji, wie]) => {
                    const hat = daten.abzeichen.includes(name)
                    return (
                        <li key={name} className={hat ? 'hat' : ''}>
                            <span className="merk-abzeichen-icon" aria-hidden="true">
                                {hat ? emoji : '🔒'}
                            </span>
                            <strong>{name}</strong>
                            <span className="widget-note">{hat ? 'verdient' : wie}</span>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
