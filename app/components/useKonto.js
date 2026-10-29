'use client'

import { useEffect, useState } from 'react'
import { beobachte } from '../../lib/konto'

// Liefert { bereit, user, profil } und aktualisiert sich bei Login und Logout.
export default function useKonto() {
    const [stand, setStand] = useState({ bereit: false, user: null, profil: null })
    useEffect(() => beobachte(setStand), [])
    return stand
}
