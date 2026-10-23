import Link from 'next/link'

// Karten für Tools aus der Datenbank (lib/kb.js) mit Konsens-Abzeichen und Steckbrief-Link.
export default function ToolCards({ tools }) {
    return (
        <ul className="kb-list">
            {tools.map((t) => (
                <li key={t.slug} className={t.konsens === 3 ? 'is-gold' : t.konsens === 2 ? 'is-silver' : ''}>
                    <div className="kb-head">
                        <a href={t.url} target="_blank" rel="nofollow noopener noreferrer">
                            <strong>{t.name}</strong> ↗
                        </a>
                        <span className="kb-badges">
                            {t.konsens === 3 && <span title="In allen 3 Listen">🏆 3/3</span>}
                            {t.konsens === 2 && <span title="In 2 von 3 Listen">🥈 2/3</span>}
                            {t.open_source && <span title="Open Source">🔓</span>}
                        </span>
                    </div>
                    {t.beschreibung && <p lang={t.deutsch ? 'de' : 'en'}>{t.beschreibung}</p>}
                    {t.profil && (
                        <Link className="kb-profil" href={`/tools/${t.profil.slug}`}>
                            🧔 Steckbrief mit Preisen →
                        </Link>
                    )}
                </li>
            ))}
        </ul>
    )
}
