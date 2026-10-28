// FAQ als <details>, damit der Text im HTML steht (crawlbar) und trotzdem aufklappbar ist.
// Einträge als { q, a } oder als [frage, antwort].
const norm = (items) => items.map((i) => (Array.isArray(i) ? { q: i[0], a: i[1] } : i))

export default function Faq({ items }) {
    return (
        <div className="faq">
            {norm(items).map((item) => (
                <details key={item.q}>
                    <summary>
                        <h3>{item.q}</h3>
                    </summary>
                    <p>{item.a}</p>
                </details>
            ))}
        </div>
    )
}

export const faqSchema = (items) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: norm(items).map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
})
