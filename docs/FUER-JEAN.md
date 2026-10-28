# Für Jean: was nur du erledigen kannst

Stand 26.10.2026. Alles andere ist umgesetzt. Diese Punkte brauchen deinen Login, deine Adresse oder deine Entscheidung. Jeder Schritt dauert unter fünf Minuten.

## 1. Lead-Formular scharf schalten (FormSubmit)

Die Anfragen gehen an die in `lib/monetization.js` hinterlegte Adresse (am 26.10. von Jean bestätigt). Damit die Adresse nicht im Seitenquelltext steht, den Alias aus Schritt 4 setzen.

1. Für eine andere Adresse später: GitHub-Repo → Settings → Secrets and variables → Actions → Variables → `LEAD_EMAIL` anlegen.
2. Auf der Live-Seite einmal das Formular „Frag Jean direkt“ abschicken.
3. FormSubmit schickt eine Aktivierungsmail an die Adresse. Link darin klicken. Ab dann kommen alle Anfragen an.
4. Optional, damit die Adresse nicht im Seitenquelltext steht: In der Aktivierungsmail steht ein Alias (zufällige Zeichenkette). Als Variable `LEAD_ALIAS` eintragen.

## 2. Google Search Console

1. search.google.com/search-console → Property hinzufügen → URL-Präfix `https://jmp-collab.github.io/ai-directories/`.
2. Methode „HTML-Tag“ wählen und nur den Wert aus `content="…"` kopieren.
3. Als Repository-Variable `GSC_VERIFICATION` eintragen, dann unter Actions den Workflow „Deploy“ neu starten (oder auf den nächsten Merge warten).
4. In der Search Console bestätigen und die Sitemap `sitemap.xml` einreichen.

## 3. Website-Feld im GitHub-Repo

Oben rechts auf der Repo-Seite steht noch `ai-directories.vercel.app` (das Originalprojekt von Sergiu Chiriac). Zahnrad neben „About“ → Website auf `https://jmp-collab.github.io/ai-directories/` ändern. Das kann ich nicht, die Proxy-Regeln sperren Einstellungsänderungen.

## 4. Impressum (Pflicht nach § 5 DDG)

Ich brauche: Name, ladungsfähige Anschrift (kein Postfach), E-Mail, optional Telefon, bei Gewerbe Umsatzsteuer-ID, Verantwortlicher für Inhalte nach § 18 Abs. 2 MStV mit Anschrift. Schick mir die Daten, dann baue ich die Seite /impressum und verlinke sie im Footer. Die Datenschutzerklärung sollte danach einmal rechtlich geprüft werden.

## 5. Gmail-Verbindung

Der Gmail-Connector in Claude will neu angemeldet werden. Danach kann ich nach der FormSubmit-Aktivierung und eingehenden Anfragen schauen.

## 6. Messdaten

- Semrush: keine API-Einheiten mehr (semrush.com/mcp-access). Ubersuggest: 3 Abfragen pro Tag im Gratis-Tarif (ubersuggest.com/en/pricing).
- Mit Messwerten übernehme ich die 98 neu entdeckten Verzeichnisse in die Hauptliste. Für die Hauptliste braucht es Ahrefs Domain Rating und Besuche; ohne Ahrefs-Zugang bleiben sie auf /neu-entdeckt.

## 7. Partnerprogramme anmelden (Firma, USt-IdNr.)

Alles steht in **`docs/partnerprogramme.xlsx`**:

- **Tools:** 64 Tools mit Steckbrief. Für jedes Tool steht dort, ob es ein Programm gibt, das Netzwerk, die Provision, die Cookie-Laufzeit, der Registrierungslink und die Quelle. 46 Tools haben ein Programm, alle anderen sind als „nein“, „geschlossen“, „nur auf Einladung“ oder „unklar“ markiert.
- **Verzeichnisse:** 256 Verzeichnisse, mit bekannten Programmen und Rabattcode-Anfragen.
- **Weitere Blätter:** KI-Tool-Datenbank (666), Neu entdeckt (98) und Alle Domains (986 verlinkte Domains der Seite). Wo nichts recherchiert ist, hilft ein Suchlink weiter.

So gehst du vor:

1. Anmelden.
2. In den gelben Spalten eintragen: Partner-Link, Status, eventuell Rabattcode.
3. Datei zurückgeben. Ich übernehme die Links mit `utils/partners/xlsx_import.py` ins Register. Ab dem nächsten Build stehen sie überall auf der Seite, mit * und rel="sponsored".

## 8. Domain

- aigeddon.de registrieren (größter Hebel für Vertrauen und Ranking), danach stelle ich alles um.
- Hinweis: Viele Partnerprogramme verlangen ein Impressum auf der Website. Mit der neuen Firma kann ich es sofort bauen, sobald du mir Firmenname, Anschrift, Vertretung und USt-IdNr. gibst (Punkt 4).

## 9. Routinen mit Recherche ausstatten

Die geplanten Sitzungen (Backlog, Sperr-Check, Preis-Check, KI-News) laufen ohne Exa-Connector, und die Netzwerkrichtlinie sperrt Anbieterseiten. Deshalb hat der Backlog-Lauf am 26.10. nichts geändert. Abhilfe: Exa unter https://claude.ai/customize/connectors verbinden und die Routinen in der Routinen-Ansicht von claude.ai mit Exa und dem Repository ausstatten, oder in der Umgebung den Netzwerkzugriff erweitern.
