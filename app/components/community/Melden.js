'use client'

import { useState } from 'react'
import { supabase } from '../../../lib/konto'
import { MELDEGRUENDE, fehlerText } from '../../../lib/community'
import { toast } from '../../../lib/herz'

// Meldeweg nach den Community-Regeln: Grund wählen, optional kurz erklären.
export default function Melden({ art, id, user }) {
    const [offen, setOffen] = useState(false)
    const [grund, setGrund] = useState('spam')
    const [text, setText] = useState('')
    if (!user) return null
    const senden = async () => {
        const sb = await supabase()
        const { error } = await sb.from('meldungen').insert({ ziel_art: art, ziel_id: String(id), grund, text: text.slice(0, 500) })
        if (error) return toast(fehlerText(error), '⚠️')
        setOffen(false)
        setText('')
        toast('Danke! Wir schauen uns das an und melden uns bei dir.', '🛡️')
    }
    if (!offen)
        return (
            <button type="button" className="c-link" onClick={() => setOffen(true)}>
                Melden
            </button>
        )
    return (
        <div className="c-melden">
            <label>
                Grund
                <select value={grund} onChange={(e) => setGrund(e.target.value)}>
                    {MELDEGRUENDE.map(([k, l]) => (
                        <option key={k} value={k}>
                            {l}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                Was genau stimmt nicht? (optional)
                <textarea rows={2} maxLength={500} value={text} onChange={(e) => setText(e.target.value)} />
            </label>
            <button type="button" className="button button-small" onClick={senden}>
                Meldung abschicken
            </button>{' '}
            <button type="button" className="c-link" onClick={() => setOffen(false)}>
                Abbrechen
            </button>
        </div>
    )
}
