import Link from 'next/link'
import Jean from './components/Jean'
import { Glueckskeks } from './components/HerzWidgets'

const TIPPS = [
    ['/', '🏠 Zur Startseite', 'Alle KI-Verzeichnisse auf einen Blick'],
    ['/ki-news', '📰 KI-News', 'Was diese Woche wirklich wichtig ist'],
    ['/prompts', '💬 Prompt-Bibliothek', 'Fertige Prompts zum Kopieren'],
    ['/skills', '🧩 KI-Skills', 'Mit einem Klick installiert'],
    ['/ratgeber', '📖 Ratgeber', 'Verständlich erklärt, ohne Fachchinesisch'],
    ['/merkliste', '⭐ Deine Merkliste', 'Alles, was du dir gemerkt hast'],
]

export default function NotFound() {
    return (
        <>
            <section className="hero">
                <p className="error-code">
                    4<span className="nf-geist" aria-hidden="true">👻</span>4
                </p>
                <h1>Dieses Verzeichnis ist im Linkfriedhof gelandet</h1>
                <p className="lead">
                    Die Seite gibt es nicht (mehr). Vielleicht wurde sie umbenannt, aus der Liste geflogen oder hat sich einfach eine Auszeit
                    genommen. Wir haben unter dem Sofa nachgesehen. Nur Staub und ein nofollow-Link. Aber keine Sorge: Du hast dich nicht verlaufen,
                    du bist nur auf einem kleinen Umweg.
                </p>
                <Jean>Ich hab hier auch nichts gefunden. Und ich finde sonst alles, sogar Backlinks auf Seite 7. Nimm einen der Wege unten, die sind frisch geteert.</Jean>
            </section>
            <h2>Hier geht es weiter</h2>
            <ul className="nf-tipps">
                {TIPPS.map(([href, titel, text]) => (
                    <li key={href}>
                        <Link href={href}>
                            {titel}
                            <br />
                            <span className="widget-note">{text}</span>
                        </Link>
                    </li>
                ))}
            </ul>
            <h2>Trostpflaster</h2>
            <p>Wenn schon die Seite fehlt, dann wenigstens ein Glückskeks:</p>
            <Glueckskeks />
        </>
    )
}
