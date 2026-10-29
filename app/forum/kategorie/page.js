import Breadcrumbs from '../../components/Breadcrumbs'
import Kategorie from './Kategorie'

export const metadata = {
    title: 'Forum-Kategorie',
    description: 'Themen in einer Kategorie des AIGeddon-KI-Forums.',
    robots: { index: false, follow: true },
}

export default function KategoriePage() {
    return (
        <>
            <Breadcrumbs items={[{ name: 'Startseite', path: '/' }, { name: 'Forum', path: '/forum' }, { name: 'Kategorie' }]} />
            <Kategorie />
        </>
    )
}
