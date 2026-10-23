'use client'

import { useState } from 'react'
import Link from 'next/link'

// Dreht durch die Konsens-Tools und bleibt bei einem Zufallsfund stehen.
export default function ToolRoulette({ tools }) {
    const [aktuell, setAktuell] = useState(null)
    const [dreht, setDreht] = useState(false)

    const drehen = () => {
        if (dreht || !tools.length) return
        setDreht(true)
        let n = 0
        const schritte = 14 + Math.floor(Math.random() * 8)
        const tick = () => {
            setAktuell(tools[Math.floor(Math.random() * tools.length)])
            n += 1
            if (n < schritte) setTimeout(tick, 40 + n * 12)
            else setDreht(false)
        }
        tick()
    }

    return (
        <div className={`roulette${dreht ? ' is-spinning' : ''}`}>
            <p className="roulette-window" aria-live="polite">
                {aktuell ? <strong>{aktuell.n}</strong> : <span>Welches KI-Tool kennst du noch nicht?</span>}
            </p>
            {aktuell && !dreht && (
                <>
                    <p className="widget-note">
                        <a href={aktuell.u} target="_blank" rel="nofollow noopener noreferrer">
                            Ansehen ↗
                        </a>
                        {aktuell.p && (
                            <>
                                {' '}
                                · <Link href={`/tools/${aktuell.p}`}>Steckbrief</Link>
                            </>
                        )}
                    </p>
                </>
            )}
            <button type="button" className="button button-small" onClick={drehen} disabled={dreht}>
                {dreht ? 'Dreht …' : aktuell ? 'Nochmal drehen 🎰' : 'Drehen 🎰'}
            </button>
        </div>
    )
}
