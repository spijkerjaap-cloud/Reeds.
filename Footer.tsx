import { Asterisk, Reveal } from "./ui";

const COLOFON = [
  { k: "Document", v: "App Blueprint v1.0" },
  { k: "Secties", v: "6 · van concept tot launch" },
  { k: "Leraren", v: "10 meesters, 40 praktijken" },
  { k: "MVP", v: "16 schermen · ± 9 min/dag" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-20 sm:px-6 lg:pt-28">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="h-px flex-1 bg-line" />
            <Asterisk className="h-4 w-4 text-gold" />
            <span className="h-px flex-1 bg-line" />
          </div>
          <h2 className="mt-10 text-center font-display text-[clamp(2.8rem,8vw,6.5rem)] font-black leading-[0.95] tracking-tight text-cream">
            Het is <em className="font-light italic text-gold">reeds</em> geschied.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-center text-sm leading-relaxed text-fog md:text-base">
            Nu nog bouwen. De volgende stap is de klik-door prototype van Het Kompas en het Vandaag-dashboard —
            exact zoals gespecificeerd in sectie 02 en 03 van dit document.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <dl className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4">
            {COLOFON.map((c) => (
              <div key={c.k} className="bg-night p-4 text-center transition-colors duration-300 hover:bg-ink">
                <dt className="font-mono text-[9px] uppercase tracking-[0.22em] text-fog">{c.k}</dt>
                <dd className="mt-1.5 text-[13px] font-semibold text-cream">{c.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 sm:flex-row">
          <p className="flex items-center gap-2 font-display text-base font-bold text-cream">
            <Asterisk className="h-3.5 w-3.5 text-gold" />
            REEDS
          </p>
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-1 font-mono text-[10px] uppercase tracking-[0.18em] text-fog">
            <a href="#concept" className="transition-colors hover:text-gold">Concept</a>
            <a href="#journey" className="transition-colors hover:text-gold">Journey</a>
            <a href="#features" className="transition-colors hover:text-gold">Features</a>
            <a href="#engine" className="transition-colors hover:text-gold">Engine</a>
            <a href="#data" className="transition-colors hover:text-gold">Data</a>
            <a href="#stack" className="transition-colors hover:text-gold">Stack</a>
          </nav>
          <p className="font-mono text-[10px] tracking-[0.14em] text-fog">Blueprint © 2026</p>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center font-mono text-[10px] leading-relaxed tracking-wide text-fog/60">
          Dit document is een productblauwdruk, geen belofte van uitkomsten. Persoonlijke ontwikkeling volgt uit
          eerlijke oefening — en bij aanhoudende klachten verdient iedereen een mens, geen app.
        </p>
      </div>
    </footer>
  );
}
