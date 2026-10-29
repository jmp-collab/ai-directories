import Breadcrumbs from '../../components/Breadcrumbs'
import Thema from './Thema'

export const metadata = {
    title: 'Forum-Thema',
    description: 'Ein Thema im AIGeddon-KI-Forum.',
    robots: { index: false, follow: true },
}

export default function ThemaPage() {
    return (
        <>
            <Breadcrumbs items={[{ name: 'Startseite', path: '/' }, { name: 'Forum', path: '/forum' }, { name: 'Thema' }]} />
            <Thema />
        </>
    )
}
