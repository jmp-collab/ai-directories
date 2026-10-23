// Tool-Vergleiche. Empfehlungen stützen sich nur auf die Angaben in db/tools.json (laut Anbieter);
// pro Anwendungsfall genau ein Tool, mit Begründung aus diesen Daten.
import { getTool } from './tools'

const COMPARISONS = [
    {
        slug: 'make-vs-zapier-vs-n8n',
        title: 'Make vs. Zapier vs. n8n',
        topic: 'Automatisierung',
        tools: ['make', 'zapier', 'n8n'],
        intro: 'Drei Wege, Apps und KI-Agenten zu verbinden: visuell und günstig, maximal einfach oder selbst gehostet.',
        picks: [
            ['Du willst Apps schnell verbinden, ohne Technik', 'zapier', 'Laut Anbieter für Nicht-Techniker gemacht und mit Tausenden Apps verbunden.'],
            ['Deine Abläufe haben viele Verzweigungen', 'make', 'Visueller Editor für komplexe Workflows, bezahlt ab $9 im Monat.'],
            ['Daten sollen auf deinem eigenen Server bleiben', 'n8n', 'Die Community Edition ist selbst gehostet kostenlos.'],
        ],
    },
    {
        slug: 'semrush-vs-se-ranking-vs-surfer-seo',
        title: 'Semrush vs. SE Ranking vs. Surfer SEO',
        topic: 'SEO',
        tools: ['semrush', 'se-ranking', 'surfer-seo'],
        intro: 'Komplettpaket, Budget-Allrounder oder Content-Spezialist: drei SEO-Werkzeuge für unterschiedliche Aufgaben.',
        picks: [
            ['Du brauchst alles aus einer Hand', 'semrush', 'Keyword-Recherche, Wettbewerbsanalyse, Position Tracking und Site Audit in einer Plattform.'],
            ['Du hast ein kleines Budget', 'se-ranking', 'Rank Tracker, Audit und Backlinks ab $52 im Monat (jährlich).'],
            ['Du schreibst Artikel und Landingpages', 'surfer-seo', 'Spezialisiert auf das Erstellen und Optimieren von Content für Google und KI-Suche.'],
        ],
    },
    {
        slug: 'beehiiv-vs-kit-vs-getresponse-vs-brevo',
        title: 'beehiiv vs. Kit vs. GetResponse vs. Brevo',
        topic: 'Newsletter',
        tools: ['beehiiv', 'kit', 'getresponse', 'brevo'],
        intro: 'Vier Newsletter- und E-Mail-Tools, alle mit Gratis-Tarif. Der Unterschied liegt darin, womit du Geld verdienen willst.',
        picks: [
            ['Der Newsletter soll selbst Geld bringen', 'beehiiv', 'Paid Subscriptions und ein eigenes Werbenetzwerk sind eingebaut.'],
            ['Du verkaufst digitale Produkte', 'kit', 'E-Mail-Marketing für Creator mit Verkauf digitaler Produkte.'],
            ['Du brauchst Webinare oder Kurse dazu', 'getresponse', 'Landingpages, Webinare und Onlinekurse in einem Tool, Oberfläche auf Deutsch.'],
            ['Du verschickst auch SMS oder Transaktionsmails', 'brevo', 'E-Mail, SMS und Transaktionsmails, bezahlt ab 7 € im Monat, Oberfläche auf Deutsch.'],
        ],
    },
    {
        slug: 'framer-vs-webflow-vs-hostinger',
        title: 'Framer vs. Webflow vs. Hostinger Website Builder',
        topic: 'Website & Landingpage',
        tools: ['framer', 'webflow', 'hostinger-website-builder'],
        intro: 'Die Launch-Seite für dein Tool: Design-Freiheit, professionelles CMS oder alles inklusive zum kleinen Preis.',
        picks: [
            ['Du willst eine schöne Launch-Seite ohne Entwickler', 'framer', 'Design-Editor mit CMS und Hosting, bezahlt ab $10 im Monat (jährlich).'],
            ['Du planst Blog, Docs und viele Seiten', 'webflow', 'Visuelle Webentwicklung mit CMS und Lokalisierung für professionelle Websites.'],
            ['Hosting, Domain und Postfach sollen dabei sein', 'hostinger-website-builder', 'Website-Builder mit Hosting, Domain und E-Mail; Achtung: Der Einstiegspreis gilt nur bei 48 Monaten Vorauszahlung.'],
        ],
    },
    {
        slug: 'synthesia-vs-heygen-vs-invideo-vs-pictory',
        title: 'Synthesia vs. HeyGen vs. InVideo vs. Pictory',
        topic: 'KI-Video',
        tools: ['synthesia', 'heygen', 'invideo-ai', 'pictory'],
        intro: 'Demo-Video, Erklärvideo oder Social Clip: vier KI-Videotools mit unterschiedlichen Stärken.',
        picks: [
            ['Du drehst Schulungs- und Erklärvideos', 'synthesia', 'KI-Avatare, Dubbing und interaktive Elemente, mit Gratis-Tarif.'],
            ['Dein Video soll in andere Sprachen', 'heygen', 'Avatare, Voice Cloning und Videoübersetzung.'],
            ['Du machst viele Clips für Social Media', 'invideo-ai', 'Agenten und generative Video- und Bildmodelle mit Timeline-Editor.'],
            ['Aus Blogartikeln sollen Videos werden', 'pictory', 'Macht aus Skripten, URLs oder Präsentationen Videos mit Stockmaterial und Untertiteln.'],
        ],
    },
    {
        slug: 'claude-vs-perplexity',
        title: 'Claude vs. Perplexity',
        topic: 'KI-Chat & Recherche',
        tools: ['claude', 'perplexity'],
        intro: 'Assistent oder Suchmaschine? Beide kosten im Jahresabo gleich viel, lösen aber unterschiedliche Aufgaben.',
        picks: [
            ['Du schreibst, analysierst oder programmierst', 'claude', 'Assistent für Texte, Analyse und Code; Pro mit Projekten, Research und Claude Code.'],
            ['Du brauchst Antworten mit nachprüfbaren Quellen', 'perplexity', 'KI-Suchmaschine, die Antworten aus dem Web samt Quellen liefert.'],
            ['Du willst verschiedene Modelle ausprobieren', 'perplexity', 'Pro erlaubt die Auswahl zwischen Modellen verschiedener Anbieter.'],
        ],
    },
    {
        slug: 'elevenlabs-vs-murf',
        title: 'ElevenLabs vs. Murf',
        topic: 'KI-Stimmen',
        tools: ['elevenlabs', 'murf'],
        intro: 'Zwei KI-Voice-Plattformen für Voiceover, Dubbing und Sprachausgabe im Vergleich.',
        picks: [
            ['Du willst kostenlos starten', 'elevenlabs', 'Gratis-Tarif vorhanden, bezahlt ab $5 im Monat (jährlich).'],
            ['Du brauchst Stimmen klonen, Soundeffekte oder Musik', 'elevenlabs', 'Text-to-Speech, Voice Cloning, Dubbing, Soundeffekte und Musik auf einer Plattform.'],
            ['Du vertonst E-Learning und Präsentationen', 'murf', 'Laut Anbieter für Voiceovers in E-Learning, Präsentationen und Videos gemacht, mit Text-to-Speech-Studio.'],
        ],
    },
    {
        slug: 'tally-vs-typeform',
        title: 'Tally vs. Typeform',
        topic: 'Formulare',
        tools: ['tally', 'typeform'],
        intro: 'Formular-Builder für Leads, Umfragen und Anmeldungen: großzügig kostenlos oder stark in Interaktion und Analyse.',
        picks: [
            ['Du willst viel kostenlos', 'tally', 'Unbegrenzte Formulare und Antworten kostenlos, inklusive Logik und Zahlungen.'],
            ['Du brauchst interaktive Quizze und Analysen', 'typeform', 'Interaktive KI-Formulare, Umfragen und Quizze mit Logik und Analysen.'],
            ['Dein Budget ist klein, aber du brauchst Pro-Funktionen', 'tally', 'Pro ab $24 im Monat (jährlich), Typeform Basic ab $28.'],
        ],
    },
    {
        slug: 'descript-vs-pictory',
        title: 'Descript vs. Pictory',
        topic: 'KI-Video',
        tools: ['descript', 'pictory'],
        intro: 'Eigene Aufnahmen schneiden oder aus Text ein Video bauen: zwei Ansätze für Video-Content.',
        picks: [
            ['Du schneidest Podcasts und eigene Videos', 'descript', 'Textbasierter Video- und Podcast-Editor mit Studio Sound und Clip-Erstellung.'],
            ['Du willst Blogartikel in Videos verwandeln', 'pictory', 'Erstellt Videos aus Skripten, URLs oder Präsentationen mit Stockmaterial, KI-Stimmen und Untertiteln.'],
            ['Du willst erst gratis testen', 'descript', 'Gratis-Tarif vorhanden; Pictory bietet 14 Tage Testphase.'],
        ],
    },
    {
        slug: 'gamma-vs-canva',
        title: 'Gamma vs. Canva',
        topic: 'Präsentation & Design',
        tools: ['gamma', 'canva'],
        intro: 'Präsentation aus einem Prompt oder volle Design-Freiheit mit Vorlagen: zwei Wege zu schönen Folien.',
        picks: [
            ['Die Präsentation soll aus einem Prompt entstehen', 'gamma', 'Erstellt Präsentationen, Dokumente und Websites aus einem Prompt, Export nach PDF, PPTX und Google Slides.'],
            ['Du gestaltest auch Social Posts, Videos und Markenmaterial', 'canva', 'Designplattform mit Vorlagen, Stockmedien, Brand Kits und KI-Tools, Oberfläche auf Deutsch.'],
            ['Du willst den günstigsten Einstieg', 'gamma', 'Gratis-Tarif mit 400 Credits, Plus ab $9 im Monat (jährlich).'],
        ],
    },
    {
        slug: 'rytr-vs-writesonic',
        title: 'Rytr vs. Writesonic',
        topic: 'KI-Texte & SEO',
        tools: ['rytr', 'writesonic'],
        intro: 'Günstiger Schreibassistent oder SEO-Plattform mit KI-Sichtbarkeit: zwei sehr unterschiedliche Preisklassen.',
        picks: [
            ['Du brauchst regelmäßig kurze Texte mit kleinem Budget', 'rytr', 'Über 40 Anwendungsfälle, Gratis-Tarif mit 10.000 Zeichen, Lite ab $9.'],
            ['Du willst Sichtbarkeit in ChatGPT und Gemini messen', 'writesonic', 'Plattform für SEO und KI-Sichtbarkeit (GEO) mit Tracking in ChatGPT und Gemini.'],
            ['Du schreibst in vielen Sprachen', 'rytr', 'Laut Anbieter mehr als 30 Sprachen.'],
        ],
    },
]

const withTools = (c) => ({ ...c, items: c.tools.map(getTool).filter(Boolean) })

export const getComparisons = () => COMPARISONS.map(withTools)
export const getComparison = (slug) => {
    const c = COMPARISONS.find((x) => x.slug === slug)
    return c ? withTools(c) : null
}
export const comparisonsForTool = (toolSlug) => COMPARISONS.filter((c) => c.tools.includes(toolSlug))
