// Skills für alle LLMs: Inhalte liegen als SKILL.md unter skills/, npm run skills baut daraus db/skills.json und die ZIPs.
// Hier stehen nur Anzeige-Daten und Verknüpfungen zu Prompts, Tools und Ratgebern.
import DATEN from '../db/skills.json'

export const SKILLS_REPO = 'jmp-collab/ai-directories'
export const SKILLS_REPO_URL = `https://github.com/${SKILLS_REPO}/tree/main/skills`
export const SKILLS_QUELLE = { name: 'marketingskills von Corey Haines', url: 'https://github.com/coreyhaines31/marketingskills', lizenz: 'MIT' }

export const SKILL_KATEGORIEN = {
    seo: ['🔎', 'SEO und Sichtbarkeit'],
    texte: ['✍️', 'Texte und Content'],
    wachstum: ['🚀', 'Launch und Wachstum'],
    vertrieb: ['💶', 'Vertrieb und Preise'],
}

// slug: [Kategorie, Emoji, kurzer Nutzen, Prompts, Tools, Ratgeber/Seiten]
export const SKILL_META = {
    'seo-audit': ['seo', '🩺', 'Findet technische und inhaltliche SEO-Probleme und sortiert sie nach Wirkung.', ['meta-title-description', 'content-refresh', 'interne-verlinkung'], ['semrush', 'se-ranking', 'surfer-seo'], ['/ratgeber/backlinks-ki-verzeichnisse-seo']],
    'ki-sichtbarkeit': ['seo', '🤖', 'Macht Seiten fit dafür, in ChatGPT, Perplexity und Googles KI-Antworten genannt zu werden.', ['faq-aus-suchfragen', 'meta-title-description'], ['perplexity', 'chatgpt', 'semrush'], ['/ratgeber/sichtbar-in-ki-antworten-werbung-seo']],
    'strukturierte-daten': ['seo', '🧱', 'Erstellt gültiges JSON-LD nach schema.org für Produkte, FAQ, Artikel und Firmen.', ['faq-aus-suchfragen', 'produkt-faq'], ['semrush'], ['/ratgeber/sichtbar-in-ki-antworten-werbung-seo']],
    'verzeichnis-eintraege': ['seo', '📇', 'Plant Einträge in KI- und Branchenverzeichnissen und schreibt die Beschreibungen.', ['verzeichnis-beschreibungen', 'product-hunt-launch'], [], ['/ratgeber/ki-tool-eintragen-anleitung', '/top-50']],
    werbetexte: ['texte', '📣', 'Schreibt Landingpages, Startseiten und Anzeigen, die verkaufen, ohne Floskeln.', ['landingpage-texte', 'preisseite-texte', 'chatgpt-anzeige-texten'], ['jasper', 'writesonic'], ['/ratgeber/sichtbar-in-ki-antworten-werbung-seo']],
    'texte-lektorieren': ['texte', '🖍️', 'Prüft und verbessert bestehende Texte in mehreren Durchgängen, von Klarheit bis Rechtschreibung.', ['text-entkitschen', 'prompt-verbessern'], ['grammarly', 'wordtune', 'deepl'], ['/tutorials/ki-texte-menschlich-ueberarbeiten']],
    'content-strategie': ['texte', '🗺️', 'Baut Themencluster, Redaktionsplan und Prioritäten für Blog und Ratgeber.', ['keyword-cluster', 'content-briefing', 'blogartikel-gliederung'], ['semrush', 'surfer-seo'], ['/tutorials/prompt-kette-vom-thema-zum-artikel']],
    'social-media-posts': ['texte', '📱', 'Plant und schreibt Posts für LinkedIn, Instagram und Co. im passenden Ton pro Kanal.', ['linkedin-post', 'instagram-caption', 'social-media-redaktionsplan'], ['canva'], ['/ki-tools/fuer/content-creator']],
    'produkt-launch': ['wachstum', '🚀', 'Plant einen Produktstart in Phasen, mit Kanälen, Texten und Checklisten.', ['product-hunt-launch', 'pressemitteilung'], ['beehiiv', 'kit'], ['/ratgeber/ki-tool-launchen-30-tage', '/launch-kit']],
    'lead-magnet': ['wachstum', '🧲', 'Entwickelt Lead-Magnete mit Double-Opt-in und Nachfass-Mails, DSGVO-bewusst.', ['werbe-email-aktion', 'newsletter-betreffzeilen'], ['beehiiv', 'kit', 'brevo'], ['/ratgeber/newsletter-anbieter-fuer-gruender']],
    'kaltakquise-email': ['vertrieb', '✉️', 'Prüft zuerst, ob eine Akquise-Mail nach UWG zulässig ist, und schreibt dann nur passende Texte.', ['heikle-email', 'email-antwort'], ['brevo'], ['/ratgeber/ki-tools-datenschutz-dsgvo']],
    preisgestaltung: ['vertrieb', '🏷️', 'Hilft bei Preismodell, Paketen und Preisseite, mit Blick auf die Preisangabenverordnung.', ['preisseite-texte', 'angebot-schreiben'], [], ['/rechner/abo-monatlich-oder-jaehrlich']],
}

