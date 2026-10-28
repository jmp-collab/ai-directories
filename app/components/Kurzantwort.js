// Direktantwort direkt unter der H1: die Hauptfrage der Seite als Überschrift, darunter eine knappe Antwort
// aus den geprüften Daten. So kann Google die Antwort als Snippet übernehmen, und Leser sehen sie sofort.
export default function Kurzantwort({ frage, children }) {
    return (
        <section className="kurzantwort" aria-labelledby="kurzantwort">
            <h2 id="kurzantwort">{frage}</h2>
            <p>{children}</p>
        </section>
    )
}
