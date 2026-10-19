// Kleines Konfetti ohne Bibliothek. Respektiert reduzierte Bewegung.
const COLORS = ['#d6246e', '#ffe14d', '#6ee7b7', '#8fb3d9', '#c4581f']

export default function konfetti(count = 60) {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const layer = document.createElement('div')
    layer.className = 'konfetti'
    layer.setAttribute('aria-hidden', 'true')
    for (let i = 0; i < count; i++) {
        const p = document.createElement('i')
        p.style.left = `${Math.random() * 100}%`
        p.style.background = COLORS[i % COLORS.length]
        p.style.animationDelay = `${Math.random() * 0.4}s`
        p.style.setProperty('--drift', `${(Math.random() - 0.5) * 200}px`)
        layer.appendChild(p)
    }
    document.body.appendChild(layer)
    setTimeout(() => layer.remove(), 2600)
}
