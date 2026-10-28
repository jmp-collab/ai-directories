// Absprung-Links in KI-Chats. Nicht offiziell dokumentiert, per Test belegt (Stand Oktober 2026);
// vierteljährlich prüfen (docs/TASKS.md). Gemini und Copilot übernehmen keinen Prompt per Link:
// dort wird der Prompt kopiert und der Chat leer geöffnet.
export const AI_TARGETS = [
    { id: 'chatgpt', name: 'ChatGPT', url: (q) => `https://chatgpt.com/?q=${q}` },
    { id: 'claude', name: 'Claude', url: (q) => `https://claude.ai/new?q=${q}` },
    { id: 'perplexity', name: 'Perplexity', url: (q) => `https://www.perplexity.ai/search?q=${q}` },
    { id: 'grok', name: 'Grok', url: (q) => `https://grok.com/?q=${q}` },
    { id: 'google', name: 'Google AI Mode', url: (q) => `https://www.google.com/search?udm=50&q=${q}`, maxLength: 1800 },
    { id: 'gemini', name: 'Gemini', url: () => 'https://gemini.google.com/app', copyOnly: true },
]

// Über dieser Länge (kodiert) wird der Chat leer geöffnet; der Prompt liegt dann in der Zwischenablage.
export const MAX_URL_PROMPT = 7000
