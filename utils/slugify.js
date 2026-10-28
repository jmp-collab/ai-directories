// "There's An AI For That" -> "theres-an-ai-for-that", "Aura ++" -> "aura-plus-plus"
module.exports = function slugify(name) {
    return name
        .normalize('NFKD')
        .replace(/[̀-ͯ]/g, '')
        .toLowerCase()
        .replace(/\+/g, ' plus ')
        .replace(/&/g, ' and ')
        .replace(/['’`!]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
}
