import { formatRating } from '../utils/i18n-de'
import { isDrSuspect, getFresh } from './fresh'
import { getCheck } from './checks'

// Regelbasierte Einschätzung aus den Daten. Keine erfundenen Fakten, nur Ableitungen aus DR, Traffic, Preis und Einreichung.
export function getVerdict(d) {
    const check = getCheck(d.slug)
    if (check?.status) {
        return {
            tone: 'warn',
            short: 'Gerade nicht eintragbar ⛔',
            text: `${check.status} Stand Oktober 2026. Nimm vorerst eine der Alternativen weiter unten.`,
        }
    }
    if (isDrSuspect(d)) {
        return {
            tone: 'warn',
            short: 'DR mit Vorsicht genießen 🧐',
            text: `Laut Liste Domain Rating ${formatRating(d.domain_rating)}, frisch gemessen aber nur Authority Score ${getFresh(d.slug).authority}. Der Eintrag ist ${d.pricing === 'Free' ? 'kostenlos und schadet nicht' : 'kostenpflichtig, also erst recht genau hinschauen'}, nur einen starken Backlink solltest du nicht erwarten.`,
        }
    }
    if (d.submission_experience === 'Bad') {
        return {
            tone: 'warn',
            short: 'Nur mit Geduld und Nerven 🌵',
            text: `Die Einreichung bei ${d.name} ist hakelig, ein Kaktus im Formularformat. Plan mehr Zeit ein, oder nimm zuerst eine der Alternativen weiter unten.`,
        }
    }
    if (d.pricing === 'Free' && d.domain_rating >= 30) {
        return {
            tone: 'good',
            short: 'Pflichteintrag 🏆',
            text: `Kostet nichts, Domain Rating ${formatRating(d.domain_rating)}: ${d.name} gehört auf jede Launch-Liste. Das ist, als würde dir jemand einen Döner schenken, und er ist auch noch gut.`,
        }
    }
    if (d.pricing === 'Free') {
        return {
            tone: 'ok',
            short: 'Mitnehmen, schadet nicht 👍',
            text: `Kostenlos und schnell erledigt. Die Domain ist eher schwach, also kein Muss, aber ein sauberer Zusatzeintrag, wenn du ohnehin Verzeichnisse abarbeitest. Wie Gratis-Kugelschreiber: Man braucht ihn nicht, nimmt ihn aber mit.`,
        }
    }
    if (d.pricing === 'Paid' && d.domain_rating >= 50) {
        return {
            tone: 'ok',
            short: 'Kann sich lohnen 🤔',
            text: `Starke Domain, der Eintrag kostet aber. Lohnt sich, wenn deine Zielgruppe dort unterwegs ist. Frag vor dem Kauf, ob der Link dofollow ist, sonst zahlst du für einen sehr teuren Händedruck.`,
        }
    }
    if (d.pricing === 'Paid') {
        return {
            tone: 'warn',
            short: d.dealCode ? 'Nur mit Rabatt 🤑' : 'Genau hinschauen 🧐',
            text: `Kostenpflichtig bei Domain Rating ${formatRating(d.domain_rating)}. Für das Geld findest du oft stärkere kostenlose Verzeichnisse${d.dealCode ? ', mit dem Rabattcode wird es interessanter (Schnäppchenjäger-Modus an)' : ''}. Dein Geldbeutel hat auch Gefühle.`,
        }
    }
    return {
        tone: 'neutral',
        short: 'Preis prüfen 🕵️',
        text: `Zum Preis von ${d.name} liegen keine gesicherten Daten vor. Schau vor dem Eintrag auf die Einreichungsseite, wir haben auch nur eine Glaskugel und die ist beschlagen.`,
    }
}
