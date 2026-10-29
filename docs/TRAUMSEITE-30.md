# AIGeddon Traumseite: 30 Schritte zu Konten, Community und Mitgliedschaft

Jeder Schritt ist ein eigenständiger Prompt. Er lässt sich einzeln in einer neuen Sitzung ausführen, liest vorher diese Datei und `CLAUDE.md` und hakt sich nach dem Merge hier ab.

## Feste Regeln für alle 30 Schritte

- Backend: Supabase-Projekt `aigeddon` (Ref `yfxashcmtazjkpklicky`, Region Frankfurt). Die Seite bleibt ein statischer Export auf GitHub Pages; alles Dynamische läuft im Browser über `@supabase/supabase-js` mit dem öffentlichen Schlüssel. Sicherheit liegt vollständig in Row Level Security (RLS). Jede Tabelle bekommt RLS, bevor Daten hineinkommen.
- Migrationen liegen als SQL in `supabase/migrations/NNNN_name.sql` und werden mit `apply_migration` eingespielt. Nach jeder Migration `get_advisors` (security und performance) prüfen und Funde beheben.
- Schalter: Konto-Funktionen sind nur sichtbar, wenn `NEXT_PUBLIC_KONTO=1` und `NEXT_PUBLIC_KONTO_AVV=1` (AV-Vertrag unterschrieben) gesetzt sind (`lib/konto.js` → `KONTO_AKTIV`). Ohne Schalter bleibt die Seite exakt wie vorher.
- Datenschutz: Datensparsamkeit, getrennte Einwilligungen, Export und Löschung für Nutzer, Bilder werden im Browser neu kodiert (entfernt EXIF, GPS und andere Metadaten). Über Jean nur die drei erlaubten Angaben aus `CLAUDE.md`.
- Texte nach `docs/BRAND-VOICE.md`, keine Gedankenstriche, keine unsichtbaren Zeichen, keine erfundenen Fakten. Eigene Preise für Mitgliedschaften sind Vorschläge in `lib/mitglied.js` und für Jean klar als änderbar markiert.
- Jeder Schritt endet mit: Build nach `CLAUDE.md`, Browser-Test, Layer-A-Prüfung, PR, Merge, Live-Check, Haken in dieser Datei.

## Phase A: Fundament

- [x] **1 Projekt und Client.** Lege das Supabase-Projekt an, füge `@supabase/supabase-js` hinzu, baue `lib/supabase.js` (ein Client, Session im localStorage, PKCE) und `lib/konto.js` mit `KONTO_AKTIV`. Hinterlege URL und öffentlichen Schlüssel im Pages-Workflow.
- [x] **2 Schema v1.** Tabellen `profiles` (öffentliche Karte: Handle, Anzeigename, Farben, Avatar- und Banner-Pfad, Rolle, Punkte), `profil_details` (Bio, Beruf, Pronomen, Links; bei privaten Profilen verborgen), `konten` (nur für den Nutzer: Einwilligungen, Segment, Plan, Sperre), `einwilligungs_log` (nur per Trigger), `saved_items`, `badges`; Trigger `handle_new_user`, RLS je Tabelle, Funktion `ist_admin()`.
- [x] **3 Login.** Seite `/anmelden` mit Magic Link (E-Mail-Code ohne Passwort), Rückkehr auf die Ausgangsseite, Konto-Knopf im Header mit Avatar, Abmelden. Weiterleitungs-URLs in Supabase für die GitHub-Pages-Domain setzen.
- [x] **4 Kontoseite.** `/konto` mit Übersicht, Einwilligungen (Newsletter, persönliche Angebote) zum Umschalten, Datenexport als JSON und Konto löschen über eine abgesicherte Datenbankfunktion.
- [x] **5 Sync.** Merkliste, Herzen, Abzeichen und Verlauf aus dem Browser beim Login ins Konto übernehmen (zusammenführen, nicht überschreiben) und danach in beide Richtungen aktuell halten.
- [x] **6 Registrierungs-Momente.** Sanfte Einladung „Sichere deine Merkliste“ nach 3 gemerkten Seiten, im Sammelalbum, nach dem Tool-Finder. Datenschutzerklärung um Konto, Supabase und Speicherorte ergänzen.

