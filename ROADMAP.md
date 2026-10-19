# Roadmap: 20 Erweiterungen für KI-Verzeichnisse

Ziel: Die Seite soll nicht nur eine Liste sein, sondern Gründer durch ihren Launch begleiten. Dabei soll sie Spaß machen, und Google wie KI-Suchen sollen mehr Gründe finden, sie zu zitieren.

| Nr. | Idee | Nutzen | Umsetzung |
|---|---|---|---|
| 1 | **Jean-Score** (0 bis 100) aus DR, Traffic, Preis und Einreichung | Eine Zahl statt vier Spalten | `lib/score.js` |
| 2 | Score-Spalte in jeder Tabelle, sortierbar | Schnellster Weg zur besten Wahl | `DirectoryTable` |
| 3 | Score-Balken mit Aufschlüsselung auf der Detailseite | Macht die Bewertung nachvollziehbar | `ScoreBar` |
| 4 | Eigener Jean-Spruch pro Verzeichnis (fest pro Seite, nicht zufällig) | Jede Detailseite wird einzigartiger Text | `lib/score.js` |
| 5 | **Eintrags-Tracker**: Verzeichnisse als „eingetragen“ abhaken (bleibt im Browser) | Ersetzt die eigene Excel-Liste | `useTracker` |
| 6 | Fortschritt mit Rang („Linkfriedhof-Gärtner“ bis „Jean-Level“) | Motivation, Spielgefühl | `TrackerPanel` |
| 7 | CSV-Export der eigenen Einträge | Daten gehören dem Nutzer | `TrackerPanel` |
| 8 | Filter „nur offene“ (noch nicht eingetragen) | Abarbeiten ohne Suchen | `DirectoryTable` |
| 9 | Neue Liste **Traffic-Monster** (ab 500.000 Besuche) | Neue Landingpage für Suchanfragen | `LISTS` |
| 10 | Neue Liste **Geheimtipps** (DR 40+, wenig Traffic, kostenlos) | Neue Landingpage, Neugier | `LISTS` |
| 11 | Neue Liste **Finger weg** (hakelige Einreichung) | Ehrlichkeit als Alleinstellung | `LISTS` |
| 12 | **Verzeichnis-Quiz**: 3 Fragen, 5 passende Empfehlungen | Interaktiv, teilbar | `/quiz` |
| 13 | **Vergleich**: bis zu 3 Verzeichnisse nebeneinander, Sieger pro Zeile | Fängt „X vs Y“-Suchen ab | `/vergleich` |
| 14 | Rabattcode per Klick kopieren | Weniger Reibung beim Bezahlen | `CopyButton` |
| 15 | Link zur Detailseite kopieren (Teilen) | Verbreitung | `CopyButton` |
| 16 | Taste `/` springt in die Suche | Tempo für Power-User | `DirectoryTable` |
| 17 | Easter Egg: Konami-Code aktiviert den **Bart-Modus** | Gesprächsstoff | `BartModus` |
| 18 | Konfetti bei Würfel-Treffer und Tracker-Meilensteinen | Belohnung | `lib/konfetti.js` |
| 19 | HowTo-Schema für die Checkliste | Rich Results, KI-Antworten | `app/page.js` |
| 20 | Eigene Vorschaubilder (Open Graph) für Startseite und jede Detailseite | Klickrate in Social Media und Chats | `opengraph-image.js` |

## Schritte

1. Score-Logik als reine Funktion, damit Server, Client und `llms.txt` dieselbe Zahl zeigen.
2. Tracker als Hook mit `localStorage` und Event, damit mehrere Tabellen auf einer Seite synchron bleiben.
3. Tabelle erweitern: Score, Häkchen, Filter „offen“, Taste `/`.
4. Detailseite: Score-Balken, Jean-Spruch, Kopier-Buttons.
5. Neue Listen, Quiz und Vergleich als eigene Seiten, Sitemap ergänzen.
6. Spaß-Ebene: Konfetti, Bart-Modus.
7. SEO: HowTo-Schema, Open-Graph-Bilder, Score in `llms.txt`.
8. Build, Browser-Test (Desktop und 390 px), PR, Merge.
