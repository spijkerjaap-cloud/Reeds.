/* ------------------------------------------------------------------ */
/*  REEDS · App Blueprint — alle content & engine-logica               */
/* ------------------------------------------------------------------ */

export const TEACHERS = [
  {
    nr: "01",
    naam: "Neville Goddard",
    kleur: "#e0a94e",
    tag: "LIVING IN THE END",
    citaat: "Aanvaard het gevoel van de vervulde wens — en de brug der incidenten bouwt zichzelf.",
    kern: "Verbeelding is God. Je verandert de wereld niet door erop in te werken, maar door te wonen in het einde: een korte scène, herhaald tot het geheugen niet meer weet of het herinnering of verbeelding is.",
    features: [
      { titel: "Einde-scène Builder", ui: "Scene-card + sensorische tags", bes: "De gebruiker schrijft één scène van 5–10 sec die impliceert dat het verlangen voltooid is (de handdruk, de ring, de felicitatie) en koppelt zintuig-tags: gevoel, geluid, geur. De scène wordt een herbruikbare kaart." },
      { titel: "SATS-speler", ui: "Verduisterde speler met theta-audio", bes: "State Akin To Sleep modus: scherm dimt naar gloed, ademhaling vertraagt via visuele pacer, de scène loopt in een loop vlak voor inslapen. Timer stopt automatisch bij bewegingsloosheid." },
      { titel: "Inner Conversations Tracker", ui: "Logboek met reframe-knop", bes: "Interne gesprekken vastleggen; de app markeert zinnen die het oude zelf bevestigen en stelt één regel voor die het nieuwe zelf zou zeggen — Neville's 'inner talking' als meetbare gewoonte." },
    ],
    moment: "NACHT · 22:00–23:30",
  },
  {
    nr: "02",
    naam: "Abraham-Hicks",
    kleur: "#e78fa3",
    tag: "VIBRATIE & CONTRAST",
    citaat: "Je hoeft niet te worden wie je wilt zijn — je moet ophouden te zijn wie je niet bent.",
    kern: "Alles is vibratie en emotie is het feedbacksysteem. De app meet waar de gebruiker op de Emotionele Schaal staat en geeft oefeningen die exact één à twee treden hoger liggen — nooit een onrealistische sprong naar vreugde.",
    features: [
      { titel: "Vibratie-meter", ui: "Schaal van 22 naar 5 posities", bes: "Tweemaal daags één veeg: waar sta je nu? Van apathie naar hoop naar vreugde. Trends zichtbaar per week, gekoppeld aan welke praktijken de naald omhoog duwen." },
      { titel: "Ask · Believe · Receive Journal", ui: "Driekoloms journal", bes: "Vraag formuleren (Ask), bewijs verzamelen dat het onderweg is (Believe), en ontvangst registreren: kleine synchroniciteiten loggen als bewijsmateriaal (Receive)." },
      { titel: "Focus Wheel", ui: "Interactief wiel met 12 spaken", bes: "Verlangen in het centrum; de gebruiker vult spaken met gedachten die écht beter voelen. Het wiel draait fysiek bij elke toevoeging — vibratie-opbouw als tastbaar spel." },
    ],
    moment: "AVOND · 20:00–21:30",
  },
  {
    nr: "03",
    naam: "Florence Scovel Shinn",
    kleur: "#c9e265",
    tag: "HET GESPROKEN WOORD",
    citaat: "Het woord is de staf van je macht — je leven is de echo van je eigen stem.",
    kern: "Wat je zegt, spel je. Shinn leert dat gesproken woorden opdrachten zijn aan het onderbewustzijn. De app maakt de stem van de gebruiker zelf het belangrijkste instrument — niet die van een ingehuurd voice-over talent.",
    features: [
      { titel: "Stem-affirmaties", ui: "Waveform-recorder + eigen bibliotheek", bes: "De gebruiker spreekt zélf affirmaties in en hoort zijn eigen stem terug in loops — psychologisch krachtiger dan andermans stem. Inclusief 'spel-check': zegt je lichaam 'ja' bij deze zin?" },
      { titel: "Spel het Woord", ui: "Woord-van-de-dag kaart", bes: "Eén woord per dag (welvaart, moed, gratie) dat geschreven én hardop gespeld wordt. Shinn's techniek van 'spelling the word' als dagelijkse 60-seconden oefening." },
      { titel: "Intuïtie-pings", ui: "Zachte push met 3 keuzes", bes: "Onvoorspelbare, zeldzame pings: 'Wat zegt je intuïtie nu?' met drie opties. Traint het onderscheid tussen angst-stem en intuïtie-stem; antwoorden worden gelogd en achteraf gevalideerd." },
    ],
    moment: "MIDDAG · 12:00–13:00",
  },
  {
    nr: "04",
    naam: "Dr. Joe Dispenza",
    kleur: "#63c7b8",
    tag: "COHERENTIE & KWANTUM",
    citaat: "Word niemand, niets, nergens, in geen tijd — en verander van daaruit alles.",
    kern: "Verandering gebeurt wanneer een verheven emotie vóór de ervaring wordt gevoeld. Hart-hersencoherentie is de fysiologische toegangspoort: 5,5 ademhalingen per minuut, verheven emotie, mentale repetitie van de toekomst.",
    features: [
      { titel: "Coherentie-pacer", ui: "Ademende cirkel op 5,5 bpm", bes: "Visuele + haptische ademhaling met hartfocus. Na 5 minuten kalibratie start de 'verheven emotie'-fase: dankbaarheid voelen vóórdat er een reden is." },
      { titel: "Mental Rehearsal-speler", ui: "Ochtendspeler met stappen", bes: "Begeleide repetitie van de dag of het doel: de gebruiker doorloopt de toekomstige gebeurtenis stap voor stap met emotie, precies zoals Dispenza's ochtendmeditaties." },
      { titel: "Kwantum-lessen", ui: "Swipe-kaarten van 90 sec", bes: "Bite-sized uitleg: Hebbiaanse plasticiteit, het veld, waarnemer-effect — vertaald naar taal zonder zweverigheid, één concept per kaart, één kaart per dag." },
    ],
    moment: "ONTWAKEN · 05:30–07:30",
  },
  {
    nr: "05",
    naam: "Rhonda Byrne",
    kleur: "#f0d08a",
    tag: "DANKBAARHEID & VISIE",
    citaat: "Dankbaarheid is de brug tussen hebben en nog meer ontvangen.",
    kern: "Dankbaarheid is de snelste vibratie-verhoger die bestaat en de motor achter The Secret. De app maakt het onmogelijk om het te vergeten: kort, concreet, dagelijks, en visueel via vision boards die wél geleefd worden.",
    features: [
      { titel: "Dankbaarheidsritueel", ui: "3-regel ochtend/avond invoer", bes: "Drie concrete zinnen, niet abstract ('de geur van koffie vanochtend' wint van 'mijn familie'). Streaks met genade-dagen; elke 21 dagen een terugblik op verschuivingen." },
      { titel: "Vision Board Studio", ui: "Collage-grid + dagelijkse flits", bes: "Bouw een board per levensdomein; de app flitst 's ochtends 5 seconden één beeld voorbij met de vraag 'voelt dit als herinnering of als fantasie?' — boards worden oefening, niet behang." },
    ],
    moment: "OCHTEND · 07:30–09:00",
  },
  {
    nr: "06",
    naam: "Napoleon Hill",
    kleur: "#d98e5f",
    tag: "BRANDEND VERLANGEN",
    citaat: "Wat het brein kan bedenken en geloven, kan het ook volbrengen.",
    kern: "Een 'definite chief aim', tweemaal daags hardop gelezen, plus een mastermind van gelijkgestemden. Hill brengt de discipline: verlangen zo heet dat het geen optie meer is maar een noodzaak.",
    features: [
      { titel: "Burning Desire Statement", ui: "Credo-kaart met leesbevestiging", bes: "Eén statement in Hills zes stappen (bedrag/doel, datum, tegenprestatie, plan, hardop 2×/dag). De app toont het 's ochtends en 's avonds en vraagt om het hardop te lezen — met optionele stemcheck." },
      { titel: "Autosuggestie-recorder", ui: "Script-editor + audio-loop", bes: "Het statement inspreken en 's nachts of tijdens het sporten laten loopen; Hill's autosuggestie-principe met moderne spaced repetition." },
      { titel: "Mastermind-cirkels", ui: "Groepen van 5 + wekelijkse prompt", bes: "Kleine besloten cirkels met één wekelijkse vraag, asynchrone voice-notes en een 'hot seat' per week. Accountability zonder prestatiedruk." },
    ],
    moment: "OCHTEND + ZONDAG",
  },
  {
    nr: "07",
    naam: "Louise Hay",
    kleur: "#e7a6c0",
    tag: "ZELFLIEFDE & SPIEGEL",
    citaat: "De relatie met jezelf is de relatie waaruit alle andere relaties groeien.",
    kern: "Manifestatie zonder zelfliefde is decoratie. Spiegelwerk — jezelf in de ogen kijken en het hardop zeggen — is de confronterendste en meest transformerende oefening in de hele gereedschapskist.",
    features: [
      { titel: "Spiegelwerk-sessies", ui: "Camera-frame met geleide video", bes: "Begeleide spiegel-sessies van 2 minuten: jezelf aankijken via de frontcamera terwijl zinnen verschijnen ('Ik hou van je. Echt.'). Begin met 10 seconden — het is moeilijker dan het klinkt." },
      { titel: "Zelfliefde-bibliotheek", ui: "Kaartjes per thema", bes: "Hay's affirmaties geordend per wond (schuld, lichaam, werk, relaties) — de app kiest op basis van de vibratie-meter welke wond vandaag aandacht vraagt." },
      { titel: "Vergevingsbrieven", ui: "Brief-wizard + verbrand-animatie", bes: "Schrijf de brief die je nooit verstuurt, in drie geleide stappen. Afsluiten met een 'loslaat-ritueel': de brief verdwijnt in vlammen op het scherm. Niets wordt opgeslagen." },
    ],
    moment: "OCHTEND · 2× PER WEEK",
  },
  {
    nr: "08",
    naam: "Eckhart Tolle",
    kleur: "#9bc4a0",
    tag: "PRESENTIE",
    citaat: "Het verleden heeft geen macht over dit moment — tenzij jij het die geeft.",
    kern: "Alle manifestatie valt stil in het Nu. Tolle's bijdrage is de anker-functie: voorkomen dat spirituele oefening escapisme wordt. Presentie-pauzes doorbreken het gepieker waarin het 'oude zelf' woont.",
    features: [
      { titel: "Presentie-timer", ui: "Rimpel-animatie, 60 sec", bes: "Driemaal daags een onvoorspelbare, zachte invitatie: 60 seconden voelen in plaats van denken. Geen score, geen streak — Tolle's oefeningen mogen geen prestatie worden." },
      { titel: "Pain-body Logger", ui: "Herkennings-check in 2 tikken", bes: "Bij emotionele pieken: 'Is dit het nu, of het pijnlichaam?' De gebruiker logt de trigger en de duur; patronen worden zichtbaar zonder veroordeling." },
      { titel: "Stilte-momenten", ui: "Volledig zwart scherm", bes: "Eén minuut niets: geen input, geen tekst, geen voortgangsbalk. Alleen een langzaam verdwijnende stip. De moeilijkste feature van de hele app — bewust." },
    ],
    moment: "MIDDAG · ONVOORSPELBAAR",
  },
  {
    nr: "09",
    naam: "Wayne Dyer",
    kleur: "#a99fe8",
    tag: "HET IK BEN-VELD",
    citaat: "Als je verandert hoe je naar dingen kijkt, veranderen de dingen waar je naar kijkt.",
    kern: "Intentie is geen wens maar een veld van mogelijkheden waar je je op afstemt. Dyer leert de balans: intentie zetten met overgave, en controle loslaten over hóe het zich ontvouwt.",
    features: [
      { titel: "I AM-veld", ui: "Identiteits-verklaringen scherm", bes: "De kern van het Kompas: 'IK BEN'-zinnen die de nieuwe identiteit declareren. Eén zin per week wordt 'actief' en verschijnt op onverwachte momenten — vergrendelscherm, na elke sessie." },
      { titel: "Loslaat-check", ui: "Avondvraag met schuif", bes: "'Wat probeerde ik vandaag te forceren?' Eén regel, één schuif van 'gegrepen' naar 'losgelaten'. Dyer's overgave als avondelijkse micro-oefening." },
      { titel: "Inspiratie-dagboek", ui: "Vangnet voor invallen", bes: "Ideeën, synchroniciteiten en ingevingen direct vastleggen — met wekelijkse review: welke kwamen van angst, welke van inspiratie?" },
    ],
    moment: "MAANDAG + AVOND",
  },
  {
    nr: "10",
    naam: "Joseph Murphy",
    kleur: "#8fa7e0",
    tag: "ONDERBEWUST PROGRAMMEREN",
    citaat: "Het onderbewustzijn redeneert niet — het accepteert wat het gevoel bevestigt.",
    kern: "De uren rond de slaap zijn de programmeervensters van het onderbewustzijn. Murphy's werk wordt de sluimerlaag van de app: audio die het oude script overschrijft terwijl het kritische brein uitschakelt.",
    features: [
      { titel: "Slaap-programmering", ui: "Schemerspeler met fade-out", bes: "Affirmaties in de eigen stem (zie Shinn) op een bed van delta-frequenties; volume zakt in 22 minuten naar nul. Wekker-integratie: eindigt vóór de gebruiker slaapt of loopt door in stilte." },
      { titel: "Mentale Film-techniek", ui: "Storyboard-speler", bes: "Murphy's techniek: de gewenste uitkomst als korte 'film' van 3 beelden, herhaald als een trailer. De gebruiker bouwt zijn eigen trailer van het nieuwe leven." },
    ],
    moment: "NACHT · NA SATS",
  },
] as const;

