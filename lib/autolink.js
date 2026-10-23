// Fachbegriffe in Fließtext automatisch mit der Glossar-Seite verlinken, jeweils nur beim ersten Vorkommen pro Seite.
// Bewusst ohne sehr häufige Wörter wie „Prompt“ oder „Temperatur“, damit Texte nicht zu Linklisten werden.
import { glossarSlug } from './ki-glossar'

const BEGRIFFE = [
    ['Prompt Engineering', 'Prompt Engineering'],
    ['System-Prompts?', 'System-Prompt'],
    ['Rollen-Prompts?', 'Rollen-Prompt'],
    ['Few-Shot', 'Few-Shot'],
    ['Zero-Shot', 'Zero-Shot'],
    ['Chain of Thought', 'Chain of Thought'],
    ['Prompt-Ketten?', 'Prompt-Kette'],
    ['Meta-Prompts?', 'Meta-Prompt'],
    ['Sprachmodell(?:e|en|s)?|LLMs?', 'Large Language Model (LLM)'],
    ['Tokens?', 'Token'],
    ['Kontextfensters?', 'Kontextfenster'],
    ['Halluzination(?:en)?|halluziniert', 'Halluzination'],
    ['Grounding', 'Grounding'],
    ['RAG', 'RAG (Retrieval-Augmented Generation)'],
    ['Embeddings?', 'Embedding'],
    ['Vektordatenbank(?:en)?', 'Vektordatenbank'],
    ['Fine-Tuning', 'Fine-Tuning'],
    ['Trainingsdaten', 'Trainingsdaten'],
    ['Wissensstand', 'Wissensstand (Knowledge Cutoff)'],
    ['multimodale?n?', 'Multimodal'],
    ['KI-Agent(?:en)?', 'KI-Agent'],
    ['Function Calling|Tool Use', 'Tool Use (Function Calling)'],
    ['MCP', 'MCP (Model Context Protocol)'],
    ['Prompt-Injections?', 'Prompt-Injection'],
    ['Jailbreaks?', 'Jailbreak'],
    ['Guardrails', 'Guardrails'],
    ['Custom GPTs?', 'Custom GPT'],
    ['Diffusionsmodell(?:e|en)?', 'Diffusionsmodell'],
    ['Text-to-Speech', 'Text-to-Speech (TTS)'],
    ['Speech-to-Text', 'Speech-to-Text'],
    ['Open-Weight-Modell(?:e|en)?', 'Open-Weight-Modell'],
    ['Benchmarks?', 'Benchmark'],
    ['Prompt Caching', 'Prompt Caching'],
    ['KI-Detektor(?:en)?', 'KI-Detektor'],
]

const MUSTER = new RegExp(`(?<![\\p{L}\\p{N}-])(${BEGRIFFE.map(([m]) => `(?:${m})`).join('|')})(?![\\p{L}\\p{N}-])`, 'gu')
const ZIEL = BEGRIFFE.map(([m, term]) => [new RegExp(`^(?:${m})$`, 'u'), glossarSlug(term)])

// Zerlegt einen Text in Teile: Strings und { text, slug } für Glossar-Links.
// gesehen: Set der schon verlinkten Slugs auf dieser Seite (wird ergänzt).
export function glossarTeile(text, gesehen = new Set(), ausser = null) {
    if (typeof text !== 'string') return [text]
    const teile = []
    let rest = 0
    for (const m of text.matchAll(MUSTER)) {
        const slug = ZIEL.find(([re]) => re.test(m[1]))?.[1]
        if (!slug || gesehen.has(slug) || slug === ausser) continue
        gesehen.add(slug)
        if (m.index > rest) teile.push(text.slice(rest, m.index))
        teile.push({ text: m[1], slug })
        rest = m.index + m[1].length
    }
    if (rest < text.length) teile.push(text.slice(rest))
    return teile
}
