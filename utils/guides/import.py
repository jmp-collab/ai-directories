# Übernimmt fertige Guide-PDFs (z. B. Gamma-Export) nach public/guides:
# entfernt Metadaten und XMP (Autor, Software, KI-Kennungen), erzeugt das Titelbild aus Seite 1
# und setzt in lib/guides.js bereit: true.
# Aufruf: python3 utils/guides/import.py <guide-id> <pfad.pdf> [<guide-id> <pfad.pdf> ...]
import re
import subprocess
import sys
from pathlib import Path

from pypdf import PdfReader, PdfWriter

ROOT = Path(__file__).resolve().parents[2]
LIB = ROOT / 'lib' / 'guides.js'
ZIEL = ROOT / 'public' / 'guides'
ZIEL.mkdir(parents=True, exist_ok=True)

args = sys.argv[1:]
if not args or len(args) % 2:
    sys.exit('Aufruf: import.py <guide-id> <pfad.pdf> [...]')

lib = LIB.read_text()
for gid, pdf in zip(args[::2], args[1::2]):
    block = re.search(r"\{\s*id: '%s',[\s\S]*?\n    \}" % re.escape(gid), lib)
    if not block:
        sys.exit(f'Guide {gid} nicht in lib/guides.js')
    datei = re.search(r"datei: '([^']+)'", block.group(0)).group(1)
    bild = re.search(r"bild: '([^']+)'", block.group(0)).group(1)
    reader = PdfReader(pdf)
    writer = PdfWriter()
    for seite in reader.pages:
        writer.add_page(seite)
    # Keine Metadaten übernehmen, XMP-Stream entfernen.
    if '/Metadata' in writer._root_object:
        del writer._root_object['/Metadata']
    writer.add_metadata({'/Title': re.search(r"titel: '([^']+)'", block.group(0)).group(1), '/Author': 'AIGeddon'})
    ziel_pdf = ROOT / 'public' / datei.lstrip('/')
    with open(ziel_pdf, 'wb') as f:
        writer.write(f)
    ziel_png = ROOT / 'public' / bild.lstrip('/')
    subprocess.run(['pdftoppm', '-png', '-f', '1', '-l', '1', '-scale-to', '600', '-singlefile', str(ziel_pdf), str(ziel_png.with_suffix(''))], check=True)
    neu = block.group(0).replace('bereit: false', 'bereit: true')
    lib = lib.replace(block.group(0), neu)
    print(f'{gid}: {len(reader.pages)} Seiten -> {ziel_pdf.relative_to(ROOT)}, Titelbild {ziel_png.relative_to(ROOT)}')
LIB.write_text(lib)
