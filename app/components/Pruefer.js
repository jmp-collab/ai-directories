import Link from 'next/link'
import { withBase } from '../../lib/site'

// Autorenbox unter redaktionellen Inhalten: wer geschrieben und geprüft hat, wann, und nach welchen Regeln.
export default function Pruefer({ datum }) {
    return (
        <aside className="pruefer" aria-label="Autor und Prüfung">
            <img src={withBase('/jean.jpg')} alt="" width="56" height="56" loading="lazy" />
            <p>
                <strong>Geschrieben und geprüft von </strong>
                <Link href="/ueber-jean">Jean Maurice Port</Link>, SEO-Manager.
                {datum ? ` Alle Angaben mit den Quellen abgeglichen am ${new Date(datum).toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' })}.` : ' Angaben aus offiziellen Quellen, Stand siehe Seite.'}{' '}
                <Link href="/so-pruefen-wir">So prüfen wir →</Link>
            </p>
        </aside>
    )
}
