# Aufgaben-Backlog AIGeddon

Diese Datei steuert die automatischen Arbeitssitzungen. Jede Sitzung liest sie, nimmt **die erste offene Aufgabe von oben**, die nicht auf Jean wartet, erledigt sie vollständig und hakt sie ab.

## Regeln für jede automatische Sitzung

1. Branch frisch von `main`: `git fetch origin main && git checkout -B <Sitzungs-Branch> origin/main`.
2. **Genau eine** Aufgabe aus „Offen“ nehmen, oben beginnen. Aufgaben mit „wartet auf Jean“ überspringen.
3. Fakten nur von offiziellen Seiten der Anbieter, mit Quelle. Nichts erfinden; unbekannt bleibt `null` bzw. „keine Angabe“.
4. Sperren (Status „nicht eintragbar“) und `free_dofollow: false` nur setzen, wenn die Quelle selbst geprüft wurde.
5. Vor dem Commit: `npx next build` ohne Fehler, keine unsichtbaren Unicode-Zeichen (U+200B–U+200F, U+2060–U+2064, U+FEFF, U+00AD, U+202A–U+202E) in geänderten Dateien.
6. Partnerlinks immer mit `rel="sponsored"` und *-Kennzeichnung (passiert automatisch über `db/partners.json` → `lib/partners.js`). Nach jeder Änderung am Register `npm run partners` laufen lassen und `docs/PARTNERLINKS.md` mit committen.
7. PR mit Vorlage aus `PULL_REQUEST_TEMPLATE`, mergen, GitHub-Pages-Lauf abwarten, Live-Seite prüfen.
8. Hier die Aufgabe nach „Erledigt“ verschieben (Datum, PR-Nummer, ein Satz Ergebnis) und neu entdeckte Aufgaben unten in „Offen“ ergänzen.
9. Keine Registrierungen, Käufe, E-Mails oder Posts im Namen von Jean.

## Offen

### Wartet auf Jean
- [ ] **Impressum und Datenschutz**: Name, ladungsfähige Anschrift, E-Mail fehlen. Danach Seiten `/impressum` und `/datenschutz` bauen und im Footer verlinken. *wartet auf Jean*
- [ ] **Geschäfts-E-Mail** setzen (`NEXT_PUBLIC_CONTACT_EMAIL` im Pages-Workflow), dann erscheinen die Anfrage-Buttons auf `/werben`. *wartet auf Jean*
- [ ] **PromptGott-Newsletter-URL** setzen (`NEXT_PUBLIC_NEWSLETTER_URL`); gefunden nur prmoptgenie.substack.com über dev.to/promptgott, nicht abrufbar. Empfehlung beehiiv. *wartet auf Jean*
- [ ] **Videoliste AIGeddon** (Titel, URL, Thema) für `db/videos.json` und `/case-studies`. *wartet auf Jean*
- [ ] **Domains** aigeddon.de und promptgott.de registrieren (Plan: `docs/ROADMAP-100.md`, Block 1). *wartet auf Jean*
- [ ] **Partnerlinks und eigene Rabattcodes** eintragen in `db/partners.json` (Übersicht `docs/PARTNERLINKS.md`, Format in `docs/REGISTRIERUNG.md`, Abschnitt 4). *wartet auf Jean*
- [ ] **Domain aigeddon.de** als Custom Domain für GitHub Pages einrichten (CNAME, `NEXT_PUBLIC_SITE_URL`, `BASE_PATH` leer). *wartet auf Jean*
- [ ] **Netlify-Projekt löschen** (alte Kopie). *wartet auf Jean*

### Automatisch abzuarbeiten (Reihenfolge = Priorität)
Gesamtplan mit 100 Schritten: `docs/ROADMAP-100.md`. Neue Aufgaben von dort hierher übernehmen.
- [ ] **Steckbriefe für Konsens-Tools**: die 12 Tools in allen 3 Listen und danach die 2/3-Tools mit Partnerprogramm in `db/tools.json` aufnehmen (Preis, Gratis-Tarif, deutsche Oberfläche laut Anbieter, Quelle). Je Runde 5 Tools; Partnerprogramm in `db/partners.json` ergänzen.
- [ ] **Deutsche Kurzbeschreibungen** für die nächsten 100 Einzel-Tools der Datenbank in `db/kb-de.json` (Rubriken Bild, Video, Audio, Schreiben zuerst), nur auf Basis der Quellenbeschreibung.
- [ ] **Prompt-Bibliothek auf 50 ausbauen** (`lib/prompts.js`), je Runde 6 Prompts aus neuen Kategorien (E-Commerce, Bewerbung, Excel, Bild, Coding, Lernen), jede mit passenden Tools aus `db/tools.json`.
- [ ] **Prompt-Ketten** `/prompt-ketten`: 3 Workflows mit je 3 bis 5 Schritten und Senden-Button pro Schritt.
- [ ] **Rechner** `/rechner`: zuerst Zeitersparnis-/ROI-Rechner, dann Automatisierungs-Kostenrechner (Make/Zapier/n8n), Preise nur mit Quelle.
- [ ] **Prompt des Tages** als Widget im rechten Seitenrand.
- [ ] **Weitere Tutorials** (je eines pro Runde): Custom GPT/Claude Project bauen, Bild-Prompts, Newsletter mit KI in einer Stunde; Format wie `lib/tutorials.js`.
- [ ] **Absprung-Links prüfen** (vierteljährlich, `lib/ai-targets.js`): ChatGPT, Claude, Perplexity, Grok, Google AI Mode.
- [ ] **Weitere Tool-Vergleiche** in `lib/comparisons.js`: „Canva vs. …“ erst, wenn Design-Alternativen im Tool-Verzeichnis stehen; „Tally vs. Typeform“; „ElevenLabs vs. Murf“; „Descript vs. Pictory“. Nur Empfehlungen, die sich aus `db/tools.json` belegen lassen.
- [ ] **Top 50 als echter Lead-Magnet**: Sobald der Newsletter läuft, CSV-Download an das Abo koppeln (z. B. beehiiv-Lead-Magnet) und die Seite entsprechend umbauen. *wartet auf Newsletter*
- [ ] **Tool-Verzeichnis erweitern**: 15 weitere Tools mit öffentlichem Partnerprogramm (z. B. Jasper-Alternativen, Notion-Alternativen, KI-Bild: Leonardo-Alternativen, Transkription), Fakten wie in `db/tools.json`.
- [ ] **Prüfdaten erweitern**: nächste 15 Verzeichnisse ohne Eintrag in `db/checks.json` (Freischaltdauer, Link-Typ, Status) mit Zitat und Quelle.
- [ ] **Use-Case-Rubrik** `/use-cases`: 5 Anwendungsfälle (z. B. „Produktvideo ohne Kamera“, „Newsletter in 1 Stunde“), je mit passenden Tools aus `db/tools.json`.
- [ ] **Ratgeber**: Artikel „Product-Hunt-Alternativen für deutsche Gründer“ mit Verweisen auf Verzeichnis- und Tool-Seiten.
- [ ] **Ratgeber**: Artikel „Welcher Newsletter-Anbieter für Gründer?“ mit Verweis auf die Newsletter-Vergleichsseite.

