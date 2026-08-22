import { useState } from "react";
import { buildSchedule, DIAL, type Chrono, type Focus, type Vibe } from "../data";
import { Chip, Panel, Reveal, SectionHeader } from "./ui";

function Seg<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { v: T; l: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div>
      <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.24em] text-fog">{label}</p>
      <div className="flex flex-wrap gap-1 border border-line bg-night/60 p-1">
        {options.map((o) => (
          <button
            key={o.v}
            type="button"
            onClick={() => onChange(o.v)}
            className={`flex-1 whitespace-nowrap px-2.5 py-2 font-mono text-[10px] uppercase tracking-[0.12em] transition-all duration-250 ${
              value === o.v ? "bg-gold text-night" : "text-fog hover:bg-line/50 hover:text-cream"
            }`}
            aria-pressed={value === o.v}
          >
            {o.l}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Engine() {
  const [chrono, setChrono] = useState<Chrono>("vogel");
  const [focus, setFocus] = useState<Focus>("carriere");
  const [vibe, setVibe] = useState<Vibe>("midden");
  const [hoverSeg, setHoverSeg] = useState(-1);

  const schedule = buildSchedule(chrono, focus, vibe);
  const totaal = schedule.reduce((acc, b) => acc + parseInt(b.duur), 0);

  return (
    <section id="engine" className="section-anchor relative border-y border-line/60 bg-ink/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          nr="04"
          kicker="Het Routine Engine Algoritme"
          title={
            <>
              Geen agenda — <em className="font-light text-gold">een componist</em>
            </>
          }
          lede="De engine beslist elke nacht welke praktijken van welke meesters op welk moment van de dag komen. Niet op basis van wat populair is, maar op basis van chronobiologie, emotionele staat en het droomscript van de gebruiker."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {/* algoritme */}
          <Reveal>
            <Panel className="h-full p-6 sm:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-gold">1 · De scorefunctie</p>
              <p className="mt-4 text-sm leading-relaxed text-fog">
                Elke praktijk krijgt elke nacht een score. De vijf beste vullen de vijf dagmomenten — nooit meer dan
                vier leraren per dag, zodat het voelt als begeleiding in plaats van een rooster.
              </p>
              <div className="mt-5 overflow-x-auto border border-line bg-night p-5 font-mono text-[12.5px] leading-loose text-cream/90">
                <p><span className="text-fog">score</span>(praktijk) =</p>
                <p className="pl-5"><span className="text-gold">0.40</span> × moment_van_de_dag <span className="text-fog">// vaste chrono-koppeling</span></p>
                <p className="pl-5">+ <span className="text-rose">0.25</span> × emotionele_brug <span className="text-fog">// afstand tot huidige vibe</span></p>
                <p className="pl-5">+ <span className="text-teal">0.20</span> × doel_resonantie <span className="text-fog">// match met kompas-script</span></p>
                <p className="pl-5">+ <span className="text-lav">0.10</span> × afwisseling <span className="text-fog">// leraren-rotatie</span></p>
                <p className="pl-5">+ <span className="text-blue">0.05</span> × streak_behoud <span className="text-fog">// gewoonte-bescherming</span></p>
              </div>
              <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.26em] text-gold">2 · De vier stuurregels</p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-fog">
                {[
                  ["Brug-regel (Abraham)", "Sta je laag op de schaal? Dan geen vreugde-affirmaties — de engine kiest praktijken precies één trede hoger. Vibratie is een trap, geen lift."],
                  ["Chrono-verschuiving", "Avondmensen krijgen het hele schema ±90 minuten opgeschoven; het SATS-venster blijft altijd vlak vóór de natuurlijke inslaaptijd."],
                  ["Leraren-rotatie", "Maximaal 4 meesters per dag, 1 focus-leraar per week. Zo blijft elke stem vertrouwd zonder te slijten."],
                  ["Noodmodus", "Drie dagen gemist of een zware vibe-dag? De dag krimpt naar 3 minuten: coherentie-ademhaling + SATS-scène. Bewijs telt, perfectie niet."],
                ].map(([t, b], i) => (
                  <li key={t} className="flex gap-3 border border-line/70 bg-night/50 p-3.5 transition-colors duration-200 hover:border-gold/40">
                    <span className="font-mono text-xs text-gold">{String(i + 1).padStart(2, "0")}</span>
                    <span>
                      <span className="font-semibold text-cream">{t}.</span> {b}
                    </span>
                  </li>
                ))}
              </ul>
            </Panel>
          </Reveal>

          {/* 24-uurs wijzerplaat */}
          <Reveal delay={120}>
            <Panel className="h-full p-6 sm:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-gold">3 · De standaard-partituur van een dag</p>
              <div className="mt-5 flex flex-col items-center gap-7 lg:flex-row">
                <div className="relative shrink-0">
                  <svg viewBox="0 0 220 220" className="h-56 w-56 sm:h-64 sm:w-64">
                    <circle cx="110" cy="110" r="96" fill="none" stroke="#232e57" strokeWidth="1" />
                    {Array.from({ length: 24 }).map((_, i) => {
                      const a = ((i - 6) / 24) * Math.PI * 2;
                      return (
                        <line
                          key={i}
                          x1={110 + Math.cos(a) * 88}
                          y1={110 + Math.sin(a) * 88}
                          x2={110 + Math.cos(a) * 96}
                          y2={110 + Math.sin(a) * 96}
                          stroke="#98a2c8"
                          strokeOpacity={i % 6 === 0 ? 0.7 : 0.25}
                          strokeWidth="1"
                        />
                      );
                    })}
                    {DIAL.map((d, i) => {
                      const startPct = (d.s / 24) * 100;
                      const lenPct = ((d.e - d.s) / 24) * 100;
                      return (
                        <circle
                          key={d.naam}
                          cx="110"
                          cy="110"
                          r="78"
                          fill="none"
                          stroke={d.kleur}
                          strokeWidth={hoverSeg === i ? 17 : 13}
                          pathLength={100}
                          strokeDasharray={`${lenPct - 1} ${100 - lenPct + 1}`}
                          strokeDashoffset={-startPct - 0.5}
                          transform="rotate(-90 110 110)"
                          strokeLinecap="butt"
                          opacity={hoverSeg === -1 || hoverSeg === i ? 0.9 : 0.22}
                          style={{ transition: "all .3s ease", cursor: "pointer" }}
                          onMouseEnter={() => setHoverSeg(i)}
                          onMouseLeave={() => setHoverSeg(-1)}
                        />
                      );
                    })}
                    <text x="110" y="102" textAnchor="middle" fill="#f0e7d3" fontSize="13" fontFamily="Space Mono, monospace" letterSpacing="2">
                      24 UUR
                    </text>
                    <text x="110" y="124" textAnchor="middle" fill="#98a2c8" fontSize="9" fontFamily="Space Mono, monospace" letterSpacing="1.5">
                      {hoverSeg === -1 ? "één dag met REEDS" : DIAL[hoverSeg].naam}
                    </text>
                  </svg>
                  <span className="pulse-ring pointer-events-none absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold" />
                  <span className="pointer-events-none absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold" />
                </div>
                <ul className="w-full space-y-1.5">
                  {DIAL.map((d, i) => (
                    <li
                      key={d.naam}
                      onMouseEnter={() => setHoverSeg(i)}
                      onMouseLeave={() => setHoverSeg(-1)}
                      className={`flex cursor-pointer items-center gap-3 border px-3 py-2 transition-all duration-200 ${
                        hoverSeg === i ? "border-gold/50 bg-night" : "border-transparent hover:border-line"
                      }`}
                    >
                      <span className="h-2.5 w-2.5 shrink-0" style={{ background: d.kleur }} />
                      <span className="w-[74px] shrink-0 font-mono text-[10px] text-fog">
                        {`${String(Math.floor(d.s)).padStart(2, "0")}:${d.s % 1 ? "30" : "00"}–${String(Math.floor(d.e)).padStart(2, "0")}:${d.e % 1 ? "30" : "00"}`}
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-[13px] font-semibold text-cream">{d.naam}</span>
                        <span className="block truncate text-[11px] text-fog">{d.label}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-4 border-t border-line pt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-fog">
                Dispenza bij het ontwaken · Goddard bij het inslapen — de rest volgt het circadiane ritme
              </p>
            </Panel>
          </Reveal>
        </div>

        {/* ---- interactieve widget ---- */}
        <Reveal className="mt-6">
          <Panel className="p-6 sm:p-10">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold">4 · Stel de engine op de proef</p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-cream sm:text-3xl">
                  Wie ben jij vandaag? <em className="font-light text-gold">Zij componeert mee.</em>
                </h3>
              </div>
              <Chip tone="teal">live output · geen server nodig</Chip>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <Seg
                label="Chronotype"
                value={chrono}
                onChange={setChrono}
                options={[
                  { v: "vogel", l: "Vroege vogel" },
                  { v: "avond", l: "Avondmens" },
                ]}
              />
              <Seg
                label="Kompas-focus"
                value={focus}
                onChange={setFocus}
                options={[
                  { v: "liefde", l: "Liefde" },
                  { v: "carriere", l: "Werk & geld" },
                  { v: "gezondheid", l: "Lichaam" },
                  { v: "rust", l: "Innerlijke rust" },
                ]}
              />
              <Seg
                label="Vibratie nu (Abraham-schaal)"
                value={vibe}
                onChange={setVibe}
                options={[
                  { v: "laag", l: "Laag" },
                  { v: "midden", l: "Midden" },
                  { v: "hoog", l: "Hoog" },
                ]}
              />
            </div>

            <div key={`${chrono}-${focus}-${vibe}`} className="anim-fade-up mt-8 grid gap-3 lg:grid-cols-5">
              {schedule.map((b) => (
                <div key={b.moment} className="group flex flex-col border border-line bg-night/70 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-fog">{b.moment}</span>
                    <span className="font-mono text-xs font-bold text-gold">{b.tijd}</span>
                  </div>
                  <div className="mt-2.5 flex flex-wrap gap-1">
                    {b.leraren.map((l) => (
                      <span
                        key={l.naam}
                        className="px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.1em]"
                        style={{ color: l.kleur, border: `1px solid ${l.kleur}55`, background: `${l.kleur}11` }}
                      >
                        {l.naam}
                      </span>
                    ))}
                  </div>
                  <p className="mt-2.5 text-[13px] font-semibold leading-snug text-cream">{b.praktijk}</p>
                  <p className="mt-2 border-t border-line/60 pt-2 text-[11px] italic leading-relaxed text-fog">{b.reden}</p>
                  <span className="mt-auto pt-3 font-mono text-[10px] tracking-[0.16em] text-fog">{b.duur}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-fog">
                Totale dagdosis: <span className="text-gold">{totaal} minuten</span> · zondag: mastermind (Hill) · vrijdag: vision review (Byrne) · maandag: I AM-intentie (Dyer)
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-fog">
                Engine-run {String(totaal * 7 + (chrono === "vogel" ? 3 : 9) + (vibe === "laag" ? 1 : vibe === "midden" ? 2 : 4)).padStart(4, "0")} ✳ gegenereerd om 03:00
              </p>
            </div>
          </Panel>
        </Reveal>
      </div>
    </section>
  );
}
