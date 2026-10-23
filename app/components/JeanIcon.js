// Jean als Icon-Familie: derselbe Kopf (Glatze, roter Bart), wahlweise mit Sonnenbrille wie auf dem Foto,
// dazu ein Abzeichen unten rechts, das zeigt, worum es geht. Reines SVG, keine Bilddateien.

const SKIN = '#f4c8ac'
const EAR = '#efbb9c'
const BEARD = '#c4581f'
const BEARD_DARK = '#b54d18'
const INK = '#1b1b1f'

function Face({ cool }) {
    return (
        <g>
            <ellipse cx="9" cy="31" rx="4.5" ry="6.5" fill={EAR} />
            <ellipse cx="47" cy="31" rx="4.5" ry="6.5" fill={EAR} />
            <ellipse cx="28" cy="28" rx="19" ry="22" fill={SKIN} />
            <ellipse cx="21" cy="12" rx="7" ry="3.2" fill="#fff" opacity=".5" />
            <path d="M10 30c0 15 8 25 18 25s18-10 18-25c-2 6-5 9-8 9H18c-3 0-6-3-8-9z" fill={BEARD} />
            <path d="M20 38c4-3 12-3 16 0-3 1.6-13 1.6-16 0z" fill={BEARD_DARK} />
            <path d="M23.5 44c3 2 6 2 9 0" stroke="#7a2f0c" strokeWidth="1.8" fill="none" strokeLinecap="round" />
            {cool ? (
                <g>
                    <path d="M13 25h12c1 0 2 1 2 2v2.5c0 3-2.2 5-5 5h-4.2c-2.8 0-4.8-2.2-4.8-5z" fill={INK} />
                    <path d="M31 25h12v4.5c0 2.8-2 5-4.8 5H34c-2.8 0-5-2-5-5V27c0-1 1-2 2-2z" fill={INK} />
                    <path d="M27 27h2" stroke={INK} strokeWidth="2" />
                    <path d="M15.5 27.5l4 0M33.5 27.5l4 0" stroke="#fff" strokeWidth="1.2" opacity=".6" strokeLinecap="round" />
                </g>
            ) : (
                <g>
                    <path d="M15 22c3-2 7-2 10-.5M31 21.5c3-1.5 7-1.5 10 .5" stroke={BEARD} strokeWidth="2.2" fill="none" strokeLinecap="round" />
                    <ellipse cx="20.5" cy="28" rx="3.2" ry="2.6" fill="#fff" />
                    <ellipse cx="35.5" cy="28" rx="3.2" ry="2.6" fill="#fff" />
                    <circle cx="21.2" cy="28.4" r="1.8" fill="#4d4c2a" />
                    <circle cx="36.2" cy="28.4" r="1.8" fill="#4d4c2a" />
                </g>
            )}
        </g>
    )
}

