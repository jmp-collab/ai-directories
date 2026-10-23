// Ratgeber-Artikel. Abschnitte als Daten, damit Seite, Übersicht, Sitemap und llms.txt dieselbe Quelle nutzen.
export const ARTIKEL = [
    {
        slug: 'ki-tool-eintragen-anleitung',
        title: 'KI-Tool in Verzeichnisse eintragen: die komplette Anleitung',
        description:
            'Schritt für Schritt: So trägst du dein KI-Tool in Verzeichnisse ein, welche Texte und Bilder du brauchst, in welcher Reihenfolge du vorgehst und wie du misst, was es bringt.',
        jean: 'Ich habe das alles einmal falsch gemacht, damit du es gleich richtig machst. Bitte, gern geschehen.',
        minutes: 6,
        sections: [
            {
                h: 'Bevor du anfängst: das Einreichungs-Paket',
                p: [
                    'Fast jedes Verzeichnis fragt dieselben Dinge ab. Wer sie einmal sauber vorbereitet, braucht pro Eintrag fünf bis zehn Minuten. Wer improvisiert, braucht eine halbe Stunde und schreibt jedes Mal einen etwas anderen Text.',
                    'Du brauchst: den Namen, eine Website-URL, einen Einzeiler mit höchstens 60 Zeichen, eine Kurzbeschreibung mit etwa 160 Zeichen, eine Langbeschreibung mit 100 bis 300 Wörtern, ein Logo als quadratisches PNG oder SVG, drei bis fünf Screenshots, die Kategorie, das Preismodell und eine Kontakt-Mail, die du auch wirklich liest.',
                    'Das Launch-Kit auf dieser Seite erzeugt dir die Texte auf Deutsch und Englisch mit Zeichenzählern. Die meisten internationalen Verzeichnisse wollen Englisch, die deutschen natürlich Deutsch.',
                ],
            },
            {
                h: 'Die richtige Reihenfolge',
                p: [
                    'Fang mit den kostenlosen Verzeichnissen an, die eine reibungslose Einreichung und ein hohes Domain Rating haben. Die bringen pro Minute Arbeit am meisten. In der Tabelle findest du sie über den Filter „Kostenlos“ und „Reibungslos“, sortiert nach Jean-Score.',
                    'Danach kommen die deutschen Verzeichnisse, wenn deine Zielgruppe in Deutschland, Österreich oder der Schweiz sitzt. Erst ganz am Ende lohnt ein Blick auf bezahlte Einträge, und auch dann nur bei passendem Traffic und mit Rabattcode.',
                    'Ein Launch auf Plattformen wie Product Hunt ist ein eigenes Projekt. Den planst du separat, mit Termin, Unterstützern und vorbereitetem Material.',
                ],
            },
            {
                h: 'Überall gleich: Name, Text, URL',
                p: [
                    'Suchmaschinen und KI-Assistenten erkennen eine Marke daran, dass sie überall gleich auftritt. Wenn dein Tool in einem Verzeichnis „RechnungsRadar“, im nächsten „Rechnungs Radar AI“ und im dritten „RR“ heißt, sind das für eine Maschine drei verschiedene Dinge.',
                    'Nutze deshalb immer denselben Namen, denselben Einzeiler und dieselbe Haupt-URL. Variieren darfst du die Langbeschreibung, damit nicht überall wortgleicher Text steht.',
                ],
            },
            {
                h: 'Messen statt hoffen',
                p: [
                    'Häng an jeden Link UTM-Parameter, zum Beispiel utm_source mit dem Namen des Verzeichnisses und utm_medium=directory. In deiner Webanalyse siehst du dann, welche Einträge Besucher bringen und welche nur hübsch aussehen.',
                    'Führ eine einfache Liste: Datum, Verzeichnis, Status, Link zur Listing-Seite. Der Tracker auf der Startseite macht das mit Häkchen und CSV-Export. Nach vier Wochen schaust du nach, was live ist und was Klicks bringt.',
                ],
            },
            {
                h: 'Typische Fehler',
                p: [
                    'Zu lange Einzeiler, die im Formular abgeschnitten werden. Screenshots im Querformat, wo das Verzeichnis quadratisch will. Marketing-Sprache ohne Inhalt. Und der Klassiker: Der Eintrag ist live, aber der Link zeigt auf eine alte Landingpage, die längst eine 404 liefert.',
                    'Und noch einer: Hunderte Einträge an einem Tag. Das wirkt auf Suchmaschinen eher nach Spam als nach Beliebtheit. Lieber zwei bis drei Wochen lang jeden Tag ein paar.',
                ],
            },
        ],
    },
    {
        slug: 'backlinks-ki-verzeichnisse-seo',
        title: 'Bringen KI-Verzeichnisse etwas für SEO? Eine ehrliche Einordnung',
        description:
            'Was Backlinks aus KI-Verzeichnissen wirklich bringen, was nofollow bedeutet, warum Nennungen in KI-Antworten wichtig werden und wann sich der Aufwand nicht lohnt.',
        jean: 'Spoiler: Ja, aber nicht so, wie viele Linkverkäufer behaupten. Ich bin SEO, ich darf das sagen.',
        minutes: 5,
        sections: [
            {
                h: 'Die kurze Antwort',
                p: [
                    'Verzeichniseinträge sind ein Fundament, keine Strategie. Sie helfen einem neuen Tool, überhaupt gefunden und eingeordnet zu werden. Rankings für umkämpfte Suchbegriffe gewinnst du damit allein nicht.',
                ],
            },
            {
                h: 'Was ein Eintrag konkret bringt',
                p: [
                    'Erstens einen Link von einer thematisch passenden Seite. Auch wenn viele Verzeichnisse ihre Links als nofollow markieren, gehören solche Links zu einem natürlichen Linkprofil, und Suchmaschinen entdecken neue Seiten darüber schneller.',
                    'Zweitens direkte Besucher. Bei den großen Verzeichnissen mit Hunderttausenden Besuchen im Monat klickt ein Teil tatsächlich auf neue Tools. Wie viele, hängt stark von Kategorie, Platzierung und Text ab.',
                    'Drittens Nennungen. KI-Assistenten und KI-Suchen stützen sich auf Quellen, in denen dein Tool beschrieben wird. Wer in mehreren Verzeichnissen konsistent beschrieben ist, hat bessere Chancen, in solchen Antworten aufzutauchen.',
                ],
            },
            {
                h: 'dofollow, nofollow, sponsored',
                p: [
                    'Ein dofollow-Link ist ein normaler Link. nofollow sagt Suchmaschinen, dass die Seite den Link nicht empfehlen will. sponsored kennzeichnet bezahlte Links. Bezahlte Einträge sollten korrekt als sponsored oder nofollow markiert sein, alles andere verstößt gegen die Richtlinien der Suchmaschinen.',
                    'Wenn ein Verzeichnis dir gegen Geld einen „dofollow-Link mit Linkkraft“ verspricht, ist Vorsicht angebracht. Bezahlen lohnt sich für Sichtbarkeit und Besucher, nicht für Linkkraft.',
                ],
            },
            {
                h: 'Wann es sich nicht lohnt',
                p: [
                    'Bei Verzeichnissen ohne echten Traffic, ohne Pflege und mit Tausenden ungeprüften Einträgen. Solche Linkfriedhöfe kosten Zeit und bringen weder Besucher noch Vertrauen. Achte auf die Spalte Besuche pro Monat und auf den Jean-Score.',
                    'Auch Verzeichnisse, die einen Backlink von deiner Seite verlangen, sind mit Vorsicht zu genießen. Ein gegenseitiger Linktausch ist kein Zeichen von Qualität.',
                ],
            },
            {
                h: 'Ein realistischer Plan',
                p: [
                    'Zwanzig bis vierzig sorgfältige Einträge zum Launch, verteilt über zwei bis drei Wochen. Danach eigene Inhalte, die Fragen deiner Zielgruppe beantworten, und Erwähnungen auf Seiten, die deine Nutzer wirklich lesen. Die Verzeichnisse sind der Anfang, nicht das Ende.',
                ],
            },
        ],
    },
    {
        slug: 'product-hunt-launch-deutsch',
        title: 'Product Hunt Launch auf Deutsch: Vorbereitung, Ablauf, Fallstricke',
        description:
            'Wie ein Launch auf Product Hunt abläuft, was du vorher vorbereiten musst, wann du startest und welche Fehler deutsche Gründer am häufigsten machen.',
        jean: 'Product Hunt ist wie ein Marathon, der 24 Stunden dauert. Nur mit weniger Bananen und mehr Kommentaren.',
        minutes: 6,
        sections: [
            {
                h: 'Warum Product Hunt anders ist',
                p: [
                    'Die meisten Verzeichnisse sind Listen, in die man sich einträgt und die dann einfach da sind. Product Hunt ist ein Wettbewerb: Jeden Tag treten neue Produkte gegeneinander an, und die Community stimmt ab. Ein Launch ist deshalb ein Ereignis mit Termin, kein Formular.',
                ],
            },
            {
                h: 'Vorbereitung: zwei bis vier Wochen vorher',
                p: [
                    'Leg ein Konto an und sei vorher aktiv: kommentiere, unterstütze andere Launches, fülle dein Profil aus. Ganz neue Konten ohne Aktivität wirken wenig vertrauenswürdig.',
                    'Bereite Name, Tagline, Beschreibung, ein Galeriebild-Set und idealerweise ein kurzes Video vor. Schreib außerdem den ersten Kommentar des Machers: wer ihr seid, warum es das Produkt gibt, was neu ist. Auf Englisch, freundlich und ohne Werbesprache.',
                    'Sammle Unterstützer, die das Produkt wirklich nutzen und am Launch-Tag ehrliches Feedback geben. Gekaufte oder organisierte Stimmen verstoßen gegen die Regeln und fallen auf.',
                ],
            },
            {
                h: 'Der Launch-Tag',
                p: [
                    'Ein Product-Hunt-Tag beginnt um Mitternacht Pacific Time, das ist in Deutschland meist 9 Uhr morgens (in den Wochen der Zeitumstellung 8 Uhr). Wer früh startet, hat den ganzen Tag Zeit, Stimmen und Kommentare zu sammeln.',
                    'Bleib den ganzen Tag erreichbar und beantworte jeden Kommentar. Teile den Launch in deinen Kanälen, aber bitte um ehrliches Feedback statt um Upvotes.',
                ],
            },
            {
                h: 'Typische Fehler deutscher Gründer',
                p: [
                    'Zu bescheiden. Eine Tagline wie „Ein Tool für Rechnungen“ geht unter. Sag konkret, welches Problem du löst. Zu technisch: Funktionen statt Nutzen. Und zu spät: Wer erst am Launch-Tag Unterstützer sucht, ist zu spät dran.',
                    'Und bitte: Kein Launch an einem Tag, an dem du selbst keine Zeit hast. Ein Launch ohne Antworten des Teams wirkt wie ein verlassenes Restaurant mit offener Tür.',
                ],
            },
            {
                h: 'Nach dem Launch',
                p: [
                    'Bedanke dich bei allen, die kommentiert haben, und nutze das Feedback. Das Badge kannst du auf deiner Website zeigen. Der Product-Hunt-Eintrag bleibt dauerhaft bestehen und ist auch Monate später noch eine gute Quelle für Besucher und Nennungen.',
                ],
            },
        ],
    },
    {
        slug: 'product-hunt-alternativen',
        title: 'Product-Hunt-Alternativen: 12 Launch-Plattformen für Gründer',
        description:
            'Product Hunt ist nicht die einzige Bühne. Diese Launch-Plattformen und Startup-Verzeichnisse lohnen sich für deutsche Gründer, sortiert nach Aufwand, Kosten und Domain Rating.',
        jean: 'Product Hunt ist der Champions-League-Abend. Für die Bundesliga-Spieltage davor und danach brauchst du die anderen.',
        minutes: 6,
        sections: [
            {
                h: 'Warum nicht nur Product Hunt?',
                p: [
                    'Ein Product-Hunt-Launch ist ein Tag mit viel Konkurrenz. Wer an dem Tag keine Unterstützer mobilisiert, verschwindet nach wenigen Stunden aus dem Blick. Andere Launch-Plattformen sind kleiner, aber oft freundlicher zu neuen Produkten, und viele davon geben dir einen dauerhaften Eintrag mit Link.',
                    'Die Idee: Product Hunt bleibt der Höhepunkt, die Alternativen bauen davor Sichtbarkeit und erste Bewertungen auf und verlängern danach die Aufmerksamkeit. Alle Werte unten stammen aus der Tabelle auf AIGeddon (Domain Rating laut Quelle, Preis und Einreichungserfahrung).',
                ],
            },
            {
                h: 'Kostenlos und mit hohem Domain Rating',
                p: [
                    'AlternativeTo (DR 80, kostenlos): Dein Tool erscheint als Alternative zu bekannten Produkten. Ideal, wenn du gegen einen großen Namen antrittst, weil Nutzer genau so suchen.',
                    'Beta List (DR 70, kostenlos): Für Produkte vor oder kurz nach dem Start, mit Fokus auf Early Adopters. Die Einreichung gilt in unserer Tabelle allerdings als zäh.',
                    'SaasHub (DR 68, kostenlos) und Startup Ranking (DR 67, kostenlos): dauerhafte Profilseiten, die auch in Vergleichen auftauchen.',
                    'Dev Hunt (DR 56, kostenlos): Launch-Plattform speziell für Entwicklerwerkzeuge. Für Coding-Tools und APIs passender als Product Hunt.',
                ],
            },
            {
                h: 'Launch-Plattformen mit Tagesranking',
                p: [
                    'Diese Seiten funktionieren wie Product Hunt im Kleinen: Ein Launch-Tag, Upvotes, ein Ranking. Gut zum Üben des Ablaufs, bevor es auf die große Bühne geht.',
                    'Uneed (DR 66, bezahlte Optionen), MicroLaunch (DR 38, kostenlos), Launching Next (DR 51, kostenlos), Tiny Startups (DR 46, kostenlos) und Fazier (kostenlos) haben jeweils eine aktive Gründer-Community. Bei kostenlosen Einträgen gibt es oft Wartezeiten, bezahlte Plätze kürzen sie ab.',
                ],
            },
            {
                h: 'Speziell für KI-Tools',
                p: [
                    'Für KI-Produkte sind die großen KI-Verzeichnisse oft wirkungsvoller als allgemeine Launch-Seiten: There’s An AI For That (DR 75) und Futurepedia (DR 62) sind kostenpflichtig, haben aber viel Publikum. Kostenlose Einstiege sind etwa GPTs Hunter (DR 59) für eigene GPTs.',
                    'Die komplette Liste mit über 250 Verzeichnissen, Filtern nach Preis und Einreichungserfahrung und dem Jean-Score findest du auf der Startseite. Für den deutschsprachigen Markt gibt es eine eigene Übersicht der deutschen KI-Verzeichnisse.',
                ],
            },
            {
                h: 'Hacker News und Communitys',
                p: [
                    'Ein „Show HN“-Beitrag auf Hacker News kann enorm viele Besucher bringen, aber nur, wenn das Produkt technisch interessant ist und du in den Kommentaren selbst antwortest. Werbesprache wird dort hart abgestraft.',
                    'Für den deutschsprachigen Raum lohnen sich zusätzlich Gründer-Communitys, Newsletter und LinkedIn. Dort zählt weniger das Ranking als eine ehrliche Geschichte: Welches Problem löst du, und warum gerade du?',
                ],
            },
            {
                h: 'Ein Plan über vier Wochen',
                p: [
                    'Woche 1: Einreichungs-Paket vorbereiten (Texte, Logo, Screenshots) und kostenlose Verzeichnisse mit hohem Domain Rating eintragen. Das Launch-Kit erzeugt die Texte auf Deutsch und Englisch.',
                    'Woche 2: Ein bis zwei kleine Launch-Plattformen als Generalprobe. Feedback sammeln, Landingpage verbessern.',
                    'Woche 3: Product-Hunt-Launch mit vorbereiteten Unterstützern. Der Launch-Zeit-Rechner hilft beim Planen des Aufwands.',
                    'Woche 4: KI-Verzeichnisse und Vergleichsseiten nachziehen, Ergebnisse mit UTM-Parametern auswerten und nur dort weitermachen, wo Besucher kommen.',
                ],
            },
        ],
        links: [
            ['/', 'Alle KI-Verzeichnisse mit Filtern'],
            ['/deutsche-ki-verzeichnisse', 'Deutsche KI-Verzeichnisse'],
            ['/launch-kit', 'Launch-Kit: Einreichungstexte erzeugen'],
            ['/rechner/launch-zeit', 'Launch-Zeit-Rechner'],
            ['/prompts/product-hunt-launch', 'Prompt: Product-Hunt-Launch planen'],
        ],
    },
    {
        slug: 'newsletter-anbieter-fuer-gruender',
        title: 'Welcher Newsletter-Anbieter für Gründer? beehiiv, Kit, Brevo und GetResponse im Vergleich',
        description:
            'Newsletter-Anbieter für Gründer im Vergleich: Einstiegspreise laut Anbieter, Stärken, Datenschutz-Fragen und welcher Anbieter zu welchem Geschäftsmodell passt.',
        jean: 'Die Liste gehört dir, der Algorithmus nicht. Deshalb ist der Newsletter das Erste, was ich jedem Gründer einrichte.',
        minutes: 6,
        sections: [
            {
                h: 'Warum Gründer einen Newsletter brauchen',
                p: [
                    'Follower auf Social Media gehören der Plattform. Eine E-Mail-Liste gehört dir: Du erreichst deine Leute direkt, ohne Algorithmus und ohne Werbebudget. Für einen Launch ist sie das wichtigste Werkzeug, weil du am Launch-Tag genau die Menschen aktivieren kannst, die sich schon für dich interessieren.',
                    'Die gute Nachricht: Alle vier Anbieter in diesem Vergleich haben einen kostenlosen Einstieg. Du musst also nicht am ersten Tag Geld ausgeben.',
                ],
            },
            {
                h: 'Die vier Kandidaten auf einen Blick',
                p: [
                    'beehiiv: Newsletter-Plattform mit eigener Website, Podcast, Wachstumsfunktionen, bezahlten Abos und Werbenetzwerk. Bezahlte Tarife laut Anbieter ab 49 US-Dollar im Monat (Lite, jährlich). Stark, wenn der Newsletter selbst das Produkt ist.',
                    'Kit (früher ConvertKit): E-Mail-Marketing für Creator mit Landingpages, Formularen, visuellen Automatisierungen und Verkauf digitaler Produkte. Laut Anbieter ab 33 US-Dollar im Monat (Creator, jährlich, 1.000 Abonnenten). Stark für Creator, die Kurse oder Downloads verkaufen.',
                    'Brevo: Plattform für E-Mail, SMS und Multichannel-Marketing mit Automatisierung, Transaktionsmails und CRM-Funktionen. Laut Anbieter ab 9 US-Dollar bzw. 7 Euro im Monat (Starter). Stark, wenn Newsletter und Produkt-Mails aus einer Hand kommen sollen.',
                    'GetResponse: E-Mail-Marketing mit KI-Tools, Automatisierung, Landingpages, Webinaren und Onlinekursen. Laut Anbieter ab 15,58 US-Dollar im Monat (Starter, jährlich, 1.000 Kontakte). Stark, wenn Webinare Teil des Vertriebs sind.',
                ],
            },
            {
                h: 'Welcher Anbieter passt zu welchem Modell?',
                p: [
                    'Du willst mit dem Newsletter selbst Geld verdienen, über bezahlte Abos oder Werbung: beehiiv. Du verkaufst digitale Produkte und brauchst Automatisierungen nach Tags: Kit. Du betreibst ein SaaS oder einen Shop und brauchst auch Transaktionsmails: Brevo. Du verkaufst erklärungsbedürftige Produkte über Webinare: GetResponse.',
                    'Wer alles in einem System will, also Funnel, Kurs und E-Mail, schaut sich zusätzlich systeme.io an. Laut Anbieter gibt es dort ebenfalls einen kostenlosen Tarif.',
                ],
            },
            {
                h: 'Datenschutz: worauf deutsche Gründer achten müssen',
                p: [
                    'Für E-Mail-Marketing in Deutschland brauchst du ein Double-Opt-in, eine Datenschutzerklärung, die den Anbieter nennt, und einen Auftragsverarbeitungsvertrag (AVV) mit dem Anbieter. Alle großen Anbieter stellen einen AVV bereit, meist in den Kontoeinstellungen.',
                    'Prüfe außerdem, wo die Daten verarbeitet werden. Anbieter mit Sitz außerhalb der EU arbeiten in der Regel mit Standardvertragsklauseln oder einer Zertifizierung. Im Zweifel klärst du das mit deiner Datenschutzberatung, bevor du die ersten Adressen sammelst.',
                ],
            },
            {
                h: 'Kosten realistisch rechnen',
                p: [
                    'Die Preise steigen bei allen Anbietern mit der Zahl der Kontakte. Wichtig ist deshalb nicht der Einstiegspreis, sondern was du bei 1.000, 5.000 und 10.000 Abonnenten zahlst. Der Newsletter-Kostenrechner auf AIGeddon zeigt das für beehiiv, Kit, Brevo und GetResponse mit den Preisen laut Anbieter.',
                    'Ein Tipp aus der Praxis: Starte im Gratis-Tarif, sammle die ersten Hundert Adressen und wechsle erst, wenn eine bezahlte Funktion dir nachweislich Zeit oder Umsatz bringt.',
                ],
            },
            {
                h: 'Mit KI schneller zur ersten Ausgabe',
                p: [
                    'Themenideen, Betreffzeilen, Gliederung und Kurzfassungen kann KI gut vorbereiten. Das Tutorial „Newsletter mit KI in einer Stunde“ führt Schritt für Schritt durch eine komplette Ausgabe, und der Prompt für Newsletter-Ausgaben lässt sich mit einem Klick an ChatGPT oder Claude senden.',
                    'Deine Meinung, deine Beispiele und deine Erfahrungen schreibst du aber selbst. Genau dafür abonnieren Menschen einen Newsletter.',
                ],
            },
        ],
        links: [
            ['/rechner/newsletter-umsatz', 'Newsletter-Rechner'],
            ['/tutorials/newsletter-mit-ki-in-einer-stunde', 'Tutorial: Newsletter mit KI in einer Stunde'],
            ['/prompts/newsletter-ausgabe', 'Prompt: Newsletter-Ausgabe'],
            ['/tools/beehiiv', 'Steckbrief beehiiv'],
            ['/tools/kit', 'Steckbrief Kit'],
            ['/tools/brevo', 'Steckbrief Brevo'],
            ['/tools/getresponse', 'Steckbrief GetResponse'],
        ],
    },
]

