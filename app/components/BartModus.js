'use client'

import { useEffect, useState } from 'react'
import konfetti from '../../lib/konfetti'

// Easter Egg: Konami-Code schaltet den Bart-Modus ein und aus.
const CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']

export default function BartModus() {
    const [toast, setToast] = useState(null)

    useEffect(() => {
        let pos = 0
        const onKey = (e) => {
            pos = e.key === CODE[pos] ? pos + 1 : e.key === CODE[0] ? 1 : 0
            if (pos < CODE.length) return
            pos = 0
            const on = document.body.classList.toggle('bart-modus')
            if (on) konfetti(90)
            setToast(on ? 'Bart-Modus aktiviert 🧔 Alles wackelt jetzt ein bisschen.' : 'Bart-Modus aus. Rasur abgeschlossen.')
            setTimeout(() => setToast(null), 3000)
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [])

    return toast ? (
        <div className="toast" role="status">
            {toast}
        </div>
    ) : null
}
