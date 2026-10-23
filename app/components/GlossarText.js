import Link from 'next/link'
import { glossarTeile } from '../../lib/autolink'

// Fließtext mit Glossar-Links beim ersten Vorkommen eines Fachbegriffs. gesehen wird über die Seite geteilt.
export default function GlossarText({ text, gesehen, ausser }) {
    return glossarTeile(text, gesehen, ausser).map((t, i) =>
        typeof t === 'string' ? (
            t
        ) : (
            <Link key={i} href={`/glossar/${t.slug}`} className="glossar-link" title="Im KI-Glossar erklärt">
                {t.text}
            </Link>
        )
    )
}
