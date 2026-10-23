import { NEWSLETTER_URL, YOUTUBE_SUBSCRIBE_URL } from '../../lib/monetization'

// Lead-Baustein für jede Seite: Newsletter, solange keiner hinterlegt ist der YouTube-Kanal.
export default function LeadBox({ title, text }) {
    const hasNewsletter = Boolean(NEWSLETTER_URL)
    return (
        <aside className="leadbox" aria-label={hasNewsletter ? 'Newsletter abonnieren' : 'YouTube-Kanal abonnieren'}>
            <p className="leadbox-title">{title || (hasNewsletter ? 'Das AIGeddon Briefing ☢️' : 'AIGeddon auf YouTube ☢️')}</p>
            <p>
                {text ||
                    (hasNewsletter
                        ? 'Neue KI-Verzeichnisse, gesperrte Einreichungen und Launch-Tricks, bevor sie hier stehen. Einmal pro Woche, jederzeit kündbar.'
                        : 'KI-Tools, Launches und der ganz normale KI-Wahnsinn als Video. Abonnieren, bevor die Maschinen es tun.')}
            </p>
            <a
                className="button"
                href={hasNewsletter ? `${NEWSLETTER_URL.replace(/\/$/, '')}/subscribe` : YOUTUBE_SUBSCRIBE_URL}
                target="_blank"
                rel="noopener"
            >
                {hasNewsletter ? 'Kostenlos abonnieren →' : 'Kanal abonnieren →'}
            </a>
        </aside>
    )
}
