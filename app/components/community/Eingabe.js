'use client'

import { useState } from 'react'
import Link from 'next/link'

// Textfeld für Kommentare und Beiträge mit Zeichenzähler. Gäste sehen eine Einladung zum Mitreden.
export default function Eingabe({ user, pfad, onSenden, platzhalter = 'Was denkst du?', knopf = 'Senden', max = 2000, autoFocus = false, startText = '', onAbbrechen }) {
    const [text, setText] = useState(startText)
    const [laeuft, setLaeuft] = useState(false)
    if (!user)
        return (
            <p className="c-gast">
                💬 <Link href={`/anmelden?zurueck=${encodeURIComponent(pfad)}`}>Melde dich kostenlos an</Link>, um mitzureden.
            </p>
        )
    const senden = async (e) => {
        e.preventDefault()
        if (!text.trim() || laeuft) return
        setLaeuft(true)
        const ok = await onSenden(text.trim())
        setLaeuft(false)
        if (ok) setText('')
    }
    return (
        <form className="c-eingabe" onSubmit={senden}>
            <label className="sr-only" htmlFor={`eingabe-${pfad}-${knopf}`}>
                {platzhalter}
            </label>
            <textarea
                id={`eingabe-${pfad}-${knopf}`}
                rows={3}
                maxLength={max}
                value={text}
                autoFocus={autoFocus}
                placeholder={platzhalter}
                onChange={(e) => setText(e.target.value)}
            />
            <div className="c-eingabe-fuss">
                <span className="widget-note">
                    {max - text.length} Zeichen frei · Links und @handle werden erkannt · <Link href="/community-regeln">Regeln</Link>
                </span>
                <span>
                    {onAbbrechen && (
                        <button type="button" className="c-link" onClick={onAbbrechen}>
                            Abbrechen
                        </button>
                    )}{' '}
                    <button type="submit" className="button button-small" disabled={!text.trim() || laeuft}>
                        {laeuft ? 'Sendet …' : knopf}
                    </button>
                </span>
            </div>
        </form>
    )
}
