'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import useKonto from '../components/useKonto'
import { KONTO_AKTIV, supabase } from '../../lib/konto'
import { AUTOR_FELDER, MELDEGRUENDE, fehlerText, zeitText } from '../../lib/community'
import { toast } from '../../lib/herz'
import Autor from '../components/community/Autor'
import Text from '../components/community/Text'

const TABS = [
    ['meldungen', '🚩 Meldungen'],
    ['pruefen', '⏳ Zur Prüfung'],
    ['sperren', '⛔ Sperren'],
    ['wortfilter', '🔤 Wortfilter'],
    ['protokoll', '📜 Protokoll'],
]
const ZIEL = { kommentar: 'comments', beitrag: 'forum_beitraege', thema: 'forum_themen' }

// Moderationszentrale: nur für die Rollen Moderation und Admin. Die Datenbank prüft die Rolle bei jeder Aktion selbst.
export default function Moderation() {
    const { bereit, user, profil } = useKonto()
    const [tab, setTab] = useState('meldungen')
    const [daten, setDaten] = useState(null)
    const [eingabe, setEingabe] = useState('')
    const mod = profil && ['moderator', 'admin'].includes(profil.rolle)

    const laden = useCallback(async () => {
        const sb = await supabase()
        setDaten(null)
        if (tab === 'meldungen') {
            const { data } = await sb.from('meldungen').select('*').eq('status', 'offen').order('erstellt').limit(100)
            const mitInhalt = await Promise.all(
                (data || []).map(async (m) => {
                    if (!ZIEL[m.ziel_art]) return m
                    const felder = m.ziel_art === 'thema' ? `id, titel, text, status, ${AUTOR_FELDER}` : `id, text, status, ${AUTOR_FELDER}`
                    const { data: inhalt } = await sb.from(ZIEL[m.ziel_art]).select(felder).eq('id', m.ziel_id).maybeSingle()
                    return { ...m, inhalt }
                })
            )
            setDaten(mitInhalt)
        } else if (tab === 'pruefen') {
            const teile = await Promise.all(
                Object.entries(ZIEL).map(async ([art, tabelle]) => {
                    const felder = art === 'thema' ? `id, titel, text, status, erstellt, ${AUTOR_FELDER}` : `id, text, status, erstellt, ${AUTOR_FELDER}`
                    const { data } = await sb.from(tabelle).select(felder).eq('status', 'pruefen').order('erstellt').limit(50)
                    return (data || []).map((d) => ({ ...d, art }))
                })
            )
            setDaten(teile.flat())
        } else if (tab === 'wortfilter') {
            const { data } = await sb.from('wortfilter').select('wort').order('wort')
            setDaten(data || [])
        } else if (tab === 'protokoll') {
            const { data } = await sb.from('moderations_log').select('*').order('zeit', { ascending: false }).limit(100)
            setDaten(data || [])
        } else setDaten([])
    }, [tab])

    useEffect(() => {
        if (mod) laden()
    }, [mod, laden])

    if (!KONTO_AKTIV) return null
    if (!bereit) return <p className="widget-note">Einen Moment …</p>
    if (!user || !mod)
        return (
            <p className="konto-karte">
                Dieser Bereich ist für das Moderationsteam. <Link href="/community-regeln">Zu den Community-Regeln</Link>
            </p>
        )

    const rpc = async (name, args, danke) => {
        const sb = await supabase()
        const { error } = await sb.rpc(name, args)
        if (error) return toast(fehlerText(error), '⚠️')
        toast(danke, '🛡️')
        laden()
    }
    const sperren = async (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const sb = await supabase()
        const { data: p } = await sb.from('profiles').select('id').eq('handle', String(form.get('handle')).replace(/^@/, '').toLowerCase()).maybeSingle()
        if (!p) return toast('Diesen Handle gibt es nicht.', '🤷')
        rpc('sperren', { uid: p.id, tage: Number(form.get('tage')), grund_: String(form.get('grund')) }, 'Gespeichert und protokolliert.')
    }
    const wort = async (e) => {
        e.preventDefault()
        const sb = await supabase()
        const { error } = await sb.from('wortfilter').insert({ wort: eingabe.trim().toLowerCase() })
        if (error) return toast(fehlerText(error), '⚠️')
        setEingabe('')
        laden()
    }
    const wortWeg = async (w) => {
        const sb = await supabase()
        await sb.from('wortfilter').delete().eq('wort', w)
        laden()
    }

    return (
        <>
            <div className="f-sortierung" role="tablist" aria-label="Bereiche">
                {TABS.map(([k, l]) => (
                    <button key={k} type="button" role="tab" aria-selected={tab === k} className={`c-reaktion${tab === k ? ' an' : ''}`} onClick={() => setTab(k)}>
                        {l}
                    </button>
                ))}
            </div>
            {daten === null && <p className="widget-note">Lade …</p>}

            {tab === 'meldungen' && daten && (
                <ul className="mod-liste">
                    {daten.length === 0 && <li className="c-leer">Keine offenen Meldungen. Die Community benimmt sich. 🌈</li>}
                    {daten.map((m) => (
                        <li key={m.id} className="f-beitrag">
                            <p>
                                <strong>{MELDEGRUENDE.find(([k]) => k === m.grund)?.[1]}</strong> · {m.ziel_art} #{m.ziel_id} · {zeitText(m.erstellt)}
                            </p>
                            {m.text && <p className="c-hinweis">„{m.text}“</p>}
                            {m.inhalt ? (
                                <div className="mod-inhalt">
                                    <Autor autor={m.inhalt.autor} />
                                    {m.inhalt.titel && <p className="f-thema-titel">Titel: {m.inhalt.titel}</p>}
                                    <Text text={m.inhalt.text} />
                                    <p className="widget-note">Status: {m.inhalt.status}</p>
                                </div>
                            ) : (
                                <p className="widget-note">Inhalt nicht mehr vorhanden oder ein Profil.</p>
                            )}
                            <p className="konto-links">
                                {m.inhalt && m.inhalt.status === 'sichtbar' && (
                                    <button
                                        type="button"
                                        className="button button-small konto-rot"
                                        onClick={() =>
                                            rpc('meldung_ausblenden', { id_: m.id, entscheidung_: 'Der Inhalt wurde ausgeblendet. Danke für deine Meldung!' }, 'Ausgeblendet und erledigt.')
                                        }
                                    >
                                        Ausblenden und erledigen
                                    </button>
                                )}
                                <button
                                    type="button"
                                    className="button button-small"
                                    onClick={() => rpc('meldung_entscheiden', { id_: m.id, status_: 'abgelehnt', entscheidung_: 'Wir haben keinen Verstoß gegen die Regeln gefunden.' }, 'Meldung abgelehnt.')}
                                >
                                    Kein Verstoß
                                </button>
                            </p>
                        </li>
                    ))}
                </ul>
            )}

            {tab === 'pruefen' && daten && (
                <ul className="mod-liste">
                    {daten.length === 0 && <li className="c-leer">Nichts zu prüfen.</li>}
                    {daten.map((d) => (
                        <li key={`${d.art}-${d.id}`} className="f-beitrag">
                            <p className="widget-note">
                                {d.art} #{d.id} · {zeitText(d.erstellt)}
                            </p>
                            <Autor autor={d.autor} />
                            {d.titel && <p className="f-thema-titel">Titel: {d.titel}</p>}
                            <Text text={d.text} />
                            <p className="konto-links">
                                <button type="button" className="button button-small" onClick={() => rpc('moderieren', { art_: d.art, id_: d.id, neuer_status: 'sichtbar', grund_: 'Geprüft' }, 'Freigegeben.')}>
                                    Freigeben
                                </button>
                                <button
                                    type="button"
                                    className="button button-small konto-rot"
                                    onClick={() => rpc('moderieren', { art_: d.art, id_: d.id, neuer_status: 'ausgeblendet', grund_: 'Verstoß gegen die Community-Regeln' }, 'Ausgeblendet.')}
                                >
                                    Ausblenden
                                </button>
                            </p>
                        </li>
                    ))}
                </ul>
            )}

            {tab === 'sperren' && (
                <form className="profil-editor" onSubmit={sperren}>
                    <fieldset>
                        <legend>Schreiben sperren oder entsperren</legend>
                        <label>
                            Handle
                            <input name="handle" required placeholder="@handle" />
                        </label>
                        <label>
                            Dauer
                            <select name="tage" defaultValue="7">
                                <option value="1">1 Tag</option>
                                <option value="7">7 Tage</option>
                                <option value="30">30 Tage</option>
                                <option value="3650">Dauerhaft</option>
                                <option value="0">Entsperren</option>
                            </select>
                        </label>
                        <label>
                            Begründung (geht an die Person)
                            <input name="grund" required maxLength={300} />
                        </label>
                        <button type="submit" className="button">
                            Speichern
                        </button>
                    </fieldset>
                </form>
            )}

            {tab === 'wortfilter' && daten && (
                <>
                    <p>Beiträge mit diesen Wörtern (oder mehr als 3 Links) gehen erst in die Prüfung, statt sofort sichtbar zu sein.</p>
                    <form className="f-suche" onSubmit={wort}>
                        <label className="sr-only" htmlFor="neues-wort">
                            Neues Wort
                        </label>
                        <input id="neues-wort" value={eingabe} minLength={2} maxLength={60} onChange={(e) => setEingabe(e.target.value)} placeholder="Wort hinzufügen" />
                        <button type="submit" className="button button-small">
                            Hinzufügen
                        </button>
                    </form>
                    <ul className="merk-verlauf">
                        {daten.map((w) => (
                            <li key={w.wort}>
                                <button type="button" className="c-reaktion" onClick={() => wortWeg(w.wort)} aria-label={`${w.wort} entfernen`}>
                                    {w.wort} ✕
                                </button>
                            </li>
                        ))}
                    </ul>
                </>
            )}

            {tab === 'protokoll' && daten && (
                <table className="mod-tabelle">
                    <thead>
                        <tr>
                            <th>Zeit</th>
                            <th>Aktion</th>
                            <th>Ziel</th>
                            <th>Grund</th>
                        </tr>
                    </thead>
                    <tbody>
                        {daten.map((l) => (
                            <tr key={l.id}>
                                <td>{new Date(l.zeit).toLocaleString('de-DE')}</td>
                                <td>{l.aktion}</td>
                                <td>
                                    {l.ziel_art} {l.ziel_id.slice(0, 12)}
                                </td>
                                <td>{l.grund}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    )
}
