// Zentrale Site-Konfiguration. Produktiv-Domain über NEXT_PUBLIC_SITE_URL setzen, sonst stimmen Canonicals und Sitemap nicht.
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL

export const SITE_URL = (
    process.env.NEXT_PUBLIC_SITE_URL || (vercelUrl ? `https://${vercelUrl}` : 'http://localhost:3000')
).replace(/\/$/, '')

export const SITE_NAME = 'KI-Verzeichnisse'
export const REPO_URL = 'https://github.com/jmp-collab/ai-directories'

export const absoluteUrl = (path = '/') => `${SITE_URL}${path}`

// Pfad zu Dateien aus public/ und Routen außerhalb von <Link>, mit Unterpfad der statischen Fassung.
export const withBase = (path) => `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${path}`
