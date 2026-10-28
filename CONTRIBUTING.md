# Mitmachen

---

> ❗️ Die `README.md` und der Ordner `/db` werden automatisch erzeugt. Bitte nicht direkt bearbeiten.
> Änderungen an Verzeichnissen gehören in den Ordner `/directories`.

---

Jeder kann mitmachen. Damit die Liste brauchbar bleibt, ein paar Regeln:

-   Das Verzeichnis muss zum Projekt passen: eine Plattform, auf der man ein KI-Tool, SaaS oder Startup eintragen kann.
-   Keine Dubletten. Eine kurze Suche in der README reicht, um das zu prüfen.
-   Die Liste ist in TypeScript geschrieben. Wenn du damit nicht klarkommst, öffne einfach ein Issue mit den Daten, dann trägt es jemand für dich ein.
-   Vor dem Pull Request die Punkte aus dem [Pull-Request-Template](PULL_REQUEST_TEMPLATE) abhaken.

## Verzeichnis hinzufügen

-   Die Einträge liegen alphabetisch in einzelnen Dateien im Ordner `directories`. Der erste Buchstabe des `name` entscheidet über die Datei, Namen mit Ziffer am Anfang kommen in `0-9.ts`.
-   Innerhalb der Datei ebenfalls alphabetisch nach `name` sortieren.
-   Keine Referral- oder Affiliate-Parameter in den Links (`?ref=`, `?via=`, `?aff=` usw.).

### Format

Jedes Verzeichnis ist ein Objekt:

```typescript
// directories/t.ts

{
    "name": "The Directory",
    "link": "https://www.thedirectory.com/",
    "submission_link": "https://www.thedirectory.com/new",
    "domain_rating": 27,
    "monthly_visits": 37000,
    "submission_experience": "Good",
    "pricing": "Paid"
},
```

Die Felder:

-   `name`: **string**, Pflicht. Den Markennamen so schreiben, wie das Verzeichnis ihn selbst schreibt, nicht übersetzen („AI Finder“ bleibt „AI Finder“).
-   `link`: **string**, Pflicht. Startseite des Verzeichnisses, beginnt mit `https://` oder `http://`.
-   `submission_link`: **string**, Pflicht. Direkter Link zum Eintragsformular, beginnt mit `https://` oder `http://`.
-   `domain_rating`: **number**, Pflicht. Ahrefs Domain Rating (0 bis 100).
-   `monthly_visits`: **number**, Pflicht. Geschätzte Besuche pro Monat.
-   `pricing`: **string**, Pflicht. `Free` oder `Paid`.
-   `submission_experience`: **string**, optional. `Good`, `Bad` oder leer. Wird beim Review gesetzt: `Good` gibt es, wenn das Formular funktioniert und der Eintrag ohne Umwege live geht.
-   `dealCode` / `dealText`: optional. Rabattcode und Vorteil, z. B. `"dealText": "20% Discount"`.

> Warum englische Werte? `Good`, `Bad`, `Free` und `Paid` sind Datenwerte für API und Generatoren. Die deutschen Labels („Reibungslos“, „Kostenlos“ …) kommen aus `utils/i18n-de.js`. Bitte nicht übersetzen, sonst stimmen Farben und Filter nicht mehr.

## Verzeichnis bearbeiten

Toter Link, falscher Preis, veraltete Zahlen? Einfach korrigieren und einen Pull Request aufmachen.

## Andere Beiträge

Änderungen, die nichts mit den Verzeichnissen zu tun haben, sind willkommen. Öffne vorher bitte ein Issue und beschreib kurz, was du vorhast.

## Code-Formatierung

Das Projekt nutzt [Prettier](https://prettier.io/) und [ESLint](https://eslint.org/). `npm install` installiert beides im Projekt.

## README und DB aktualisieren

Nach Änderungen in `/directories`:

```bash
npm run update-db
npm run update-readme
```

## Website lokal starten

```bash
npm install
npm run dev
```

Für den Produktiv-Build `NEXT_PUBLIC_SITE_URL` auf die echte Domain setzen (siehe `.env.example`), sonst zeigen Canonicals, Sitemap und `llms.txt` auf `localhost`.

## Hilfe nötig?

Wenn du mit TypeScript nicht weiterkommst oder aus einem anderen Grund keinen Pull Request aufmachen kannst, öffne ein Issue. Jemand anderes hilft dir, das Verzeichnis in die Liste zu bekommen.

---

## Danke fürs Mitmachen!
