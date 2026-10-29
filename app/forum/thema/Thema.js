'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import useKonto from '../../components/useKonto'
import { KONTO_AKTIV, supabase } from '../../../lib/konto'
import { AUTOR_FELDER, fehlerText, nochBearbeitbar } from '../../../lib/community'
import { toast } from '../../../lib/herz'
import Autor from '../../components/community/Autor'
import Text from '../../components/community/Text'
import Eingabe from '../../components/community/Eingabe'
import Melden from '../../components/community/Melden'
import Reaktionen, { useReaktionen } from '../../components/community/Reaktionen'

function Beitrag({ art, b, user, mod, reaktionen, setReaktionen, neuLaden, loesung, kannLoesen, onLoesen }) {
    const [bearbeiten, setBearbeiten] = useState(false)
    const eigen = user && b.user_id === user.id
    const tabelle = art === 'thema' ? 'forum_themen' : 'forum_beitraege'
    const speichern = async (text) => {
        const sb = await supabase()
        const { error } = await sb.from(tabelle).update({ text }).eq('id', b.id)
        if (error) {
            toast(fehlerText(error), '⚠️')
            return false
        }
        setBearbeiten(false)
        neuLaden()
        return true
    }
    const rpc = async (name, args) => {
        const sb = await supabase()
        const { error } = await sb.rpc(name, args)
        if (error) return toast(fehlerText(error), '⚠️')
        neuLaden()
    }
    if (b.status === 'geloescht')
        return (
            <article className="f-beitrag" id={`beitrag-${b.id}`}>
                <p className="c-entfernt">Dieser Beitrag wurde von der Person selbst entfernt.</p>
            </article>
        )
    return (
        <article className={`f-beitrag${loesung ? ' f-loesung' : ''} status-${b.status}`} id={`${art}-${b.id}`}>
            {loesung && <p className="f-loesung-marke">✅ Lösung</p>}
            <Autor autor={b.autor} zeit={b.erstellt} bearbeitet={b.bearbeitet} groesse={40} />
            {b.status === 'pruefen' && <p className="c-hinweis">⏳ Wartet auf Freigabe durch die Moderation.</p>}
            {b.status === 'ausgeblendet' && <p className="c-hinweis">🙈 Ausgeblendet.</p>}
            {bearbeiten ? (
                <Eingabe user={user} pfad={`forum-${b.id}`} startText={b.text} knopf="Speichern" max={10000} autoFocus onSenden={speichern} onAbbrechen={() => setBearbeiten(false)} />
            ) : (
                <Text text={b.text} />
            )}
            {!bearbeiten && (
                <div className="c-aktionen">
                    <Reaktionen art={art} id={b.id} daten={reaktionen} setDaten={setReaktionen} user={user} />
                    {kannLoesen && art === 'beitrag' && !loesung && b.user_id !== user?.id && (
                        <button type="button" className="c-link" onClick={onLoesen}>
                            ✅ Als Lösung markieren
                        </button>
                    )}
                    {eigen && nochBearbeitbar(b.erstellt) && (
                        <button type="button" className="c-link" onClick={() => setBearbeiten(true)}>
                            Bearbeiten
                        </button>
                    )}
                    {eigen && (
                        <button type="button" className="c-link" onClick={() => rpc('eigenes_loeschen', { art_: art, id_: b.id })}>
                            Löschen
                        </button>
                    )}
                    {!eigen && <Melden art={art} id={b.id} user={user} />}
                    {mod && (
                        <button
                            type="button"
                            className="c-link c-mod"
                            onClick={() => rpc('moderieren', { art_: art, id_: b.id, neuer_status: b.status === 'sichtbar' ? 'ausgeblendet' : 'sichtbar', grund_: 'Verstoß gegen die Community-Regeln' })}
                        >
                            {b.status === 'sichtbar' ? 'Ausblenden' : 'Freigeben'}
                        </button>
                    )}
                </div>
            )}
        </article>
    )
}

