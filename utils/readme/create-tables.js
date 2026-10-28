const { experienceLabel, pricingLabel, dealLabel, formatNumber, formatRating } = require('../i18n-de')

const HEADER = '| Verzeichnis | Eintragen | Domain Rating | Besuche/Monat | Einreichung | Preis |\n|---|---|---|---|---|---|\n'

function badge(value, goodValue, label) {
    if (!value) return ''
    return value === goodValue ? `**🟢 ${label}**` : `**🔴 ${label}**`
}

function createRow(directory) {
    const { name, link, submission_link, domain_rating, monthly_visits, submission_experience, pricing } = directory

    const experience = badge(submission_experience, 'Good', experienceLabel(submission_experience))
    const price = badge(pricing, 'Free', pricingLabel(pricing))
    const visits = monthly_visits ? formatNumber(monthly_visits) : 'k. A.'

    return `| [${name}](${link}) | [Eintragen](${submission_link}) | ${formatRating(domain_rating)} | ${visits} | ${experience} | ${price} |\n`
}

function createTable(directoriesList) {
    return HEADER + directoriesList.map(createRow).join('')
}

function createDealTable(directoriesList) {
    const rows = directoriesList
        .map((d) => `| [${d.name}](${d.link}) | \`${d.dealCode}\` | ${dealLabel(d.dealText)} | ${formatRating(d.domain_rating)} |\n`)
        .join('')

    return `| Verzeichnis | Code | Vorteil | Domain Rating |\n|---|---|---|---|\n${rows}`
}

module.exports = { createTable, createDealTable }
