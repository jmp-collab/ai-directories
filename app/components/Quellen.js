// Quellenblock: externe Belege mit Prüfdatum, Links ohne Weitergabe von Linkkraft.
export default function Quellen({ quellen, geprueft, text }) {
    if (!quellen?.length) return null
    return (
        <section aria-labelledby="quellen" className="quellen-block">
            <h2 id="quellen">Quellen und Stand 🔎</h2>
            <p>
                {text || 'Die Angaben auf dieser Seite wurden mit diesen Quellen abgeglichen'}
                {geprueft ? `, zuletzt am ${new Date(geprueft).toLocaleDateString('de-DE')}.` : '.'}
            </p>
            <ul className="quellen">
                {quellen.map((q) => (
                    <li key={q.url}>
                        <a href={q.url} rel="noopener nofollow" target="_blank">
                            {q.titel}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    )
}
