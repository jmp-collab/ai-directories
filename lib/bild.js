// Bilder im Browser zuschneiden, verkleinern und als WebP neu kodieren.
// Das neue Bild enthält keine EXIF-, GPS- oder Kameradaten mehr, weil nur die Pixel übernommen werden.
export async function bildVorbereiten(datei, { breite, hoehe, qualitaet = 0.86 }) {
    if (!/^image\/(png|jpeg|webp|gif)$/.test(datei.type)) throw new Error('typ')
    if (datei.size > 15 * 1024 * 1024) throw new Error('gross')
    const bitmap = await createImageBitmap(datei, { imageOrientation: 'from-image' })
    // Mittig auf das Zielformat zuschneiden (cover).
    const ziel = breite / hoehe
    let sw = bitmap.width
    let sh = bitmap.height
    if (sw / sh > ziel) sw = Math.round(sh * ziel)
    else sh = Math.round(sw / ziel)
    const sx = Math.round((bitmap.width - sw) / 2)
    const sy = Math.round((bitmap.height - sh) / 2)
    const canvas = document.createElement('canvas')
    canvas.width = breite
    canvas.height = hoehe
    const ctx = canvas.getContext('2d')
    ctx.imageSmoothingQuality = 'high'
    ctx.drawImage(bitmap, sx, sy, sw, sh, 0, 0, breite, hoehe)
    bitmap.close?.()
    const blob = await new Promise((ok) => canvas.toBlob(ok, 'image/webp', qualitaet))
    if (!blob) throw new Error('kodieren')
    return blob
}
