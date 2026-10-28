# KI-Skills für alle LLMs (Deutsch)

Agent Skills nach dem offenen Standard (agentskills.io) für Marketing, SEO und Vertrieb, übersetzt und an den deutschsprachigen Markt angepasst (UWG, DSGVO, Preisangabenverordnung, Impressumspflicht). Übersicht mit Installationsanleitung: https://jmp-collab.github.io/ai-directories/skills/

## Installieren

ChatGPT, Claude und Gemini: ZIP auf der Skill-Seite herunterladen und unter Skills hochladen.

Claude Code, Codex, Cursor, GitHub Copilot, Gemini CLI und weitere Coding-Agenten:

```bash
npx skills add jmp-collab/ai-directories            # Auswahl im Dialog
npx skills add jmp-collab/ai-directories --skill seo-audit
gh skill install jmp-collab/ai-directories seo-audit
```

## Pflege

Jeder Skill ist ein Ordner mit einer `SKILL.md`. Nach Änderungen `npm run skills` ausführen: prüft das Frontmatter und erzeugt `db/skills.json` sowie die ZIP-Dateien unter `public/skills-dl/`.

## Lizenz

MIT. Grundlage ist [marketingskills](https://github.com/coreyhaines31/marketingskills) von Corey Haines (MIT). Siehe `LICENSE`.
