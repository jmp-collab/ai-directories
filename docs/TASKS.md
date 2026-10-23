# Aufgaben-Backlog AIGeddon

Diese Datei steuert die automatischen Arbeitssitzungen. Jede Sitzung liest sie, nimmt **die erste offene Aufgabe von oben**, die nicht auf Jean wartet, erledigt sie vollständig und hakt sie ab.

## Regeln für jede automatische Sitzung

1. Branch frisch von `main`: `git fetch origin main && git checkout -B <Sitzungs-Branch> origin/main`.
2. **Genau eine** Aufgabe aus „Offen“ nehmen, oben beginnen. Aufgaben mit „wartet auf Jean“ überspringen.
3. Fakten nur von offiziellen Seiten der Anbieter, mit Quelle. Nichts erfinden; unbekannt bleibt `null` bzw. „keine Angabe“.
4. Sperren (Status „nicht eintragbar“) und `free_dofollow: false` nur setzen, wenn die Quelle selbst geprüft wurde.
5. Vor dem Commit: `npx next build` ohne Fehler, keine unsichtbaren Unicode-Zeichen (U+200B–U+200F, U+2060–U+2064, U+FEFF, U+00AD, U+202A–U+202E) in geänderten Dateien.
6. Partnerlinks immer mit `rel="sponsored"` und *-Kennzeichnung (passiert automatisch über `lib/monetization.js`).
7. PR mit Vorlage aus `PULL_REQUEST_TEMPLATE`, mergen, GitHub-Pages-Lauf abwarten, Live-Seite prüfen.
8. Hier die Aufgabe nach „Erledigt“ verschieben (Datum, PR-Nummer, ein Satz Ergebnis) und neu entdeckte Aufgaben unten in „Offen“ ergänzen.
9. Keine Registrierungen, Käufe, E-Mails oder Posts im Namen von Jean.

## Offen

### Wartet auf Jean
- [ ] **Impressum und Datenschutz**: Name, ladungsfähige Anschrift, E-Mail fehlen. Danach Seiten `/impressum` und `/datenschutz` bauen und im Footer verlinken. *wartet auf Jean*
- [ ] **Geschäfts-E-Mail** setzen (`NEXT_PUBLIC_CONTACT_EMAIL` im Pages-Workflow), dann erscheinen die Anfrage-Buttons auf `/werben`. *wartet auf Jean*
- [ ] **Newsletter-URL** setzen (`NEXT_PUBLIC_NEWSLETTER_URL`); Empfehlung beehiiv. *wartet auf Jean*
- [ ] **Partnerlinks und eigene Rabattcodes** eintragen (Format in `docs/REGISTRIERUNG.md`, Abschnitt 4). *wartet auf Jean*
- [ ] **Domain aigeddon.de** als Custom Domain für GitHub Pages einrichten (CNAME, `NEXT_PUBLIC_SITE_URL`, `BASE_PATH` leer). *wartet auf Jean*
- [ ] **Netlify-Projekt löschen** (alte Kopie). *wartet auf Jean*

### Automatisch abzuarbeiten (Reihenfolge = Priorität)
- [ ] **Vergleichsseite „Make vs. Zapier vs. n8n“** unter `/vergleiche/<slug>`, Daten aus `db/tools.json`, Tabelle, Empfehlung je Anwendungsfall, Partnerlinks über `TOOL_AFFILIATES`, ItemList-/FAQ-Schema, Sitemap.
- [ ] **Vergleichsseite „Semrush vs. SE Ranking vs. Surfer SEO“** nach demselben Muster.
- [ ] **Vergleichsseite „beehiiv vs. Kit vs. GetResponse vs. Brevo“** (Newsletter-Tools).
- [ ] **Vergleichsseite „Framer vs. Webflow vs. Hostinger“** (Website-Builder).
- [ ] **Vergleichsseite „Synthesia vs. HeyGen vs. InVideo vs. Pictory“** (KI-Video).
- [ ] **Lead-Magnet „Top 50 KI-Verzeichnisse“**: Seite `/top-50` mit Vorschau der ersten 10 und Abo-Aufforderung für die vollständige Liste (über Lead-Box/Newsletter).
- [ ] **Tool-Verzeichnis erweitern**: 15 weitere Tools mit öffentlichem Partnerprogramm (z. B. Jasper-Alternativen, Notion-Alternativen, KI-Bild: Leonardo-Alternativen, Transkription), Fakten wie in `db/tools.json`.
- [ ] **Prüfdaten erweitern**: nächste 15 Verzeichnisse ohne Eintrag in `db/checks.json` (Freischaltdauer, Link-Typ, Status) mit Zitat und Quelle.
- [ ] **Use-Case-Rubrik** `/use-cases`: 5 Anwendungsfälle (z. B. „Produktvideo ohne Kamera“, „Newsletter in 1 Stunde“), je mit passenden Tools aus `db/tools.json`.
- [ ] **Ratgeber**: Artikel „Product-Hunt-Alternativen für deutsche Gründer“ mit Verweisen auf Verzeichnis- und Tool-Seiten.
- [ ] **Ratgeber**: Artikel „Welcher Newsletter-Anbieter für Gründer?“ mit Verweis auf die Newsletter-Vergleichsseite.

## Wiederkehrend (eigene geplante Sitzungen, nicht hier abhaken)

- **Wöchentlich, Montag:** Sperr-Check. Alle Verzeichnisse mit Status in `db/checks.json` erneut prüfen, ob die Einreichung wieder offen ist, und die 30 Verzeichnisse mit dem höchsten Jean-Score prüfen, ob sie inzwischen gesperrt oder tot sind. Änderungen mit Quelle eintragen.
- **Monatlich, am 1.:** Preis-Check aller Tools in `db/tools.json` gegen die offizielle Preisseite, `TOOLS_STAND` aktualisieren.
- **Täglich (GitHub Actions, 04:17 UTC):** Neubau der Seite, damit Deal und Tool des Tages wechseln.

## Erledigt

- 2026-10-23 · PR #29 bis #32: Rebranding AIGeddon, Monetarisierungs-Grundlage, Deals, Launch-Service-Hinweise, Tool-Verzeichnis (25 Tools), Jean-Icons, Seitenleisten, Mobile-Dock.
- 2026-10-23 · dieser PR: eigene Rabattcodes (`OWN_DEALS`, `ONLY_OWN_DEALS`), Registrierungs-Checkliste, dieses Backlog, geplante Sitzungen.