export const getArtikel = (slug) => ARTIKEL.find((a) => a.slug === slug)

export const GLOSSAR = [
    ['Domain Rating (DR)', 'Kennzahl von Ahrefs von 0 bis 100 für die Linkstärke einer Domain. Je höher, desto stärker das Linkprofil. Ab etwa 50 gilt eine Domain für junge Tools als stark.'],
    ['Authority Score (AS)', 'Kennzahl von Semrush von 0 bis 100, die Linkprofil, Traffic und Spam-Signale kombiniert. Nicht direkt mit dem Domain Rating vergleichbar.'],
    ['Jean-Score', 'Eigene Bewertung dieser Seite von 0 bis 100. Setzt sich zusammen aus Domain Rating (bis 45 Punkte), Traffic (bis 25), Preis (bis 20) und Einreichung (bis 10).'],
    ['Backlink', 'Ein Link von einer fremden Website auf deine. Backlinks sind eines der wichtigsten Signale für Suchmaschinen.'],
    ['dofollow', 'Ein normaler Link ohne Einschränkung. Suchmaschinen werten ihn als Empfehlung.'],
    ['nofollow', 'Ein Link mit dem Attribut rel="nofollow". Die verlinkende Seite signalisiert, dass sie den Link nicht ausdrücklich empfiehlt.'],
    ['sponsored', 'Kennzeichnung für bezahlte Links, rel="sponsored". Pflicht für gekaufte Einträge.'],
    ['UTM-Parameter', 'Anhänge an eine URL wie utm_source oder utm_medium, mit denen Webanalyse-Tools erkennen, woher ein Besucher kam.'],
    ['Referring Domains', 'Anzahl der verschiedenen Domains, die auf eine Seite verlinken. Aussagekräftiger als die reine Zahl der Backlinks.'],
    ['Linkfriedhof', 'Liebevoller Ausdruck für ein Verzeichnis ohne Pflege, ohne Besucher und mit Tausenden ungeprüften Einträgen. Kostet Zeit, bringt nichts.'],
    ['Launch-Plattform', 'Seite wie Product Hunt, auf der neue Produkte an einem bestimmten Tag vorgestellt werden und um Aufmerksamkeit konkurrieren.'],
    ['AVV', 'Auftragsverarbeitungsvertrag nach DSGVO. Deutsche Unternehmen brauchen ihn, wenn ein Tool personenbezogene Daten verarbeitet. Mehrere deutsche Verzeichnisse fragen danach.'],
    ['GEO (Generative Engine Optimization)', 'Optimierung dafür, in Antworten von KI-Assistenten und KI-Suchen genannt zu werden. Konsistente Beschreibungen in Verzeichnissen helfen dabei.'],
    ['llms.txt', 'Textdatei im Stammverzeichnis einer Website, die KI-Assistenten eine kompakte Übersicht der Inhalte gibt. Diese Seite hat eine.'],
]