export const TICKER_ITEMS = TEACHERS.map((t) => `${t.naam} — ${t.tag.toLowerCase()}`);

/* ---------------- Pijlers & principes ---------------- */

export const PILLARS = [
  {
    cijfer: "I",
    naam: "Het Kompas",
    fase: "ONTWERPEN",
    tekst: "Geen doelenlijst, maar een identiteit. De gebruiker schrijft zijn droomleven in de tegenwoordige tijd — alsof het een herinnering is aan iets dat nog moet gebeuren. Het einde wordt het vertrekpunt.",
    tools: ["Droomleven-canvas", "I AM-verklaringen", "Einde-scènes"],
  },
  {
    cijfer: "II",
    naam: "De Gereedschapskist",
    fase: "BEOEFENEN",
    tekst: "Tien meesters, maar nooit tien tegelijk. Elke leraar levert twee à drie micro-praktijken die de app doseert op het juiste moment van de dag — van Dispenza's coherentie bij het ontwaken tot Goddard's SATS vlak voor de slaap.",
    tools: ["40 praktijken", "Micro-doses 1–3 min", "Audio-bibliotheek"],
  },
  {
    cijfer: "III",
    naam: "De Integratie",
    fase: "BELICHAMEN",
    tekst: "De Routine Engine componeert elke dag een persoonlijke routine van maximaal 9 minuten, verdeeld over de dag. Habit-tracking, missies en accountability maken van inzichten spierweefsel.",
    tools: ["Routine Engine", "Missies", "Mastermind-cirkels"],
  },
];

