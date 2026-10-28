// Autor und Prüfer aller redaktionellen Inhalte, als wiederverwendbarer Schema-Verweis.
import { absoluteUrl } from './site'

export const AUTOR_ID = `${absoluteUrl('/ueber-jean')}#jean`
export const autorRef = () => ({ '@type': 'Person', '@id': AUTOR_ID, name: 'Jean Maurice Port', url: absoluteUrl('/ueber-jean') })
