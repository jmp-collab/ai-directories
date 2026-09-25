// FAQ als <details>, damit der Text im HTML steht (crawlbar) und trotzdem aufklappbar ist.
export default function Faq({ items }) {
    return (
        <div className="faq">
            {items.map((item) => (
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
    mainEntity: items.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
})
