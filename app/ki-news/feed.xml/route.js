import { getNews } from '../../../lib/news'
import { SITE_NAME, absoluteUrl } from '../../../lib/site'

// RSS-Feed der KI-News, damit Leser und Feed-Reader neue Meldungen automatisch bekommen.
export const dynamic = 'force-static'

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

export function GET() {
    const items = getNews()
        .map((n) => {
            const url = absoluteUrl(`/ki-news/${n.slug}`)
            const text = [n.description, '', ...n.kurz.map((k) => `• ${k}`)].join('\n')
            return `    <item>
      <title>${esc(n.titel)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(`${n.veroeffentlicht}T08:00:00Z`).toUTCString()}</pubDate>
      <category>${esc(n.thema)}</category>
      <description>${esc(text)}</description>
    </item>`
        })
        .join('\n')
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(`${SITE_NAME}: KI-News`)}</title>
    <link>${absoluteUrl('/ki-news')}</link>
    <atom:link href="${absoluteUrl('/ki-news/feed.xml')}" rel="self" type="application/rss+xml" />
    <description>Aktuelle KI-News auf Deutsch, an offiziellen Quellen geprüft, mit dem, was du jetzt tun solltest.</description>
    <language>de-DE</language>
${items}
  </channel>
</rss>
`
    return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } })
}
