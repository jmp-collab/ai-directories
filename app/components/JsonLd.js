// Schema.org-Daten für Suchmaschinen und KI-Crawler. "<" wird escaped, damit kein Name das Script-Tag schließen kann.
export default function JsonLd({ data }) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
        />
    )
}
