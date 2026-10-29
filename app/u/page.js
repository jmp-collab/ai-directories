import Profil from './Profil'

export const metadata = {
    title: 'Profil',
    description: 'Mitgliederprofil in der AIGeddon-Community.',
    robots: { index: false, follow: true },
}

export default function ProfilSeite() {
    return <Profil />
}