export const PRINCIPLES = [
  {
    nr: "01",
    titel: "Identiteit vóór doelen",
    tekst: "Je wordt niet wat je wilt — je wordt wie je bent. Het Kompas ontwerpt daarom een ik, geen takenlijst. Elke feature vraagt: 'Wie zou dit doen?' in plaats van 'Wat moet je doen?'",
  },
  {
    nr: "02",
    titel: "Gevoel is het geheim",
    tekst: "Neville's kernles is de ontwerp-eis: geen enkele sessie eindigt in een vinkje. Elke oefening sluit af met een voelbare staat — en die staat wordt gemeten, niet het gedrag.",
  },
  {
    nr: "03",
    titel: "De brug is automatisch",
    tekst: "Inspiratie volgt op staat, niet andersom. De app pusht geen hustle en geen actielijsten van 17 stappen; hij programmeert de toestand waaruit actie vanzelf ontstaat.",
  },
  {
    nr: "04",
    titel: "Micro-doses, dagelijks",
    tekst: "9 minuten verdeeld over de dag wint van 90 minuten op zondag. Neurowetenschappelijk: herhaling plus emotionele lading is wat netwerken herschrijft — niet intensiteit.",
  },
  {
    nr: "05",
    titel: "Geen spirituele bypass",
    tekst: "De vibratie-meter en het pijnlichaam-logboek maken eerlijk. Een lage dag is data, geen falen — en de app zegt dat letterlijk tegen de gebruiker.",
  },
];

