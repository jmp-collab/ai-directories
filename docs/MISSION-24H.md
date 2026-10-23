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
- [ ] **P4 Keyword- und Technik-SEO**: Keyword-Recherche (Semrush, falls verfügbar), Titel/Descriptions/H1 der Hauptseiten auf Zielbegriffe, WebSite-/Organization-Schema, FAQ-Blöcke, interne Verlinkung (Hub-and-Spoke), Breadcrumbs überall, Sitemap-Prioritäten, 404-Check, Bundle-Größen.
- [ ] **P5 Pillar-Content**: „KI-Tools: die besten nach Aufgabe“, „Kostenlose KI-Tools“, „KI-Verzeichnis: was es ist und welche sich lohnen“, „KI-Test: so vergleichst du Chatbots“; jeweils mit Inhaltsverzeichnis, Boxen, interaktiven Elementen und FAQ.
- [ ] **P6 Tool-Steckbriefe**: Konsens-Tools mit Partnerprogramm in `db/tools.json` (Preise laut Anbieter), Partnerprogramme in `db/partners.json`.
- [ ] **P7 Dynamik**: Prompt des Tages, Tool-Finder-Quiz, „Neu in der Datenbank“, Fortschritts- und Gamification-Elemente, Mikro-Animationen.
- [ ] **P8 Qualitätsrunde**: alle Seiten Desktop/Mobil per Screenshot prüfen, Barrierefreiheit (Kontrast, Fokus, reduzierte Bewegung), Lighthouse-ähnliche Checks, tote Links.
- [ ] **P9 Präsentation**: Ergebnisbericht mit Vorher/Nachher, Live-Links, Kennzahlen, Liste „Für Jean“.

## Für Jean (am Ende präsentieren)

- Domain aigeddon.de registrieren (größter einzelner Hebel für Ranking und Vertrauen), danach Umstellung durch mich.
- Google Search Console verifizieren und Sitemap einreichen.
- Impressum/Datenschutz-Daten, PromptGott-URL, Partnerlinks.

## Log

- 2026-10-23 · P1: Design-System (automatische Trenner mit rotierenden Formen/Farben, farbige H2, Bänder gelb/mint/pink/blau/lila/dunkel, Boxen tipp/achtung/info/jean, Scroll-Reveal mit Staffelung, Zähl-Animationen, schimmernde H1, schwebender Jean, Hover-Effekte), Startseite mit Einstiegs-Kacheln und Bändern.
- 2026-10-23 · P2: KI-Test `/ki-test` mit 17 Aufgaben in 6 Kategorien (Logik, Fakten, Halluzinationen, Deutsch, Kreativität, Code), Senden an 5 KIs, Bewertung je KI, Live-Rangliste mit Balken, Speicherung im Browser, Konfetti; 6 Kategorieseiten, Methodik, FAQ-Schema; KI-Test in Kopfnavigation, Kompass, Startseiten-Kacheln, Sitemap, llms.txt.
- 2026-10-23 · P3: Rechner-Hub `/rechner` mit KI-Zeitersparnis-Rechner (Break-even, Nutzen/Kosten-Balken, Urteil), KI-API-Kostenrechner (8 aktuelle Modelle von OpenAI, Anthropic, Google; Preise laut Anbieter vom 23.10.2026, Token-Schätzung aus Text) und Launch-Zeit-Rechner (echte Zahlen der Liste); je Seite FAQ-Schema und WebApplication-Schema; breite Tabellen scrollen auf dem Handy.
