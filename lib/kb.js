// KI-Tool-Datenbank: Fakten-Atome aus den drei größten frei lizenzierten KI-Tool-Listen auf GitHub
// (db/kb-tools.json, erzeugt mit utils/kb/import.js). Eigene Bewertungen kommen aus db/tools.json.
import kb from '../db/kb-tools.json'
import sources from '../db/kb-sources.json'
import { getTools } from './tools'

export const KB_STAND = kb.stand
export const KB_SOURCES = sources

// Rubriken mit eigener Einordnung. prompts/tutorials verweisen auf passende Inhalte der Seite.
export const KB_RUBRIKEN = {
    chatbots: {
        name: 'KI-Chatbots',
        icon: 'prompt',
        intro: 'Die Allrounder: ChatGPT, Claude, Gemini und Co. beantworten Fragen, schreiben, rechnen und programmieren. Der Unterschied liegt in Kontextlänge, Datenschutz, Websuche und Preis.',
        prompts: ['prompt-verbessern', 'meeting-zusammenfassung'],
        tutorial: 'prompt-engineering-in-15-minuten',
    },
    suche: {
        name: 'KI-Suchmaschinen',
        icon: 'lupe',
        intro: 'Antworten mit Quellen statt zehn blauen Links. KI-Suchmaschinen fassen das Web zusammen und zeigen, woher die Aussage stammt. Für Recherche oft besser als ein reiner Chatbot.',
        prompts: ['keyword-cluster'],
    },
    schreiben: {
        name: 'KI-Schreibtools',
        icon: 'post',
        intro: 'Texte entwerfen, umschreiben, übersetzen, kürzen. Spezialisierte Schreibtools bieten Vorlagen, Markenstimme und Plagiatsprüfung; für vieles reicht aber ein guter Prompt im Chatbot.',
        prompts: ['blogartikel-gliederung', 'text-entkitschen', 'newsletter-ausgabe'],
        tutorial: 'prompt-kette-vom-thema-zum-artikel',
    },
    produktivitaet: {
        name: 'KI für Produktivität',
        icon: 'werkzeug',
        intro: 'Meetings mitschreiben, E-Mails sortieren, Notizen ordnen, Browser-Erweiterungen: KI, die im Arbeitsalltag Minuten spart, die sich zu Stunden summieren.',
        prompts: ['meeting-zusammenfassung', 'automatisierung-planen'],
    },
    recherche: {
        name: 'KI für Recherche & Wissenschaft',
        icon: 'lupe',
        intro: 'Paper finden, PDFs befragen, Texte aus Bildern lesen. Für Studium, Forschung und gründliche Recherche mit Quellenangaben.',
    },
    coding: {
        name: 'KI fürs Programmieren',
        icon: 'werkzeug',
        intro: 'Code vervollständigen, Fehler finden, ganze Apps aus Beschreibungen bauen. Von Copilot im Editor bis zu Coding-Agenten, die selbstständig Pull Requests schreiben.',
    },
    agenten: {
        name: 'KI-Agenten',
        icon: 'rakete',
        intro: 'Agenten planen Aufgaben selbst, nutzen Werkzeuge und arbeiten mehrere Schritte ab: recherchieren, klicken, schreiben, prüfen. Viele sind Open Source und selbst hostbar.',
        prompts: ['automatisierung-planen'],
    },
    bild: {
        name: 'KI-Bildgeneratoren & Design',
        icon: 'herz',
        intro: 'Bilder aus Text, Logos, Produktfotos, Präsentationen. Midjourney, Flux, Stable Diffusion und Design-Tools mit KI-Funktionen im Überblick.',
    },
    video: {
        name: 'KI-Videotools',
        icon: 'play',
        intro: 'Videos aus Text, Avatare, automatische Untertitel und Schnitt. Für Erklärvideos, Social Clips und Produktdemos ohne Kamera.',
        prompts: ['youtube-skript', 'video-zu-blogartikel'],
    },
    audio: {
        name: 'KI-Stimmen & Sprache',
        icon: 'play',
        intro: 'Text zu Sprache, Sprache zu Text, Stimmen klonen, Podcasts übersetzen. Von ElevenLabs bis zu Whisper als Open-Source-Transkription.',
    },
    musik: {
        name: 'KI-Musik',
        icon: 'herz',
        intro: 'Songs, Jingles und Soundeffekte aus einer Beschreibung. Achte bei kommerzieller Nutzung genau auf die Lizenzbedingungen der Anbieter.',
    },
    marketing: {
        name: 'KI fürs Marketing',
        icon: 'deal',
        intro: 'Werbetexte, Social Posts, Anzeigen und Kampagnen. Marketing-Tools bündeln Vorlagen und Markenstimme; die Prompts dieser Seite funktionieren in jedem Chatbot.',
        prompts: ['product-hunt-launch', 'meta-title-description'],
    },
    modelle: {
        name: 'KI-Modelle & Plattformen',
        icon: 'strahlung',
        intro: 'Die Motoren unter der Haube: offene und geschlossene Sprachmodelle, Ranglisten, Plattformen zum lokalen Betrieb und zum Feintuning.',
    },
    sicherheit: {
        name: 'KI-Erkennung & Sicherheit',
        icon: 'strahlung',
        intro: 'KI-Texte erkennen, Modelle absichern, Schwachstellen finden. Wichtig: Kein KI-Detektor ist zuverlässig genug für harte Entscheidungen.',
    },
    finanzen: {
        name: 'KI für Finanzen',
        icon: 'deal',
        intro: 'Analyse, Research und Quant-Werkzeuge. Keine Anlageberatung: Prüfe jedes Ergebnis selbst.',
    },
}