const ORDNUNG = Object.keys(SKILL_META)
export const getSkills = () =>
    DATEN.skills
        .filter((s) => SKILL_META[s.name])
        .map((s) => {
            const [kategorie, emoji, nutzen, prompts, tools, seiten] = SKILL_META[s.name]
            return { ...s, kategorie, emoji, nutzen, prompts, tools, seiten }
        })
        .sort((a, b) => ORDNUNG.indexOf(a.name) - ORDNUNG.indexOf(b.name))
export const getSkill = (name) => getSkills().find((s) => s.name === name) || null

// Installationswege mit offiziellen Anleitungen der Anbieter.
export const installBefehle = (name) => ({
    npx: `npx skills add ${SKILLS_REPO} --skill ${name}`,
    gh: `gh skill install ${SKILLS_REPO} ${name}`,
})
export const ALLE_BEFEHL = `npx skills add ${SKILLS_REPO}`
export const PLATTFORMEN = [
    {
        id: 'claude',
        name: 'Claude (claude.ai und Desktop)',
        weg: 'zip',
        schritte: ['ZIP herunterladen.', 'In Claude unter Einstellungen, Funktionen „Code-Ausführung und Dateierstellung“ einschalten.', 'Customize, Skills öffnen, auf „+“ und dann „Create skill“, „Upload a skill“ klicken.', 'ZIP auswählen, fertig. Der Skill erscheint in der Liste und lässt sich an- und ausschalten.'],
        quelle: 'https://support.claude.com/en/articles/12512180-use-skills-in-claude',
    },
    {
        id: 'chatgpt',
        name: 'ChatGPT',
        weg: 'zip',
        schritte: ['ZIP herunterladen.', 'In der Seitenleiste „Plugins“ öffnen, dann den Reiter „Skills“.', '„Create“ und „Upload from your computer“ wählen, ZIP hochladen.', 'ChatGPT prüft den Skill kurz, danach kannst du ihn mit @ aufrufen oder automatisch nutzen lassen.'],
        quelle: 'https://help.openai.com/en/articles/20001066-skills-in-chatgpt',
    },
    {
        id: 'gemini',
        name: 'Gemini (gemini.google.com)',
        weg: 'zip',
        schritte: ['ZIP herunterladen.', 'Auf gemini.google.com in der Seitenleiste „Customize“, dann oben „Skills“ öffnen.', '„Create“ und „Upload“ wählen, ZIP oder SKILL.md auswählen.', 'Skill prüfen und oben auf „Create“ klicken. Voraussetzung laut Google: ab 18 und Keep Activity an.'],
        quelle: 'https://support.google.com/gemini/answer/17094296',
    },
    {
        id: 'code',
        name: 'Claude Code, Codex, Cursor, GitHub Copilot und über 40 weitere Coding-Agenten',
        weg: 'befehl',
        schritte: ['Im Terminal im Projektordner einen der beiden Befehle ausführen.', 'Beim npx-Befehl wählst du die Agenten aus, mit -g installierst du für alle Projekte.', 'Danach den Agenten neu starten, falls er den Skill nicht sofort findet.'],
        quelle: 'https://cli.github.com/manual/gh_skill_install',
    },
    {
        id: 'andere',
        name: 'Alle anderen LLMs (Mistral Le Chat, DeepSeek, Copilot-Chat, Perplexity und Co.)',
        weg: 'kopieren',
        schritte: ['SKILL.md kopieren.', 'Als Projekt-Anweisung, benutzerdefinierte Anweisung oder an den Anfang eines Chats einfügen.', 'Dann die Aufgabe stellen. Ohne Skill-Unterstützung lädt das Modell die Anleitung nicht selbst, sondern liest sie direkt.'],
        quelle: null,
    },
]
