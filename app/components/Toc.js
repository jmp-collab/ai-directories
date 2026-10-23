// Inhaltsverzeichnis als klebende Chip-Leiste für lange Pillar-Seiten.
export default function Toc({ items }) {
    return (
        <nav className="toc" aria-label="Inhalt">
            <span className="toc-label">Inhalt</span>
            {items.map(([id, label]) => (
                <a key={id} href={`#${id}`}>
                    {label}
                </a>
            ))}
        </nav>
    )
}
