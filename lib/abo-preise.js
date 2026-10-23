// Abo-Preise für den Rechner „Monatlich oder jährlich?“. Nur Tools, für die db/tools.json (laut Anbieter)
// sowohl einen Monatspreis bei monatlicher Zahlung als auch einen Monatspreis bei jährlicher Zahlung nennt.
// Werte in US-Dollar pro Monat, Quelle: Feld price_from des jeweiligen Steckbriefs.
export const ABO_PREISE = [
    { slug: 'claude', name: 'Claude', plan: 'Pro', monatlich: 20, jaehrlich: 17 },
    { slug: 'midjourney', name: 'Midjourney', plan: 'Basic', monatlich: 10, jaehrlich: 8 },
    { slug: 'runway', name: 'Runway', plan: 'Standard', monatlich: 15, jaehrlich: 12 },
    { slug: 'descript', name: 'Descript', plan: 'Hobbyist', monatlich: 24, jaehrlich: 16 },
    { slug: 'heygen', name: 'HeyGen', plan: 'Creator', monatlich: 29, jaehrlich: 24 },
    { slug: 'otter-ai', name: 'Otter.ai', plan: 'Pro', monatlich: 16.99, jaehrlich: 8.49 },
    { slug: 'elevenlabs', name: 'ElevenLabs', plan: 'Starter', monatlich: 6, jaehrlich: 5 },
    { slug: 'wordtune', name: 'Wordtune', plan: 'Advanced', monatlich: 6.99, jaehrlich: 4.89 },
]

// Ab wie vielen Monaten Nutzung lohnt sich das Jahresabo? (12 × Jahrespreis pro Monat) / Monatspreis, aufgerundet.
export const breakEvenMonate = (a) => Math.ceil((12 * a.jaehrlich) / a.monatlich - 1e-9)