## Phase B: Profil

- [x] **7 Profil-Editor.** Anzeigename, eindeutiger Handle, Bio (300 Zeichen), Rolle, bis zu 3 Links, Lieblings-Akzentfarbe, Banner-Farbverlauf, Pronomen optional, Sichtbarkeit öffentlich oder privat.
- [x] **8 Eigene Bilder.** Storage-Buckets `avatare` und `banner`: Upload nur in den eigenen Ordner, nur Bildtypen, Größenlimit. Im Browser zuschneiden, verkleinern und als WebP neu kodieren (entfernt Metadaten). Vorschau vor dem Speichern.
- [x] **9 Öffentliches Profil.** `/u/?h=handle` mit Banner, Avatar, Bio, Links (rel="nofollow ugc"), Abzeichen-Vitrine, letzte Beiträge und Kommentare. Private Profile zeigen nur Handle, Anzeigename und Bild; Bio, Beruf, Pronomen und Links bleiben verborgen.

## Phase C: Community

- [x] **10 Kommentar-Schema.** Tabelle `comments` (Seitenpfad, Elternkommentar, Text, Status), Reaktionen, Ratenbegrenzung per Trigger (höchstens 5 Kommentare in 10 Minuten), Längenlimit, RLS: lesen alle, schreiben nur angemeldete, ändern nur eigene innerhalb von 15 Minuten.
- [x] **11 Kommentare überall.** Komponente unter allen Inhalten (Ratgeber, News, Tutorials, Tools, Prompts, Skills, Verzeichnisse, Vergleiche) mit Antworten in einer Ebene, einfachem Textformat ohne HTML, Reaktionen und „Melden“.
- [x] **12 Forum-Schema.** Kategorien, Themen, Beiträge, Abos, Lösungs-Markierung, angepinnte Themen, Zähler per Trigger.
- [x] **13 Forum.** `/forum` mit Kategorien, `/forum/kategorie/?k=`, `/forum/thema/?id=`, neues Thema, Antworten, Suche, Sortierung (neu, aktiv, ungelöst).
- [x] **14 Moderation.** Meldungen, Moderatoren-Rolle, Ausblenden und Wiederherstellen, Wortfilter, Sperren mit Frist, Moderationsprotokoll, Seite `/moderation`. Meldeweg nach DSA und Nutzungsregeln `/community-regeln`.
- [x] **15 Benachrichtigungen.** Antworten, Erwähnungen per @handle, Lösungen; Glocke im Header mit Zähler, gelesen markieren.
- [x] **16 Reputation.** Punkte für hilfreiche Beiträge und Lösungen, Ränge, Community-Abzeichen im Sammelalbum, Bestenliste.

## Phase D: Werkzeuge mit Konto

- [ ] **17 Launch-Tracker in der Cloud.** Einreichungs-Status je Verzeichnis, Notizen, Erinnerungsdatum, Export als CSV.
- [ ] **18 Mein KI-Stack.** Eigene Tools mit Tarif und Monatskosten, Summe, Spar-Hinweise aus vorhandenen Daten.
- [ ] **19 Prompt-Sammlung.** Prompts aus Bibliothek, Baukasten und Prompt-Check speichern, Ordner, Teilen als öffentlicher Link.
- [ ] **20 Alarme.** Preisalarm (Tools im Stack) und Fristen-Alarm (KI-Fristen-Kalender) als Edge Function mit täglichem Zeitplan und Mailversand.
- [ ] **21 Segmente und Lead-Score.** Drei Startfragen nach der Registrierung, Segment im Profil, Ansicht `leads` (nur Admin) mit Punktzahl aus Aktivität und Einwilligung.

