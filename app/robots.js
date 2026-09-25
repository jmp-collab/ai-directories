import { absoluteUrl } from '../lib/site'

// KI-Crawler sind ausdrücklich erwünscht: Die Seite soll in ChatGPT, Perplexity, Claude und Google AI Overviews zitiert werden.
export default function robots() {
    return {
        rules: [{ userAgent: '*', allow: '/' }],
        sitemap: absoluteUrl('/sitemap.xml'),
    }
}
