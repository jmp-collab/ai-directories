# Hinweise für Claude in diesem Repository (AIGeddon)

## Partnerlinks: immer automatisch nutzen

- Einzige Quelle für Partner- und Referral-Links ist `db/partners.json`. Jean pflegt sie über `docs/partnerprogramme.xlsx` (Firma mit USt-IdNr. angemeldet).
- Liefert Jean eine ausgefüllte Excel-Datei (Upload oder `docs/partnerprogramme.xlsx` im Repo), immer:
  1. `python3 utils/partners/xlsx_import.py [pfad.xlsx]` (übernimmt Status, Partner-Link, Rabattcode, Notizen)
  2. `npm run partners` (prüft das Register, schreibt `docs/PARTNERLINKS.md`)
  3. `python3 utils/partners/xlsx_build.py` nach einem Build (erzeugt die Tabelle neu, eingetragene Werte bleiben erhalten)
  4. bauen, prüfen, PR, mergen.
- Links nie hart in Seiten schreiben. Im Code immer über die Helfer gehen:
  - Tools mit Steckbrief: `toolHref(t)` / `toolRel(t)` aus `lib/tools.js` (nutzt `TOOL_AFFILIATES`).
  - Verzeichnisse: `lib/data.js` (nutzt `AFFILIATES`, eigene Rabattcodes über `OWN_DEALS`).
  - Alle anderen Anbieter, z. B. die 705 Tools der KI-Tool-Datenbank: `HOST_AFFILIATES[domain]` bzw. `t.affiliate` aus `lib/kb.js`.
- Ein Link wird nur genutzt bei `status: "aktiv"` und gesetztem `partner_link`. Partnerlinks bekommen sichtbar ein `*` und `rel="sponsored"` (siehe /transparenz).
- Neue Seiten oder neue Tool-Erwähnungen (News, Ratgeber, Vergleiche, Prompts): vorhandene aktive Partnerlinks einbauen, wo das Tool genannt und verlinkt wird. Für andere Webprojekte von Jean gilt dasselbe Register als Quelle: https://github.com/jmp-collab/ai-directories/blob/main/db/partners.json
- Bei Programmen ohne Anmeldung (`programm: "nein"`, `"pausiert/geschlossen"`) keinen Link erfinden. Neue Programme nur mit offizieller Quelle eintragen.

## Skills

- Rubrik /skills: Inhalte liegen als `skills/<name>/SKILL.md` (Agent-Skills-Standard, Ordnername = name, keine Skripte). Nach jeder Änderung `npm run skills` (prüft Frontmatter, schreibt `db/skills.json` und `public/skills-dl/*.zip`), dann bauen. Anzeige-Daten und Verknüpfungen in `lib/skills.js` (SKILL_META). Grundlage marketingskills (MIT), Herkunft im metadata.source jedes Skills angeben.

## Allgemein

- Datenschutz Jean: Auf der Website und im Repo stehen über Jean nur Name, Master of Arts Wirtschaftswissenschaften (Universität Trier) und die Stelle als Senior SEO/SGE Manager bei der MotoMobilityGroup. Keine Fotos, kein Wohnort, keine Familie, kein Aussehen, keine Hobbys, keine früheren Stationen, auch nicht in Witzen oder Beispielen.

- Ton: `docs/BRAND-VOICE.md`. Keine erfundenen Fakten oder Preise, Preise nur von offiziellen Seiten. Keine Gedankenstriche (– —), keine unsichtbaren Unicode-Zeichen.
- Build lokal: `app/verzeichnis/[slug]/opengraph-image.js` vorübergehend verschieben, dann `STATIC_EXPORT=1 BASE_PATH=/ai-directories NEXT_PUBLIC_SITE_URL=https://jmp-collab.github.io/ai-directories npx next build`, danach `node utils/vernetzung/build.mjs out` und erneut bauen.
- Aufgaben-Backlog: `docs/TASKS.md`. Offene Punkte für Jean: `docs/FUER-JEAN.md`.
