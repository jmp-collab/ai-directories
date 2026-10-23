'use client'

import { useState } from 'react'

// Vorher/Nachher-Regler: Beide Prompts liegen übereinander, der Regler schiebt die Grenze.
export default function BeforeAfter({ vorher, nachher, erklaerung }) {
    const [pos, setPos] = useState(50)
    return (
        <figure className="before-after">
            <div className="before-after-stage" style={{ '--pos': `${pos}%` }}>
                <div className="ba-panel ba-vorher">
                    <span className="ba-label">Vorher 😐</span>
                    <p>{vorher}</p>
                </div>
                <div className="ba-panel ba-nachher" aria-hidden={pos < 5}>
                    <span className="ba-label">Nachher 🔥</span>
                    <p>{nachher}</p>
                </div>
                <span className="ba-handle" aria-hidden="true" />
            </div>
            <input
                type="range"
                min="0"
                max="100"
                value={pos}
                onChange={(e) => setPos(Number(e.target.value))}
                aria-label="Zwischen Vorher und Nachher schieben"
                className="ba-range"
            />
            <p className="ba-buttons">
                <button type="button" className="copy-button" onClick={() => setPos(100)}>
                    Vorher zeigen
                </button>
                <button type="button" className="copy-button" onClick={() => setPos(0)}>
                    Nachher zeigen
                </button>
            </p>
            {erklaerung && <figcaption>{erklaerung}</figcaption>}
        </figure>
    )
}
