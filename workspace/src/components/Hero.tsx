import { TICKER_ITEMS } from "../data";
import PhoneDemo from "./PhoneDemo";
import { Asterisk, Compass, GoldLink, Reveal, Starfield } from "./ui";

const SPECS = [
  { k: "Naam", v: "REEDS" },
  { k: "Belofte", v: "Het is reeds geschied" },
  { k: "Pijlers", v: "Kompas · Kast · Integratie" },
  { k: "Meesters", v: "10 leraren, 40 praktijken" },
  { k: "MVP-schermen", v: "16 schermen (11 × P0)" },
  { k: "Dagelijkse dosis", v: "± 9 minuten" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-14">
      <Starfield count={90} />
      <div className="pointer-events-none absolute -right-40 top-24 hidden opacity-70 lg:block" aria-hidden="true">
        <Compass className="h-[560px] w-[560px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:pb-24 lg:pt-20">
        {/* document-omslag */}
        <div>
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-gold">
              <span className="border border-gold/40 px-2.5 py-1">Product blueprint</span>
              <span className="text-fog">v1.0 · vertrouwelijk</span>
              <Asterisk className="h-3 w-3" />
              <span className="text-fog">2026</span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-7 font-display text-[clamp(4.2rem,11vw,8.5rem)] font-black leading-[0.88] tracking-tight text-cream">
              REEDS<span className="text-gold">.</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-4 font-display text-2xl font-light italic text-gold sm:text-3xl">
              leef in het einde — word wie je al bent
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-fog md:text-lg">
              Een manifestatie-app die niet bij dromen stopt. REEDS vertaalt tien grootmeesters — van Neville Goddard
              tot Dr. Joe Dispenza — naar een gepersonaliseerde dagelijkse routine van negen minuten, gedoseerd op het
              juiste moment van de dag. <span className="text-cream">Geen zweverige contentdump: een coach die weet
              wanneer je wat nodig hebt.</span>
            </p>
          </Reveal>

          {/* spec sheet */}
          <Reveal delay={260}>
            <dl className="mt-9 grid max-w-xl grid-cols-2 gap-x-8 border-t border-line sm:grid-cols-3">
              {SPECS.map((s) => (
                <div key={s.k} className="group border-b border-line py-3 transition-colors duration-300 hover:border-gold/50">
                  <dt className="font-mono text-[9px] uppercase tracking-[0.22em] text-fog">{s.k}</dt>
                  <dd className="mt-1 text-[13px] font-semibold leading-snug text-cream">{s.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <GoldLink href="#concept">Lees het blueprint</GoldLink>
              <a
                href="#engine"
                className="group inline-flex items-center gap-3 px-2 py-3 font-mono text-[12px] uppercase tracking-[0.18em] text-fog transition-colors duration-300 hover:text-gold"
              >
                Of test de Routine Engine
                <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" aria-hidden="true">
                  <path d="M3 10h12m0 0l-4.5-4.5M15 10l-4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </Reveal>
        </div>

        {/* telefoon met dagcyclus */}
        <Reveal delay={200} className="relative">
          <div className="anim-drift">
            <PhoneDemo />
          </div>
          <div className="anim-drift pointer-events-none absolute -left-6 top-10 hidden border border-line bg-ink/90 px-3 py-2 font-mono text-[10px] tracking-wider text-fog xl:block" style={{ animationDelay: "1.2s" }}>
            <span className="text-teal">05:45</span> — Dispenza: coherentie
          </div>
          <div className="anim-drift pointer-events-none absolute -right-4 bottom-24 hidden border border-line bg-ink/90 px-3 py-2 font-mono text-[10px] tracking-wider text-fog xl:block" style={{ animationDelay: "2.4s" }}>
            <span className="text-gold">22:50</span> — Goddard: SATS-scène
          </div>
        </Reveal>
      </div>

      <Ticker />
    </section>
  );
}

function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="relative border-y border-line/70 bg-ink/60 py-3.5">
      <div className="overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap">
          {items.map((t, i) => (
            <span key={i} className="flex items-center gap-8 font-mono text-[11px] uppercase tracking-[0.24em] text-fog">
              <span className="transition-colors hover:text-gold">{t}</span>
              <Asterisk className="h-3 w-3 shrink-0 text-gold/70" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