/* ---------------- User Journey ---------------- */

export const JOURNEY = [
  {
    dag: "DAG 0",
    titel: "De Poort — onboarding zonder doelen",
    scherm: "onboarding.tsx",
    tekst: "Zeven vragen, nul doelen. 'Wie wil je zijn over 12 maanden?' in plaats van 'Wat wil je bereiken?'. De gebruiker spreekt één zin hardop in (Shinn) — de app kalibreert op de klank van zijn eigen stem. Duur: 4 minuten.",
    chips: ["7 vragen", "Stem-kalibratie", "Geen e-mail muur"],
  },
  {
    dag: "DAG 0–1",
    titel: "Het Kompas — droomleven ontwerpen",
    scherm: "kompas/canvas.tsx",
    tekst: "Vier levensdomeinen (Liefde, Werk & Geld, Lichaam & Energie, Rust & Betekenis). Per domein schrijft de gebruiker één alinea in de tegenwoordige tijd: 'Het is dinsdagochtend en ik word wakker naast…' De app bewaakt de tijdsvorm — verleden of toekomende tijd wordt zacht gemarkeerd.",
    chips: ["4 domeinen", "Tegenwoordige-tijd guard", "Leef-in-het-einde script"],
  },
  {
    dag: "DAG 1",
    titel: "De I AM-verklaring",
    scherm: "kompas/iam.tsx",
    tekst: "Uit het canvas destilleert de gebruiker één identiteitszin per domein: 'IK BEN iemand voor wie geld makkelijk stroomt.' Eén zin wordt de actieve verklaring van week 1 (Dyer's I AM-veld) en duikt op onverwachte momenten op.",
    chips: ["4 zinnen", "1 actief per week", "I AM-veld"],
  },
  {
    dag: "DAG 1",
    titel: "Kalibratie — meten waar je staat",
    scherm: "kalibratie/index.tsx",
    tekst: "Twee nulmetingen: de vibratie-meter (Abraham-Hicks) en een 5-minuten coherentie-ademhaling (Dispenza). Geen oordeel, alleen een beginpunt. De gebruiker ziet letterlijk waar de reis start.",
    chips: ["Vibratie-baseline", "Coherentie-baseline", "Nulmeting"],
  },
  {
    dag: "DAG 1",
    titel: "De Gereedschapskist — gedoseerd openen",
    scherm: "kast/index.tsx",
    tekst: "De kast toont tien laden, maar opent er drie: de praktijken die bij het droomscript en de nulmeting passen. De rest staat op slot met een eerlijke reden: 'Deze gaat open als je 7 dagen je SATS-scène hebt gespeeld.' Progressive disclosure tegen overweldiging.",
    chips: ["3 van 40 praktijken", "Sloten met reden", "Progressive disclosure"],
  },
  {
    dag: "DAG 2",
    titel: "De eerste routine — 9 minuten, klaar",
    scherm: "vandaag/index.tsx",
    tekst: "De Routine Engine componeert dag één: ontwaken met Dispenza, ontbijt met Hill + Byrne, middag met Tolle, avond met Abraham-Hicks, inslapen met Goddard + Murphy. Alles samen 9 minuten. De gebruiker ziet zijn dag als partituur, niet als takenlijst.",
    chips: ["5 momenten", "9 min totaal", "Engine-dag 1"],
  },
  {
    dag: "DAG 3–66",
    titel: "De Loop — integratie in het lijf",
    scherm: "vandaag/loop.tsx",
    tekst: "Habit-tracking met genade-dagen, wekelijkse missies ('spreek je desire hardop tegen een vreemdeling'), maandelijkse Kompas-review en mastermind-cirkels vanaf week 3. Op dag 66: het eerste 'belichaamd'-moment — de identiteitszin voelt als waarheid en het Kompas opent een diepere laag.",
    chips: ["Genade-dagen", "Wekelijkse missies", "Dag 66: nieuwe laag"],
  },
];

