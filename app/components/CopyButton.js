'use client'

import { useState } from 'react'

// Kopiert einen Text, oder ohne value die aktuelle Seiten-URL.
export default function CopyButton({ value, label, done = 'Kopiert ✓' }) {
    const [copied, setCopied] = useState(false)

    const copy = async () => {
        const text = value ?? window.location.href
        try {
            await navigator.clipboard.writeText(text)
        } catch {
            window.prompt('Zum Kopieren markieren:', text)
        }
        setCopied(true)
        setTimeout(() => setCopied(false), 1800)
    }

    return (
        <button type="button" className="copy-button" onClick={copy} aria-live="polite">
            {copied ? done : label}
        </button>
    )
}