## Wiederkehrend (eigene geplante Sitzungen, nicht hier abhaken)

- **Monatlich:** KI-Tool-Datenbank neu einlesen: die drei Listen klonen (`git clone --depth 1`), `npm run kb:import -- <ordner>`, Sterne/Forks in `utils/kb/import.js` aktualisieren, Diff prüfen (neue/entfernte Tools), PR.

- **Wöchentlich, Montag:** Sperr-Check. Alle Verzeichnisse mit Status in `db/checks.json` erneut prüfen, ob die Einreichung wieder offen ist, und die 30 Verzeichnisse mit dem höchsten Jean-Score prüfen, ob sie inzwischen gesperrt oder tot sind. Änderungen mit Quelle eintragen.
- **Monatlich, am 1.:** Preis-Check aller Tools in `db/tools.json` gegen die offizielle Preisseite, `TOOLS_STAND` aktualisieren.
- **Täglich (GitHub Actions, 04:17 UTC):** Neubau der Seite, damit Deal und Tool des Tages wechseln.

## Erledigt

- 2026-10-23 · PR #39: Prompt-Archiv `/prompts/archiv` mit 103 Rollen-Prompts aus f/prompts.chat (CC0), deutsche Titel, 8 Kategorien, „Antworte auf Deutsch“; deutsche Kurzbeschreibungen für alle 137 Konsens-Tools (`db/kb-de.json`) samt Rubrik-Korrekturen.

- 2026-10-23 · PR #38: KI-Tool-Datenbank `/ki-tools` mit 705 Tools aus steven2358/awesome-generative-ai (CC0), mahseema/awesome-ai-tools (MIT), ikaijua/Awesome-AITools (CC BY 4.0); 15 Rubrikseiten, Suche, Konsens-Signal, Quellen- und Lizenzseite.

- 2026-10-23 · PR #37: Tutorials mit Schritt-Slider, Vorher/Nachher-Regler, Quiz und Konfetti (2 Tutorials), Prompt-Check mit Token-Schätzung, Download-Center mit Spickzettel und Prompt-Paket, eingebettete Mail-Erfassung, Slide-in-Lead-Box, `docs/LEADS.md`.

- 2026-10-23 · PR #36: Prompt-Bibliothek `/prompts` (12 Vorlagen), Prompt-Baukasten mit Score, Senden-Buttons an ChatGPT/Claude/Perplexity/Grok/Google AI Mode, Newsletter-Baustein als PromptGott, Plan `docs/ROADMAP-100.md`.

- 2026-10-23 · PR #35: zentrales Partner-Register `db/partners.json` (50 Programme), Prüf- und Übersichtsskript `npm run partners` → `docs/PARTNERLINKS.md`, Prüfung im Pages-Workflow.

- 2026-10-23 · PR #29 bis #32: Rebranding AIGeddon, Monetarisierungs-Grundlage, Deals, Launch-Service-Hinweise, Tool-Verzeichnis (25 Tools), Jean-Icons, Seitenleisten, Mobile-Dock.
- 2026-10-23 · PR #33: eigene Rabattcodes (`OWN_DEALS`, `ONLY_OWN_DEALS`), Registrierungs-Checkliste, dieses Backlog, geplante Sitzungen.
- 2026-10-23 · dieser PR: 5 Tool-Vergleiche unter `/tool-vergleiche` (Make/Zapier/n8n, Semrush/SE Ranking/Surfer, beehiiv/Kit/GetResponse/Brevo, Framer/Webflow/Hostinger, Synthesia/HeyGen/InVideo/Pictory) und Lead-Magnet `/top-50` mit CSV.
