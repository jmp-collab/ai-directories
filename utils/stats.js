// Kennzahlen und Auswahllisten, die README und Website gemeinsam nutzen.

const byRating = (a, b) => b.domain_rating - a.domain_rating || b.monthly_visits - a.monthly_visits

module.exports = function getStats(directories) {
    const free = directories.filter((d) => d.pricing === 'Free')
    const paid = directories.filter((d) => d.pricing === 'Paid')
    const smooth = directories.filter((d) => d.submission_experience === 'Good')
    const freeAndSmooth = free.filter((d) => d.submission_experience === 'Good')
    const withDeal = directories.filter((d) => d.dealCode)
    const strong = directories.filter((d) => d.domain_rating >= 50)

    return {
        total: directories.length,
        free,
        paid,
        smooth,
        freeAndSmooth,
        withDeal: [...withDeal].sort(byRating),
        strong: [...strong].sort(byRating),
        topByRating: [...directories].sort(byRating).slice(0, 10),
        topFreeSmooth: [...freeAndSmooth].sort(byRating).slice(0, 10),
    }
}

module.exports.byRating = byRating
