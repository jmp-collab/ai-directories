'use client'

import { useEffect, useMemo, useState } from 'react'
import CopyButton from '../components/CopyButton'

const KEY = 'kiv-launch-kit'

const EMPTY = {
    name: '',
    url: '',
    category: '',
    audience: '',
    benefit: '',
    feature1: '',
    feature2: '',
    feature3: '',
    pricing: 'Freemium',
    hosting: '',
    categoryEn: '',
    audienceEn: '',
    benefitEn: '',
}

const EXAMPLE = {
    name: 'RechnungsRadar',
    url: 'https://rechnungsradar.de',
    category: 'Buchhaltung',
    audience: 'kleine Unternehmen und Selbstständige',
    benefit: 'prüft Rechnungen automatisch auf Fehler',
    feature1: 'erkennt doppelte Rechnungen',
    feature2: 'liest PDFs und Fotos aus',
    feature3: 'exportiert direkt an DATEV',
    pricing: 'Freemium',
    hosting: 'Server in Frankfurt',
    categoryEn: 'accounting',
    audienceEn: 'small businesses and freelancers',
    benefitEn: 'checks invoices for errors automatically',
}

const FIELDS = [
    ['name', 'Name des Tools', 'z. B. RechnungsRadar'],
    ['url', 'Website', 'https://…'],
    ['category', 'Kategorie', 'z. B. Buchhaltung, Texten, Video'],
    ['audience', 'Für wen?', 'z. B. kleine Unternehmen und Selbstständige'],
    ['benefit', 'Was macht es? (ein Satzteil)', 'z. B. prüft Eingangsrechnungen automatisch auf Fehler'],
    ['feature1', 'Funktion 1', 'z. B. erkennt doppelte Rechnungen'],
    ['feature2', 'Funktion 2', ''],
    ['feature3', 'Funktion 3', ''],
    ['hosting', 'Hosting / Datenschutz (optional)', 'z. B. Server in Frankfurt, DSGVO-konform'],
    ['categoryEn', 'Kategorie auf Englisch (optional)', 'z. B. accounting'],
    ['audienceEn', 'Für wen? auf Englisch (optional)', 'z. B. small businesses and freelancers'],
    ['benefitEn', 'Was macht es? auf Englisch (optional)', 'z. B. checks incoming invoices for errors automatically'],
]

const PRICING = {
    Kostenlos: ['kostenlos', 'free'],
    Freemium: ['kostenlos testbar, mit bezahlten Plänen', 'free to start, with paid plans'],
    Kostenpflichtig: ['kostenpflichtig', 'paid'],
}

const cap = (s) => (s ? s[0].toUpperCase() + s.slice(1) : s)

function build(f) {
    const n = f.name || 'Dein Tool'
    const features = [f.feature1, f.feature2, f.feature3].filter(Boolean)
    const [priceDe, priceEn] = PRICING[f.pricing]
    const catEn = (f.categoryEn || '').toLowerCase()
    const audEn = f.audienceEn || 'teams of any size'
    const featDe = features.length ? features.join(', ') : 'spart Zeit bei wiederkehrenden Aufgaben'
    return {
        einzeilerDe: `${n}: ${f.benefit || 'KI-Tool, das Arbeit abnimmt'}`,
        einzeilerEn: f.benefitEn ? `${n}: ${cap(f.benefitEn)}` : `${n}: AI ${catEn ? catEn + ' ' : ''}tool for ${audEn}`,
        kurzDe: `${n} ${f.benefit || 'nimmt dir wiederkehrende Arbeit ab'}. Für ${f.audience || 'Teams jeder Größe'}, ${priceDe}${f.hosting ? `, ${f.hosting}` : ''}.`,
        kurzEn: `${n} ${f.benefitEn || 'takes repetitive work off your plate'}. Built for ${audEn}. ${cap(priceEn)}.`,
        langDe: [
            `${n} ist ein KI-Tool${f.category ? ` für ${f.category}` : ''}, das ${f.benefit || 'wiederkehrende Arbeit abnimmt'}. Es richtet sich an ${f.audience || 'Teams jeder Größe'}, die weniger Zeit mit Routine und mehr Zeit mit ihrer eigentlichen Arbeit verbringen wollen.`,
            `Die wichtigsten Funktionen: ${featDe}.`,
            `${n} ist ${priceDe}.${f.hosting ? ` ${cap(f.hosting)}.` : ''} Ausprobieren unter ${f.url || 'der Website'}.`,
        ].join('\n\n'),
        langEn: [
            `${n} is an AI tool${catEn ? ` for ${catEn}` : ''} built for ${audEn}. It ${f.benefitEn || 'takes repetitive work off your plate'}, so you can focus on what matters.`,
            `Key features: see ${f.url || 'the website'} for the full list.`,
            `${n} is ${priceEn}. Try it at ${f.url || 'the website'}.`,
        ].join('\n\n'),
        tags: [f.category, 'KI', 'AI', 'Automatisierung', f.pricing === 'Kostenlos' ? 'kostenlos' : f.pricing, ...features.slice(0, 2)]
            .filter(Boolean)
            .map((t) => t.toLowerCase())
            .join(', '),
    }
}

