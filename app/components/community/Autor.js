import Link from 'next/link'
import { bildUrl } from '../../../lib/konto'
import { rang, zeitText } from '../../../lib/community'

// Kopfzeile eines Beitrags: Bild, Name, Rang, Zeit. Gelöschte Konten erscheinen als „Ehemaliges Mitglied“.
export default function Autor({ autor, zeit, bearbeitet, groesse = 36 }) {
    if (!autor)
        return (
            <div className="c-autor">
                <span className="konto-avatar c-avatar konto-avatar-leer" style={{ width: groesse, height: groesse }} aria-hidden="true">
                    ?
                </span>
                <span className="c-name">Ehemaliges Mitglied</span>
                {zeit && <span className="c-zeit">{zeitText(zeit)}</span>}
            </div>
        )
    const bild = bildUrl('avatare', autor.avatar_pfad)
    const [, rangName, rangIcon] = rang(autor.punkte)
    return (
        <div className="c-autor">
            <Link href={`/u?h=${autor.handle}`} className="c-autor-link">
                {bild ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={bild} alt="" width={groesse} height={groesse} className="konto-avatar c-avatar" loading="lazy" />
                ) : (
                    <span className="konto-avatar c-avatar konto-avatar-leer" style={{ width: groesse, height: groesse }} aria-hidden="true">
                        {autor.anzeigename.slice(0, 1).toUpperCase()}
                    </span>
                )}
                <span className="c-name">{autor.anzeigename}</span>
            </Link>
            <span className="c-rang" title={`${autor.punkte} Punkte`}>
                {rangIcon} {rangName}
            </span>
            {autor.rolle !== 'nutzer' && <span className="profil-rolle">{autor.rolle === 'admin' ? 'Team' : 'Moderation'}</span>}
            {zeit && (
                <span className="c-zeit">
                    {zeitText(zeit)}
                    {bearbeitet ? ' · bearbeitet' : ''}
                </span>
            )}
        </div>
    )
}
