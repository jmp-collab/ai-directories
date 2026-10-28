# Mission 24 h: AIGeddon wird Nr. 1 für „KI Tools“, „KI Verzeichnis“, „KI Test“

Start 2026-10-23 02:15 UTC · Ende mit Präsentation 2026-10-24 ~02:00 UTC.
Regel von Jean: keine Rückfragen bis zum Endergebnis. Alles, was Jean selbst tun muss, sammle ich im Abschnitt „Für Jean“ und präsentiere es am Ende.

Jede Phase endet mit Build, Layer-A-Prüfung, PR, Merge, Live-Check. Die Phasen laufen in Reihenfolge; die geplanten Wiederaufnahmen dieser Sitzung nehmen jeweils die erste offene Phase.

## Ziele

1. **Design**: deutlich mehr Trennelemente, Farbbänder, Boxen, Animationen und interaktive Elemente auf allen wichtigen Seiten.
2. **Suchmaschinen**: für „KI Tools“, „KI Verzeichnis“, „KI Test“ und ihre Varianten die stärkste deutsche Seite bauen (Inhalt, Technik, interne Links, strukturierte Daten, Geschwindigkeit).
3. **Interaktivität**: Rechner, Tests, Finder, Quiz, dynamische Widgets.

## Phasen

- [x] **P1 Design-System**: Trenner-Komponente (Welle, Zickzack, Strahlung), Farbbänder, Scroll-Reveal-Animationen auf allen Seiten, Zähl-Animationen für Kennzahlen, Startseite mit neuem Aufbau (Bänder, Kennzahlen, Einstiege in alle Rubriken).
- [x] **P2 KI-Test-Hub** `/ki-test`: Selbsttest-Suite mit standardisierten Testaufgaben (Logik, Fakten, Deutsch, Kreativität, Code), Senden an mehrere KIs, Bewertungsbogen mit Ergebnisgrafik; Methodik-Seite; Rubrikseiten je Testkategorie.
- [x] **P3 Rechner-Hub** `/rechner`: Zeitersparnis-/ROI-Rechner, KI-Abo-Rechner, Token-/API-Kosten-Rechner (Preise nur mit Quelle und Datum), Automatisierungs-Kostenrechner.
- [x] **P4 Keyword- und Technik-SEO**: Keyword-Recherche (Semrush, falls verfügbar), Titel/Descriptions/H1 der Hauptseiten auf Zielbegriffe, WebSite-/Organization-Schema, FAQ-Blöcke, interne Verlinkung (Hub-and-Spoke), Breadcrumbs überall, Sitemap-Prioritäten, 404-Check, Bundle-Größen.
- [x] **P5 Pillar-Content**: „KI-Tools: die besten nach Aufgabe“, „Kostenlose KI-Tools“, „KI-Verzeichnis: was es ist und welche sich lohnen“, „KI-Test: so vergleichst du Chatbots“; jeweils mit Inhaltsverzeichnis, Boxen, interaktiven Elementen und FAQ.
- [x] **P6 Tool-Steckbriefe**: Konsens-Tools mit Partnerprogramm in `db/tools.json` (Preise laut Anbieter), Partnerprogramme in `db/partners.json`.
- [x] **P7 Dynamik**: Prompt des Tages, Tool-Finder-Quiz, „Neu in der Datenbank“, Fortschritts- und Gamification-Elemente, Mikro-Animationen.
- [x] **P8 Qualitätsrunde**: alle Seiten Desktop/Mobil per Screenshot prüfen, Barrierefreiheit (Kontrast, Fokus, reduzierte Bewegung), Lighthouse-ähnliche Checks, tote Links.
- [x] **P10 Tool-Vergleiche für Suchbegriffe**: „ChatGPT vs. Claude vs. Gemini vs. Perplexity“ (mit Steckbriefen), „ElevenLabs vs. Murf“, „Tally vs. Typeform“, „Descript vs. Pictory“, „Gamma vs. Canva“; Empfehlungen nur aus `db/tools.json`.
- [x] **P11 Mehr Tutorials**: „Eigenen Custom GPT / Claude Project bauen“, „Bild-Prompts für Midjourney & Co.“, „Newsletter mit KI in einer Stunde“; je mit Vorher/Nachher, Ausprobieren und Quiz.
- [x] **P12 Mehr Inhalte im Prompt-Hub und KI-Test**: Prompt-Bibliothek von 12 auf 30 Vorlagen (E-Commerce, Bewerbung, Excel, Bild, Coding, Lernen), KI-Test von 17 auf 30 Aufgaben (u. a. Zusammenfassen, Übersetzen, Tabellen, Mathe).
- [x] **P13 Prompt-Glossar**: 40 Begriffe rund um Prompt Engineering und KI-Modelle im bestehenden Glossar, mit Querverweisen und DefinedTerm-Schema.
- [x] **P14 Deutsche Texte**: Kurzbeschreibungen für weitere 150 Datenbank-Tools (zuerst Bild, Video, Audio, Schreiben), nur auf Basis der Quelle.
- [x] **P15 Rechner II**: Automatisierungs-Kostenrechner (Make, Zapier, n8n) und Newsletter-Kostenrechner (beehiiv, Kit, Brevo, GetResponse), Preise laut Anbieter mit Datum.
- [x] **P16 Performance**: Seitengewichte messen, Datenmengen der Client-Komponenten senken, Vorschaubilder für Hub-Seiten.
- [x] **P17 Deutsche Texte II**: Kurzbeschreibungen für die übrigen Rubriken (Schreiben, Produktivität, Chatbots, Suche, Recherche, Marketing, Agenten, Coding, Modelle), nur auf Basis der Quelle, je Runde 150.
- [x] **P18 Steckbriefe II**: 8 weitere Konsens-Tools mit prüfbarer Preisseite (z. B. Midjourney, Leonardo AI, Suno, Fliki, Play.ht, Jasper, QuillBot, Wordtune), Partnerprogramme recherchieren und im Register ergänzen.
- [x] **P19 Pillar-Content II**: „KI-Tools für Texte“, „KI-Bildgeneratoren im Vergleich“, „KI-Video-Tools“, „KI für Marketing“ als Themenseiten mit Inhaltsverzeichnis, Boxen, Tool-Karten, passenden Prompts und FAQ.
- [x] **P20 Ratgeber**: „Product-Hunt-Alternativen für deutsche Gründer“ und „Welcher Newsletter-Anbieter für Gründer?“ aus dem Backlog, mit Verweisen auf Verzeichnis-, Tool- und Rechnerseiten.
- [x] **P21 Vorschaubilder**: eigene Open-Graph-Bilder für Hub-Seiten (KI-Tools, KI-Test, Rechner, Prompts, Tutorials), damit geteilte Links auffallen.
- [x] **P22 Tool-Einzelseiten**: eigene Seite je Datenbank-Tool unter /ki-tools/tool/[slug] (Was ist das, Fakten, Quellen, Alternativen, Prompts), Namen in Explorer, Karten, Podium und Tool-Finder intern verlinkt; nur Konsens- und Steckbrief-Tools im Index.
- [x] **P23 Startseite & Navigation für „KI-Tools“**: Einstieg in Datenbank, KI-Test und Rechner prominenter, Suchfeld zur Datenbank im Kopf der Startseite, interne Links zu Tool-Seiten.
- [x] **P24 Alternativen-Hubs**: „Midjourney-Alternativen“, „Perplexity-Alternativen“, „Notion-AI-Alternativen“ aus Datenbank und Steckbriefen, mit FAQ.
- [x] **P25 Qualitätsrunde**: kompletter Link-Crawl, Überlauf-Check mobil, Kontrast, Lighthouse-ähnliche Prüfung der Hub-Seiten.
- [x] **P26 Glossar-Einzelseiten**: „Was ist …?“-Seite je KI-Begriff (41) mit Erklärung, Beispiel, Praxis-Tipp, verwandten Begriffen, DefinedTerm- und FAQ-Schema.
- [x] **P27 Prompts III**: 15 weitere Prompt-Vorlagen für häufige Suchanfragen (Bewerbung, Excel-Formeln, Social Media, Zusammenfassung, Übersetzung, E-Mail-Antwort u. a.).
- [x] **P28 Glossar-Verlinkung**: Fachbegriffe in Tutorials, Ratgebern und Glossar-Seiten automatisch beim ersten Vorkommen mit der Glossar-Seite verlinkt.
- [x] **P29 KI-Test teilen**: Ergebnis als Link teilen (Web-Share oder Zwischenablage); der Link zeigt dem Empfänger die Rangliste und lädt zum eigenen Test ein.
- [x] **P30 Tutorial „ChatGPT richtig nutzen“**: Einsteigerkurs mit 8 Schritten, Vorher/Nachher, Prompts zum Ausprobieren, Quiz.
- [x] **P31 KI-Tools nach Zielgruppe**: Lehrkräfte, Studierende, Selbstständige, Entwickler, Marketing mit Aufgaben, Tools, Prompts, Tutorial, Rechner, FAQ.
- [x] **P32 Zielgruppen II**: weitere Zielgruppen-Seiten: Onlinehändler, Content Creator/YouTuber, HR & Recruiting, Handwerk, Schüler.
- [x] **P33 Tutorial „KI-Agenten verstehen und einsetzen“**: 7. Tutorial mit Schritten, Vorher/Nachher, Quiz.
- [x] **P34 Performance II**: größte Seiten und JS-Bundles messen, unnötige Client-Daten entfernen.
- [x] **P36 Prompts IV**: 10 Prompts für die neuen Zielgruppen (Stellenanzeige, Elternbrief, Produktfoto-Briefing, Shorts-Ideen, Video-Titel, Kundenanfrage Handwerk, Vokabeltrainer, Referat-Folien, Onboarding-Plan, Rückruf-Notiz).
- [x] **P37 Rubrik-Ratgeber II**: Auswahlkriterien, Tipp/Warnung und FAQ für Audio, Musik, Agenten, Coding, Produktivität, Chatbots.
- [x] **P38 Rubrik-Ratgeber III**: Suche, Recherche, Modelle, Sicherheit, Finanzen (Kriterien, Tipp, Warnung, FAQ).
- [x] **P39 Ratgeber „KI und Datenschutz“**: DSGVO-Checkliste für KI-Tools (AVV, Training mit Daten, Serverstandort, Einwilligung bei Aufnahmen, EU AI Act Grundzüge), verlinkt aus Zielgruppen und Rubriken.
- [x] **P40 Startseite & Hubs**: Zielgruppen- und Alternativen-Einstiege auf Startseite und KI-Tools-Hub, Kompass in der Seitenleiste ergänzen.
- [x] **P41 Glossar II**: 20 weitere KI-Begriffe mit eigener Seite (z. B. Transformer, Reasoning-Modell, Kontext-Engineering, Vibe Coding, Inpainting, Upscaling, Deepfake, C2PA, LoRA, Quantisierung, VRAM, Latenz, Rate Limit, Bias, Alignment, Open Source, Text-to-Image, Text-to-Video, Agentischer Workflow, Model Card), Autolink ergänzen.
- [x] **P42 KI-Test II**: 10 weitere Testaufgaben in den bestehenden Kategorien (mit Kriterien, wo möglich mit Lösung).
- [x] **P43 Tool-Vergleiche II**: neue Vergleiche aus vorhandenen Steckbriefen (z. B. Midjourney vs. Leonardo AI, Wordtune vs. Rytr, Runway vs. InVideo AI, Otter.ai vs. Descript; bestehende 11 Vergleiche nicht doppeln), nur mit Preisen aus db/tools.json. Erledigt: 6 neue Vergleiche (Midjourney vs. Leonardo AI, Wordtune vs. Rytr, Runway vs. InVideo AI, Otter.ai vs. Descript, Systeme.io vs. Kit, Surfer SEO vs. Writesonic), jetzt 17.
- [x] **P44 Prompt-Kategorien**: eigene Seite je Prompt-Kategorie (/prompts/kategorie/[key]) mit Intro, Prompts, passenden Tutorials und FAQ. Erledigt: 9 Kategorieseiten mit Tipps-Band, Tutorials, Rubrik, Zielgruppen, FAQ-Schema; Hub, Prompt-Seiten (Breadcrumb) und Sitemap verlinken sie.
- [x] **P45 Live-Check P44 + Verlinkung II**: P44 live prüfen; Startseite und /tools/[slug]-Steckbriefe verlinken die neuen Vergleiche und passenden Prompt-Kategorien; Glossar-Autolink auf Kategorieseiten-Intros. Erledigt: P44 live bestätigt; 24 Steckbriefe zeigen passende Prompts mit Kategorie-Link; Startseite mit Chip-Leiste „Prompts nach Thema“ und dynamischen Zählern (17 Vergleiche, 12 Alternativen-Übersichten statt falscher 13, 61 Begriffe); Glossar-Autolink in Intro und Tipps der Kategorieseiten.
- [x] **P46 KI-Test II**: 10 weitere Testaufgaben in lib/kitests.js (nur prüfbare Lösungen, keine tagesaktuellen Fakten), Kategorien ausbalancieren (kreativ, code). Erledigt: 10 neue Aufgaben (Schnecke im Brunnen, Grundgesetz, falsche Prämisse Einstein, seit/seid, Haiku, Perspektivwechsel, Text ohne E, Excel-SVERWEIS, Python-Liste, FizzBuzz), jetzt 50; kreativ 4→7, code 5→8.
- [x] **P47 Ratgeber II**: zwei neue Ratgeber-Artikel aus vorhandenen Daten (z. B. kostenlose KI-Bildgeneratoren aus db/tools.json + KB, KI-Tools für Meetings & Transkription), mit FAQ und internen Links, keine erfundenen Preise. Erledigt: /ratgeber/ki-bildgeneratoren-vergleich und /ratgeber/ki-video-tools-vergleich (Preise nur aus db/tools.json), Ratgeber-Seiten können jetzt FAQ samt FAQPage-Schema tragen. Meeting-Artikel verschoben, weil die Datenlage (nur Otter.ai mit Steckbrief) zu dünn ist.
- [x] **P48 Live-Check P46/P47 + Rubrik-Brücken**: P46/P47 live prüfen; Rubrikseiten Bild und Video verlinken die neuen Ratgeber; ältere Ratgeber (Datenschutz, Newsletter, Product Hunt) bekommen FAQ mit Schema. Erledigt: P46 live (8 Code-Aufgaben), Rubriken Bild und Video verlinken ihre Ratgeber, FAQ (je 4 Fragen, je genau 1 FAQPage) für Product-Hunt-Alternativen, Newsletter-Anbieter und DSGVO-Checkliste.
- [x] **P49 Vor-QA Strukturdaten & Meta**: alle in P41 bis P48 neuen Seitentypen auf Title-Länge, Description, Canonical, JSON-LD und doppelte H1 prüfen und Fehler direkt beheben. Erledigt: Audit über 1.240 Seiten (Title, Description, Canonical, H1, JSON-LD, doppelte Titles). Befund: nur zu lange Titles (46 über 70 Zeichen); gekürzt für Prompt-Kategorien, Zielgruppen, Ratgeber (neues Feld seoTitle), Vergleiche, Tool-Seiten, Tutorials, Listen, Glossar. Jetzt 6 Seiten mit 71–72 Zeichen, 0 fehlende Descriptions, 0 doppelte Titles, genau 1 H1 je Seite, JSON-LD überall gültig.
- [x] **P35 Abschluss-QA**: Link-Crawl, Überlauf, Kontrast, Strukturdaten, Live-Stichproben. Erledigt (vorgezogen, 23.10. ~14:45 UTC): 89.548 interne Links auf 1.240 Seiten, 0 kaputt; 31 Seitentypen mobil ohne Überlauf; Kontrast hell/dunkel auf 10 Stichproben ohne Befund; Konsole sauber (RSC-Meldungen im Testlauf als Abbruch beim Seitenwechsel bestätigt); Strukturdaten: 0 doppelte FAQPage, 0 leere Felder, alles gültig; Live-Stichproben neue Ratgeber, Zielgruppe, Startseite ok. Vor P9 nach P50–P52 noch einmal Link-Crawl.
- [x] **P50 Prompt-Bibliothek II**: 6 neue Vorlagen für die dünnsten Kategorien (SEO 3, Video 4, Launch/Shop/Technik je 5), jede mit Feldern, Techniken, passenden Tools aus db/tools.json. Erledigt: 6 neue Vorlagen (Content-Refresh, Interne Verlinkung, Avatar-Video-Skript, Kapitelmarken, Kategorietext Shop, Tabelle bereinigen), jetzt 61; SEO 3→5, Video 4→6, Shop 5→6, Technik 5→6. Steckbriefe Synthesia, HeyGen, Descript, Otter.ai, Writesonic zeigen sie automatisch.
- [x] **P51 Abo-Rechner Kreativ-KI**: Rechner monatlich vs. jährlich für Tools mit beiden Preisen in db/tools.json (Midjourney, Runway, Descript, HeyGen, Otter.ai, Wordtune), keine geschätzten Werte. Erledigt: /rechner/abo-monatlich-oder-jaehrlich mit 8 Tools (Claude, Midjourney, Runway, Descript, HeyGen, Otter.ai, ElevenLabs, Wordtune), Break-even je Tool, Preistabelle, FAQ. Dabei gefunden und behoben: FAQ-Einträge als Arrays (Prompt-Kategorien, 5 Ratgeber) wurden leer gerendert und mit leerem FAQ-Schema ausgeliefert; Faq-Komponente normalisiert jetzt beide Formate, Audit prüft künftig leere Fragen.
- [x] **P52 Schluss-Crawl**: Link-Crawl, Meta-Audit und Live-Stichprobe nach P50/P51, Kennzahlen für P9 zusammentragen (Seitenzahl, Tools, Prompts, Tests, Vergleiche, Ratgeber). Erledigt: 1.247 Seiten, 91.335 interne Links, 0 kaputt; Meta-Audit wie P49 (6 Titles mit 71–72 Zeichen, sonst sauber); 0 leere FAQ-Einträge, 399 Seiten mit FAQ-Schema; live geprüft: Abo-Rechner, FAQ auf Prompt-Kategorien. Kennzahlen: 256 Verzeichnisse, 705 Tool-Seiten, 35 Steckbriefe, 15 Rubriken, 61 Prompts + 103 Archiv, 9 Prompt-Kategorien, 50 KI-Tests, 17 Vergleiche, 8 Ratgeber, 7 Tutorials, 61 Glossarbegriffe, 6 Rechner, 10 Zielgruppen, 12 Alternativen-Hubs.
- [x] **Qualitätsrunde 23:00 UTC**: Barrierefreiheits-Audit (lang, main, Alt-Texte, Namen von Links/Buttons, Labels, Überschriften-Hierarchie, doppelte IDs, Klickziele) auf 16 Seitentypen mobil/desktop plus Screenshots und Link-Crawl. Behoben: Foto-Widget in der Desktop-Sidebar war auf 4 px gestaucht (Flex-Shrink, jetzt scrollt die Sidebar), doppelte ID „werkzeuge“ auf der Startseite, Pfeil-Links ↗ der Tool-Datenbank und Prompt-Links der Zielgruppenseiten auf mindestens 24 px. 0 kaputte Links.

