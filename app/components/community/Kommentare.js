'use client'

import { useCallback, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import useKonto from '../useKonto'
import { KONTO_AKTIV, supabase } from '../../../lib/konto'
import { AUTOR_FELDER, fehlerText, nochBearbeitbar } from '../../../lib/community'
import { toast } from '../../../lib/herz'
import Autor from './Autor'
import Text from './Text'
import Eingabe from './Eingabe'
import Melden from './Melden'
import Reaktionen, { useReaktionen } from './Reaktionen'

// Kommentare unter allen Inhalten. Antworten eine Ebene tief, Reaktionen, Melden, Bearbeiten in den ersten 15 Minuten.
const OHNE = /^\/(anmelden|konto|merkliste|u|forum|moderation|datenschutz|community-regeln|impressum)(\/|$)/

function Kommentar({ k, antworten, user, profil, mod, reaktionen, setReaktionen, neuLaden, pfad }) {
    const [modus, setModus] = useState('')
    const eigen = user && k.user_id === user.id
    const gelöscht = k.status === 'geloescht'
    const aktion = async (art) => {
        const sb = await supabase()
        const { error } =
            art === 'loeschen'
                ? await sb.rpc('eigenes_loeschen', { art_: 'kommentar', id_: k.id })
                : await sb.rpc('moderieren', { art_: 'kommentar', id_: k.id, neuer_status: art, grund_: 'Verstoß gegen die Community-Regeln' })
        if (error) return toast(fehlerText(error), '⚠️')
        neuLaden()
    }
    const bearbeiten = async (text) => {
        const sb = await supabase()
        const { error } = await sb.from('comments').update({ text }).eq('id', k.id)
        if (error) {
            toast(fehlerText(error), '⚠️')
            return false
        }
        setModus('')
        neuLaden()
        return true
    }
    const antworten_ = async (text) => {
        const sb = await supabase()
        const { error } = await sb.from('comments').insert({ pfad, parent_id: k.id, text })
        if (error) {
            toast(fehlerText(error), '⚠️')
            return false
        }
        setModus('')
        neuLaden()
        return true
    }
    return (
        <li className={`c-kommentar status-${k.status}`} id={`kommentar-${k.id}`}>
            <Autor autor={k.autor} zeit={k.erstellt} bearbeitet={k.bearbeitet} />
            {gelöscht ? (
                <p className="c-entfernt">Dieser Kommentar wurde von der Person selbst entfernt.</p>
            ) : modus === 'bearbeiten' ? (
                <Eingabe user={user} pfad={pfad} startText={k.text} knopf="Speichern" autoFocus onSenden={bearbeiten} onAbbrechen={() => setModus('')} />
            ) : (
                <>
                    {k.status === 'pruefen' && <p className="c-hinweis">⏳ Wartet auf Freigabe durch die Moderation. Nur du und das Team sehen das.</p>}
                    {k.status === 'ausgeblendet' && <p className="c-hinweis">🙈 Ausgeblendet. Nur du und das Team sehen das.</p>}
                    <Text text={k.text} />
                </>
            )}
            {!gelöscht && modus !== 'bearbeiten' && (
                <div className="c-aktionen">
                    <Reaktionen art="kommentar" id={k.id} daten={reaktionen} setDaten={setReaktionen} user={user} />
                    {!k.parent_id && user && (
                        <button type="button" className="c-link" onClick={() => setModus(modus === 'antworten' ? '' : 'antworten')}>
                            Antworten
                        </button>
                    )}
                    {eigen && nochBearbeitbar(k.erstellt) && (
                        <button type="button" className="c-link" onClick={() => setModus('bearbeiten')}>
                            Bearbeiten
                        </button>
                    )}
                    {eigen && (
                        <button type="button" className="c-link" onClick={() => aktion('loeschen')}>
                            Löschen
                        </button>
                    )}
                    {!eigen && <Melden art="kommentar" id={k.id} user={user} />}
                    {mod && (
                        <button type="button" className="c-link c-mod" onClick={() => aktion(k.status === 'ausgeblendet' || k.status === 'pruefen' ? 'sichtbar' : 'ausgeblendet')}>
                            {k.status === 'sichtbar' ? 'Ausblenden' : 'Freigeben'}
                        </button>
                    )}
                </div>
            )}
            {modus === 'antworten' && (
                <Eingabe user={user} pfad={pfad} platzhalter={`Antwort an ${k.autor?.anzeigename || 'Mitglied'}`} knopf="Antworten" autoFocus onSenden={antworten_} onAbbrechen={() => setModus('')} />
            )}
            {antworten.length > 0 && (
                <ul className="c-antworten">
                    {antworten.map((a) => (
                        <Kommentar key={a.id} k={a} antworten={[]} user={user} profil={profil} mod={mod} reaktionen={reaktionen} setReaktionen={setReaktionen} neuLaden={neuLaden} pfad={pfad} />
                    ))}
                </ul>
            )}
        </li>
    )
}

export default function Kommentare() {
    const roh = usePathname() || '/'
    const pfad = (roh.length > 1 ? roh.replace(/\/$/, '') : roh).toLowerCase()
    const { bereit, user, profil } = useKonto()
    const [liste, setListe] = useState(null)
    const mod = profil && ['moderator', 'admin'].includes(profil.rolle)

    const laden = useCallback(async () => {
        const sb = await supabase()
        if (!sb) return
        const { data, error } = await sb.from('comments').select(`id, parent_id, user_id, text, status, erstellt, bearbeitet, ${AUTOR_FELDER}`).eq('pfad', pfad).order('erstellt', { ascending: false }).limit(300)
        // Die neuesten 300 laden und für die Anzeige wieder chronologisch sortieren.
        setListe(error ? [] : (data || []).reverse())
    }, [pfad])

    useEffect(() => {
        if (!KONTO_AKTIV || OHNE.test(pfad) || !/^\/[a-z0-9/_.-]*$/.test(pfad)) return
        setListe(null)
        laden().catch(() => setListe([]))
    }, [pfad, laden, user])

    const ids = (liste || []).map((k) => k.id)
    const [reaktionen, setReaktionen] = useReaktionen('kommentar', ids)

    if (!KONTO_AKTIV || OHNE.test(pfad) || !bereit) return null

    const senden = async (text) => {
        const sb = await supabase()
        const { error } = await sb.from('comments').insert({ pfad, text })
        if (error) {
            toast(fehlerText(error), '⚠️')
            return false
        }
        toast('Danke fürs Mitreden!', '💬')
        laden()
        return true
    }

    const oben = (liste || []).filter((k) => !k.parent_id)
    const sichtbar = (liste || []).filter((k) => k.status === 'sichtbar').length
    return (
        <section className="c-bereich" aria-labelledby="kommentare-titel">
            <h2 id="kommentare-titel">💬 Kommentare {liste ? `(${sichtbar})` : ''}</h2>
            <Eingabe user={user} pfad={pfad} platzhalter="Was denkst du? Erfahrungen, Fragen, Ergänzungen …" knopf="Kommentieren" onSenden={senden} />
            {liste === null ? (
                <p className="widget-note">Lade Kommentare …</p>
            ) : oben.length === 0 ? (
                <p className="c-leer">Noch keine Kommentare. Schreib den ersten und hol dir das Abzeichen dafür! 🏅</p>
            ) : (
                <ul className="c-liste">
                    {oben.map((k) => (
                        <Kommentar
                            key={k.id}
                            k={k}
                            antworten={liste.filter((a) => a.parent_id === k.id)}
                            user={user}
                            profil={profil}
                            mod={mod}
                            reaktionen={reaktionen}
                            setReaktionen={setReaktionen}
                            neuLaden={laden}
                            pfad={pfad}
                        />
                    ))}
                </ul>
            )}
        </section>
    )
}
