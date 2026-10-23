'use client'

import { useEffect, useState } from 'react'
import JeanIcon from './JeanIcon'

// Jean mit Sonnenbrille bringt dich nach oben, sobald du weit genug gescrollt hast.
export default function BackToTop() {
    const [show, setShow] = useState(false)
    useEffect(() => {
        const onScroll = () => setShow(window.scrollY > 700)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])
    return (
        <button
            type="button"
            className={`back-to-top${show ? ' is-visible' : ''}`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Nach oben"
            tabIndex={show ? 0 : -1}
        >
            <JeanIcon cool badge="rakete" size={52} />
        </button>
    )
}
