'use client'

import { useState } from 'react'
import { AI_TARGETS, MAX_URL_PROMPT } from '../../lib/ai-targets'

// Schickt einen Prompt an ChatGPT, Claude und Co. Der Prompt wird immer auch kopiert,
// damit er bei zu langen Links oder Gemini per Strg+V eingefügt werden kann.
export default function SendToAI({ prompt }) {
    const [note, setNote] = useState('')

    const send = (event, target) => {
        const q = encodeURIComponent(prompt)
        const tooLong = target.copyOnly || q.length > (target.maxLength || MAX_URL_PROMPT)
        // preventDefault muss synchron passieren, bevor irgendetwas awaited wird
        if (tooLong) {
            event.preventDefault()
            window.open(target.copyOnly ? target.url() : target.url(''), '_blank', 'noopener')
        }
        navigator.clipboard?.writeText(prompt).catch(() => {})
        setNote(
            tooLong
                ? `Prompt kopiert. In ${target.name} mit Strg+V (Mac: Cmd+V) einfügen.`
                : `${target.name} geöffnet. Falls das Feld leer ist: Prompt liegt in der Zwischenablage.`
        )
    }

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(prompt)
            setNote('Prompt kopiert ✓')
        } catch {
            window.prompt('Zum Kopieren markieren:', prompt)
        }
    }

    return (
        <div className="send-to-ai">
            <p className="send-to-ai-label">Prompt senden an:</p>
            <div className="send-to-ai-buttons">
                {AI_TARGETS.map((t) => (
                    <a
                        key={t.id}
                        className={`ai-button ai-${t.id}`}
                        href={t.copyOnly ? t.url() : t.url(encodeURIComponent(prompt))}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => send(e, t)}
                        aria-label={`Prompt an ${t.name} senden${t.copyOnly ? ' (wird kopiert)' : ''}`}
                    >
                        {t.name}
                        {t.copyOnly ? ' 📋' : ' ↗'}
                    </a>
                ))}
                <button type="button" className="ai-button ai-copy" onClick={copy}>
                    Kopieren
                </button>
            </div>
            <p className="send-to-ai-note" aria-live="polite">
                {note || 'Der Prompt landet im Eingabefeld. Absenden musst du selbst; deine Eingaben verlassen diese Seite erst beim Klick.'}
            </p>
        </div>
    )
}
