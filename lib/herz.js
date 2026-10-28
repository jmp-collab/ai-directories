// Gemeinsame Helfer für die kleinen Herzstücke: lokaler Speicher (fehlertolerant) und Toast-Meldungen.
// Alles bleibt im Browser des Besuchers, nichts wird an einen Server geschickt.
export const lies = (key, fallback = null) => {
    try {
        const v = localStorage.getItem(key)
        return v === null ? fallback : JSON.parse(v)
    } catch {
        return fallback
    }
}
export const schreib = (key, wert) => {
    try {
        localStorage.setItem(key, JSON.stringify(wert))
    } catch {}
}
export const sitzung = (key) => {
    try {
        if (sessionStorage.getItem(key)) return true
        sessionStorage.setItem(key, '1')
    } catch {}
    return false
}
export const toast = (text, emoji = '💛') => {
    if (typeof window === 'undefined') return
    window.dispatchEvent(new CustomEvent('aigeddon-toast', { detail: { text, emoji } }))
}
export const ruhig = () =>
    typeof window !== 'undefined' && (window.matchMedia('(prefers-reduced-motion: reduce)').matches || document.documentElement.dataset.ruhig === 'an')

// Mutmacher des Tages und Glückskeks-Sprüche: eigene Texte, keine Zitate.
export const MUTMACHER = [
    'Dein erster Entwurf muss nicht gut sein. Er muss nur existieren.',
    'Jedes große Tool hatte mal null Nutzer. Du bist in guter Gesellschaft.',
    'Ein gelöstes Problem pro Tag ist eine ziemlich gute Bilanz.',
    'Fertig ist besser als perfekt. Perfekt kommt in Version 2.',
    'Heute reicht ein kleiner Schritt. Morgen auch.',
    'Du musst nicht alles automatisieren. Nur das, was dich nervt.',
    'Fragen stellen ist kein Zeichen von Schwäche, sondern von gutem Prompting.',
    'Wer heute etwas Neues ausprobiert, hat morgen einen Vorsprung.',
    'Auch die beste KI braucht jemanden, der weiß, was er will. Das bist du.',
    'Pausen sind kein Zeitverlust, sondern Ladezeit.',
    'Dein Projekt ist spannender, als du gerade glaubst.',
    'Kleine Schritte, oft gemacht, schlagen große Pläne, nie begonnen.',
    'Ein Nein vom Verzeichnis ist nur ein Ja, das sich verspätet.',
    'Die beste Zeit zum Starten war gestern. Die zweitbeste ist jetzt.',
    'Du hast schon Schwierigeres geschafft als dieses Formular.',
    'Neugier ist der wichtigste Prompt.',
    'Heute ist ein guter Tag, um etwas zu verschiffen.',
    'Feedback ist Treibstoff, auch wenn es manchmal nach Zweitakt riecht.',
    'Mach heute eine Sache fertig. Nur eine. Das zählt.',
    'Niemand weiß alles über KI. Auch die nicht, die so tun.',
    'Dein Geschmack ist das, was keine KI dir abnehmen kann.',
    'Lieber zehn Leute, die dein Tool lieben, als tausend, die es überfliegen.',
    'Wenn es dich zum Lächeln bringt, bring es in die Welt.',
    'Ein guter Plan passt auf einen Bierdeckel.',
    'Mutig sein heißt auch: auf Veröffentlichen klicken.',
    'Du lernst schneller, als es sich anfühlt.',
    'Heute ist ein perfekter Tag für einen sauberen Commit.',
    'Glaub an dein Projekt, gerade an den Tagen, an denen es knirscht.',
    'Wer fragt, was Kunden wirklich brauchen, hat schon halb gewonnen.',
    'Jede Zeile, die du heute schreibst, ist eine mehr als gestern.',
    'Du bist nicht zu spät. Du bist genau rechtzeitig.',
]
export const GLUECKSKEKSE = [
    'Ein Prompt mit Beispiel wird dir heute doppelt so gute Antworten bringen.',
    'Bald findest du ein Verzeichnis mit dofollow-Link. Halte die Augen offen.',
    'Dein nächster Skill spart dir mehr Zeit, als du denkst.',
    'Wer heute seine Modellnamen prüft, schläft im Januar ruhiger.',
    'Eine kurze Antwort oben auf der Seite bringt dich in KI-Antworten.',
    'Heute wird ein guter Tag für einen Anbieterwechsel ohne Ausfall.',
    'Eine Kundin wird bald genau nach deinem Produkt fragen. Sei bereit.',
    'Dein bester Text entsteht, nachdem du den ersten gelöscht hast.',
    'Teste dieselbe Aufgabe in zwei Chatbots. Die Überraschung lohnt sich.',
    'Ein freundliches „Danke“ an deine KI kostet nichts. Sagt man.',
    'Der Cache ist dein Freund. Besonders bei langen Anweisungen.',
    'Heute klickst du auf Veröffentlichen. Das Glück ist mit den Mutigen.',
    'Dein Impressum ist vollständig. Das ist mehr wert, als es klingt.',
    'Eine Pause bringt dir heute die beste Idee des Tages.',
    'Du wirst einen Fehler finden, bevor ihn ein Kunde findet.',
    'Wer Quellen angibt, gewinnt Vertrauen. Und Backlinks.',
    'Dein Agent wird heute nichts kaufen, was du nicht freigibst. Gut so.',
    'Ein altes Projekt verdient heute einen zweiten Blick.',
    'Die richtige Frage ist heute wertvoller als jede Antwort.',
    'Du bist kurz davor, etwas Großartiges zu bauen. Weiter so.',
]