function utm(url, slug) {
    if (!url) return ''
    try {
        const u = new URL(url)
        u.searchParams.set('utm_source', slug)
        u.searchParams.set('utm_medium', 'directory')
        u.searchParams.set('utm_campaign', 'launch')
        return u.toString()
    } catch {
        return ''
    }
}

const LIMITS = { einzeilerDe: 60, einzeilerEn: 60, kurzDe: 160, kurzEn: 160 }

const OUTPUTS = [
    ['einzeilerDe', 'Einzeiler (Deutsch)'],
    ['einzeilerEn', 'Tagline (English)'],
    ['kurzDe', 'Kurzbeschreibung (Deutsch)'],
    ['kurzEn', 'Short description (English)'],
    ['langDe', 'Langbeschreibung (Deutsch)'],
    ['langEn', 'Long description (English)'],
    ['tags', 'Tags / Schlagwörter'],
]

export default function LaunchKit({ directories }) {
    const [f, setF] = useState(EXAMPLE)
    const [dir, setDir] = useState('product-hunt')

    useEffect(() => {
        try {
            const saved = JSON.parse(localStorage.getItem(KEY) || 'null')
            setF(saved || EXAMPLE)
        } catch {
            setF(EXAMPLE)
        }
    }, [])

    useEffect(() => {
        try {
            localStorage.setItem(KEY, JSON.stringify(f))
        } catch {
            // Ohne Speicher geht es trotzdem, nur ohne Erinnerung.
        }
    }, [f])

    const out = useMemo(() => build(f), [f])
    const words = out.langDe.split(/\s+/).filter(Boolean).length
    const chosen = directories.find((d) => d.slug === dir)
    const link = utm(f.url, dir)

    return (
        <div className="kit">
            <form className="kit-form" onSubmit={(e) => e.preventDefault()}>
                {FIELDS.map(([key, label, ph]) => (
                    <label key={key}>
                        <span>{label}</span>
                        <input id={`kit-${key}`} value={f[key]} placeholder={ph} onChange={(e) => setF({ ...f, [key]: e.target.value })} />
                    </label>
                ))}
                <label>
                    <span>Preismodell</span>
                    <select id="kit-pricing" value={f.pricing} onChange={(e) => setF({ ...f, pricing: e.target.value })}>
                        {Object.keys(PRICING).map((p) => (
                            <option key={p}>{p}</option>
                        ))}
                    </select>
                </label>
                <p className="kit-actions">
                    <button type="button" className="button button-small" onClick={() => setF(EXAMPLE)}>
                        Beispiel laden
                    </button>
                    <button type="button" className="copy-button" onClick={() => setF(EMPTY)}>
                        Alles leeren
                    </button>
                </p>
            </form>

            <section aria-labelledby="texte" className="kit-out">
                <h2 id="texte">Deine Texte</h2>
                {OUTPUTS.map(([key, label]) => {
                    const text = out[key]
                    const limit = LIMITS[key]
                    const over = limit && text.length > limit
                    return (
                        <div key={key} className="kit-block">
                            <div className="kit-block-head">
                                <strong>{label}</strong>
                                <span className={over ? 'kit-count over' : 'kit-count'}>
                                    {text.length} Zeichen{limit ? ` / max. ${limit}` : ''}
                                    {key === 'langDe' ? ` · ${words} Wörter` : ''}
                                </span>
                                <CopyButton value={text} label="Kopieren" />
                            </div>
                            <p className="kit-text">{text}</p>
                            {over && <p className="kit-warn">Zu lang für viele Formulare. Kürze den Nutzen oder den Namen.</p>}
                        </div>
                    )
                })}
                <p className="kit-hint">
                    Tipp: Die Langbeschreibung sollte 100 bis 300 Wörter haben. Ergänze ein Beispiel aus dem Alltag deiner Nutzer,
                    das macht den Text glaubwürdiger als jedes Adjektiv.
                </p>
            </section>

            <section aria-labelledby="utm" className="kit-out">
                <h2 id="utm">UTM-Link pro Verzeichnis</h2>
                <p>Damit du in deiner Analyse siehst, welches Verzeichnis echte Besucher bringt.</p>
                <label className="kit-utm-select">
                    <span>Verzeichnis</span>
                    <select id="kit-dir" value={dir} onChange={(e) => setDir(e.target.value)}>
                        {directories.map((d) => (
                            <option key={d.slug} value={d.slug}>
                                {d.name}
                            </option>
                        ))}
                    </select>
                </label>
                {link ? (
                    <div className="kit-block">
                        <div className="kit-block-head">
                            <strong>Link für {chosen?.name}</strong>
                            <CopyButton value={link} label="Link kopieren" />
                        </div>
                        <p className="kit-text">
                            <code>{link}</code>
                        </p>
                        {chosen && (
                            <p>
                                <a href={chosen.submission_link} target="_blank" rel="nofollow noopener noreferrer">
                                    Zur Einreichung bei {chosen.name} ↗
                                </a>
                            </p>
                        )}
                    </div>
                ) : (
                    <p className="kit-warn">Trag oben eine gültige Website mit https:// ein.</p>
                )}
            </section>
        </div>
    )
}
