import { ImageResponse } from 'next/og'

// Gemeinsames Layout für Vorschaubilder. Ohne Emojis, weil die zur Laufzeit nachgeladen würden.
export const ogSize = { width: 1200, height: 630 }

export function ogImage({ eyebrow, title, score, footer }) {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    background: '#fff6d6',
                    padding: 60,
                    fontFamily: 'sans-serif',
                    border: '16px solid #1b1b1f',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div
                        style={{
                            display: 'flex',
                            background: '#b3164f',
                            color: '#fff',
                            fontSize: 34,
                            fontWeight: 800,
                            padding: '10px 22px',
                            border: '4px solid #1b1b1f',
                        }}
                    >
                        KI-Verzeichnisse
                    </div>
                    {score != null && (
                        <div
                            style={{
                                display: 'flex',
                                background: '#6ee7b7',
                                fontSize: 40,
                                fontWeight: 800,
                                padding: '8px 24px',
                                border: '4px solid #1b1b1f',
                                borderRadius: 999,
                            }}
                        >
                            {`Jean-Score ${score}`}
                        </div>
                    )}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', fontSize: 34, color: '#5a5560', marginBottom: 12 }}>{eyebrow}</div>
                    <div style={{ display: 'flex', fontSize: 76, fontWeight: 800, color: '#1b1b1f', lineHeight: 1.1 }}>{title}</div>
                </div>
                <div
                    style={{
                        display: 'flex',
                        background: '#ffe14d',
                        fontSize: 30,
                        fontWeight: 700,
                        padding: '12px 20px',
                        border: '4px solid #1b1b1f',
                        alignSelf: 'flex-start',
                    }}
                >
                    {footer}
                </div>
            </div>
        ),
        ogSize
    )
}
