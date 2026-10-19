import { getDirectories, LISTS } from '../lib/data'
import { absoluteUrl } from '../lib/site'

export default function sitemap() {
    const lastModified = new Date()
    return [
        { url: absoluteUrl('/'), lastModified, changeFrequency: 'weekly', priority: 1 },
        { url: absoluteUrl('/quiz'), lastModified, changeFrequency: 'monthly', priority: 0.7 },
        { url: absoluteUrl('/vergleich'), lastModified, changeFrequency: 'monthly', priority: 0.7 },
        { url: absoluteUrl('/ueber-jean'), lastModified, changeFrequency: 'monthly', priority: 0.6 },
        ...Object.keys(LISTS).map((slug) => ({
            url: absoluteUrl(`/liste/${slug}`),
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.8,
        })),
        ...getDirectories().map((d) => ({
            url: absoluteUrl(`/verzeichnis/${d.slug}`),
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.5,
        })),
    ]
}
