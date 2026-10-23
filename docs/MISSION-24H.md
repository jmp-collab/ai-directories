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
- [ ] **P43 Tool-Vergleiche II**: neue Vergleiche aus vorhandenen Steckbriefen (z. B. Midjourney vs. Leonardo AI, Wordtune vs. Rytr, Runway vs. InVideo AI, Otter.ai vs. Descript; bestehende 11 Vergleiche nicht doppeln), nur mit Preisen aus db/tools.json.
- [ ] **P44 Prompt-Kategorien**: eigene Seite je Prompt-Kategorie (/prompts/kategorie/[key]) mit Intro, Prompts, passenden Tutorials und FAQ.
- [ ] **P35 Abschluss-QA**: Link-Crawl, Überlauf, Kontrast, Strukturdaten, Live-Stichproben.
- [ ] **P9 Präsentation**: Ergebnisbericht mit Vorher/Nachher, Live-Links, Kennzahlen, Liste „Für Jean“.

## Für Jean (am Ende präsentieren)

- Keyword-Daten: Semrush meldet fehlende API-Einheiten (https://www.semrush.com/mcp-access); das Ubersuggest-Tageslimit war ebenfalls erreicht. Optimierung erfolgte daher nach etablierten Keyword-Varianten.

- Domain aigeddon.de registrieren (größter einzelner Hebel für Ranking und Vertrauen), danach Umstellung durch mich.
- Google Search Console verifizieren und Sitemap einreichen.
- Impressum/Datenschutz-Daten, PromptGott-URL, Partnerlinks.
- Neu bewerben: Gamma (PartnerStack), Rytr, Runway; Wordtune-Konditionen auf der Anbieterseite prüfen (nur Drittquellen) (braucht Kanal-Links, YouTube AIGeddon passt); Links stehen in docs/PARTNERLINKS.md.

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