/* ---------------- MVP schermen ---------------- */

export const SCREENS = [
  { naam: "De Poort (onboarding)", pijler: "Basis", prio: "P0", bes: "7 vragen + stem-kalibratie, geen account-muur voor dag 3." },
  { naam: "Kompas-canvas", pijler: "Kompas", prio: "P0", bes: "4 domeinen in tegenwoordige tijd met tijdsvorm-guard." },
  { naam: "I AM-verklaringen", pijler: "Kompas", prio: "P0", bes: "Identiteitszinnen, één actief per week in het I AM-veld." },
  { naam: "Einde-scène Builder", pijler: "Kompas", prio: "P0", bes: "5–10 sec scènes met sensorische tags (Goddard)." },
  { naam: "Kalibratie", pijler: "Kompas", prio: "P0", bes: "Vibratie- + coherentie-nulmeting." },
  { naam: "Vandaag-dashboard", pijler: "Integratie", prio: "P0", bes: "De dag als partituur: momenten, voortgang, vibratie." },
  { naam: "Routine-feed", pijler: "Integratie", prio: "P0", bes: "Door de engine gegenereerde dagelijkse volgorde." },
  { naam: "Praktijk-speler (audio)", pijler: "Gereedschap", prio: "P0", bes: "Universele speler: SATS, coherentie, slaap-audio, mental rehearsal." },
  { naam: "Vibratie-meter", pijler: "Gereedschap", prio: "P0", bes: "2× daags, 5 posities, wekelijkse trend." },
  { naam: "Dankbaarheidsritueel", pijler: "Gereedschap", prio: "P0", bes: "3 zinnen ochtend + avond met genade-streaks (Byrne)." },
  { naam: "Avond-review", pijler: "Integratie", prio: "P0", bes: "Loslaat-check (Dyer) + vibratie + inner conversation log." },
  { naam: "Focus Wheel", pijler: "Gereedschap", prio: "P1", bes: "Interactief wiel met 12 spaken (Abraham-Hicks)." },
  { naam: "Spiegelwerk-sessie", pijler: "Gereedschap", prio: "P1", bes: "Camera-begeleide sessie van 2 minuten (Hay)." },
  { naam: "Missies & streaks", pijler: "Integratie", prio: "P1", bes: "Wekelijkse missies, habit-kaart, genade-dagen." },
  { naam: "Mastermind-cirkels", pijler: "Integratie", prio: "P1", bes: "Groepen van 5, wekelijkse prompt, voice-notes (Hill)." },
  { naam: "Vision Board Studio", pijler: "Gereedschap", prio: "P1", bes: "Collage per domein + ochtendflits van 5 sec (Byrne)." },
];

/* ---------------- Routine Engine ---------------- */

export type Chrono = "vogel" | "avond";
export type Focus = "liefde" | "carriere" | "gezondheid" | "rust";
export type Vibe = "laag" | "midden" | "hoog";

const TIJDEN: Record<Chrono, Record<string, string>> = {
  vogel: { ontwaken: "05:45", ochtend: "06:40", middag: "12:15", avond: "20:30", nacht: "21:50" },
  avond: { ontwaken: "07:45", ochtend: "08:40", middag: "13:30", avond: "22:00", nacht: "23:40" },
};

export const ENGINE_SATSCENES: Record<Focus, string> = {
  liefde: "Je beste vriendin pakt je hand vast: 'Ik gun je dit zó.' Je voelt de warmte van haar palm.",
  carriere: "De handdruk is stevig. 'Welkom aan boord', klinkt het — je nieuwe naamplaatje is nog koel.",
  gezondheid: "Je strikt je hardloopschoenen. Pijnvrij. Je adem is rustig nog voor de eerste meter.",
  rust: "Je schouders zijn zwaar, je adem is stil. Er is op dit moment letterlijk niets op te lossen.",
};

