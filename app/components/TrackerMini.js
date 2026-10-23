'use client'

import Link from 'next/link'
import useTracker, { rankFor } from './useTracker'

// Fortschritt des Eintrags-Trackers in der Seitenleiste, liest denselben Browser-Speicher wie die Tabellen.
export default function TrackerMini({ total }) {
    const { done } = useTracker()
    const count = done.size
    const [, rank] = rankFor(count)
    const percent = Math.min(100, Math.round((count / total) * 100))
    return (
        <div className="widget-tracker">
            <p>
                <strong>{count}</strong> von {total} eingetragen
            </p>
            <div className="mini-bar" role="progressbar" aria-label="Eingetragene Verzeichnisse" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100}>
                <span style={{ width: `${percent}%` }} />
            </div>
            <p className="widget-note">
                Rang: {rank}. {count === 0 ? <Link href="/#alle">Jetzt abhaken →</Link> : <Link href="/#alle">Weiter abhaken →</Link>}
            </p>
        </div>
    )
}
