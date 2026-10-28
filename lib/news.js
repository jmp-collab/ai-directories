// KI-News: aktuelle Meldungen, jeweils an offiziellen Quellen geprüft und mit den passenden Seiten auf AIGeddon verknüpft.
// Felder: slug, titel, description, datum (Ereignis), veroeffentlicht, thema, emoji, minutes, jean, kurz (3 Punkte),
// sections [{ h, p }], tun (Checkliste), bezug [[pfad, titel, warum]], faq [{ q, a }], quellen [{ titel, url }]
export const NEWS_STAND = '27. Oktober 2026'

export const NEWS = [
    {
        slug: 'anthropic-boersengang-s1',
        titel: 'Anthropic will an die Börse: was der Claude-Hersteller verrät',
        seoTitle: 'Anthropic Börsengang: S-1, Kürzel ANT, Zahlen',
        description:
            'Anthropic hat am 26. Oktober 2026 den Börsengang beantragt und will unter dem Kürzel ANT an die Nasdaq. Was im Prospekt steht, wer künftig das Sagen hat und was das für Claude-Nutzer bedeutet.',
        datum: '2026-10-26',
        veroeffentlicht: '2026-10-27',
        thema: 'Branche',
        emoji: '📈',
        minutes: 5,
        jean: 'Ich habe kurz überlegt, mir eine Aktie zu kaufen. Dann habe ich mir das Wort „Nettoverlust“ im Prospekt angeschaut und mir stattdessen einen Kaffee gekauft.',
        kurz: [
            'Anthropic, PBC hat am 26. Oktober 2026 bei der US-Börsenaufsicht SEC das Formular S-1 für einen Börsengang eingereicht. Die Aktien sollen an der Nasdaq unter dem Kürzel „ANT“ gehandelt werden.',
            'Anzahl der Aktien und Preisspanne stehen laut Anthropic noch nicht fest. Konsortialführer sind laut Prospekt Goldman Sachs und Morgan Stanley.',
            'Laut Prospekt steuern ein Treuhand-Gremium für KI-Sicherheit und die Gründer das Unternehmen über Sonderaktien, die Gründer kommen auf 50,1 % der Stimmrechte.',
        ],
        sections: [
            {
                h: 'Was ist passiert?',
                p: [
                    'Anthropic, der Hersteller von Claude, hat den Börsengang offiziell beantragt. Das Unternehmen will seine Aktien der Klasse A an der Nasdaq Global Select Market unter dem Kürzel „ANT“ notieren. Wie viele Aktien es gibt und zu welchem Preis, steht laut Anthropic noch nicht fest.',
                    'Vertraulich hatte Anthropic die Unterlagen laut Berichten schon im Juni eingereicht. Jetzt ist der Prospekt öffentlich, und damit auch Zahlen, die vorher nur gemunkelt wurden. Laut Prospekt lag der Umsatz im ersten Halbjahr 2026 bei 16,3 Milliarden US-Dollar, der Nettoverlust bei 80,7 Milliarden. Den Großteil des Verlusts erklären Berichte mit Buchungen rund um die Finanzierung, nicht mit dem laufenden Geschäft.',
                ],
            },
            {
                h: 'Wer hat nach dem Börsengang das Sagen?',
                p: [
                    'Spannend ist die Konstruktion. Anthropic ist eine Public Benefit Corporation, muss also laut Satzung neben dem Gewinn auch einen Gemeinwohlzweck verfolgen: die verantwortungsvolle Entwicklung fortgeschrittener KI zum langfristigen Nutzen der Menschheit.',
                    'Ein unabhängiges Gremium, der Long-Term Benefit Trust, wählt über eine eigene Aktienklasse die Mehrheit des Verwaltungsrats. Die sieben Gründer halten über eine Gesellschaft eine einzige Sonderaktie mit 50,1 % der Stimmrechte bei allgemeinen Abstimmungen. Wer Aktien der Klasse A kauft, bekommt also Anteile, aber wenig Mitsprache.',
                ],
            },
            {
                h: 'Was ändert sich für Claude-Nutzer?',
                p: [
                    'Kurzfristig nichts. Tarife, Preise und Funktionen ändern sich durch den Antrag nicht. Mittelfristig steigt der Druck, Umsatz und Gewinn zu zeigen, und das spürt man erfahrungsgemäß an Preisen, Tarifgrenzen und neuen Bezahlfunktionen. Laut Berichten wollte Anthropic mit dem Antrag auch OpenAI beim Börsengang zuvorkommen.',
                    'Für dich als Nutzer heißt das vor allem: Verlass dich nicht auf einen einzigen Anbieter. Halte deine Prompts, Anweisungen und Skills so, dass du sie zu einem anderen Werkzeug mitnehmen kannst.',
                ],
            },
        ],
        tun: [
            'Nichts überstürzen: Für Claude-Nutzer ändert sich durch den Antrag erst einmal nichts.',
            'Wichtige Anweisungen und Projekte so dokumentieren, dass sie sich zu einem anderen Tool umziehen lassen.',
            'Wer investieren will: Prospekt lesen, Risiken prüfen, keine Anlageentscheidung wegen eines Blogartikels.',
        ],
        bezug: [
            ['/tools/claude/', 'Claude im Steckbrief', 'Tarife und Preise des Produkts hinter dem Börsengang.'],
            ['/neue-ki-modelle/claude-5-5/', 'Claude 5.5', 'Die aktuelle Modellfamilie von Anthropic.'],
            ['/ki-tools/alternativen/claude/', 'Claude-Alternativen', 'Falls du dich breiter aufstellen willst.'],
            ['/ratgeber/chatgpt-claude-gemini-welcher-chatbot/', 'ChatGPT, Claude oder Gemini?', 'Welcher Chatbot wofür passt.'],
            ['/glossar/agent-skills/', 'Was sind Agent Skills?', 'Anweisungen, die du zwischen Anbietern mitnehmen kannst.'],
            ['/ki-news/claude-duet-proaktiver-ki-agent/', 'Claude Duet', 'Das neueste Produkt von Anthropic.'],
        ],
        faq: [
            {
                q: 'Unter welchem Kürzel geht Anthropic an die Börse?',
                a: 'Laut Anthropic sollen die Aktien der Klasse A an der Nasdaq Global Select Market unter dem Kürzel „ANT“ gehandelt werden.',
            },
            {
                q: 'Wann startet der Handel mit Anthropic-Aktien?',
                a: 'Ein Datum steht nicht fest. Am 26. Oktober 2026 wurde der Antrag eingereicht, Anzahl der Aktien und Preisspanne sind laut Anthropic noch offen. Gehandelt werden darf erst, wenn die Registrierung wirksam ist.',
            },
            {
                q: 'Ändern sich die Claude-Preise durch den Börsengang?',
                a: 'Durch den Antrag selbst nicht. Ob sich Tarife später ändern, ist offen.',
            },
        ],
        quellen: [
            { titel: 'Anthropic: Anthropic files S-1 with the SEC', url: 'https://www.anthropic.com/news/s1-sec' },
            { titel: 'SEC: Anthropic, PBC Form S-1', url: 'https://www.sec.gov/Archives/edgar/data/2130357/000162828026067168/anthropicpbc-sx1.htm' },
            { titel: 'The Verge: Anthropic files for its IPO', url: 'https://www.theverge.com/ai-artificial-intelligence/1018476/anthropic-ipo-details-s1-filed-sec' },
        ],
    },
    {
        slug: 'openai-prompt-caching-12-stunden',
        titel: 'OpenAI merkt sich Prompts jetzt 12 Stunden: wann das spart',
        seoTitle: 'OpenAI Prompt Caching 12 Stunden: Kosten und Rechnung',
        description:
            'In der OpenAI-API lassen sich Prompts jetzt 12 statt 30 Minuten im Cache halten. Das Schreiben kostet das 2,5-Fache, das Lesen nur ein Zehntel. Ab wann sich das rechnet, mit Beispielrechnung.',
        datum: '2026-10-20',
        veroeffentlicht: '2026-10-27',
        thema: 'API',
        emoji: '🧊',
        minutes: 4,
        jean: 'Prompt Caching ist wie ein vorgewärmter Motor: Der erste Start kostet mehr Sprit, danach fährst du billiger. Nur wenn du einmal am Tag zum Bäcker fährst, lohnt der Aufwand nicht.',
        kurz: [
            'Seit 20. Oktober 2026 kannst du in der Responses API von OpenAI eine Mindest-Lebensdauer von 12 Stunden für den Prompt-Cache wählen, statt der üblichen 30 Minuten. Das gilt ab GPT-5.6.',
            'Schreiben in den 12-Stunden-Cache kostet das 2,5-Fache des normalen Eingabepreises, beim 30-Minuten-Cache das 1,25-Fache. Lesen kostet bei beiden ein Zehntel, bei GPT-6.1 Sol ein Zwanzigstel.',
            'Lohnend ist das für Anweisungen, Werkzeugbeschreibungen und Nachschlagematerial, die über den Tag mit großen Pausen wiederverwendet werden.',
        ],
        sections: [
            {
                h: 'Was ist Prompt Caching?',
                p: [
                    'Viele Anfragen an ein Sprachmodell beginnen gleich: dieselben Anweisungen, dieselbe Produktliste, dieselben Werkzeugbeschreibungen. Prompt Caching speichert diesen gleichen Anfang zwischen. Die nächste Anfrage mit demselben Anfang wird schneller und deutlich billiger verarbeitet.',
                    'Bisher hielt OpenAI den Cache mindestens 30 Minuten. Wer seine Anfragen über den Tag verteilt, etwa einen Agenten, der morgens, mittags und abends arbeitet, zahlte deshalb immer wieder den vollen Preis.',
                ],
            },
            {
                h: 'Was kostet der 12-Stunden-Cache?',
                p: [
                    'Laut OpenAI-Dokumentation kostet das Schreiben in den Cache bei 30 Minuten das 1,25-Fache des normalen Eingabepreises, bei 12 Stunden das 2,5-Fache. Das ist kein Aufschlag, sondern der Gesamtpreis für diese Tokens. Gelesen wird bei beiden Varianten für ein Zehntel des Eingabepreises, bei GPT-6.1 Sol und GPT-6.1 Terra für ein Zwanzigstel.',
                    'Eine Beispielrechnung: Du nutzt denselben Anfang dreimal am Tag, jeweils mit Stunden Abstand. Mit dem 12-Stunden-Cache zahlst du einmal 2,5 plus zweimal 0,1, also das 2,7-Fache des Normalpreises. Mit dem 30-Minuten-Cache, der jedes Mal abgelaufen ist, zahlst du dreimal 1,25, also das 3,75-Fache. Bei nur zwei Nutzungen dreht sich das: 2,6 gegen 2,5. Faustregel: ab drei Wiederholungen mit großen Pausen lohnt sich die lange Variante.',
                ],
            },
            {
                h: 'Gut zu wissen',
                p: [
                    'Du kannst beide Laufzeiten in einer Anfrage mischen: 12 Stunden für die festen Anweisungen, 30 Minuten für den neueren Gesprächsverlauf. Eingestellt wird das mit prompt_cache_options.ttl auf „12h“ oder „30m“.',
                    'Die 12 Stunden sind eine Mindestdauer, keine Löschfrist. OpenAI weist darauf hin, dass Einträge auch länger gespeichert sein können und dass die Einstellung nichts an den Regeln zur Datenaufbewahrung ändert. Für den Datenschutz ist sie also kein Schalter.',
                ],
            },
        ],
        tun: [
            'Prüfen, welche Teile deiner Anfragen immer gleich sind, und sie an den Anfang stellen.',
            'Zählen, wie oft am Tag derselbe Anfang mit großen Pausen genutzt wird. Ab dreimal lohnt „12h“.',
            'Kosten vorher mit dem API-Kosten-Rechner überschlagen.',
        ],
        bezug: [
            ['/glossar/prompt-caching/', 'Was ist Prompt Caching?', 'Der Begriff kurz erklärt.'],
            ['/rechner/api-kosten/', 'API-Kosten-Rechner', 'Rechne deine Kosten mit und ohne Cache durch.'],
            ['/glossar/token/', 'Was ist ein Token?', 'Die Einheit, in der Cache-Preise berechnet werden.'],
            ['/neue-ki-modelle/gpt-6-1-sol/', 'GPT-6.1 Sol', 'Hier kostet das Lesen aus dem Cache nur ein Zwanzigstel.'],
            ['/ki-news/openai-decisions-api/', 'Die Decisions API', 'Hat ebenfalls Prompt Caching und rechnet nur Eingaben ab.'],
            ['/ki-news/gpt-4o-api-abschaltung/', 'GPT-4o fliegt aus der API', 'Wer umstellt, kann das Caching gleich mit einrichten.'],
            ['/glossar/system-prompt/', 'Was ist ein System-Prompt?', 'Der klassische Kandidat für den langen Cache.'],
        ],
        faq: [
            {
                q: 'Wie lange speichert OpenAI Prompts im Cache?',
                a: 'Ab GPT-5.6 in der Responses API mindestens 30 Minuten (Standard) oder mindestens 12 Stunden, wenn du „12h“ wählst. Einträge können länger bestehen bleiben.',
            },
            {
                q: 'Was kostet der 12-Stunden-Cache bei OpenAI?',
                a: 'Schreiben kostet das 2,5-Fache des normalen Eingabepreises, Lesen ein Zehntel, bei GPT-6.1 Sol und Terra ein Zwanzigstel. Der 30-Minuten-Cache kostet beim Schreiben das 1,25-Fache.',
            },
        ],
        quellen: [
            { titel: 'OpenAI Developers: Prompt caching', url: 'https://developers.openai.com/api/docs/guides/prompt-caching' },
            { titel: 'OpenAI API Changelog', url: 'https://developers.openai.com/api/docs/changelog' },
            { titel: 'OpenAI Community: QoL Updates, Day 16', url: 'https://community.openai.com/t/qol-updates-day-20-of-28-days-of-quality-of-life-improvements-and-or-a-full-reset/1403525/79' },
        ],
    },
    {
        slug: 'chatgpt-chats-sperren-pin',
        titel: 'ChatGPT: Chats jetzt mit PIN sperren, aber kein Tresor',
        seoTitle: 'ChatGPT Chats sperren mit PIN: So geht es, das fehlt',
        description:
            'Seit 20. Oktober 2026 lassen sich Chats in ChatGPT mit einer PIN oder Face ID sperren. Wie das geht, was es schützt, was ausdrücklich nicht, und warum ein vergessener PIN alles löscht.',
        datum: '2026-10-20',
        veroeffentlicht: '2026-10-27',
        thema: 'ChatGPT',
        emoji: '🔐',
        minutes: 4,
        jean: 'Perfekt für den Chat, in dem du die Geburtstagsüberraschung für deine Freundin planst. Weniger perfekt, wenn du die PIN vergisst und die Überraschung gleich mit verschwindet.',
        kurz: [
            'Seit 20. Oktober 2026 rollt OpenAI gesperrte Chats aus: Ausgewählte Unterhaltungen verschwinden aus Verlauf, angehefteten Chats und Suche und öffnen sich nur mit einer 4-stelligen PIN oder Face ID, Touch ID oder Geräteentsperrung.',
            'Laut OpenAI ist das keine Ende-zu-Ende-Verschlüsselung und kein Tresor. Aufbewahrung und die Einstellung zum Modelltraining bleiben, wie sie sind.',
            'Wer die PIN zurücksetzt, löscht alle gesperrten Chats endgültig. Auch der Support kann sie nicht wiederherstellen.',
        ],
        sections: [
            {
                h: 'Wie funktioniert das?',
                p: [
                    'Im Menü eines Chats (die drei Punkte) wählst du „Lock chat“ und bestätigst. Beim ersten Mal legst du eine 4-stellige PIN an. Der Chat wandert dann in das Projekt „Locked chats“ und taucht im normalen Verlauf und in der Suche nicht mehr auf.',
                    'Zum Öffnen gibst du die PIN ein oder nutzt auf dem Handy Face ID, Touch ID oder die Geräteentsperrung. Im Browser sperrt sich der Bereich wieder, wenn du den Tab neu lädst oder schließt, auf dem Handy nach einer Minute im Hintergrund. Laut OpenAI kommt die Funktion schrittweise für Free, Go, Plus und Pro, im Web, in den Apps und in der Desktop-App.',
                ],
            },
            {
                h: 'Was schützt das, was nicht?',
                p: [
                    'Gedacht ist die Funktion für den Alltag: Bildschirm teilen im Meeting, Handy kurz weitergeben, gemeinsam genutzter Rechner. Dafür ist sie gut.',
                    'OpenAI sagt aber deutlich, was sie nicht ist: keine Ende-zu-Ende-Verschlüsselung, kein separater verschlüsselter Tresor. Die Aufbewahrungsdauer ändert sich nicht, die Einstellung „Modell für alle verbessern“ auch nicht, und was ChatGPT sich vor dem Sperren gemerkt hat, bleibt gemerkt. Für wirklich vertrauliche Daten gilt also weiter: gar nicht erst eintippen.',
                ],
            },
            {
                h: 'Die Falle mit der PIN',
                p: [
                    'Ganz wichtig: Wer die PIN vergisst und zurücksetzt, verliert laut OpenAI alle gesperrten Chats endgültig, samt Dateien und Erinnerungen, die nur dort gespeichert waren. Der Support kann nichts wiederherstellen. Also PIN in den Passwort-Manager, nicht auf den Zettel am Monitor.',
                    'Und ein kleines Detail für Bildschirm-Teiler: Auf anderen Geräten, auf denen ChatGPT schon offen ist, kann der Titel eines frisch gesperrten Chats noch sichtbar sein, bis die Liste neu lädt. Vor dem Teilen kurz prüfen.',
                ],
            },
        ],
        tun: [
            'Chats mit privaten Themen sperren, bevor du das nächste Mal den Bildschirm teilst.',
            'PIN im Passwort-Manager speichern, ein Zurücksetzen löscht alles Gesperrte.',
            'Sensible Daten weiterhin gar nicht erst in Chatbots eingeben.',
        ],
        bezug: [
            ['/tools/chatgpt/', 'ChatGPT im Steckbrief', 'Tarife und Funktionen von ChatGPT.'],
            ['/ratgeber/ki-tools-datenschutz-dsgvo/', 'KI-Tools und Datenschutz', 'Was gesperrte Chats nicht ersetzen.'],
            ['/tutorials/chatgpt-richtig-nutzen/', 'Tutorial: ChatGPT richtig nutzen', 'Mit dem Kapitel zum Datenschutz.'],
            ['/ki-news/chatgpt-werbung-deutschland/', 'Werbung in ChatGPT', 'Die andere Privatsphäre-Frage im Oktober.'],
            ['/ki-news/custom-gpts-werden-abgeschaltet/', 'Custom GPTs werden abgeschaltet', 'Noch eine Änderung in ChatGPT, die du kennen solltest.'],
            ['/glossar/trainingsdaten/', 'Was sind Trainingsdaten?', 'Warum die Trainings-Einstellung wichtiger ist als die PIN.'],
        ],
        faq: [
            {
                q: 'Wie sperre ich einen Chat in ChatGPT?',
                a: 'Im Menü des Chats (drei Punkte) „Lock chat“ wählen und bestätigen. Beim ersten Mal legst du eine 4-stellige PIN an. Gesperrte Chats findest du unter Projekte, Locked chats.',
            },
            {
                q: 'Sind gesperrte ChatGPT-Chats verschlüsselt?',
                a: 'Laut OpenAI nicht im Sinne einer Ende-zu-Ende-Verschlüsselung. Gesperrte Chats sind nur aus Verlauf und Suche ausgeblendet und mit PIN geschützt. Aufbewahrung und Trainingseinstellungen bleiben unverändert.',
            },
            {
                q: 'Was passiert, wenn ich die ChatGPT-PIN vergesse?',
                a: 'Beim Zurücksetzen der PIN werden alle gesperrten Chats und nur dort gespeicherte Inhalte endgültig gelöscht. Der Support kann sie nicht wiederherstellen.',
            },
        ],
        quellen: [
            { titel: 'OpenAI Help Center: ChatGPT release notes', url: 'https://help.openai.com/en/articles/6825453-chatgpt-release-notes' },
            { titel: 'OpenAI Help Center: Using locked chats in ChatGPT', url: 'https://help.openai.com/en/articles/20001411-using-locked-chats-in-chatgpt' },
        ],
    },
    {
        slug: 'gpt-4o-api-abschaltung',
        titel: 'GPT-4o und GPT-4.1 fliegen aus der API: Frist 14. Januar',
        seoTitle: 'GPT-4o und GPT-4.1: API-Abschaltung am 14.1.2027',
        description:
            'OpenAI schaltet GPT-4o, GPT-4o mini, GPT-4.1 und GPT-4.1 mini am 14. Januar 2027 in der API ab. Welche Automationen betroffen sind, was der Ersatz kostet und welche Fristen noch laufen.',
        datum: '2026-10-14',
        veroeffentlicht: '2026-10-27',
        thema: 'API',
        emoji: '⏳',
        fristen: [
            ['2026-12-11', 'gpt-5, o3 und o3-pro (genannte Versionen) verlassen die OpenAI-API'],
            ['2027-01-06', 'tts-1 und tts-1-hd verlassen die OpenAI-API'],
            ['2027-01-14', 'GPT-4o, GPT-4o mini, GPT-4.1 und GPT-4.1 mini verlassen die OpenAI-API'],
            ['2027-02-26', 'whisper-1 und gpt-4o-transcribe verlassen die OpenAI-API'],
        ],
        minutes: 5,
        jean: 'Irgendwo in deinem Make-Szenario steht noch gpt-4o-mini. Ich weiß es, du weißt es, und am 14. Januar weiß es auch dein Fehlerprotokoll.',
        kurz: [
            'Laut der Abkündigungsseite von OpenAI werden GPT-4o, GPT-4o mini, GPT-4.1 und GPT-4.1 mini am 14. Januar 2027 aus der API entfernt. Bekanntgegeben wurde das am 14. Oktober 2026.',
            'Empfohlener Ersatz für alle vier ist GPT-6 Luna. Feinjustierte Versionen dieser Modelle laufen zum selben Termin aus.',
            'Weitere Fristen: tts-1 und tts-1-hd am 6. Januar 2027, whisper-1 am 26. Februar 2027, gpt-5 und o3 schon am 11. Dezember 2026.',
        ],
        sections: [
            {
                h: 'Was wird abgeschaltet?',
                p: [
                    'OpenAI hat am 14. Oktober 2026 Entwickler informiert, dass vier Modelle der GPT-4-Reihe die API verlassen: GPT-4o (gpt-4o-2024-08-06 und gpt-4o-2024-11-20), GPT-4o mini (gpt-4o-mini-2024-07-18), GPT-4.1 (gpt-4.1-2025-04-14) und GPT-4.1 mini (gpt-4.1-mini-2025-04-14). Abschalttermin ist der 14. Januar 2027.',
                    'Wer eines dieser Modelle feinjustiert hat, also mit eigenen Daten nachtrainiert, verliert die feinjustierte Version zum selben Termin. Als Ersatz nennt OpenAI für alle vier GPT-6 Luna.',
                    'In ChatGPT selbst sind GPT-4o und GPT-4.1 übrigens schon seit Februar 2026 Geschichte. Jetzt folgt der Teil, den man nicht sieht: die Schnittstelle, über die Apps, Plugins und Automationen die Modelle anfragen.',
                ],
            },
            {
                h: 'Warum betrifft dich das, auch ohne eigene App?',
                p: [
                    'Weil GPT-4o mini jahrelang das Standardmodell in unzähligen Automationen war: in Make, Zapier und n8n, in WordPress-Plugins für Texte und Alt-Tags, in Chatbots auf Websites und in selbstgebauten Google-Sheets-Skripten. Dort steht der Modellname oft fest eingetragen, und niemand schaut mehr hin, solange es läuft.',
                    'Am 14. Januar läuft es nicht mehr. Dann antworten die Anfragen mit einem Fehler, und je nach Aufbau bricht die ganze Automation ab oder schreibt leere Felder in deinen Shop. Wer im Dezember Urlaub hat, sollte das vorher erledigen.',
                ],
            },
            {
                h: 'Noch mehr Fristen im Kalender',
                p: [
                    'Die Abkündigungsseite von OpenAI ist gerade gut gefüllt. Schon am 11. Dezember 2026 enden gpt-5, gpt-5-mini, gpt-5-nano, o3 und o3-pro in den genannten Versionen. Am 6. Januar 2027 folgen die Sprachausgabe-Modelle tts-1 und tts-1-hd, Ersatz ist gpt-realtime-2.1-mini. Am 26. Februar 2027 sind whisper-1 und die gpt-4o-transcribe-Modelle dran.',
                    'Zwischen Ankündigung und Abschaltung von GPT-4o liegen genau drei Monate. Wer im Dezember noch Weihnachtsgeschäft hat, sollte die Umstellung also lieber im November erledigen.',
                ],
            },
            {
                h: 'Was kostet der Umstieg?',
                p: [
                    'Das hängt von deinem Volumen ab. Rechne es mit dem API-Kosten-Rechner durch, bevor du umstellst: Eingabe- und Ausgabe-Tokens deiner typischen Anfrage eintragen, Modelle vergleichen. Für reine Ja-Nein- oder Auswahlfragen lohnt außerdem ein Blick auf die neue Decisions API, die ebenfalls auf GPT-6 Luna läuft und nur Eingabe-Tokens berechnet.',
                    'Teste vorher mit echten Beispielen. Ein neues Modell antwortet anders, mal länger, mal förmlicher. Wenn deine Automation die Antwort weiterverarbeitet, etwa als JSON, prüfe, ob das Format noch passt.',
                ],
            },
        ],
        tun: [
            'In Make, Zapier, n8n, Plugins und eigenen Skripten nach gpt-4o, gpt-4o-mini, gpt-4.1 und gpt-4.1-mini suchen.',
            'Auf gpt-6-luna umstellen und mit fünf echten Fällen testen, besonders wenn JSON zurückkommt.',
            'Kosten vorher im API-Kosten-Rechner vergleichen.',
            'Plugin-Anbieter fragen, ob ein Update mit neuem Modell kommt.',
            'Fristen für tts-1 (6.1.2027) und whisper-1 (26.2.2027) gleich mit eintragen.',
        ],
        bezug: [
            ['/prompts/ki-modell-umstellen-testplan/', 'Prompt: Testplan für den Modellwechsel', 'Testfälle, Formatprüfung und Rückfallplan in einem.'],
            ['/glossar/abkuendigung/', 'Was ist eine Abkündigung?', 'Der Begriff hinter der Frist.'],
            ['/rechner/api-kosten/', 'API-Kosten-Rechner', 'Rechne aus, was der Umstieg auf GPT-6 Luna kostet.'],
            ['/neue-ki-modelle/gpt-6-sol-luna/', 'GPT-6 Sol und Luna', 'Luna ist der offizielle Ersatz für alle vier Modelle.'],
            ['/tool-vergleiche/make-vs-zapier-vs-n8n/', 'Make, Zapier oder n8n?', 'Dort stecken die meisten vergessenen gpt-4o-mini-Aufrufe.'],
            ['/tools/make/', 'Make im Steckbrief', 'Automationsplattform mit OpenAI-Modul.'],
            ['/tools/n8n/', 'n8n im Steckbrief', 'Selbst gehostete Automationen mit KI-Knoten.'],
            ['/ki-news/openai-decisions-api/', 'Die Decisions API', 'Günstige Alternative für reine Entscheidungsfragen.'],
            ['/prompts/automatisierung-planen/', 'Prompt: Automatisierung planen', 'Hilft, alle KI-Schritte einer Automation aufzulisten.'],
        ],
        faq: [
            {
                q: 'Wann wird GPT-4o in der API abgeschaltet?',
                a: 'Laut OpenAI am 14. Januar 2027, zusammen mit GPT-4o mini, GPT-4.1 und GPT-4.1 mini. Angekündigt wurde das am 14. Oktober 2026.',
            },
            {
                q: 'Was ersetzt GPT-4o mini?',
                a: 'OpenAI empfiehlt GPT-6 Luna (gpt-6-luna) als Ersatz für GPT-4o, GPT-4o mini, GPT-4.1 und GPT-4.1 mini.',
            },
            {
                q: 'Betrifft das auch ChatGPT?',
                a: 'Nein, in ChatGPT sind GPT-4o und GPT-4.1 schon seit Februar 2026 nicht mehr verfügbar. Die Abschaltung am 14. Januar 2027 betrifft die API, also Apps, Plugins und Automationen.',
            },
        ],
        quellen: [
            { titel: 'OpenAI API: Deprecations', url: 'https://developers.openai.com/api/docs/deprecations' },
            { titel: 'OpenAI: Retiring GPT-4o and older models in ChatGPT', url: 'https://openai.com/index/retiring-gpt-4o-and-older-models/' },
        ],
    },
    {
        slug: 'chatgpt-werbung-deutschland',
        titel: 'Werbung in ChatGPT: was du siehst und was Firmen buchen können',
        seoTitle: 'Werbung in ChatGPT: Was Nutzer und Firmen wissen müssen',
        description:
            'ChatGPT zeigt Anzeigen in 89 Ländern, in Deutschland seit August 2026. Wer Werbung sieht, wer nicht, was mit deinen Chats passiert und wie Firmen über den Ads Manager selbst Kampagnen buchen.',
        datum: '2026-10-21',
        veroeffentlicht: '2026-10-27',
        thema: 'ChatGPT',
        emoji: '📣',
        minutes: 5,
        jean: 'Früher hast du ChatGPT nach dem besten Staubsauger gefragt. Jetzt fragt der Staubsauger zurück, ob er mal kurz stören darf.',
        kurz: [
            'Am 21. Oktober 2026 hat OpenAI ChatGPT Ads auf 26 weitere Länder ausgeweitet, jetzt 89 weltweit. Laut OpenAI haben über 100.000 Werbetreibende Kampagnen geschaltet.',
            'Deutschland ist seit August 2026 dabei, zusammen mit 30 weiteren europäischen Märkten. Seit 31. August können Firmen dort selbst über den Ads Manager buchen.',
            'Anzeigen sehen nur Nutzer der Tarife Free und Go. Plus, Pro und Enterprise bleiben laut OpenAI werbefrei.',
        ],
        sections: [
            {
                h: 'Wer sieht Werbung in ChatGPT?',
                p: [
                    'Nur wer ChatGPT kostenlos oder im günstigen Go-Tarif nutzt. Plus, Pro und Enterprise bleiben laut OpenAI werbefrei. OpenAI begründet die Anzeigen damit, dass sie den kostenlosen und günstigen Zugang zu ChatGPT finanzieren.',
                    'Gestartet ist das Ganze im Februar 2026 als Test in den USA. Am 18. August hat OpenAI 31 europäische Märkte angekündigt, darunter Deutschland, Österreich, Frankreich, Spanien und die Niederlande. Mit der Ausweitung vom 21. Oktober sind es jetzt 89 Länder.',
                ],
            },
            {
                h: 'Was passiert mit meinen Chats?',
                p: [
                    'OpenAI verspricht in seinen Werbegrundsätzen: Unterhaltungen bleiben für Werbetreibende privat, Kundendaten werden nicht verkauft. Anzeigen sind immer gekennzeichnet und von den Antworten getrennt, und die Werbung soll die Antworten nicht beeinflussen. Die Personalisierung der Anzeigen kannst du laut OpenAI selbst steuern.',
                    'Das sind Zusagen des Anbieters, prüfen kann man sie von außen nicht. Wer ganz sicher werbefrei arbeiten will, braucht einen bezahlten Tarif oder ein anderes Tool. Und wie immer gilt: Was wirklich vertraulich ist, gehört nicht in einen Chatbot.',
                ],
            },
            {
                h: 'Was heißt das für Firmen und Marketing?',
                p: [
                    'Ein neuer Werbekanal, und zwar einer mit Kaufabsicht: Menschen beschreiben in ChatGPT ziemlich genau, was sie suchen, welches Budget sie haben und was ihnen wichtig ist. Laut OpenAI gibt es neben Abrechnung pro tausend Einblendungen und pro Klick inzwischen Optimierung auf Conversions, Geo-Targeting, eigene Zielgruppen sowie Messung über das OpenAI Pixel und eine Conversions API.',
                    'Buchen können Firmen in Deutschland seit 31. August 2026 selbst über den Ads Manager unter ads.openai.com, alternativ über Agenturen und Technologiepartner. Wer schon Google Ads fährt, sollte einen kleinen Testbudget-Topf einplanen, bevor die Klickpreise mit der Nachfrage steigen.',
                    'Für SEO heißt das: Neben der organischen Sichtbarkeit in KI-Antworten gibt es jetzt auch die bezahlte. Beides hängt davon ab, dass dein Angebot klar beschrieben ist, mit sauberen Produktdaten und Seiten, die Fragen wirklich beantworten.',
                ],
            },
        ],
        tun: [
            'Als Nutzer: Werbe-Personalisierung in den ChatGPT-Einstellungen prüfen.',
            'Als Firma: Konto unter ads.openai.com anlegen und mit kleinem Testbudget starten.',
            'Landingpages auf die Fragen ausrichten, die Menschen in ChatGPT stellen.',
            'Conversion-Messung (Pixel oder Conversions API) vor dem Start einrichten und mit der Datenschutzerklärung abgleichen.',
        ],
        bezug: [
            ['/prompts/chatgpt-anzeige-texten/', 'Prompt: Anzeigentexte für ChatGPT', 'Anzeigen passend zu den Fragen im Chat.'],
            ['/tools/chatgpt/', 'ChatGPT im Steckbrief', 'Welche Tarife werbefrei sind und was sie kosten.'],
            ['/ki-tools/fuer/marketing/', 'KI-Tools für Marketing', 'Werkzeuge rund um Kampagnen, Texte und Analyse.'],
            ['/prompts/landingpage-texte/', 'Prompt: Landingpage-Texte', 'Für die Seite, auf die deine ChatGPT-Anzeige zeigt.'],
            ['/prompts/werbe-email-aktion/', 'Prompt: Werbe-E-Mail für eine Aktion', 'Die Kampagne braucht meist auch eine Mail.'],
            ['/prompts/zielgruppen-persona/', 'Prompt: Zielgruppen-Persona', 'Hilft beim Aufsetzen eigener Zielgruppen.'],
            ['/ki-tools/marketing/', 'KI-Marketing-Tools', 'Die Rubrik in der Tool-Datenbank.'],
            ['/ratgeber/ki-tools-datenschutz-dsgvo/', 'KI-Tools und Datenschutz', 'Was du vor Pixel und Conversions API klären solltest.'],
        ],
        faq: [
            {
                q: 'Gibt es Werbung in ChatGPT in Deutschland?',
                a: 'Ja. OpenAI hat ChatGPT Ads im August 2026 auf 31 europäische Märkte ausgeweitet, darunter Deutschland. Anzeigen sehen nur Nutzer der Tarife Free und Go.',
            },
            {
                q: 'Wie bekomme ich ChatGPT ohne Werbung?',
                a: 'Laut OpenAI bleiben die bezahlten Tarife Plus, Pro und Enterprise werbefrei.',
            },
            {
                q: 'Wie schalte ich als Firma Anzeigen in ChatGPT?',
                a: 'In Deutschland seit 31. August 2026 selbst über den Ads Manager unter ads.openai.com oder über Agenturen und Technologiepartner.',
            },
        ],
        quellen: [
            { titel: 'OpenAI: ChatGPT Ads expands to 26 new countries', url: 'https://openai.com/index/chatgpt-ads-expands-26-new-countries/' },
            { titel: 'OpenAI: ChatGPT Ads expands across Europe', url: 'https://openai.com/index/chatgpt-ads-expands-across-europe/' },
        ],
    },
    {
        slug: 'claude-auto-modus-standard',
        titel: 'Claude fragt seltener nach: Auto-Modus wird Standard',
        seoTitle: 'Claude Auto-Modus wird Standard: was sich ändert',
        description:
            'In den Claude-Apps laufen Sitzungen bei Pro, Max und Team bald standardmäßig im Auto-Modus: Eine automatische Prüfung blockt riskante Schritte, statt dich jedes Mal zu fragen. So funktioniert es und so schaltest du zurück.',
        datum: '2026-10-22',
        veroeffentlicht: '2026-10-27',
        thema: 'Agenten',
        emoji: '🚦',
        minutes: 4,
        jean: 'Ich habe früher bei jedem Schritt „Ja, mach“ geklickt, ohne hinzuschauen. Ehrlich gesagt war ich die schwächste Stelle im System.',
        kurz: [
            'Anthropic hat am 22. Oktober 2026 angekündigt: Ab der Folgewoche starten Sitzungen in den Claude-Apps für Web, Desktop und Mobil bei Pro, Max und Team standardmäßig im Auto-Modus.',
            'Statt jede Aktion freizugeben, prüft eine automatische Kontrolle die Schritte: Sichere laufen durch, riskante werden geblockt, und Claude sucht einen anderen Weg.',
            'Zurück auf manuelle Freigabe geht jederzeit. Enterprise-Admins bekommen laut Anthropic vorher eine Mail.',
        ],
        sections: [
            {
                h: 'Was ändert sich?',
                p: [
                    'Wenn Claude in einer Sitzung Werkzeuge benutzt, etwa Dateien bearbeitet, im Browser klickt oder Code ausführt, hat es bisher oft gefragt: Darf ich? Im Auto-Modus fällt das Fragen weitgehend weg. Eine automatische Prüfung schaut sich jede Aktion an, lässt sichere durch und blockt riskante, während Claude nach einer anderen Lösung sucht.',
                    'In Claude Code ist der Auto-Modus für Pro, Max und Team schon seit 14. August 2026 Standard. Jetzt ziehen laut Anthropic die meisten Claude-Apps nach, ab der Woche nach dem 22. Oktober.',
                ],
            },
            {
                h: 'Ist das sicher?',
                p: [
                    'Anthropic argumentiert mit Zahlen aus Claude Code: Nutzer hätten 97 % aller Freigabefragen bestätigt, also meist ohne genau hinzusehen. In einer Studie mit 1.053 bezahlten Testern hätten Menschen 13,6 % der gefährlichen Befehle erkannt, der Auto-Modus 89 %. Das sind Angaben des Herstellers.',
                    'Anthropic sagt selbst, dass der Auto-Modus auf Klassifikatoren beruht und das Risiko nicht beseitigt. Für folgenreiche Änderungen, etwa an Produktivsystemen, empfiehlt der Hersteller weiter, Claudes Aktionen selbst zu prüfen. Blockt die Prüfung in Claude Code dreimal hintereinander oder zwanzigmal in einer Sitzung, fällt es auf manuelle Freigaben zurück.',
                ],
            },
            {
                h: 'Wie schalte ich zurück?',
                p: [
                    'In den Apps lässt sich jede Sitzung jederzeit wieder auf manuelle Freigabe stellen. In Claude Code wechselst du mit Umschalt plus Tab oder über das Modus-Menü der Desktop-App. Wer einen eigenen Standard festgelegt hat, bekommt laut Anthropic höchstens eine einmalige Nachfrage. Team-Admins können einen Standard für die ganze Organisation festlegen oder den Auto-Modus abschalten.',
                    'Mein Tipp: Lass ihn für Recherche, Entwürfe und Datei-Aufräumarbeiten an. Für alles, was Geld bewegt, Mails verschickt oder Kundendaten berührt, schalte bewusst auf manuell.',
                ],
            },
        ],
        tun: [
            'Prüfen, welche Verbindungen und Werkzeuge Claude in deinem Konto nutzen darf.',
            'Für heikle Aufgaben eine eigene Sitzung im manuellen Modus starten.',
            'Im Team klären, ob der Admin einen festen Standard setzt.',
        ],
        bezug: [
            ['/glossar/auto-modus/', 'Was ist der Auto-Modus?', 'Der Begriff kurz erklärt.'],
            ['/tools/claude/', 'Claude im Steckbrief', 'Die Tarife Pro, Max und Team, für die der Auto-Modus Standard wird.'],
            ['/glossar/guardrails/', 'Was sind Guardrails?', 'Die automatische Prüfung ist genau so eine Schutzschiene.'],
            ['/glossar/computer-use/', 'Was ist Computer Use?', 'Wenn Claude selbst klickt, greift der Auto-Modus.'],
            ['/glossar/ki-agent/', 'Was ist ein KI-Agent?', 'Agenten arbeiten mehrere Schritte am Stück, ohne Pause.'],
            ['/tutorials/ki-agenten-verstehen/', 'Tutorial: KI-Agenten verstehen', 'Wie du Agenten sinnvolle Grenzen setzt.'],
            ['/glossar/prompt-injection/', 'Was ist Prompt-Injection?', 'Das Risiko, gegen das solche Prüfungen helfen sollen.'],
            ['/ki-news/claude-duet-proaktiver-ki-agent/', 'Claude Duet', 'Der nächste Schritt: ein Agent, der sich selbst meldet.'],
        ],
        faq: [
            {
                q: 'Was ist der Auto-Modus in Claude?',
                a: 'Ein Modus, in dem Claude nicht jede Aktion einzeln freigeben lässt. Eine automatische Prüfung lässt sichere Schritte durch und blockt riskante. Laut Anthropic wird er in den Apps für Pro, Max und Team ab der Woche nach dem 22. Oktober 2026 Standard.',
            },
            {
                q: 'Kann ich den Auto-Modus ausschalten?',
                a: 'Ja, jede Sitzung lässt sich jederzeit auf manuelle Freigabe umstellen. Team-Admins können einen festen Standard setzen oder den Auto-Modus abschalten.',
            },
        ],
        quellen: [
            { titel: 'Claude: Auto mode is now the default in Claude Code (mit Update vom 22.10.2026)', url: 'https://claude.com/resources/articles/auto-mode-default-in-claude-code' },
            { titel: 'Claude auf LinkedIn: Auto mode by default in the Claude apps', url: 'https://www.linkedin.com/posts/claude_starting-next-week-sessions-across-claude-activity-7519126814640807936-h9nx' },
        ],
    },
    {
        slug: 'gemini-gratis-nur-noch-auto',
        titel: 'Gemini gratis: Die Modellwahl übernimmt jetzt Google',
        seoTitle: 'Gemini kostenlos: nur noch Auto statt Modellwahl',
        description:
            'Wer Gemini ohne Abo nutzt, kann seit 9. Oktober 2026 das Modell nicht mehr selbst wählen. Auto schickt die meisten Fragen an Flash-Lite. Was das für die Qualität heißt und wie du siehst, welches Modell geantwortet hat.',
        datum: '2026-10-09',
        veroeffentlicht: '2026-10-27',
        thema: 'Gemini',
        emoji: '🎛️',
        minutes: 4,
        jean: 'Früher durftest du dir den Motor aussuchen. Jetzt sitzt Google am Schaltknüppel und sagt: Für die Bäckerfahrt reicht der kleine.',
        kurz: [
            'Nutzer ohne Google-AI-Abo sehen in der Gemini-App seit Anfang Oktober 2026 nur noch „Auto“ in der Modellauswahl. Die Wahl eines bestimmten Modells ist laut Google jetzt den Abos vorbehalten.',
            'Laut Google gehen die meisten Fragen an Flash-Lite, das schnellste Modell. Anspruchsvolle Fragen können an Flash oder Pro gehen.',
            'Wer die intelligente Modellauswahl abschaltet, bekommt ohne Abo alle Antworten von Flash-Lite.',
        ],
        sections: [
            {
                h: 'Was hat sich geändert?',
                p: [
                    'Bis Anfang Oktober konnten auch Gratis-Nutzer in der Gemini-App zwischen Flash-Lite, Flash und Pro wählen. Seit der Umstellung, die laut Berichten ab dem 9. Oktober ausgerollt wurde, steht für Konten ohne Google-AI-Abo nur noch „Auto“ im Menü.',
                    'Auto entscheidet pro Frage, welches Modell antwortet. Laut Google landen Alltagsfragen bei Flash-Lite für schnelle Antworten, und erst wenn eine Aufgabe tieferes Nachdenken braucht, kommen stärkere Modelle zum Zug. Die manuelle Modellwahl gehört laut Google jetzt zu den Abos.',
                ],
            },
            {
                h: 'Woran erkenne ich, welches Modell geantwortet hat?',
                p: [
                    'Google erklärt das im offiziellen Community-Beitrag: Unter jeder Antwort steht unter „Mehr“ das verwendete Modell, im Web bei den Denkschritten, in der App bei den Antwortdetails. Ein kurzer Blick lohnt sich, wenn dir eine Antwort komisch vorkommt.',
                    'Abschalten lässt sich Auto unter Einstellungen, Nutzungslimits, intelligente Modellauswahl. Dann antwortet ohne Abo aber immer Flash-Lite. Das ist also eher der Schalter für „schnell und berechenbar“ als für „mehr Qualität“.',
                ],
            },
            {
                h: 'Was heißt das für dich?',
                p: [
                    'Für schnelle Fragen, Zusammenfassungen und Ideen merkst du wenig. Bei kniffligen Aufgaben wie Rechnen, Code oder langen Dokumenten hängt die Qualität jetzt davon ab, ob Auto die Frage für anspruchsvoll genug hält. Formuliere solche Aufgaben deshalb klar als schwierig, mit Kontext und dem Hinweis, Schritt für Schritt vorzugehen.',
                    'Wer regelmäßig das Pro-Modell braucht, kommt um ein Abo nicht herum. Google AI Plus kostet in Deutschland 4,99 € im Monat. Welche Modelle darin genau enthalten sind, hat Google zuletzt angepasst, darum vor dem Abschluss im eigenen Konto prüfen. Alternativ lohnt ein Vergleich mit anderen Gratis-Chatbots.',
                ],
            },
        ],
        tun: [
            'Bei wichtigen Antworten unter „Mehr“ nachsehen, welches Modell geantwortet hat.',
            'Schwierige Aufgaben ausführlich formulieren, mit Kontext und Prüfauftrag.',
            'Mit dem KI-Test vergleichen, ob ein anderer Gratis-Chatbot für deine Aufgaben besser passt.',
        ],
        bezug: [
            ['/tools/google-gemini/', 'Google Gemini im Steckbrief', 'Tarife und Preise, ab 4,99 € in Deutschland.'],
            ['/ki-tools/kostenlos/', 'Kostenlose KI-Tools', 'Gratis-Alternativen, falls Auto dir nicht reicht.'],
            ['/ki-test/', 'Der KI-Test', 'Teste selbst, wie gut die Gratis-Version deine Aufgaben löst.'],
            ['/ratgeber/chatgpt-claude-gemini-welcher-chatbot/', 'ChatGPT, Claude oder Gemini?', 'Welcher Chatbot wofür passt.'],
            ['/glossar/reasoning-effort/', 'Was ist Reasoning Effort?', 'Die neuen Denkstufen in Gemini erklärt.'],
            ['/prompts/prompt-verbessern/', 'Prompt: Prompt verbessern', 'Damit Auto deine Frage als anspruchsvoll erkennt.'],
            ['/neue-ki-modelle/gemini-3-8-flash/', 'Gemini 3.8 Flash', 'Das aktuelle Flash-Modell im Überblick.'],
        ],
        faq: [
            {
                q: 'Kann ich in Gemini kostenlos noch das Modell wählen?',
                a: 'Nein. Laut Google sehen Nutzer ohne Google-AI-Abo nur noch „Auto“. Die manuelle Modellwahl gehört zu den Abos.',
            },
            {
                q: 'Welches Modell nutzt Gemini Auto?',
                a: 'Laut Google gehen die meisten Fragen an Flash-Lite. Anspruchsvollere Fragen können an Flash oder Pro gehen. Unter jeder Antwort lässt sich nachsehen, welches Modell geantwortet hat.',
            },
            {
                q: 'Wie schalte ich Auto in Gemini aus?',
                a: 'Unter Einstellungen, Nutzungslimits, die intelligente Modellauswahl abschalten. Ohne Abo antwortet dann immer Flash-Lite.',
            },
        ],
        quellen: [
            { titel: 'Gemini Apps Community (Google): Understanding Auto in the Gemini Model Picker', url: 'https://support.google.com/gemini/thread/472706487/understanding-auto-in-the-gemini-model-picker?hl=en' },
            { titel: 'Gemini Apps Help: Limits und Verfügbarkeit', url: 'https://support.google.com/gemini/answer/16275805?hl=en' },
            { titel: '9to5Google: Free Gemini users now on Auto models', url: 'https://9to5google.com/2026/10/09/gemini-auto-free-users/' },
        ],
    },
    {
        slug: 'claude-docs-slides-design-gratis',
        titel: 'Claude Docs, Slides und Design jetzt auch gratis',
        seoTitle: 'Claude Docs, Slides und Design jetzt auch im Gratis-Tarif',
        description:
            'Anthropic hat Docs, Slides und Design aus der Beta genommen, für alle Tarife inklusive Free. Neu sind Dashboards und Motion. Was die Werkzeuge können, wer sie bekommt und was mit claude.ai/design passiert.',
        datum: '2026-10-08',
        veroeffentlicht: '2026-10-27',
        thema: 'Claude',
        emoji: '🎨',
        fristen: [
            ['2026-12-14', 'Die eigenständige Seite claude.ai/design schließt'],
        ],
        minutes: 4,
        jean: 'Folien bauen war bisher der Teil der Arbeit, bei dem die Motivation im Leerlauf tuckert. Jetzt baut Claude, und ich schraube nur noch nach.',
        kurz: [
            'Seit 8. Oktober 2026 sind Claude Docs, Slides und Design aus der Beta und laut Anthropic in jedem Tarif enthalten, auch im kostenlosen.',
            'Neu in der Beta: Claude Dashboards für bezahlte Tarife und Claude Motion für Team und Enterprise.',
            'Die eigenständige Seite claude.ai/design bleibt bis 14. Dezember 2026 erreichbar, danach lebt Design nur noch in den normalen Claude-Unterhaltungen.',
        ],
        sections: [
            {
                h: 'Was können Docs, Slides und Design?',
                p: [
                    'Du bittest Claude im Chat um ein Dokument, eine Präsentation oder ein Design, und Claude baut es direkt in der Unterhaltung. Danach bearbeitest du selbst oder sagst Claude, was es ändern soll. Laut Anthropic wurden seit Mitte September über 45 Millionen Dokumente, Präsentationen und Designs damit erstellt.',
                    'Mit dem Ende der Beta kamen Verbesserungen dazu: Teams und Claude arbeiten gemeinsam an derselben Datei, Freigabe an Externe per Link ist möglich, wenn der Admin es erlaubt, und PowerPoint- und PDF-Exporte sehen laut Anthropic so aus wie im Editor. Präsentationen lassen sich als bearbeitbare Google-Slides-Datei übergeben, und auf dem Handy kannst du in der Claude-App bearbeiten.',
                ],
            },
            {
                h: 'Neu: Dashboards und Motion',
                p: [
                    'Claude Dashboards verbindet sich mit Datenplattformen wie BigQuery, Databricks, Snowflake oder Amazon Redshift oder mit einem CRM wie Salesforce. Du stellst eine Frage, Claude baut das Dashboard und hält es aktuell. Jede Zahl zeigt auf Klick die Abfrage dahinter. In der Beta gibt es das in den bezahlten Tarifen.',
                    'Claude Motion macht aus Berichten und Diagrammen kurze Animationen, die du als MP4 herunterlädst. Laut Anthropic nutzt Motion kein Videomodell, sondern schreibt Code, der deine Texte, Zahlen und Bilder bewegt. Also keine KI-generierten Menschen, dafür jede Zahl änderbar. Motion ist in der Beta für Team und Enterprise.',
                ],
            },
            {
                h: 'Lohnt sich das als Ersatz für Gamma oder Canva?',
                p: [
                    'Für schnelle Entwürfe, interne Präsentationen und Dokumente, die du sowieso im Chat vorbereitest, ist es ein starkes Gratis-Werkzeug. Für Markenvorlagen, Bildbibliotheken und Teamworkflows mit Design-Fokus haben spezialisierte Tools wie Canva oder Gamma weiter die Nase vorn. Probier es mit deiner nächsten Präsentation aus und vergleiche ehrlich, wie viel du nacharbeiten musst.',
                    'Wichtig für alle, die claude.ai/design schon genutzt haben: Die Seite bleibt laut Anthropic bis 14. Dezember 2026. Chats und Kommentare aus dieser eigenständigen Version gehen danach laut Berichten nicht mit, also vorher exportieren, was du brauchst.',
                ],
            },
        ],
        tun: [
            'Nächste Präsentation einmal mit Claude Slides entwerfen und als PowerPoint exportieren.',
            'Wer claude.ai/design nutzt: Projekte vor dem 14. Dezember 2026 sichern.',
            'Für Dashboards prüfen, welche Datenquellen dein Unternehmen freigeben will.',
        ],
        bezug: [
            ['/tools/claude/', 'Claude im Steckbrief', 'Tarife und Preise von Claude.'],
            ['/tool-vergleiche/gamma-vs-canva/', 'Gamma oder Canva?', 'Die spezialisierten Alternativen im Vergleich.'],
            ['/tools/gamma/', 'Gamma im Steckbrief', 'KI-Präsentationen als eigenes Werkzeug.'],
            ['/tools/canva/', 'Canva im Steckbrief', 'Design-Plattform mit Markenvorlagen.'],
            ['/prompts/referat-folien/', 'Prompt: Referat-Folien', 'Vorlage für eine saubere Folienstruktur.'],
            ['/ki-tools/produktivitaet/', 'KI-Tools für Produktivität', 'Die Rubrik mit Büro- und Präsentations-Tools.'],
            ['/neue-ki-modelle/claude-5-5/', 'Claude 5.5', 'Die Modellfamilie hinter Claude.'],
        ],
        faq: [
            {
                q: 'Ist Claude Slides kostenlos?',
                a: 'Ja. Laut Anthropic sind Claude Docs, Slides und Design seit 8. Oktober 2026 in jedem Tarif enthalten, auch im kostenlosen.',
            },
            {
                q: 'Wer bekommt Claude Dashboards und Motion?',
                a: 'Dashboards ist in der Beta für bezahlte Tarife verfügbar, Motion in der Beta für Team und Enterprise.',
            },
            {
                q: 'Was passiert mit claude.ai/design?',
                a: 'Die eigenständige Seite bleibt laut Anthropic bis 14. Dezember 2026 erreichbar. Danach gibt es Claude Design nur noch in den normalen Claude-Unterhaltungen.',
            },
        ],
        quellen: [
            { titel: 'Claude: Build live dashboards and animate explainers with Claude', url: 'https://claude.com/resources/articles/dashboards-and-motion' },
            { titel: 'Claude: Artifacts (Tarif-Übersicht)', url: 'https://claude.com/features/artifacts' },
            { titel: '9to5AI: Claude Dashboards and Motion launch', url: 'https://9to5ai.tech/claude-dashboards-motion-docs-slides-design-free' },
        ],
    },
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
        fristen: [
            ['2026-12-31', 'PHP 8.2 erreicht sein Lebensende, danach keine Sicherheitsupdates mehr'],
        ],
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
        fristen: [
            ['2026-12-11', 'Custom GPTs werden abgeschaltet'],
            ['2027-02-11', 'Custom GPTs in FedRAMP- und Enterprise-Workspaces mit Aufschub'],
        ],
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
            ['/prompts/gpt-anweisungen-zu-skill/', 'Prompt: GPT-Anweisungen in einen Skill umwandeln', 'Baut aus deinen alten Anweisungen eine SKILL.md zum Mitnehmen.'],
            ['/glossar/plugin/', 'Was ist ein ChatGPT-Plugin?', 'Der Nachfolger der Custom GPTs kurz erklärt.'],
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
        jean: 'Gemini merkt sich jetzt deine Hausfarben. Manche Agentur braucht dafür drei Meetings und ein PDF.',
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
// Alle Fristen aus den Meldungen, sortiert; vergangene Termine filtert die Seite beim Bauen heraus.
export const getFristen = () =>
    NEWS.flatMap((n) => (n.fristen || []).map(([datum, was]) => ({ datum, was, slug: n.slug, titel: n.titel }))).sort((a, b) => a.datum.localeCompare(b.datum))
export const getNewsArtikel = (slug) => NEWS.find((n) => n.slug === slug) || null
