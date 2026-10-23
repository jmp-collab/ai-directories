// KI- und Prompt-Glossar: Begriff, Erklärung, optional ein Link auf die passende Seite von AIGeddon.
export const KI_GLOSSAR = [
    ['Prompt', 'Die Eingabe an eine KI: Frage, Aufgabe oder Anweisung. Je klarer der Prompt, desto besser das Ergebnis.', '/prompts'],
    ['Prompt Engineering', 'Das gezielte Formulieren von Prompts mit Rolle, Kontext, Format und Techniken wie Beispielen oder Rückfragen, um verlässlich gute Ergebnisse zu bekommen.', '/tutorials/prompt-engineering-in-15-minuten'],
    ['System-Prompt', 'Feste Anweisungen, die vor jedem Gespräch gelten, etwa Rolle, Ton und Regeln eines Assistenten. Nutzer sehen sie meist nicht.', '/tutorials/eigenen-ki-assistenten-bauen'],
    ['Rollen-Prompt', 'Prompt, der der KI eine Rolle gibt („Du bist erfahrener Steuerberater“). Das steuert Fachwissen, Wortwahl und Tiefe.', '/prompts/archiv'],
    ['Zero-Shot', 'Die KI löst eine Aufgabe ohne Beispiel, nur anhand der Beschreibung.', null],
    ['Few-Shot', 'Der Prompt enthält ein oder mehrere Beispiele, an denen sich die KI für Stil, Länge und Format orientiert.', '/tutorials/prompt-engineering-in-15-minuten'],
    ['Chain of Thought', 'Technik, bei der die KI Schritt für Schritt vorgeht und Zwischenschritte zeigt. Senkt Denkfehler bei mehrstufigen Aufgaben.', null],
    ['Prompt-Kette', 'Mehrere Prompts hintereinander, bei denen jeder Schritt auf dem Ergebnis des vorherigen aufbaut. Zuverlässiger als ein Riesen-Prompt.', '/tutorials/prompt-kette-vom-thema-zum-artikel'],
    ['Meta-Prompt', 'Ein Prompt, der die KI bittet, einen anderen Prompt zu verbessern oder zu schreiben.', '/prompts/prompt-verbessern'],
    ['Large Language Model (LLM)', 'Großes Sprachmodell, das auf riesigen Textmengen trainiert wurde und Text fortsetzt, zusammenfasst, übersetzt oder Fragen beantwortet. Beispiele: die Modelle hinter ChatGPT, Claude und Gemini.', '/ki-tools/modelle'],
    ['Token', 'Die Recheneinheit von Sprachmodellen: ein Wortteil. Auf Deutsch entspricht ein Token grob 3 bis 4 Zeichen. API-Kosten werden pro Token berechnet.', '/rechner/api-kosten'],
    ['Kontextfenster', 'Wie viel Text ein Modell auf einmal berücksichtigen kann, gemessen in Tokens: Prompt, Dateien und bisheriger Chat zusammen.', null],
    ['Temperatur', 'Einstellung, die steuert, wie zufällig die Antworten sind. Niedrig: vorhersehbar und sachlich; hoch: kreativer und abwechslungsreicher.', null],
    ['Top-p', 'Weitere Einstellung für die Zufälligkeit: Das Modell wählt nur aus den wahrscheinlichsten Wörtern, deren Wahrscheinlichkeit zusammen p ergibt.', null],
    ['Halluzination', 'Eine überzeugend formulierte, aber falsche oder erfundene Antwort, etwa eine Studie oder ein Zitat, das es nicht gibt.', '/ki-test/ehrlichkeit'],
    ['Grounding', 'Antworten an überprüfbare Quellen binden, etwa an Suchergebnisse oder eigene Dokumente. Senkt Halluzinationen.', null],
    ['RAG (Retrieval-Augmented Generation)', 'Verfahren, bei dem vor der Antwort passende Textstellen aus eigenen Daten gesucht und dem Modell mitgegeben werden.', null],
    ['Embedding', 'Darstellung eines Textes als Zahlenreihe (Vektor), sodass ähnliche Bedeutungen ähnliche Zahlen haben. Grundlage für semantische Suche.', null],
    ['Vektordatenbank', 'Datenbank, die Embeddings speichert und ähnliche Inhalte schnell findet. Häufig Teil von RAG-Systemen.', null],
    ['Fine-Tuning', 'Nachtrainieren eines fertigen Modells mit eigenen Beispielen, damit es eine Aufgabe oder einen Stil besonders gut beherrscht.', null],
    ['Inferenz', 'Das Ausführen eines trainierten Modells, also das Erzeugen einer Antwort. Kosten und Geschwindigkeit der Inferenz entscheiden über den Preis.', null],
    ['Parameter', 'Die gelernten Zahlenwerte eines Modells. Mehr Parameter bedeuten nicht automatisch bessere Antworten, aber meist mehr Rechenaufwand.', null],
    ['Trainingsdaten', 'Die Texte, Bilder oder anderen Daten, aus denen ein Modell gelernt hat.', null],
    ['Wissensstand (Knowledge Cutoff)', 'Zeitpunkt, bis zu dem die Trainingsdaten eines Modells reichen. Neueres weiß es nur über Websuche oder mitgegebene Informationen.', '/ki-test/ehrlichkeit'],
    ['Multimodal', 'Ein Modell, das mehrere Arten von Eingaben versteht oder erzeugt, etwa Text, Bilder, Audio und Video.', null],
    ['KI-Agent', 'KI, die eine Aufgabe selbstständig in Schritte zerlegt, Werkzeuge nutzt und mehrere Schritte nacheinander abarbeitet.', '/ki-tools/agenten'],
    ['Tool Use (Function Calling)', 'Fähigkeit eines Modells, externe Werkzeuge aufzurufen, etwa eine Suche, einen Rechner oder eine Schnittstelle, und das Ergebnis weiterzuverwenden.', null],
    ['MCP (Model Context Protocol)', 'Offener Standard, über den KI-Assistenten an externe Werkzeuge und Datenquellen angebunden werden.', null],
    ['API', 'Programmierschnittstelle. Über die API eines Anbieters nutzen Apps ein KI-Modell direkt und zahlen pro Token.', '/rechner/api-kosten'],
    ['Prompt-Injection', 'Angriff, bei dem versteckte Anweisungen in Texten, Webseiten oder Dateien eine KI dazu bringen sollen, ihre eigentlichen Regeln zu ignorieren.', null],
    ['Jailbreak', 'Versuch, die Sicherheitsregeln eines Modells mit geschickten Prompts zu umgehen.', null],
    ['Guardrails', 'Schutzregeln und Filter rund um ein Modell, die unerwünschte oder gefährliche Ausgaben verhindern sollen.', null],
    ['Custom GPT', 'Eigener Assistent in ChatGPT mit festen Anweisungen und eigenem Wissen. In Claude heißt das Gegenstück Project.', '/tutorials/eigenen-ki-assistenten-bauen'],
    ['Diffusionsmodell', 'Bauart vieler Bildgeneratoren: Das Modell erzeugt aus Rauschen Schritt für Schritt ein Bild passend zum Prompt.', '/tutorials/bild-prompts-schreiben'],
    ['Text-to-Speech (TTS)', 'Sprachausgabe: KI liest Text mit einer natürlichen Stimme vor.', '/ki-tools/audio'],
    ['Speech-to-Text', 'Spracherkennung: KI wandelt gesprochene Sprache in Text um, etwa für Transkripte und Untertitel.', '/ki-tools/audio'],
    ['Open-Weight-Modell', 'Modell, dessen Gewichte veröffentlicht sind. Es lässt sich selbst betreiben, oft auch lokal ohne Cloud.', '/ki-tools/kostenlos'],
    ['Benchmark', 'Standardisierter Test, mit dem Modelle verglichen werden. Gute Benchmark-Werte garantieren nicht, dass ein Modell deine Aufgaben am besten löst.', '/ki-test'],
    ['Batch-Verarbeitung', 'Viele Anfragen gesammelt und zeitversetzt verarbeiten. Bei mehreren Anbietern deutlich günstiger als Einzelanfragen.', '/rechner/api-kosten'],
    ['Prompt Caching', 'Wiederkehrende Teile eines Prompts werden zwischengespeichert, sodass sie bei der nächsten Anfrage günstiger und schneller verarbeitet werden.', '/rechner/api-kosten'],
    ['KI-Detektor', 'Werkzeug, das einschätzen soll, ob ein Text von einer KI stammt. Die Ergebnisse sind unzuverlässig und taugen nicht als Beweis.', '/ki-tools/sicherheit'],
]

export const glossarSlug = (term) =>
    term
        .toLowerCase()
        .replace(/ä/g, 'ae')
        .replace(/ö/g, 'oe')
        .replace(/ü/g, 'ue')
        .replace(/ß/g, 'ss')
        .replace(/\(.*?\)/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')
