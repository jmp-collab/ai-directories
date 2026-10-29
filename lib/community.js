// Gemeinsame Bausteine für Kommentare und Forum.
// Seiten, auf denen kommentiert werden darf. Muss zur Prüfung in supabase/migrations/0003_community.sql passen.
export const KOMMENTAR_PFAD = /^\/$|^\/(ratgeber|ki-news|tutorials|tools|prompts|skills|verzeichnis|tool-vergleiche|ki-tools|glossar|rechner|ki-test|neue-ki-modelle|beste-ki-tools|deutsche-ki-verzeichnisse|liste|launch-kit|ki-verzeichnis|top-50|freischaltung|vergleich|tool-finder|prompt-baukasten|prompt-check|quiz|downloads|guides|neu-entdeckt|ueber-jean|so-pruefen-wir|werben|transparenz)(\/[a-z0-9_.-]+){0,3}$/

export const AUTOR_FELDER = 'autor:profiles(handle, anzeigename, avatar_pfad, rolle, punkte)'
export const REAKTIONEN = ['👍', '❤️', '💡', '😂', '🎉']

export const RAENGE = [
    [0, 'Neuling', '🌱'],
    [10, 'Mitglied', '💬'],
    [50, 'Stammgast', '⭐'],
    [150, 'Profi', '🛠️'],
    [400, 'Legende', '☢️'],
]
export const rang = (punkte = 0) => [...RAENGE].reverse().find(([ab]) => punkte >= ab) || RAENGE[0]

export const MELDEGRUENDE = [
    ['beleidigung', 'Beleidigung oder Belästigung'],
    ['spam', 'Spam oder Werbung'],
    ['rechtswidrig', 'Rechtswidriger Inhalt'],
    ['persoenliche-daten', 'Persönliche Daten'],
    ['falschinformation', 'Falschinformation'],
    ['urheberrecht', 'Urheberrecht'],
    ['sonstiges', 'Etwas anderes'],
]

// Freundliche Texte für die Fehler aus den Datenbank-Triggern.
const FEHLER = {
    regeln_fehlen: 'Bitte bestätige einmal die Community-Regeln in deinem Konto, dann kannst du mitschreiben.',
    zu_schnell: 'Langsam, du Rakete! Höchstens 5 Beiträge in 10 Minuten. Gleich geht es weiter.',
    schreiben_gesperrt: 'Dein Konto darf gerade nicht schreiben. Details findest du in deinen Benachrichtigungen.',
    thema_geschlossen: 'Dieses Thema ist geschlossen.',
    nur_team: 'In dieser Kategorie schreibt nur das Team.',
    bearbeiten_abgelaufen: 'Bearbeiten geht nur in den ersten 15 Minuten.',
    antwort_ungueltig: 'Auf diesen Kommentar kann man nicht antworten.',
    ziel_fehlt: 'Diesen Beitrag gibt es nicht mehr.',
    nicht_erlaubt: 'Dafür fehlt dir die Berechtigung.',
}
export const fehlerText = (error) => {
    if (!error) return ''
    const treffer = Object.keys(FEHLER).find((k) => (error.message || '').includes(k))
    return treffer ? FEHLER[treffer] : 'Das hat nicht geklappt. Bitte versuch es gleich noch einmal.'
}

export const zeitText = (iso) => {
    const d = new Date(iso)
    const sek = (Date.now() - d.getTime()) / 1000
    if (sek < 60) return 'gerade eben'
    if (sek < 3600) return `vor ${Math.floor(sek / 60)} Min.`
    if (sek < 86400) return `vor ${Math.floor(sek / 3600)} Std.`
    if (sek < 7 * 86400) return `vor ${Math.floor(sek / 86400)} ${Math.floor(sek / 86400) === 1 ? 'Tag' : 'Tagen'}`
    return d.toLocaleDateString('de-DE', { day: 'numeric', month: 'short', year: 'numeric' })
}

export const nochBearbeitbar = (iso) => Date.now() - new Date(iso).getTime() < 14 * 60 * 1000
