// Texte für die Kategorieseiten der Prompt-Bibliothek (/prompts/kategorie/[key]).
// Schlüssel wie in PROMPT_KATEGORIEN. tutorials: Slugs aus lib/tutorials.js, zielgruppen: aus lib/zielgruppen.js, rubrik: aus lib/rubrik-ratgeber.js.

export const KATEGORIE_TEXTE = {
    seo: {
        titel: 'SEO-Prompts für ChatGPT & Claude',
        intro: 'Vorlagen für Keyword-Cluster, Meta-Daten und Content-Briefings. Die KI liefert die Struktur, die Zahlen (Suchvolumen, Rankings) holst du aus deinem SEO-Tool.',
        tipps: [
            ['Daten selbst liefern', 'Sprachmodelle kennen kein aktuelles Suchvolumen. Füge Keyword-Listen aus deinem Tool ein, statt die KI schätzen zu lassen.'],
            ['Suchintention benennen', 'Sag dazu, ob die Seite informieren, vergleichen oder verkaufen soll. Davon hängen Aufbau und Länge ab.'],
            ['Ergebnis prüfen', 'Titel und Beschreibungen in der Länge kontrollieren und die SERP selbst ansehen, bevor du veröffentlichst.'],
        ],
        tutorials: ['prompt-kette-vom-thema-zum-artikel', 'prompt-engineering-in-15-minuten'],
        zielgruppen: ['marketing', 'onlinehaendler'],
        rubrik: 'marketing',
        faq: [
            ['Kann ChatGPT Keyword-Recherche ersetzen?', 'Nein. Die KI kann Themen sammeln und gruppieren, kennt aber keine aktuellen Suchvolumen. Für Zahlen brauchst du ein SEO-Tool wie Semrush oder SE Ranking.'],
            ['Wie verhindere ich, dass KI-Texte austauschbar klingen?', 'Gib eigene Erfahrungen, Beispiele und Daten in den Prompt. Was nur du weißt, macht den Text einzigartig.'],
            ['Bestraft Google KI-Texte?', 'Google bewertet laut eigenen Richtlinien die Qualität und den Nutzen eines Inhalts, nicht das Werkzeug, mit dem er entstanden ist.'],
        ],
    },
    content: {
        titel: 'Content-Prompts: Texte, Posts und Newsletter mit KI',
        intro: 'Vorlagen für Blogartikel, Social Posts, Newsletter und Umformulierungen. Jede Vorlage fragt Zielgruppe, Ton und Format ab, damit der erste Entwurf schon passt.',
        tipps: [
            ['Stilprobe mitgeben', 'Ein Absatz in deinem Ton zeigt der KI mehr als jede Beschreibung wie „locker, aber kompetent“.'],
            ['Erst Gliederung, dann Text', 'Lass dir zuerst die Struktur zeigen und korrigiere sie. Das spart lange Nacharbeit am fertigen Text.'],
            ['Fakten markieren lassen', 'Bitte die KI, unsichere Angaben zu kennzeichnen. Zahlen und Zitate prüfst du immer selbst.'],
        ],
        tutorials: ['prompt-kette-vom-thema-zum-artikel', 'newsletter-mit-ki-in-einer-stunde'],
        zielgruppen: ['content-creator', 'marketing', 'selbststaendige'],
        rubrik: 'schreiben',
        faq: [
            ['Welche KI schreibt die besten deutschen Texte?', 'Das hängt von der Aufgabe ab. Teste ChatGPT, Claude und Gemini mit demselben Prompt; unser KI-Test hilft beim direkten Vergleich.'],
            ['Darf ich KI-Texte kommerziell nutzen?', 'Bei den großen Anbietern ja, laut deren Nutzungsbedingungen. Verantwortlich für Inhalt und Rechte bleibst trotzdem du.'],
            ['Wie lang sollte ein Prompt für einen Artikel sein?', 'So lang, dass Zielgruppe, Ziel, Gliederung und Ton drinstehen. Fünf bis zehn Zeilen sind meist genug.'],
        ],
    },
    video: {
        titel: 'Video-Prompts für YouTube, Reels und Skripte',
        intro: 'Vorlagen für Videoskripte, Hooks, Titel und Beschreibungen. Die KI liefert Text und Struktur, Bild und Ton kommen aus deinem Videotool.',
        tipps: [
            ['Die ersten Sekunden zuerst', 'Lass dir mehrere Hooks schreiben und wähle den stärksten aus, bevor das restliche Skript entsteht.'],
            ['Sprechtext laut lesen', 'Skripte klingen geschrieben oft steif. Laut vorlesen und Sätze kürzen, die dich stolpern lassen.'],
            ['Plattform nennen', 'YouTube, TikTok und Reels haben andere Längen und Formate. Schreib die Plattform in den Prompt.'],
        ],
        tutorials: ['prompt-engineering-in-15-minuten', 'chatgpt-richtig-nutzen'],
        zielgruppen: ['content-creator', 'marketing'],
        rubrik: 'video',
        faq: [
            ['Kann KI ein ganzes Video erstellen?', 'Ja, Tools wie InVideo AI, Synthesia oder Runway erzeugen Videos aus Text. Ein gutes Skript aus diesen Prompts verbessert das Ergebnis deutlich.'],
            ['Welche Länge passt für YouTube Shorts?', 'Kurz und auf einen Punkt fokussiert. Nenne die gewünschte Länge im Prompt, dann passt die KI Umfang und Tempo an.'],
            ['Wie finde ich gute Videotitel?', 'Lass dir zehn Varianten geben und prüfe sie gegen Suchbegriffe, die deine Zielgruppe wirklich nutzt.'],
        ],
    },
    launch: {
        titel: 'Launch- und Marketing-Prompts für Produkte und Tools',
        intro: 'Vorlagen für Produktbeschreibungen, Launch-Texte, Pressemitteilungen und Verzeichnis-Einträge. Ideal zusammen mit unserem Launch-Kit und der Verzeichnisliste.',
        tipps: [
            ['Nutzen vor Funktion', 'Beschreibe das Problem deiner Kunden. Die KI formuliert daraus Nutzenversprechen statt Feature-Listen.'],
            ['Pro Plattform anpassen', 'Product Hunt, LinkedIn und Verzeichnisse haben eigene Längen und Töne. Erzeuge pro Ziel eine Variante.'],
            ['Keine erfundenen Zahlen', 'Lass die KI Platzhalter für Kennzahlen setzen und trage nur echte Werte ein.'],
        ],
        tutorials: ['prompt-kette-vom-thema-zum-artikel', 'newsletter-mit-ki-in-einer-stunde'],
        zielgruppen: ['selbststaendige', 'marketing', 'entwickler'],
        rubrik: 'marketing',
        faq: [
            ['Wo trage ich mein KI-Tool nach dem Launch ein?', 'In KI-Verzeichnissen und Launch-Plattformen. Unsere Verzeichnisliste zeigt sie gesammelt.'],
            ['Kann die KI eine Pressemitteilung schreiben?', 'Den Entwurf ja. Zitate, Zahlen und Ansprechpartner müssen von dir kommen und geprüft sein.'],
            ['Wie viele Varianten sollte ich testen?', 'Lass dir mehrere Versionen geben und teste die zwei stärksten, etwa als Betreffzeile oder Anzeigentext.'],
        ],
    },
    business: {
        titel: 'Business-Prompts für Büro, E-Mails und Planung',
        intro: 'Vorlagen für E-Mails, Protokolle, Angebote, Entscheidungen und Aufgabenlisten. Für den Arbeitsalltag gebaut, mit Platzhaltern statt erfundener Angaben.',
        tipps: [
            ['Keine vertraulichen Daten', 'Kundennamen, Verträge und Personaldaten nur in Tools mit passender Datenschutz-Vereinbarung eingeben.'],
            ['Ton festlegen', 'Sag, an wen der Text geht: Kunde, Chefin, Team. Die KI passt Anrede und Länge an.'],
            ['Platzhalter nutzen', 'Fehlende Angaben soll die KI als [PLATZHALTER] markieren, nicht raten. Unsere Vorlagen sind so gebaut.'],
        ],
        tutorials: ['chatgpt-richtig-nutzen', 'eigenen-ki-assistenten-bauen'],
        zielgruppen: ['selbststaendige', 'handwerk', 'hr-recruiting'],
        rubrik: 'produktivitaet',
        faq: [
            ['Darf ich Kundendaten in ChatGPT eingeben?', 'Nur mit Rechtsgrundlage und passendem Vertrag. Unsere DSGVO-Checkliste zeigt, worauf du achten musst.'],
            ['Lohnt sich ein eigener Assistent für wiederkehrende Aufgaben?', 'Ja, wenn du dieselbe Anweisung oft gibst. Ein Custom GPT oder Claude-Projekt speichert sie dauerhaft.'],
            ['Wie spare ich mit KI am meisten Zeit?', 'Bei Texten, die oft ähnlich sind: Antworten, Zusammenfassungen, Protokolle. Eine gute Vorlage spart jedes Mal das Erklären.'],
        ],
    },
    shop: {
        titel: 'Onlineshop-Prompts: Produkttexte, FAQ und Kundenservice',
        intro: 'Vorlagen für Produktbeschreibungen, Kategorietexte, FAQ und Antworten auf Kundenanfragen. Gebaut für Shops, die viele Artikel mit wenig Zeit pflegen.',
        tipps: [
            ['Technische Daten einfügen', 'Maße, Material und Kompatibilität aus deinen Stammdaten in den Prompt kopieren. Die KI darf hier nichts ergänzen.'],
            ['Keine Rechtsversprechen', 'Garantie-, Gesundheits- oder Umweltaussagen nur mit Beleg. Lass sie von der KI markieren statt formulieren.'],
            ['Einheitliche Struktur', 'Eine feste Vorlage für alle Produkttexte sorgt für gleiche Qualität über den ganzen Shop.'],
        ],
        tutorials: ['chatgpt-richtig-nutzen', 'prompt-engineering-in-15-minuten'],
        zielgruppen: ['onlinehaendler', 'marketing'],
        rubrik: 'marketing',
        faq: [
            ['Sind KI-Produkttexte schlecht für SEO?', 'Nicht automatisch. Problematisch sind gleiche Texte auf vielen Seiten. Mit echten Produktdaten und eigener Struktur werden sie einzigartig.'],
            ['Kann die KI Herstellertexte umschreiben?', 'Ja, aber prüfe die Fakten danach. Umformulieren darf keine technischen Angaben verändern.'],
            ['Wie beantworte ich Kundenanfragen mit KI?', 'Mit einer Vorlage, die Ton, Rückgaberegeln und Lieferzeiten aus deinem Shop enthält. Die Antwort liest du vor dem Senden.'],
        ],
    },
    karriere: {
        titel: 'Bewerbungs-Prompts: Anschreiben, Lebenslauf und Interview',
        intro: 'Vorlagen für Anschreiben, Lebenslauf-Formulierungen, Gehaltsgespräche und Interview-Vorbereitung. Die KI hilft beim Formulieren, die Fakten kommen von dir.',
        tipps: [
            ['Stellenanzeige einfügen', 'Kopiere die Anzeige in den Prompt. So greift die KI die geforderten Fähigkeiten gezielt auf.'],
            ['Nichts dazuerfinden', 'Nur echte Stationen und Erfolge nennen. Erfundene Angaben fallen im Gespräch auf.'],
            ['Persönlich nachschärfen', 'Ersetze allgemeine Sätze durch ein konkretes Beispiel aus deiner Arbeit. Das macht das Anschreiben glaubwürdig.'],
        ],
        tutorials: ['chatgpt-richtig-nutzen', 'prompt-engineering-in-15-minuten'],
        zielgruppen: ['studenten', 'hr-recruiting', 'schueler'],
        rubrik: 'schreiben',
        faq: [
            ['Merken Personaler, dass ein Anschreiben von KI stammt?', 'Allgemeine Floskeln fallen auf. Mit konkreten Beispielen aus deinem Werdegang wirkt der Text persönlich.'],
            ['Darf ich meinen Lebenslauf in ChatGPT hochladen?', 'Er enthält personenbezogene Daten. Entferne Adresse, Telefonnummer und Geburtsdatum, bevor du ihn einfügst.'],
            ['Kann die KI mich auf ein Vorstellungsgespräch vorbereiten?', 'Ja, sie kann typische Fragen stellen und auf deine Antworten reagieren. Die Vorlage „Vorstellungsgespräch üben“ ist dafür gebaut.'],
        ],
    },
    lernen: {
        titel: 'Lern-Prompts: Erklären, Üben und Zusammenfassen mit KI',
        intro: 'Vorlagen zum Erklären schwieriger Themen, für Lernpläne, Karteikarten und Übungsfragen. Für Schule, Studium und Weiterbildung.',
        tipps: [
            ['Wissensstand angeben', 'Sag, was du schon weißt. Dann erklärt die KI weder zu einfach noch zu kompliziert.'],
            ['Selbst abfragen lassen', 'Lass dich von der KI prüfen, statt nur zu lesen. Aktives Abrufen bleibt besser hängen.'],
            ['Quellen gegenprüfen', 'Sprachmodelle können halluzinieren. Wichtige Fakten im Lehrbuch oder einer Fachquelle nachsehen.'],
        ],
        tutorials: ['chatgpt-richtig-nutzen', 'prompt-engineering-in-15-minuten'],
        zielgruppen: ['schueler', 'studenten', 'lehrer'],
        rubrik: 'recherche',
        faq: [
            ['Ist es erlaubt, mit KI zu lernen?', 'Zum Lernen und Üben ja. Bei Prüfungen und Hausarbeiten gelten die Regeln deiner Schule oder Hochschule.'],
            ['Welche KI erklärt am besten?', 'Probiere dieselbe Frage in ChatGPT, Claude und Gemini. Unser KI-Test hilft beim direkten Vergleich.'],
            ['Wie erstelle ich Karteikarten mit KI?', 'Mit einer Vorlage, die Frage-Antwort-Paare in Tabellenform verlangt. Die kannst du in Lern-Apps importieren.'],
        ],
    },
    technik: {
        titel: 'Technik-Prompts für Excel, Code und Automatisierung',
        intro: 'Vorlagen für Excel-Formeln, Code-Erklärungen, Fehlersuche und Automatisierungen. Die KI schreibt den Entwurf, du testest ihn mit echten Daten.',
        tipps: [
            ['Beispieldaten zeigen', 'Ein paar Zeilen aus deiner Tabelle machen Formeln treffsicher. Echte Kundendaten vorher anonymisieren.'],
            ['Fehlermeldung komplett kopieren', 'Die genaue Meldung und die betroffene Codezeile helfen mehr als „es geht nicht“.'],
            ['Immer testen', 'KI-Code kann plausibel aussehen und trotzdem falsch sein. Erst an einer Kopie ausprobieren.'],
        ],
        tutorials: ['ki-agenten-verstehen', 'eigenen-ki-assistenten-bauen'],
        zielgruppen: ['entwickler', 'selbststaendige'],
        rubrik: 'coding',
        faq: [
            ['Kann ChatGPT Excel-Formeln schreiben?', 'Ja, auch verschachtelte. Nenne Spalten, Beispielwerte und gewünschtes Ergebnis, dann prüfe die Formel an deinen Daten.'],
            ['Welche KI ist am besten zum Programmieren?', 'Das wechselt mit jeder Modellgeneration. Unsere Rubrik Coding vergleicht die Werkzeuge, der KI-Test enthält Code-Aufgaben.'],
            ['Ist KI-Code sicher?', 'Nicht automatisch. Prüfe Abhängigkeiten, Eingaben und Zugangsdaten, bevor Code produktiv läuft.'],
        ],
    },
}
