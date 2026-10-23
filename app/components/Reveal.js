'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Lässt Inhalte beim Scrollen hereingleiten und Kennzahlen hochzählen ([data-count]).
// Ohne JavaScript oder bei reduzierter Bewegung ist alles sofort sichtbar.
const SELECTOR = [
    '.page-main > section',
    '.page-main > .band',
    '.link-cards > li',
    '.kb-list > li',
    '.tutorial-cards > li',
    '.rubrik-tiles > li',
    '.entry-tiles > li',
    '.podium > li',
    '.magnet-box',
    '.facts > div',
    '.stats > div',
    '.technik-liste > div',
    '.archiv-list > li',
].join(',')

const fmt = new Intl.NumberFormat('de-DE')

function countUp(el) {
    const target = Number(el.dataset.count)
    if (!Number.isFinite(target) || el.dataset.counted) return
    el.dataset.counted = '1'
    const start = performance.now()
    const dur = 1100
    const step = (now) => {
        const p = Math.min(1, (now - start) / dur)
        el.textContent = fmt.format(Math.round(target * (1 - Math.pow(1 - p, 3))))
        if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
}

export default function Reveal() {
    const path = usePathname()
    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
        const root = document.documentElement
        root.classList.add('reveal-ready')
        const io = new IntersectionObserver(
            (entries) => {
                for (const e of entries) {
                    if (!e.isIntersecting) continue
                    e.target.classList.add('is-in')
                    e.target.querySelectorAll?.('[data-count]').forEach(countUp)
                    if (e.target.dataset?.count) countUp(e.target)
                    io.unobserve(e.target)
                }
            },
            { rootMargin: '0px 0px -6% 0px', threshold: 0 }
        )
        const els = document.querySelectorAll(SELECTOR)
        els.forEach((el) => {
            // Geschwister bekommen eine kleine Verzögerung, damit Karten nacheinander erscheinen
            const i = el.parentElement ? [...el.parentElement.children].indexOf(el) : 0
            el.style.setProperty('--reveal-delay', `${Math.min(i, 8) * 60}ms`)
            const r = el.getBoundingClientRect()
            if (r.top < window.innerHeight) el.classList.add('is-in')
            else io.observe(el)
        })
        document.querySelectorAll('[data-count]').forEach((el) => {
            const r = el.getBoundingClientRect()
            if (r.top < window.innerHeight) countUp(el)
            else io.observe(el)
        })
        return () => io.disconnect()
    }, [path])
    return null
}
