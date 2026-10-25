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
        seoTitle: 'Bringen KI-Verzeichnisse etwas für SEO?',
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
        seoTitle: 'Product Hunt Launch auf Deutsch: Anleitung',
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
        seoTitle: 'Product-Hunt-Alternativen: 12 Launch-Plattformen',
        title: 'Product-Hunt-Alternativen: 12 Launch-Plattformen für Gründer',
        description:
            'Product Hunt ist nicht die einzige Bühne. Diese Launch-Plattformen und Startup-Verzeichnisse lohnen sich für deutsche Gründer, sortiert nach Aufwand, Kosten und Domain Rating.',
        jean: 'Product Hunt ist der Champions-League-Abend. Für die Bundesliga-Spieltage davor und danach brauchst du die anderen.',
        minutes: 6,
        faq: [
            ['Welche kostenlosen Alternativen zu Product Hunt gibt es?', 'Laut unserer Tabelle unter anderem AlternativeTo (DR 80), Beta List (DR 70), SaasHub (DR 68), Startup Ranking (DR 67) und Dev Hunt (DR 56), alle kostenlos.'],
            ['Wo launche ich ein KI-Tool am besten?', 'Neben Launch-Plattformen in KI-Verzeichnissen. There’s An AI For That und Futurepedia sind kostenpflichtig, haben aber viel Publikum; GPTs Hunter ist ein kostenloser Einstieg für eigene GPTs.'],
            ['Lohnt sich ein Post auf Hacker News?', 'Ein „Show HN“ kann viele Besucher bringen, wenn das Produkt technisch interessant ist und du in den Kommentaren selbst antwortest. Werbesprache wird dort abgestraft.'],
            ['Wie plane ich die Launch-Wochen?', 'Erst Einreichungs-Paket und kostenlose Verzeichnisse, dann kleine Plattformen als Generalprobe, danach Product Hunt und zuletzt KI-Verzeichnisse und Auswertung mit UTM-Parametern.'],
        ],
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
        seoTitle: 'Newsletter-Anbieter für Gründer im Vergleich',
        title: 'Welcher Newsletter-Anbieter für Gründer? beehiiv, Kit, Brevo und GetResponse im Vergleich',
        description:
            'Newsletter-Anbieter für Gründer im Vergleich: Einstiegspreise laut Anbieter, Stärken, Datenschutz-Fragen und welcher Anbieter zu welchem Geschäftsmodell passt.',
        jean: 'Die Liste gehört dir, der Algorithmus nicht. Deshalb ist der Newsletter das Erste, was ich jedem Gründer einrichte.',
        minutes: 6,
        faq: [
            ['Welcher Newsletter-Anbieter ist kostenlos?', 'beehiiv, Kit, Brevo und GetResponse haben laut Anbieter alle einen kostenlosen Einstieg.'],
            ['Welcher Anbieter passt zu welchem Geschäftsmodell?', 'Geld mit dem Newsletter selbst: beehiiv. Digitale Produkte und Automatisierungen: Kit. SaaS oder Shop mit Transaktionsmails: Brevo. Vertrieb über Webinare: GetResponse.'],
            ['Was brauche ich für E-Mail-Marketing in Deutschland?', 'Double-Opt-in, eine Datenschutzerklärung, die den Anbieter nennt, und einen Auftragsverarbeitungsvertrag mit dem Anbieter.'],
            ['Worauf achte ich beim Preis?', 'Nicht auf den Einstiegspreis, sondern auf die Kosten bei 1.000, 5.000 und 10.000 Abonnenten. Der Newsletter-Kostenrechner zeigt das.'],
        ],
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
    {
        slug: 'ki-tools-datenschutz-dsgvo',
        seoTitle: 'KI-Tools und Datenschutz: DSGVO-Checkliste',
        title: 'KI-Tools und Datenschutz: die DSGVO-Checkliste für den Einsatz im Unternehmen',
        description:
            'Welche Daten in KI-Tools dürfen, was ein Auftragsverarbeitungsvertrag regelt, wie du das Training mit deinen Daten abschaltest und was der EU AI Act für Anwender bedeutet. Mit Checkliste.',
        jean: 'Ich bin kein Anwalt und spiele auch keinen im Internet. Aber diese Fragen sollte jeder klären, bevor das Team mit KI loslegt.',
        minutes: 7,
        faq: [
            ['Darf ich Kundendaten in ChatGPT oder andere KI-Tools eingeben?', 'Nur mit Rechtsgrundlage und passendem Vertrag, also in der Regel einem Auftragsverarbeitungsvertrag. Im Zweifel ersetzt du personenbezogene Angaben durch Platzhalter.'],
            ['Brauche ich einen AVV für KI-Tools?', 'Ja, wenn der Anbieter personenbezogene Daten in deinem Auftrag verarbeitet (Artikel 28 DSGVO). Gratis- und Privatkundentarife bieten häufig keinen.'],
            ['Darf ein Meeting-Assistent Gespräche aufzeichnen?', 'Nur wenn alle Teilnehmenden Bescheid wissen und zustimmen. Gibt es einen Betriebsrat, hat er oft ein Mitbestimmungsrecht.'],
            ['Was verlangt der EU AI Act von Unternehmen, die KI nutzen?', 'Unter anderem ausreichende KI-Kompetenz der Beschäftigten und Transparenz bei bestimmten KI-Inhalten. Für Hochrisiko-Bereiche wie Bewerberauswahl gelten strengere Pflichten.'],
        ],
        sections: [
            {
                h: 'Die wichtigste Regel zuerst',
                p: [
                    'Personenbezogene Daten gehören nur dann in ein KI-Tool, wenn es dafür eine Rechtsgrundlage gibt und der Anbieter vertraglich und technisch passt. Im Zweifel ersetzt du Namen, Adressen, Kundennummern und andere Angaben durch Platzhalter wie [KUNDE] oder [BETRAG]. Das reicht für die meisten Text- und Analyseaufgaben völlig aus.',
                    'Dieser Ratgeber ersetzt keine Rechtsberatung. Er hilft dir, die richtigen Fragen zu stellen, bevor du sie mit deiner Datenschutzberatung oder deinem Datenschutzbeauftragten klärst.',
                ],
            },
            {
                h: 'Auftragsverarbeitungsvertrag (AVV)',
                p: [
                    'Verarbeitet ein KI-Anbieter personenbezogene Daten in deinem Auftrag, brauchst du nach Artikel 28 DSGVO einen Auftragsverarbeitungsvertrag. Viele Anbieter stellen ihn für Business- oder Team-Tarife bereit, oft als Data Processing Addendum in den Kontoeinstellungen oder auf der Website.',
                    'Gratis- und Privatkundentarife bieten häufig keinen AVV. Für Firmendaten mit Personenbezug sind sie dann nicht geeignet.',
                ],
            },
            {
                h: 'Training mit deinen Daten abschalten',
                p: [
                    'Prüfe, ob der Anbieter Eingaben zum Training seiner Modelle verwendet, und ob sich das abschalten lässt. In Business-Tarifen ist das Training mit Kundendaten oft standardmäßig ausgeschaltet, in Privattarifen nicht immer.',
                    'Dokumentiere die Einstellung. Wenn später jemand fragt, was mit den Daten passiert, ist eine klare Antwort Gold wert.',
                ],
            },
            {
                h: 'Serverstandort und Übermittlung in Drittländer',
                p: [
                    'Werden Daten außerhalb der EU verarbeitet, braucht es eine Grundlage für die Übermittlung, etwa einen Angemessenheitsbeschluss der EU-Kommission oder Standardvertragsklauseln. Anbieter nennen das meist in ihrem AVV oder ihrer Datenschutzerklärung.',
                    'Manche Anbieter bieten Datenhaltung in der EU an. Das vereinfacht die Bewertung, ersetzt aber nicht den Blick in den Vertrag.',
                ],
            },
            {
                h: 'Meetings, Aufnahmen und Mitbestimmung',
                p: [
                    'Meeting-Assistenten zeichnen Gespräche auf und erstellen Transkripte. Alle Teilnehmenden müssen das wissen, und für die Aufnahme braucht es ihre Zustimmung. Das heimliche Aufnehmen nichtöffentlich gesprochener Worte ist in Deutschland sogar strafbar.',
                    'Gibt es einen Betriebsrat, hat er bei technischen Einrichtungen, die Verhalten oder Leistung von Beschäftigten überwachen können, ein Mitbestimmungsrecht. KI-Tools fallen oft darunter. Bezieh ihn früh ein.',
                ],
            },
            {
                h: 'Was der EU AI Act für Anwender bedeutet',
                p: [
                    'Der EU AI Act ist seit August 2024 in Kraft und gilt gestaffelt. Bestimmte KI-Praktiken sind verboten, und Unternehmen, die KI einsetzen, sollen dafür sorgen, dass ihre Beschäftigten ausreichende KI-Kompetenz haben. Dazu kommen Transparenzpflichten, etwa wenn KI-generierte Inhalte als solche erkennbar sein müssen.',
                    'Strenge Pflichten gelten für Hochrisiko-Systeme, zum Beispiel KI für die Auswahl von Bewerbern oder die Bewertung von Beschäftigten. Wer KI in solchen Bereichen einsetzt, sollte die aktuellen Fristen und Pflichten rechtlich prüfen lassen, weil sich die Zeitpläne der Umsetzung noch ändern können.',
                ],
            },
            {
                h: 'Die Checkliste vor dem Start',
                p: [
                    '1. Welche Daten sollen in das Tool, und geht es auch mit Platzhaltern? 2. Gibt es einen AVV, und ist er abgeschlossen? 3. Ist das Training mit unseren Daten abgeschaltet? 4. Wo werden die Daten verarbeitet, und auf welcher Grundlage werden sie übermittelt? 5. Wer im Team darf das Tool wofür nutzen? 6. Sind Betriebsrat und Datenschutzbeauftragte eingebunden? 7. Wie kennzeichnen wir KI-Inhalte, wo das nötig ist?',
                    'Halte die Antworten in einer kurzen internen Richtlinie fest. Sie muss nicht lang sein, aber jede Person im Team sollte sie kennen.',
                ],
            },
        ],
        links: [
            ['/ki-tools/fuer/hr-recruiting', 'KI-Tools für HR und Recruiting'],
            ['/ki-tools/fuer/selbststaendige', 'KI-Tools für Selbstständige'],
            ['/glossar/prompt-injection', 'Was ist Prompt-Injection?'],
            ['/tutorials/chatgpt-richtig-nutzen', 'Tutorial: ChatGPT richtig nutzen'],
            ['/ki-tools/sicherheit', 'KI-Erkennung und Sicherheit'],
        ],
    },
    {
        slug: 'ki-bildgeneratoren-vergleich',
        seoTitle: 'KI-Bildgeneratoren 2026: Midjourney, Leonardo & Co.',
        title: 'KI-Bildgeneratoren 2026: Midjourney, Leonardo AI, Canva und kostenlose Alternativen',
        description:
            'Welcher KI-Bildgenerator passt zu dir? Preise laut Anbieter, was „kostenlos“ wirklich bedeutet, Rechte bei kommerzieller Nutzung und wann sich lokale Modelle lohnen.',
        jean: 'Das beste Bild-Tool ist das, dessen Haken du vorher kennst. Darum stehen die Haken hier gleich mit drin.',
        minutes: 6,
        sections: [
            {
                h: 'Die Kurzfassung',
                p: [
                    'Midjourney liefert stilistisch starke Bilder, gibt es aber nur im Abo: Basic kostet laut Anbieter $10 im Monat oder $8 bei jährlicher Zahlung, ab Standard sind Bilder im Relax-Modus unbegrenzt. Leonardo AI hat einen Gratis-Tarif mit 150 Fast Tokens pro Tag, bezahlt geht es ab $12 im Monat los. Canva bündelt KI-Bildfunktionen mit Vorlagen und Brand Kits, mit Gratis-Tarif und Oberfläche auf Deutsch.',
                    'Wer nur gelegentlich ein Motiv braucht, startet kostenlos. Wer täglich Bilder produziert oder einen eigenen Stil will, landet meist bei einem Abo.',
                ],
            },
            {
                h: 'Was „kostenlos“ bei Bild-KI bedeutet',
                p: [
                    'Gratis-Tarife haben fast immer ein Kontingent, das sich täglich oder monatlich erneuert. Bei Leonardo AI sind die Ergebnisse im Gratis-Tarif zudem öffentlich sichtbar, private Ergebnisse gibt es erst in den bezahlten Tarifen.',
                    'Prüfe vor dem Einsatz drei Dinge: Wer darf die Bilder sehen, ist die kommerzielle Nutzung erlaubt, und gibt es Wasserzeichen oder Auflösungsgrenzen? Die Antworten stehen in den Nutzungsbedingungen, nicht auf der Startseite.',
                ],
            },
            {
                h: 'Rechte und kommerzielle Nutzung',
                p: [
                    'Bei Midjourney brauchen Firmen mit mehr als 1 Mio. US-Dollar Jahresumsatz laut Anbieter den Pro- oder Mega-Tarif, den privaten Stealth-Modus gibt es ebenfalls erst ab Pro. Solche Schwellen haben auch andere Anbieter, deshalb lohnt der Blick in die Bedingungen vor dem ersten Kundenprojekt.',
                    'Zeigt ein Bild echte Personen, Marken oder Werke anderer, gelten Persönlichkeits-, Marken- und Urheberrechte wie bei jedem anderen Bild. Für Deepfakes und täuschend echte Fotos gelten zusätzlich Kennzeichnungspflichten, etwa nach dem EU AI Act. Standards wie C2PA helfen, die Herkunft eines Bildes nachvollziehbar zu machen.',
                ],
            },
            {
                h: 'Bessere Bilder durch bessere Prompts',
                p: [
                    'Ein guter Bild-Prompt beschreibt Motiv, Stil, Licht, Perspektive und Format. Statt „ein Hund“ also „Porträt eines Beagles im Herbstlaub, weiches Gegenlicht, Teleobjektiv, Querformat“. Text-to-Image-Modelle reagieren stark auf Stil- und Kamerabegriffe.',
                    'Für Korrekturen musst du nicht neu anfangen: Mit Inpainting änderst du nur einen Bildbereich, mit Upscaling bringst du ein gelungenes Motiv auf eine höhere Auflösung.',
                ],
            },
            {
                h: 'Lokal und Open Source: wann es sich lohnt',
                p: [
                    'Offene Diffusionsmodelle lassen sich auf dem eigenen Rechner betreiben. Plattformen wie Civitai sammeln dafür Modelle und LoRAs, also kleine Zusatzmodelle für einen bestimmten Stil oder eine Figur. Der Vorteil: keine laufenden Kosten pro Bild und die Daten bleiben bei dir.',
                    'Dafür brauchst du eine Grafikkarte mit genug VRAM und etwas Einarbeitung. Quantisierte Modelle senken den Speicherbedarf. Für Einsteiger ist ein Online-Dienst meist der schnellere Weg zum ersten guten Bild.',
                ],
            },
            {
                h: 'Checkliste vor der Entscheidung',
                p: [
                    '1. Wie viele Bilder brauchst du pro Monat? 2. Müssen die Ergebnisse privat bleiben? 3. Ist kommerzielle Nutzung im gewählten Tarif erlaubt? 4. Brauchst du Bearbeitung wie Inpainting oder nur neue Motive? 5. Soll das Tool auch Layouts und Social Posts können? Dann ist ein Design-Tool wie Canva oft praktischer als ein reiner Generator.',
                ],
            },
        ],
        faq: [
            ['Welcher KI-Bildgenerator ist kostenlos?', 'Leonardo AI und Canva haben laut Anbieter Gratis-Tarife, bei Leonardo AI mit 150 Fast Tokens pro Tag und öffentlichen Ergebnissen. Midjourney hat keinen Gratis-Tarif.'],
            ['Darf ich KI-Bilder kommerziell nutzen?', 'Das regeln die Bedingungen des jeweiligen Anbieters und Tarifs. Bei Midjourney brauchen Firmen mit über 1 Mio. US-Dollar Jahresumsatz Pro oder Mega.'],
            ['Was kostet Midjourney?', 'Laut Anbieter ab $10 im Monat (Basic) bzw. $8 bei jährlicher Zahlung.'],
            ['Kann ich KI-Bilder auf dem eigenen PC erzeugen?', 'Ja, mit offenen Diffusionsmodellen. Du brauchst dafür eine Grafikkarte mit ausreichend VRAM und etwas Einarbeitung.'],
        ],
        links: [
            ['/tool-vergleiche/midjourney-vs-leonardo-ai', 'Midjourney vs. Leonardo AI im Vergleich'],
            ['/ki-tools/alternativen/midjourney', 'Alternativen zu Midjourney'],
            ['/tutorials/bild-prompts-schreiben', 'Tutorial: Bild-Prompts schreiben'],
            ['/ki-tools/bild', 'Alle KI-Bildtools in der Datenbank'],
            ['/glossar/diffusionsmodell', 'Was ist ein Diffusionsmodell?'],
        ],
    },
    {
        slug: 'ki-video-tools-vergleich',
        seoTitle: 'KI-Video-Tools 2026: Runway, Synthesia, HeyGen & Co.',
        title: 'KI-Video-Tools 2026: Runway, Synthesia, HeyGen, InVideo, Descript und Pictory im Überblick',
        description:
            'Sechs KI-Video-Tools mit Preisen laut Anbieter: kreative Clips, Avatar-Videos, Text zu Video und Schnitt per Transkript. Welches Tool passt zu welchem Video?',
        jean: 'Bei KI-Video ist die wichtigste Frage nicht „welches Tool“, sondern „welche Art Video“. Danach sortiert sich der Rest fast von selbst.',
        minutes: 6,
        sections: [
            {
                h: 'Vier Arten von KI-Video',
                p: [
                    'Generative Clips entstehen komplett aus Text oder Bild, etwa mit Runway. Avatar-Videos lassen einen digitalen Sprecher deinen Text vortragen, dafür stehen Synthesia und HeyGen. Text-zu-Video-Tools wie Pictory und InVideo AI bauen aus Skript oder Artikel ein Video mit Stockmaterial. Descript wiederum schneidet eigene Aufnahmen über das Transkript.',
                    'Viele Tools überschneiden sich inzwischen. Trotzdem hat jedes einen klaren Schwerpunkt, und der entscheidet über Ergebnis und Preis.',
                ],
            },
            {
                h: 'Kreative Clips: Runway',
                p: [
                    'Runway ist ein KI-Videostudio mit eigenen und fremden Bild- und Videomodellen. Der Gratis-Tarif enthält laut Anbieter 125 einmalige Credits, bezahlt geht es ab $12 im Monat (jährlich) bzw. $15 monatlich los, dann ohne Wasserzeichen und mit 4K-Upscaling.',
                    'Gut für Moodfilme, Produktszenen und kurze Effektclips. Für lange Erklärvideos mit Sprecher ist ein Avatar-Tool meist effizienter.',
                ],
            },
            {
                h: 'Avatar-Videos: Synthesia und HeyGen',
                p: [
                    'Synthesia richtet sich an Unternehmen für Schulungs- und Erklärvideos, mit Gratis-Tarif und Starter ab $29 im Monat. HeyGen bietet Avatare, Voice Cloning und Videoübersetzung, ebenfalls mit Gratis-Tarif, Creator ab $29 monatlich bzw. $24 bei jährlicher Zahlung.',
                    'Wer Videos in mehrere Sprachen bringen will, schaut sich die Übersetzungsfunktionen genau an. Bei Avataren echter Personen braucht es deren ausdrückliche Zustimmung.',
                ],
            },
            {
                h: 'Text zu Video: InVideo AI und Pictory',
                p: [
                    'InVideo AI kombiniert Agenten, generative Modelle und einen Timeline-Editor, Starter ab $10 pro Seat (jährlich, regulär $20). Pictory macht aus Skripten, URLs oder Präsentationen Videos mit Stockmaterial, KI-Stimmen und Untertiteln, hat keinen Gratis-Tarif, aber 14 Tage Testphase und Starter ab $25 im Monat (jährlich).',
                    'Beide eignen sich, um aus vorhandenen Texten schnell Social-Clips zu machen. Ein gutes Skript ist hier wichtiger als jede Einstellung im Tool.',
                ],
            },
            {
                h: 'Eigene Aufnahmen schneiden: Descript',
                p: [
                    'Descript ist ein textbasierter Video- und Podcast-Editor: Du löschst Wörter im Transkript, und die Aufnahme wird mitgeschnitten. Dazu kommen Studio Sound und Clip-Erstellung. Es gibt einen Gratis-Tarif, Hobbyist kostet $16 im Monat (jährlich) bzw. $24 monatlich.',
                ],
            },
            {
                h: 'So triffst du die Wahl',
                p: [
                    '1. Welche Art Video brauchst du: Clip, Avatar, Text zu Video oder Schnitt? 2. Wie viele Minuten pro Monat? Credits und Minutenlimits unterscheiden sich stark. 3. Brauchst du mehrere Sprachen? 4. Reicht der Gratis-Tarif zum Testen, oder gibt es nur eine Testphase? 5. Wer spricht: KI-Stimme, Avatar oder du selbst?',
                    'Teste mit einem echten Projekt, nicht mit einer Demo. Erst dann siehst du, wie viele Credits ein fertiges Video wirklich kostet.',
                ],
            },
        ],
        faq: [
            ['Welches KI-Video-Tool ist kostenlos?', 'Runway, Synthesia, HeyGen und Descript haben laut Anbieter Gratis-Tarife, bei Runway mit 125 einmaligen Credits. Pictory bietet stattdessen 14 Tage Testphase.'],
            ['Was ist der Unterschied zwischen Synthesia und HeyGen?', 'Beide erstellen Avatar-Videos. Synthesia richtet sich vor allem an Unternehmen für Schulungen, HeyGen betont Voice Cloning und Videoübersetzung.'],
            ['Kann KI aus einem Blogartikel ein Video machen?', 'Ja. Pictory erstellt Videos aus Skripten, URLs oder Präsentationen, InVideo AI arbeitet ebenfalls aus Text.'],
            ['Brauche ich für KI-Videos eine Kennzeichnung?', 'Bei täuschend echten Inhalten wie Deepfakes sieht der EU AI Act Transparenzpflichten vor. Prüfe zusätzlich die Regeln der Plattform, auf der du veröffentlichst.'],
        ],
        links: [
            ['/tool-vergleiche/runway-vs-invideo-ai', 'Runway vs. InVideo AI'],
            ['/tool-vergleiche/synthesia-vs-heygen-vs-invideo-vs-pictory', 'Synthesia vs. HeyGen vs. InVideo vs. Pictory'],
            ['/tool-vergleiche/descript-vs-pictory', 'Descript vs. Pictory'],
            ['/ki-tools/video', 'Alle KI-Videotools in der Datenbank'],
            ['/prompts/kategorie/video', 'Video-Prompts für Skripte und Hooks'],
        ],
    },
    {
        slug: 'ki-tool-launchen-30-tage',
        seoTitle: 'KI-Tool launchen: der 30-Tage-Plan',
        title: 'KI-Tool launchen in 30 Tagen: der Plan von der ersten Einreichung bis zu echten Nutzern',
        description:
            'Ein realistischer 30-Tage-Plan für den Launch deines KI-Tools: Unterlagen, kostenlose Verzeichnisse, starke Domains, Launch-Plattformen, Messung. Mit Zahlen aus 256 geprüften Verzeichnissen.',
        jean: 'Ein Launch ist kein Tag, sondern ein Monat. Wer am ersten Tag alles abfeuert, steht am fünften Tag allein im Regen.',
        minutes: 8,
        faq: [
            ['Wie viele Verzeichnisse brauche ich für den Launch?', 'Lieber 20 bis 40 passende Einträge über drei Wochen verteilt als 200 an einem Tag. In der Liste auf AIGeddon sind 164 von 256 Verzeichnissen kostenlos, bei 158 davon läuft die Einreichung reibungslos.'],
            ['Lohnen sich bezahlte Einträge?', 'Nur, wenn Reichweite und Zielgruppe passen. Prüfe Domain Rating, Besuche und ob der Link dofollow ist. Für 25 Verzeichnisse gibt es auf AIGeddon Rabattcodes.'],
            ['Wann sollte ich auf Product Hunt launchen?', 'Erst, wenn Unterlagen, Landingpage und ein paar erste Nutzer stehen, im Plan unten in Woche 3. Die Wochen davor bauen Sichtbarkeit und Feedback auf.'],
            ['Woran erkenne ich, ob ein Eintrag etwas gebracht hat?', 'An Besuchern und Anmeldungen, nicht am Gefühl. Gib jedem Eintrag einen Link mit UTM-Parametern und vergleiche nach vier Wochen.'],
        ],
        sections: [
            {
                h: 'Vor dem Start: was du brauchst',
                p: [
                    'Bevor du das erste Formular öffnest, lege dir ein Einreichungs-Paket an: Name, ein Einzeiler mit höchstens 60 Zeichen, eine Kurzbeschreibung, eine ausführliche Beschreibung, Logo im Quadrat, zwei bis drei Screenshots, Kategorie, Preismodell und einen Link mit UTM-Parametern. Das Launch-Kit auf AIGeddon erzeugt dir die Texte auf Deutsch und Englisch.',
                    'Wichtig ist, überall dieselben Angaben zu verwenden. Gleicher Name, gleiche Beschreibung, gleiche Kategorie: So erkennen Google und KI-Suchen dein Tool als eine Marke und nicht als zwanzig halbe.',
                ],
            },
            {
                h: 'Tag 1 bis 7: kostenlose Verzeichnisse mit reibungsloser Einreichung',
                p: [
                    'Von den 256 Verzeichnissen in der Liste sind 164 kostenlos, bei 158 davon läuft die Einreichung nach bisherigen Tests reibungslos. Fang dort an: wenig Aufwand, kein Risiko, erste Links.',
                    'Sortiere nach Domain Rating und arbeite dich von oben nach unten. Fünf bis acht Einträge am Tag sind ein gutes Tempo. Notiere Datum und Einreichungsseite, damit du später nachhalten kannst.',
                ],
            },
            {
                h: 'Tag 8 bis 14: starke Domains und Generalprobe',
                p: [
                    '55 Verzeichnisse der Liste haben ein Domain Rating von 50 oder mehr, 39 davon sind kostenlos und reibungslos. Diese Einträge zählen für Google am meisten. Nimm dir für jedes etwas mehr Zeit und gute Screenshots.',
                    'Parallel eine kleine Launch-Plattform als Generalprobe: Ablauf üben, Feedback sammeln, Landingpage verbessern. Die Ratgeber zu Product-Hunt-Alternativen nennen passende Plattformen.',
                ],
            },
            {
                h: 'Tag 15 bis 21: der große Launch-Tag',
                p: [
                    'Jetzt der Höhepunkt, zum Beispiel Product Hunt. Bereite Unterstützer vor, die am Tag wirklich da sind, und beantworte jeden Kommentar selbst. Ein Launch-Tag ohne Vorbereitung verschwindet nach wenigen Stunden aus dem Blick.',
                    'Nutze den Tag auch für deine eigenen Kanäle: Newsletter, LinkedIn, Communitys. Eine ehrliche Geschichte, welches Problem du löst, wirkt dort mehr als jede Werbezeile.',
                ],
            },
            {
                h: 'Tag 22 bis 30: Reichweite und Auswertung',
                p: [
                    '28 Verzeichnisse der Liste haben mindestens 500.000 Besuche im Monat. Hier lohnt sich ein bezahlter Eintrag am ehesten, wenn deine Zielgruppe dort unterwegs ist. Für 25 Verzeichnisse gibt es Rabattcodes.',
                    'Nach vier Wochen wertest du aus: Welche Einträge bringen Besucher und Anmeldungen? Dort machst du weiter, den Rest hakst du ab. Wie lange die Freischaltung dauert, steht für 71 Verzeichnisse mit Beleg auf der Seite Freischaltdauer.',
                ],
            },
            {
                h: 'Die drei häufigsten Fehler',
                p: [
                    '1. Alles an einem Tag einreichen und danach nichts mehr tun. 2. In jedem Verzeichnis einen anderen Text verwenden. 3. Keine Links mit UTM-Parametern, sodass niemand weiß, was gewirkt hat.',
                    'Wenn dir die Zeit fehlt: Der Launch-Zeit-Rechner zeigt, wie viele Stunden deine Runde braucht, und über das Formular am Ende der Seite kannst du den Eintragsservice anfragen.',
                ],
            },
        ],
        links: [
            ['/launch-kit', 'Launch-Kit: Texte für alle Verzeichnisse'],
            ['/liste/kostenlos', 'Alle kostenlosen KI-Verzeichnisse'],
            ['/liste/domain-rating-50-plus', 'KI-Verzeichnisse mit Domain Rating 50+'],
            ['/rechner/launch-zeit', 'Launch-Zeit-Rechner'],
            ['/freischaltung', 'Freischaltdauer im Vergleich'],
        ],
    },
    {
        slug: 'chatgpt-claude-gemini-welcher-chatbot',
        seoTitle: 'ChatGPT, Claude oder Gemini: welcher Chatbot wofür?',
        title: 'ChatGPT, Claude oder Gemini: welcher Chatbot passt zu welcher Aufgabe?',
        description:
            'Statt „der beste Chatbot“: so findest du heraus, welche KI für deine Aufgaben am besten passt. Mit Testmethode, Datenschutz-Fragen und Preisen nur dort, wo der Anbieter sie prüfbar nennt.',
        jean: 'Die Frage „Welche KI ist die beste?“ ist wie „Welches Werkzeug ist das beste?“. Kommt drauf an, ob du einen Nagel hast.',
        minutes: 6,
        faq: [
            ['Welcher Chatbot ist der beste?', 'Das hängt von deinen Aufgaben ab und ändert sich mit jeder Modellgeneration. Teste die Kandidaten mit denselben Aufgaben aus deinem Alltag, zum Beispiel mit dem KI-Test auf AIGeddon.'],
            ['Was kostet Claude?', 'Laut Anbieter gibt es einen Gratis-Tarif, Pro kostet $17 im Monat bei jährlicher Zahlung bzw. $20 bei monatlicher Zahlung (Stand Oktober 2026).'],
            ['Darf ich Firmendaten in einen Chatbot eingeben?', 'Nur mit passender Rechtsgrundlage und Vertrag, meist in Business-Tarifen mit Auftragsverarbeitungsvertrag. Im Zweifel ersetzt du Namen und Zahlen durch Platzhalter.'],
            ['Brauche ich mehrere Chatbots?', 'Oft reicht einer für den Alltag. Ein zweiter lohnt sich, wenn du Antworten gegenprüfen willst oder eine Aufgabe hast, bei der ein anderes Modell im Test klar besser war.'],
        ],
        sections: [
            {
                h: 'Warum es „den besten“ Chatbot nicht gibt',
                p: [
                    'ChatGPT von OpenAI, Claude von Anthropic und Gemini von Google werden ständig aktualisiert. Ein Vergleich von letztem Monat kann heute schon falsch sein. Dazu kommt: Jede Aufgabe ist anders. Ein Modell, das brillant programmiert, kann bei deutschen Werbetexten mittelmäßig sein.',
                    'Deshalb hilft keine Rangliste aus dem Internet, sondern ein kleiner Test mit deinen eigenen Aufgaben.',
                ],
            },
            {
                h: 'So testest du in 20 Minuten selbst',
                p: [
                    'Nimm drei bis fünf echte Aufgaben aus deinem Alltag, zum Beispiel eine E-Mail, eine Zusammenfassung und eine Rechenaufgabe. Schick dieselben Aufgaben an jeden Kandidaten, ohne die Formulierung zu ändern, und bewerte die Antworten nach vorher festgelegten Kriterien.',
                    'Der KI-Test auf AIGeddon macht genau das mit 50 vorbereiteten Aufgaben aus Logik, Fakten, Ehrlichkeit, Deutsch, Kreativität und Code. Du schickst die Aufgaben mit einem Klick an die KIs, bewertest selbst und bekommst eine Rangliste.',
                ],
            },
            {
                h: 'Worauf du beim Vergleich achten solltest',
                p: [
                    'Ehrlichkeit: Gibt die KI zu, wenn sie etwas nicht weiß, oder erfindet sie Quellen? Die Aufgaben zu Halluzinationen im KI-Test zeigen das schnell. Deutsch: Klingt der Text natürlich, stimmen Kommas und Anrede? Kontext: Kann die KI lange Dokumente verarbeiten, die du ihr gibst?',
                    'Dazu kommen praktische Fragen: Gibt es eine Websuche mit Quellen, kann das Tool Dateien lesen, gibt es eine App für unterwegs?',
                ],
            },
            {
                h: 'Preise und Tarife',
                p: [
                    'Alle drei haben kostenlose Einstiege, die Details ändern sich aber häufig. Für Claude nennt der Anbieter einen Gratis-Tarif und Pro ab $17 im Monat bei jährlicher Zahlung. Für Gemini nennt Google in der US-Anzeige Google AI Plus ab $4.99 im Monat, deutsche Preise zeigt die Seite nicht. Die ChatGPT-Preisseite lädt die Preise erst per Skript, deshalb nennen wir dort keine Zahl.',
                    'Ob sich ein Abo lohnt, rechnest du am besten selbst nach: Der KI-Zeitersparnis-Rechner stellt gesparte Stunden gegen die Kosten, der Abo-Rechner zeigt, ab wann sich jährliche Zahlung lohnt.',
                ],
            },
            {
                h: 'Datenschutz im Team',
                p: [
                    'Für private Notizen reicht oft der Gratis-Tarif. Sobald Kunden- oder Personaldaten im Spiel sind, brauchst du einen Tarif mit Auftragsverarbeitungsvertrag, und das Training mit deinen Daten sollte abgeschaltet sein. Die DSGVO-Checkliste auf AIGeddon fasst die Fragen zusammen.',
                ],
            },
        ],
        links: [
            ['/ki-test', 'KI-Test: ChatGPT, Claude und Gemini selbst vergleichen'],
            ['/tools/claude', 'Claude: Preis und Gratis-Tarif'],
            ['/tools/chatgpt', 'ChatGPT: Tarife im Steckbrief'],
            ['/tools/google-gemini', 'Google Gemini: Preis laut Anbieter'],
            ['/ki-tools/chatgpt-alternativen', 'ChatGPT-Alternativen'],
            ['/tutorials/chatgpt-richtig-nutzen', 'Tutorial: ChatGPT richtig nutzen'],
            ['/ratgeber/ki-tools-datenschutz-dsgvo', 'DSGVO-Checkliste für KI-Tools'],
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
