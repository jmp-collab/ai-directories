'use client'

import { useCallback, useEffect, useState } from 'react'
import { supabase } from '../../../lib/konto'
import { REAKTIONEN, fehlerText } from '../../../lib/community'
import { toast } from '../../../lib/herz'

// Lädt alle Reaktionen für eine Liste von Zielen auf einmal: { [id]: { [emoji]: [user_ids] } }.
export function useReaktionen(art, ids) {
    const [daten, setDaten] = useState({})
    const schluessel = ids.join(',')
    const laden = useCallback(async () => {
        if (!schluessel) return setDaten({})
        const sb = await supabase()
        const { data } = await sb.from('reaktionen').select('ziel_id, emoji, user_id').eq('ziel_art', art).in('ziel_id', schluessel.split(','))
        const neu = {}
        ;(data || []).forEach((r) => {
            neu[r.ziel_id] = neu[r.ziel_id] || {}
            neu[r.ziel_id][r.emoji] = [...(neu[r.ziel_id][r.emoji] || []), r.user_id]
        })
        setDaten(neu)
    }, [art, schluessel])
    useEffect(() => {
        laden()
    }, [laden])
    return [daten, setDaten]
}

export default function Reaktionen({ art, id, daten, setDaten, user }) {
    const eigene = (emoji) => (daten[id]?.[emoji] || []).includes(user?.id)
    const klick = async (emoji) => {
        if (!user) return toast('Melde dich an, um zu reagieren. Kostet nichts, versprochen.', '👋')
        const sb = await supabase()
        const hat = eigene(emoji)
        const { error } = hat
            ? await sb.from('reaktionen').delete().match({ ziel_art: art, ziel_id: id, user_id: user.id, emoji })
            : await sb.from('reaktionen').insert({ ziel_art: art, ziel_id: id, emoji })
        if (error) return toast(fehlerText(error), '⚠️')
        const liste = daten[id]?.[emoji] || []
        setDaten({ ...daten, [id]: { ...(daten[id] || {}), [emoji]: hat ? liste.filter((u) => u !== user.id) : [...liste, user.id] } })
    }
    return (
        <div className="c-reaktionen" role="group" aria-label="Reaktionen">
            {REAKTIONEN.map((emoji) => {
                const n = (daten[id]?.[emoji] || []).length
                return (
                    <button key={emoji} type="button" className={`c-reaktion${eigene(emoji) ? ' an' : ''}`} aria-pressed={eigene(emoji)} onClick={() => klick(emoji)}>
                        <span aria-hidden="true">{emoji}</span>
                        {n > 0 && <span className="c-reaktion-zahl">{n}</span>}
                        <span className="sr-only">{n} Reaktionen</span>
                    </button>
                )
            })}
        </div>
    )
}
