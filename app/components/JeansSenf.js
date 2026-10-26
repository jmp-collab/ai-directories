'use client'

import { usePathname } from 'next/navigation'
import TEXTE from '../../db/texte/hubs.json'

// Jeans Einordnung für Übersichts-, Listen- und Alternativen-Seiten: pro Seite ein eigener Text.
export default function JeansSenf() {
    const roh = usePathname() || '/'
    const pfad = roh.endsWith('/') ? roh : `${roh}/`
    const t = TEXTE[pfad]
    if (!t) return null
    return (
        <section className="jean-take jeans-senf" aria-labelledby="jeans-senf">
            <h2 id="jeans-senf">Jeans Senf zu dieser Seite 🌭</h2>
            <p>{t.intro}</p>
            <p>
                <em>{t.jean}</em>
            </p>
        </section>
    )
}
