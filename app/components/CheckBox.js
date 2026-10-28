import { getCheck, CHECK_STAND } from '../../lib/checks'

// Angaben direkt vom Verzeichnis: Freischaltdauer, Link-Typ, Status. Mit Zitat und Quelle.
export default function CheckBox({ slug }) {
    const c = getCheck(slug)
    if (!c) return null
    return (
        <div className={`checkbox${c.status ? ' checkbox-warn' : ''}`}>
            <p className="freshbox-title">
                <strong>Laut Verzeichnis geprüft</strong> · {CHECK_STAND}
            </p>
            {c.status && <p className="kit-warn">⚠️ {c.status}</p>}
            <dl className="legend">
                {c.approval && (
                    <>
                        <dt>Freischaltung</dt>
                        <dd>{c.approval}</dd>
                    </>
                )}
                {c.link_type && (
                    <>
                        <dt>Link-Typ</dt>
                        <dd>{c.link_type}</dd>
                    </>
                )}
            </dl>
            {c.quote && (
                <blockquote className="check-quote" lang="en">
                    „{c.quote}“
                </blockquote>
            )}
            {c.source && (
                <p className="source">
                    Quelle:{' '}
                    <a href={c.source} target="_blank" rel="nofollow noopener noreferrer">
                        {new URL(c.source).hostname.replace(/^www\./, '')}
                    </a>
                </p>
            )}
        </div>
    )
}
