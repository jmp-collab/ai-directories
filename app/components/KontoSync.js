'use client'

import { useEffect } from 'react'
import useKonto from './useKonto'
import { supabase, istAktuell } from '../../lib/konto'
import { erstAbgleich, schreibeNach, SYNC_KEYS } from '../../lib/sync'
import { toast, verleihe } from '../../lib/herz'

// Hält die Browser-Sammlung mit dem Konto synchron, sobald jemand angemeldet ist.
export default function KontoSync() {
    const { user } = useKonto()
    useEffect(() => {
        if (!user) return
        let aktiv = true
        const offen = new Map()
        let sb = null
        const gilt = () => aktiv && istAktuell(user.id)
        supabase().then(async (client) => {
            sb = client
            if (!sb || !aktiv) return
            const schon = sessionStorage.getItem('aigeddon-sync') === user.id
            const ok = await erstAbgleich(sb, user.id, gilt).catch(() => false)
            if (ok && !schon) {
                sessionStorage.setItem('aigeddon-sync', user.id)
                toast('Deine Merkliste, Herzen und Abzeichen sind jetzt in deinem Konto gesichert.', '☁️')
                verleihe('Mitglieds-Abzeichen')
            }
        })
        const geaendert = (e) => {
            const key = e.detail?.key
            if (!sb || !SYNC_KEYS.includes(key)) return
            clearTimeout(offen.get(key))
            offen.set(key, setTimeout(() => gilt() && schreibeNach(sb, user.id, key, gilt).catch(() => {}), 800))
        }
        window.addEventListener('aigeddon-speicher', geaendert)
        return () => {
            aktiv = false
            window.removeEventListener('aigeddon-speicher', geaendert)
            offen.forEach((t) => clearTimeout(t))
        }
    }, [user])
    return null
}
