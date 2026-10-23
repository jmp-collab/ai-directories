// Tutorials als Daten. Jeder Schritt kann einen Vorher/Nachher-Vergleich, einen Prompt zum Ausprobieren
// und einen Jean-Kommentar haben. Das Quiz am Ende prüft das Gelernte.

export const TUTORIALS = [
    {
        slug: 'prompt-engineering-in-15-minuten',
        title: 'Prompt Engineering in 15 Minuten',
        description:
            'Der Grundkurs: Aus „Schreib mir was über E-Bikes“ wird ein Prompt, der beim ersten Versuch liefert. 9 Schritte mit Vorher/Nachher-Vergleich und Prompts zum direkten Ausprobieren in ChatGPT oder Claude.',
        minuten: 15,
        level: 'Einsteiger',
        icon: 'prompt',
        jean: 'Ich zeige dir in neun Schritten, wie ich Prompts baue. Am Ende gibt es ein Quiz. Und Konfetti. Versprochen.',
        magnet: 'prompt-spickzettel',
        prompts: ['prompt-verbessern', 'blogartikel-gliederung', 'meta-title-description'],
        schritte: [
            {
                titel: 'Warum die KI rät, wenn du nichts sagst',
                text: [
                    'Ein Sprachmodell setzt deinen Text fort, so wahrscheinlich wie möglich. Fehlt dir eine Angabe, nimmt es den Durchschnitt aller Texte, die es je gesehen hat. Deshalb klingen kurze Prompts nach Durchschnitt.',
                    'Prompt Engineering heißt nur: der KI die Angaben geben, die du sonst einer neuen Kollegin geben würdest.',
                ],
                vergleich: {
                    vorher: 'Schreib mir was über E-Bikes.',
                    nachher:
                        'Du bist Fachredakteur für Fahrräder. Schreibe eine Einleitung (80 Wörter) für einen Ratgeber „E-Bike-Akku richtig laden“. Zielgruppe: Pendler, die ihr erstes E-Bike haben. Ton: locker, ohne Fachchinesisch.',
                    erklaerung: 'Gleiche KI, gleiche Sekunde Arbeit. Rechts weiß sie, wer, was, für wen, wie lang und wie.',
                },
                jean: 'Der häufigste Fehler ist nicht ein falscher Prompt, sondern ein zu kurzer.',
            },
            {
                titel: 'Baustein 1: Gib der KI eine Rolle',
                text: [
                    'Eine Rolle aktiviert Fachwissen und Fachsprache. „Du bist Steuerberater“ führt zu anderen Antworten als „Du bist Grundschullehrer“, auch auf dieselbe Frage.',
                    'Je genauer die Rolle, desto besser: nicht „Marketing-Experte“, sondern „Performance-Marketer für Onlineshops mit kleinem Budget“.',
                ],
                vergleich: {
                    vorher: 'Wie erkläre ich Inflation?',
                    nachher: 'Du bist Grundschullehrerin. Erkläre Inflation einem 9-jährigen Kind in 5 Sätzen, mit einem Beispiel aus dem Kiosk.',
                    erklaerung: 'Die Rolle bestimmt Wortwahl, Tiefe und Beispiele.',
                },
                ausprobieren: 'Du bist Grundschullehrerin. Erkläre Inflation einem 9-jährigen Kind in 5 Sätzen, mit einem Beispiel aus dem Kiosk.',
            },
            {
                titel: 'Baustein 2: Die Aufgabe mit einem Verb',
                text: [
                    'Beginne die Aufgabe mit einem klaren Verb: schreibe, vergleiche, fasse zusammen, liste auf, bewerte, übersetze. Dazu das Ergebnis: was genau soll am Ende dastehen?',
                    'Vage Verben wie „hilf mir mit“ oder „mach was zu“ lassen der KI zu viel Spielraum.',
                ],
                vergleich: {
                    vorher: 'Hilf mir mit meinem Newsletter.',
                    nachher: 'Schreibe 5 Betreffzeilen (höchstens 45 Zeichen) für meinen Newsletter über neue KI-Tools der Woche.',
                    erklaerung: 'Verb plus messbares Ergebnis: Die KI weiß, wann sie fertig ist.',
                },
                jean: 'Wenn du die Aufgabe nicht in einem Satz sagen kannst, kann die KI sie auch nicht lösen.',
            },
            {
                titel: 'Baustein 3: Kontext und Zielgruppe',
                text: [
                    'Kontext beantwortet: Wofür ist das Ergebnis, was ist schon passiert, was darf auf keinen Fall drinstehen? Die Zielgruppe bestimmt Niveau und Ton.',
                    'Faustregel: Alles, was du einer neuen Kollegin am ersten Tag erklären würdest, gehört in den Prompt.',
                ],
                vergleich: {
                    vorher: 'Schreibe eine Absage an einen Bewerber.',
                    nachher:
                        'Schreibe eine Absage an einen Bewerber für die Stelle als Werkstudent im Marketing. Kontext: Er war im Gespräch sehr gut, wir haben uns knapp für jemand anderen entschieden und möchten ihn für künftige Stellen im Talentpool behalten. Ton: wertschätzend, persönlich, kurz.',
                    erklaerung: 'Ohne Kontext gibt es eine Standard-Absage. Mit Kontext eine, die die Tür offen hält.',
                },
            },
            {
                titel: 'Baustein 4: Format und Länge festlegen',
                text: [
                    'Sag, wie das Ergebnis aussehen soll: Tabelle, Stichpunkte, Fließtext, JSON, E-Mail. Und wie lang: Wörter, Sätze, Zeichen.',
                    'Das spart das Umformatieren und verhindert die berüchtigten Romane, wenn du drei Zeilen wolltest.',
                ],
                vergleich: {
                    vorher: 'Vergleiche Make, Zapier und n8n.',
                    nachher:
                        'Vergleiche Make, Zapier und n8n als Tabelle mit den Spalten: Einstiegspreis, Gratis-Tarif, selbst hostbar, für wen. Danach eine Empfehlung in 2 Sätzen für ein 3-Personen-Team ohne Entwickler.',
                    erklaerung: 'Feste Spalten machen die Antwort vergleichbar und sofort nutzbar.',
                },
                ausprobieren:
                    'Vergleiche Make, Zapier und n8n als Tabelle mit den Spalten: Einstiegspreis, Gratis-Tarif, selbst hostbar, für wen. Danach eine Empfehlung in 2 Sätzen für ein 3-Personen-Team ohne Entwickler. Erfinde keine Preise; markiere, was ich auf der Preisseite prüfen sollte.',
            },
            {
                titel: 'Technik: Zeig ein Beispiel',
                text: [
                    'Ein Beispiel schlägt jede Beschreibung. Statt „schreib locker und mit Humor“ zeigst du einen Satz in genau dem Stil. Das heißt Few-Shot-Prompting.',
                    'Markiere Beispiele mit dreifachen Anführungszeichen, damit die KI sie nicht mit der Aufgabe verwechselt.',
                ],
                vergleich: {
                    vorher: 'Schreibe witzige Produktbeschreibungen für unsere Kaffeesorten.',
                    nachher:
                        'Schreibe Produktbeschreibungen für unsere Kaffeesorten im Stil dieses Beispiels:\n"""Bergfeuer: Kräftig wie ein Montagmorgen, aber deutlich netter. Schokolade, Nuss, ein Hauch Trotz."""\nSorten: Morgentau (mild, fruchtig), Nachtschicht (sehr stark, rauchig).',
                    erklaerung: 'Länge, Rhythmus und Humor sind jetzt eindeutig.',
                },
                jean: 'Ein gutes Beispiel ist mehr wert als zehn Adjektive.',
            },
            {
                titel: 'Technik: Rückfragen erlauben, Schritte erzwingen',
                text: [
                    'Erlaube der KI, zuerst nachzufragen. Sie erfindet dann keine Lücken, sondern fragt nach Budget, Zielgruppe oder Ton.',
                    'Bei mehrstufigen Aufgaben hilft „Geh Schritt für Schritt vor“: Die KI ordnet erst, dann rechnet oder schreibt sie. Das senkt Denkfehler.',
                ],
                vergleich: {
                    vorher: 'Plane meinen Produktlaunch.',
                    nachher: 'Plane meinen Produktlaunch. Stell mir zuerst bis zu 5 Rückfragen und warte auf meine Antworten. Danach geh Schritt für Schritt vor: Ziele, Zeitplan, Kanäle, Aufgaben.',
                    erklaerung: 'Erst fragen, dann planen: Der Plan passt zu deinem Produkt statt zu irgendeinem.',
                },
                ausprobieren: 'Ich plane den Launch eines kleinen KI-Tools. Stell mir zuerst bis zu 5 Rückfragen und warte auf meine Antworten. Danach geh Schritt für Schritt vor: Ziele, Zeitplan, Kanäle, Aufgaben.',
            },
            {
                titel: 'Technik: Selbstkritik und Varianten',
                text: [
                    'Lass die KI ihr Ergebnis prüfen, bevor du es siehst: „Prüfe gegen die Aufgabe und verbessere.“ Bei Texten mit Limits (Zeichen, Wörter) ist das Gold wert.',
                    'Fordere mehrere Varianten an. Auswählen ist schneller als neu fragen, und oft ist Variante 3 die beste.',
                ],
                vergleich: {
                    vorher: 'Schreib einen Title-Tag für meine Seite über Laufschuhe.',
                    nachher: 'Schreib 5 Title-Tags (höchstens 60 Zeichen) für meine Seite „Laufschuhe für Anfänger“. Zähle danach die Zeichen jeder Variante, kürze zu lange und empfiehl die beste mit Begründung.',
                    erklaerung: 'Varianten plus Selbstprüfung: weniger Runden, bessere Auswahl.',
                },
            },
            {
                titel: 'Dein Rezept: alles zusammen',
                text: [
                    'Rolle + Aufgabe + Kontext + Zielgruppe + Format + Technik. Nicht jeder Prompt braucht alles, aber jeder gute Prompt hat mindestens Aufgabe, Kontext und Format.',
                    'Im Prompt-Baukasten setzt du das per Formular zusammen und siehst einen Score. Probier den fertigen Prompt unten direkt aus.',
                ],
                ausprobieren:
                    'Du bist erfahrener Content-Stratege. Erstelle einen Redaktionsplan für 4 Wochen für den Instagram-Kanal einer kleinen Bäckerei in Jena. Kontext: Ziel sind mehr Vorbestellungen für Wochenend-Brötchen. Zielgruppe: Familien und Studierende im Umkreis. Format: Tabelle mit Woche, Tag, Thema, Format (Reel, Foto, Story), Caption-Idee. Stell mir zuerst bis zu 3 Rückfragen. Prüfe den Plan zum Schluss auf Abwechslung und verbessere ihn.',
                jean: 'Herzlichen Glückwunsch, du promptest jetzt besser als 90 Prozent aller Büros. Grobe Schätzung, aber gefühlt korrekt.',
            },
        ],
        quiz: [
            {
                frage: 'Warum liefern kurze Prompts oft Durchschnitts-Antworten?',
                antworten: ['Weil die KI faul ist', 'Weil fehlende Angaben mit dem Wahrscheinlichsten aufgefüllt werden', 'Weil kurze Prompts nicht verstanden werden'],
                richtig: 1,
                erklaerung: 'Die KI füllt Lücken mit dem statistisch Naheliegenden, also mit Durchschnitt.',
            },
            {
                frage: 'Was gehört mindestens in jeden guten Prompt?',
                antworten: ['Aufgabe, Kontext und Format', 'Bitte und Danke', 'Mindestens 500 Wörter'],
                richtig: 0,
                erklaerung: 'Aufgabe, Kontext und Format sind das Minimum, der Rest ist Feinschliff.',
            },
            {
                frage: 'Wofür sind dreifache Anführungszeichen """ nützlich?',
                antworten: ['Für Betonung', 'Um Beispiele oder Texte klar von der Aufgabe zu trennen', 'Sie haben keine Wirkung'],
                richtig: 1,
                erklaerung: 'Begrenzer verhindern, dass die KI ein Beispiel für eine Anweisung hält.',
            },
            {
                frage: 'Was bringt „Stell mir zuerst Rückfragen“?',
                antworten: ['Die Antwort wird kürzer', 'Nichts, die KI ignoriert das', 'Die KI erfindet weniger und passt das Ergebnis an deine Lage an'],
                richtig: 2,
                erklaerung: 'Statt Lücken zu raten, fragt die KI nach.',
            },
        ],
    },
    {
        slug: 'prompt-kette-vom-thema-zum-artikel',
        title: 'Prompt-Kette: vom Thema zum fertigen Artikel',
        description:
            'Fünf Prompts hintereinander statt einem Riesen-Prompt: Recherche, Gliederung, Entwurf, Lektorat, Snippets. Jeder Schritt mit Absprung zu ChatGPT oder Claude.',
        minuten: 20,
        level: 'Fortgeschritten',
        icon: 'post',
        jean: 'Ein Riesen-Prompt ist wie ein Umzug in einer Fahrt. Geht, aber irgendwas fällt runter. Wir fahren fünfmal.',
        magnet: 'prompt-paket',
        prompts: ['blogartikel-gliederung', 'text-entkitschen', 'meta-title-description'],
        tools: ['surfer-seo', 'semrush'],
        schritte: [
            {
                titel: 'Warum Ketten besser sind als ein Riesen-Prompt',
                text: [
                    'Lange Prompts mit zehn Aufgaben führen dazu, dass die KI einzelne Teile vergisst oder oberflächlich erledigt. Eine Kette zerlegt die Arbeit: Jeder Schritt hat ein klares Ergebnis, das du prüfst, bevor es weitergeht.',
                    'Bleib für die ganze Kette im selben Chat. Dann kennt die KI die vorherigen Ergebnisse.',
                ],
                vergleich: {
                    vorher: 'Schreib einen SEO-optimierten Artikel über E-Bike-Akkus mit Recherche, Gliederung, FAQ und Meta-Daten.',
                    nachher: 'Schritt 1 von 5: Sammle die 10 häufigsten Fragen, die Menschen zu E-Bike-Akkus stellen, und ordne sie nach Suchintention. Noch keinen Text schreiben.',
                    erklaerung: 'Ein Schritt, ein Ergebnis. Du steuerst zwischendurch nach.',
                },
            },
            {
                titel: 'Kettenglied 1: Fragen und Suchintention',
                text: ['Starte mit den Fragen der Zielgruppe, nicht mit deinem Text. So deckt der Artikel ab, was gesucht wird.'],
                ausprobieren:
                    'Du bist SEO-Stratege. Mein Thema: [THEMA]. Zielgruppe: [ZIELGRUPPE]. Sammle die 10 häufigsten Fragen zu diesem Thema, ordne jeder die Suchintention zu (informational, kommerziell, transaktional) und markiere die 3 wichtigsten. Noch keinen Artikel schreiben.',
            },
            {
                titel: 'Kettenglied 2: Gliederung',
                text: ['Aus den Fragen wird eine Gliederung. Prüfe sie: Fehlt etwas, ist etwas doppelt? Erst wenn sie steht, geht es weiter.'],
                ausprobieren:
                    'Erstelle aus diesen Fragen eine Gliederung mit H2 und H3. Schreibe zu jedem Abschnitt einen Satz, was dort beantwortet wird, und wo ein Beispiel, eine Zahl oder eigene Erfahrung hingehört.',
            },
            {
                titel: 'Kettenglied 3: Entwurf Abschnitt für Abschnitt',
                text: [
                    'Lass die KI nicht alles auf einmal schreiben, sondern 2 bis 3 Abschnitte pro Runde. So bleibt die Qualität gleichmäßig.',
                    'Gib deine eigenen Erfahrungen und Zahlen dazu. Die machen den Unterschied zu tausend anderen KI-Artikeln.',
                ],
                ausprobieren:
                    'Schreibe die ersten 2 Abschnitte der Gliederung aus. Ton: [TON]. Baue diese eigene Erfahrung ein: [ERFAHRUNG]. Erfinde keine Zahlen; markiere Stellen, an denen eine Quelle nötig ist.',
                jean: 'Eigene Erfahrung ist das Einzige, was die KI nicht hat. Nutz sie.',
            },
            {
                titel: 'Kettenglied 4: Lektorat',
                text: ['Jetzt wird der Entwurf entkitscht: Floskeln raus, Wiederholungen raus, Fakten bleiben.'],
                ausprobieren:
                    'Überarbeite den gesamten Artikel als strenger Lektor: streiche Floskeln, leere Superlative und Wiederholungen, behalte alle Fakten. Liste danach die 5 wichtigsten Änderungen auf.',
            },
            {
                titel: 'Kettenglied 5: Snippets und FAQ',
                text: ['Zum Schluss Title-Tag, Meta-Description und ein FAQ-Block. Die KI kennt jetzt den ganzen Artikel und trifft den Kern.'],
                ausprobieren:
                    'Schreibe zum fertigen Artikel: 5 Title-Tags (höchstens 60 Zeichen), 5 Meta-Descriptions (höchstens 155 Zeichen) und 5 FAQ mit Antworten in je 2 Sätzen. Zähle die Zeichen und kürze, was zu lang ist.',
                jean: 'Fünf Prompts, ein Artikel, null Chaos. So arbeite ich auch.',
            },
        ],
        quiz: [
            {
                frage: 'Warum sollte die Kette im selben Chat laufen?',
                antworten: ['Weil es billiger ist', 'Weil die KI so die Ergebnisse der vorherigen Schritte kennt', 'Weil neue Chats langsamer sind'],
                richtig: 1,
                erklaerung: 'Der Chatverlauf ist das Gedächtnis der Kette.',
            },
            {
                frage: 'Was macht einen KI-Artikel einzigartig?',
                antworten: ['Mehr Keywords', 'Eigene Erfahrungen, Zahlen und Beispiele', 'Längere Absätze'],
                richtig: 1,
                erklaerung: 'Eigene Erfahrung kann kein Modell erfinden, und Suchmaschinen belohnen sie.',
            },
        ],
    },
    {
        slug: 'eigenen-ki-assistenten-bauen',
        title: 'Eigenen KI-Assistenten bauen: Custom GPT und Claude Project',
        description:
            'Einmal einrichten, immer wieder nutzen: So baust du in ChatGPT (Custom GPT) oder Claude (Project) einen Assistenten mit festen Anweisungen und eigenem Wissen. 6 Schritte mit fertigen System-Prompts.',
        minuten: 20,
        level: 'Fortgeschritten',
        icon: 'werkzeug',
        jean: 'Ich tippe meine Markenregeln nicht jeden Tag neu. Mein Assistent kennt sie schon. Das richten wir jetzt für dich ein.',
        magnet: 'prompt-paket',
        prompts: ['prompt-verbessern', 'text-entkitschen'],
        tools: ['claude'],
        schritte: [
            {
                titel: 'Warum ein eigener Assistent?',
                text: [
                    'Ein eigener Assistent ist ein Chat mit festen Anweisungen, die immer gelten, und optional mit eigenen Dateien als Wissen. Du erklärst Rolle, Ton und Regeln einmal statt in jedem Chat.',
                    'In ChatGPT heißt das Custom GPT, in Claude Project. Beides setzt laut Anbieter einen bezahlten Tarif voraus (ChatGPT Plus bzw. Claude Pro).',
                ],
                vergleich: {
                    vorher: 'Jeden Tag: „Schreib im Stil unserer Marke, Du-Form, keine Superlative, kurze Sätze …“ und dann die eigentliche Aufgabe.',
                    nachher: 'Einmal einrichten, danach nur noch: „Schreib einen Instagram-Text zum neuen Produkt.“',
                    erklaerung: 'Die Regeln stehen fest im Assistenten, du gibst nur noch die Aufgabe.',
                },
            },
            {
                titel: 'Den Zweck in einem Satz festlegen',
                text: [
                    'Ein Assistent für alles wird ein Assistent für nichts. Leg genau einen Zweck fest: Social Posts für deine Marke, Antworten auf Kundenanfragen, Produktbeschreibungen.',
                    'Formuliere: Wer nutzt den Assistenten, wofür, und was ist ein gutes Ergebnis?',
                ],
                ausprobieren:
                    'Hilf mir, den Zweck für einen eigenen KI-Assistenten zu schärfen. Mein Ziel: [ZIEL, z. B. Social Posts für meinen Onlineshop]. Stell mir 5 Rückfragen und formuliere danach den Zweck in einem Satz sowie 3 Kriterien für ein gutes Ergebnis.',
            },
            {
                titel: 'Die Anweisungen schreiben (System-Prompt)',
                text: [
                    'Die Anweisungen sind das Herz des Assistenten. Sie enthalten Rolle, Zielgruppe, Ton, feste Regeln, Format und was der Assistent tun soll, wenn Informationen fehlen.',
                    'Schreib Regeln als klare Sätze, nicht als Stichwortsalat. Und sag ausdrücklich, was verboten ist.',
                ],
                vergleich: {
                    vorher: 'Du bist ein Marketing-Assistent. Sei kreativ.',
                    nachher:
                        'Du bist Social-Media-Redakteur für [MARKE], einen Onlineshop für [PRODUKTE]. Zielgruppe: [ZIELGRUPPE]. Ton: locker, Du-Form, kurze Sätze, höchstens ein Emoji pro Absatz. Verboten: Superlative, erfundene Rabatte, Preise, die nicht im Wissen stehen. Format: Hook in der ersten Zeile, 3 bis 5 Sätze, Call-to-Action, 3 Hashtags. Fehlen dir Infos, frag nach statt zu raten.',
                    erklaerung: 'Klare Regeln, klares Format, klares Verhalten bei Lücken.',
                },
                ausprobieren:
                    'Schreibe mir einen System-Prompt für einen KI-Assistenten. Zweck: [ZWECK]. Zielgruppe: [ZIELGRUPPE]. Ton: [TON]. Enthalten sein müssen: Rolle, Regeln, Verbote, Ausgabeformat und Verhalten bei fehlenden Informationen. Höchstens 200 Wörter.',
                jean: 'Der wichtigste Satz in jedem System-Prompt: „Fehlen dir Infos, frag nach statt zu raten.“',
            },
            {
                titel: 'Wissen hinzufügen',
                text: [
                    'Lade Dateien hoch, die der Assistent kennen soll: Markenleitfaden, Produktliste, häufige Fragen, gute Beispieltexte. Kurze, saubere Dokumente funktionieren besser als ein riesiges PDF.',
                    'Verweise in den Anweisungen auf das Wissen: „Nutze für Produktdaten ausschließlich die Datei Produktliste.“',
                ],
                jean: 'Keine Kundendaten oder Passwörter hochladen. Was nicht hochgeladen ist, kann nicht rausrutschen.',
            },
            {
                titel: 'Testen und nachschärfen',
                text: [
                    'Teste den Assistenten mit fünf typischen und zwei absichtlich schwierigen Aufgaben, etwa einer Frage, deren Antwort nicht im Wissen steht. Ein guter Assistent fragt dann nach oder sagt ehrlich, dass er es nicht weiß.',
                    'Jede Schwäche wird zu einer neuen Regel in den Anweisungen.',
                ],
                ausprobieren:
                    'Prüfe den folgenden System-Prompt kritisch: Welche Situationen deckt er nicht ab, wo könnte der Assistent Fakten erfinden, welche Regeln widersprechen sich? Schlage konkrete Verbesserungen vor.\n\n"""\n[DEIN SYSTEM-PROMPT]\n"""',
            },
            {
                titel: 'Im Alltag nutzen und teilen',
                text: [
                    'Gib dem Assistenten einen eindeutigen Namen und eine kurze Beschreibung. In Teams lohnt es sich, Assistenten gemeinsam zu nutzen, damit alle mit denselben Regeln arbeiten.',
                    'Überarbeite die Anweisungen alle paar Wochen: neue Produkte, neue Regeln, neue Beispiele.',
                ],
                jean: 'Mein Lieblingstrick: Gute Ergebnisse als Beispiele ins Wissen legen. So wird der Assistent mit der Zeit immer besser.',
            },
        ],
        quiz: [
            {
                frage: 'Was gehört unbedingt in die Anweisungen eines Assistenten?',
                antworten: ['Möglichst viele Emojis', 'Rolle, Regeln, Format und Verhalten bei fehlenden Infos', 'Nur der Name der Marke'],
                richtig: 1,
                erklaerung: 'Ohne Regeln und Format ist ein eigener Assistent nur ein normaler Chat.',
            },
            {
                frage: 'Was solltest du nicht als Wissen hochladen?',
                antworten: ['Den Markenleitfaden', 'Gute Beispieltexte', 'Kundendaten und Passwörter'],
                richtig: 2,
                erklaerung: 'Sensible Daten gehören nicht in einen KI-Assistenten.',
            },
            {
                frage: 'Wie testest du einen Assistenten am besten?',
                antworten: ['Mit typischen und absichtlich schwierigen Aufgaben', 'Gar nicht, er funktioniert sofort', 'Nur mit einer einzigen Frage'],
                richtig: 0,
                erklaerung: 'Gerade die schwierigen Aufgaben zeigen, wo Regeln fehlen.',
            },
        ],
    },
    {
        slug: 'bild-prompts-schreiben',
        title: 'Bild-Prompts schreiben: Midjourney, DALL·E und Co.',
        description:
            'Vom Zufallsbild zum gewünschten Motiv: die 6 Bausteine guter Bild-Prompts mit Vorher/Nachher-Beispielen, Prompts zum Absenden und einem Quiz.',
        minuten: 15,
        level: 'Einsteiger',
        icon: 'herz',
        jean: 'Ein Bildgenerator malt genau das, was du sagst. Das Problem: Meistens sagen wir viel zu wenig. Ändern wir das.',
        magnet: 'prompt-spickzettel',
        prompts: ['prompt-verbessern'],
        tools: ['canva'],
        schritte: [
            {
                titel: 'Die Formel: Motiv, Stil, Licht, Kamera, Komposition, Format',
                text: [
                    'Gute Bild-Prompts beschreiben sechs Dinge: Was ist zu sehen (Motiv), wie sieht es aus (Stil), wie ist es beleuchtet (Licht), aus welcher Perspektive (Kamera), wie ist es angeordnet (Komposition) und in welchem Seitenverhältnis (Format).',
                    'Fehlt ein Baustein, entscheidet der Generator selbst, und meist langweilig.',
                ],
                vergleich: {
                    vorher: 'Ein Motorrad.',
                    nachher: 'Ein rotes Retro-Motorrad auf einer nassen Landstraße bei Sonnenuntergang, Filmfoto-Look, warmes Gegenlicht, niedrige Kameraperspektive, Motorrad im linken Drittel, Querformat 16:9.',
                    erklaerung: 'Sechs Bausteine, ein klares Bild im Kopf, ein klares Bild am Bildschirm.',
                },
            },
            {
                titel: 'Motiv: konkret statt allgemein',
                text: ['Beschreibe das Hauptmotiv mit Farbe, Material, Zustand und Handlung. „Ein Hund“ ist ein Rätsel, „ein nasser Golden Retriever, der einen roten Ball fängt“ ist ein Auftrag.'],
                vergleich: {
                    vorher: 'Eine Frau im Büro.',
                    nachher: 'Eine Frau Mitte 30 mit Lesebrille, die lachend an einem Holzschreibtisch voller Notizzettel telefoniert.',
                    erklaerung: 'Details machen das Bild glaubwürdig und unverwechselbar.',
                },
            },
            {
                titel: 'Stil und Licht',
                text: [
                    'Der Stil entscheidet über die Wirkung: Fotografie, Aquarell, 3D-Render, Comic, Filmplakat. Licht setzt die Stimmung: goldene Stunde, Studiolicht, Neon, Nebel.',
                    'Nenne lieber eine Stilrichtung als einen lebenden Künstler; das ist rechtlich und ethisch die sauberere Wahl.',
                ],
                ausprobieren:
                    'Schreibe mir 5 Bild-Prompts für dasselbe Motiv in 5 verschiedenen Stilen (Fotografie, Aquarell, 3D-Render, Comic, Filmplakat). Motiv: [MOTIV]. Jeder Prompt mit Motiv, Stil, Licht, Kameraperspektive und Seitenverhältnis, höchstens 40 Wörter.',
            },
            {
                titel: 'Kamera und Komposition',
                text: ['Perspektive verändert alles: Froschperspektive wirkt heroisch, Vogelperspektive übersichtlich, Nahaufnahme emotional. Sag auch, wo das Motiv im Bild steht und wie viel Platz bleibt, etwa für Text.'],
                vergleich: {
                    vorher: 'Ein Kaffeebecher auf dem Tisch.',
                    nachher: 'Nahaufnahme eines dampfenden Kaffeebechers aus Steingut, leicht von oben, Becher rechts im Bild, links viel freier Platz für Text, unscharfer Hintergrund.',
                    erklaerung: 'Mit freiem Platz wird das Bild direkt zum Werbemotiv.',
                },
                jean: 'Wer Bilder für Banner oder Thumbnails braucht: immer „freier Platz für Text“ dazuschreiben.',
            },
            {
                titel: 'Format und Feinschliff',
                text: [
                    'Lege das Seitenverhältnis fest: 1:1 für Feeds, 9:16 für Stories, 16:9 für YouTube-Thumbnails und Banner. In Midjourney geht das zum Beispiel mit dem Zusatz --ar 16:9.',
                    'Iteriere: Ein Baustein pro Runde ändern, nicht alles auf einmal. So lernst du, welcher Teil was bewirkt.',
                ],
                ausprobieren:
                    'Du bist Experte für Bild-Prompts. Mach aus meiner Idee einen präzisen Prompt mit Motiv, Stil, Licht, Kamera, Komposition und Seitenverhältnis. Gib mir 3 Varianten und erkläre kurz die Unterschiede. Meine Idee: [IDEE]',
            },
        ],
        quiz: [
            {
                frage: 'Welche Bausteine hat ein guter Bild-Prompt?',
                antworten: ['Nur das Motiv', 'Motiv, Stil, Licht, Kamera, Komposition, Format', 'Möglichst viele Adjektive'],
                richtig: 1,
                erklaerung: 'Sechs Bausteine geben dem Generator klare Vorgaben.',
            },
            {
                frage: 'Welches Seitenverhältnis passt zu einem YouTube-Thumbnail?',
                antworten: ['9:16', '1:1', '16:9'],
                richtig: 2,
                erklaerung: 'YouTube-Thumbnails und Banner sind Querformat 16:9.',
            },
            {
                frage: 'Wie verbesserst du ein Bild am schnellsten?',
                antworten: ['Pro Runde einen Baustein ändern', 'Jedes Mal einen komplett neuen Prompt schreiben', 'Den Prompt kürzer machen'],
                richtig: 0,
                erklaerung: 'So siehst du, welcher Baustein welche Wirkung hat.',
            },
        ],
    },
    {
        slug: 'newsletter-mit-ki-in-einer-stunde',
        title: 'Newsletter mit KI in einer Stunde',
        description:
            'Von der leeren Seite zur fertigen Ausgabe: Themen finden, gliedern, schreiben, Betreffzeilen testen und versenden. 6 Schritte mit Prompts und den passenden Newsletter-Tools.',
        minuten: 60,
        level: 'Einsteiger',
        icon: 'post',
        jean: 'Ich gebe dir eine Stunde, du bekommst einen Newsletter. Die KI schreibt mit, aber das Denken und die Meinung kommen von dir.',
        magnet: 'prompt-paket',
        prompts: ['newsletter-ausgabe', 'text-entkitschen'],
        tools: ['beehiiv', 'kit', 'brevo'],
        schritte: [
            {
                titel: 'Minute 0 bis 10: Themen sammeln',
                text: [
                    'Sammle drei Themen, zu denen du etwas zu sagen hast: eine Neuigkeit, einen Tipp, eine Erfahrung. Links und Stichpunkte reichen.',
                    'Die KI hilft beim Sortieren, nicht beim Erfinden: Sie soll aus deinen Notizen die stärksten Themen auswählen.',
                ],
                ausprobieren:
                    'Hier sind meine Notizen für diese Woche. Wähle die 3 Themen, die für meine Leser am nützlichsten sind, und begründe die Auswahl in je einem Satz. Leser: [ZIELGRUPPE].\n\n"""\n[DEINE NOTIZEN UND LINKS]\n"""',
            },
            {
                titel: 'Minute 10 bis 20: Aufbau festlegen',
                text: ['Ein fester Aufbau spart jede Woche Zeit und gibt Lesern Orientierung: Begrüßung, drei Themen mit je „was passiert ist, warum es wichtig ist, meine Meinung“, ein Tipp der Woche, Abschied.'],
                vergleich: {
                    vorher: 'Schreib einen Newsletter über diese Themen.',
                    nachher: 'Gliedere die Ausgabe so: Begrüßung in 2 Sätzen; je Thema 3 Teile (was passiert ist, warum es wichtig ist, meine Einschätzung); Tipp der Woche; Abschied mit einer Frage an die Leser.',
                    erklaerung: 'Ein Raster für jede Woche: schneller schreiben, leichter lesen.',
                },
            },
            {
                titel: 'Minute 20 bis 40: Schreiben',
                text: [
                    'Lass die KI einen Entwurf schreiben, aber gib deine Meinung als Stichpunkte mit. Ohne eigene Meinung klingt jeder Newsletter gleich.',
                    'Schreib danach den ersten und den letzten Absatz selbst um. Das sind die Stellen, an denen Leser dich erkennen.',
                ],
                ausprobieren:
                    'Schreibe die Newsletter-Ausgabe nach diesem Aufbau: Begrüßung (2 Sätze), 3 Themen mit je „was passiert ist / warum wichtig / meine Einschätzung“, Tipp der Woche, Abschied mit Frage. Meine Einschätzungen als Stichpunkte: [STICHPUNKTE]. Ton: [TON]. Erfinde keine Fakten.',
                jean: 'Meine Regel: Jede Ausgabe enthält mindestens einen Satz, den nur ich schreiben konnte.',
            },
            {
                titel: 'Minute 40 bis 50: Betreffzeilen und Vorschautext',
                text: ['Die Betreffzeile entscheidet über die Öffnung. Lass dir mehrere Varianten geben und wähle bewusst; manche Newsletter-Tools können Betreffzeilen auch gegeneinander testen.'],
                ausprobieren:
                    'Schreibe 8 Betreffzeilen (höchstens 45 Zeichen) und 3 Vorschautexte (höchstens 90 Zeichen) für diese Newsletter-Ausgabe. Nutze verschiedene Ansätze: Neugier, Nutzen, Zahl, Frage, Persönlich. Keine Clickbait-Versprechen.\n\n"""\n[DEINE AUSGABE]\n"""',
            },
            {
                titel: 'Minute 50 bis 55: Entkitschen',
                text: ['Zum Schluss ein strenges Lektorat: Floskeln raus, Wiederholungen raus, Fakten bleiben. Der Prompt „KI-Text entkitschen“ aus der Bibliothek macht genau das.'],
                vergleich: {
                    vorher: 'In der heutigen schnelllebigen Welt ist es wichtiger denn je, über KI informiert zu sein.',
                    nachher: 'Diese Woche: drei KI-Neuigkeiten, die dir wirklich Zeit sparen.',
                    erklaerung: 'Kürzer, konkreter, menschlicher.',
                },
            },
            {
                titel: 'Minute 55 bis 60: Versenden und messen',
                text: [
                    'Kopiere die Ausgabe in dein Newsletter-Tool, prüfe Links und Vorschau auf dem Handy, plane den Versand. Notiere danach Öffnungs- und Klickrate, damit du nächste Woche siehst, was funktioniert.',
                    'Welches Tool passt? Der Vergleich beehiiv vs. Kit vs. GetResponse vs. Brevo hilft bei der Wahl.',
                ],
                jean: 'Ein Newsletter, der jede Woche pünktlich kommt, schlägt einen perfekten, der nie fertig wird.',
            },
        ],
        quiz: [
            {
                frage: 'Was macht einen KI-Newsletter unverwechselbar?',
                antworten: ['Möglichst lange Texte', 'Deine eigene Meinung und Erfahrung', 'Viele Emojis in der Betreffzeile'],
                richtig: 1,
                erklaerung: 'Die KI schreibt mit, die Meinung kommt von dir.',
            },
            {
                frage: 'Wofür lohnt sich ein fester Aufbau?',
                antworten: ['Er spart Zeit und gibt Lesern Orientierung', 'Er ist für Suchmaschinen wichtig', 'Er ersetzt die Betreffzeile'],
                richtig: 0,
                erklaerung: 'Ein festes Raster macht das Schreiben jede Woche schneller.',
            },
        ],
    },
    {
        slug: 'chatgpt-richtig-nutzen',
        title: 'ChatGPT richtig nutzen: der Einsteigerkurs',
        description:
            'Vom ersten Chat zu Ergebnissen, die du wirklich verwenden kannst: gute Fragen stellen, nachschärfen, Dateien nutzen, Fakten prüfen, Datenschutz beachten. 8 Schritte mit Vorher/Nachher und Prompts zum Ausprobieren, funktioniert genauso mit Claude und Gemini.',
        minuten: 20,
        level: 'Einsteiger',
        icon: 'prompt',
        jean: 'Die meisten nutzen ChatGPT wie eine Suchmaschine und sind dann enttäuscht. In acht Schritten zeige ich dir, wie es richtig geht.',
        magnet: 'prompt-spickzettel',
        prompts: ['prompt-verbessern', 'text-zusammenfassen', 'email-antwort'],
        schritte: [
            {
                titel: 'Ein Chat pro Thema',
                text: [
                    'ChatGPT merkt sich, was im aktuellen Chat steht. Wenn du im selben Chat erst über Urlaub und dann über deine Steuererklärung sprichst, vermischt sich der Zusammenhang.',
                    'Starte deshalb für jedes neue Thema eine neue Unterhaltung. Ein Chat pro Projekt ist die einfachste Regel für bessere Antworten.',
                ],
                jean: 'Ein aufgeräumter Chat ist wie eine aufgeräumte Werkbank: Du findest schneller, was du brauchst.',
            },
            {
                titel: 'Die erste Frage: Kontext statt Stichwort',
                text: [
                    'Ein Sprachmodell kennt dich nicht. Je mehr es über Ziel, Zielgruppe und Rahmen weiß, desto besser passt die Antwort.',
                    'Faustregel: Schreib so, als würdest du einer klugen neuen Kollegin eine Aufgabe geben, die dich noch nie gesehen hat.',
                ],
                vergleich: {
                    vorher: 'Geschenkideen Vater',
                    nachher: 'Mein Vater wird 65, wandert gern, liest Krimis und hat eigentlich alles. Budget 50 Euro. Gib mir 10 Geschenkideen mit je einem Satz, warum sie passen, und sortiere sie nach Aufwand.',
                    erklaerung: 'Links bekommst du eine Standardliste, rechts Ideen für genau diesen Menschen.',
                },
            },
            {
                titel: 'Nachschärfen statt neu fragen',
                text: [
                    'Die erste Antwort ist ein Entwurf. Statt eine neue Frage zu stellen, sag ChatGPT, was du ändern willst: kürzer, lockerer, mit Beispielen, als Tabelle.',
                    'Zwei, drei kurze Nachrichten zum Nachschärfen bringen meist mehr als ein perfekter erster Prompt.',
                ],
                ausprobieren: 'Mach die Antwort halb so lang, schreib sie lockerer und füge ein konkretes Beispiel aus dem Alltag hinzu.',
            },
            {
                titel: 'Das Format bestimmen',
                text: ['Sag am Ende des Prompts, wie das Ergebnis aussehen soll: Tabelle, Stichpunkte, E-Mail mit Betreff, Schritt-für-Schritt-Anleitung. So musst du hinterher nichts umbauen.'],
                vergleich: {
                    vorher: 'Vergleiche Strom-Tarife.',
                    nachher: 'Erstelle eine Tabelle mit den Spalten Kriterium, worauf ich achten sollte, typische Falle. Thema: Stromtarif wechseln. Höchstens 8 Zeilen.',
                    erklaerung: 'Das Format im Prompt spart das Umformatieren danach.',
                },
            },
            {
                titel: 'Texte, Dateien und Bilder mitgeben',
                text: [
                    'Viele KI-Chats können eingefügten Text, hochgeladene Dateien und Bilder auswerten. Statt ein Problem zu beschreiben, gib das Material direkt mit: den Vertrag, die Fehlermeldung, das Foto des Formulars.',
                    'Markiere eingefügten Text mit Anführungszeichen oder drei Strichen, damit klar ist, wo dein Auftrag endet und das Material beginnt.',
                ],
                ausprobieren: 'Fasse den folgenden Text in 5 Stichpunkten zusammen und nenne danach 3 Fragen, die offen bleiben.\n\n"""\n[TEXT EINFÜGEN]\n"""',
            },
            {
                titel: 'Fakten immer prüfen',
                text: [
                    'ChatGPT formuliert überzeugend, auch wenn es falsch liegt. Erfundene Zahlen, Studien oder Zitate nennt man Halluzinationen.',
                    'Bei Fakten, Zahlen, Recht und Gesundheit gilt: Quelle verlangen, öffnen, prüfen. Erlaube der KI ausdrücklich, „weiß ich nicht“ zu sagen.',
                ],
                ausprobieren: 'Beantworte meine Frage nur, wenn du dir sicher bist, und sag sonst offen, was du nicht weißt. Nenne für jede Zahl eine Quelle mit Link. Frage: [DEINE FRAGE]',
                jean: 'Ich behandle jede KI-Antwort wie einen Tipp vom Stammtisch: oft gut, aber nicht ungeprüft weitererzählen.',
            },
            {
                titel: 'Datenschutz: was nicht in den Chat gehört',
                text: [
                    'Gib keine Passwörter, Kontodaten, Gesundheitsdaten oder vertrauliche Firmeninformationen ein. Ersetze Namen und Zahlen durch Platzhalter wie [KUNDE] oder [BETRAG].',
                    'Schau in die Einstellungen deines KI-Tools, ob deine Chats zum Training genutzt werden, und schalte das bei Bedarf ab.',
                ],
            },
            {
                titel: 'Gute Prompts speichern und andere KIs testen',
                text: [
                    'Was einmal gut funktioniert, speicherst du als Vorlage. Die Prompt-Bibliothek auf AIGeddon hat über 40 fertige Vorlagen zum Ausfüllen, die du mit einem Klick an ChatGPT, Claude und andere schickst.',
                    'ChatGPT ist nicht für jede Aufgabe die beste Wahl. Im KI-Test schickst du dieselben Aufgaben an mehrere KIs und siehst selbst, welche dir am besten hilft.',
                ],
                jean: 'Meine Lieblingsübung: dieselbe Frage an drei KIs. Danach weißt du mehr als nach jedem Testbericht.',
            },
        ],
        quiz: [
            {
                frage: 'Was verbessert die erste Antwort von ChatGPT am meisten?',
                antworten: ['Höflich „bitte“ sagen', 'Ziel, Zielgruppe und Rahmen mitgeben', 'Alles in Großbuchstaben schreiben'],
                richtig: 1,
                erklaerung: 'Kontext ist der größte Hebel: Ohne ihn liefert die KI Durchschnitt.',
            },
            {
                frage: 'Die Antwort ist zu lang. Was tust du?',
                antworten: ['Neuen Chat starten', 'Im selben Chat sagen: „halb so lang, bitte“', 'Aufgeben'],
                richtig: 1,
                erklaerung: 'Nachschärfen im selben Chat ist schneller und nutzt den bisherigen Zusammenhang.',
            },
            {
                frage: 'Welche Angaben gehören nicht in einen KI-Chat?',
                antworten: ['Ein Zeitungsartikel zum Zusammenfassen', 'Passwörter und vertrauliche Kundendaten', 'Eine Einkaufsliste'],
                richtig: 1,
                erklaerung: 'Sensible Daten nie eingeben, Namen und Zahlen durch Platzhalter ersetzen.',
            },
        ],
    },
]

export const getTutorials = () => TUTORIALS
export const getTutorial = (slug) => TUTORIALS.find((t) => t.slug === slug) || null
