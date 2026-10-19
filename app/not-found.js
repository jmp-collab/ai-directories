import Link from 'next/link'

export default function NotFound() {
    return (
        <section className="hero">
            <p className="error-code">404</p>
            <h1>Dieses Verzeichnis ist im Linkfriedhof gelandet</h1>
            <p className="lead">
                Die Seite gibt es nicht (mehr). Vielleicht wurde sie umbenannt, aus der Liste geflogen oder hat sich einfach
                eine Auszeit genommen. Wir haben unter dem Sofa nachgesehen. Nur Staub und ein nofollow-Link.
            </p>
            <p>
                <Link className="button" href="/">
                    Zurück zu allen KI-Verzeichnissen →
                </Link>
            </p>
        </section>
    )
}
