import Link from 'next/link'

// Zeigt Nutzertext sicher an: kein HTML, Zeilenumbrüche bleiben, Links und @Erwähnungen werden klickbar.
const MUSTER = /(https?:\/\/[^\s<>"]+|@[a-zA-Z0-9_]{3,24})/g

export default function Text({ text }) {
    return (
        <div className="c-text">
            {text.split(/\n{2,}/).map((absatz, i) => (
                <p key={i}>
                    {absatz.split(MUSTER).map((teil, j) => {
                        if (/^https?:\/\//.test(teil)) {
                            const sauber = teil.replace(/[.,;:!?)]+$/, '')
                            return (
                                <a key={j} href={sauber} rel="nofollow ugc noopener" target="_blank">
                                    {sauber.replace(/^https?:\/\/(www\.)?/, '').slice(0, 60)}
                                </a>
                            )
                        }
                        if (/^@[a-zA-Z0-9_]{3,24}$/.test(teil))
                            return (
                                <Link key={j} href={`/u?h=${teil.slice(1).toLowerCase()}`} className="c-erwaehnung">
                                    {teil}
                                </Link>
                            )
                        return teil.split('\n').map((zeile, k, alle) => (
                            <span key={`${j}-${k}`}>
                                {zeile}
                                {k < alle.length - 1 && <br />}
                            </span>
                        ))
                    })}
                </p>
            ))}
        </div>
    )
}
