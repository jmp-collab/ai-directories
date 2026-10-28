import { effectiveRating } from './fresh'
import { hasStatusIssue } from './checks'

// Jean-Score: 0 bis 100 aus Domain Rating, Traffic, Preis und Einreichung. Reine Funktion, damit Server und Client dieselbe Zahl zeigen.
export function getScore(d) {
    // Bei fragwürdigem DR zählt der frisch gemessene Authority Score (siehe lib/fresh.js).
    const dr = Math.round((Math.min(effectiveRating(d), 100) / 100) * 45)
    const traffic = d.monthly_visits > 0 ? Math.round(Math.max(0, Math.min(25, ((Math.log10(d.monthly_visits) - 2) / 5) * 25))) : 0
    const price = d.pricing === 'Free' ? 20 : d.pricing === 'Paid' ? 5 : 8
    const blocked = hasStatusIssue(d.slug)
    // Gerade nicht eintragbar: Einreichung zählt 0 und der Gesamtwert bleibt im Bereich „Linkfriedhof“.
    const submission = blocked ? 0 : d.submission_experience === 'Good' ? 10 : d.submission_experience === 'Bad' ? 0 : 4
    const total = dr + traffic + price + submission
    return { total: blocked ? Math.min(total, 30) : total, parts: { dr, traffic, price, submission } }
}

export const SCORE_MAX = { dr: 45, traffic: 25, price: 20, submission: 10 }

export function scoreLabel(total) {
    if (total >= 75) return 'Goldstück'
    if (total >= 55) return 'Solide'
    if (total >= 35) return 'Naja'
    return 'Linkfriedhof'
}

// Fester Spruch pro Verzeichnis: gleicher Name ergibt immer denselben Text, damit die Seite stabil bleibt.
const LINES = {
    Goldstück: [
        'Wenn du heute nur einen Eintrag machst, dann diesen. Ich warte hier und trinke Kaffee.',
        'Das ist die Sorte Backlink, über die man auf Partys redet. Also auf SEO-Partys.',
        'Hier stimmt fast alles. Wäre es ein Moped, würde ich es nicht verkaufen.',
    ],
    Solide: [
        'Kein Feuerwerk, aber ein ordentlicher Böller. Nimm mit.',
        'Solide wie ein Simson-Motor: nicht schön, aber läuft.',
        'Macht seinen Job. Mehr verlange ich auch nicht von meinem Toaster.',
    ],
    Naja: [
        'Kann man machen. Muss man aber nicht vor dem Frühstück.',
        'Für die zweite Runde, wenn die Top-Liste abgehakt ist.',
        'Mittelmaß mit Ambitionen. Kann noch was werden, muss aber nicht.',
    ],
    Linkfriedhof: [
        'Hier liegt ein Backlink begraben. Bitte nicht stören.',
        'Ehrlich gesagt: Deine Zeit ist woanders besser angelegt.',
        'Nur für Komplettisten und Leute mit sehr viel Langeweile.',
    ],
}

export function jeanLine(d) {
    if (hasStatusIssue(d.slug)) return 'Hier ist gerade zu. Ich klopfe in ein paar Wochen nochmal an, du nimmst solange die Alternativen.'
    const label = scoreLabel(getScore(d).total)
    const list = LINES[label]
    const hash = [...d.name].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7)
    return list[hash % list.length]
}
