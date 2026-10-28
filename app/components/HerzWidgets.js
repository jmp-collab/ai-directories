'use client'

import { useEffect, useState } from 'react'
import { MUTMACHER, GLUECKSKEKSE, ruhig } from '../../lib/herz'

// Mutmacher des Tages (wechselt täglich) und ein Glückskeks zum Aufbrechen.
const tag = () => {
    const d = new Date()
    return Math.floor((d - new Date(d.getFullYear(), 0, 0)) / 86400000)
}

export function Mutmacher() {
    const [satz, setSatz] = useState(MUTMACHER[0])
    useEffect(() => setSatz(MUTMACHER[tag() % MUTMACHER.length]), [])
    return <p className="mutmacher">„{satz}“</p>
}

export function Glueckskeks() {
    const [spruch, setSpruch] = useState(null)
    const [knack, setKnack] = useState(false)
    const brechen = () => {
        const neu = GLUECKSKEKSE[Math.floor(Math.random() * GLUECKSKEKSE.length)]
        setSpruch(neu)
        if (!ruhig()) {
            setKnack(true)
            setTimeout(() => setKnack(false), 500)
        }
    }
    return (
        <div className="glueckskeks">
            <button type="button" className={`keks-knopf${knack ? ' knack' : ''}`} onClick={brechen} aria-label={spruch ? 'Noch einen Glückskeks öffnen' : 'Glückskeks öffnen'}>
                <span aria-hidden="true">🥠</span>
            </button>
            <p className="keks-text" aria-live="polite">
                {spruch || 'Klick auf den Keks. Was steht heute für dich drin?'}
            </p>
        </div>
    )
}
