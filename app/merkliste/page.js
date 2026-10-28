import Breadcrumbs from '../components/Breadcrumbs'
import Merkliste from './Merkliste'

export const metadata = {
    title: 'Deine Merkliste',
    description: 'Deine gemerkten Seiten, Herzen und Abzeichen bei AIGeddon. Alles bleibt nur in deinem Browser gespeichert.',
    alternates: { canonical: '/merkliste' },
    robots: { index: false, follow: true },
}

export default function MerklistePage() {
    return (
        <>
            <Breadcrumbs items={[{ name: 'Startseite', path: '/' }, { name: 'Merkliste' }]} />
            <section className="hero">
                <h1>Deine Merkliste ⭐</h1>
                <p className="lead">
                    Alles, was du dir gemerkt hast, dazu deine Herzen und Abzeichen. Gespeichert wird nur in deinem Browser. Kein Konto, kein
                    Server, keine Zählung. Wenn du den Browser-Speicher leerst, ist die Liste weg.
                </p>
            </section>
            <Merkliste />
        </>
    )
}
