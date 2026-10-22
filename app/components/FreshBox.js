import { getFresh, FRESH_STAND } from '../../lib/fresh'
import { formatNumber } from '../../utils/i18n-de'

export default function FreshBox({ directory }) {
    const f = getFresh(directory.slug)
    if (!f || (f.authority == null && f.traffic_us == null)) return null
    return (
        <div className="freshbox">
            <p className="freshbox-title">
                <strong>Frisch gemessen</strong> · Semrush, {FRESH_STAND}
            </p>
            <dl className="facts">
                {f.authority != null && (
                    <div>
                        <dt>Authority Score</dt>
                        <dd>{f.authority}</dd>
                    </div>
                )}
                {f.traffic_us != null && (
                    <div>
                        <dt>Organischer Traffic USA</dt>
                        <dd>{formatNumber(f.traffic_us)}</dd>
                    </div>
                )}
                {f.refdomains != null && (
                    <div>
                        <dt>Verweisende Domains</dt>
                        <dd>{formatNumber(f.refdomains)}</dd>
                    </div>
                )}
            </dl>
            {f.authority != null && f.authority <= 10 && directory.domain_rating >= 50 && (
                <p className="kit-warn">
                    Vorsicht: Domain Rating {directory.domain_rating}, aber Authority Score nur {f.authority}. Der hohe DR gehört
                    vermutlich zur Hauptdomain oder ist veraltet. Plan diesen Eintrag nicht als starken Backlink ein.
                </p>
            )}
            <p className="source">
                Authority Score und organischer Google-Traffic sind andere Kennzahlen als Domain Rating und Gesamtbesuche oben. Sie
                zeigen den aktuellen Stand unabhängig von den Listenwerten oben.
            </p>
        </div>
    )
}
