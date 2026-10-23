// „KI-Tools für …“: Einstiegsseiten nach Zielgruppe. Jede Aufgabe verweist auf Tools aus der Datenbank
// (slugs aus db/kb-tools.json) und auf passende Prompts der Bibliothek.
export const ZIELGRUPPEN = [
    {
        slug: 'lehrer',
        name: 'Lehrkräfte',
        titel: 'KI-Tools für Lehrer und Lehrerinnen',
        intro: 'Unterricht vorbereiten, Arbeitsblätter differenzieren, Quizze erstellen, Texte vereinfachen: KI nimmt Lehrkräften Routinearbeit ab. Die pädagogische Entscheidung bleibt bei dir.',
        aufgaben: [
            ['📝', 'Unterricht vorbereiten', 'Stundenverläufe, Einstiege und Tafelbilder als Entwurf erstellen und an die Klasse anpassen.', ['chatgpt', 'claude', 'gemini'], 'lernplan'],
            ['🧩', 'Differenzieren', 'Einen Text in drei Schwierigkeitsstufen umschreiben, für Förderbedarf oder Deutsch als Zweitsprache.', ['claude', 'chatgpt'], 'einfach-erklaeren'],
            ['❓', 'Quiz und Übungen', 'Aus einem Lehrbuchabschnitt Multiple-Choice-Fragen, Lückentexte oder Karteikarten machen.', ['chatgpt', 'gemini'], 'quiz-erstellen'],
            ['🎞️', 'Präsentationen', 'Folien aus einer Gliederung erzeugen und anschließend selbst anpassen.', ['gamma', 'canva'], null],
            ['🔎', 'Recherche mit Quellen', 'Hintergrundwissen mit Quellenangaben sammeln und prüfen.', ['perplexity-ai', 'notebooklm'], 'text-zusammenfassen'],
        ],
        achtung: 'Keine Namen, Noten oder sonstigen personenbezogenen Daten von Schülerinnen und Schülern in KI-Tools eingeben. Prüfe die Vorgaben deines Bundeslands und deiner Schule zum Einsatz von KI.',
        tutorial: 'chatgpt-richtig-nutzen',
        faq: [
            { q: 'Welche KI-Tools sind für Lehrer sinnvoll?', a: 'Für Vorbereitung und Differenzierung reichen die großen Chatbots wie ChatGPT, Claude oder Gemini. Für Folien eignen sich Präsentations-Tools wie Gamma, für Recherche mit Quellen KI-Suchmaschinen wie Perplexity.' },
            { q: 'Dürfen Lehrkräfte KI im Unterricht einsetzen?', a: 'Das regeln Bundesländer und Schulen unterschiedlich. Kläre Datenschutz und Vorgaben mit deiner Schulleitung, bevor Schülerinnen und Schüler selbst mit KI-Tools arbeiten.' },
            { q: 'Wie erkenne ich KI-generierte Hausaufgaben?', a: 'KI-Detektoren sind unzuverlässig und taugen nicht als Beweis. Besser sind Aufgaben mit persönlichem Bezug, Zwischenständen und mündlicher Erläuterung.' },
        ],
    },
    {
        slug: 'studenten',
        name: 'Studierende',
        titel: 'KI-Tools für Studenten und Studentinnen',
        intro: 'Paper finden, Texte verstehen, Lernpläne bauen, für Prüfungen üben: KI ist ein starker Lernpartner, wenn du sie zum Verstehen nutzt und nicht zum Abschreiben.',
        aufgaben: [
            ['📚', 'Paper finden', 'Wissenschaftliche Quellen zu einer Frage suchen und Kernaussagen erfassen.', ['consensus', 'elicit', 'scispace'], null],
            ['🧠', 'Verstehen', 'Schwierige Konzepte einfach erklären lassen und mit Beispielen nachfragen.', ['claude', 'chatgpt'], 'einfach-erklaeren'],
            ['🗂️', 'Lernen und wiederholen', 'Lernplan bis zur Prüfung, Karteikarten und Übungsfragen erstellen.', ['chatgpt', 'notebooklm'], 'karteikarten'],
            ['🧭', 'Hausarbeit planen', 'Forschungsfrage eingrenzen und eine Gliederung entwickeln.', ['chatgpt', 'jenni'], 'hausarbeit-gliederung'],
            ['✍️', 'Texte überarbeiten', 'Formulierungen glätten und Rückmeldung zum eigenen Entwurf bekommen.', ['quillbot', 'claude'], 'text-entkitschen'],
        ],
        achtung: 'Prüfe die Regeln deiner Hochschule zu KI in Prüfungsleistungen und kennzeichne KI-Nutzung, wo es verlangt ist. Zitiere nie Quellen, die du nicht selbst geöffnet hast: KI erfindet manchmal Titel und Autoren.',
        tutorial: 'chatgpt-richtig-nutzen',
        faq: [
            { q: 'Welche KI hilft beim Studium am meisten?', a: 'Zum Verstehen und Üben die großen Chatbots, für die Literatursuche spezialisierte Recherche-Tools wie Consensus, Elicit oder SciSpace, für eigene Unterlagen Werkzeuge wie NotebookLM.' },
            { q: 'Darf ich KI für meine Hausarbeit nutzen?', a: 'Das legt jede Hochschule und oft jede Lehrperson selbst fest. Frag nach und dokumentiere, wofür du KI verwendet hast.' },
            { q: 'Erfindet KI Quellen?', a: 'Ja, das kommt vor und heißt Halluzination. Übernimm nur Quellen, die du selbst gefunden und gelesen hast.' },
        ],
    },
    {
        slug: 'selbststaendige',
        name: 'Selbstständige',
        titel: 'KI-Tools für Selbstständige und Freelancer',
        intro: 'Angebote, E-Mails, Social Media, Buchhaltung vorbereiten: Selbstständige haben keine Abteilung für Routinearbeit. KI übernimmt die Entwürfe, du die Entscheidungen.',
        aufgaben: [
            ['📧', 'E-Mails und Angebote', 'Antworten, Angebote und heikle Nachrichten in deinem Ton entwerfen.', ['chatgpt', 'claude'], 'angebot-schreiben'],
            ['📣', 'Sichtbar werden', 'Posts, Redaktionsplan und Texte für die eigene Website schreiben.', ['chatgpt', 'canva'], 'social-media-redaktionsplan'],
            ['🗓️', 'Meetings und Notizen', 'Gespräche mitschreiben, zusammenfassen und Aufgaben ableiten.', ['otter-ai', 'notion-ai'], 'meeting-zusammenfassung'],
            ['⚙️', 'Automatisieren', 'Wiederkehrende Abläufe zwischen Tools verbinden, etwa Anfrage, Angebot, Rechnung.', ['n8n'], 'automatisierung-planen'],
            ['🎙️', 'Inhalte erstellen', 'Videos und Sprachaufnahmen für Kurse oder Marketing produzieren.', ['eleven-labs', 'synthesia'], null],
        ],
        achtung: 'Rechts-, Steuer- und Vertragsfragen nicht allein auf KI-Antworten stützen. Kundendaten nur in Tools mit Auftragsverarbeitungsvertrag verarbeiten.',
        tutorial: 'eigenen-ki-assistenten-bauen',
        rechner: 'ki-zeitersparnis',
        faq: [
            { q: 'Welche KI-Tools lohnen sich für Selbstständige?', a: 'Ein Chatbot für Texte und Ideen, ein Meeting-Assistent und ein Automatisierungs-Tool decken die meisten Aufgaben ab. Wie viel Zeit das spart, rechnet der KI-Zeitersparnis-Rechner auf AIGeddon aus.' },
            { q: 'Kann ich KI-Abos steuerlich absetzen?', a: 'Beruflich genutzte Software ist in der Regel eine Betriebsausgabe. Kläre die Details mit deiner Steuerberatung.' },
            { q: 'Wie fange ich am besten an?', a: 'Nimm die eine Aufgabe, die dich jede Woche am meisten Zeit kostet, und baue dafür eine Prompt-Vorlage. Erst wenn das sitzt, kommt die nächste.' },
        ],
    },
    {
        slug: 'entwickler',
        name: 'Entwickler',
        titel: 'KI-Tools für Entwickler und Entwicklerinnen',
        intro: 'Code vervollständigen, Fehler finden, Tests schreiben, ganze Features mit Agenten umsetzen: Kaum ein Beruf verändert sich durch KI so schnell wie die Softwareentwicklung.',
        aufgaben: [
            ['⌨️', 'Im Editor', 'Code-Vervollständigung und Chat direkt in der IDE.', ['github-copilot', 'cursor', 'windsurf'], 'code-erklaeren'],
            ['🤖', 'Coding-Agenten', 'Aufgaben über mehrere Dateien selbstständig umsetzen lassen und das Ergebnis prüfen.', ['claude-code', 'openai-codex', 'aider'], null],
            ['🐞', 'Debugging', 'Fehlermeldungen erklären lassen und Ursachen systematisch eingrenzen.', ['claude', 'chatgpt', 'phind'], 'fehlermeldung-debuggen'],
            ['🧪', 'Tests und Regex', 'Testfälle, reguläre Ausdrücke und SQL aus einer Beschreibung erzeugen.', ['chatgpt', 'tabnine'], 'regex-bauen'],
            ['🚀', 'Prototypen', 'Oberflächen und kleine Apps aus einer Beschreibung bauen.', ['v0', 'bolt-new', 'lovable'], null],
        ],
        achtung: 'KI-generierten Code wie fremden Code behandeln: lesen, testen, auf Sicherheitslücken prüfen. Keine Zugangsdaten oder geheimen Schlüssel in Prompts oder Repositories geben.',
        tutorial: 'prompt-kette-vom-thema-zum-artikel',
        rechner: 'api-kosten',
        faq: [
            { q: 'Welcher KI-Code-Assistent ist der beste?', a: 'GitHub Copilot ist am weitesten verbreitet, Cursor und Windsurf setzen auf einen eigenen Editor, Claude Code und OpenAI Codex arbeiten als Agenten im Terminal. Teste zwei davon an deinem eigenen Projekt.' },
            { q: 'Gibt es kostenlose KI-Coding-Tools?', a: 'Ja, etwa Open-Source-Assistenten wie Continue oder aider, die du mit eigenen API-Schlüsseln oder lokalen Modellen nutzt. Die Kosten für API-Nutzung schätzt der API-Kosten-Rechner.' },
            { q: 'Ist KI-Code sicher?', a: 'Nicht automatisch. Er kann Fehler und Sicherheitslücken enthalten. Code-Review und Tests bleiben Pflicht.' },
        ],
    },
    {
        slug: 'marketing',
        name: 'Marketing',
        titel: 'KI-Tools für Marketing und Content',
        intro: 'Kampagnen planen, Texte in Markenstimme schreiben, Bilder und Videos produzieren, SEO-Briefings erstellen: Marketing-Teams setzen KI vom ersten Entwurf bis zur Auswertung ein.',
        aufgaben: [
            ['✍️', 'Texte in Markenstimme', 'Anzeigen, Produkttexte und E-Mails mit festen Stilvorgaben schreiben.', ['jasper', 'copy-ai', 'anyword'], 'werbe-email-aktion'],
            ['🔍', 'SEO', 'Keyword-Cluster, Content-Briefings und Meta-Daten erstellen.', ['chatgpt', 'claude'], 'content-briefing'],
            ['🖼️', 'Bilder', 'Kampagnenmotive, Social-Grafiken und Varianten erzeugen.', ['midjourney', 'ideogram', 'canva'], 'bild-prompt-generator'],
            ['🎬', 'Video', 'Erklärvideos, Avatare und Social Clips produzieren.', ['synthesia', 'heygen', 'runway'], 'youtube-skript'],
            ['📆', 'Social Media', 'Redaktionsplan, Captions und Posts für mehrere Kanäle.', ['chatgpt', 'canva'], 'social-media-redaktionsplan'],
        ],
        achtung: 'Werbeaussagen, Preise und Vergleiche immer selbst prüfen. Für KI-Bilder und -Videos gelten die Nutzungsbedingungen der Anbieter und je nach Einsatz Kennzeichnungspflichten.',
        tutorial: 'newsletter-mit-ki-in-einer-stunde',
        rechner: 'newsletter-umsatz',
        faq: [
            { q: 'Welche KI-Tools nutzen Marketing-Teams?', a: 'Chatbots für Texte und Ideen, spezialisierte Schreibtools mit Markenstimme, Bildgeneratoren, Video-Tools mit Avataren und SEO-Werkzeuge. Welche Kombination passt, hängt von Kanälen und Teamgröße ab.' },
            { q: 'Ersetzt KI Texter und Designer?', a: 'KI beschleunigt Entwürfe und Varianten. Strategie, Markengefühl und die Auswahl der besten Idee bleiben menschliche Arbeit.' },
            { q: 'Wie behalte ich mit KI eine einheitliche Markenstimme?', a: 'Mit festen Stilvorgaben, Beispielen guter Texte und einer Liste verbotener Wörter im Prompt oder in einem eigenen Assistenten.' },
        ],
    },
]

export const getZielgruppe = (slug) => ZIELGRUPPEN.find((z) => z.slug === slug) || null
