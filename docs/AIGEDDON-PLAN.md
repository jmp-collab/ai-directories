# AIGeddon: Marke, Ausbau und Monetarisierung

Stand: 23. Oktober 2026. Grundregel für alles, was wir bauen: Jede Seite braucht einen Lead-Baustein und mindestens einen Umsatzweg. Bewertungen bleiben unkäuflich, sonst verliert die Seite den Grund, warum Leute ihr glauben.

## 1. Marke

| Punkt | Festlegung |
|---|---|
| Name | AIGeddon, Wortmarke in Versalien: **AIGEDDON** |
| Herkunft | YouTube-Kanal „AIGEDDON KI Use Cases, Prompts & Tutorials“ (@AIGeddon), deutschsprachig |
| Versprechen | Die KI-Apokalypse kommt sowieso. Wer sie nutzt, statt von ihr überrollt zu werden, gewinnt. |
| Zielgruppen | 1. Gründer, die ein KI-Tool launchen. 2. Marketer, SEOs und Selbstständige, die KI im Alltag nutzen wollen. |
| Ton | Ehrlich, frech, faktenbasiert. Jean als Figur bleibt das Gesicht. Apokalypse-Wortspiele sparsam, Fakten immer belegt. |
| Symbol | ☢️ (Strahlenwarnzeichen) neben der Wortmarke; Farben wie bisher: Magenta-Rot als Akzent, Gelb als Markierung |
| Domain | aigeddon.com ist vergeben (Fremdbesitz). **aigeddon.de** und **aigeddon.ai** waren am 23.10.2026 frei: .de als Hauptdomain, .ai zum Schutz |

Offene Punkte zur Marke:
- Der einzige auffindbare Kanal-Upload ist ein expliziter Comedy-Song-Short. Vor dem Verlinken prüfen, ob der Kanal zur seriösen „Use Cases, Prompts & Tutorials“-Positionierung passt.
- „AIgeddon“ wird im Netz auch als allgemeiner Begriff verwendet (KI-Blase, Traffic-Verlust durch KI-Suche). Vor größeren Investitionen eine Markenrecherche beim DPMA/EUIPO machen.

## 2. Was schon umgesetzt ist (dieser Stand)

- Rebranding: Kopfzeile, Seitentitel, Breadcrumbs, Vorschaubilder und llms.txt laufen auf AIGeddon. „KI-Verzeichnisse“ bleibt als Thema in den Überschriften, weil genau danach gesucht wird.
- Lead-Box auf jeder Seite: Newsletter, solange keiner hinterlegt ist, das Abo des YouTube-Kanals.
- Partnerlink-Technik: Partnerlinks pro Verzeichnis und pro Werkzeug im zentralen Register `db/partners.json`. Sie werden überall automatisch genutzt, mit * gekennzeichnet und als `rel="sponsored"` ausgegeben.
- Werkzeug-Empfehlungen auf Startseite und Launch-Kit (10 Tools mit Partnerprogramm).
- `/werben`: vier Angebote (Launch-Service, Featured-Platz, geprüftes Profil, Sponsoring).
- `/transparenz`: Kennzeichnung von Partnerlinks und Anzeigen.
- Liste aller Partnerprogramme mit Direktlinks: `docs/AFFILIATE-PROGRAMME.md`.

## 3. Blocker vor dem Geldverdienen (nur du kannst sie lösen)

1. **Impressum und Datenschutzerklärung.** Mit Partnerlinks und Angeboten ist die Seite geschäftsmäßig; ohne Impressum (§ 5 DDG) drohen Abmahnungen, und fast alle Partnerprogramme lehnen ab. Dafür brauche ich Name, ladungsfähige Anschrift und E-Mail. Für die Anschrift reicht notfalls ein Impressums-Service.
2. **Geschäfts-E-Mail** für Anfragen und Partnerkonten, z. B. hallo@aigeddon.de. Danach `NEXT_PUBLIC_CONTACT_EMAIL` setzen, dann erscheinen die Anfrage-Buttons auf `/werben`.
3. **Newsletter.** Gefunden habe ich nur einen alten Substack-Platzhalter von 2022. Entweder umbenennen in „AIGeddon Briefing“ oder (meine Empfehlung) gleich auf beehiiv starten: beehiiv zahlt über Boosts und sein Werbenetzwerk Geld pro Abonnent und hat selbst ein Partnerprogramm mit bis zu 60 %. Substack zahlt für Empfehlungen nichts. Danach `NEXT_PUBLIC_NEWSLETTER_URL` setzen.
4. **Domain** aigeddon.de registrieren und bei GitHub Pages als Custom Domain eintragen.
5. **Partnerkonten** anlegen (Liste in `docs/AFFILIATE-PROGRAMME.md`) und mir die Links geben.

## 4. Rubriken und Ausbau

Bewertung je Rubrik: Lead-Potenzial und Umsatzpotenzial (hoch/mittel/gering), Aufwand, Reihenfolge.

