import Link from 'next/link'
import Breadcrumbs, { breadcrumbSchema } from '../components/Breadcrumbs'
import JsonLd from '../components/JsonLd'
import { SITE_NAME } from '../../lib/site'
import { LEAD_EMAIL } from '../../lib/monetization'

export const metadata = {
    title: 'Datenschutzerklärung',
    description: 'Welche Daten AIGeddon verarbeitet: Hosting bei GitHub Pages, Kontaktformular über FormSubmit, Speicherung im eigenen Browser, keine Analyse-Tools und keine Werbe-Cookies.',
    alternates: { canonical: '/datenschutz' },
    robots: { index: false, follow: true },
}

const STAND = '25. Oktober 2026'

const ABSCHNITTE = [
    [
        'Verantwortlich',
        [
            `Jean Maurice Port, erreichbar per E-Mail an ${LEAD_EMAIL} oder über das Kontaktformular am Ende jeder Seite.`,
        ],
    ],
    [
        'Kurz gesagt',
        [
            'AIGeddon setzt keine Analyse-Tools, keine Werbe-Cookies und keine Tracking-Pixel ein. Personenbezogene Daten verarbeiten wir nur, wenn du uns über das Formular schreibst, und beim Abruf der Seite durch den Hosting-Anbieter.',
        ],
    ],
    [
        'Hosting bei GitHub Pages',
        [
            'Die Website liegt bei GitHub Pages (GitHub, Inc., USA, eine Tochter der Microsoft Corporation). Beim Aufruf verarbeitet GitHub technisch notwendige Daten wie IP-Adresse, Zeitpunkt und aufgerufene Adresse, um die Seite auszuliefern und vor Missbrauch zu schützen.',
            'Rechtsgrundlage ist unser berechtigtes Interesse an einer sicheren und schnellen Bereitstellung der Website (Art. 6 Abs. 1 lit. f DSGVO). Für Übermittlungen in die USA stützt sich GitHub auf das EU-US Data Privacy Framework und Standardvertragsklauseln. Details stehen im GitHub Privacy Statement.',
        ],
    ],
    [
        'Kontaktformular',
        [
            'Wenn du das Formular abschickst, übermitteln wir Name (optional), E-Mail-Adresse, Anliegen, Website (optional), Nachricht und die Adresse der Seite, auf der du warst. Die Daten werden über den Dienst FormSubmit (formsubmit.co) per E-Mail an Jean weitergeleitet.',
            'Rechtsgrundlage ist deine Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die du mit dem Häkchen im Formular gibst, und bei Anfragen zu einem Auftrag die Anbahnung eines Vertrags (Art. 6 Abs. 1 lit. b DSGVO). Du kannst die Einwilligung jederzeit per E-Mail widerrufen.',
            'Wir nutzen deine Angaben nur, um deine Anfrage zu beantworten. Die E-Mails löschen wir, wenn die Anfrage erledigt ist und keine gesetzlichen Aufbewahrungspflichten bestehen.',
        ],
    ],
    [
        'Speicherung in deinem Browser',
        [
            'Einige Werkzeuge merken sich Eingaben nur in deinem eigenen Browser (localStorage oder sessionStorage), zum Beispiel deine Bewertungen im KI-Test, den Fortschritt im Launch-Kit und ob ein Hinweis schon angezeigt wurde. Diese Daten verlassen deinen Browser nicht und lassen sich über die Browser-Einstellungen löschen.',
        ],
    ],
    [
        'Links zu anderen Anbietern',
        [
            'Links zu Tools, Verzeichnissen, YouTube oder KI-Diensten führen auf fremde Websites. Erst mit dem Klick werden dort Daten verarbeitet, nach den Regeln des jeweiligen Anbieters. Bei den Buttons „Prompt senden an …“ wird der Text des Prompts in der Adresse an den gewählten KI-Dienst übergeben.',
            'Manche Links sind Partnerlinks. Der Anbieter erfährt dadurch, dass du von AIGeddon kommst. Mehr dazu auf der Seite Transparenz.',
        ],
    ],
    [
        'Deine Rechte',
        [
            'Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch sowie das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Eine formlose E-Mail genügt.',
        ],
    ],
]

export default function DatenschutzPage() {
    const crumbs = [
        { name: SITE_NAME, path: '/' },
        { name: 'Datenschutz', path: '/datenschutz' },
    ]
    return (
        <>
            <JsonLd data={breadcrumbSchema(crumbs)} />
            <Breadcrumbs items={crumbs} />
            <section className="hero">
                <p className="eyebrow">Stand: {STAND}</p>
                <h1>Datenschutzerklärung</h1>
                <p className="lead">Was mit deinen Daten passiert, wenn du AIGeddon besuchst oder uns schreibst. Ohne Juristendeutsch, so weit es geht.</p>
            </section>
            <div className="prose">
                {ABSCHNITTE.map(([h, absaetze], i) => (
                    <section key={h} aria-labelledby={`ds-${i}`}>
                        <h2 id={`ds-${i}`}>{h}</h2>
                        {absaetze.map((p) => (
                            <p key={p.slice(0, 30)}>{p}</p>
                        ))}
                    </section>
                ))}
            </div>
            <p className="box box-info">
                Fragen zum Datenschutz? Nutze das Formular unten oder schreib an <span className="leadform-adresse">{LEAD_EMAIL}</span>. Zur <Link href="/transparenz">Transparenz-Seite</Link>.
            </p>
        </>
    )
}
