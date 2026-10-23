// Ratgeber-Teil für die großen Rubrikseiten: Auswahlkriterien, Tipp- und Warnbox, FAQ.
// Nur allgemeine, überprüfbare Aussagen; Preise stehen in den Steckbriefen unter /tools.
export const RUBRIK_RATGEBER = {
    schreiben: {
        frage: 'Welches KI-Schreibtool passt zu dir?',
        kriterien: [
            ['🗣️', 'Sprache', 'Schreibt das Tool gutes Deutsch, oder ist es vor allem für Englisch gebaut? Viele Umformulierer arbeiten nur auf Englisch.'],
            ['🎨', 'Markenstimme', 'Kannst du Beispiele, Tonalität und verbotene Wörter hinterlegen, damit nicht jeder Text gleich klingt?'],
            ['🧩', 'Arbeitsort', 'Browser-Erweiterung, Word- und Google-Docs-Plugin oder eigener Editor: Das Tool sollte dort sein, wo du schreibst.'],
            ['🔒', 'Datenschutz', 'Werden Texte zum Training genutzt? Gibt es einen Auftragsverarbeitungsvertrag und Server in der EU?'],
            ['💶', 'Preismodell', 'Wortkontingent, Credits oder Flatrate: Rechne mit deinem echten Monatsvolumen, nicht mit dem Einstiegspreis.'],
        ],
        tipp: 'Für Entwürfe, Gliederungen und Umformulierungen reicht oft ein Chatbot mit gutem Prompt. Spezialisierte Schreibtools lohnen sich, wenn ein Team viele Texte im gleichen Stil braucht.',
        achtung: 'KI-Texte klingen schnell austauschbar und können Fakten erfinden. Zahlen, Zitate und Quellen immer selbst prüfen, bevor etwas veröffentlicht wird.',
        faq: [
            { q: 'Was ist das beste KI-Tool zum Schreiben?', a: 'Das hängt vom Einsatz ab. Für freie Entwürfe und Überarbeitungen sind Chatbots wie ChatGPT oder Claude stark, für einheitliche Markentexte im Team spezialisierte Schreibtools mit Stilvorgaben, für Korrektur und Umformulierung Assistenten wie Wordtune oder QuillBot. Die Konsens-Favoriten oben empfehlen mindestens zwei unabhängige Listen.' },
            { q: 'Gibt es kostenlose KI-Schreibtools?', a: 'Ja. Viele Anbieter haben einen Gratis-Tarif mit begrenzter Nutzung, und die Chatbots selbst lassen sich kostenlos zum Schreiben nutzen. Die Filter der Datenbank zeigen kostenlose und Open-Source-Tools.' },
            { q: 'Erkennt Google KI-Texte?', a: 'Google bewertet nach eigener Aussage die Qualität und den Nutzen eines Inhalts, nicht ob er mit KI entstanden ist. Massenhaft erzeugte Texte ohne Mehrwert verstoßen aber gegen die Spam-Richtlinien.' },
            { q: 'Wie schreibe ich bessere Prompts für Texte?', a: 'Gib Rolle, Zielgruppe, Ziel, Länge und Format vor und füge ein Beispiel für den gewünschten Stil an. Der Prompt-Check und der Prompt-Baukasten auf AIGeddon helfen dabei.' },
        ],
    },
    bild: {
        frage: 'Welcher KI-Bildgenerator passt zu dir?',
        kriterien: [
            ['🖼️', 'Bildstil', 'Fotorealismus, Illustration, Logo oder Produktbild: Jeder Generator hat Stärken. Teste denselben Prompt in zwei, drei Tools.'],
            ['🔤', 'Text im Bild', 'Schriftzüge auf Schildern, Plakaten oder Verpackungen gelingen nicht jedem Modell gleich gut.'],
            ['✂️', 'Bearbeitung', 'Bereiche ersetzen, Bild erweitern, Varianten erzeugen, Hintergrund entfernen: wichtig für echte Projekte.'],
            ['⚖️', 'Nutzungsrechte', 'Darfst du die Bilder kommerziell nutzen? Bei Midjourney etwa brauchen Firmen ab 1 Mio. US-Dollar Jahresumsatz einen Pro- oder Mega-Tarif.'],
            ['🔐', 'Privatsphäre', 'In manchen Gratis-Tarifen sind deine Bilder öffentlich sichtbar. Private Ergebnisse kosten oft extra.'],
        ],
        tipp: 'Beschreibe Motiv, Stil, Licht, Perspektive und Format in dieser Reihenfolge. Das Tutorial zu Bild-Prompts zeigt die Formel mit Beispielen.',
        achtung: 'Keine echten Personen, Marken oder geschützten Figuren nachbauen und KI-Bilder bei Bedarf kennzeichnen. Prüfe vor kommerzieller Nutzung die aktuellen Lizenzbedingungen des Anbieters.',
        faq: [
            { q: 'Welcher KI-Bildgenerator ist der beste?', a: 'Einen klaren Sieger gibt es nicht. Midjourney gilt als stark bei Stil und Ästhetik, Flux und Stable Diffusion sind offen und selbst betreibbar, Design-Tools wie Canva verbinden KI-Bilder mit Vorlagen. Teste mit demselben Prompt.' },
            { q: 'Gibt es kostenlose KI-Bildgeneratoren?', a: 'Ja. Leonardo AI hat einen Gratis-Tarif mit täglichen Tokens, und offene Modelle wie Flux oder Stable Diffusion laufen auch lokal. Midjourney hat dagegen keinen Gratis-Tarif.' },
            { q: 'Darf ich KI-Bilder kommerziell nutzen?', a: 'Das regelt jeder Anbieter in seinen Nutzungsbedingungen, oft abhängig vom Tarif. Lies die Bedingungen vor dem Einsatz in Werbung oder Produkten.' },
            { q: 'Wie schreibe ich gute Bild-Prompts?', a: 'Motiv, Stil, Licht, Perspektive, Farben und Format nennen und unerwünschte Elemente ausschließen. Das Tutorial „Bild-Prompts schreiben“ führt Schritt für Schritt durch.' },
        ],
    },
    video: {
        frage: 'Welches KI-Videotool passt zu dir?',
        kriterien: [
            ['🎬', 'Videoart', 'Text-zu-Video, Avatar-Sprecher, automatischer Schnitt oder Untertitel: Das sind verschiedene Tool-Gruppen.'],
            ['🗣️', 'Deutsche Stimmen', 'Klingen Sprecher und Avatare auf Deutsch natürlich? Unbedingt mit einem eigenen Skript testen.'],
            ['⏱️', 'Länge und Auflösung', 'Gratis-Tarife begrenzen oft Minuten, Auflösung und setzen ein Wasserzeichen.'],
            ['🔁', 'Arbeitsablauf', 'Import von Skript, Blogartikel oder Präsentation spart Zeit. Export in Hochformat für Shorts und Reels ebenfalls.'],
            ['💶', 'Credits', 'Viele Anbieter rechnen in Credits pro Minute. KI-Clips und Avatare verbrauchen meist mehr als Stockmaterial.'],
        ],
        tipp: 'Starte mit dem Skript, nicht mit dem Tool. Ein klares Skript mit Szenen und Sprechertext spart in jedem Videotool die meisten Credits.',
        achtung: 'Stimmen und Gesichter echter Personen nur mit deren Einwilligung klonen. Bei Avataren und synthetischen Stimmen gelten die Regeln der Anbieter und je nach Einsatz Kennzeichnungspflichten.',
        faq: [
            { q: 'Was ist das beste KI-Videotool?', a: 'Für Avatar-Videos sind Synthesia und HeyGen verbreitet, für Video aus Text oder Artikeln InVideo AI, Pictory und Fliki, für kreative KI-Clips Runway, für Schnitt per Transkript Descript. Die Steckbriefe zeigen Preise laut Anbieter.' },
            { q: 'Gibt es kostenlose KI-Videotools?', a: 'Ja, meist mit Gratis-Tarif: begrenzte Minuten, geringere Auflösung und Wasserzeichen. Für Tests reicht das, für veröffentlichte Videos meist nicht.' },
            { q: 'Kann ich YouTube-Videos komplett mit KI erstellen?', a: 'Technisch ja, von Skript über Stimme bis Schnitt. Erfolgreiche Kanäle verbinden KI-Werkzeuge aber mit eigener Expertise, eigenen Beispielen und einer erkennbaren Person.' },
            { q: 'Wie schreibe ich ein Videoskript mit KI?', a: 'Gib Thema, Zielgruppe, Länge und Aufbau mit Hook, Hauptteil und Handlungsaufforderung vor. Der Prompt „YouTube-Skript“ auf AIGeddon liefert die Vorlage.' },
        ],
    },
    marketing: {
        frage: 'Welche KI fürs Marketing brauchst du wirklich?',
        kriterien: [
            ['🎯', 'Aufgabe', 'Anzeigen, Social Posts, E-Mails, SEO oder Landingpages: Kläre zuerst, welche Aufgabe am meisten Zeit frisst.'],
            ['🎨', 'Markenstimme', 'Gute Tools speichern Tonalität, Zielgruppen und Produktinfos, damit Texte konsistent bleiben.'],
            ['🔗', 'Anbindung', 'Verbindung zu Newsletter-Tool, CRM, Shop oder Werbekonto spart Kopierarbeit.'],
            ['📈', 'Messbarkeit', 'Kannst du Varianten testen und Ergebnisse auswerten, statt nur Texte zu erzeugen?'],
            ['💶', 'Kosten pro Nutzer', 'Viele Marketing-Tools rechnen pro Platz. Für kleine Teams ist ein Chatbot plus gute Prompts oft günstiger.'],
        ],
        tipp: 'Baue dir eine Prompt-Bibliothek für wiederkehrende Aufgaben wie Anzeigen, Meta-Daten und Newsletter. Die Prompts auf AIGeddon lassen sich mit einem Klick an ChatGPT, Claude und andere senden.',
        achtung: 'Werbeaussagen, Preise und Heilversprechen nie ungeprüft aus der KI übernehmen. Für Werbung gelten Wettbewerbsrecht und Plattformregeln, egal wer den Text geschrieben hat.',
        faq: [
            { q: 'Welche KI-Tools nutzen Marketer am häufigsten?', a: 'Chatbots wie ChatGPT und Claude für Texte und Ideen, Design-Tools wie Canva für Grafiken, SEO-Tools wie Semrush oder Surfer und Newsletter-Tools mit KI-Funktionen wie beehiiv oder Brevo.' },
            { q: 'Lohnt sich ein spezielles Marketing-KI-Tool?', a: 'Für Teams mit vielen Kanälen und strenger Markenstimme oft ja. Einzelne Gründer kommen mit einem Chatbot, guten Prompts und einem Newsletter-Tool meist weiter und günstiger.' },
            { q: 'Wie viel Zeit spart KI im Marketing?', a: 'Das hängt von deinen Aufgaben ab. Der KI-Zeitersparnis-Rechner auf AIGeddon schätzt es anhand deiner eigenen Stunden pro Woche.' },
            { q: 'Kann KI meine Produkt-Launches planen?', a: 'KI hilft bei Texten, Zeitplan und Checklisten. Der Launch-Zeit-Rechner und der Prompt für Product-Hunt-Launches geben dir einen Startpunkt.' },
        ],
    },
}