// Abzeichen: Kreis unten rechts mit Symbol.
const BADGES = {
    lupe: (
        <g stroke={INK} strokeWidth="2.4" fill="none" strokeLinecap="round">
            <circle cx="49" cy="49" r="4.5" fill="#fff" />
            <path d="M52.3 52.3l4 4" />
        </g>
    ),
    deal: (
        <g>
            <path d="M43 45.5v-4h7.5l7 7-6.5 6.5-7-7z" fill="#fff" stroke={INK} strokeWidth="1.8" strokeLinejoin="round" />
            <circle cx="46.5" cy="45" r="1.3" fill={INK} />
        </g>
    ),
    post: (
        <g>
            <rect x="41" y="44" width="16" height="11" rx="2" fill="#fff" stroke={INK} strokeWidth="1.8" />
            <path d="M41.8 45l7.2 5.4 7.2-5.4" stroke={INK} strokeWidth="1.8" fill="none" strokeLinejoin="round" />
        </g>
    ),
    play: (
        <g>
            <rect x="40.5" y="43" width="17" height="12" rx="3.5" fill="#e0262c" stroke={INK} strokeWidth="1.6" />
            <path d="M47.5 46v6l5-3z" fill="#fff" />
        </g>
    ),
    werkzeug: (
        <path
            d="M55.8 44.2a4.6 4.6 0 0 1-6 5.6l-6.2 6.2a1.8 1.8 0 0 1-2.6-2.6l6.2-6.2a4.6 4.6 0 0 1 5.6-6l-2.8 2.8 1.2 2.4 2.4 1.2z"
            fill="#fff"
            stroke={INK}
            strokeWidth="1.6"
            strokeLinejoin="round"
        />
    ),
    strahlung: (
        <g>
            <path d="M49 49l-3.6-6.2a7.2 7.2 0 0 1 7.2 0zM49 49l7.2 0a7.2 7.2 0 0 1-3.6 6.2zM49 49l-3.6 6.2a7.2 7.2 0 0 1-3.6-6.2z" fill={INK} />
            <circle cx="49" cy="49" r="1.8" fill="#ffe14d" stroke={INK} strokeWidth="1" />
        </g>
    ),
    pokal: (
        <g stroke={INK} strokeWidth="1.6" strokeLinejoin="round">
            <path d="M44 42h10v4a5 5 0 0 1-10 0z" fill="#ffe14d" />
            <path d="M44 43.5h-2.5a3 3 0 0 0 3 3.5M54 43.5h2.5a3 3 0 0 1-3 3.5" fill="none" />
            <path d="M49 51v3M45.5 56h7" fill="none" strokeLinecap="round" />
        </g>
    ),
    rakete: (
        <g stroke={INK} strokeWidth="1.5" strokeLinejoin="round">
            <path d="M49 40c4 3 5 8 3.5 12.5h-7C44 48 45 43 49 40z" fill="#fff" />
            <circle cx="49" cy="46" r="1.6" fill="#6ee7b7" />
            <path d="M46 55l-1.5 2.5M52 55l1.5 2.5M49 55v3" stroke="#e0262c" strokeWidth="1.8" strokeLinecap="round" />
        </g>
    ),
    herz: <path d="M49 57s-7.5-4.6-7.5-9.4a3.9 3.9 0 0 1 7.5-1.6 3.9 3.9 0 0 1 7.5 1.6C56.5 52.4 49 57 49 57z" fill="#e0262c" stroke={INK} strokeWidth="1.5" />,
    tattoo: (
        <g stroke={INK} strokeWidth="1.4" strokeLinejoin="round">
            <path d="M40 57c1-6 4-11 9-13l5-2c2 0 3 2 2 3.5l-3 2.5c3 1 4 4 2 6-3 3-9 3-15 3z" fill={SKIN} />
            <path d="M44 51.5c1.5-1 3-1 4 0M45 54c1.5-.8 3-.8 4 .2" stroke="#3b6aa0" fill="none" strokeLinecap="round" />
            <circle cx="50.5" cy="49" r="1" fill="#3b6aa0" stroke="none" />
        </g>
    ),
}

const LABELS = {
    lupe: 'Jean mit Lupe',
    deal: 'Jean mit Preisschild',
    post: 'Jean mit Brief',
    play: 'Jean mit Play-Button',
    werkzeug: 'Jean mit Schraubenschlüssel',
    strahlung: 'Jean mit Strahlenzeichen',
    pokal: 'Jean mit Pokal',
    rakete: 'Jean mit Rakete',
    herz: 'Jean mit Herz',
    tattoo: 'Jean zeigt seinen tätowierten Arm',
}

export default function JeanIcon({ badge, cool = false, size = 40, title, className = '' }) {
    const label = title || (badge ? LABELS[badge] : cool ? 'Jean mit Sonnenbrille' : 'Jean')
    return (
        <svg
            className={`jean-icon ${className}`}
            viewBox="0 0 64 64"
            width={size}
            height={size}
            role={title ? 'img' : undefined}
            aria-hidden={title ? undefined : true}
            aria-label={title ? label : undefined}
            focusable="false"
        >
            <Face cool={cool} />
            {badge && (
                <g>
                    <circle cx="49" cy="49" r="12" fill="#ffe14d" stroke={INK} strokeWidth="2" />
                    {BADGES[badge]}
                </g>
            )}
        </svg>
    )
}
