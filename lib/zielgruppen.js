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
        achtung:
            'Keine Namen, Noten oder sonstigen personenbezogenen Daten von Schülerinnen und Schülern in KI-Tools eingeben. Prüfe die Vorgaben deines Bundeslands und deiner Schule zum Einsatz von KI.',
        tutorial: 'chatgpt-richtig-nutzen',
        faq: [
            {
                q: 'Welche KI-Tools sind für Lehrer sinnvoll?',
                a: 'Für Vorbereitung und Differenzierung reichen die großen Chatbots wie ChatGPT, Claude oder Gemini. Für Folien eignen sich Präsentations-Tools wie Gamma, für Recherche mit Quellen KI-Suchmaschinen wie Perplexity.',
            },
            {
                q: 'Dürfen Lehrkräfte KI im Unterricht einsetzen?',
                a: 'Ja, die Kultusministerkonferenz empfiehlt seit ihrer Handlungsempfehlung vom 10.10.2024 einen konstruktiv-kritischen Umgang mit KI. Die konkreten Regeln setzen aber Bundesländer und Schulen unterschiedlich. Kläre Datenschutz und Vorgaben mit deiner Schulleitung, bevor Schülerinnen und Schüler selbst mit KI-Tools arbeiten.',
            },
            {
                q: 'Wie erkenne ich KI-generierte Hausaufgaben?',
                a: 'KI-Detektoren sind unzuverlässig und taugen nicht als Beweis. Besser sind Aufgaben mit persönlichem Bezug, Zwischenständen und mündlicher Erläuterung.',
            },
            {
                q: 'Darf ich Klassenarbeiten von einer KI bewerten lassen?',
                a: 'Als Hilfe ja, die Note gibst aber du. Die KMK-Handlungsempfehlung stellt klar, dass Leistungsbewertung eine hoheitliche Aufgabe der Lehrkraft bleibt, und Art. 22 DSGVO verlangt eine menschliche Letztentscheidung. KI-Systeme, die Lernergebnisse bewerten, gelten im EU AI Act als Hochrisiko, die Pflichten dafür greifen ab 2. Dezember 2027. KI zur Emotionserkennung in Schulen ist schon seit Februar 2025 verboten.',
            },
            {
                q: 'Gibt es einen datenschutzkonformen KI-Chatbot für Schulen?',
                a: 'Ja, AIS.chat (bis Mai 2026 telli), im Auftrag aller 16 Bundesländer vom FWU entwickelt. Du meldest dich über das Schulportal an, die Sprachmodelle laufen laut FWU auf Servern in der EU, und Eingaben werden nicht zum Training genutzt. Ob und mit welchen Modellen AIS.chat in deinem Land freigeschaltet ist, entscheidet das jeweilige Bundesland.',
            },
        ],
        quellen: [
            {
                titel: 'KMK: Handlungsempfehlung zum Umgang mit KI in schulischen Bildungsprozessen (10.10.2024)',
                url: 'https://kmk.org/fileadmin/Dateien/veroeffentlichungen_beschluesse/2024/2024_10_10-Handlungsempfehlung-KI.pdf',
            },
            {
                titel: 'FWU: Neuer Name für den KI-Chatbot (AIS.chat)',
                url: 'https://fwu.de/presse/neuer-name-fuer-den-ki-chatbot/',
            },
            {
                titel: 'AI Act Service Desk: Emotionserkennung am Arbeitsplatz und in Bildungseinrichtungen',
                url: 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/faq/emotion-recognition-prohibited-workplaceeducation-settings-or-these-purposes-eg-employee',
            },
            {
                titel: 'EUR-Lex: Verordnung (EU) 2026/1744 (Digital Omnibus)',
                url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj/eng',
            },
        ],
        geprueft: '2026-10-26',
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
        achtung:
            'Prüfe die Regeln deiner Hochschule zu KI in Prüfungsleistungen und kennzeichne KI-Nutzung, wo es verlangt ist. Zitiere nie Quellen, die du nicht selbst geöffnet hast: KI erfindet manchmal Titel und Autoren.',
        tutorial: 'chatgpt-richtig-nutzen',
        faq: [
            {
                q: 'Welche KI hilft beim Studium am meisten?',
                a: 'Zum Verstehen und Üben die großen Chatbots, für die Literatursuche spezialisierte Recherche-Tools wie Consensus, Elicit oder SciSpace, für eigene Unterlagen Werkzeuge wie Gemini Notebook (früher NotebookLM).',
            },
            {
                q: 'Darf ich KI für meine Hausarbeit nutzen?',
                a: 'Das legt jede Hochschule und oft jede Lehrperson selbst fest. Frag nach und dokumentiere, wofür du KI verwendet hast.',
            },
            {
                q: 'Erfindet KI Quellen?',
                a: 'Ja, das kommt vor und heißt Halluzination. Übernimm nur Quellen, die du selbst gefunden und gelesen hast.',
            },
            {
                q: 'Was ist aus NotebookLM geworden?',
                a: 'Google hat NotebookLM am 16. Juli 2026 in Gemini Notebook umbenannt. Es bleibt ein eigenständiges Recherche-Tool für deine Unterlagen, ist aber mit der Gemini-App synchronisiert. Neu ist laut Google ein Cloud-Rechner pro Notizbuch, auf dem Gemini Notebook Python-Code für Datenanalysen ausführt, zuerst für Ultra-Abos und schrittweise für Pro im Web.',
            },
            {
                q: 'Werden meine Chats zum Training der KI genutzt?',
                a: 'Bei privaten Konten oft ja. In ChatGPT Free, Plus und Pro ist die Option „Das Modell für alle verbessern“ standardmäßig an, du kannst sie in den Datenkontrollen abschalten. Bei Claude Free, Pro und Max entscheidest du selbst, erlaubst du das Training, speichert Anthropic die Daten bis zu fünf Jahre. Über Hochschul-Lizenzen wie ChatGPT Edu oder Claude for Education werden Inhalte laut Anbieter standardmäßig nicht zum Training genutzt.',
            },
        ],
        quellen: [
            {
                titel: 'Google: NotebookLM is now Gemini Notebook',
                url: 'https://blog.google/innovation-and-ai/products/gemini-notebook/notebooklm-gemini-notebook/',
            },
            {
                titel: 'OpenAI Help: Data controls in ChatGPT',
                url: 'https://help.openai.com/en/articles/7730893-data-controls-in-chatgpt',
            },
            {
                titel: 'Anthropic: Updates to Consumer Terms and Privacy Policy',
                url: 'https://www.anthropic.com/news/updates-to-our-consumer-terms',
            },
        ],
        geprueft: '2026-10-26',
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
            {
                q: 'Welche KI-Tools lohnen sich für Selbstständige?',
                a: 'Ein Chatbot für Texte und Ideen, ein Meeting-Assistent und ein Automatisierungs-Tool decken die meisten Aufgaben ab. Wie viel Zeit das spart, rechnet der KI-Zeitersparnis-Rechner auf AIGeddon aus.',
            },
            {
                q: 'Kann ich KI-Abos steuerlich absetzen?',
                a: 'Beruflich genutzte Software ist in der Regel eine Betriebsausgabe. Kläre die Details mit deiner Steuerberatung.',
            },
            {
                q: 'Wie fange ich am besten an?',
                a: 'Nimm die eine Aufgabe, die dich jede Woche am meisten Zeit kostet, und baue dafür eine Prompt-Vorlage. Erst wenn das sitzt, kommt die nächste.',
            },
            {
                q: 'Muss ich KI-Schulungen nach dem EU AI Act nachweisen?',
                a: 'Einen festen Nachweis verlangt das Gesetz nicht. Seit dem Digital Omnibus (Verordnung (EU) 2026/1744) müssen Unternehmen, die KI einsetzen, nach Art. 4 Maßnahmen treffen, um die KI-Kompetenz ihrer Beschäftigten und anderer Personen zu fördern, die in ihrem Auftrag KI nutzen. Ein bestimmtes Kompetenzniveau ist ausdrücklich nicht vorgeschrieben, die EU-Kommission veröffentlicht dazu Praxisbeispiele. Arbeiten Mitarbeitende oder Freie für dich mit KI, dokumentiere kurz, wie du sie einweist.',
            },
            {
                q: 'Werden Kundendaten, die ich in ChatGPT oder Claude eingebe, zum Training genutzt?',
                a: 'In Business-, Enterprise- und API-Zugängen laut OpenAI und Anthropic standardmäßig nicht. In privaten Konten schon eher: Bei ChatGPT Free, Plus und Pro ist die Trainingsnutzung voreingestellt und abschaltbar, bei Claude Free, Pro und Max wählst du selbst. Die Datenschutzkonferenz empfiehlt betriebliche statt privater Accounts und das Abschalten der Trainingsnutzung. Für Kundendaten brauchst du außerdem einen Auftragsverarbeitungsvertrag.',
            },
        ],
        quellen: [
            {
                titel: 'EUR-Lex: Verordnung (EU) 2026/1744 (Digital Omnibus)',
                url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj/eng',
            },
            {
                titel: 'EU-Kommission: AI Literacy, Questions & Answers',
                url: 'https://digital-strategy.ec.europa.eu/en/faqs/ai-literacy-questions-answers',
            },
            {
                titel: 'OpenAI: Business data privacy',
                url: 'https://openai.com/business-data/',
            },
            {
                titel: 'DSK: Orientierungshilfe Künstliche Intelligenz und Datenschutz (6.5.2024)',
                url: 'https://www.datenschutzkonferenz-online.de/media/oh/20240506_DSK_Orientierungshilfe_KI_und_Datenschutz.pdf',
            },
        ],
        geprueft: '2026-10-26',
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
            {
                q: 'Welcher KI-Code-Assistent ist der beste?',
                a: 'GitHub Copilot steckt direkt in GitHub und vielen IDEs, Cursor und Devin Desktop (früher Windsurf) setzen auf einen eigenen Editor, Claude Code und OpenAI Codex arbeiten als Agenten im Terminal, in der IDE, als Desktop-App und im Browser. Teste zwei davon an deinem eigenen Projekt.',
            },
            {
                q: 'Gibt es kostenlose KI-Coding-Tools?',
                a: 'Ja, etwa Open-Source-Assistenten wie Continue oder aider, die du mit eigenen API-Schlüsseln oder lokalen Modellen nutzt. Die Kosten für API-Nutzung schätzt der API-Kosten-Rechner.',
            },
            {
                q: 'Ist KI-Code sicher?',
                a: 'Nicht automatisch. Er kann Fehler und Sicherheitslücken enthalten. Code-Review und Tests bleiben Pflicht.',
            },
            {
                q: 'Was ist aus Windsurf geworden?',
                a: 'Cognition hat Windsurf am 2. Juni 2026 in Devin Desktop umbenannt. Es bleibt eine vollwertige IDE, kompatibel mit Windsurf- und VS-Code-Erweiterungen, mit einer Agenten-Zentrale als Startansicht. Über das Agent Client Protocol laufen darin laut Cognition auch fremde Agenten wie Codex und Claude Agent. Der lokale Agent Cascade wurde durch Devin Local ersetzt.',
            },
            {
                q: 'Was sind MCP und Agent Skills?',
                a: 'Das Model Context Protocol (MCP) ist ein offener Standard, um KI-Agenten an Werkzeuge und Datenquellen anzubinden. Anthropic hat ihn im Dezember 2025 an die Agentic AI Foundation der Linux Foundation übergeben. Agent Skills sind ein offenes Format für wiederverwendbares Wissen: ein Ordner mit einer SKILL.md-Datei, optional mit Skripten und Vorlagen, den kompatible Agenten wie Claude Code, OpenAI Codex oder GitHub Copilot in VS Code bei Bedarf laden.',
            },
        ],
        quellen: [
            {
                titel: 'Cognition: Windsurf is now Devin Desktop',
                url: 'https://devin.ai/blog/windsurf-is-now-devin-desktop',
            },
            {
                titel: 'Linux Foundation: Gründung der Agentic AI Foundation',
                url: 'https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation',
            },
            {
                titel: 'Agent Skills: Specification',
                url: 'https://agentskills.io/specification',
            },
        ],
        geprueft: '2026-10-26',
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
        achtung:
            'Werbeaussagen, Preise und Vergleiche immer selbst prüfen. Für KI-Bilder und -Videos gelten die Nutzungsbedingungen der Anbieter und seit 2. August 2026 die Kennzeichnungspflicht für Deepfakes nach Art. 50 EU AI Act.',
        tutorial: 'newsletter-mit-ki-in-einer-stunde',
        rechner: 'newsletter-umsatz',
        faq: [
            {
                q: 'Welche KI-Tools nutzen Marketing-Teams?',
                a: 'Chatbots für Texte und Ideen, spezialisierte Schreibtools mit Markenstimme, Bildgeneratoren, Video-Tools mit Avataren und SEO-Werkzeuge. Welche Kombination passt, hängt von Kanälen und Teamgröße ab.',
            },
            {
                q: 'Ersetzt KI Texter und Designer?',
                a: 'KI beschleunigt Entwürfe und Varianten. Strategie, Markengefühl und die Auswahl der besten Idee bleiben menschliche Arbeit.',
            },
            {
                q: 'Wie behalte ich mit KI eine einheitliche Markenstimme?',
                a: 'Mit festen Stilvorgaben, Beispielen guter Texte und einer Liste verbotener Wörter im Prompt oder in einem eigenen Assistenten.',
            },
            {
                q: 'Muss ich KI-Bilder und KI-Videos in Kampagnen kennzeichnen?',
                a: 'Wenn es Deepfakes sind, ja. Seit dem 2. August 2026 verlangt Art. 50 Abs. 4 EU AI Act einen klaren Hinweis, wenn KI-Bilder, -Audio oder -Videos echten Personen, Gegenständen, Orten oder Ereignissen ähneln und fälschlich echt wirken könnten. Bei erkennbar künstlerischen oder satirischen Werken reicht ein Hinweis, der den Genuss nicht stört. Die EU hat dafür Symbole bereitgestellt, und die Kommission hat Leitlinien veröffentlicht.',
            },
            {
                q: 'Muss ich KI-geschriebene Texte kennzeichnen?',
                a: 'Der EU AI Act verlangt das nur für Texte, die die Öffentlichkeit über Angelegenheiten von öffentlichem Interesse informieren sollen. Die Pflicht entfällt, wenn ein Mensch den Text redaktionell geprüft hat und jemand die redaktionelle Verantwortung trägt. Unabhängig davon gilt das Wettbewerbsrecht: Aussagen müssen stimmen, egal wer sie geschrieben hat.',
            },
        ],
        quellen: [
            {
                titel: 'AI Act Service Desk: Artikel 50',
                url: 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50',
            },
            {
                titel: 'EU-Kommission: Safer and more transparent AI (2.8.2026)',
                url: 'https://commission.europa.eu/news-and-media/news/safer-and-more-transparent-ai-2026-08-02_en',
            },
            {
                titel: 'EU-Kommission: Leitlinien zu Transparenzpflichten',
                url: 'https://digital-strategy.ec.europa.eu/en/policies/guidelines-ai-transparency-obligations',
            },
        ],
        geprueft: '2026-10-26',
    },
    {
        slug: 'onlinehaendler',
        name: 'Onlinehändler',
        titel: 'KI-Tools für Onlinehändler und Shops',
        intro: 'Produkttexte, Produktfotos, Kundenservice und Newsletter: Im Onlinehandel fällt viel wiederkehrende Arbeit an, die KI vorbereiten kann. Prüfen und freigeben bleibt Sache des Shops.',
        aufgaben: [
            ['🏷️', 'Produkttexte', 'Beschreibungen, Bulletpoints und Meta-Daten aus Stichpunkten und Datenblättern erstellen.', ['chatgpt', 'claude'], 'produktbeschreibung-shop'],
            ['📸', 'Produktfotos', 'Hintergründe entfernen, Freisteller und Szenenbilder für Produkte erzeugen.', ['photoroom', 'clipdrop', 'remove-bg'], 'produktfoto-briefing'],
            ['💬', 'Kundenservice', 'Antworten auf Bewertungen und Anfragen freundlich und einheitlich formulieren.', ['chatgpt', 'claude'], 'kundenbewertung-antworten'],
            ['❓', 'Produkt-FAQ', 'Häufige Kundenfragen sammeln und als FAQ für Produktseiten aufbereiten.', ['chatgpt', 'perplexity-ai'], 'produkt-faq'],
            ['📧', 'Aktionen und Newsletter', 'Werbe-Mails, Betreffzeilen und Aktionstexte vorbereiten.', ['copy-ai', 'jasper'], 'werbe-email-aktion'],
        ],
        achtung:
            'Technische Daten, Preise, Lieferzeiten und Garantieaussagen nie ungeprüft aus der KI übernehmen. Für Werbung gelten Wettbewerbsrecht und Kennzeichnungspflichten, auch bei KI-Bildern.',
        tutorial: 'newsletter-mit-ki-in-einer-stunde',
        rechner: 'ki-zeitersparnis',
        faq: [
            {
                q: 'Welche KI-Tools helfen Onlineshops am meisten?',
                a: 'Chatbots für Produkttexte und Kundenservice, Bildwerkzeuge zum Freistellen und für Szenenbilder sowie Newsletter-Tools mit KI-Funktionen. Am meisten Zeit sparen meist die Produkttexte.',
            },
            {
                q: 'Kann ich Produkttexte komplett mit KI schreiben?',
                a: 'Als Entwurf ja. Gib der KI echte Produktdaten mit und prüfe jeden Text auf korrekte Angaben, bevor er online geht. Einheitliche Vorlagen sorgen für gleichbleibende Qualität.',
            },
            {
                q: 'Sind KI-Produktfotos erlaubt?',
                a: 'Ja, solange sie das Produkt nicht irreführend darstellen. Farbe, Größe und Lieferumfang müssen dem echten Produkt entsprechen.',
            },
            {
                q: 'Muss mein Shop-Chatbot sagen, dass er eine KI ist?',
                a: 'Ja, seit dem 2. August 2026 müssen Menschen nach Art. 50 Abs. 1 EU AI Act erkennen können, dass sie mit einer KI sprechen, sofern das nicht ohnehin offensichtlich ist. Die Kommission nennt ausdrücklich Chatbots, KI-Agenten und Avatare. Die Pflicht trifft den Anbieter des Systems, prüfe also bei gekauften Chat-Lösungen, ob der Hinweis spätestens bei der ersten Nachricht erscheint.',
            },
            {
                q: 'Gelten KI-Szenenbilder von Produkten als Deepfake?',
                a: 'Sie können es sein. Der EU AI Act zählt auch realistisch wirkende Darstellungen existierender Gegenstände und Orte zu Deepfakes, wenn sie fälschlich echt wirken. Dann musst du seit 2. August 2026 offenlegen, dass das Bild KI-generiert ist. Unabhängig davon darf ein Bild Farbe, Größe oder Lieferumfang nicht irreführend zeigen.',
            },
        ],
        quellen: [
            {
                titel: 'AI Act Service Desk: Artikel 50',
                url: 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50',
            },
            {
                titel: 'AI Act Service Desk: Artikel 3 (Begriffsbestimmungen, Deepfake)',
                url: 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-3',
            },
            {
                titel: 'EU-Kommission: Safer and more transparent AI (2.8.2026)',
                url: 'https://commission.europa.eu/news-and-media/news/safer-and-more-transparent-ai-2026-08-02_en',
            },
        ],
        geprueft: '2026-10-26',
    },
    {
        slug: 'content-creator',
        name: 'Content Creator',
        titel: 'KI-Tools für Content Creator und YouTuber',
        intro: 'Skripte, Thumbnails, Schnitt, Untertitel, Voiceover: KI beschleunigt jeden Schritt der Produktion. Die Idee, die Persönlichkeit und die Haltung bleiben deine.',
        aufgaben: [
            ['🎬', 'Skripte', 'Videoskripte mit Hook, Struktur und Handlungsaufforderung entwerfen.', ['chatgpt', 'claude'], 'youtube-skript'],
            ['✂️', 'Schnitt und Shorts', 'Lange Videos schneiden, Untertitel erzeugen und Kurzclips ableiten.', ['capcut', 'runway'], 'shorts-ideen'],
            ['🖼️', 'Thumbnails', 'Bildideen und Varianten für Thumbnails und Social-Grafiken erzeugen.', ['midjourney', 'ideogram', 'canva'], 'bild-prompt-generator'],
            ['🎙️', 'Voiceover', 'Sprechertexte vertonen oder in andere Sprachen übertragen.', ['eleven-labs', 'murf-ai'], null],
            ['♻️', 'Wiederverwerten', 'Aus einem Video Blogartikel, Captions und Newsletter machen.', ['chatgpt', 'claude'], 'video-zu-blogartikel'],
        ],
        achtung:
            'Stimmen und Gesichter anderer Personen nur mit Einwilligung klonen. Deepfakes musst du seit 2. August 2026 nach dem EU AI Act kennzeichnen, YouTube verlangt das für alle realistischen KI-Inhalte. Prüfe zusätzlich die aktuellen Regeln von Instagram und TikTok.',
        tutorial: 'bild-prompts-schreiben',
        faq: [
            {
                q: 'Welche KI-Tools nutzen YouTuber?',
                a: 'Chatbots für Skripte und Titel, Videoeditoren mit KI-Funktionen für Schnitt und Untertitel, Bildgeneratoren für Thumbnails und Sprach-KI für Voiceover.',
            },
            {
                q: 'Kann ein YouTube-Kanal mit KI-Videos erfolgreich sein?',
                a: 'Kanäle mit erkennbarer Person, eigener Expertise und echtem Mehrwert haben es leichter. KI hilft beim Produzieren, ersetzt aber nicht den Grund, warum Menschen einschalten.',
            },
            {
                q: 'Muss ich KI-Inhalte kennzeichnen?',
                a: 'Bei realistischen Fälschungen ja. Seit dem 2. August 2026 musst du nach Art. 50 Abs. 4 EU AI Act offenlegen, wenn Bild, Ton oder Video ein Deepfake ist, also echte Personen, Orte oder Ereignisse täuschend echt zeigt. Zusätzlich verlangen Plattformen wie YouTube eine Kennzeichnung realistischer KI-Inhalte beim Upload.',
            },
            {
                q: 'Was genau verlangt YouTube bei KI-Inhalten?',
                a: 'YouTube verlangt eine Offenlegung, wenn KI-Inhalte realistisch wirken: wenn eine echte Person scheinbar etwas sagt oder tut, was sie nie getan hat, wenn Aufnahmen realer Orte oder Ereignisse verändert werden, wenn eine realistische Szene gezeigt wird, die nie stattfand, oder wenn KI-Musik im Mittelpunkt steht. Du setzt dafür beim Upload in YouTube Studio die Angabe „KI-Nutzung“. Skripte, Ideen oder Untertitel mit KI musst du nicht kennzeichnen.',
            },
            {
                q: 'Gilt der EU AI Act auch für mich als Creator?',
                a: 'Ja, sobald du nicht rein privat postest. Seit dem 2. August 2026 musst du Deepfakes offenlegen, also KI-Bilder, -Audio und -Videos, die echte Personen, Orte oder Ereignisse täuschend echt zeigen. Bei erkennbar satirischen oder fiktionalen Werken genügt ein Hinweis, der das Werk nicht stört. Ausgenommen ist nur die Nutzung im Rahmen einer persönlichen, nicht beruflichen Tätigkeit.',
            },
        ],
        quellen: [
            {
                titel: 'YouTube-Hilfe: Offenlegung von KI-Inhalten',
                url: 'https://support.google.com/youtube/answer/14328491',
            },
            {
                titel: 'AI Act Service Desk: Artikel 50',
                url: 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50',
            },
            {
                titel: 'AI Act Service Desk: Artikel 3 (Begriffsbestimmungen)',
                url: 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-3',
            },
        ],
        geprueft: '2026-10-26',
    },
    {
        slug: 'hr-recruiting',
        name: 'HR & Recruiting',
        titel: 'KI-Tools für HR und Recruiting',
        intro: 'Stellenanzeigen, Interviewleitfäden, Onboarding-Unterlagen, interne Kommunikation: In HR-Abteilungen kann KI viel Schreibarbeit übernehmen. Bei Personalentscheidungen ist Vorsicht geboten.',
        aufgaben: [
            ['📝', 'Texte für Stellen und Teams', 'Stellenanzeigen, Rundmails und Onboarding-Texte klar und einladend formulieren.', ['chatgpt', 'claude'], 'stellenanzeige'],
            ['🗣️', 'Interviews vorbereiten', 'Leitfäden und Fragen passend zur Stelle entwickeln.', ['chatgpt', 'claude'], 'vorstellungsgespraech-training'],
            ['🗓️', 'Gespräche dokumentieren', 'Meetings protokollieren und Aufgaben ableiten, mit Einwilligung aller Beteiligten.', ['otter-ai', 'fireflies-ai'], 'meeting-zusammenfassung'],
            ['📚', 'Wissen bündeln', 'Richtlinien und Handbücher zusammenfassen und durchsuchbar machen.', ['notion-ai', 'notebooklm'], 'text-zusammenfassen'],
            ['🎓', 'Schulungen', 'Lernmaterial und Erklärvideos für Onboarding und Weiterbildung erstellen.', ['synthesia', 'gamma'], 'onboarding-plan'],
        ],
        achtung:
            'Bewerberdaten sind besonders schützenswert. Keine Lebensläufe oder Personalakten in Tools ohne Auftragsverarbeitungsvertrag laden, und Personalentscheidungen nie allein einer KI überlassen. Der EU AI Act stuft KI-Systeme für Bewerberauswahl als Hochrisiko-Anwendungen ein, die Pflichten dafür gelten ab 2. Dezember 2027. Emotionserkennung am Arbeitsplatz ist schon seit Februar 2025 verboten.',
        tutorial: 'eigenen-ki-assistenten-bauen',
        rechner: 'ki-zeitersparnis',
        faq: [
            {
                q: 'Wofür nutzen HR-Teams KI?',
                a: 'Vor allem für Texte: Stellenanzeigen, interne Kommunikation, Onboarding-Material und Interviewleitfäden. Dazu kommen Protokolle und das Zusammenfassen von Richtlinien.',
            },
            {
                q: 'Darf KI Bewerbungen vorsortieren?',
                a: 'Das ist rechtlich heikel. Der EU AI Act stuft solche Systeme als Hochrisiko ein, die Pflichten dafür gelten nach der Änderung durch den Digital Omnibus (Verordnung (EU) 2026/1744) ab dem 2. Dezember 2027. Datenschutz und Gleichbehandlung gelten schon heute. Kläre den Einsatz mit Datenschutz, Betriebsrat und Rechtsberatung.',
            },
            {
                q: 'Wie schreibe ich mit KI eine gute Stellenanzeige?',
                a: 'Gib Aufgaben, Anforderungen, Benefits und Ton vor und bitte um eine Fassung ohne Floskeln und mit geschlechtergerechter Sprache. Prüfe den Text danach auf Richtigkeit.',
            },
            {
                q: 'Darf ich KI einsetzen, um Emotionen von Beschäftigten zu erkennen?',
                a: 'Nein. Seit dem 2. Februar 2025 verbietet Art. 5 Abs. 1 lit. f EU AI Act KI-Systeme, die Emotionen von Menschen am Arbeitsplatz ableiten. Ausnahmen gibt es nur aus medizinischen oder Sicherheitsgründen, und auch dann gelten Datenschutz- und Arbeitsrecht weiter. Das Verbot greift auch, wenn ein allgemeiner KI-Assistent für diesen Zweck eingesetzt wird.',
            },
            {
                q: 'Muss der Betriebsrat bei KI-Tools beteiligt werden?',
                a: 'Ja. Nach § 90 Abs. 1 Nr. 3 BetrVG musst du den Betriebsrat rechtzeitig über geplante Arbeitsverfahren einschließlich des Einsatzes von KI unterrichten und mit ihm beraten. Nach § 80 Abs. 3 BetrVG gilt ein Sachverständiger als erforderlich, wenn der Betriebsrat KI beurteilen muss, und § 95 Abs. 2a BetrVG erfasst Auswahlrichtlinien, die mit KI aufgestellt werden. Für Hochrisiko-Systeme kommt ab 2. Dezember 2027 die Informationspflicht gegenüber Beschäftigtenvertretern aus dem EU AI Act hinzu.',
            },
        ],
        quellen: [
            {
                titel: 'AI Act Service Desk: Emotionserkennung am Arbeitsplatz',
                url: 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/faq/emotion-recognition-prohibited-workplaceeducation-settings-or-these-purposes-eg-employee',
            },
            {
                titel: '§ 90 BetrVG',
                url: 'https://www.gesetze-im-internet.de/betrvg/__90.html',
            },
            {
                titel: '§ 80 BetrVG',
                url: 'https://www.gesetze-im-internet.de/betrvg/__80.html',
            },
            {
                titel: 'EUR-Lex: Verordnung (EU) 2026/1744 (Digital Omnibus)',
                url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj/eng',
            },
        ],
        geprueft: '2026-10-26',
    },
    {
        slug: 'handwerk',
        name: 'Handwerk',
        titel: 'KI-Tools für Handwerk und Handwerksbetriebe',
        intro: 'Angebote, Kundenmails, Social Media, Website-Texte: Im Handwerk bleibt die Büroarbeit oft am Abend liegen. KI erledigt die Entwürfe, damit mehr Zeit für die Baustelle bleibt.',
        aufgaben: [
            ['📄', 'Angebote und Anschreiben', 'Angebotstexte und Begleitschreiben aus Stichpunkten formulieren.', ['chatgpt', 'claude'], 'angebot-schreiben'],
            ['📧', 'Kundenkommunikation', 'Antworten auf Anfragen, Terminverschiebungen und Reklamationen schreiben.', ['chatgpt', 'claude'], 'kundenanfrage-handwerk'],
            ['📱', 'Social Media', 'Vorher-Nachher-Posts und Captions für Instagram und Facebook erstellen.', ['chatgpt', 'canva'], 'instagram-caption'],
            ['⭐', 'Bewertungen beantworten', 'Auf Google-Bewertungen freundlich und professionell reagieren.', ['chatgpt', 'claude'], 'kundenbewertung-antworten'],
            ['🔎', 'Fragen klären', 'Normen, Fördermittel oder Materialfragen recherchieren, mit Quellen zum Nachprüfen.', ['perplexity-ai', 'gemini'], 'text-zusammenfassen'],
        ],
        achtung: 'Technische Werte, Normen, Fördermittel und rechtliche Fragen immer an der Originalquelle prüfen. Kundendaten nur mit Platzhaltern in KI-Tools eingeben.',
        tutorial: 'chatgpt-richtig-nutzen',
        rechner: 'ki-zeitersparnis',
        faq: [
            {
                q: 'Lohnt sich KI für kleine Handwerksbetriebe?',
                a: 'Ja, vor allem bei Büroarbeit: Angebote, Mails, Bewertungen und Social Media. Ein kostenloser oder günstiger Chatbot reicht für den Anfang.',
            },
            {
                q: 'Kann KI Angebote kalkulieren?',
                a: 'KI kann Texte und Strukturen vorbereiten, aber keine verlässliche Kalkulation ersetzen. Preise, Mengen und Material rechnest du selbst oder mit deiner Branchensoftware.',
            },
            {
                q: 'Wie fange ich am einfachsten an?',
                a: 'Nimm die nächste Kundenmail, die du aufschiebst, und lass dir einen Entwurf schreiben. Die Prompt-Vorlagen auf AIGeddon helfen beim Formulieren.',
            },
            {
                q: 'Gilt der EU AI Act auch für meinen Handwerksbetrieb?',
                a: 'Teilweise ja. Seit Februar 2025 musst du nach Art. 4 Maßnahmen treffen, damit Beschäftigte, die KI-Tools nutzen, damit umgehen können. Seit dem Digital Omnibus ist dafür kein bestimmtes Niveau mehr vorgeschrieben, eine kurze Einweisung mit klaren Regeln ist ein guter Anfang. Setzt du KI-Bilder ein, die echt wirken, oder einen Chatbot auf deiner Website, gelten seit 2. August 2026 zusätzlich die Transparenzpflichten aus Art. 50.',
            },
            {
                q: 'Was sagen die Datenschutzbehörden zum Einsatz von KI-Chatbots?',
                a: 'Die Datenschutzkonferenz rät in ihrer Orientierungshilfe vom 6. Mai 2024: Zweck vorher festlegen, betriebliche statt privater Accounts nutzen, Training mit eigenen Eingaben möglichst abschalten, keine Entscheidung mit Rechtswirkung allein der KI überlassen und jedes Ergebnis auf Richtigkeit prüfen. Personenbezogene Kundendaten gibst du am besten gar nicht oder nur mit Platzhaltern ein.',
            },
        ],
        quellen: [
            {
                titel: 'EUR-Lex: Verordnung (EU) 2026/1744 (Digital Omnibus)',
                url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj/eng',
            },
            {
                titel: 'EU-Kommission: AI Literacy, Questions & Answers',
                url: 'https://digital-strategy.ec.europa.eu/en/faqs/ai-literacy-questions-answers',
            },
            {
                titel: 'DSK: Orientierungshilfe Künstliche Intelligenz und Datenschutz (6.5.2024)',
                url: 'https://www.datenschutzkonferenz-online.de/media/oh/20240506_DSK_Orientierungshilfe_KI_und_Datenschutz.pdf',
            },
        ],
        geprueft: '2026-10-26',
    },
    {
        slug: 'schueler',
        name: 'Schüler',
        titel: 'KI-Tools für Schüler und Schülerinnen',
        intro: 'Erklärungen, Lernpläne, Vokabeln, Referate: KI kann ein geduldiger Nachhilfelehrer sein, der um Mitternacht noch Zeit hat. Am meisten bringt sie, wenn du damit lernst, statt Aufgaben abzugeben.',
        aufgaben: [
            ['🧠', 'Erklären lassen', 'Schwierige Themen einfach erklären lassen und nachfragen, bis es klickt.', ['chatgpt', 'claude', 'gemini'], 'einfach-erklaeren'],
            ['🗓️', 'Lernplan', 'Den Stoff bis zur Klassenarbeit in machbare Portionen aufteilen.', ['chatgpt', 'notebooklm'], 'lernplan'],
            ['🃏', 'Karteikarten und Quiz', 'Aus Heftaufschrieben Lernkarten und Übungsfragen machen.', ['chatgpt', 'gemini'], 'karteikarten'],
            ['🎤', 'Referate', 'Gliederung finden, Quellen suchen und Folien vorbereiten.', ['perplexity-ai', 'gamma'], 'referat-folien'],
            ['🌍', 'Sprachen', 'Vokabeln abfragen lassen, Texte übersetzen und Fehler erklären lassen.', ['quillbot', 'chatgpt'], 'vokabeltrainer'],
        ],
        achtung:
            'KI-Dienste haben ein Mindestalter: ChatGPT ab 13 mit Erlaubnis der Eltern, Claude erst ab 18. Gib keine persönlichen Daten ein, und frag deine Schule, wie KI bei Hausaufgaben genutzt werden darf. KI-Antworten können falsch sein, prüfe sie im Schulbuch.',
        tutorial: 'chatgpt-richtig-nutzen',
        faq: [
            {
                q: 'Welche KI ist gut für Schüler?',
                a: 'Die großen Chatbots erklären Themen geduldig und beantworten Rückfragen. Für Referate helfen KI-Suchmaschinen mit Quellen und Präsentations-Tools. Achte auf das Mindestalter des Dienstes.',
            },
            {
                q: 'Ist es Schummeln, KI für Hausaufgaben zu nutzen?',
                a: 'Wenn die KI die Aufgabe für dich löst und du das abgibst, meistens ja. Wenn du dir etwas erklären lässt oder mit KI übst, lernst du mehr. Frag im Zweifel deine Lehrkraft.',
            },
            {
                q: 'Wie lerne ich mit KI für eine Klassenarbeit?',
                a: 'Lass dir einen Lernplan erstellen, übe mit Karteikarten und lass dich von der KI abfragen. Bitte sie, deine Antworten zu bewerten und Fehler zu erklären.',
            },
            {
                q: 'Ab welchem Alter darf ich ChatGPT, Gemini oder Claude nutzen?',
                a: 'ChatGPT ab 13 Jahren, bis 18 nur mit Erlaubnis deiner Eltern. Eltern können ihr Konto mit deinem verknüpfen und Einstellungen verwalten, deine Chats lesen sie dabei laut OpenAI nicht. Für Gemini brauchst du ein eigenes Google-Konto, das in Deutschland ab 16 möglich ist, über Konten mit Elternaufsicht ist Gemini in der EU nicht verfügbar. Claude ist erst ab 18 erlaubt.',
            },
            {
                q: 'Gibt es eine KI, die ich in der Schule sicher nutzen kann?',
                a: 'Ja, in vielen Bundesländern gibt es AIS.chat (früher telli), einen Chatbot speziell für Schulen. Deine Lehrkraft gibt dir einen Zugang zu einer vorbereiteten Lernumgebung frei, in manchen Ländern ohne eigenes Konto und ohne Klarnamen. Die Daten bleiben laut FWU auf Servern in der EU und werden nicht zum Training verwendet.',
            },
        ],
        quellen: [
            {
                titel: 'OpenAI: Terms of Use',
                url: 'https://openai.com/policies/row-terms-of-use/',
            },
            {
                titel: 'OpenAI Help: Parental controls in ChatGPT',
                url: 'https://help.openai.com/en/articles/12315553-parental-controls-faq',
            },
            {
                titel: 'Google: Mindestalter für Google-Konten',
                url: 'https://support.google.com/accounts/answer/1350409?hl=de',
            },
            {
                titel: 'FWU: AIS.chat startet an öffentlichen Schulen in Berlin',
                url: 'https://fwu.de/presse/ais-chat-startet-an-oeffentlichen-schulen-in-berlin/',
            },
        ],
        geprueft: '2026-10-26',
    },
]

export const getZielgruppe = (slug) => ZIELGRUPPEN.find((z) => z.slug === slug) || null
