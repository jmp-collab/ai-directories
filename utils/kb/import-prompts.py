# Wählt 100 Rollen-Prompts aus f/prompts.chat (prompts.csv, CC0 1.0) und schreibt db/prompt-archiv.json.
# Aufruf: python3 -I utils/kb/import-prompts.py <pfad/zu/prompts.csv>
# Titel und Kategorien sind von AIGeddon; der Prompt-Text bleibt im englischen Original.
import csv, json, re, sys, os

csv.field_size_limit(10**9)
AUSWAHL = [
    # (Originaltitel, deutscher Titel, Kategorie)
    ('Advertiser', 'Werbetexter', 'business'), ('Social Media Manager', 'Social-Media-Manager', 'business'),
    ('Social Media Influencer', 'Social-Media-Influencer', 'business'), ('Salesperson', 'Verkäufer', 'business'),
    ('Chief Executive Officer', 'CEO', 'business'), ('Product Manager', 'Produktmanager', 'business'),
    ('Project Manager', 'Projektmanager', 'business'), ('Startup Idea Generator', 'Startup-Ideen-Generator', 'business'),
    ('Creative Branding Strategist', 'Branding-Stratege', 'business'), ('LinkedIn Ghostwriter', 'LinkedIn-Ghostwriter', 'business'),
    ('SEO specialist', 'SEO-Spezialist', 'business'), ('Logistician', 'Logistiker', 'business'),
    ('Real Estate Agent', 'Immobilienmakler', 'business'), ('Recruiter', 'Recruiter', 'business'),
    ('Data Analyst', 'Datenanalyst', 'business'), ('Statistician', 'Statistiker', 'business'),
    ('Professional Email Writer for Any Occasion', 'E-Mail-Profi für jeden Anlass', 'business'), ('FAQ Generator', 'FAQ-Generator', 'business'),
    ('Excel Formula Sensei', 'Excel-Formel-Sensei', 'business'), ('Virtual Event Planner', 'Event-Planer', 'business'),
    ('AI Customer Support Specialist', 'Kundenservice-Profi', 'business'), ('Restaurant Owner', 'Restaurantbesitzer', 'business'),
    ('Financial Analyst', 'Finanzanalyst', 'business'), ('Digital product ideas ', 'Ideen für digitale Produkte', 'business'),
    ('Book Summarizer', 'Buch-Zusammenfasser', 'lernen'), ('Note-Taking assistant', 'Notiz-Assistent', 'lernen'),
    ('Study planner', 'Lernplaner', 'lernen'), ('Explainer with Analogies', 'Erklärer mit Analogien', 'lernen'),
    ('Decision Filter', 'Entscheidungsfilter', 'lernen'), ('Idea Clarifier GPT', 'Ideen-Schärfer', 'lernen'),
    ('Math Teacher', 'Mathelehrer', 'lernen'), ('Philosophy Teacher', 'Philosophielehrer', 'lernen'),
    ('Historian', 'Historiker', 'lernen'), ('Educational Content Creator', 'Lerninhalte-Ersteller', 'lernen'),
    ('AI Writing Tutor', 'Schreib-Tutor', 'lernen'), ('Academician', 'Akademiker', 'lernen'),
    ('Journal Reviewer', 'Fachgutachter', 'lernen'), ('Socratic Method', 'Sokratische Methode', 'lernen'),
    ('Fallacy Finder', 'Denkfehler-Finder', 'lernen'), ('Etymologist', 'Wortherkunft-Experte', 'lernen'),
    ('Article Summary and Comprehension', 'Artikel verstehen und zusammenfassen', 'lernen'), ('Spoken English Teacher and Improver', 'Englisch-Sprechtrainer', 'lernen'),
    ('ChatGPT Prompt Generator', 'Prompt-Generator', 'prompting'), ('Meta-Prompt Engineer', 'Meta-Prompt-Engineer', 'prompting'),
    ('Senior Prompt Engineer Role Guide', 'Senior Prompt Engineer', 'prompting'), ('Midjourney Prompt Generator', 'Midjourney-Prompt-Generator', 'prompting'),
    ('Smart Rewriter & Clarity Booster', 'Klarheits-Umschreiber', 'schreiben'), ('Persuasive Article or Proposal Writing Guide', 'Überzeugende Artikel und Angebote', 'schreiben'),
    ('English Translator and Improver', 'Englisch-Übersetzer und -Verbesserer', 'schreiben'), ('Proofreader', 'Korrektor', 'schreiben'),
    ('Synonym Finder', 'Synonym-Finder', 'schreiben'), ('Fancy Title Generator', 'Titel-Generator', 'schreiben'),
    ('Title Generator for written pieces', 'Überschriften-Generator', 'schreiben'), ('Essay Writer', 'Essay-Autor', 'schreiben'),
    ('Journalist', 'Journalist', 'schreiben'), ('Wikipedia Page', 'Wikipedia-Artikel', 'schreiben'),
    ('Self-Help Book', 'Ratgeber-Buch', 'schreiben'), ('Create a Professional Bio', 'Profi-Kurzbiografie', 'karriere'),
    ('Cover Letter', 'Anschreiben', 'karriere'), ('Interview Preparation Coach', 'Vorbereitung aufs Vorstellungsgespräch', 'karriere'),
    ('Job Interviewer', 'Vorstellungsgespräch-Simulator', 'karriere'), ('Career Counselor', 'Karriereberater', 'karriere'),
    ('Career Coach', 'Karriere-Coach', 'karriere'), ('Talent Coach', 'Talent-Coach', 'karriere'),
    ('Public Speaking Coach', 'Rhetorik-Coach', 'karriere'), ('Elocutionist', 'Sprechtrainer', 'karriere'),
    ('Motivational Coach', 'Motivationscoach', 'karriere'), ('Debate Coach', 'Debattier-Coach', 'karriere'),
    ('Debater', 'Debattierer', 'karriere'), ('Life Coach', 'Life-Coach', 'karriere'),
    ('YouTube Video Analyst', 'YouTube-Video-Analyst', 'kreativ'), ('AI Video Creation Assistant', 'KI-Video-Assistent', 'kreativ'),
    ('Storyteller', 'Geschichtenerzähler', 'kreativ'), ('Novelist', 'Romanautor', 'kreativ'),
    ('Screenwriter', 'Drehbuchautor', 'kreativ'), ('Poet', 'Dichter', 'kreativ'), ('Rapper', 'Rapper', 'kreativ'),
    ('Composer', 'Komponist', 'kreativ'), ("Children's Book Creator", 'Kinderbuch-Autor', 'kreativ'),
    ('Stand-up Comedian', 'Stand-up-Comedian', 'kreativ'), ('Movie Critic', 'Filmkritiker', 'kreativ'),
    ('Football Commentator', 'Fußballkommentator', 'kreativ'), ('Text Based Adventure Game', 'Textadventure', 'spiel'),
    ('Tic-Tac-Toe Game', 'Tic-Tac-Toe', 'spiel'), ('Chess Player', 'Schachpartner', 'spiel'),
    ('Guessing Game Master', 'Ratespiel-Meister', 'spiel'), ('Emoji Translator', 'Emoji-Übersetzer', 'spiel'),
    ('Dream Interpreter', 'Traumdeuter (zum Spaß)', 'spiel'), ('Magician', 'Zauberkünstler', 'spiel'),
    ('Travel Guide', 'Reiseführer', 'alltag'), ('Time Travel Guide', 'Zeitreise-Führer', 'alltag'),
    ('Cheap Travel Ticket Advisor', 'Spar-Reiseberater', 'alltag'), ('Chef', 'Koch', 'alltag'),
    ('Personal Chef', 'Privatkoch', 'alltag'), ('Personal Trainer', 'Personal Trainer', 'alltag'),
    ('Interior Decorator', 'Inneneinrichter', 'alltag'), ('DIY Expert', 'Heimwerker-Profi', 'alltag'),
    ('Automobile Mechanic', 'Kfz-Mechaniker', 'alltag'), ('Personal Shopper', 'Personal Shopper', 'alltag'),
    ('Personal Stylist', 'Stilberater', 'alltag'), ('Pet Behaviorist', 'Tierverhaltens-Berater', 'alltag'),
    ('Customized Gift Idea Brainstorm Assistant', 'Geschenkideen-Finder', 'alltag'), ('Florist', 'Florist', 'alltag'),
]
INVIS = re.compile('[' + '\u200b-\u200f\u2060-\u2064\ufeff\u00ad\u202a-\u202e' + ']')

def slug(s):
    s = s.lower().replace('ä', 'ae').replace('ö', 'oe').replace('ü', 'ue').replace('ß', 'ss')
    return re.sub(r'[^a-z0-9]+', '-', s).strip('-')

rows = {}
for r in csv.DictReader(open(sys.argv[1], encoding='utf-8')):
    rows.setdefault(r['act'], r)

out, fehlt = [], []
for act, titel, kat in AUSWAHL:
    r = rows.get(act)
    if not r:
        fehlt.append(act)
        continue
    out.append({
        'slug': slug(titel), 'titel': titel, 'original': act.strip(), 'kategorie': kat,
        'prompt': INVIS.sub('', r['prompt']).strip(), 'beitrag': (r.get('contributor') or '').strip(),
    })

root = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..')
json.dump({'quelle': 'https://github.com/f/prompts.chat', 'lizenz': 'CC0-1.0', 'anzahl': len(out), 'prompts': out},
          open(os.path.join(root, 'db/prompt-archiv.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print(len(out), 'Prompts; fehlen:', fehlt)