## Phase E: Monetarisierung

- [ ] **22 Mitgliedschaften.** Pläne Gratis, Pro und Team in `lib/mitglied.js` (Preise als Vorschlag), Tabelle `entitlements`, Preisseite `/mitglied` mit ehrlichem Vergleich.
- [ ] **23 Bezahlung.** Stripe Checkout und Kundenportal über Edge Functions, Webhook setzt den Plan. Bereit, bis Jean die Stripe-Schlüssel hinterlegt.
- [ ] **24 Paywall.** Tabelle `premium_content` mit RLS nur für Pro, öffentlicher Teaser im statischen HTML, Volltext lädt im Browser, strukturierte Daten `isAccessibleForFree: false`.
- [ ] **25 Exklusive Inhalte.** Erste drei Pro-Inhalte: Launch-Playbook mit 90 Verzeichnissen, Prompt-Paket für Marketing, Vorlagen-Paket für KI-Richtlinien im Team.
- [ ] **26 Anbieter-Konten.** Tool-Anbieter beanspruchen ihren Eintrag, bearbeiten Beschreibung, sehen Aufrufe. Bezahlte Hervorhebung als Angebot.
- [ ] **27 Weitere Erlösquellen.** Gesponserte Forum-Kategorie, Marktplatz für Prompt- und Skill-Pakete von Mitgliedern (Provision), Job-Börse für KI-Rollen, Sammelbestellung Launch-Service, persönliche Deals nur aus aktiven Partnerlinks.

## Phase F: Wachstum und Betrieb

- [ ] **28 E-Mail-Automatik.** Brevo-Anbindung per Edge Function, Double-Opt-in, Willkommensserie je Segment, wöchentlicher Community-Digest.
- [ ] **29 Admin-Zentrale.** `/admin` mit Nutzern, Leads, Mitgliedern, Umsatz, Meldungen, Kennzahlen (Registrierungen, aktive Nutzer, Konversion).
- [ ] **30 Prüfung und Start.** Sicherheits-Audit (Advisors, RLS-Tests mit zwei Testkonten, Ratenlimits), Rechtstexte (AGB, Datenschutz, Widerruf), Last- und Barrierefreiheits-Test, dann Schalter `NEXT_PUBLIC_KONTO=1` dauerhaft an.

## Stand

- Schritte 1 bis 16 sind gebaut und getestet (Code hinter dem Schalter `NEXT_PUBLIC_KONTO`). Die Migrationen `0001_fundament`, `0002_bilder` und `0003_community` sind lokal mit `sh supabase/tests/run.sh` geprüft und warten aufs Einspielen ins Supabase-Projekt. Die Oberfläche ist mit simulierten Supabase-Antworten im Browser getestet.
- Moderation: Die erste Admin-Rolle setzt Jean einmalig im Supabase SQL Editor: `update public.profiles set rolle = 'admin' where handle = 'DEIN_HANDLE';`

## Was nur Jean erledigen kann

1. AV-Vertrag (DPA) mit Supabase im Dashboard abschließen: Organization Settings, Legal Documents.
2. Eigenen Mailversand (SMTP, z. B. Brevo) in Supabase eintragen, sonst schafft der Login nur wenige Mails pro Stunde.
3. Für Schritt 23: Stripe-Konto und Schlüssel als Edge-Function-Secrets.
4. Für den Start: AGB und Widerrufsbelehrung juristisch prüfen lassen.
5. Supabase, Authentication, URL Configuration: Site URL `https://jmp-collab.github.io/ai-directories` und Redirect URL `https://jmp-collab.github.io/ai-directories/**` eintragen.
6. Zum Einschalten: GitHub, Settings, Secrets and variables, Actions, Variables: `KONTO` = `1` und nach unterschriebenem AV-Vertrag `KONTO_AVV` = `1`. Erst mit beiden Variablen sind Konten sichtbar. Zum Ausschalten eine der beiden löschen.
