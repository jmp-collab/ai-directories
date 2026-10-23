// Alles, was Leads oder Umsatz bringt, an einer Stelle. Leere Werte blenden den zugehörigen Baustein aus
// oder fallen auf den YouTube-Kanal zurück, damit keine Seite einen toten Link zeigt.

export const YOUTUBE_URL = 'https://www.youtube.com/@AIGeddon'
export const YOUTUBE_SUBSCRIBE_URL = `${YOUTUBE_URL}?sub_confirmation=1`

// Substack-Adresse des Newsletters, z. B. 'https://aigeddon.substack.com'. Leer = YouTube-Abo als Ersatz.
export const NEWSLETTER_URL = process.env.NEXT_PUBLIC_NEWSLETTER_URL || ''

// Postfach für Werbe-, Featured- und Service-Anfragen. Leer = Angebotsseite ohne Kontaktbutton.
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || ''

// Partnerlinks der Verzeichnisse: slug -> Affiliate-URL. Erst eintragen, wenn das Programm freigeschaltet ist.
export const AFFILIATES = {}

// Partnerlinks sind bezahlte Links: rel="sponsored" statt nur nofollow.
export const submitRel = (d) => (d.affiliate ? 'sponsored noopener noreferrer' : 'nofollow noopener noreferrer')

export const mailto = (subject) => (CONTACT_EMAIL ? `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}` : null)

// Partnerlinks der Werkzeuge im Tool-Verzeichnis: slug (wie in db/tools.json) -> Affiliate-URL.
export const TOOL_AFFILIATES = {}

// Werkzeuge, die Gründer für den Launch brauchen. `affiliate` erst setzen, wenn das Partnerkonto freigeschaltet ist;
// bis dahin zeigt die Karte die normale Website ohne Werbekennzeichnung.
export const TOOL_PARTNERS = [
    { name: 'Semrush', use: 'Keywords, Wettbewerb und Backlinks prüfen, bevor du launchst', url: 'https://www.semrush.com/', affiliate: '' },
    { name: 'Systeme.io', use: 'Landingpage, Funnel, E-Mail und Kurs in einem, mit Gratis-Tarif', url: 'https://systeme.io/', affiliate: '' },
    { name: 'beehiiv', use: 'Newsletter für deine ersten Nutzer, mit Empfehlungsprogramm', url: 'https://www.beehiiv.com/', affiliate: '' },
    { name: 'Kit', use: 'E-Mail-Marketing für Creator und kleine SaaS-Teams', url: 'https://kit.com/', affiliate: '' },
    { name: 'Framer', use: 'Schöne Launch-Seite ohne Entwickler', url: 'https://www.framer.com/', affiliate: '' },
    { name: 'Webflow', use: 'Website mit CMS für Blog, Changelog und Docs', url: 'https://webflow.com/', affiliate: '' },
    { name: 'Make', use: 'Einreichungen, Leads und Follow-ups automatisieren', url: 'https://www.make.com/', affiliate: '' },
    { name: 'n8n', use: 'Automatisierung mit KI-Agenten, selbst hostbar', url: 'https://n8n.io/', affiliate: '' },
    { name: 'ElevenLabs', use: 'Voiceover für Demo-Videos und Product-Hunt-Clips', url: 'https://elevenlabs.io/', affiliate: '' },
    { name: 'Surfer SEO', use: 'Launch-Artikel und Landingpages auf Rankings trimmen', url: 'https://surferseo.com/', affiliate: '' },
]
