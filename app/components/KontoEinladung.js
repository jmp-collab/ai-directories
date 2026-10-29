'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import useKonto from './useKonto'
import { KONTO_AKTIV } from '../../lib/konto'

// Sanfte Einladung zum kostenlosen Konto. Erscheint nur für Gäste und nur, wenn Konten aktiv sind.
export default function KontoEinladung({ titel = 'Sichere deine Sammlung auf allen Geräten', text, klein = false }) {
    const pfad = usePathname() || '/'
    const { bereit, user } = useKonto()
    if (!KONTO_AKTIV || !bereit || user) return null
    const ziel = `/anmelden?zurueck=${encodeURIComponent(pfad)}`
    if (klein)
        return (
            <p className="konto-einladung-klein">
                ☁️ {text || 'Merkliste auf allen Geräten?'} <Link href={ziel}>Kostenloses Konto anlegen</Link>
            </p>
        )
    return (
        <aside className="herz-box konto-einladung">
            <span className="herz-box-emoji" aria-hidden="true">
                ☁️
            </span>
            <div>
                <p className="herz-box-titel">{titel}</p>
                <p>{text || 'Mit einem kostenlosen Konto liegen Merkliste, Herzen und Abzeichen sicher in der Cloud. Kein Passwort, nur ein Link per E-Mail.'}</p>
                <Link className="button button-small" href={ziel}>
                    Kostenlos registrieren
                </Link>
            </div>
        </aside>
    )
}
