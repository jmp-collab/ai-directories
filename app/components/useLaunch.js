'use client'

import { useEffect, useState } from 'react'
import useKonto from './useKonto'
import { KONTO_AKTIV } from '../../lib/konto'
import { beobachteLaunch, ladeLaunch } from '../../lib/launch'

// Liefert { aktiv, bereit, fehler, eintraege, uid }. aktiv ist true, wenn jemand angemeldet ist und der Tracker im Konto liegt.
export default function useLaunch(frisch = false) {
    const { user } = useKonto()
    const [stand, setStand] = useState({ uid: null, bereit: false, fehler: false, eintraege: new Map() })
    useEffect(() => beobachteLaunch(setStand), [])
    useEffect(() => {
        if (KONTO_AKTIV && user) ladeLaunch(user.id, frisch)?.catch(() => {})
    }, [user?.id, frisch])
    const aktiv = Boolean(KONTO_AKTIV && user && stand.uid === user.id)
    return { ...stand, aktiv, uid: user?.id || null }
}
