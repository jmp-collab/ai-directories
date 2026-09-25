import Link from 'next/link'
import { absoluteUrl } from '../../lib/site'

export default function Breadcrumbs({ items }) {
    return (
        <nav aria-label="Brotkrumen" className="breadcrumbs">
            <ol>
                {items.map((item, i) => (
                    <li key={item.path}>
                        {i < items.length - 1 ? <Link href={item.path}>{item.name}</Link> : <span aria-current="page">{item.name}</span>}
                    </li>
                ))}
            </ol>
        </nav>
    )
}

export const breadcrumbSchema = (items) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
        item: absoluteUrl(item.path),
    })),
})
