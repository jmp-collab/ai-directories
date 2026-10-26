// KI-News: aktuelle Meldungen, jeweils an offiziellen Quellen geprüft und mit den passenden Seiten auf AIGeddon verknüpft.
// Felder: slug, titel, description, datum (Ereignis), veroeffentlicht, thema, emoji, minutes, jean, kurz (3 Punkte),
// sections [{ h, p }], tun (Checkliste), bezug [[pfad, titel, warum]], faq [{ q, a }], quellen [{ titel, url }]
export const NEWS_STAND = '26. Oktober 2026'

export const NEWS = [
    {
        slug: 'php2shell-ki-findet-php-luecken',
        titel: 'PHP2Shell: KI findet uralte PHP-Lücken, jetzt updaten',
        seoTitle: 'PHP2Shell: KI findet kritische PHP-Lücken, jetzt updaten',
        description:
            'Zwei kritische Lücken in PHP erlauben Angriffe ohne Login, gefunden mit Hilfe von KI. Welche PHP-Versionen sicher sind, wer betroffen ist und was du mit deiner WordPress-Seite jetzt tun musst.',
        datum: '2026-10-21',
        veroeffentlicht: '2026-10-26',
        thema: 'Sicherheit',
        emoji: '🚨',
        minutes: 6,
        jean: 'Wenn deine Website auf WordPress, Shopware oder Joomla läuft, ist das hier kein Lesestoff für später. Erst updaten, dann Kaffee.',
        kurz: [
            'Am 21. Oktober 2026 hat das PHP-Projekt PHP 8.5.12, 8.4.27, 8.3.36 und 8.2.35 veröffentlicht. Sie schließen zwei kritische Lücken (CVSS 9.2), über die Angreifer ohne Login Code auf dem Server ausführen können.',
            'Gefunden wurden die Fehler mit Hilfe von KI: Calif nutzte GPT-5.6 Sol im Programm „Patch the Planet“ von OpenAI, Wiz Research fand sie unabhängig davon mit Wiz Atlas, Gemini 4 Argon und GPT-5.6 Sol.',
            'Betroffen ist laut Wiz jede PHP-Version der letzten zehn Jahre, zurück bis 5.4. PHP 8.1 und älter bekommen vom PHP-Projekt keine Updates mehr.',
        ],
        sections: [
            {
                h: 'Was ist passiert?',
                p: [
                    'PHP ist die Sprache, auf der ein Großteil des Webs läuft: WordPress, Joomla, Drupal, viele Shops und Foren. Laut Wiz läuft rund 70 % aller Websites auf PHP. Genau dort steckten zwei Fehler im Kern der Sprache, nicht in einem Plugin, nicht in einem Theme, sondern im Motor selbst.',
                    'Das PHP-Projekt hat die Lücken am 20. Oktober angekündigt und am 21. Oktober 2026 um 14:00 Uhr UTC die Updates veröffentlicht. Beide Lücken sind mit CVSS v4.0 9.2 bewertet, also ganz oben auf der Skala. Sie laufen unter den Kennungen CVE-2026-109618 und CVE-2026-109619.',
                    'Wiz hat das Ganze „PHP2Shell“ getauft und gezeigt, dass Angreifer damit ohne Anmeldung Code auf Servern mit WordPress, Drupal und Joomla ausführen konnten. Zusätzlich ließ sich Speicher auslesen, in dem Passwörter, Tokens und API-Schlüssel stehen können.',
                ],
            },
            {
                h: 'Wie hat KI die Lücken gefunden?',
                p: [
                    'Die Grundfehler sind laut Wiz über ein Jahrzehnt alt. Sie auszunutzen erforderte aber eine so verwickelte Kette von Schritten, dass das für menschliche Forscher an der Grenze des Machbaren lag. KI-Modelle haben diese Hürde deutlich gesenkt.',
                    'Wiz Research meldet den ersten Fund am 19. August 2026, entdeckt mit Wiz Atlas, Gemini 4 Argon und GPT-5.6 Sol. Unabhängig davon fand Calif einen kritischen Fehler mit GPT-5.6 Sol im Rahmen von „Patch the Planet“, einer Initiative von OpenAI, die Lücken in Open-Source-Software aufspüren soll. Danach koordinierten PHP-Team, OpenAI, Wiz, Cloudflare und weitere Partner zwei Monate lang die Reparatur.',
                    'Die Kehrseite nennt OpenAI selbst: Dieselben Fähigkeiten helfen auch Angreifern, schneller Exploits zu bauen. Die europäische Cybersicherheitsstelle CERT-EU meldet, dass erste Proof-of-Concepts kursieren. Das Zeitfenster zum Updaten ist also jetzt, nicht nächste Woche.',
                ],
            },
            {
                h: 'Bin ich betroffen?',
                p: [
                    'Laut PHP-Projekt sind alle PHP-Installationen gefährdet, die Webanfragen beantworten: PHP-FPM, Apache mit mod_php, php-cgi, FrankenPHP und LiteSpeed. Am höchsten schätzt das PHP-Team das Risiko bei mod_php ein. Dort reicht eine einzige Anfrage ohne Login, bevor überhaupt Code deiner Website läuft.',
                    'Sicher sind die Versionen 8.5.12, 8.4.27, 8.3.36 und 8.2.35 sowie neuer. Wer PHP 8.1 oder älter fährt, bekommt vom PHP-Projekt kein Update mehr. Für 7.4, 8.0 und 8.1 gibt es nur minimale Quellcode-Patches für Leute, die selbst kompilieren. Manche Linux-Distributionen und LTS-Anbieter liefern Rückportierungen, da hilft nur nachfragen.',
                    'Und gleich noch ein Termin für den Kalender: PHP 8.2 erreicht am 31. Dezember 2026 das Ende seiner Lebenszeit. Wer jetzt sowieso anfasst, kann direkt auf 8.4 oder 8.5 springen und spart sich den nächsten Schreck im Januar.',
                ],
            },
            {
                h: 'Was heißt das für Website-Betreiber ohne eigenen Server?',
                p: [
                    'Die meisten kleinen Seiten laufen bei einem Hoster. Dort entscheidet der Anbieter, welche PHP-Builds installiert sind. Viele Hoster haben die Patches laut PHP-Projekt vorab bekommen. Prüf trotzdem in deinem Hosting-Panel, welche PHP-Version deine Seite nutzt, und stell im Zweifel auf die neueste unterstützte um.',
                    'Ein Website-Baukasten, bei dem du gar keinen Server siehst, kümmert sich in der Regel selbst darum. Eine schnelle Nachfrage beim Support kostet trotzdem nur eine Mail.',
                    'Wer KI zum Coden nutzt, hat übrigens ein neues Werkzeug: OpenAI stellt einen PHP-Versions-Prüfer als Skill für Codex bereit. Ein Skill ist ein Paket aus Anweisungen und Skripten, das einem KI-Agenten eine konkrete Aufgabe beibringt.',
                ],
            },
            {
                h: 'Jeans Einordnung',
                p: [
                    'Das ist die Nachricht, bei der man gleichzeitig staunen und schwitzen kann. Staunen, weil KI einen Fehler aufgespürt hat, der Menschen ein Jahrzehnt lang durchgerutscht ist. Schwitzen, weil dieselbe Technik jetzt allen zur Verfügung steht, auch den Falschen.',
                    'Für dich heißt das ganz handfest: Updates sind ab sofort keine lästige Pflicht mehr, sondern Teil des Geschäftsmodells. Wenn KI Lücken in Wochen statt Jahren findet, zählt, wer schneller patcht.',
                ],
            },
        ],
        tun: [
            'PHP-Version im Hosting-Panel oder per phpinfo() prüfen.',
            'Auf 8.5.12, 8.4.27, 8.3.36 oder 8.2.35 aktualisieren, bei eigenem Server über die Paketquellen deiner Distribution.',
            'Läuft noch PHP 8.1 oder älter: Hoster oder LTS-Anbieter nach Rückportierung fragen oder umziehen.',
            'Nach dem Update Passwörter und API-Schlüssel tauschen, wenn die Seite vorher offen im Netz hing.',
            'Wenn sofortiges Updaten nicht geht: Seite laut CERT-EU vom öffentlichen Netz trennen, bis der Fix läuft.',
        ],
        bezug: [
            ['/ki-tools/sicherheit/', 'KI-Tools für Sicherheit', 'Die Rubrik mit Werkzeugen, die Lücken und Angriffe aufspüren.'],
            ['/glossar/agent-skills/', 'Was sind Agent Skills?', 'Der PHP-Prüfer von OpenAI kommt als Skill. Hier steht, was das ist.'],
            ['/prompts/fehlermeldung-debuggen/', 'Prompt: Fehlermeldung debuggen', 'Wenn nach dem PHP-Update etwas klemmt, hilft diese Vorlage beim Eingrenzen.'],
            ['/ki-tools/coding/', 'KI-Tools zum Programmieren', 'Coding-Assistenten, die beim Umstieg auf eine neue PHP-Version helfen.'],
            ['/neue-ki-modelle/gemini-4-argon/', 'Gemini 4 Argon', 'Eines der Modelle, mit denen Wiz die Lücken gefunden hat.'],
            ['/ki-tools/fuer/onlinehaendler/', 'KI-Tools für Onlinehändler', 'Viele Shopsysteme laufen auf PHP. Hier geht es um Tools für Shop-Betreiber.'],
        ],
        faq: [
            {
                q: 'Welche PHP-Version ist nach PHP2Shell sicher?',
                a: 'Laut PHP-Projekt PHP 8.5.12, 8.4.27, 8.3.36 und 8.2.35 sowie neuere Versionen. Sie wurden am 21. Oktober 2026 veröffentlicht und schließen CVE-2026-109618 und CVE-2026-109619.',
            },
            {
                q: 'Ist WordPress von PHP2Shell betroffen?',
                a: 'Ja, wenn WordPress auf einer ungepatchten PHP-Version läuft. Die Lücke steckt in PHP selbst, nicht in WordPress. Wiz hat Codeausführung ohne Login auf WordPress, Drupal und Joomla demonstriert. Ein WordPress-Update allein reicht nicht, die PHP-Version muss aktualisiert werden.',
            },
            {
                q: 'Wer hat die PHP-Lücken gefunden?',
                a: 'Calif fand einen kritischen Fehler mit GPT-5.6 Sol im OpenAI-Programm „Patch the Planet“. Wiz Research entdeckte beide Lücken unabhängig davon mit Wiz Atlas, Gemini 4 Argon und GPT-5.6 Sol. Die Reparatur hat das PHP-Team geleitet.',
            },
            {
                q: 'Was mache ich mit PHP 8.1 oder älter?',
                a: 'Das PHP-Projekt liefert für 8.1 und älter keine Updates mehr. Für 7.4, 8.0 und 8.1 gibt es nur minimale Quellcode-Patches. Frag deinen Hoster oder LTS-Anbieter nach einer Rückportierung oder steig auf eine unterstützte Version um.',
            },
        ],
        quellen: [
            { titel: 'PHP: Security advisory und Releases vom 21.10.2026', url: 'https://www.php.net/archive/2026.php' },
            { titel: 'Wiz: PHP2Shell, AI uncovers critical RCE vulnerabilities', url: 'https://www.wiz.io/blog/php2shell-php-rce' },
            { titel: 'OpenAI: Patch the Planet, coordinated disclosure', url: 'https://openai.com/index/coordinated-disclosure-of-critical-vulnerabilities/' },
            { titel: 'CERT-EU: Critical Vulnerabilities in PHP', url: 'https://www.cert.europa.eu/publications/security-advisories/2026-018/' },
            { titel: 'The PHP Foundation: Today’s PHP Security Release', url: 'https://thephp.foundation/blog/2026/10/21/todays-php-security-release-and-how-were-strengthening-php-security/' },
        ],
    },
    {
        slug: 'custom-gpts-werden-abgeschaltet',
        titel: 'Custom GPTs werden abgeschaltet: was am 11. Dezember passiert',
        seoTitle: 'Custom GPTs werden abgeschaltet: Termin, Umzug, Ersatz',
        description:
            'OpenAI schaltet Custom GPTs am 11. Dezember 2026 ab und ersetzt sie durch Plugins. Was mit deinen GPTs, Dateien und Chats passiert, wie der Umzug klappt und welche Alternativen es gibt.',
        datum: '2026-10-21',
        veroeffentlicht: '2026-10-26',
        thema: 'ChatGPT',
        emoji: '🪦',
        minutes: 6,
        jean: 'Mein Lieblings-GPT kennt meinen Styleguide besser als ich. Damit der nicht mit ins Grab geht, packen wir heute die Umzugskartons.',
        kurz: [
            'Custom GPTs werden laut OpenAI-Hilfe-Center am 11. Dezember 2026 abgeschaltet. Danach sind GPTs und ihre Seiten nicht mehr erreichbar. Nur FedRAMP-Workspaces und Enterprise-Workspaces mit genehmigtem Aufschub haben bis 11. Februar 2027.',
            'Nachfolger sind Plugins: Beim Umzug werden die Anweisungen zu einem Skill, verbundene Apps zu Apps im Plugin und Wissensdateien zu Referenzdateien. Das gewählte Modell und eigene Actions ziehen nicht automatisch mit.',
            'In privaten Konten (Free, Go, Plus, Pro) lassen sich schon jetzt keine neuen GPTs mehr erstellen oder veröffentlichen. Deine bisherigen Chats mit GPTs bleiben auch nach der Abschaltung lesbar.',
        ],
        sections: [
            {
                h: 'Was genau ändert sich?',
                p: [
                    'Seit Ende 2023 konnte man sich in ChatGPT einen eigenen Assistenten bauen: feste Anweisungen, eigene Dateien, fertig war der Custom GPT. Diese Ära endet. OpenAI schreibt im Hilfe-Center, dass Custom GPTs in den Ruhestand gehen und Ersteller beim Umzug zu Plugins unterstützt werden.',
                    'Der Standardtermin ist der 11. Dezember 2026. Dann werden Custom GPTs und ihre GPT-Seiten unerreichbar. Für FedRAMP-Workspaces und betroffene Enterprise-Workspaces mit genehmigtem Aufschub gilt der 11. Februar 2027. Maßgeblich ist laut OpenAI der Hinweis in deinem eigenen Konto oder Workspace.',
                    'Neue GPTs bauen geht in privaten Konten schon jetzt nicht mehr, das betrifft Free, Go, Plus und Pro. Bestehende GPTs kannst du weiter nutzen und, wenn dein Tarif es erlaubt, auch bearbeiten. In betroffenen Enterprise-Workspaces endete das Erstellen neuer GPTs am 26. Oktober 2026.',
                ],
            },
            {
                h: 'Was wird aus meinem GPT beim Umzug?',
                p: [
                    'Sobald der Umzug für dein Konto freigeschaltet ist, findest du unter „My GPTs“ den Punkt „Migrate to plugin“. Dabei werden die Anweisungen des GPTs zu einem Skill im neuen Plugin, verbundene Apps werden als Apps übernommen und Wissensdateien landen als Referenzdateien im Plugin.',
                    'Zwei Dinge ziehen nicht mit: Das im GPT ausgewählte Modell wird nicht übernommen, und eigene Actions, also selbst gebaute Schnittstellen zu anderen Diensten, wandern nicht automatisch um. Die musst du neu aufbauen. OpenAI rät, dafür extra Zeit einzuplanen.',
                    'Wichtig für Bastler: Umgezogen wird die zuletzt veröffentlichte Version. Entwürfe und unveröffentlichte Änderungen bleiben auf der Strecke. Veröffentlichen heißt dabei nicht öffentlich teilen. Nach dem Umzug ist das Original nur noch lesbar und lässt sich auch nicht mehr löschen. Das neue Plugin startet privat und wird niemandem automatisch freigegeben.',
                ],
            },
            {
                h: 'Und wenn ich nur fremde GPTs nutze?',
                p: [
                    'Dann bist du Fahrgast, nicht Fahrer. Ob es einen Nachfolger gibt, entscheidet der Ersteller. OpenAI empfiehlt, auf dessen Hinweis zu achten. Deine bisherigen Unterhaltungen mit Custom GPTs bleiben laut OpenAI auch nach der Abschaltung erreichbar, du musst dafür nichts tun.',
                    'Schreib dir trotzdem jetzt auf, wofür du welchen GPT nutzt und welche Ergebnisse du gut fandest. Mit drei, vier Beispiel-Prompts kannst du später jeden Ersatz in zehn Minuten testen.',
                ],
            },
            {
                h: 'Gibt es Alternativen außerhalb von ChatGPT?',
                p: [
                    'Ja. Die Idee hinter Custom GPTs, also ein Assistent mit festen Anweisungen und eigenem Wissen, gibt es bei fast allen großen Anbietern. In Claude heißen sie Projects, in Gemini Gems. Die Anweisungen aus deinem GPT sind letztlich ein System-Prompt, und der lässt sich mitnehmen.',
                    'Spannend ist auch der Weg, den OpenAI selbst geht: Aus Anweisungen werden Skills. Agent Skills sind ein offener Standard, den laut Anthropic über 70 Agenten-Plattformen nutzen, darunter ChatGPT, Cursor und GitHub Copilot. Wer seine Anweisungen sauber als Skill aufschreibt, ist künftig weniger an einen einzelnen Anbieter gebunden.',
                ],
            },
            {
                h: 'Jeans Einordnung',
                p: [
                    'Custom GPTs waren für viele der erste Schritt vom Chatten zum eigenen Werkzeug. Dass sie jetzt in Plugins aufgehen, ist logisch: Ein Assistent, der nur redet, wird ersetzt durch einen, der Apps bedienen und Skills laden kann.',
                    'Ärgerlich ist es trotzdem für alle, die viel Arbeit in ihre GPTs gesteckt haben. Mein Rat: Behandle Anweisungen und Wissensdateien ab sofort wie Werkzeug, das dir gehört. Lokal speichern, sauber benennen, bei Bedarf in jedes Tool mitnehmen.',
                ],
            },
        ],
        tun: [
            'Liste aller GPTs anlegen, die du selbst gebaut hast oder regelmäßig nutzt.',
            'Anweisungen und Wissensdateien jedes eigenen GPTs lokal sichern.',
            'Wichtige Änderungen fertigstellen und veröffentlichen, bevor du umziehst. Entwürfe ziehen nicht mit.',
            'Eigene Actions dokumentieren, die musst du im Plugin neu bauen.',
            'Drei typische Prompts aufheben und damit den Ersatz testen, als Plugin, Claude Project oder Gemini Gem.',
        ],
        bezug: [
            ['/tutorials/eigenen-ki-assistenten-bauen/', 'Tutorial: Eigenen KI-Assistenten bauen', 'Schritt für Schritt zu einem Assistenten mit festen Anweisungen, auch ohne Custom GPT.'],
            ['/glossar/custom-gpt/', 'Was ist ein Custom GPT?', 'Begriff kurz erklärt, mit den Gegenstücken bei Claude und Gemini.'],
            ['/glossar/system-prompt/', 'Was ist ein System-Prompt?', 'Das Herz jedes GPTs, und genau das, was du mitnimmst.'],
            ['/glossar/agent-skills/', 'Was sind Agent Skills?', 'Der offene Standard, in den GPT-Anweisungen künftig wandern.'],
            ['/prompts/prompt-verbessern/', 'Prompt: Prompt verbessern', 'Hilft, alte GPT-Anweisungen vor dem Umzug aufzuräumen.'],
            ['/tools/chatgpt/', 'ChatGPT im Steckbrief', 'Preise und Tarife von ChatGPT, Stand Oktober 2026.'],
            ['/tools/claude/', 'Claude im Steckbrief', 'Die Alternative mit Projects für feste Anweisungen und Dateien.'],
            ['/tools/google-gemini/', 'Google Gemini im Steckbrief', 'Die Alternative mit Gems.'],
        ],
        faq: [
            {
                q: 'Wann werden Custom GPTs abgeschaltet?',
                a: 'Laut OpenAI-Hilfe-Center am 11. Dezember 2026. Für FedRAMP-Workspaces und Enterprise-Workspaces mit genehmigtem Aufschub gilt der 11. Februar 2027. Maßgeblich ist der Hinweis im eigenen Konto oder Workspace.',
            },
            {
                q: 'Kann ich noch neue Custom GPTs erstellen?',
                a: 'In privaten ChatGPT-Konten (Free, Go, Plus, Pro) nicht mehr. Bestehende GPTs lassen sich weiter nutzen und je nach Tarif bearbeiten. In betroffenen Enterprise-Workspaces endete das Erstellen am 26. Oktober 2026.',
            },
            {
                q: 'Was passiert mit meinen Chats mit Custom GPTs?',
                a: 'Laut OpenAI bleiben bestehende Unterhaltungen mit Custom GPTs auch nach der Abschaltung erreichbar. Dafür musst du nichts tun.',
            },
            {
                q: 'Was wird beim Umzug zum Plugin übernommen?',
                a: 'Die Anweisungen werden zu einem Skill, verbundene Apps zu Apps im Plugin, Wissensdateien zu Referenzdateien. Nicht übernommen werden das ausgewählte Modell und eigene Actions. Umgezogen wird nur die zuletzt veröffentlichte Version.',
            },
        ],
        quellen: [
            { titel: 'OpenAI Help Center: Custom GPT retirement and migration FAQ', url: 'https://help.openai.com/en/articles/20001519-custom-gpt-retirement-and-migration-faq' },
            { titel: 'OpenAI Help Center: GPTs in ChatGPT', url: 'https://help.openai.com/en/articles/8554407-gpts-in-chatgpt' },
            { titel: 'OpenAI Help Center: Creating and editing GPTs', url: 'https://help.openai.com/en/articles/8554397-creating-and-editing-gpts' },
            { titel: 'Anthropic: Donating Agent Skills to the Agentic AI Foundation', url: 'https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation' },
        ],
    },
    {
        slug: 'claude-duet-proaktiver-ki-agent',
        titel: 'Claude Duet: der KI-Agent, der sich zuerst meldet',
        seoTitle: 'Claude Duet: Anthropics proaktiver KI-Agent erklärt',
        description:
            'Anthropic testet mit Claude Duet einen Agenten, der morgens ein Briefing schickt, im Hintergrund arbeitet und vor Zahlungen nachfragt. Was er kann, wer ihn nutzen darf und was das für Deutschland heißt.',
        datum: '2026-10-21',
        veroeffentlicht: '2026-10-26',
        thema: 'Agenten',
        emoji: '🤝',
        minutes: 5,
        jean: 'Endlich ein Kollege, der morgens schon weiß, was brennt. Leider wohnt er vorerst nur in den USA.',
        kurz: [
            'Claude Duet ist eine eigene App für iOS, Android und claude.ai, in der Claude als proaktiver Agent arbeitet: Morgen-Briefing, Aufgaben im Hintergrund, Rückfrage vor heiklen Aktionen.',
            'Start am 21. Oktober 2026 als Research Preview mit Warteliste, zunächst nur für Pro- und Max-Abos in den USA. Team und Enterprise sollen später folgen.',
            'Duet nutzt laut Anthropic die über 6.000 Konnektoren und Plugins aus dem Claude Marketplace und läuft auf einem eigenen virtuellen Rechner mit Browser in der Cloud.',
        ],
        sections: [
            {
                h: 'Was ist Claude Duet?',
                p: [
                    'Bisher wartet ein Chatbot, bis du ihn ansprichst. Claude Duet dreht das um: Der Agent schaut alle paar Stunden in deine verbundenen Konten, schickt morgens ein Briefing mit dem, was Aufmerksamkeit braucht, und meldet sich, wenn etwas fertig ist oder eine Entscheidung von dir braucht.',
                    'Anthropic beschreibt Duet als App für Berufstätige und Inhaber kleiner Firmen, die mehr auf dem Tisch haben, als sie überblicken können. Laut Reuters ist Duet um das Modell Claude Opus 5.5 herum gebaut.',
                ],
            },
            {
                h: 'Was kann Duet konkret?',
                p: [
                    'Die Beispiele von Anthropic klingen nach Büroalltag: verpasste Nachrichten in Gmail und Slack finden und Antworten entwerfen, in QuickBooks oder Stripe offene Rechnungen suchen und Erinnerungen vorbereiten, die Gehaltsabrechnung in Gusto vorbereiten, Stellenanzeigen entwerfen und nach Freigabe auf LinkedIn posten, Verträge über Docusign zur Unterschrift schicken.',
                    'Größere Aufträge liefert Duet als Datei zurück, etwa als Recherche, Finanzmodell, Foliensatz oder Dashboard. Weil der Agent einen eigenen virtuellen Rechner mit Browser in der Cloud hat, arbeitet er weiter, wenn dein Laptop aus ist. Für Seiten ohne Konnektor nutzt er diesen Browser.',
                    'Einkaufen kann er auch: über Link, das digitale Wallet von Stripe, mit einer virtuellen Karte, sodass deine echte Kartennummer nicht weitergegeben wird, oder über Shop Pay von Shopify.',
                ],
            },
            {
                h: 'Wo sind die Grenzen?',
                p: [
                    'Bevor Duet eine Nachricht verschickt, etwas bezahlt, ein Dokument unterschreibt oder etwas löscht, zeigt er genau, was er vorhat, und wartet auf dein OK. Manche Dinge sind laut Anthropic sogar mit Freigabe tabu, zum Beispiel Wertpapierhandel oder Geld zwischen Konten verschieben.',
                    'Anthropic ist ehrlich, was noch hakt: Duet kann einen Verlauf falsch lesen, die Dringlichkeit falsch einschätzen und Dinge übersehen, die zwischen zwei Prüfungen eintreffen. Und die Hintergrund-Checks zählen zu deinem normalen Nutzungslimit von Pro oder Max. Ein fleißiger Agent frisst also Kontingent.',
                ],
            },
            {
                h: 'Was heißt das für Nutzer in Deutschland?',
                p: [
                    'Vorerst nichts Praktisches: Die Research Preview gilt nur für Pro- und Max-Abonnenten in den USA, über eine Warteliste. Andere Länder nennt Anthropic nicht. Auch Team- und Enterprise-Pläne sind noch nicht dabei.',
                    'Trotzdem lohnt der Blick, denn die Richtung ist klar. OpenAI hat mit „dots“ bereits dauerhaft laufende Agenten gestartet, Meta mit Muse. Wer heute lernt, wie man einem Agenten einen sauberen Auftrag gibt und was man ihm besser nicht erlaubt, ist vorbereitet, wenn so etwas hier ankommt. Vor dem Start in Europa stellt sich außerdem die Datenschutzfrage, gerade bei Zugriff auf Mail und Buchhaltung.',
                ],
            },
        ],
        tun: [
            'Für die Zukunft üben: Gib einem Agenten Aufträge mit Ziel, Grenzen und Freigabepunkten.',
            'Überlegen, welche Konten ein Agent sehen darf und welche nie.',
            'Bei Interesse und US-Abo: auf die Warteliste setzen und Limits im Blick behalten.',
        ],
        bezug: [
            ['/tools/claude/', 'Claude im Steckbrief', 'Tarife Pro und Max, die Duet voraussetzt.'],
            ['/neue-ki-modelle/claude-opus-5-5/', 'Claude Opus 5.5', 'Das Modell, um das Duet gebaut ist.'],
            ['/tutorials/ki-agenten-verstehen/', 'Tutorial: KI-Agenten verstehen', 'Was ein Agent ist und wie du ihm sinnvolle Grenzen setzt.'],
            ['/prompts/ki-agent-auftrag/', 'Prompt: Auftrag für einen KI-Agenten', 'Vorlage für klare Aufträge mit Zielen und Stopp-Regeln.'],
            ['/glossar/ki-agent/', 'Was ist ein KI-Agent?', 'Begriff kurz erklärt.'],
            ['/ki-tools/fuer/selbststaendige/', 'KI-Tools für Selbstständige', 'Die Zielgruppe, für die Duet gebaut wurde.'],
            ['/ratgeber/ki-tools-datenschutz-dsgvo/', 'KI-Tools und Datenschutz', 'Was du prüfen solltest, bevor ein Agent an Mail und Buchhaltung darf.'],
        ],
        faq: [
            {
                q: 'Ist Claude Duet in Deutschland verfügbar?',
                a: 'Stand 26. Oktober 2026 nein. Die Research Preview startet über eine Warteliste für Pro- und Max-Abonnenten in den USA. Andere Länder hat Anthropic nicht genannt.',
            },
            {
                q: 'Was kostet Claude Duet?',
                a: 'In der Research Preview ist Duet laut Anthropic in Pro und Max enthalten und nutzt dieselben Nutzungslimits wie der Rest von Claude. Die Hintergrund-Checks zählen dazu.',
            },
            {
                q: 'Kann Claude Duet ohne meine Zustimmung bezahlen?',
                a: 'Nein. Vor Nachrichten, Zahlungen, Unterschriften und Löschungen zeigt Duet die geplante Aktion und wartet auf Freigabe. Wertpapierhandel und Geld zwischen Konten verschieben sind laut Anthropic auch mit Freigabe gesperrt.',
            },
        ],
        quellen: [
            { titel: 'Claude: Introducing Claude Duet', url: 'https://claude.com/resources/articles/claude-duet' },
            { titel: 'Claude: Claude Duet Produktseite und FAQ', url: 'https://claude.com/product/claude-duet' },
            { titel: 'Claude Help Center: Get started with Claude Duet', url: 'https://support.claude.com/en/articles/17631495-get-started-with-claude-duet' },
            { titel: 'Reuters über Investing.com: Anthropic unveils Claude Duet', url: 'https://www.investing.com/news/stock-market-news/anthropic-unveils-claude-duet-ai-agent-app-4964042' },
        ],
    },
    {
        slug: 'gemini-tools-fuer-selbststaendige',
        titel: 'Gemini für kleine Firmen: Marken-Look, Finanzen, Shop-Anbindung',
        seoTitle: 'Gemini für kleine Firmen: neue Tools für Selbstständige',
        description:
            'Google baut in Gemini einen Bereich für kleine Firmen: Marken-Stil merken, Belege in Grafiken verwandeln, Canva, Shopify und Xero verbinden. Was neu ist und was du in Deutschland prüfen solltest.',
        datum: '2026-10-20',
        veroeffentlicht: '2026-10-26',
        thema: 'Gemini',
        emoji: '🧾',
        minutes: 5,
        jean: 'Gemini merkt sich jetzt deine Hausfarben. Mein Schwager merkt sich nicht mal meinen Geburtstag.',
        kurz: [
            'Am 20. Oktober 2026 hat Google eine eigene Startseite für kleine Firmen in Gemini angekündigt: Marke aufbauen, Finanzen auswerten, Kundenfeedback verstehen.',
            'Gemini merkt sich auf Wunsch Website, Brand-Kit, Schriften und Farben und erzeugt damit mit dem Bildmodell Nano Banana 2.1 passende Marketing-Bilder.',
            'Neu verknüpfbar sind laut Google unter anderem Adobe, Canva, Dropbox, Shopify, Wix, Zoho und Xero, dazu Google Business Profile, Google Ads und Workspace.',
        ],
        sections: [
            {
                h: 'Was hat Google angekündigt?',
                p: [
                    'Laut Google nutzen schon zig Millionen Inhaber kleiner Firmen Gemini, für Produktideen, Kundenfeedback und Zahlen. Jetzt bekommen sie eine eigene Startseite in der Gemini-App, von der aus sie Marke, Finanzen und Kunden-Einblicke an einem Ort bearbeiten.',
                    'Die Startseite, die Marketing- und Finanz-Skills und die neuen App-Verknüpfungen sollen laut Google in den Tagen nach dem 20. Oktober weltweit für alle Nutzer der Gemini-App ausgerollt werden.',
                ],
            },
            {
                h: 'Marken-Look zum Mitnehmen',
                p: [
                    'Du lädst deine Website, dein Brand-Kit, Schriften oder Farbpaletten hoch, und Gemini merkt sich den Stil. Zusammen mit Nano Banana 2.1, dem aktuellen Bildmodell von Google, entstehen daraus Bilder für Produktstarts oder laufende Kampagnen, ohne dass du die Stilvorgaben jedes Mal neu hochladen musst.',
                    'Für kleine Shops ist das ein echter Hebel: Social-Media-Grafiken, Banner und Produktbilder sehen zusammen aus wie aus einem Guss, auch wenn du keine Designerin im Team hast.',
                ],
            },
            {
                h: 'Finanzen ohne Tabellen-Kopfschmerz',
                p: [
                    'Gemini soll unordentliche Tabellen, Kassenzettel und Einkaufsbelege in Sekunden in Finanzgrafiken und interaktive Modelle verwandeln. Statt selbst Zahlen zu entziffern, fragst du einfach, wo das Geld hingeht.',
                    'Ein ehrlicher Hinweis aus der Werkstatt: KI rechnet nicht immer richtig, und Belege sind sensible Daten. Für die Steuer bleibt dein Steuerbüro zuständig, Gemini ist eher die Taschenlampe, mit der du in die Ecken leuchtest.',
                ],
            },
            {
                h: 'Was gilt in Deutschland?',
                p: [
                    'Google spricht von einem weltweiten Start. Ob jede einzelne Verknüpfung auch im Europäischen Wirtschaftsraum funktioniert, steht in der Ankündigung nicht ausdrücklich. Bei früheren Gemini-Funktionen gab es Ausnahmen für die EU, darum lohnt ein Blick ins eigene Konto, bevor du deinen Workflow darauf baust.',
                    'Wer die Verknüpfung zu Google Business Profile nutzt, kann laut Google zum Beispiel lokale Such- und Maps-Daten auswerten. Für ein Café oder einen Handwerksbetrieb ist das spannender als jede Hochglanz-Präsentation.',
                ],
            },
        ],
        tun: [
            'Gemini-App öffnen und prüfen, ob die Business-Startseite in deinem Konto schon da ist.',
            'Brand-Kit mit Logo, Farben und Schriften als Datei bereitlegen.',
            'Verknüpfungen nur für die Apps freigeben, die du wirklich brauchst.',
            'Finanz-Auswertungen gegen deine Buchhaltung gegenprüfen.',
        ],
        bezug: [
            ['/tools/google-gemini/', 'Google Gemini im Steckbrief', 'Tarife und Preise von Gemini.'],
            ['/neue-ki-modelle/nano-banana-2-1/', 'Nano Banana 2.1', 'Das Bildmodell hinter den Marken-Bildern.'],
            ['/tools/canva/', 'Canva im Steckbrief', 'Eine der neuen Verknüpfungen, auch allein ein starkes Design-Tool.'],
            ['/ki-tools/fuer/selbststaendige/', 'KI-Tools für Selbstständige', 'Weitere Werkzeuge für Solo-Firmen.'],
            ['/ki-tools/fuer/onlinehaendler/', 'KI-Tools für Onlinehändler', 'Für alle mit Shopify-, Wix- oder eigenem Shop.'],
            ['/prompts/produktbeschreibung-shop/', 'Prompt: Produktbeschreibung für den Shop', 'Passt zu den neuen Marketing-Skills.'],
            ['/prompts/kundenbewertung-antworten/', 'Prompt: Auf Kundenbewertungen antworten', 'Ideal mit der Business-Profile-Verknüpfung.'],
            ['/tool-vergleiche/gamma-vs-canva/', 'Gamma oder Canva?', 'Wenn du für Präsentationen und Grafiken noch das passende Tool suchst.'],
        ],
        faq: [
            {
                q: 'Was ist neu in Gemini für kleine Firmen?',
                a: 'Laut Google eine eigene Startseite für kleine Firmen, Marketing- und Finanz-Skills, ein gespeicherter Marken-Stil für Bilder mit Nano Banana 2.1 und neue App-Verknüpfungen, unter anderem zu Adobe, Canva, Dropbox, Shopify, Wix, Zoho und Xero.',
            },
            {
                q: 'Kostet die Gemini-Business-Startseite extra?',
                a: 'Google kündigt den Start für alle Nutzer der Gemini-App an und nennt keinen Aufpreis. Welche Verknüpfungen welche Abos voraussetzen, steht in der Ankündigung nicht im Detail.',
            },
            {
                q: 'Funktioniert das in Deutschland?',
                a: 'Google spricht von einem weltweiten Start ab dem 20. Oktober 2026. Ob jede Verknüpfung im EWR verfügbar ist, nennt Google nicht ausdrücklich, darum im eigenen Konto prüfen.',
            },
        ],
        quellen: [
            { titel: 'Google Blog: New Gemini tools for small business owners', url: 'https://blog.google/innovation-and-ai/products/gemini-app/new-tools-small-business-owners/' },
            { titel: 'Search Engine Watch: Gemini adds a small-business hub', url: 'https://searchenginewatch.com/gemini-small-business-hub-remembers-brand-style/' },
        ],
    },
    {
        slug: 'openai-decisions-api',
        titel: 'OpenAI Decisions API: Ja-Nein-Fragen für 10 Cent pro Million',
        seoTitle: 'OpenAI Decisions API: Preis, Funktionen, Einsatz',
        description:
            'Die Decisions API von OpenAI beantwortet Fragen mit festen Antworten, laut OpenAI bis zu 10-mal schneller als GPT-6 Luna über die Responses API. Preis, Antworttypen und wofür sie sich lohnt.',
        datum: '2026-10-22',
        veroeffentlicht: '2026-10-26',
        thema: 'API',
        emoji: '🎯',
        minutes: 5,
        jean: 'Ein Modell, das nur „ja“, „nein“ oder „Stufe 3“ sagt und dafür fast nichts kostet. Ich kenne Meetings, die weniger effizient sind.',
        kurz: [
            'Seit 22. Oktober 2026 ist die Decisions API allgemein verfügbar. Sie beantwortet Fragen mit begrenzten Antworten: Wahrscheinlichkeit, Auswahl aus festen Optionen oder Bewertung nach Stufen.',
            'Preis laut OpenAI: 0,10 US-Dollar pro Million Eingabe-Tokens, gecacht 0,01 US-Dollar. Ausgabe-Tokens kosten nichts.',
            'Einziges Modell ist GPT-6 Luna. Bis zu 400 Fragen pro Anfrage, Verarbeitung in den USA und der EU möglich.',
        ],
        sections: [
            {
                h: 'Was macht die Decisions API?',
                p: [
                    'Apps und Agenten treffen ständig kleine Entscheidungen: Ist diese Mail eine Beschwerde? An welche Abteilung geht das Ticket? Soll der Agent weitermachen, es nochmal versuchen oder nachfragen? Einzeln sind das Kleinigkeiten, in Masse kosten sie Zeit und Geld.',
                    'Genau dafür ist die Decisions API gebaut. Du legst eine Frage und die erlaubten Antworten fest und gibst den Kontext als Text, Bild oder JSON mit. Zurück kommt keine lange Antwort, sondern ein klares Ergebnis. Laut OpenAI bis zu 10-mal schneller als GPT-6 Luna über die Responses API.',
                ],
            },
            {
                h: 'Drei Antworttypen',
                p: [
                    '„predicate“ schätzt, wie wahrscheinlich eine Aussage stimmt, etwa ob ein Produkt auf dem Foto beschädigt ist, als Wert zwischen 0 und 1. „choice“ wählt eine deiner vorgegebenen Optionen, etwa weitermachen, wiederholen oder nachfragen, und liefert Wahrscheinlichkeiten und Zuversicht mit. „score“ bewertet eine Eingabe auf einer Stufenskala, zum Beispiel wie schwer ein Schaden ist.',
                    'Seit der öffentlichen Beta hat OpenAI eine direkte Anbindung an GPT-Live für Sprachanwendungen ergänzt, dazu Prompt Caching, Verarbeitung in den USA und der EU, JSON-Eingaben, Bilder in den Fragen und bis zu 400 Fragen pro Anfrage, doppelt so viele wie vorher.',
                ],
            },
            {
                h: 'Was kostet das?',
                p: [
                    'OpenAI nennt 0,10 US-Dollar pro Million Eingabe-Tokens und 0,01 US-Dollar für gecachte Eingaben. Für Ausgabe-Tokens zahlst du nichts. Für Cache-Schreibvorgänge mit 30 Minuten oder 12 Stunden Laufzeit verweist OpenAI auf die Preisseite.',
                    'Zum Gefühl: Eine Million Tokens entsprechen im Englischen grob 750.000 Wörtern, deutsche Texte brauchen etwas mehr Tokens pro Wort. Wer täglich ein paar tausend Support-Mails vorsortiert, landet bei Centbeträgen. Rechne deinen Fall trotzdem selbst durch, denn die Tokenzahl hängt stark davon ab, wie viel Kontext du mitschickst.',
                ],
            },
            {
                h: 'Für wen lohnt sich das?',
                p: [
                    'Für alle, die heute ein großes Modell für Aufgaben bezahlen, bei denen am Ende nur eine von wenigen Antworten herauskommt: Tickets sortieren, Bewertungen nach Stimmung einordnen, Dokumente weiterleiten, Spam erkennen. Das gilt auch für Automatisierungen mit Make, Zapier oder n8n, die einen Entscheidungsschritt brauchen.',
                    'Kundenstimmen auf der OpenAI-Seite nennen deutliche Zeitgewinne, etwa rund 5-mal schnellere Weiterleitung von Dokumenten bei Box. Das sind Angaben der Kunden und des Anbieters, keine unabhängigen Tests.',
                ],
            },
        ],
        tun: [
            'Einen wiederkehrenden Entscheidungsschritt in deinem Ablauf suchen, etwa Ticket-Kategorien.',
            'Frage und erlaubte Antworten aufschreiben, dann im Decisions Playground mit echten Beispielen testen.',
            'Kosten mit dem API-Kosten-Rechner gegen dein heutiges Modell rechnen.',
        ],
        bezug: [
            ['/rechner/api-kosten/', 'API-Kosten-Rechner', 'Rechne aus, was dein Modell heute pro Monat kostet.'],
            ['/neue-ki-modelle/gpt-6-sol-luna/', 'GPT-6 Sol und Luna', 'Luna ist das Modell hinter der Decisions API.'],
            ['/glossar/token/', 'Was ist ein Token?', 'Die Einheit, nach der abgerechnet wird.'],
            ['/glossar/prompt-caching/', 'Was ist Prompt Caching?', 'Macht wiederkehrenden Kontext zehnmal billiger.'],
            ['/rechner/automatisierung/', 'Automatisierungs-Rechner', 'Lohnt sich die Automatisierung überhaupt?'],
            ['/tool-vergleiche/make-vs-zapier-vs-n8n/', 'Make, Zapier oder n8n?', 'Die Werkzeuge, mit denen du Entscheidungsschritte in Abläufe baust.'],
            ['/glossar/ki-agent/', 'Was ist ein KI-Agent?', 'Agenten sind die Hauptkunden solcher Mini-Entscheidungen.'],
        ],
        faq: [
            {
                q: 'Was kostet die OpenAI Decisions API?',
                a: 'Laut OpenAI 0,10 US-Dollar pro Million Eingabe-Tokens und 0,01 US-Dollar pro Million gecachter Eingabe-Tokens. Ausgabe-Tokens werden nicht berechnet.',
            },
            {
                q: 'Welches Modell nutzt die Decisions API?',
                a: 'GPT-6 Luna, laut OpenAI-Dokumentation derzeit das einzige unterstützte Modell. Der Endpunkt ist POST /v1/decisions.',
            },
            {
                q: 'Gibt es die Decisions API in der EU?',
                a: 'OpenAI bietet Verarbeitung in den USA und der EU an. Zero Data Retention gibt es laut OpenAI für berechtigte Kunden.',
            },
        ],
        quellen: [
            { titel: 'OpenAI: Build more responsive apps with the Decisions API', url: 'https://openai.com/index/decisions-api' },
            { titel: 'OpenAI Developers: Decisions Guide', url: 'https://developers.openai.com/api/docs/guides/decisions' },
            { titel: 'OpenAI API Changelog', url: 'https://developers.openai.com/api/docs/changelog' },
        ],
    },
    {
        slug: 'agent-skills-linux-foundation',
        titel: 'Agent Skills gehören jetzt allen: Anthropic gibt den Standard ab',
        seoTitle: 'Agent Skills bei der Linux Foundation: was das bedeutet',
        description:
            'Anthropic übergibt Agent Skills an die Agentic AI Foundation der Linux Foundation. Was ein Skill ist, warum ChatGPT, Cursor und GitHub Copilot ihn nutzen und worauf du bei fremden Skills achten musst.',
        datum: '2026-10-22',
        veroeffentlicht: '2026-10-26',
        thema: 'Agenten',
        emoji: '🧰',
        minutes: 5,
        jean: 'Ein Skill ist wie eine gute Werkstatt-Anleitung im Ordner: einmal geschrieben, und jeder Lehrling kann es. Jetzt passt der Ordner in jede Werkstatt.',
        kurz: [
            'Am 22. Oktober 2026 hat Anthropic Agent Skills an die Agentic AI Foundation (AAIF) unter dem Dach der Linux Foundation übergeben, samt Name, Logo, GitHub-Organisation und agentskills.io.',
            'Laut Anthropic haben seit Dezember 2025 über 70 Agenten-Plattformen den Standard eingebaut, darunter ChatGPT, Cursor, GitHub Copilot und VS Code. Veröffentlicht wurden 1 Million Skills, installiert fast 280 Millionen Mal.',
            'Die AAIF nahm am selben Tag drei weitere Projekte auf: Open Responses von OpenAI, OpenEnv von Hugging Face und OpenSandbox von Alibaba.',
        ],
        sections: [
            {
                h: 'Was ist ein Skill überhaupt?',
                p: [
                    'Ein Skill ist ein Ordner mit einer Datei namens SKILL.md. Darin steht, wie ein Agent eine bestimmte Aufgabe erledigt, dazu können Skripte und Nachschlagematerial kommen. Der Agent liest zuerst nur Name und Kurzbeschreibung und lädt den Rest erst, wenn die Aufgabe passt. So bleibt sein Kontextfenster frei.',
                    'Entstanden ist die Idee bei der Arbeit an Claude Code: Das Modell wusste viel, aber nicht, wie konkrete Abläufe in einer Firma funktionieren. Skills liefern genau dieses Handwerkswissen nach, etwa wie eure Angebote aufgebaut sind oder wie ein Monatsbericht aussehen muss.',
                ],
            },
            {
                h: 'Was ändert sich durch die Übergabe?',
                p: [
                    'Bisher lag der Standard bei Anthropic. Jetzt hat er ein neutrales Zuhause in der AAIF, die Anthropic laut eigener Aussage im vergangenen Jahr mit Block und OpenAI gegründet hat. Dorthin hatte Anthropic bereits das Model Context Protocol (MCP) gegeben.',
                    'Gepflegt wird der Standard künftig von Entwicklern von Anthropic, Google, OpenAI und anderen Firmen, ausdrücklich als Einzelpersonen. Leitende Maintainer sind David Soria Parra und Mahesh Murag. Nutzen und mitarbeiten kannst du laut Anthropic auch ohne AAIF-Mitgliedschaft.',
                    'Vorgeschlagen ist ein Fahrplan mit versionierten Releases, einem formalen Vorschlagsverfahren und Sicherheitsleitlinien für Leute, die Skills schreiben und installieren. Die AAIF wächst damit laut Linux Foundation in ihrem ersten Jahr von drei auf zehn Projekte.',
                ],
            },
            {
                h: 'Warum ist das für dich wichtig?',
                p: [
                    'Weil deine Arbeitsanweisungen damit zwischen Tools wandern können. Ein Skill, den du für Claude schreibst, funktioniert im Prinzip auch in Cursor oder einer anderen Plattform, die den Standard unterstützt. Das ist das Gegenteil von Anbieterfalle.',
                    'Passend dazu baut OpenAI seine Custom GPTs gerade zu Plugins um, in denen die Anweisungen eines GPTs zu einem Skill werden. Wer jetzt lernt, gute Skills zu schreiben, lernt eine Fähigkeit, die über einzelne Chatbots hinaus trägt.',
                ],
            },
            {
                h: 'Vorsicht bei fremden Skills',
                p: [
                    'Ein Skill kann Skripte enthalten, und Skripte sind fremder Code in deinem Agenten. Bevor du einen Skill aus dem Netz installierst, schau dir an, welche Skripte, Abhängigkeiten und Netzwerkzugriffe drinstecken. Das gilt besonders, wenn der Agent Zugriff auf Dateien, Mails oder Kundendaten hat.',
                    'Faustregel aus der Werkstatt: Werkzeug von Unbekannten erst auf der Probebank testen, nicht gleich am Kundenfahrzeug.',
                ],
            },
        ],
        tun: [
            'Eine Aufgabe auswählen, die du ständig gleich erklärst, und sie als Skill-Anleitung aufschreiben.',
            'Fremde Skills vor der Installation lesen, besonders enthaltene Skripte.',
            'Prüfen, ob deine Coding- oder Chat-Tools Skills schon unterstützen.',
        ],
        bezug: [
            ['/glossar/agent-skills/', 'Was sind Agent Skills?', 'Der Begriff kurz und mit Beispiel erklärt.'],
            ['/glossar/mcp/', 'Was ist MCP?', 'Der andere offene Standard bei der AAIF, für Verbindungen zu Tools.'],
            ['/tutorials/ki-agenten-verstehen/', 'Tutorial: KI-Agenten verstehen', 'Wie Agenten arbeiten und wie du sie sicher einsetzt.'],
            ['/tutorials/eigenen-ki-assistenten-bauen/', 'Tutorial: Eigenen KI-Assistenten bauen', 'Gute Anweisungen sind die Grundlage jedes Skills.'],
            ['/tools/cursor/', 'Cursor im Steckbrief', 'Einer der Coding-Assistenten, die Skills unterstützen.'],
            ['/tools/github-copilot/', 'GitHub Copilot im Steckbrief', 'Ebenfalls mit Skill-Unterstützung.'],
            ['/ki-tools/agenten/', 'KI-Agenten in der Datenbank', 'Die Rubrik mit Agenten-Plattformen.'],
            ['/glossar/prompt-injection/', 'Was ist Prompt-Injection?', 'Das Risiko, an das du bei fremden Skills denken solltest.'],
        ],
        faq: [
            {
                q: 'Was sind Agent Skills?',
                a: 'Ein offener Standard, mit dem KI-Agenten Fachwissen und Abläufe lernen. Ein Skill ist ein Ordner mit einer SKILL.md-Datei und optional Skripten und Nachschlagematerial.',
            },
            {
                q: 'Wer verwaltet Agent Skills jetzt?',
                a: 'Seit 22. Oktober 2026 die Agentic AI Foundation unter der Linux Foundation. Gepflegt wird der Standard von Entwicklern mehrerer Firmen als Einzelpersonen, leitende Maintainer sind David Soria Parra und Mahesh Murag.',
            },
            {
                q: 'Welche Tools unterstützen Agent Skills?',
                a: 'Laut Anthropic über 70 Agenten-Plattformen, darunter ChatGPT, Cursor, GitHub Copilot und VS Code.',
            },
        ],
        quellen: [
            { titel: 'Anthropic: Donating Agent Skills to the Agentic AI Foundation', url: 'https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation' },
            { titel: 'Linux Foundation: AAIF announces four new projects', url: 'https://www.linuxfoundation.org/press/agentic-ai-foundation-announces-four-new-projects-agent-skills-open-responses-openenv-and-opensandbox' },
            { titel: 'OpenAI Help Center: Custom GPT retirement and migration FAQ', url: 'https://help.openai.com/en/articles/20001519-custom-gpt-retirement-and-migration-faq' },
        ],
    },
    {
        slug: 'openai-und-claude-bei-google-cloud',
        titel: 'GPT-6 und Claude bei Google Cloud: alle Großen unter einem Dach',
        seoTitle: 'GPT-6 und Claude bei Google Cloud: was sich ändert',
        description:
            'OpenAI-Modelle kommen in Googles Model Garden, Claude gibt es dort jetzt als komplette Plattform. Was das für Firmen bedeutet, die ihre KI über eine Cloud-Rechnung bezahlen wollen.',
        datum: '2026-10-22',
        veroeffentlicht: '2026-10-26',
        thema: 'Modelle',
        emoji: '☁️',
        minutes: 4,
        jean: 'Früher war das wie Opel gegen Ford. Heute stehen alle auf demselben Parkplatz, und Google kassiert die Parkgebühr.',
        kurz: [
            'Am 21. Oktober 2026 haben OpenAI und Google Cloud angekündigt, dass GPT-6 Astra, GPT-6.1 Sol und GPT-6 Luna sowie Codex in Googles Model Garden kommen, zunächst als private Vorschau für ausgewählte Firmenkunden.',
            'Am 22. Oktober 2026 wurde „Claude Models on Google Cloud (Anthropic managed)“ allgemein verfügbar: die komplette Claude-Plattform, abgerechnet über Google Cloud, betrieben von Anthropic.',
            'Google Cloud ist laut eigener Aussage damit der einzige große Cloud-Anbieter mit allen drei führenden geschlossenen Sprachmodellen. Microsoft bleibt laut OpenAI dessen wichtigster Cloud-Partner.',
        ],
        sections: [
            {
                h: 'OpenAI im Model Garden',
                p: [
                    'Firmenkunden von Google Cloud sollen OpenAI-Modelle über den Model Garden nutzen und über den Google Cloud Marketplace bezahlen können. Bestehende Ausgabenzusagen bei Google Cloud lassen sich dafür anrechnen. Laut Google gibt es GPT-6 Astra für anspruchsvolle Arbeit, GPT-6.1 Sol als günstigere Variante mit fast Astra-Niveau und GPT-6 Luna für Alltagsaufgaben in großer Menge.',
                    'Gestartet ist eine private Vorschau für ausgewählte Firmenkunden, die allgemeine Verfügbarkeit plant OpenAI „in den kommenden Wochen“. Preise und Regionen nennen die Ankündigungen nicht. Später sollen OpenAI-Modelle auch in Google Antigravity und dem Gemini-Agenten auftauchen.',
                ],
            },
            {
                h: 'Claude als komplette Plattform',
                p: [
                    'Bei Claude gibt es jetzt zwei Wege über Google Cloud. Neu ist die von Anthropic betriebene Variante: voller Funktionsumfang der Claude-Plattform, neue Funktionen am selben Tag wie beim Original, Anmeldung über Google-Cloud-Konten und eine einzige Google-Rechnung. Datenverarbeiter ist hier Anthropic, Endpunkte gibt es vorerst für die USA und global.',
                    'Die bisherige, von Google betriebene Variante bleibt für alle, die Google als Datenverarbeiter brauchen oder strenge regionale Datenhaltung. Verfügbar sind laut Anthropic Claude Fable 5.1, Opus 5.5, Sonnet 5.5 und Haiku 5.5. Der schnelle Modus von Opus 5.5 kostet dort 8 US-Dollar pro Million Eingabe- und 40 US-Dollar pro Million Ausgabe-Tokens.',
                ],
            },
            {
                h: 'Was heißt das für dich?',
                p: [
                    'Für Solo-Selbstständige ändert sich wenig, du nutzt ChatGPT, Claude oder Gemini weiter direkt. Für Firmen, die schon bei Google Cloud sind, fällt dagegen eine Hürde: Modellwahl heißt nicht mehr automatisch neuer Vertrag, neue Rechnung und neue Datenschutzprüfung.',
                    'Und es zeigt den Trend: Die Modelle werden austauschbarer, der Wettbewerb verlagert sich auf Preis, Geschwindigkeit und Werkzeuge drumherum. Gut für alle, die je Aufgabe das passende Modell wählen wollen.',
                ],
            },
        ],
        tun: [
            'Bei bestehender Google-Cloud-Zusage prüfen, ob sich OpenAI- oder Claude-Nutzung darüber abrechnen lässt.',
            'Für die Datenschutzprüfung klären, wer Datenverarbeiter ist: Anthropic oder Google.',
            'Bestehende Rabatte vor dem Wechsel mit dem Account-Team abstimmen, laut Anthropic gelten sie nicht rückwirkend.',
        ],
        bezug: [
            ['/neue-ki-modelle/gpt-6-astra/', 'GPT-6 Astra', 'Das stärkste OpenAI-Modell im Model Garden.'],
            ['/neue-ki-modelle/gpt-6-1-sol/', 'GPT-6.1 Sol', 'Die günstigere Variante mit fast Astra-Niveau.'],
            ['/neue-ki-modelle/claude-opus-5-5/', 'Claude Opus 5.5', 'Mit schnellem Modus jetzt auch über Google Cloud.'],
            ['/neue-ki-modelle/gemini-4-argon/', 'Gemini 4 Argon', 'Googles eigenes Spitzenmodell im selben Regal.'],
            ['/ratgeber/chatgpt-claude-gemini-welcher-chatbot/', 'ChatGPT, Claude oder Gemini?', 'Welcher Chatbot wofür passt.'],
            ['/rechner/api-kosten/', 'API-Kosten-Rechner', 'Preise der Modelle direkt vergleichen.'],
            ['/ki-tools/modelle/', 'KI-Modelle und Plattformen', 'Die Rubrik mit Modell-Anbietern.'],
        ],
        faq: [
            {
                q: 'Kann ich GPT-6 über Google Cloud nutzen?',
                a: 'Seit 21. Oktober 2026 in einer privaten Vorschau für ausgewählte Firmenkunden. Die allgemeine Verfügbarkeit plant OpenAI in den kommenden Wochen, eine Anfrage ist über ein Formular möglich.',
            },
            {
                q: 'Was ist der Unterschied zwischen Anthropic managed und Google managed?',
                a: 'Bei Anthropic managed betreibt Anthropic den Dienst und ist Datenverarbeiter, du bekommst alle Funktionen der Claude-Plattform sofort. Bei Google managed ist Google Datenverarbeiter, mit Google-eigenen Kontrollen und regionaler Datenhaltung, aber nicht allen Funktionen.',
            },
        ],
        quellen: [
            { titel: 'OpenAI: OpenAI models are coming to Google Cloud', url: 'https://openai.com/index/openai-models-google-cloud' },
            { titel: 'Google Cloud Blog: Google Cloud brings OpenAI models to customers', url: 'https://cloud.google.com/blog/products/ai-machine-learning/google-cloud-brings-openai-models-to-customers' },
            { titel: 'Claude: The full Claude Platform, available on Google Cloud', url: 'https://claude.com/resources/articles/claude-models-on-google-cloud-anthropic-managed' },
        ],
    },
]

export const getNews = () => [...NEWS].sort((a, b) => b.datum.localeCompare(a.datum) || a.titel.localeCompare(b.titel, 'de'))
export const getNewsArtikel = (slug) => NEWS.find((n) => n.slug === slug) || null
