'use client'

import Link from 'next/link'
import useKonto from './useKonto'
import { KONTO_AKTIV, bildUrl } from '../../lib/konto'

// Kleiner Knopf im Header: Anmelden oder das eigene Avatar mit Link zur Kontoseite.
export default function KontoKnopf() {
    const { bereit, user, profil } = useKonto()
    if (!KONTO_AKTIV || !bereit) return null
    if (!user)
        return (
            <Link href="/anmelden" className="konto-knopf">
                <span aria-hidden="true">👤</span> Anmelden
            </Link>
        )
    const bild = bildUrl('avatare', profil?.avatar_pfad)
    const name = profil?.anzeigename || 'Mein Konto'
    return (
        <Link href="/konto" className="konto-knopf konto-knopf-an" aria-label={`Mein Konto: ${name}`}>
            {bild ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={bild} alt="" width="28" height="28" className="konto-avatar" />
            ) : (
                <span className="konto-avatar konto-avatar-leer" aria-hidden="true">
                    {name.slice(0, 1).toUpperCase()}
                </span>
            )}
            <span className="konto-knopf-name">{name}</span>
        </Link>
    )
}
