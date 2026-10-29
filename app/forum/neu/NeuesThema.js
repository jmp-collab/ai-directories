'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import useKonto from '../../components/useKonto'
import { KONTO_AKTIV, supabase } from '../../../lib/konto'
import { fehlerText } from '../../../lib/community'
import { toast } from '../../../lib/herz'

export default function NeuesThema() {
    const router = useRouter()
    const { bereit, user, profil } = useKonto()
    const [kats, setKats] = useState([])
    const [k, setK] = useState('')
    const [titel, setTitel] = useState('')
    const [text, setText] = useState('')
    const [laeuft, setLaeuft] = useState(false)

    useEffect(() => {
        if (!KONTO_AKTIV) return
        setK(new URLSearchParams(window.location.search).get('k') || '')
        supabase().then(async (sb) => {
            const { data } = await sb.from('forum_kategorien').select('id, name, emoji, nur_team').order('sortierung')
            setKats(data || [])
        })
    }, [])

    if (!KONTO_AKTIV) return <p className="lead">Das Forum öffnet bald.</p>
    if (!bereit) return <p className="widget-note">Einen Moment …</p>
    if (!user)
        return (
            <p className="konto-karte">
                Zum Schreiben bitte <Link href="/anmelden?zurueck=/forum/neu">kostenlos anmelden</Link>.
            </p>
        )
    const team = profil && ['moderator', 'admin'].includes(profil.rolle)
    const erlaubt = kats.filter((x) => !x.nur_team || team)

    const senden = async (e) => {
        e.preventDefault()
        setLaeuft(true)
        const sb = await supabase()
        const { data, error } = await sb.from('forum_themen').insert({ kategorie_id: k, titel: titel.trim(), text: text.trim() }).select('id').single()
        setLaeuft(false)
        if (error) return toast(fehlerText(error), '⚠️')
        toast('Dein Thema ist online. Die Community ist gespannt!', '🚀')
        router.push(`/forum/thema?id=${data.id}`)
    }
    return (
        <form className="profil-editor" onSubmit={senden}>
            <fieldset>
                <legend>✍️ Neues Thema</legend>
                <label>
                    Kategorie
                    <select value={k} required onChange={(e) => setK(e.target.value)}>
                        <option value="">Bitte wählen</option>
                        {erlaubt.map((x) => (
                            <option key={x.id} value={x.id}>
                                {x.emoji} {x.name}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Titel (5 bis 140 Zeichen, gern als Frage)
                    <input value={titel} minLength={5} maxLength={140} required onChange={(e) => setTitel(e.target.value)} placeholder="z. B. Welches KI-Tool schneidet Podcasts am besten?" />
                </label>
                <label>
                    Worum geht es? ({10000 - text.length} Zeichen frei)
                    <textarea
                        value={text}
                        rows={8}
                        maxLength={10000}
                        required
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Was hast du schon probiert? Was ist dein Ziel? Je genauer, desto besser die Antworten."
                    />
                </label>
                <p className="widget-note">
                    Links und @handle werden automatisch erkannt. Bitte beachte die <Link href="/community-regeln">Community-Regeln</Link>.
                </p>
                <button type="submit" className="button" disabled={laeuft || !k}>
                    {laeuft ? 'Wird veröffentlicht …' : 'Thema veröffentlichen'}
                </button>
            </fieldset>
        </form>
    )
}
