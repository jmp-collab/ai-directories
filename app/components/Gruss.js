'use client'

import { useEffect, useState } from 'react'
import { feiertag } from '../../lib/herz'

// Kleiner Tagesgruß im Header, je nach Uhrzeit beim Besucher. Erst nach dem Laden, damit nichts flackert.
const GRUESSE = [
    [5, 'Moin, Frühaufsteher ☕'],
    [11, 'Mahlzeit 🍝'],
    [14, 'Na, produktiv? 🛠️'],
    [18, 'Feierabend-Modus 🛋️'],
    [23, 'Nachteule entdeckt 🦉'],
]

export default function Gruss() {
    const [text, setText] = useState('')
    const [oben, setOben] = useState(true)
    useEffect(() => {
        const h = new Date().getHours()
        const treffer = [...GRUESSE].reverse().find(([ab]) => h >= ab)
        const fest = feiertag(new Date())
        setText(fest ? `${fest[0]} ${fest[1]}` : treffer ? treffer[1] : GRUESSE[GRUESSE.length - 1][1])
        const onScroll = () => setOben(window.scrollY < 80)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])
    if (!text) return null
    return <span className={`gruss${oben ? '' : ' gruss-weg'}`}>{text}</span>
}
