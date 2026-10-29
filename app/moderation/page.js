import Moderation from './Moderation'

export const metadata = {
    title: 'Moderation',
    robots: { index: false, follow: false },
}

export default function ModerationPage() {
    return (
        <>
            <h1>Moderation 🛡️</h1>
            <Moderation />
        </>
    )
}