| Nr. | Rubrik | Inhalt | Lead | Umsatz | Aufwand | Wann |
|---|---|---|---|---|---|---|
| 1 | **KI-Verzeichnisse** (besteht) | 256 Verzeichnisse, Jean-Score, Freischaltdauer, Sperr-Erkennung | mittel | mittel: Partnerlinks Uneed/PeerPush/AppSumo, Featured-Plätze, geprüfte Profile | gering | jetzt |
| 2 | **Launch-Service** | Wir tragen Tools in die passenden Verzeichnisse ein. Pakete z. B. 10/25/50 Einträge | hoch (jede Anfrage ist ein Lead) | **hoch**: direkter Umsatz, kein Partnerprogramm nötig | mittel, lässt sich mit KI und Make teilweise automatisieren | Phase 1 |
| 3 | **KI-Tool-Verzeichnis** | Tools nach Anwendungsfall (Text, Bild, Video, Audio, SEO, Automatisierung), je Tool eine Seite mit Alternativen | mittel | **hoch**: Partnerlinks auf Tool-Seiten; Tool-Hersteller zahlen für schnellere Prüfung und Featured-Plätze, genau wie bei den Verzeichnissen in unserer Liste | hoch | Phase 2 |
| 4 | **Vergleiche und Alternativen** | „Semrush vs. SE Ranking“, „Alternativen zu Notion AI“ | gering | **hoch**: Kaufentscheidung, beste Klickrate auf Partnerlinks | mittel | Phase 2 |
| 5 | **Use Cases und Prompts** | Prompt-Bibliothek und Anwendungsfälle, je Eintrag mit eingebettetem YouTube-Video | **hoch**: Prompt-Pakete als Lead-Magnet | mittel: Tool-Partnerlinks, YouTube-Aufrufe | mittel | Phase 3 |
| 6 | **Tutorials / Ratgeber** (besteht, 3 Artikel) | Schritt-für-Schritt-Anleitungen | mittel | mittel: Werkzeug-Empfehlungen im Text | mittel | laufend |
| 7 | **Deals** | 25 Rabattcodes der Verzeichnisse plus Tool-Deals | **hoch** als Newsletter-Grund („neue Deals jede Woche“) | mittel | gering | Phase 1 |
| 8 | **Newsletter „AIGeddon Briefing“** | Wöchentlich: neue Verzeichnisse, Sperren, Deals, ein Use Case | Kern der Lead-Strategie | Sponsoring, beehiiv-Boosts, Partnerlinks | gering | Phase 1 |
| 9 | **Daten-Produkt „Launch-Datenbank Pro“** | Alle Verzeichnisse mit Prüfdaten als Google Sheet/Airtable, monatlich aktualisiert, 29 bis 49 € | mittel | mittel, wiederholbar | gering, Daten existieren | Phase 2 |
| 10 | **API und Datenlizenz** | JSON-API besteht schon; bezahlter Zugang mit aktuellen Prüfdaten für Agenturen | gering | gering bis mittel | mittel | später |
| 11 | **Jobs, Freelancer, Community** | KI-Freelancer-Börse, Discord | mittel | gering am Anfang | hoch | später |

## 5. Lead-Strategie

- **Lead-Magnete:**
  - „Launch-Checkliste + die 50 besten Verzeichnisse“ als Google Sheet
  - „Prompt-Pack“ zu jedem Use-Case-Video
  - „Deal-Alarm“ für neue Rabattcodes
- **Platzierung ohne Pop-up:**
  - Lead-Box am Seitenende (umgesetzt)
  - nach dem Quiz-Ergebnis
  - beim Tracker-Meilenstein („10 eingetragen: Hol dir die nächsten 40 per Mail“)
  - beim CSV-Export des Trackers
  - im Launch-Kit nach dem Erzeugen der Texte
- **YouTube ↔ Seite:**
  - Jedes Video verlinkt die passende Seite.
  - Jede Use-Case-Seite bettet das Video ein.
  - Die Videobeschreibungen tragen den Newsletter-Link.
- **Messen:**
  - UTM-Parameter auf allen eigenen Links.
  - Ein cookieloses Analytics-Tool (z. B. Plausible oder Umami), damit kein Cookie-Banner nötig ist.

## 6. Reihenfolge

| Phase | Inhalt | Ergebnis |
|---|---|---|
| 0, sofort | Blocker aus Abschnitt 3 | Seite darf Geld verdienen |
| 1, 2 Wochen | Partnerlinks eintragen, Newsletter live, Lead-Magnet „Top 50 Verzeichnisse“, Launch-Service mit festen Paketpreisen, Deals-Seite | erste Leads und Provisionen |
| 2, 1 bis 2 Monate | KI-Tool-Verzeichnis mit den 30 Tools mit Partnerprogramm als Start, 10 Vergleichsseiten, Launch-Datenbank Pro | zweite Umsatzsäule |
| 3, laufend | Use Cases und Prompts aus den YouTube-Videos, Ratgeber-Ausbau, Sponsoring | Reichweite und Abonnenten |

## 7. Leitplanken

- Werbekennzeichnung: Partnerlinks mit *, Anzeigen als „Anzeige“, Sponsoren nennen (UWG, MStV).
- Keine bezahlten Bewertungen, kein bezahlter Jean-Score.
- Keine gekauften Links ohne `rel="sponsored"`, sonst droht eine Google-Abstrafung.
- Keine Pop-ups, die die Seite verdecken. Sie kosten Vertrauen und bei Google Sichtbarkeit.
