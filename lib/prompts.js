// Prompt-Bibliothek. Jeder Prompt ist eine Vorlage mit Feldern in geschweiften Klammern ({thema}).
// Die Seite füllt die Felder aus, zeigt die Vorschau und schickt das Ergebnis an ChatGPT, Claude und Co.
// tools: passende Werkzeuge aus db/tools.json (gleiche slugs), damit jede Prompt-Seite Partnerlinks tragen kann.

export const PROMPT_KATEGORIEN = {
    seo: { name: 'SEO', icon: 'lupe' },
    content: { name: 'Content & Text', icon: 'post' },
    video: { name: 'Video & YouTube', icon: 'play' },
    launch: { name: 'Launch & Marketing', icon: 'rakete' },
    business: { name: 'Business & Arbeit', icon: 'werkzeug' },
    shop: { name: 'Onlineshop & E-Commerce', icon: 'deal' },
    karriere: { name: 'Bewerbung & Karriere', icon: 'pokal' },
    lernen: { name: 'Lernen & Erklären', icon: 'lupe' },
    technik: { name: 'Excel, Code & Technik', icon: 'werkzeug' },
}

// Techniken, die in den Prompts stecken. Die Seite erklärt sie kurz, damit man beim Benutzen lernt.
export const TECHNIKEN = {
    rolle: ['Rolle', 'Die KI bekommt eine Fachrolle. Antworten werden genauer und im passenden Fachjargon.'],
    kontext: ['Kontext', 'Zielgruppe, Ziel und Rahmen stehen im Prompt. Ohne Kontext rät die KI, mit Kontext trifft sie.'],
    format: ['Ausgabeformat', 'Tabelle, Liste oder feste Abschnitte: Die KI liefert direkt in der Form, die du weiterverarbeitest.'],
    rueckfragen: ['Rückfragen', 'Die KI fragt erst nach, statt Lücken zu erfinden. Kostet eine Runde, spart drei Korrekturen.'],
    schritte: ['Schritt für Schritt', 'Die Aufgabe ist in Arbeitsschritte zerlegt. Das senkt Denkfehler bei mehrstufigen Aufgaben.'],
    kritik: ['Selbstkritik', 'Die KI prüft ihr eigenes Ergebnis gegen Kriterien und bessert nach, bevor du es siehst.'],
    beispiele: ['Beispiele', 'Ein oder zwei Muster zeigen Stil und Länge besser als jede Beschreibung.'],
    varianten: ['Varianten', 'Mehrere Versionen auf einmal. Du wählst aus, statt neu zu fragen.'],
}

