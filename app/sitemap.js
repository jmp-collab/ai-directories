import { getDirectories, LISTS } from '../lib/data'
import { absoluteUrl } from '../lib/site'
import { ARTIKEL } from '../lib/ratgeber'
import { getTools } from '../lib/tools'
import { getComparisons } from '../lib/comparisons'
import { getPrompts } from '../lib/prompts'
import { getTutorials } from '../lib/tutorials'
import { getKbRubriken } from '../lib/kb'
import { getTestKategorien } from '../lib/kitests'
import { RECHNER } from '../lib/rechner'

export default function sitemap() {
    const lastModified = new Date()
    return [
        { url: absoluteUrl('/'), lastModified, changeFrequency: 'weekly', priority: 1 },
        ...['/deutsche-ki-verzeichnisse', '/launch-kit', '/ratgeber', '/glossar', '/freischaltung', '/werben', '/transparenz', '/tools', '/tool-vergleiche', '/top-50', '/prompts', '/prompt-baukasten', '/prompt-check', '/tutorials', '/downloads', '/downloads/prompt-spickzettel', '/ki-tools', '/ki-tools/quellen', '/prompts/archiv', '/ki-test', '/rechner'].map((path) => ({
            url: absoluteUrl(path),
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        })),
        ...ARTIKEL.map((a) => ({ url: absoluteUrl(`/ratgeber/${a.slug}`), lastModified, changeFrequency: 'monthly', priority: 0.7 })),
        { url: absoluteUrl('/quiz'), lastModified, changeFrequency: 'monthly', priority: 0.7 },
        { url: absoluteUrl('/vergleich'), lastModified, changeFrequency: 'monthly', priority: 0.7 },
        { url: absoluteUrl('/ueber-jean'), lastModified, changeFrequency: 'monthly', priority: 0.6 },
        ...Object.keys(LISTS).map((slug) => ({
            url: absoluteUrl(`/liste/${slug}`),
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.8,
        })),
        ...getComparisons().map((c) => ({ url: absoluteUrl(`/tool-vergleiche/${c.slug}`), lastModified, changeFrequency: 'monthly', priority: 0.7 })),
        ...RECHNER.map((r) => ({ url: absoluteUrl(`/rechner/${r.slug}`), lastModified, changeFrequency: 'monthly', priority: 0.8 })),
        ...getTestKategorien().map((k) => ({ url: absoluteUrl(`/ki-test/${k.key}`), lastModified, changeFrequency: 'monthly', priority: 0.7 })),
        ...getKbRubriken().map((r) => ({ url: absoluteUrl(`/ki-tools/${r.key}`), lastModified, changeFrequency: 'weekly', priority: 0.8 })),
        ...getTutorials().map((t) => ({ url: absoluteUrl(`/tutorials/${t.slug}`), lastModified, changeFrequency: 'monthly', priority: 0.8 })),
        ...getPrompts().map((p) => ({ url: absoluteUrl(`/prompts/${p.slug}`), lastModified, changeFrequency: 'monthly', priority: 0.7 })),
        ...getTools().map((t) => ({ url: absoluteUrl(`/tools/${t.slug}`), lastModified, changeFrequency: 'monthly', priority: 0.6 })),
        ...getDirectories().map((d) => ({
            url: absoluteUrl(`/verzeichnis/${d.slug}`),
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.5,
        })),
    ]
}