export const ENGINE_DESIRES: Record<Focus, string> = {
  liefde: "'Ik word gezien, gekozen en vastgehouden.'",
  carriere: "'Mijn werk wordt gevonden én beloond.'",
  gezondheid: "'Mijn lichaam werkt vóór mij, elke dag.'",
  rust: "'Ik ben een plek waar stilte woont.'",
};

export interface EngineBlock {
  moment: string;
  tijd: string;
  leraren: { naam: string; kleur: string }[];
  praktijk: string;
  duur: string;
  reden: string;
}

export function buildSchedule(chrono: Chrono, focus: Focus, vibe: Vibe): EngineBlock[] {
  const t = TIJDEN[chrono];
  return [
    {
      moment: "ONTWAKEN",
      tijd: t.ontwaken,
      leraren: [{ naam: "Dr. Joe Dispenza", kleur: "#63c7b8" }],
      praktijk:
        vibe === "laag"
          ? "Coherentie-ademhaling — alleen reguleren, geen content"
          : "Mental Rehearsal van je dag + verheven emotie",
      duur: vibe === "laag" ? "6 min" : "12 min",
      reden:
        vibe === "laag"
          ? "Nieuwste eerst: het zenuwstelsel reguleren vóór het brein nieuwe beelden krijgt. Coherentie opent het venster."
          : "Het brein is in theta-delta overgang: het programmeringsvenster is wijd open. Repeteer de dag vóórdat hij gebeurt.",
    },
    {
      moment: "OCHTEND",
      tijd: t.ochtend,
      leraren: [
        ...(focus === "rust" ? [] : [{ naam: "Napoleon Hill", kleur: "#d98e5f" }]),
        { naam: focus === "rust" ? "Louise Hay" : "Rhonda Byrne", kleur: focus === "rust" ? "#e7a6c0" : "#f0d08a" },
      ],
      praktijk:
        focus === "rust"
          ? "Spiegelwerk (2 min) + 3 dankbaarheidszinnen"
          : `Burning desire hardop: ${ENGINE_DESIRES[focus]} + 3 dankbaarheidszinnen`,
      duur: focus === "rust" ? "5 min" : "4 min",
      reden:
        focus === "rust"
          ? "Bij focus op rust begint de dag met de relatie met jezelf — Hay vóór prestatie."
          : "Het desire-statement wordt 's ochtends het hardst gehoord door het onderbewustzijn; dankbaarheid tilt direct de baseline.",
    },
    {
      moment: "MIDDAG",
      tijd: t.middag,
      leraren: [
        { naam: "Eckhart Tolle", kleur: "#9bc4a0" },
        { naam: "F. Scovel Shinn", kleur: "#c9e265" },
      ],
      praktijk:
        focus === "carriere"
          ? "3× presentiepauze van 60 sec + het woord van de dag + 20 sec desire herlezen"
          : "3× presentiepauze van 60 sec + spel het woord van de dag hardop",
      duur: "3 min",
      reden:
        "Het oude zelf woont in de middagpieker. Tolle doorbreekt het patroon; Shinn zet één woord als opdracht in het veld.",
    },
    {
      moment: "AVOND",
      tijd: t.avond,
      leraren: [
        { naam: "Abraham-Hicks", kleur: "#e78fa3" },
        { naam: "Wayne Dyer", kleur: "#a99fe8" },
      ],
      praktijk:
        vibe === "laag"
          ? "Vibratie-check + brug-gedachten (één trede omhoog) + loslaat-check"
          : vibe === "midden"
            ? "Vibratie-check + Ask-Believe-Receive journal (1 bewijs) + loslaat-check"
            : "Focus Wheel (12 spaken) + loslaat-check",
      duur: vibe === "laag" ? "4 min" : vibe === "midden" ? "6 min" : "10 min",
      reden:
        vibe === "laag"
          ? "Brug-regel: nooit van apathie naar vreugde springen. Eén gedachte die 2% beter voelt is genoeg — vibratie is een trap, geen lift."
          : vibe === "midden"
            ? "Bewijs verzamelen verankert het geloof (Believe-fase) vóór de slaap — het onderbewustzijn kauwt er de hele nacht op."
            : "Hoge vibratie is Focus Wheel-tijd: 12 spaken van opwaartse gedachten rond je verlangen.",
    },
    {
      moment: "NACHT",
      tijd: t.nacht,
      leraren: [
        { naam: "Neville Goddard", kleur: "#e0a94e" },
        { naam: "Joseph Murphy", kleur: "#8fa7e0" },
      ],
      praktijk: `SATS-scène in loop: ${ENGINE_SATSCENES[focus]} → daarna slaap-audio met je eigen stem (fade-out 22 min)`,
      duur: "8 min",
      reden:
        "Het heiligste venster van de dag. In de schemer tussen wakker en slaap accepteert het onderbewustzijn de scène als herinnering — Murphy's programmering doet de rest in de slaap.",
    },
  ];
}

