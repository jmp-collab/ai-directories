'use client'

export default function PrintButton({ label = 'Als PDF speichern / drucken 🖨️' }) {
    return (
        <button type="button" className="button" onClick={() => window.print()}>
            {label}
        </button>
    )
}
