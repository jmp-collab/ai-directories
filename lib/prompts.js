// Prompt-Bibliothek. Jeder Prompt ist eine Vorlage mit Feldern in geschweiften Klammern ({thema}).
// Die Seite füllt die Felder aus, zeigt die Vorschau und schickt das Ergebnis an ChatGPT, Claude und Co.
// tools: passende Werkzeuge aus db/tools.json (gleiche slugs), damit jede Prompt-Seite Partnerlinks tragen kann.

export const PROMPT_KATEGORIEN = {
    seo: { name: 'SEO', icon: 'lupe' },
    content: { name: 'Content & Text', icon: 'post' },
    video: { name: 'Video & YouTube', icon: 'play' },
    launch: { name: 'Launch & Marketing', icon: 'rakete' },
    business: { name: 'Business & Arbeit', icon: 'werkzeug' },
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
]

const fill = (template, values) => template.replace(/\{(\w+)\}/g, (m, key) => (values[key] ? values[key] : `[${key.toUpperCase()}]`))

// Beispiel-Fassung: alle Felder mit den Beispielwerten gefüllt. Dient als Vorschau und für llms.txt.
export const examplePrompt = (p) => fill(p.vorlage, Object.fromEntries(p.felder.map((f) => [f.key, f.beispiel])))
export const fillPrompt = fill

export const getPrompts = () => PROMPTS
export const getPrompt = (slug) => PROMPTS.find((p) => p.slug === slug) || null
export const promptsByKategorie = () =>
    Object.entries(PROMPT_KATEGORIEN).map(([key, k]) => ({ key, ...k, prompts: PROMPTS.filter((p) => p.kategorie === key) }))