export const DIAL = [
  { s: 5.5, e: 7, naam: "Dr. Joe Dispenza", kleur: "#63c7b8", label: "Coherentie & mental rehearsal" },
  { s: 7, e: 9, naam: "Hill · Byrne · Hay", kleur: "#e0a94e", label: "Desire, dankbaarheid, spiegelwerk" },
  { s: 12, e: 13.25, naam: "Tolle · Shinn", kleur: "#9bc4a0", label: "Presentiepauzes & het woord" },
  { s: 18, e: 19, naam: "Wayne Dyer", kleur: "#a99fe8", label: "Controle loslaten" },
  { s: 20, e: 21.5, naam: "Abraham-Hicks", kleur: "#e78fa3", label: "Vibratie-check & focus wheel" },
  { s: 21.5, e: 23.25, naam: "Neville Goddard", kleur: "#f0d08a", label: "SATS-scène" },
  { s: 23.25, e: 24, naam: "Joseph Murphy", kleur: "#8fa7e0", label: "Slaap-programmering fade-out" },
];

/* ---------------- Data & content ---------------- */

export const ENTITIES = [
  {
    naam: "leraar",
    velden: ["id uuid pk", "naam text", "principe text", "kleur text", "volgorde int"],
  },
  {
    naam: "praktijk",
    velden: ["id uuid pk", "leraar_id → leraar", "titel text", "type enum(audio|tekst|interactief|camera)", "duur_sec int", "moment enum(ontwaken|ochtend|middag|avond|nacht)", "energie enum(activerend|kalmerend|anker)", "min_streak int"],
  },
  {
    naam: "micro_content",
    velden: ["id uuid pk", "praktijk_id → praktijk", "volgorde int", "type enum(audio|kaart|prompt)", "duur_sec int (60–180)", "audio_url text?", "tekst text?"],
  },
  {
    naam: "kompas",
    velden: ["user_id → gebruiker pk", "domein enum(liefde|werk|lichaam|rust)", "droom_script text", "iam_zin text", "eind_scene jsonb", "actief boolean"],
  },
  {
    naam: "gebruiker",
    velden: ["id uuid pk", "chrono enum(vogel|avond)", "focus_domein enum", "vibratie_baseline int", "actieve_praktijken uuid[] (max 3)", "streak jsonb", "premium boolean"],
  },
  {
    naam: "routine_dag",
    velden: ["id uuid pk", "user_id → gebruiker", "datum date", "blokken jsonb (engine-output)", "status enum(gegenereerd|deels|voltooid)"],
  },
  {
    naam: "sessie",
    velden: ["id uuid pk", "user_id → gebruiker", "praktijk_id → praktijk", "datum timestamp", "voltooid boolean", "vibe_voor int", "vibe_na int"],
  },
];

export const FUNNEL = [
  { label: "10 leraren", sub: "de canon", breedte: 100 },
  { label: "40 praktijken", sub: "vertaald naar features", breedte: 62 },
  { label: "220 micro-content", sub: "blokken van 1–3 minuten", breedte: 40 },
  { label: "max. 6 per dag", sub: "de engine doseert", breedte: 18 },
];

/* ---------------- Tech & business ---------------- */

export const STACK = [
  { laag: "Mobiele app", keuze: "React Native + Expo", waarom: "Eén codebase voor iOS én Android, native audio-API's, en via Expo Web dezelfde engine als web-companion voor vision boards." },
  { laag: "State & offline", keuze: "MMKV + offline-first", waarom: "SATS en slaap-audio moeten werken in vliegtuigmodus. De routine van vandaag is altijd lokaal; sync als er netwerk is." },
  { laag: "Backend & data", keuze: "Supabase (Postgres)", waarom: "Auth, Row Level Security per gebruiker, realtime voor mastermind-cirkels, en edge functions voor de routine-engine als service." },
  { laag: "Audio", keuze: "Echte stemmen + expo-av", waarom: "Geen synthetische zweverigheid: professionele sprekers voor geleide sessies, eigen opnames van de gebruiker via Waveform-kit." },
  { laag: "Push & nudges", keuze: "Eigen nudge-server, max 2/dag", waarom: "Zachte, onvoorspelbare invitaties (Tolle) in plaats van guilt-trips. Geen dark patterns, uitzetten is één tik." },
  { laag: "Analytics", keuze: "PostHog self-hosted", waarom: "Privacy hoort bij de filosofie: geen ad-trackers, geen dataverkoop, metrics over voltooiing en vibe-trends — niet over schermtijd." },
  { laag: "Design system", keuze: "NativeWind + Tamagui", waarom: "Tailwind-tokens in de app identiek aan dit blueprint: nacht-blauw, goud, fraunces-achtige display in de app zelf." },
];