> Zeitregel: P9 erst ab 01:30 UTC am 24.10. starten (eigener Termin 01:45 UTC). Ein früherer Wake, der nur P9 offen findet, macht stattdessen einen Live-Check (Startseite, eine neue Seite je Phase P43 bis P52) und endet ohne Änderung, wenn alles in Ordnung ist.

- [x] **P9 Präsentation**: Ergebnisbericht mit Vorher/Nachher, Live-Links, Kennzahlen, Liste „Für Jean“. Erledigt 24.10. 01:55 UTC: Ergebnisbericht als Artifact (https://claude.ai/artifact/XUqUKk6RTUBKLMyVNPLp97). Ergänzung „Für Jean“: GitHub-About-Feld Website zeigt noch auf ai-directories.vercel.app (Ursprungsprojekt), auf https://jmp-collab.github.io/ai-directories/ umstellen; Repo-Einstellungen sind für mich gesperrt.

## Content-Ausbau II (Auftrag 25.10.: „Content maximal geil und liebevoll ausbauen“, Lead-Formular auf jeder Seite)

- [x] **C0 Lead-Formular**: „Frag Jean direkt“ auf allen Seiten, Versand über FormSubmit an LEAD_EMAIL, Einwilligung, Honeypot, Danke-/Fehleransicht; neue Seite /datenschutz (PR #97).
- [x] **C1 Steckbriefe**: 35 Tool-Steckbriefe mit Kosten-Box (Break-even aus dem Abo-Rechner), Prüf-Kriterien der Rubrik, Einsatz aus den Zielgruppen, FAQ mit Schema aus den Daten, Links zu Datenbank, Alternativen und Rubrik; ~200 → 330–570 Wörter.
- [x] **C2 Verzeichnis-Detailseiten**: 256 Seiten mit Einreichungs-Checkliste, FAQ aus den Daten (Kosten, DR, Einreichung, Linkart), ähnlichen Verzeichnissen und Launch-Kit-Verweis. Erledigt: „Wofür sich X eignet“ (Einordnung aus DR, Besuchen, Preis, Einreichung), Listen-Zugehörigkeit, Band „So trägst du dein KI-Tool bei X ein“ (5 Schritte mit Daten aus Prüfung, Rabattcode, Launch-Kit, Freischaltdauer), FAQ um SEO-Wert, Freischaltung und Rabattcode erweitert; 256 Seiten jetzt 458–826 Wörter (Schnitt 627).
- [x] **C3 Werben & Über Jean**: Angebotsseite mit Ablauf, Paketen ohne erfundene Preise, FAQ und Formular-Vorauswahl; Über-Jean mit Geschichte von AIGeddon. Erledigt: /werben mit Kennzahlen, 4 Angebotskarten mit Leistungen, Ablauf in 4 Schritten, „Was es hier nicht zu kaufen gibt“, 5 FAQ mit Schema; „Anfragen“ springt per #anfrage-… zum Formular und wählt das Anliegen vor (funktioniert auf jeder Seite). Über Jean unverändert (bereits ausführlich).
- [x] **C4 Startseite**: „So nutzt du AIGeddon“ in 3 Schritten, ehrliche Kennzahlen, Einstiege nach Ziel, FAQ-Ausbau. Erledigt: Abschnitt „Was willst du erreichen?“ mit 4 Wegen (launchen, Tool finden, KI besser nutzen, KIs vergleichen) zu je 4 Schritten inkl. Formular-Vorauswahl; FAQ um Tool-Suche, ChatGPT/Claude/Gemini und Eintragsservice erweitert.
- [x] **C5 Ratgeber III**: „KI-Tool launchen in 30 Tagen“ (Plan aus Verzeichnisdaten, Launch-Kit, Rechnern), „ChatGPT, Claude, Gemini: welcher Chatbot wofür“ (ohne erfundene Preise, mit KI-Test). Erledigt: /ratgeber/ki-tool-launchen-30-tage (Wochenplan mit Zahlen aus db/directories.json: 164 kostenlos, 158 reibungslos, 55 mit DR 50+, 28 mit 500.000+ Besuchen, 25 Rabattcodes, 71 geprüfte Freischaltzeiten) und /ratgeber/chatgpt-claude-gemini-welcher-chatbot (Testmethode statt Rangliste, Preise nur für Claude laut Anbieter); je 4 FAQ mit Schema.
- [x] **C6 Qualitätsrunde und Bericht**: Link-Crawl, Meta-Audit, Barrierefreiheit, Live-Check, Kurzbericht an Jean. Erledigt 25.10.: 1.250 Seiten alle mit Formular, 92.955 interne Links (0 kaputt), 437 Seiten mit vollständigem FAQ-Schema, Meta-Audit unverändert, Barrierefreiheit ohne neue Befunde; live geprüft: neue Ratgeber, /datenschutz, /werben.

## Content-Ausbau III (Auftrag 25.10.: „so viele neue Directories, Tools, Prompts, Tutorials wie möglich, neue Keywords wie Opus 5.5 oder Gemini 4“)

- [x] **D1 Prompts und Tutorials**: 14 neue Prompts (75 gesamt), 2 neue Tutorials (9 gesamt): KI-Texte menschlich überarbeiten, Mit KI recherchieren (PR #104).
- [x] **D2 Tool-Steckbriefe**: 29 neue Steckbriefe (64 gesamt), neue Kategorie Coding (GitHub Copilot, Cursor, v0, Replit), dazu ChatGPT, Gemini, Copilot, DeepL, Suno, Kling, Manus u. a.; Preise nur von Anbieterseiten, sonst ohne Zahl.
- [x] **D3 Neue KI-Modelle**: Hub /neue-ki-modelle mit 18 Modellseiten, Familienseiten GPT-6 und Claude 5.5, Gerüchte-Check (GPT-6 als Einzelmodell, Gemini 4, Veo 4, Grok 5, Qwen 4 …), jede Angabe mit Quelle, API-Preise nur von offiziellen Seiten.
- [x] **D4 Neu entdeckte Verzeichnisse**: /neu-entdeckt mit 98 Verzeichnissen (72 kostenlos, 20 DACH, 16 Agenten/MCP, 26 Launch), Badge-Pflicht markiert; ohne DR/Besuche, weil keine Messwerte vorliegen.
- Keywords (Ubersuggest, DE): „gpt 6“ 1.300/Monat (Spitze 4.400 im August), „gemini 4“ 1.000, „claude opus 5.5“ 10. Weitere Abfragen scheiterten an Semrush-API-Einheiten und dem Ubersuggest-Tageslimit.

## Content-Ausbau IV (Auftrag 25.10.: „Artikel information value verdoppeln, Abgleich aller Informationen durch Internet-Recherche“)

- [x] **E1 Faktencheck**: alle 10 Ratgeber gegen Primärquellen geprüft (Anbieter-Preisseiten und Hilfe-Center, Google Search Central, GA4-Hilfe, Product-Hunt-Hilfe, EUR-Lex, DSK, BfDI); 26 Korrekturen, darunter utm_medium=referral statt directory (GA4 ordnet sonst „Unassigned“ zu), nofollow als Hinweis statt Verbot, Beta List nicht mehr kostenlos, Dev Hunt Launch $19, Fazier nur mit Badge, Digital Omnibus (VO (EU) 2026/1744): neuer Art. 4 AI Act und Hochrisiko-Fristen 2.12.2027 / 2.8.2028, Synthesia-Preis als Monatspreis, Sora-Abschaltung mit Daten.
- [x] **E2 Ausbau**: 40 neue Abschnitte, 48 neue FAQ, 94 Quellen; Artikel von 5.084 auf rund 13.000 Wörter (Faktor 2,6). Jede Artikelseite zeigt jetzt „geprüft am“ und einen Quellenblock (auch als citation im Article-Schema).
- [x] **E3 Folgekorrekturen**: UTM im Launch-Kit-Generator und auf der Startseite, Beta List in der Hauptliste auf „Bezahlt“, ChatGPT Plus $20 und Google AI Plus 4,99 € in den Steckbriefen, Sora im Gerüchte-Check, AI-Act-Frist auf der HR-Zielgruppenseite.

## Content-Ausbau V (Auftrag 26.10.: „Weiter ausbauen und Fakten checken“)

- [x] **F1 Steckbriefe**: alle 64 Tools gegen offizielle Preisseiten geprüft, 37 Feldänderungen. SE Ranking jetzt ab $129/Monat bzw. $103,20 (Essential abgeschafft), Synthesia Starter $19 (erster Monat $9), GetResponse in Euro, Tally $29 bzw. $290/Jahr, Gamma ohne Preis (offizielle Seite nennt keinen), Suno, CapCut, Fliki mit Anbieterpreis; Semrush gehört seit 28.4.2026 zu Adobe. Abo-Rechner von 8 auf 18 Abos.
- [x] **F2 Tool-Vergleiche**: 17 Vergleiche mit 85 geprüften Unterschieden, 51 FAQ (im FAQ-Schema), 70 Quellen; 4 Preiskorrekturen.
- [x] **F3 Rubrik-Ratgeber**: 9 Korrekturen (Continue von Cursor übernommen und eingestellt, Udio ohne Downloads, Wordtune nur Englisch, Midjourney-Bedingungen 27.5.2026, Flux-Lizenzen), 30 neue FAQ, 65 Quellen.
- [x] **F4 Zielgruppen und Glossar**: 17 Korrekturen (Windsurf heißt Devin Desktop, telli heißt AIS.chat, Altersgrenzen, Art. 50 AI Act, Token- und Top-p-Definition), 20 neue FAQ mit Quellen, 10 neue Glossarbegriffe (71 gesamt).

## Content-Ausbau VI (Auftrag 26.10.: „alle Inhalte unique, lustig-sympathische Brand Voice“)

- [x] **G1 Brand Voice**: Leitfaden docs/BRAND-VOICE.md (Persona Jean, fünf Regeln, Ton, Form, wiederkehrende Elemente).
- [x] **G2 Unikat-Texte** (db/texte/*.json, nur aus vorhandenen Daten, Zahlen automatisch gegen die Daten geprüft): Jeans Take für 256 Verzeichnisse, Jeans ehrliche Meinung mit Passt/Lass-es für 64 Steckbriefe, Intro, Tipp und typischer Fehler für 75 Prompts, Schrauber-Erklärung, Beispiel und Merksatz für 71 Glossarbegriffe, Jeans Take für 154 indexierbare Seiten der KI-Tool-Datenbank.
- [x] **G3 Entdoppeln**: Verzeichnis-Anleitung von 5 generischen auf 3 eintragsspezifische Schritte plus Link zum Ratgeber, Service-Hinweis und generische Stärken-Texte entfernt, wo Jeans Take steht.
- Satz-Unikatanteil vorher/nachher: Verzeichnisse 32 % → 74 %, Steckbriefe 29 % → 45 %, Prompts 30 % → 48 %, Glossar 53 % → 65 %.
- Datenkorrektur: Anyfp laut eigener Seite kostenlos.

## Offene Punkte II (Auftrag 26.10.: „Alle offenen Punkte erledigen“)

- [x] **H1 Datenkorrekturen**: Startup Spotlight bezahlt (Gebot ab $10, Stripe-Link), MicroLaunch-Einreichung über microlaunch.net/hq (altes Formular laut Anbieter „legacy“), Make $9 und Otter $8,49 (jährlich) erneut bestätigt.
- [x] **H2 Titel**: alle sechs Titel über 70 Zeichen gekürzt (Steckbriefe, Prompts, KI-Test, Vergleiche).
- [x] **H3 Entdoppeln II**: Prüfkriterien auf Steckbriefen als kurze Liste plus Link zur Rubrik, Technik-Erklärungen auf Prompt-Seiten als Satz plus Link zum Tutorial.
- [x] **H4 Unikat-Texte** für die übrigen 551 Seiten der KI-Tool-Datenbank.
- [x] **H5 Vorbereitet für Jean**: Repository-Variablen GSC_VERIFICATION, LEAD_EMAIL, LEAD_ALIAS im Deploy-Workflow; Klick-Anleitung docs/FUER-JEAN.md.
- Keywords (Ubersuggest DE): „claude sonnet 5.5“ 1.600 im September 2026, „neue ki modelle“ 90 bis 140, „gpt 6 astra“ 0; danach Tageslimit.

## Content-Ausbau VII (Auftrag 26.10.: „Lead-Adresse, alle Texte unique, witzig, liebevoll, sympathisch“)

- [x] **I1 Lead-Adresse**: neue private Adresse als Standard für das Lead-Formular.
- [x] **I2 Jeans Senf**: eigene Einleitung mit Tipp und Jean-Zeile für 73 Übersichts-, Listen-, Alternativen-, Rechner-, KI-Test- und Rubrikseiten (db/texte/hubs.json, Komponente JeansSenf).
- [x] **I3 Tonpass** (Zahlen je Absatz automatisch gegen das Original geprüft, 0 Abweichungen): 10 Ratgeber (346 Textstellen), 17 Vergleiche (232), Modellseiten (89), Zielgruppen- und Rubrik-FAQ mit Tipps und Warnungen (136).
- [x] **I4 Entdoppeln III**: YouTube-Hinweis pro Seite aus 24 Sprüchen statt 1.327-mal derselbe Satz, KB-Infobox und Quellenzeile gekürzt, Verzeichnis-FAQ und Ratgeber-Hinweis ohne Wiederholungssatz.

## Liebevolle Details (Auftrag 26.10.: „Agenten weiter laufen lassen, Website optisch maximal liebevoll mit Details“)

- [x] **J1 Agenten**: Backlog in docs/TASKS.md mit 17 neuen Aufgaben gefüllt (der tägliche Lauf hatte nichts mehr zu tun); neue Routine „AIGeddon: Wöchentliche KI-News“ (Do 07:37). Hinweis: Routinen laufen ohne Exa-Connector und mit gesperrten Anbieterseiten, siehe docs/FUER-JEAN.md.
- [x] **J2 Details**: Lese-Fortschrittsbalken (Pink, Gelb, Mint), Tagesgruß als Aufkleber im Header, Konfetti nach dem Absenden des Lead-Formulars, Kaffee-Meter bei Ratgebern, Klebeband an Jeans Boxen, schief liegende Karten, die sich beim Drüberfahren aufrichten, Knopf-Effekt bei Buttons, Wellen-Unterstrich in Texten, Punktraster wie Notizpapier, eigene Textmarkierung und Fokus-Rahmen, Moped in der Fußzeile mit Liebeserklärung, Gruß beim Ausdrucken. Alles respektiert reduzierte Bewegung.

## Vernetzung und Aufklapp-Infos (Auftrag 26.10.: „viele aufklappbare Elemente für Zusatzinformationen, auf jeder Seite relevante incoming und outgoing Innerlinks“)

- `utils/vernetzung/build.mjs` liest alle 773 indexierbaren Seiten aus dem Export, vergleicht die Inhalte per TF-IDF und schreibt `db/vernetzung.json`: je Seite 6 ausgehende Vorschläge (noch nicht verlinkt, höchstens 2 pro Seitentyp), die 6 passendsten eingehenden Seiten und erkannte Glossarbegriffe. Schwach verlinkte Seiten werden nachgezogen: jede Seite hat mindestens 3 eingehende Links, 0 Waisen.
- `app/components/Vernetzt.js` auf allen 56 Seitenvorlagen: Block „Weiter geht's 🧭“ mit Aufklappern „Passt dazu“, „Wer hierher verlinkt“ (mit Linkliebe-Herzen), „Begriffe kurz erklärt“ (Glossar-Definitionen) und Gut-zu-wissen-Fragen je Seitentyp (Jean-Score, Preisquellen, Datenquellen, Datenschutz der Rechner). Seiteneigene Zusatzinfos kommen aus `db/texte/klapp.json`.
- 9.740 neue interne Links, 0 kaputt. Workflow baut ein zweites Mal, wenn sich das Netz ändert. Kontrastfehler bei Links in Überschriften (Dunkelmodus, /prompts) behoben.

## KI-News (Auftrag 26.10.: „KI-News zu absoluten Trendthemen recherchieren, liebenswert lustige, hoch informative Artikel, immer mit Bezug zu Tools, Prompts oder bestehenden Unterseiten“)

- Neuer Bereich /ki-news (Hub mit Karten und Aufklappern) und /ki-news/[slug] mit NewsArticle-Schema, „Das Wichtigste in 30 Sekunden“, Checkliste „Was du jetzt tun solltest“, 6 bis 8 Bezugs-Karten zu bestehenden Unterseiten, Quellen, FAQ-Schema.
- 7 Artikel, alle an offiziellen Quellen geprüft: PHP2Shell (php.net, Wiz, OpenAI, CERT-EU), Abschaltung der Custom GPTs am 11.12.2026 (OpenAI-Hilfe-Center), Claude Duet, Gemini für kleine Firmen, OpenAI Decisions API, Agent Skills bei der Linux Foundation, GPT-6 und Claude bei Google Cloud.
- Rückverweise: Jede in einer Meldung genannte Unterseite zeigt im Block „Weiter geht's“ den Kasten „Gerade in den KI-News“. Navigation, Footer, Startseite, Sitemap und llms.txt verlinken /ki-news.
- Faktenkorrektur durch die News: Glossar „Custom GPT“, Tutorial „Eigenen KI-Assistenten bauen“, Prompt-Kategorie-FAQ und Glossar-Beispiel nennen jetzt die Abschaltung und die Nachfolger.
- Wöchentliche Routine „AIGeddon: Wöchentliche KI-News“ (Do 07:37) schreibt ab jetzt 3 bis 6 neue Artikel pro Woche im selben Format.

## KI-News II (Auftrag 27.10.: „Weitermachen und ausbauen“)

- 5 neue Artikel, an offiziellen Quellen geprüft: GPT-4o/GPT-4.1-Abschaltung in der API am 14.1.2027 (OpenAI Deprecations), Werbung in ChatGPT (89 Länder, Deutschland seit August), Auto-Modus als Standard in den Claude-Apps, Gemini gratis nur noch mit Auto-Modellwahl, Claude Docs/Slides/Design im Gratis-Tarif plus Dashboards und Motion. Jetzt 12 Meldungen.
- KI-Fristen-Kalender auf /ki-news (Feld `fristen` je Meldung, vergangene Termine fallen beim täglichen Neubau weg) und „Termine zum Eintragen“ in den Artikeln.
- RSS-Feed /ki-news/feed.xml (im HTML-Kopf verlinkt), Themen-Sprungleiste und aufklappbare Themenblöcke.

## KI-News III (Auftrag 27.10.: „Weiter ausbauen dann merge“)

- 3 neue Artikel (jetzt 15): Anthropic-Börsengang (S-1, Kürzel ANT, Stimmrechte laut Prospekt), OpenAI-Prompt-Caching mit 12 Stunden (mit Beispielrechnung ab wann es spart), gesperrte Chats in ChatGPT per PIN (was es schützt, was nicht).
- 3 neue Prompts mit Jean-Texten, direkt aus den News abgeleitet: Custom-GPT-Anweisungen in einen Skill umwandeln, Testplan für den Modellwechsel, Anzeigentexte für ChatGPT Ads.
- 3 neue Glossarbegriffe mit Schrauber-Erklärung: Auto-Modus, Abkündigung (Deprecation), Plugin (ChatGPT). Jeweils mit Link zur passenden Meldung, die Meldungen verlinken zurück.

## SEO-Offensive Top 3 (Auftrag 27.10.: „fünf Prompts für Google-Top-3, dann automatisch ausführen“)

1. Frische-Signale: Sitemap mit echten Änderungsdaten aus Git und Prüfdaten (lib/stand.js) statt täglich „heute“; Workflow lädt volle Git-Historie.
2. Direktantwort-Boxen (Kurzantwort) unter der H1 auf 64 Steckbriefen, 17 Vergleichen und 18 Modellseiten, Inhalt nur aus geprüften Daten.
3. E-E-A-T: Seite /so-pruefen-wir mit sechs Redaktionsregeln und offenem KI-Hinweis, Autorenbox „Geschrieben und geprüft von Jean“ auf News, Ratgebern, Vergleichen, Steckbriefen; Person-Schema mit @id, Organization.publishingPrinciples, Article-Schema für Vergleiche, WebPage mit reviewedBy für Steckbriefe.
4. Keyword-Daten (Ubersuggest, Deutschland): „chatgpt alternativen“ 12.100/Monat (SD 35), „ki tools kostenlos“ 590 (SD 37), „beste ki tools“ 210 (SD 23). Title und Description von /ki-tools/kostenlos und /ki-tools/chatgpt-alternativen angepasst.
5. Pillar /ki-tools/chatgpt-alternativen von 983 auf 1.619 Wörter: Kurzantwort, Vergleichstabelle aus db/tools.json, Auswahlhilfe nach Einsatzzweck, aktuelle News, 4 neue FAQ.

## Partnerprogramme (Auftrag 27.10.: Übersicht aller verlinkten Tools mit Registrierungslinks als Excel)

- `docs/partnerprogramme.xlsx` mit 6 Blättern: Anleitung, Tools (64), Verzeichnisse (256), KI-Tool-Datenbank (666), Neu entdeckt (98), Alle Domains (986 aus dem Export gezählt). Je Zeile Partnerprogramm, Netzwerk, Provision, Cookie, Registrierungslink, Quelle, Suchlink und gelbe Eintragsspalten mit Status-Auswahl.
- 32 bisher unrecherchierte Tools an offiziellen Seiten geprüft (davon u. a. Fireflies, tl;dv, OpusClip, CapCut, Fliki, Krea, Luma, Grammarly, QuillBot, Lovable, Bolt mit Programm; Claude, ChatGPT, Cursor, v0, Perplexity ohne bzw. eingestellt). Register `db/partners.json` jetzt 98 Programme.
- Rückweg: `utils/partners/xlsx_import.py` übernimmt eingetragene Links; neu `HOST_AFFILIATES` (Partnerlink nach Domain) für die KI-Tool-Datenbank, Tool-Karten und Tool-Seiten zeigen dann * und rel="sponsored". Roundtrip getestet.
- `CLAUDE.md` legt fest, dass künftige Sitzungen Partnerlinks immer über das Register einbauen.

## Für Jean (am Ende präsentieren)

- Keyword-Daten: Semrush meldet fehlende API-Einheiten (https://www.semrush.com/mcp-access); das Ubersuggest-Tageslimit war ebenfalls erreicht. Optimierung erfolgte daher nach etablierten Keyword-Varianten.

- Domain aigeddon.de registrieren (größter einzelner Hebel für Ranking und Vertrauen), danach Umstellung durch mich.
- Google Search Console verifizieren und Sitemap einreichen.
- Impressum/Datenschutz-Daten, PromptGott-URL, Partnerlinks.
- Neu bewerben: Gamma (PartnerStack), Rytr, Runway; Wordtune-Konditionen auf der Anbieterseite prüfen (nur Drittquellen) (braucht Kanal-Links, YouTube AIGeddon passt); Links stehen in docs/PARTNERLINKS.md.

- Lead-Formular: Empfängeradresse bestätigt und eingetragen (26.10.); danach eine Testanfrage schicken und die FormSubmit-Aktivierungsmail bestätigen, erst dann kommen Anfragen an. Den Alias aus der Aktivierung als NEXT_PUBLIC_LEAD_ALIAS hinterlegen (oder mir geben), damit die Adresse nicht im Quelltext steht.
- Neu entdeckte Verzeichnisse: für die Übernahme in die Hauptliste fehlen DR- und Besucherwerte (Semrush-API-Einheiten aufladen), dann wandern sie mit Messwerten in /directories.
- Datenschutzerklärung rechtlich prüfen lassen; Impressum mit ladungsfähiger Anschrift fehlt noch.

## Log

- 2026-10-23 · P1: Design-System (automatische Trenner mit rotierenden Formen/Farben, farbige H2, Bänder gelb/mint/pink/blau/lila/dunkel, Boxen tipp/achtung/info/jean, Scroll-Reveal mit Staffelung, Zähl-Animationen, schimmernde H1, schwebender Jean, Hover-Effekte), Startseite mit Einstiegs-Kacheln und Bändern.
- 2026-10-23 · P2: KI-Test `/ki-test` mit 17 Aufgaben in 6 Kategorien (Logik, Fakten, Halluzinationen, Deutsch, Kreativität, Code), Senden an 5 KIs, Bewertung je KI, Live-Rangliste mit Balken, Speicherung im Browser, Konfetti; 6 Kategorieseiten, Methodik, FAQ-Schema; KI-Test in Kopfnavigation, Kompass, Startseiten-Kacheln, Sitemap, llms.txt.
- 2026-10-23 · P3: Rechner-Hub `/rechner` mit KI-Zeitersparnis-Rechner (Break-even, Nutzen/Kosten-Balken, Urteil), KI-API-Kostenrechner (8 aktuelle Modelle von OpenAI, Anthropic, Google; Preise laut Anbieter vom 23.10.2026, Token-Schätzung aus Text) und Launch-Zeit-Rechner (echte Zahlen der Liste); je Seite FAQ-Schema und WebApplication-Schema; breite Tabellen scrollen auf dem Handy.
- 2026-10-23 · P4: sitewide Organization- und WebSite-Schema mit SearchAction (/ki-tools?q=), Footer-Linknetz zu allen Rubriken (Hub and Spoke), Titel auf Zielbegriffe und Länge optimiert (zu lange Titel 181 → 20), Crawl aller 364 internen Seiten ohne kaputten Link, alle Seiten mit genau einer H1, Canonical und Description.
- 2026-10-23 · P5: Pillar-Seiten `/beste-ki-tools` (15 Aufgaben, Favoriten nach Konsens, Inhaltsverzeichnis), `/ki-tools/kostenlos` (Gratis-Tarife laut Anbieter + Open Source nach Aufgabe), `/ki-tools/chatgpt-alternativen` (Chatbots + KI-Suchmaschinen), `/ki-verzeichnis` (Definition, Arten, Kriterien, Top 10); alle mit FAQ-Schema; Suche versteht deutsche Begriffe (Synonyme zu englischen Beschreibungen).
- 2026-10-23 · P6: 7 neue Steckbriefe mit Preisen laut Anbieter (Gamma, Otter.ai, Rytr, Runway, Notion, Perplexity, Claude; Tool-Verzeichnis jetzt 32), 4 neue Partnerprogramme geprüft und im Register (Gamma 25 % erstes Jahr, Rytr 30 % für 12 Monate, Runway 15 $ pro Abo, Notion derzeit geschlossen); Rubrikseiten zeigen passende geprüfte Tools aus mehreren Kategorien; Crawl 375 Seiten ohne kaputten Link.
- 2026-10-23 · P7: Tool-Finder `/tool-finder` (3 Fragen mit Slide-Animation, Fortschrittsleiste, Konfetti, Top 6 aus der Datenbank), Prompt des Tages und KI-Tool-Roulette (Dreh-Animation) in der rechten Seitenleiste, Newsletter-Widget als PromptGott.
- 2026-10-23 · P8: QA-Skript über 26 Kernseiten in zwei Modi (Handy dunkel + reduzierte Bewegung, Desktop hell): Kontrast (WCAG 4,5:1) für H2, Absätze, Links und Kennzahlen, Überlauf, versteckte Inhalte, Bilder ohne alt, JS-Fehler. Behoben: H2 im dunklen Band, Senden-Buttons im dunklen Code-Band, gedämpfter Text auf dunklen Bändern; deutsches Zahlenformat im API-Rechner; sichtbarer Tastatur-Fokus überall. Crawl 376 Seiten, 0 kaputte Links; alle Deploys seit Missionsstart grün.
- 2026-10-23 · P10: 6 neue Tool-Vergleiche (Claude vs. Perplexity, ElevenLabs vs. Murf, Tally vs. Typeform, Descript vs. Pictory, Gamma vs. Canva, Rytr vs. Writesonic), jetzt 11; Empfehlungen nur aus Steckbrief-Daten. ChatGPT und Gemini fehlen als Steckbrief, weil die Preisseiten keine prüfbaren Preise ausgeben.
- 2026-10-23 · P11: 3 neue Tutorials (Eigenen KI-Assistenten bauen: Custom GPT & Claude Project; Bild-Prompts schreiben; Newsletter mit KI in einer Stunde), jetzt 5 Tutorials mit 32 Schritten und 14 Quizfragen.
- 2026-10-23 · P12: Prompt-Bibliothek 12 → 30 Vorlagen in 9 Kategorien (neu: Onlineshop, Bewerbung & Karriere, Lernen, Excel/Code/Technik, plus Angebot, heikle E-Mail, Bild-Prompt), KI-Test 17 → 30 Aufgaben (Ankunftszeit, Kopfrechnen, Geschwister-Rätsel, Hauptstadt, Planeten, Städte-Tabelle, erfundenes Gesetz, unwissbare Frage, Zusammenfassen, Übersetzen mit Ton, Slogan mit Regeln, Regex, Gleitkomma); Crawl 403 Seiten ohne kaputten Link.
- 2026-10-23 · P13: KI-Glossar mit 41 Begriffen (Prompt, System-Prompt, Few-Shot, Chain of Thought, Token, Kontextfenster, Temperatur, Halluzination, RAG, Embedding, KI-Agent, MCP, Prompt-Injection, Diffusionsmodell u. a.) als lila Band auf /glossar, mit Ankern, Querverweisen auf Tutorials, Rechner und Rubriken und eigenem DefinedTermSet-Schema; Glossar jetzt 55 Begriffe.
- 2026-10-23 · P14: 139 weitere deutsche Kurzbeschreibungen für alle Bild-, Video-, Audio- und Musik-Tools (gesamt 276 von 705), nur auf Basis der Quellenbeschreibung, Versions- und Datumsangaben der Quellen weggelassen.
- 2026-10-23 · P15: Automatisierungs-Rechner (Handarbeit pro Jahr, Aufbauaufwand, Amortisation in Wochen, Einstiegspreise Make/Zapier/n8n aus den Steckbriefen) und Newsletter-Umsatz-Rechner (animierter Trichter Abonnenten → Öffnung → Klick → Kauf, Ertrag pro Ausgabe/Monat/Abonnent); jetzt 5 Rechner. Statt Abonnenten-Staffelpreisen (ohne prüfbare Quelle) bewusst ein Umsatz-Rechner mit Nutzerannahmen.
- 2026-10-23 · P16: Jean-Icons als SVG-Sprite (jede Form einmal pro Seite, Icons nur noch per <use>), Roulette-Daten erst beim ersten Dreh aus /api/roulette; Verzeichnis-Detailseite 202 → 110 KB HTML (gzip 25 → 19 KB), Glossar 234 → 143 KB, Startseite 602 → 510 KB, KI-Tools 437 → 304 KB; über 400 Seiten entlastet.
- 2026-10-23 · P17: alle 705 Tools der Datenbank haben jetzt eine deutsche Kurzbeschreibung (429 neu: Schreiben, Produktivität, Chatbots, Suche, Recherche, Marketing, Agenten, Coding, Modelle, Finanzen, Sicherheit), ohne Vergleichs- und Versionsbehauptungen aus den Quellen; Rubrikseiten, Tool-Finder und Datenbank zeigen damit durchgehend deutsche Texte.
- 2026-10-23 · P18: Steckbriefe Midjourney, Leonardo AI, Wordtune mit Preisen laut offizieller Preisseite (36 Tools); Play.ht verworfen (Domain laut Drittquelle seit 12.10.2026 ohne DNS), Suno, Fliki, Jasper, QuillBot zeigen keinen eindeutigen Einstiegspreis. Partner-Register: Leonardo (Programm am 7.4.2026 eingestellt), Midjourney (kein Programm), Wordtune (unbestätigt) → 57 Programme.
- 2026-10-23 · P19: Rubrikseiten Schreiben, Bild, Video, Marketing als Pillar-Seiten: Inhaltsverzeichnis, Band „So wählst du“ mit 5 Kriterien-Karten, Tipp- und Warnbox, je 4 FAQ mit FAQPage-Schema, Tutorials für Bild und Marketing verknüpft.
- 2026-10-23 · P20: Ratgeber „Product-Hunt-Alternativen: 12 Launch-Plattformen“ (Werte aus der eigenen Tabelle, 4-Wochen-Plan) und „Welcher Newsletter-Anbieter für Gründer?“ (beehiiv, Kit, Brevo, GetResponse mit Preisen laut Anbieter, Datenschutz, Kostenrechner); Artikel können jetzt eigene Weiterführend-Links tragen.
- 2026-10-23 · P21: eigene Vorschaubilder in eigener Farbe für KI-Tools, KI-Test, Rechner, Prompts, Tutorials, Ratgeber (Zahlen live aus den Daten). Dabei Fehler behoben: og:image enthielt den basePath doppelt (alle Vorschaubilder liefen ins Leere) und Bilder ohne Endung kamen nicht als PNG; Nachbearbeitung utils/export/fix-og.js im Deploy.
- 2026-10-23 · P22: 705 Tool-Seiten /ki-tools/tool/[slug] mit SoftwareApplication-Schema, Faktenbox, Konsens-Hinweis, 8 Alternativen, Tutorial und Prompts der Rubrik; 143 davon indexierbar (Konsens oder Steckbrief, Namensdubletten kanonisch auf die stärkste Seite), Rest noindex,follow; Tool-Namen überall intern verlinkt, ↗ führt zum Anbieter.
- 2026-10-23 · P23: Startseite mit Suchfeld zur KI-Tool-Datenbank (funktioniert auch ohne JavaScript per ?q=) und 12 Chips zu den beliebtesten Tool-Seiten; Titel „KI-Verzeichnisse & KI-Tools 2026“, Beschreibung nennt Datenbank, KI-Test und Rechner.
- 2026-10-23 · P24: 12 Alternativen-Hubs unter /ki-tools/alternativen (Midjourney, Perplexity, Notion AI, Claude, Gemini, GitHub Copilot, ElevenLabs, Synthesia, Jasper, Runway, HeyGen, Cursor) mit je 15 Tools (kuratierte Kandidaten zuerst), Wechsel-Kriterien, FAQ aus Daten (Open-Source-Nennung nur für kuratierte Tools), Übersichtsseite, Links von Tool-Seiten, Footer, llms.txt und Sitemap.
- 2026-10-23 · P25: Qualitätsrunde: 1.124 Seiten, 79.745 interne Links geprüft, 0 kaputt; 39 Seitentypen mobil ohne Überlauf; Kontrast und Konsole auf den neuen Seiten (hell/dunkel, mobil/desktop) ohne Befund.
- 2026-10-23 · P26: 41 Glossar-Seiten /glossar/[begriff] („Was ist ein Token?“ usw.) mit Erklärung, Praxis-Beispiel, Tipp, verwandten Begriffen, Blättern, DefinedTerm- und FAQ-Schema; Glossar-Übersicht verlinkt jede Seite, Sitemap ergänzt.
- 2026-10-23 · P27: 15 neue Prompt-Vorlagen (45 gesamt): Social-Media-Redaktionsplan, LinkedIn-Post, Instagram-Caption, Text zusammenfassen, Übersetzen und lokalisieren, E-Mail-Antwort, Pressemitteilung, Landingpage-Texte, Wettbewerbsanalyse, SQL-Abfrage, Fehlermeldung debuggen, Hausarbeit-Gliederung, Arbeitszeugnis verstehen, Gehaltsverhandlung, Content-Briefing; jeweils mit Senden an ChatGPT, Claude und Co.
- 2026-10-23 · P28: automatische Glossar-Links (lib/autolink.js, 34 Begriffe mit Plural- und Varianten) in Tutorials, Ratgebern und Glossar-Seiten, je Seite nur beim ersten Vorkommen, dezent gepunktet; ohne Hydration-Fehler.
- 2026-10-23 · P29: KI-Test-Ergebnis teilbar: Button „Ergebnis teilen“ (Web Share API, sonst Link in die Zwischenablage), Link mit #ergebnis=… zeigt beim Empfänger eine Karte „Dir wurde ein Testergebnis geschickt“ mit Balken; Daten bleiben im Link, kein Server.
- 2026-10-23 · P30: 6. Tutorial „ChatGPT richtig nutzen: der Einsteigerkurs“ (8 Schritte: ein Chat pro Thema, Kontext, Nachschärfen, Format, Material mitgeben, Fakten prüfen, Datenschutz, Vorlagen und KI-Test; 3 Quizfragen); Strukturdaten-Check: JSON-LD auf allen Seiten gültig, keine Seite mit doppeltem FAQPage, jede Seite mit Description.
- 2026-10-23 · P31: 5 Zielgruppen-Seiten /ki-tools/fuer/[lehrer|studenten|selbststaendige|entwickler|marketing] mit je 5 Aufgaben-Karten (Tools aus der Datenbank, passender Prompt), Warnbox, Tutorial, Rechner, KI-Test, FAQ-Schema; Übersicht /ki-tools/fuer, verlinkt aus KI-Tools-Hub, Footer, llms.txt, Sitemap.
- 2026-10-23 · P32: 5 weitere Zielgruppen-Seiten (Onlinehändler, Content Creator, HR & Recruiting mit EU-AI-Act-Hinweis, Handwerk, Schüler mit Altershinweis), jetzt 10 Zielgruppen unter /ki-tools/fuer; Tool-, Prompt-, Tutorial- und Rechner-Verweise gegen die Daten geprüft.
- 2026-10-23 · P33: 7. Tutorial „KI-Agenten verstehen und sinnvoll einsetzen“ (7 Schritte: Chatbot vs. Agent, Ziel, Werkzeuge, Grenzen und Prompt-Injection, Plan vorab, Prüfen, klein anfangen; 3 Quizfragen), mit der Rubrik KI-Agenten verknüpft.
- 2026-10-23 · P34: Messung: kleine Seiten ~97 KB HTML bzw. 16 KB gzip, Startseite 532 KB / 74 KB gzip, KI-Tools-Hub 306 KB / 61 KB gzip, First Load JS höchstens 112 KB. Größter Pro-Seite-Anteil sind Layout-Teile (Sprite, Seitenleiste, Footer), die Next.js in HTML und RSC-Daten doppelt ausliefert; ein ausgelagerter Sprite spart nur ~1,4 KB gzip, daher bewusst nicht umgebaut. Listen bleiben im HTML, weil sie die internen Links zu den Tool-Seiten tragen.
- 2026-10-23 · P36: 10 neue Prompts (55 gesamt): Stellenanzeige, Elternbrief, Produktfoto-Briefing, Shorts-Ideen, Video-Titel, Kundenanfrage Handwerk, Vokabeltrainer, Referat-Folien, Onboarding-Plan, Telefonnotiz; in die Zielgruppen-Karten HR, Schüler, Handwerk, Onlinehändler, Content Creator eingebunden.
- 2026-10-23 · P37: Ratgeber-Blöcke (5 Kriterien, Tipp, Warnung, 3 FAQ mit Schema) für Chatbots, Produktivität, Coding, Agenten, Audio, Musik; damit haben 10 der 15 Rubriken Pillar-Inhalte. Kontrast/Konsole/Überlauf geprüft.
- 2026-10-23 · P38: Ratgeber-Blöcke für Suche, Recherche, Modelle, Sicherheit, Finanzen; alle 15 Rubriken der KI-Tool-Datenbank haben jetzt Auswahlkriterien, Tipp, Warnung und FAQ-Schema.
- 2026-10-23 · P39: Ratgeber „KI-Tools und Datenschutz: die DSGVO-Checkliste“ (AVV nach Art. 28, Training abschalten, Drittlandübermittlung, Aufnahmen und Mitbestimmung, EU AI Act in Grundzügen, 7-Punkte-Checkliste, ausdrücklich keine Rechtsberatung); verlinkt aus allen Rubrik-Warnboxen und allen Zielgruppen-Seiten.
- 2026-10-23 · P40: Startseite mit Kacheln für Zielgruppen, Tool-Alternativen und KI-Glossar; Kompass in der Seitenleiste (auf jeder Seite) um Zielgruppen, Alternativen und Glossar ergänzt; KI-Tools-Hub-Link aktualisiert. Link-Crawl über alle Seiten: 0 kaputte Links.
- 2026-10-23 · P41: 20 neue Glossar-Seiten (61 Begriffe gesamt): Transformer, Reasoning-Modell, Kontext-Engineering, Vibe Coding, Inpainting, Upscaling, Deepfake, C2PA, LoRA, Quantisierung, VRAM, Latenz, Rate Limit, Bias, Alignment, Open Source, Text-to-Image, Text-to-Video, Agentischer Workflow, Model Card; Autolink um 16 Muster erweitert; Querverweise geprüft.
- 2026-10-23 · P42: 10 neue KI-Test-Aufgaben (40 gesamt): Wochentag rechnen, Prozent-Falle, Mondlandung, Siedepunkt auf dem Berg, erfundenes Goethe-Zitat, unsichere tagesaktuelle Zahl, einfache Sprache, genau 12 Wörter, Akrostichon, SQL-Fehler; Lösungen nachgerechnet.
- 2026-10-28 · KI-News und Long-Form: 3 neue Meldungen (GPT-6.1 Terra, Ende des Argon-Einführungspreises am 30.11., neue Claude-Nutzungsrichtlinie ab 12.11.) mit Fristen, Modellseite GPT-6.1 Terra, 2 Ratgeber mit je über 1.800 Wörtern: „KI-Agenten für Selbstständige 2026: Was in Deutschland wirklich geht“ und „KI-Modelle in Automationen zukunftssicher betreiben“; alle Angaben an Herstellerseiten geprüft, QA ohne Befund.
- 2026-10-28 · Zweite Runde KI-News und Long-Form: 2 Meldungen (DeepSeek Search/Fetch API kostet ab 31.10., Meta Muse Spark Open), Modellseite Muse Spark Open, 2 Ratgeber mit je über 1.800 Wörtern: „Sichtbar in ChatGPT und im Google KI-Modus: Werbung und SEO in KI-Antworten“ und „Open-Weight-Modelle 2026: Wann sich eigene KI für kleine Firmen lohnt“; QA ohne Befund.
- 2026-10-28 · Dritte Runde KI-News und Long-Form: 2 Meldungen (Copilot in Excel mit Skill-Recorder und neuen Modellen, AI-Act-Kennzeichnungsfrist 2.12.2026 mit Fristen), 2 Ratgeber mit je über 1.800 Wörtern: „KI-Telefonassistent und Sprach-Agenten 2026“ und „KI-Skills statt Copy-Paste-Prompts“; QA ohne Befund.
- 2026-10-28 · Neue Rubrik /skills: 12 deutsche Agent Skills (SEO-Audit, KI-Sichtbarkeit, strukturierte Daten, Verzeichnis-Einträge, Werbetexte, Lektorat, Content-Strategie, Social Media, Produkt-Launch, Lead-Magnet, Kaltakquise mit UWG-Prüfung, Preisgestaltung nach PAngV) auf Basis von marketingskills (MIT), installierbar per ZIP in ChatGPT, Claude und Gemini oder per npx skills add / gh skill install in Claude Code, Codex, Cursor, Copilot; npm run skills baut Index und ZIPs.