const own = getTools()
const ownByHost = new Map(
    own.map((t) => {
        try {
            return [new URL(t.url).hostname.replace(/^www\./, ''), t]
        } catch {
            return [t.slug, t]
        }
    })
)

const isFree = (p) => (p ? /free/i.test(p) && !/paid/i.test(p) : null)

// Ein Eintrag mit Signalen: Konsens (in wie vielen Listen), Open Source, gratis, von Jean geprüft.
const enrich = (t) => {
    const profil = ownByHost.get(t.domain) || null
    return {
        ...t,
        konsens: t.quellen.length,
        gratis: isFree(t.preis),
        profil: profil ? { slug: profil.slug, name: profil.name, affiliate: Boolean(profil.affiliate) } : null,
    }
}

const TOOLS = kb.tools.filter((t) => KB_RUBRIKEN[t.rubrik]).map(enrich)

export const getKbTools = () => TOOLS
export const getKbRubrik = (key) => (KB_RUBRIKEN[key] ? { key, ...KB_RUBRIKEN[key], tools: TOOLS.filter((t) => t.rubrik === key) } : null)
export const getKbRubriken = () => Object.keys(KB_RUBRIKEN).map(getKbRubrik).filter((r) => r.tools.length)
export const kbStats = () => ({
    gesamt: TOOLS.length,
    konsens: TOOLS.filter((t) => t.konsens > 1).length,
    alle: TOOLS.filter((t) => t.konsens === 3).length,
    openSource: TOOLS.filter((t) => t.open_source).length,
    profile: TOOLS.filter((t) => t.profil).length,
})

// Schlanke Fassung für die Client-Suche: nur, was die Liste anzeigt.
export const kbForClient = (tools) =>
    tools.map((t) => ({
        s: t.slug,
        n: t.name,
        u: t.url,
        r: t.rubrik,
        d: t.beschreibung.length > 160 ? `${t.beschreibung.slice(0, 157)}…` : t.beschreibung,
        k: t.konsens,
        o: t.open_source ? 1 : 0,
        g: t.gratis ? 1 : 0,
        p: t.profil?.slug || '',
    }))