const PROMPTS = [
    {
        slug: 'keyword-cluster',
        title: 'Keyword-Cluster für eine Themenseite',
        kategorie: 'seo',
        ziel: 'Aus einem Hauptkeyword eine Clusterstruktur mit Suchintention, Seitentyp und interner Verlinkung bauen.',
        techniken: ['rolle', 'kontext', 'format', 'schritte'],
        felder: [
            { key: 'keyword', label: 'Hauptkeyword', beispiel: 'E-Bike Akku' },
            { key: 'website', label: 'Website / Branche', beispiel: 'Onlineshop für E-Bike-Ersatzteile' },
            { key: 'land', label: 'Markt', beispiel: 'Deutschland' },
        ],
        vorlage: `Du bist ein erfahrener SEO-Stratege für den Markt {land}.

Aufgabe: Erstelle für das Hauptkeyword „{keyword}“ ein Keyword-Cluster für {website}.

Geh so vor:
1. Sammle 25 bis 40 verwandte Suchbegriffe (Long-Tail, Fragen, Vergleiche, transaktionale Begriffe).
2. Ordne jedem Begriff die Suchintention zu: informational, kommerziell, transaktional oder navigational.
3. Gruppiere die Begriffe in 4 bis 8 Cluster, die jeweils eine eigene Seite verdienen.
4. Schlage pro Cluster Seitentyp, H1 und URL-Slug vor.
5. Zeige, welche Seiten aufeinander verlinken sollen (Pillar-Seite zuerst).

Ausgabe als Tabelle: Cluster | Begriffe | Intention | Seitentyp | H1 | Slug.
Darunter die Verlinkungsstruktur als Liste. Erfinde keine Suchvolumen; markiere Begriffe, deren Nachfrage ich mit einem Tool prüfen sollte.`,
        tools: ['semrush', 'se-ranking', 'surfer-seo'],
    },
    {
        slug: 'meta-title-description',
        title: '10 Title-Tags und Meta-Descriptions mit Klick-Anreiz',
        kategorie: 'seo',
        ziel: 'Snippets schreiben, die in Google und KI-Suche auffallen, ohne Zeichenlimits zu reißen.',
        techniken: ['rolle', 'format', 'varianten', 'kritik'],
        felder: [
            { key: 'seite', label: 'Worum geht es auf der Seite?', beispiel: 'Ratgeber: Welcher Newsletter-Anbieter passt zu Gründern' },
            { key: 'keyword', label: 'Hauptkeyword', beispiel: 'Newsletter Anbieter Vergleich' },
            { key: 'usp', label: 'Was macht die Seite besonders?', beispiel: 'ehrlicher Vergleich mit Gratis-Tarifen und Preisen' },
        ],
        vorlage: `Du bist SEO-Texter mit Fokus auf Klickrate.

Seite: {seite}
Hauptkeyword: {keyword}
Besonderheit: {usp}

Schreibe 10 Varianten aus Title-Tag (höchstens 60 Zeichen) und Meta-Description (höchstens 155 Zeichen).
Regeln: Keyword möglichst weit vorn, ein konkreter Nutzen, keine Clickbait-Versprechen, keine Großbuchstaben-Wörter.
Nutze unterschiedliche Ansätze: Zahl, Frage, Nutzen, Vergleich, Jahreszahl, Neugier.

Ausgabe als Tabelle mit Zeichenzahl pro Feld. Prüfe danach jede Zeile gegen die Limits und kürze, was zu lang ist. Empfiehl zum Schluss deine Top 2 mit Begründung.`,
        tools: ['semrush', 'surfer-seo'],
    },
    {
        slug: 'blogartikel-gliederung',
        title: 'Blogartikel-Gliederung, die Fragen wirklich beantwortet',
        kategorie: 'content',
        ziel: 'Eine Gliederung, die Suchintention, Expertise und KI-Zitierfähigkeit gleichzeitig abdeckt.',
        techniken: ['rolle', 'kontext', 'rueckfragen', 'format'],
        felder: [
            { key: 'thema', label: 'Thema', beispiel: 'KI-Tool in Verzeichnisse eintragen' },
            { key: 'zielgruppe', label: 'Zielgruppe', beispiel: 'Gründer kleiner SaaS-Tools ohne Marketingteam' },
            { key: 'erfahrung', label: 'Deine eigene Erfahrung dazu', beispiel: 'über 80 Verzeichnisse selbst getestet' },
        ],
        vorlage: `Du bist Fachredakteur und planst einen Artikel zum Thema „{thema}“ für {zielgruppe}.

Meine eigene Erfahrung, die in den Artikel soll: {erfahrung}

Stell mir zuerst bis zu 3 Rückfragen, falls dir für eine gute Gliederung etwas fehlt. Warte auf meine Antwort.

Danach liefere:
1. Die Suchintention in einem Satz.
2. Eine Gliederung mit H2 und H3, jeweils mit 1 Satz, was dort beantwortet wird.
3. Pro Abschnitt: wo meine eigene Erfahrung, ein Beispiel oder eine Zahl hingehört.
4. 5 Fragen für einen FAQ-Block, so formuliert, wie Menschen sie in Google oder ChatGPT eintippen.
5. Eine Einleitung mit höchstens 80 Wörtern, die sofort die Antwort liefert.`,
        tools: ['surfer-seo', 'writesonic'],
    },
    {
        slug: 'text-entkitschen',
        title: 'KI-Text entkitschen: klingt danach wie ein Mensch',
        kategorie: 'content',
        ziel: 'Typische KI-Floskeln, leere Superlative und Füllsätze aus einem Text holen.',
        techniken: ['rolle', 'kritik', 'format'],
        felder: [
            { key: 'text', label: 'Dein Text', beispiel: 'In der heutigen schnelllebigen digitalen Welt ist es wichtiger denn je, ...', mehrzeilig: true },
            { key: 'ton', label: 'Gewünschter Ton', beispiel: 'locker, direkt, Du-Ansprache' },
        ],
        vorlage: `Du bist ein strenger Lektor. Überarbeite den folgenden Text so, dass er klingt, als hätte ihn ein erfahrener Mensch geschrieben. Ton: {ton}.

Streiche: Floskeln („in der heutigen Zeit“, „es ist wichtig zu beachten“), leere Superlative, Wiederholungen, Aufzählungen ohne Inhalt, künstliche Spannungsbögen.
Behalte: alle Fakten, Zahlen, Namen und Aussagen. Erfinde nichts dazu.

Liefere:
1. Den überarbeiteten Text.
2. Eine kurze Liste der wichtigsten Änderungen.

Text:
"""
{text}
"""`,
        tools: [],
    },
    {
        slug: 'youtube-skript',
        title: 'YouTube-Skript mit Hook in den ersten 15 Sekunden',
        kategorie: 'video',
        ziel: 'Ein sprechbares Skript mit starkem Einstieg, Kapiteln und Call-to-Action.',
        techniken: ['rolle', 'kontext', 'schritte', 'format'],
        felder: [
            { key: 'thema', label: 'Video-Thema', beispiel: 'Ich teste 5 KI-Videotools mit demselben Skript' },
            { key: 'laenge', label: 'Ziellänge', beispiel: '8 Minuten' },
            { key: 'kanal', label: 'Kanal und Stil', beispiel: 'AIGeddon: KI-Tools mit Humor, ehrlich, ohne Hype' },
        ],
        vorlage: `Du bist YouTube-Autor für den Kanal {kanal}.

Schreibe ein Skript für ein Video über: {thema}. Ziellänge: {laenge}.

Aufbau:
1. Hook (höchstens 15 Sekunden): ein Versprechen oder eine überraschende Aussage, die zum Titel passt.
2. Kurze Einordnung, warum das Thema jetzt wichtig ist.
3. Hauptteil in 3 bis 5 Kapiteln mit Zeitmarken, jeweils mit einem konkreten Beispiel oder Test.
4. Pattern-Interrupts: markiere alle 60 bis 90 Sekunden eine Stelle für B-Roll, Grafik oder Gag in [eckigen Klammern].
5. Fazit mit klarer Empfehlung.
6. Call-to-Action: Abo und ein Hinweis auf weiterführende Links in der Beschreibung.

Schreib gesprochene Sprache, kurze Sätze. Danach: 5 Titelvorschläge (höchstens 60 Zeichen) und 3 Thumbnail-Texte (höchstens 4 Wörter).`,
        tools: ['descript', 'elevenlabs', 'invideo-ai'],
    },
    {
        slug: 'video-zu-blogartikel',
        title: 'Aus Video-Transkript einen Blogartikel machen',
        kategorie: 'video',
        ziel: 'Ein Video zweimal verwerten: als suchmaschinentauglichen Artikel mit Zitaten.',
        techniken: ['rolle', 'format', 'kritik'],
        felder: [
            { key: 'keyword', label: 'Hauptkeyword für den Artikel', beispiel: 'KI-Videotools Test' },
            { key: 'transkript', label: 'Transkript (gekürzt reicht)', beispiel: 'Hallo und willkommen bei AIGeddon, heute teste ich ...', mehrzeilig: true },
        ],
        vorlage: `Du bist Redakteur und machst aus einem Video-Transkript einen eigenständigen Blogartikel.

Hauptkeyword: {keyword}

Regeln:
- Kein Abschreiben des gesprochenen Textes, sondern ein lesbarer Artikel mit H2-Zwischenüberschriften.
- Alle Aussagen, Zahlen und Testergebnisse aus dem Transkript bleiben erhalten; erfinde nichts dazu.
- Starke Aussagen aus dem Video als Zitat übernehmen.
- Am Ende: Fazit, 3 FAQ und ein Satz, der auf das Video verweist.

Prüfe zum Schluss, ob jede Behauptung im Artikel durch das Transkript gedeckt ist, und nenne Stellen, die ich nachprüfen sollte.

Transkript:
"""
{transkript}
"""`,
        tools: ['descript', 'pictory'],
    },
    {
        slug: 'product-hunt-launch',
        title: 'Product-Hunt-Launch: Tagline, Beschreibung, erster Kommentar',
        kategorie: 'launch',
        ziel: 'Alle Launch-Texte in einem Rutsch, in den Zeichenlimits der Plattform.',
        techniken: ['rolle', 'kontext', 'varianten', 'format'],
        felder: [
            { key: 'produkt', label: 'Produktname', beispiel: 'RechnungsRadar' },
            { key: 'was', label: 'Was macht es?', beispiel: 'liest Eingangsrechnungen per KI aus und bucht sie in DATEV' },
            { key: 'zielgruppe', label: 'Für wen?', beispiel: 'Selbstständige und kleine Agenturen' },
            { key: 'besonders', label: 'Was ist anders als bei der Konkurrenz?', beispiel: 'DSGVO-konform, Server in Deutschland, ab 9 € im Monat' },
        ],
        vorlage: `Du bist Launch-Berater und hast Dutzende Produkte auf Product Hunt begleitet.

Produkt: {produkt}
Funktion: {was}
Zielgruppe: {zielgruppe}
Unterschied: {besonders}

Liefere auf Englisch:
1. 5 Taglines (höchstens 60 Zeichen), jeweils mit einem anderen Ansatz.
2. Eine Beschreibung (höchstens 260 Zeichen).
3. Den ersten Kommentar des Makers (150 bis 250 Wörter): Warum gebaut, für wen, was es kann, eine ehrliche Einschränkung, eine Frage an die Community.
4. 3 Antworten auf typische kritische Kommentare (Preis, Datenschutz, „gibt es schon“).

Kein Hype-Vokabular wie „revolutionary“ oder „game-changer“.`,
        tools: ['framer', 'beehiiv'],
    },
    {
        slug: 'verzeichnis-beschreibungen',
        title: 'Beschreibungen für KI-Verzeichnisse in 3 Längen',
        kategorie: 'launch',
        ziel: 'Einmal schreiben, überall eintragen: Einzeiler, Kurz- und Langbeschreibung auf Deutsch und Englisch.',
        techniken: ['rolle', 'format', 'kritik'],
        felder: [
            { key: 'produkt', label: 'Produktname', beispiel: 'RechnungsRadar' },
            { key: 'was', label: 'Was macht es, für wen?', beispiel: 'KI liest Rechnungen aus und bucht sie in DATEV, für Selbstständige' },
            { key: 'preis', label: 'Preismodell', beispiel: 'Gratis-Tarif, Pro ab 9 € im Monat' },
        ],
        vorlage: `Du schreibst Einträge für KI-Tool-Verzeichnisse.

Produkt: {produkt}
Funktion und Zielgruppe: {was}
Preis: {preis}

Liefere jeweils auf Deutsch und Englisch:
1. Einzeiler (höchstens 60 Zeichen)
2. Kurzbeschreibung (höchstens 160 Zeichen)
3. Langbeschreibung (150 bis 250 Wörter) mit 3 konkreten Anwendungsfällen
4. 5 passende Kategorien oder Tags

Regeln: Produktname immer gleich geschrieben, keine Superlative, Preis korrekt übernehmen. Zähle zum Schluss die Zeichen von 1 und 2 und kürze, wenn nötig.`,
        tools: [],
    },
    {
        slug: 'newsletter-ausgabe',
        title: 'Newsletter-Ausgabe aus 3 Links',
        kategorie: 'content',
        ziel: 'Aus Notizen und Links eine fertige Ausgabe mit Betreffzeilen und Vorschautext.',
        techniken: ['rolle', 'format', 'varianten'],
        felder: [
            { key: 'newsletter', label: 'Name und Thema des Newsletters', beispiel: 'PromptGott: die besten Prompts der Woche' },
            { key: 'inhalte', label: 'Links oder Notizen', beispiel: '1) Neues Claude-Feature ... 2) Prompt-Trick für Tabellen ... 3) Tool-Deal ...', mehrzeilig: true },
        ],
        vorlage: `Du schreibst die neue Ausgabe von {newsletter}.

Inhalte dieser Woche:
"""
{inhalte}
"""

Pro Thema drei Teile: Was ist passiert (2 Sätze), warum es wichtig ist (1 bis 2 Sätze), meine Einschätzung (1 Satz, mit Haltung).
Danach ein kurzer Abschnitt „Prompt der Woche“ mit einem sofort nutzbaren Prompt zum Hauptthema.

Liefere außerdem 5 Betreffzeilen (höchstens 45 Zeichen) und 3 Vorschautexte (höchstens 90 Zeichen).
Erfinde keine Fakten, Zahlen oder Zitate, die nicht in den Inhalten stehen.`,
        tools: ['beehiiv', 'kit', 'brevo'],
    },
    {
        slug: 'automatisierung-planen',
        title: 'Wiederkehrende Aufgabe in eine Automatisierung zerlegen',
        kategorie: 'business',
        ziel: 'Einen Ablauf so beschreiben, dass er in Make, Zapier oder n8n baubar ist.',
        techniken: ['rolle', 'schritte', 'rueckfragen', 'format'],
        felder: [
            { key: 'aufgabe', label: 'Was machst du heute von Hand?', beispiel: 'Leads aus dem Kontaktformular in eine Tabelle kopieren und eine Willkommensmail schicken' },
            { key: 'apps', label: 'Welche Apps nutzt du?', beispiel: 'Tally, Google Sheets, Gmail' },
        ],
        vorlage: `Du bist Automatisierungs-Berater für kleine Unternehmen.

Heutiger Ablauf: {aufgabe}
Genutzte Apps: {apps}

Stell zuerst bis zu 3 Rückfragen, die für den Aufbau entscheidend sind. Warte auf meine Antwort.

Danach:
1. Zerlege den Ablauf in Auslöser, Schritte und Bedingungen.
2. Zeichne den Ablauf als nummerierte Liste, so wie er in Make, Zapier oder n8n aussehen würde.
3. Nenne Fehlerfälle (doppelte Einträge, fehlende Felder) und wie der Ablauf damit umgeht.
4. Schätze grob die Zahl der Ausführungen pro Monat und welches Tool dafür am günstigsten ist; markiere die Schätzung als Annahme.`,
        tools: ['make', 'zapier', 'n8n', 'tally'],
    },
    {
        slug: 'meeting-zusammenfassung',
        title: 'Meeting-Notizen in Entscheidungen und Aufgaben verwandeln',
        kategorie: 'business',
        ziel: 'Aus chaotischen Notizen eine Mail mit Entscheidungen, Aufgaben, Verantwortlichen und Fristen.',
        techniken: ['format', 'kritik'],
        felder: [{ key: 'notizen', label: 'Notizen oder Transkript', beispiel: 'Jens: Import Fatbike-Daten bis Freitag. Preise noch offen ...', mehrzeilig: true }],
        vorlage: `Fasse die folgenden Meeting-Notizen zusammen.

Struktur:
1. Entscheidungen (eine Zeile pro Entscheidung)
2. Aufgaben als Tabelle: Aufgabe | verantwortlich | Frist
3. Offene Fragen
4. Eine kurze Mail an alle Teilnehmenden mit diesen Punkten

Nimm nur auf, was in den Notizen steht. Fehlt bei einer Aufgabe der Name oder die Frist, schreib „offen“ statt etwas zu raten.

Notizen:
"""
{notizen}
"""`,
        tools: [],
    },
    {
        slug: 'prompt-verbessern',
        title: 'Meta-Prompt: Lass die KI deinen Prompt verbessern',
        kategorie: 'business',
        ziel: 'Einen schwachen Prompt in einen präzisen verwandeln, mit Rückfragen statt Raten.',
        techniken: ['rolle', 'rueckfragen', 'kritik', 'format'],
        felder: [{ key: 'prompt', label: 'Dein bisheriger Prompt', beispiel: 'Schreib mir einen Text über E-Bikes', mehrzeilig: true }],
        vorlage: `Du bist Experte für Prompt Engineering. Verbessere meinen Prompt.

Mein Prompt:
"""
{prompt}
"""

1. Bewerte ihn kurz: Was fehlt (Rolle, Ziel, Zielgruppe, Kontext, Format, Länge, Ton, Beispiele, Qualitätskriterien)?
2. Stell mir bis zu 5 Rückfragen, um die Lücken zu schließen. Warte auf meine Antworten.
3. Schreib danach den verbesserten Prompt in einem Codeblock, sofort nutzbar.
4. Erkläre in 3 Stichpunkten, warum die neue Fassung bessere Ergebnisse liefert.`,
        tools: [],
    },
    {
        slug: 'produktbeschreibung-shop',
        title: 'Produktbeschreibung für den Onlineshop',
        kategorie: 'shop',
        ziel: 'Eine Produktbeschreibung, die Fragen beantwortet, Vertrauen schafft und Retouren senkt.',
        techniken: ['rolle', 'kontext', 'format', 'kritik'],
        felder: [
            { key: 'produkt', label: 'Produkt', beispiel: 'Ersatzakku 36 V, 14 Ah für E-Bikes mit Rahmenakku' },
            { key: 'fakten', label: 'Technische Daten und Fakten', beispiel: '504 Wh, 2,9 kg, passend für Bosch PowerPack 500, 2 Jahre Garantie', mehrzeilig: true },
            { key: 'zielgruppe', label: 'Zielgruppe', beispiel: 'Pendler, deren alter Akku nachlässt' },
        ],
        vorlage: `Du bist E-Commerce-Texter. Schreibe eine Produktbeschreibung für: {produkt}.

Fakten (nur diese verwenden, nichts dazuerfinden):
"""
{fakten}
"""
Zielgruppe: {zielgruppe}

Aufbau:
1. Eine Überschrift mit dem wichtigsten Nutzen (höchstens 70 Zeichen).
2. Ein Absatz (3 Sätze): Für wen, welches Problem gelöst wird.
3. 5 Stichpunkte: Nutzen zuerst, dann das technische Detail dazu.
4. „Passt das zu mir?“: 3 typische Kundenfragen mit kurzer Antwort aus den Fakten.

Prüfe am Ende, ob jede Angabe durch die Fakten gedeckt ist, und markiere fehlende Infos, die ich ergänzen sollte.`,
        tools: ['systeme-io'],
    },
    {
        slug: 'kundenbewertung-antworten',
        title: 'Auf Kundenbewertungen antworten, auch auf schlechte',
        kategorie: 'shop',
        ziel: 'Professionelle, persönliche Antworten auf Bewertungen, die andere Interessenten überzeugen.',
        techniken: ['rolle', 'kontext', 'varianten'],
        felder: [
            { key: 'bewertung', label: 'Die Bewertung', beispiel: '2 Sterne. Lieferung hat 9 Tage gedauert, Ware ok, aber keine Info zum Versand.', mehrzeilig: true },
            { key: 'firma', label: 'Dein Unternehmen', beispiel: 'Onlineshop für Fahrradteile, kleines Team' },
        ],
        vorlage: `Du betreust die Kundenkommunikation für: {firma}.

Bewertung:
"""
{bewertung}
"""

Schreibe 3 Antwort-Varianten (sachlich, herzlich, kurz), je höchstens 80 Wörter.
Regeln: Kunden mit Namen ansprechen, falls vorhanden; konkret auf den Kritikpunkt eingehen; keine Ausreden; eine konkrete Verbesserung oder einen nächsten Schritt nennen; nichts versprechen, was ich nicht angegeben habe.`,
        tools: [],
    },
    {
        slug: 'produkt-faq',
        title: 'FAQ für die Produktseite',
        kategorie: 'shop',
        ziel: 'Häufige Kaufbedenken vorab beantworten, für Kunden, Google und KI-Antworten.',
        techniken: ['rolle', 'format', 'rueckfragen'],
        felder: [
            { key: 'produkt', label: 'Produkt', beispiel: 'Faltbares E-Bike mit 20-Zoll-Rädern' },
            { key: 'infos', label: 'Was du weißt (Daten, Versand, Garantie)', beispiel: '19 kg, Reichweite bis 60 km laut Hersteller, Versand in 2–3 Tagen, 30 Tage Rückgabe', mehrzeilig: true },
        ],
        vorlage: `Erstelle einen FAQ-Block für die Produktseite von: {produkt}.

Bekannte Infos:
"""
{infos}
"""

1. Sammle die 8 Fragen, die sich Käufer vor dem Kauf am häufigsten stellen (Passform, Nutzung, Versand, Rückgabe, Pflege).
2. Beantworte jede Frage in höchstens 2 Sätzen, nur mit den bekannten Infos.
3. Wo Infos fehlen, schreib „[ERGÄNZEN: …]“ statt zu raten.
Formuliere die Fragen so, wie Kunden sie bei Google oder ChatGPT eintippen würden.`,
        tools: [],
    },
    {
        slug: 'werbe-email-aktion',
        title: 'Werbe-Mail für eine Aktion',
        kategorie: 'shop',
        ziel: 'Eine Aktions-Mail mit Betreffzeilen, die klickt, ohne marktschreierisch zu sein.',
        techniken: ['rolle', 'format', 'varianten'],
        felder: [
            { key: 'aktion', label: 'Aktion', beispiel: '15 % auf alle Winterreifen bis Sonntag' },
            { key: 'zielgruppe', label: 'Empfänger', beispiel: 'Bestandskunden, die im letzten Jahr Reifen gekauft haben' },
        ],
        vorlage: `Du bist E-Mail-Marketer. Schreibe eine Werbe-Mail für folgende Aktion: {aktion}.
Empfänger: {zielgruppe}

Liefere:
1. 5 Betreffzeilen (höchstens 45 Zeichen) und 2 Vorschautexte (höchstens 90 Zeichen).
2. Die Mail: persönlicher Einstieg, Nutzen der Aktion, klare Frist, ein Button-Text, kurzer Abschluss. Höchstens 120 Wörter.
Regeln: keine Großbuchstaben-Wörter, höchstens ein Ausrufezeichen, keine erfundenen Zusatzrabatte.`,
        tools: ['brevo', 'kit'],
    },
    {
        slug: 'anschreiben-bewerbung',
        title: 'Anschreiben für die Bewerbung',
        kategorie: 'karriere',
        ziel: 'Ein Anschreiben, das zur Stelle passt und nicht nach Vorlage klingt.',
        techniken: ['rolle', 'kontext', 'rueckfragen', 'kritik'],
        felder: [
            { key: 'stelle', label: 'Stellenanzeige (wichtigste Punkte)', beispiel: 'Online-Marketing-Manager (m/w/d), SEO, Google Ads, Teamarbeit, Hamburg', mehrzeilig: true },
            { key: 'erfahrung', label: 'Deine passende Erfahrung', beispiel: '4 Jahre SEO im Onlineshop, organischen Umsatz um 40 % gesteigert, Google-Ads-Zertifikat', mehrzeilig: true },
        ],
        vorlage: `Du bist erfahrener Karriereberater. Schreibe ein Anschreiben für diese Stelle:
"""
{stelle}
"""

Meine Erfahrung:
"""
{erfahrung}
"""

Stell mir zuerst bis zu 3 Rückfragen, falls etwas Wichtiges fehlt. Danach:
- Einstieg ohne „hiermit bewerbe ich mich“, sondern mit einem konkreten Bezug zur Firma oder Aufgabe.
- 2 Absätze, die je eine Anforderung mit einem Ergebnis aus meiner Erfahrung belegen.
- Schluss mit Gesprächswunsch. Höchstens 250 Wörter, Sie-Form.
Erfinde keine Erfolge oder Zahlen. Prüfe zum Schluss auf Floskeln und streiche sie.`,
        tools: [],
    },
    {
        slug: 'lebenslauf-optimieren',
        title: 'Lebenslauf auf eine Stelle zuschneiden',
        kategorie: 'karriere',
        ziel: 'Stichpunkte im Lebenslauf so umformulieren, dass sie zur Stellenanzeige passen und Ergebnisse zeigen.',
        techniken: ['rolle', 'format', 'kritik'],
        felder: [
            { key: 'lebenslauf', label: 'Stichpunkte aus deinem Lebenslauf', beispiel: '- Betreuung Social Media\n- Erstellung von Newslettern\n- Zusammenarbeit mit Agenturen', mehrzeilig: true },
            { key: 'stelle', label: 'Zielstelle', beispiel: 'Content Marketing Manager in einem SaaS-Unternehmen' },
        ],
        vorlage: `Du bist Recruiter für die Stelle: {stelle}.

Hier sind Stichpunkte aus meinem Lebenslauf:
"""
{lebenslauf}
"""

Formuliere jeden Stichpunkt neu: starkes Verb am Anfang, was ich gemacht habe, mit welchem Ergebnis. Wo ein Ergebnis fehlt, setze „[ZAHL/ERGEBNIS ERGÄNZEN]“ statt etwas zu erfinden.
Ausgabe als Tabelle: Original | Neu | Warum besser.
Nenne danach 3 Schlüsselbegriffe aus der Zielstelle, die im Lebenslauf noch fehlen.`,
        tools: [],
    },
    {
        slug: 'vorstellungsgespraech-training',
        title: 'Vorstellungsgespräch üben',
        kategorie: 'karriere',
        ziel: 'Ein realistisches Probe-Interview mit Feedback nach jeder Antwort.',
        techniken: ['rolle', 'schritte', 'rueckfragen'],
        felder: [
            { key: 'stelle', label: 'Stelle', beispiel: 'Projektmanager in einer Digitalagentur' },
            { key: 'level', label: 'Schwierigkeit', beispiel: 'anspruchsvoll, mit kritischen Nachfragen' },
        ],
        vorlage: `Du führst mit mir ein Vorstellungsgespräch für die Stelle {stelle}. Schwierigkeit: {level}.

Ablauf:
1. Stell immer nur eine Frage und warte auf meine Antwort.
2. Gib nach jeder Antwort kurzes Feedback: was gut war, was fehlt, wie eine stärkere Antwort klingen würde (höchstens 4 Sätze).
3. Mische Fragen zu Motivation, Erfahrung, Fallbeispielen und eine Stressfrage.
4. Nach 6 Fragen: Gesamtauswertung mit 3 Stärken und 3 konkreten Verbesserungen.

Beginne mit der ersten Frage.`,
        tools: [],
    },
    {
        slug: 'linkedin-profil',
        title: 'LinkedIn-Überschrift und Info-Text',
        kategorie: 'karriere',
        ziel: 'Ein Profil, das in Sekunden klar macht, wofür du stehst, und gefunden wird.',
        techniken: ['rolle', 'varianten', 'format'],
        felder: [
            { key: 'rolle', label: 'Deine Rolle', beispiel: 'SEO-Manager im E-Commerce' },
            { key: 'staerken', label: 'Stärken und Ergebnisse', beispiel: 'technisches SEO, Content-Strategie, KI-Workflows; organische Umsätze verdoppelt', mehrzeilig: true },
        ],
        vorlage: `Du bist Personal-Branding-Berater. Meine Rolle: {rolle}.
Stärken und Ergebnisse:
"""
{staerken}
"""

Liefere:
1. 5 Varianten für die LinkedIn-Überschrift (höchstens 220 Zeichen), mit Suchbegriffen, die Recruiter eintippen.
2. Einen Info-Text (höchstens 200 Wörter): Einstieg mit Haltung, was ich mache, für wen, 2 belegte Ergebnisse, Abschluss mit Kontaktanlass.
Ich-Form, keine Buzzwords wie „passioniert“ oder „Game-Changer“, nichts erfinden.`,
        tools: [],
    },
    {
        slug: 'lernplan',
        title: 'Lernplan für ein neues Thema',
        kategorie: 'lernen',
        ziel: 'Ein realistischer Plan mit Etappen, Übungen und Selbsttests statt endlosem Lesen.',
        techniken: ['rolle', 'kontext', 'schritte', 'format'],
        felder: [
            { key: 'thema', label: 'Was willst du lernen?', beispiel: 'Python für Datenanalyse' },
            { key: 'zeit', label: 'Wie viel Zeit hast du?', beispiel: '30 Minuten pro Tag, 6 Wochen' },
            { key: 'stand', label: 'Dein Vorwissen', beispiel: 'Excel gut, Programmieren gar nicht' },
        ],
        vorlage: `Du bist erfahrener Lerncoach. Erstelle einen Lernplan für: {thema}.
Zeit: {zeit}. Vorwissen: {stand}.

Format als Tabelle: Woche | Lernziel | Übungen (konkret) | Selbsttest am Ende der Woche.
Regeln: kleine Etappen, jede Woche ein praktisches Mini-Projekt, Wiederholung eingeplant.
Nenne zum Schluss die 3 häufigsten Anfängerfehler bei diesem Thema und wie ich sie vermeide.`,
        tools: [],
    },
    {
        slug: 'einfach-erklaeren',
        title: 'Erklär es mir, als wäre ich 12',
        kategorie: 'lernen',
        ziel: 'Komplizierte Themen in klarer Sprache verstehen, mit Beispiel und Verständnisfrage.',
        techniken: ['rolle', 'beispiele', 'rueckfragen'],
        felder: [{ key: 'thema', label: 'Was willst du verstehen?', beispiel: 'Wie funktioniert ein Sprachmodell wie ChatGPT?' }],
        vorlage: `Erkläre mir: {thema}

So, dass es eine 12-Jährige versteht:
1. Eine Erklärung in höchstens 5 kurzen Sätzen, ohne Fachwörter.
2. Ein Vergleich aus dem Alltag.
3. Die 3 wichtigsten Fachbegriffe, jeweils in einem Satz erklärt.
4. Eine Frage an mich, mit der ich prüfen kann, ob ich es verstanden habe. Warte auf meine Antwort und gib mir Feedback.`,
        tools: [],
    },
    {
        slug: 'karteikarten',
        title: 'Karteikarten aus deinen Unterlagen',
        kategorie: 'lernen',
        ziel: 'Aus Notizen oder einem Text Karteikarten für Anki, Quizlet oder Papier machen.',
        techniken: ['format', 'kritik'],
        felder: [{ key: 'text', label: 'Dein Lernstoff', beispiel: 'Kapitel 3: Die Photosynthese wandelt Lichtenergie in chemische Energie um …', mehrzeilig: true }],
        vorlage: `Erstelle Karteikarten aus diesem Lernstoff:
"""
{text}
"""

Regeln:
- Eine Frage pro Karte, eine kurze Antwort (höchstens 2 Sätze).
- Mischung aus Begriffs-, Verständnis- und Anwendungsfragen.
- Nur Inhalte aus dem Text, nichts ergänzen.
Ausgabe als Tabelle mit den Spalten Frage | Antwort, darunter dieselben Karten als CSV (Semikolon), damit ich sie importieren kann.`,
        tools: [],
    },
    {
        slug: 'quiz-erstellen',
        title: 'Quiz zum Thema erstellen',
        kategorie: 'lernen',
        ziel: 'Ein Multiple-Choice-Quiz zum Lernen, für Schulungen oder für Social Media.',
        techniken: ['format', 'varianten', 'kritik'],
        felder: [
            { key: 'thema', label: 'Thema', beispiel: 'Datenschutz-Grundlagen für neue Mitarbeitende' },
            { key: 'niveau', label: 'Niveau', beispiel: 'Einsteiger' },
        ],
        vorlage: `Erstelle ein Quiz mit 10 Fragen zum Thema {thema} für das Niveau {niveau}.

Jede Frage mit 4 Antwortmöglichkeiten, genau eine richtig, plausible falsche Antworten.
Nach jeder Frage: die richtige Antwort und eine Erklärung in einem Satz.
Prüfe zum Schluss, ob alle Fakten stimmen, und markiere Fragen, bei denen du dir nicht sicher bist.`,
        tools: ['typeform', 'tally'],
    },
    {
        slug: 'excel-formel',
        title: 'Excel- oder Google-Sheets-Formel bauen',
        kategorie: 'technik',
        ziel: 'Die passende Formel für deine Tabelle, mit Erklärung und Fehlerfällen.',
        techniken: ['rolle', 'kontext', 'schritte'],
        felder: [
            { key: 'aufbau', label: 'Wie ist deine Tabelle aufgebaut?', beispiel: 'Spalte A Datum, B Produkt, C Menge, D Preis; 500 Zeilen' },
            { key: 'ziel', label: 'Was soll die Formel ausrechnen?', beispiel: 'Umsatz pro Produkt im aktuellen Monat' },
            { key: 'programm', label: 'Programm', beispiel: 'Google Sheets, deutsche Spracheinstellung' },
        ],
        vorlage: `Du bist Tabellen-Experte. Programm: {programm}.
Tabellenaufbau: {aufbau}
Ziel: {ziel}

1. Gib mir die Formel (achte auf Funktionsnamen und Trennzeichen für die angegebene Sprache).
2. Erkläre Schritt für Schritt, was jeder Teil macht.
3. Nenne 2 Fehlerfälle (z. B. leere Zellen) und wie die Formel damit umgeht oder wie ich sie absichere.`,
        tools: [],
    },
    {
        slug: 'code-erklaeren',
        title: 'Code erklären lassen',
        kategorie: 'technik',
        ziel: 'Fremden Code verstehen: Zweck, Ablauf, Risiken und Verbesserungen.',
        techniken: ['rolle', 'schritte', 'format'],
        felder: [
            { key: 'code', label: 'Der Code', beispiel: 'const total = items.reduce((s, i) => s + i.price * i.qty, 0)', mehrzeilig: true },
            { key: 'niveau', label: 'Dein Niveau', beispiel: 'Anfänger' },
        ],
        vorlage: `Du bist geduldiger Senior-Entwickler. Erkläre mir diesen Code für das Niveau {niveau}:
"""
{code}
"""

1. Zweck in einem Satz.
2. Ablauf Schritt für Schritt.
3. Mögliche Fehler oder Risiken (z. B. leere Eingaben, Sicherheit).
4. Eine verbesserte Fassung mit Kommentaren, falls sinnvoll.`,
        tools: [],
    },
    {
        slug: 'regex-bauen',
        title: 'Regulären Ausdruck (Regex) bauen',
        kategorie: 'technik',
        ziel: 'Ein Regex für Textsuche oder Validierung, mit Testfällen statt Rätselraten.',
        techniken: ['rolle', 'beispiele', 'kritik'],
        felder: [
            { key: 'muster', label: 'Was soll gefunden oder geprüft werden?', beispiel: 'deutsche Postleitzahlen (5 Ziffern)' },
            { key: 'umgebung', label: 'Wo nutzt du ihn?', beispiel: 'JavaScript' },
        ],
        vorlage: `Baue einen regulären Ausdruck für: {muster}. Umgebung: {umgebung}.

1. Der Ausdruck.
2. Erklärung jedes Teils.
3. 5 Beispiele, die passen sollen, und 5, die nicht passen sollen, jeweils mit Ergebnis.
4. Prüfe die Beispiele gegen den Ausdruck und korrigiere ihn, falls ein Beispiel falsch erkannt würde.`,
        tools: [],
    },
    {
        slug: 'angebot-schreiben',
        title: 'Angebot an einen Kunden schreiben',
        kategorie: 'business',
        ziel: 'Ein klares Angebot mit Leistung, Preis und nächstem Schritt.',
        techniken: ['rolle', 'kontext', 'format'],
        felder: [
            { key: 'kunde', label: 'Kunde und Anliegen', beispiel: 'Zahnarztpraxis möchte neue Website mit Online-Terminbuchung' },
            { key: 'leistung', label: 'Deine Leistung und Preis', beispiel: 'Website mit 6 Seiten, Terminbuchung, SEO-Grundlagen; 4.800 € netto, Umsetzung in 6 Wochen', mehrzeilig: true },
        ],
        vorlage: `Du bist erfahrener Berater. Schreibe ein Angebot.
Kunde und Anliegen: {kunde}
Leistung und Preis:
"""
{leistung}
"""

Aufbau: Ausgangslage in 2 Sätzen (in den Worten des Kunden), Ziel, Leistungsumfang als Liste, was nicht enthalten ist, Preis und Zahlungsbedingungen, Zeitplan, nächster Schritt.
Sie-Form, sachlich und freundlich. Nur angegebene Preise und Leistungen verwenden.`,
        tools: [],
    },
    {
        slug: 'heikle-email',
        title: 'Heikle E-Mail diplomatisch formulieren',
        kategorie: 'business',
        ziel: 'Kritik, Absagen oder Mahnungen klar und freundlich schreiben, ohne die Beziehung zu beschädigen.',
        techniken: ['rolle', 'varianten', 'kritik'],
        felder: [
            { key: 'situation', label: 'Worum geht es?', beispiel: 'Kunde hat zum dritten Mal eine Rechnung nicht bezahlt, ist aber ein wichtiger Kunde' },
            { key: 'entwurf', label: 'Dein Entwurf (optional)', beispiel: 'Hallo, so geht das nicht weiter …', mehrzeilig: true },
        ],
        vorlage: `Hilf mir bei einer heiklen E-Mail. Situation: {situation}

Mein Entwurf (falls vorhanden):
"""
{entwurf}
"""

Schreibe 2 Varianten (sehr diplomatisch, freundlich-bestimmt), je höchstens 120 Wörter: klares Anliegen im ersten Absatz, Verständnis zeigen, konkreter nächster Schritt mit Frist.
Prüfe danach jede Variante: Gibt es Sätze, die vorwurfsvoll oder missverständlich wirken? Verbessere sie.`,
        tools: [],
    },
    {
        slug: 'bild-prompt-generator',
        title: 'Bild-Prompt für Midjourney, DALL·E & Co.',
        kategorie: 'content',
        ziel: 'Aus einer Bildidee einen präzisen Prompt mit Motiv, Stil, Licht, Kamera und Format machen.',
        techniken: ['rolle', 'format', 'varianten'],
        felder: [
            { key: 'idee', label: 'Deine Bildidee', beispiel: 'Ein Motorrad auf einer Landstraße für ein Blog-Titelbild' },
            { key: 'verwendung', label: 'Wofür wird das Bild genutzt?', beispiel: 'Blog-Header mit Platz für Text, 16:9' },
        ],
        vorlage: `Du bist Experte für Bild-Prompts. Meine Idee: {idee}. Verwendung: {verwendung}.

Schreibe 3 Prompt-Varianten (Fotografie, Illustration, 3D-Render), jede mit: Motiv (konkret), Stil, Licht, Kameraperspektive, Komposition (inklusive Platz für Text, falls nötig) und Seitenverhältnis. Höchstens 50 Wörter pro Prompt, auf Englisch, weil viele Bildgeneratoren damit präziser arbeiten.
Erkläre danach in einem Satz je Variante, wann sie am besten passt.`,
        tools: ['canva'],
    },
]

const fill = (template, values) => template.replace(/\{(\w+)\}/g, (m, key) => (values[key] ? values[key] : `[${key.toUpperCase()}]`))

// Beispiel-Fassung: alle Felder mit den Beispielwerten gefüllt. Dient als Vorschau und für llms.txt.
export const examplePrompt = (p) => fill(p.vorlage, Object.fromEntries(p.felder.map((f) => [f.key, f.beispiel])))
export const fillPrompt = fill

export const getPrompts = () => PROMPTS
export const getPrompt = (slug) => PROMPTS.find((p) => p.slug === slug) || null
export const promptsByKategorie = () =>
    Object.entries(PROMPT_KATEGORIEN).map(([key, k]) => ({ key, ...k, prompts: PROMPTS.filter((p) => p.kategorie === key) }))
