import Link from 'next/link'

// Hinweis auf den Launch-Service dort, wo Gründer merken, wie viel Arbeit Einträge sind.
export default function ServiceHint({ text = 'Keine Lust, 50 Formulare auszufüllen?' }) {
    return (
        <p className="service-hint">
            <strong>{text}</strong> Wir tragen dein Tool in die passenden Verzeichnisse ein, mit Texten, Screenshots und
            Protokoll. <Link href="/werben">Launch-Service ansehen →</Link>
        </p>
    )
}
