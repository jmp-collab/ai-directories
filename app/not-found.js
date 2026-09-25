import Link from 'next/link'

export default function NotFound() {
    return (
        <section className="hero">
            <h1>Seite nicht gefunden</h1>
            <p className="lead">
                Das Verzeichnis gibt es hier nicht (mehr). Vielleicht wurde es umbenannt oder aus der Liste genommen.
            </p>
            <p>
                <Link href="/">Zu allen KI-Verzeichnissen →</Link>
            </p>
        </section>
    )
}
