'use client'

import { useEffect, useState } from 'react'

// Dünner Balken oben: wie weit du schon gelesen hast. Rein dekorativ, ohne Animation.
export default function LeseFortschritt() {
    const [anteil, setAnteil] = useState(0)
    useEffect(() => {
        const update = () => {
            const max = document.documentElement.scrollHeight - window.innerHeight
            setAnteil(max > 0 ? Math.min(1, window.scrollY / max) : 0)
        }
        update()
        window.addEventListener('scroll', update, { passive: true })
        window.addEventListener('resize', update)
        return () => {
            window.removeEventListener('scroll', update)
            window.removeEventListener('resize', update)
        }
    }, [])
    return <div className="lese-fortschritt" aria-hidden="true" style={{ transform: `scaleX(${anteil})` }} />
}
