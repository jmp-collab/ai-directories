'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import useKonto from '../components/useKonto'
import useLaunch from '../components/useLaunch'
import { KONTO_AKTIV } from '../../lib/konto'
import { STATUS, heute, lokaleHaekchen, setzeLaunch, uebernehmeLokal } from '../../lib/launch'
import { submitRel } from '../../lib/monetization'
import { toast } from '../../lib/herz'

const FILTER = [['alle', 'Alle'], ['offen', 'Noch offen'], ...STATUS.map(([k, name]) => [k, name]), ['faellig', 'Erinnerung fällig']]
const STATUS_NAME = Object.fromEntries(STATUS.map(([k, name, emoji]) => [k, `${emoji} ${name}`]))

function Zeile({ v, e, uid }) {
    const [notiz, setNotiz] = useState(e?.notiz || '')
    const speichern = async (felder) => {
        const ok = await setzeLaunch(uid, v.slug, felder)
        if (!ok) toast('Das hat nicht geklappt. Bitte versuch es noch einmal.', '⚠️')
    }
    const faellig = e?.erinnerung && e.erinnerung <= heute() && e.status !== 'live'
    return (
        <li className={`lt-zeile status-${e?.status || 'offen'}${faellig ? ' lt-faellig' : ''}`}>
            <div className="lt-kopf">
                <Link href={`/verzeichnis/${v.slug}`} className="lt-name">
                    {v.name}
                </Link>
                <span className="widget-note">DR {v.domain_rating}</span>
                <a href={v.submission_link} target="_blank" rel={submitRel(v)} className="c-link">
                    Einreichen ↗{v.affiliate && <sup title="Partnerlink: Wir erhalten ggf. eine Provision.">*</sup>}
                </a>
            </div>
            <div className="lt-felder">
                <label>
                    Status
                    <select value={e?.status || ''} onChange={(ev) => speichern({ status: ev.target.value || 'geplant' })}>
                        {!e && <option value="">Noch offen</option>}
                        {STATUS.map(([k, name, emoji]) => (
                            <option key={k} value={k}>
                                {emoji} {name}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Erinnerung
                    <input type="date" value={e?.erinnerung || ''} min="2020-01-01" max="2100-12-31" onChange={(ev) => speichern({ erinnerung: ev.target.value || null })} />
                </label>
                <label className="lt-notiz">
                    Notiz
                    <input
                        value={notiz}
                        maxLength={500}
                        placeholder="z. B. Login, Antwort abwarten, Preis"
                        onChange={(ev) => setNotiz(ev.target.value)}
                        onBlur={() => notiz !== (e?.notiz || '') && speichern({ notiz })}
                    />
                </label>
            </div>
            {faellig && <p className="lt-hinweis">⏰ Erinnerung fällig seit {new Date(e.erinnerung).toLocaleDateString('de-DE')}</p>}
        </li>
    )
}

export default function LaunchTracker({ verzeichnisse }) {
    const { bereit: kontoBereit, user } = useKonto()
    const launch = useLaunch()
    const [filter, setFilter] = useState('alle')
    const [suche, setSuche] = useState('')
    const erlaubt = useMemo(() => new Set(verzeichnisse.map((v) => v.slug)), [verzeichnisse])

    const zahlen = useMemo(() => {
        const z = { offen: 0, faellig: 0 }
        STATUS.forEach(([k]) => (z[k] = 0))
        const h = heute()
        verzeichnisse.forEach((v) => {
            const e = launch.eintraege.get(v.slug)
            if (!e) z.offen++
            else {
                z[e.status]++
                if (e.erinnerung && e.erinnerung <= h && e.status !== 'live') z.faellig++
            }
        })
        return z
    }, [verzeichnisse, launch.eintraege])

    const liste = useMemo(() => {
        const q = suche.trim().toLowerCase()
        const h = heute()
        return verzeichnisse.filter((v) => {
            const e = launch.eintraege.get(v.slug)
            if (q && !v.name.toLowerCase().includes(q)) return false
            if (filter === 'alle') return true
            if (filter === 'offen') return !e
            if (filter === 'faellig') return e?.erinnerung && e.erinnerung <= h && e.status !== 'live'
            return e?.status === filter
        })
    }, [verzeichnisse, launch.eintraege, filter, suche])

    if (!KONTO_AKTIV)
        return (
            <p className="konto-karte">
                Der Launch-Tracker mit Konto ist gerade in Vorbereitung. Bis dahin kannst du Verzeichnisse in der <Link href="/#alle">Tabelle auf der Startseite</Link> abhaken.
            </p>
        )
    if (!kontoBereit) return <p className="widget-note">Einen Moment …</p>
    if (!user)
        return (
            <div className="konto-karte">
                <p className="konto-gross">Mit Konto wird aus der Liste dein Launch-Plan</p>
                <ul className="konto-vorteile">
                    <li>📨 Status je Verzeichnis: geplant, eingereicht, live oder abgelehnt</li>
                    <li>📝 Notizen, etwa Login, Ansprechpartner oder Preis</li>
                    <li>⏰ Erinnerungsdatum zum Nachhaken</li>
                    <li>📄 Export als CSV, auf allen Geräten verfügbar</li>
                </ul>
                <p className="konto-links">
                    <Link className="button" href="/anmelden?zurueck=/launch-tracker">
                        Kostenlos anmelden
                    </Link>
                    <Link className="button button-small" href="/#alle">
                        Ohne Konto in der Tabelle abhaken
                    </Link>
                </p>
                {lokaleHaekchen().length > 0 && <p className="widget-note">Deine {lokaleHaekchen().length} Häkchen aus diesem Browser kannst du nach der Anmeldung mit einem Klick übernehmen.</p>}
            </div>
        )
    if (!launch.aktiv || !launch.bereit) return <p className="widget-note">Lade deinen Launch-Tracker …</p>
    if (launch.fehler) return <p className="konto-karte">Dein Launch-Tracker konnte gerade nicht geladen werden. Bitte lade die Seite neu.</p>

    const offenLokal = lokaleHaekchen().filter((s) => erlaubt.has(s) && !launch.eintraege.has(s)).length
    const uebernehmen = async () => {
        const n = await uebernehmeLokal(launch.uid, erlaubt)
        toast(n > 0 ? `${n} Häkchen übernommen. Sie stehen jetzt als „Eingereicht“ im Tracker.` : n < 0 ? 'Das hat nicht geklappt. Bitte versuch es noch einmal.' : 'Alles schon da.', n < 0 ? '⚠️' : '☁️')
    }
    const exportieren = () => {
        const zeilen = [['Verzeichnis', 'Website', 'Einreichung', 'Status', 'Erinnerung', 'Notiz', 'Geändert']]
        verzeichnisse.forEach((v) => {
            const e = launch.eintraege.get(v.slug)
            zeilen.push([v.name, v.link, v.submission_link, e ? STATUS.find(([k]) => k === e.status)?.[1] : 'Offen', e?.erinnerung || '', e?.notiz || '', e?.aktualisiert ? e.aktualisiert.slice(0, 10) : ''])
        })
        const csv = zeilen.map((r) => r.map((x) => `"${String(x).replace(/"/g, '""')}"`).join(';')).join('\n')
        const url = URL.createObjectURL(new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8' }))
        const a = document.createElement('a')
        a.href = url
        a.download = 'aigeddon-launch-tracker.csv'
        a.click()
        URL.revokeObjectURL(url)
    }

    return (
        <>
            <ul className="lt-zahlen" aria-label="Überblick">
                {STATUS.map(([k, name, emoji]) => (
                    <li key={k}>
                        <strong>{zahlen[k]}</strong> {emoji} {name}
                    </li>
                ))}
                <li>
                    <strong>{zahlen.offen}</strong> Noch offen
                </li>
            </ul>
            {zahlen.faellig > 0 && (
                <p className="lt-hinweis">
                    ⏰ {zahlen.faellig} {zahlen.faellig === 1 ? 'Erinnerung ist' : 'Erinnerungen sind'} fällig.{' '}
                    <button type="button" className="c-link" onClick={() => setFilter('faellig')}>
                        Anzeigen
                    </button>
                </p>
            )}
            {offenLokal > 0 && (
                <p className="konto-karte">
                    {offenLokal === 1
                        ? 'In diesem Browser hast du 1 Verzeichnis abgehakt, das noch nicht im Konto steht.'
                        : `In diesem Browser hast du ${offenLokal} Verzeichnisse abgehakt, die noch nicht im Konto stehen.`}{' '}
                    <button type="button" className="button button-small" onClick={uebernehmen}>
                        Ins Konto übernehmen
                    </button>
                </p>
            )}
            <div className="f-leiste">
                <label className="f-suche">
                    <span className="sr-only">Verzeichnis suchen</span>
                    <input type="search" value={suche} placeholder="Verzeichnis suchen …" onChange={(e) => setSuche(e.target.value)} />
                </label>
                <button type="button" className="button button-small" onClick={exportieren}>
                    Als CSV exportieren
                </button>
            </div>
            <div className="f-sortierung" role="group" aria-label="Filter">
                {FILTER.map(([k, name]) => (
                    <button key={k} type="button" className={`c-reaktion${filter === k ? ' an' : ''}`} aria-pressed={filter === k} onClick={() => setFilter(k)}>
                        {name}
                    </button>
                ))}
            </div>
            {liste.length === 0 ? (
                <p className="c-leer">Hier ist gerade nichts. {filter !== 'alle' && 'Probier einen anderen Filter.'}</p>
            ) : (
                <ul className="lt-liste">
                    {liste.map((v) => (
                        <Zeile key={v.slug} v={v} e={launch.eintraege.get(v.slug)} uid={launch.uid} />
                    ))}
                </ul>
            )}
            <p className="widget-note">
                Häkchen in der Tabelle auf der Startseite setzen hier den Status „{STATUS_NAME.eingereicht}“. Partnerlinks sind mit * markiert (<Link href="/transparenz">Transparenz</Link>).
            </p>
        </>
    )
}
