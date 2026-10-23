import { ogImage, ogSize } from '../og'
import { ARTIKEL } from '../../lib/ratgeber'

export const size = ogSize
export const contentType = 'image/png'
export const alt = 'Ratgeber auf AIGeddon'

export default function Image() {
    return ogImage({
        eyebrow: 'Ehrlich eingeordnet von Jean',
        title: 'Ratgeber für Gründer und KI-Tool-Launches',
        footer: `${ARTIKEL.length} Artikel zu Launch, SEO und Newsletter`,
        bg: '#fff6d6',
    })
}
