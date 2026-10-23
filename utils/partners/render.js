// Prüft db/partners.json (Slugs, Status, Links) und schreibt docs/PARTNERLINKS.md als Übersicht für Jean.
// Aufruf: npm run partners
const fs = require('fs')
const path = require('path')
const slugify = require('../slugify')

const root = path.join(__dirname, '..', '..')
const register = require(path.join(root, 'db/partners.json'))
const tools = new Set(require(path.join(root, 'db/tools.json')).map((t) => t.slug))
const dirsDb = require(path.join(root, 'db/directories.json'))
const dirs = new Set((dirsDb.data || dirsDb).map((d) => slugify(d.name)))

const errors = []
const ids = new Set()
for (const p of register.programme) {
    if (ids.has(p.id)) errors.push(`${p.id}: doppelte id`)
    ids.add(p.id)
    if (p.tool_slug && !tools.has(p.tool_slug)) errors.push(`${p.id}: tool_slug ${p.tool_slug} fehlt in db/tools.json`)
    if (p.directory_slug && !dirs.has(p.directory_slug)) errors.push(`${p.id}: directory_slug ${p.directory_slug} fehlt in db/directories.json`)
    if (!register.status_werte.includes(p.status)) errors.push(`${p.id}: unbekannter Status ${p.status}`)
    if (p.status === 'aktiv' && !p.partner_link && !p.coupon) errors.push(`${p.id}: aktiv, aber weder partner_link noch coupon`)
    if (p.partner_link && !/^https:\/\//.test(p.partner_link)) errors.push(`${p.id}: partner_link muss mit https:// beginnen`)
    if (p.coupon && !(p.coupon.code && p.coupon.text)) errors.push(`${p.id}: coupon braucht code und text`)
}
if (errors.length) {
    console.error(errors.join('\n'))
    process.exit(1)
}

const cell = (v) => (v == null || v === '' ? '–' : String(v).replace(/\|/g, '/'))
const live = register.programme.filter((p) => (p.status === 'aktiv' && p.partner_link) || p.coupon)
const count = (s) => register.programme.filter((p) => p.status === s).length

const table = (rows, cols) =>
    [`| ${cols.map((c) => c[0]).join(' | ')} |`, `|${cols.map(() => '---').join('|')}|`, ...rows.map((p) => `| ${cols.map((c) => cell(c[1](p))).join(' | ')} |`)].join('\n')

const md = `# Partnerlinks AIGeddon

Automatisch erzeugt aus \`db/partners.json\` (Stand ${register.stand}) mit \`npm run partners\`. Nicht von Hand bearbeiten; Änderungen gehören in die JSON-Datei.

**Stand:** ${register.programme.length} Programme · aktiv ${count('aktiv')} · beantragt ${count('beantragt')} · nicht registriert ${count('nicht registriert')} · Code anfragen ${count('Code anfragen')} · Code angefragt ${count('Code angefragt')} · abgelehnt ${count('abgelehnt')}

## Live auf der Website

${live.length ? table(live, [['Programm', (p) => p.name], ['Partnerlink', (p) => p.partner_link], ['Code', (p) => p.coupon && `${p.coupon.code} (${p.coupon.text})`]]) : 'Noch keine. Sobald ein Eintrag `status: "aktiv"` mit `partner_link` oder einen `coupon` hat, nutzt die Seite ihn beim nächsten Build.'}

## Werkzeug-Partnerprogramme

${table(register.programme.filter((p) => p.kind === 'tool'), [['Programm', (p) => p.name], ['Status', (p) => p.status], ['Netzwerk', (p) => p.network], ['Provision', (p) => p.commission], ['Cookie', (p) => p.cookie], ['Anmeldung', (p) => p.signup_url], ['Dein Link', (p) => p.partner_link]])}

## Verzeichnisse: Partnerprogramme und eigene Codes

${table(register.programme.filter((p) => p.kind === 'directory'), [['Verzeichnis', (p) => p.name], ['Status', (p) => p.status], ['Art', (p) => p.network], ['Provision', (p) => p.commission], ['Anmeldung / Kontakt', (p) => p.signup_url], ['Dein Link', (p) => p.partner_link], ['Dein Code', (p) => p.coupon && `${p.coupon.code} (${p.coupon.text})`]])}

## So trägst du etwas ein

Entweder direkt in \`db/partners.json\`:

\`\`\`json
{ "id": "semrush", "status": "aktiv", "partner_link": "https://www.semrush.com/...?ref=..." }
{ "id": "uneed", "coupon": { "code": "AIGEDDON20", "text": "20% discount" } }
\`\`\`

oder als Zeile an Claude: \`PARTNERLINK <id> <link>\` bzw. \`CODE <id> <CODE> <Rabatt>\`.
`

fs.writeFileSync(path.join(root, 'docs/PARTNERLINKS.md'), md)
console.log(`docs/PARTNERLINKS.md geschrieben, ${register.programme.length} Programme, ${live.length} live`)