export const TIERS = [
  {
    naam: "Zaadje",
    prijs: "Gratis",
    tag: "VOOR ALTIJD",
    featured: false,
    items: [
      "Het Kompas volledig (canvas, I AM, einde-scènes)",
      "Vibratie-meter + dankbaarheidsritueel",
      "Dagelijkse routine met 3 praktijken",
      "1 geleide audio per leraar",
    ],
  },
  {
    naam: "REEDS+",
    prijs: "€ 9,99 / maand",
    tag: "OF € 79 / JAAR",
    featured: true,
    items: [
      "Volledige Routine Engine (5 momenten, adaptief)",
      "Alle 220 micro-content + volledige audio-bibliotheek",
      "Slaap-programmering & SATS-speler onbeperkt",
      "Spiegelwerk, Focus Wheel, Vision Board Studio",
      "Statistieken: vibe-trends, practice-insights",
      "Offline-modus voor alle audio",
    ],
  },
  {
    naam: "Cirkel",
    prijs: "€ 19,99 / maand",
    tag: "BEPERKT AANTAL",
    featured: false,
    items: [
      "Alles in REEDS+",
      "Mastermind-cirkel van 5 met wekelijkse prompt",
      "Maandelijkse live groepscoherentie-sessie",
      "Kwartaalreview van je Kompas met een coach",
    ],
  },
];

export const ETHICS = [
  "Geen oneindige feed — elke sessie heeft een einde, de app zegt 'klaar voor vandaag'.",
  "Streaks met genade-dagen; de app straft nooit en guilts nooit.",
  "Eén tik: alle data exporteren of vernietigen, zonder vragen.",
  "Geen gezondheidsclaims; bij structureel lage vibratie wijst de app naar professionele hulp.",
  "5% van de omzet naar mentale-gezondheidsinitiatieven — zichtbaar in de app.",
];

export const ROADMAP = [
  { fase: "V0.1", week: "week 4", bes: "Klik-door prototype: Kompas + Vandaag in Figma-hi-fi, getest met 12 gebruikers." },
  { fase: "V0.5", week: "week 12", bes: "TestFlight: engine live, 3 leraren volledig, audio in eigen stem." },
  { fase: "V1.0", week: "week 20", bes: "Publieke launch: 10 leraren, premium-laag, App Store + Play Store." },
  { fase: "V1.5", week: "week 28", bes: "Mastermind-cirkels, live groepscoherentie, web-companion voor vision boards." },
];

/* ---------------- Phone demo ---------------- */

export const PHONE_PARTS = [
  {
    id: "ochtend",
    tijd: "06:12",
    label: "Ochtend",
    groet: "Goedemorgen, Maya",
    lucht: "linear-gradient(180deg, #3b2e52 0%, #a05a48 55%, #e0a94e 100%)",
    praktijk: {
      leraar: "Dr. Joe Dispenza",
      kleur: "#63c7b8",
      titel: "Heart-Brain Coherentie",
      beschrijving: "Adem mee op 5,5 slag per minuut. Voel dankbaarheid vóór de reden.",
      duur: "8 min",
    },
    hierna: "Napoleon Hill · Burning desire hardop (2 min)",
    vibe: 58,
  },
  {
    id: "middag",
    tijd: "12:30",
    label: "Middag",
    groet: "Eén minuut voor jou",
    lucht: "linear-gradient(180deg, #2a4a6b 0%, #63c7b8 100%)",
    praktijk: {
      leraar: "Eckhart Tolle",
      kleur: "#9bc4a0",
      titel: "Presentiepauze",
      beschrijving: "60 seconden voelen in plaats van denken. De rimpel wijst de weg.",
      duur: "1 min",
    },
    hierna: "F. Scovel Shinn · Spel het woord 'gratie' (1 min)",
    vibe: 64,
  },
  {
    id: "avond",
    tijd: "20:45",
    label: "Avond",
    groet: "Goedenavond, Maya",
    lucht: "linear-gradient(180deg, #4a2f52 0%, #c96f6f 60%, #e0a94e 100%)",
    praktijk: {
      leraar: "Abraham-Hicks",
      kleur: "#e78fa3",
      titel: "Vibratie-check + Focus Wheel",
      beschrijving: "Waar sta je? Vul 3 spaken met gedachten die beter voelen.",
      duur: "6 min",
    },
    hierna: "Wayne Dyer · Loslaat-check (1 min)",
    vibe: 71,
  },
  {
    id: "nacht",
    tijd: "22:50",
    label: "Nacht",
    groet: "Het is reeds geschied",
    lucht: "linear-gradient(180deg, #0b1024 0%, #1a2348 70%, #2a3560 100%)",
    praktijk: {
      leraar: "Neville Goddard",
      kleur: "#e0a94e",
      titel: "SATS · De handdruk-scène",
      beschrijving: "5 seconden, in loop. Voel de stevigheid. Val ermee in slaap.",
      duur: "8 min",
    },
    hierna: "Joseph Murphy · Slaap-audio in jouw stem (fade-out)",
    vibe: 78,
  },
];