export default function Thema() {
    const { user, profil } = useKonto()
    const [id, setId] = useState(null)
    const [thema, setThema] = useState(undefined)
    const [beitraege, setBeitraege] = useState([])
    const [kat, setKat] = useState(null)
    const [folgt, setFolgt] = useState(false)
    const mod = profil && ['moderator', 'admin'].includes(profil.rolle)

    // Die ID kommt aus der URL; wechselt sie (etwa über eine Benachrichtigung), wird neu geladen.
    const idParam = useSearchParams().get('id')
    useEffect(() => {
        const i = Number(idParam)
        if (!KONTO_AKTIV || !Number.isInteger(i) || i < 1) return setThema(null)
        setThema(undefined)
        setBeitraege([])
        setId(i)
    }, [idParam])

    const laden = useCallback(async () => {
        if (!id) return
        const sb = await supabase()
        const { data: t } = await sb.from('forum_themen').select(`*, ${AUTOR_FELDER}`).eq('id', id).maybeSingle()
        if (!t) return setThema(null)
        const [{ data: b }, { data: k }] = await Promise.all([
            sb.from('forum_beitraege').select(`id, thema_id, user_id, text, status, erstellt, bearbeitet, ${AUTOR_FELDER}`).eq('thema_id', id).order('erstellt', { ascending: false }).limit(500),
            sb.from('forum_kategorien').select('id, name, emoji').eq('id', t.kategorie_id).maybeSingle(),
        ])
        setThema(t)
        // Die neuesten 500 Antworten, für die Anzeige chronologisch.
        setBeitraege((b || []).reverse())
        setKat(k)
        document.title = `${t.titel} | KI-Forum | AIGeddon`
    }, [id])

    useEffect(() => {
        laden().catch(() => setThema(null))
    }, [laden])

    useEffect(() => {
        if (!user || !id) return
        supabase().then(async (sb) => {
            const { data } = await sb.from('thema_abos').select('thema_id').eq('thema_id', id).eq('user_id', user.id).maybeSingle()
            setFolgt(Boolean(data))
        })
    }, [user, id])

    const [reaktionenT, setReaktionenT] = useReaktionen('thema', id ? [id] : [])
    const [reaktionenB, setReaktionenB] = useReaktionen(
        'beitrag',
        beitraege.map((b) => b.id)
    )

    if (thema === undefined) return <p className="widget-note">Lade Thema …</p>
    if (thema === null)
        return (
            <p>
                Dieses Thema gibt es nicht (mehr). <Link href="/forum">Zurück zum Forum</Link>
            </p>
        )

    const antworten = async (text) => {
        const sb = await supabase()
        const { error } = await sb.from('forum_beitraege').insert({ thema_id: id, text })
        if (error) {
            toast(fehlerText(error), '⚠️')
            return false
        }
        toast('Antwort veröffentlicht. Danke fürs Helfen!', '🙌')
        setFolgt(true)
        laden()
        return true
    }
    const folgen = async () => {
        const sb = await supabase()
        const { error } = folgt ? await sb.from('thema_abos').delete().match({ thema_id: id, user_id: user.id }) : await sb.from('thema_abos').insert({ thema_id: id })
        if (error) return toast(fehlerText(error), '⚠️')
        setFolgt(!folgt)
        toast(folgt ? 'Du folgst dem Thema nicht mehr.' : 'Du bekommst eine Benachrichtigung bei neuen Antworten.', '🔔')
    }
    const verwalten = async (angepinnt, geschlossen) => {
        const sb = await supabase()
        const { error } = await sb.rpc('thema_verwalten', { id_: id, angepinnt_: angepinnt, geschlossen_: geschlossen })
        if (error) return toast(fehlerText(error), '⚠️')
        laden()
    }
    const loesen = async (beitrag) => {
        const sb = await supabase()
        const { error } = await sb.rpc('loesung_markieren', { thema: id, beitrag })
        if (error) return toast(fehlerText(error), '⚠️')
        toast('Als Lösung markiert. Danke für die Rückmeldung!', '✅')
        laden()
    }
    const kannLoesen = user && (thema.user_id === user.id || mod)
    const sortiert = [...beitraege.filter((b) => b.id === thema.geloest_beitrag_id), ...beitraege.filter((b) => b.id !== thema.geloest_beitrag_id)]

    return (
        <>
            <p className="eyebrow">
                <Link href="/forum">KI-Forum</Link>
                {kat && (
                    <>
                        {' '}
                        › <Link href={`/forum/kategorie?k=${kat.id}`}>{`${kat.emoji} ${kat.name}`}</Link>
                    </>
                )}
            </p>
            <h1>
                {thema.angepinnt && '📌 '}
                {thema.geloest_beitrag_id && '✅ '}
                {thema.geschlossen && '🔒 '}
                {thema.titel}
            </h1>
            <div className="f-leiste">
                <span className="widget-note">
                    {thema.antworten} {thema.antworten === 1 ? 'Antwort' : 'Antworten'}
                </span>
                <span>
                    {user && (
                        <button type="button" className="button button-small" aria-pressed={folgt} onClick={folgen}>
                            {folgt ? '🔔 Du folgst' : '🔕 Folgen'}
                        </button>
                    )}{' '}
                    {mod && (
                        <>
                            <button type="button" className="button button-small" onClick={() => verwalten(!thema.angepinnt, thema.geschlossen)}>
                                {thema.angepinnt ? 'Lösen' : 'Anpinnen'}
                            </button>{' '}
                            <button type="button" className="button button-small" onClick={() => verwalten(thema.angepinnt, !thema.geschlossen)}>
                                {thema.geschlossen ? 'Öffnen' : 'Schließen'}
                            </button>
                        </>
                    )}
                </span>
            </div>
            <Beitrag art="thema" b={thema} user={user} mod={mod} reaktionen={reaktionenT} setReaktionen={setReaktionenT} neuLaden={laden} />
            <h2>
                {beitraege.length} {beitraege.length === 1 ? 'Antwort' : 'Antworten'}
            </h2>
            {sortiert.map((b) => (
                <Beitrag
                    key={b.id}
                    art="beitrag"
                    b={b}
                    user={user}
                    mod={mod}
                    reaktionen={reaktionenB}
                    setReaktionen={setReaktionenB}
                    neuLaden={laden}
                    loesung={b.id === thema.geloest_beitrag_id}
                    kannLoesen={kannLoesen}
                    onLoesen={() => loesen(b.id)}
                />
            ))}
            {thema.geschlossen && !mod ? (
                <p className="c-hinweis">🔒 Dieses Thema ist geschlossen.</p>
            ) : (
                <>
                    <h2>Deine Antwort</h2>
                    <Eingabe user={user} pfad={`/forum/thema?id=${id}`} platzhalter="Teile deine Erfahrung oder Lösung …" knopf="Antworten" max={10000} onSenden={antworten} />
                </>
            )}
        </>
    )
}
