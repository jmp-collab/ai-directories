// Preise laut Anbieter für die Rechner. Nur Werte, die auf der offiziellen Preisseite stehen,
// mit Quelle und Prüfdatum. Monatlicher Preis-Check: docs/TASKS.md.
export const PREISE_STAND = '23.10.2026'

// API-Preise in US-Dollar pro 1 Million Tokens (Standardverarbeitung, ohne Cache und Batch)
export const API_MODELLE = [
    { id: 'gpt-5.6-sol', anbieter: 'OpenAI', name: 'GPT-5.6 Sol', input: 5, output: 30, quelle: 'https://openai.com/api/pricing/' },
    { id: 'gpt-5.6-terra', anbieter: 'OpenAI', name: 'GPT-5.6 Terra', input: 2, output: 12, quelle: 'https://openai.com/api/pricing/' },
    { id: 'gpt-5.6-luna', anbieter: 'OpenAI', name: 'GPT-5.6 Luna', input: 0.2, output: 1.2, quelle: 'https://openai.com/api/pricing/' },
    { id: 'claude-fable-5.1', anbieter: 'Anthropic', name: 'Claude Fable 5.1', input: 10, output: 50, quelle: 'https://platform.claude.com/docs/en/about-claude/pricing' },
    { id: 'claude-opus-5.5', anbieter: 'Anthropic', name: 'Claude Opus 5.5', input: 4, output: 20, quelle: 'https://platform.claude.com/docs/en/about-claude/pricing' },
    { id: 'claude-sonnet-5.5', anbieter: 'Anthropic', name: 'Claude Sonnet 5.5', input: 2, output: 10, quelle: 'https://platform.claude.com/docs/en/about-claude/pricing' },
    {
        id: 'claude-haiku-5.5',
        anbieter: 'Anthropic',
        name: 'Claude Haiku 5.5',
        input: 0.1,
        output: 0.5,
        hinweis: 'gilt für Prompts bis 100.000 Tokens',
        quelle: 'https://platform.claude.com/docs/en/about-claude/pricing',
    },
    {
        id: 'gemini-4-argon',
        anbieter: 'Google',
        name: 'Gemini 4 Argon',
        input: 2,
        output: 10,
        hinweis: 'bis 30.11.2026; ab 1.12.2026 4 $ / 20 $',
        quelle: 'https://ai.google.dev/gemini-api/docs/pricing',
    },
]

// Abos in US-Dollar pro Monat
export const ABOS = [
    { id: 'claude-pro', name: 'Claude Pro (monatlich)', preis: 20, quelle: 'https://www.anthropic.com/pricing' },
    { id: 'claude-pro-jahr', name: 'Claude Pro (jährlich, pro Monat)', preis: 17, quelle: 'https://www.anthropic.com/pricing' },
    { id: 'claude-max', name: 'Claude Max (ab)', preis: 100, quelle: 'https://www.anthropic.com/pricing' },
    { id: 'perplexity-pro-jahr', name: 'Perplexity Pro (jährlich, pro Monat)', preis: 17, quelle: 'https://www.perplexity.ai/pro' },
]
