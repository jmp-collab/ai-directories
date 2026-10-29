'use client'

import useKonto from '../components/useKonto'
import { KONTO_AKTIV } from '../../lib/konto'

// Ehrlicher Satz zum Speicherort: ohne Anmeldung nur im Browser, angemeldet zusätzlich im Konto.
export default function SpeicherOrt({ art = 'lead' }) {
    const { user } = useKonto()
    const imKonto = KONTO_AKTIV && user
    if (art === 'album')
        return imKonto
            ? 'Dein Album liegt in deinem Browser und wird mit deinem Konto abgeglichen. So bleibt es auch auf anderen Geräten erhalten.'
            : 'Dein Album liegt nur in deinem Browser. Löschst du den Browser-Speicher, fängt es von vorn an.'
    return imKonto
        ? 'Gespeichert wird in deinem Browser und, weil du angemeldet bist, zusätzlich in deinem Konto. Abmelden leert den Browser, im Konto bleibt alles erhalten.'
        : 'Gespeichert wird nur in deinem Browser. Kein Konto, kein Server, keine Zählung. Wenn du den Browser-Speicher leerst, ist die Liste weg.'
}
