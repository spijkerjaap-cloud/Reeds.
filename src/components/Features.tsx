import { useState } from "react";
import { SCREENS, TEACHERS } from "../data";
import { Chip, Reveal, SectionHeader } from "./ui";

const PIJLER_ORDER = ["Basis", "Kompas", "Gereedschap", "Integratie"];

export default function Features() {
  const [open, setOpen] = useState(0);

  return (
    <section id="features" className="section-anchor mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
      <SectionHeader
        nr="03"
        kicker="Feature Specificatie · MVP"
        title={
          <>
            Zestien schermen. Tien meesters. <em className="font-light text-gold">Nul overweldiging.</em>
          </>
        }
        lede="De MVP bevat alles wat nodig is voor de volledige loop — Poort, Kompas, Kast, Integratie — maar toont de gebruiker op elk moment maximaal drie praktijken. Hieronder: de scherminventaris én de vertaling van elke leraar naar concrete UI."
      />

      {/* ---- scherminventaris ---- */}
      <Reveal>
        <div className="mb-16 border border-line">
          <div className="flex items-center justify-between border-b border-line bg-ink/70 px-5 py-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-gold">Scherminventaris — 16 schermen</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-fog">P0 = launch · P1 = v1.1</span>
          </div>
          {PIJLER_ORDER.map((pijler) => (
            <div key={pijler}>
              <div className="border-b border-line bg-night/60 px-5 py-2 font-mono text-[10px] uppercase tracking-[0.24em] text-fog">
                {pijler === "Basis" ? "Basis & onboarding" : pijler === "Kompas" ? "Pijler I — Het Kompas" : pijler === "Gereedschap" ? "Pijler II — De Gereedschapskist" : "Pijler III — De Integratie"}
              </div>
              {SCREENS.filter((s) => s.pijler === pijler).map((s) => (
                <div
                  key={s.naam}
                  className="group grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1 border-b border-line/60 px-5 py-3.5 transition-colors duration-200 last:border-b-0 hover:bg-ink/60 sm:grid-cols-[280px_1fr_auto]"
                >
                  <span className="font-semibold text-cream transition-colors duration-200 group-hover:text-gold">{s.naam}</span>
                  <span className="col-span-2 text-[13px] leading-snug text-fog sm:col-span-1">{s.bes}</span>
                  <span
                    className={`justify-self-end border px-2 py-0.5 font-mono text-[10px] font-bold tracking-[0.12em] ${
                      s.prio === "P0" ? "border-gold/60 bg-gold/10 text-gold" : "border-line text-fog"
                    }`}
                  >
                    {s.prio}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Reveal>

      {/* ---- tien leraren ---- */}
      <Reveal>
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold">De vertaalslag</p>
            <h3 className="mt-3 font-display text-3xl font-semibold text-cream sm:text-4xl">
              Van boek naar <em className="font-light text-gold">knop</em>
            </h3>
          </div>
          <p className="hidden max-w-xs text-right font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-fog sm:block">
            Elke leraar → 2 à 3 features · elk met eigen UI-element & vast moment op de dag
          </p>
        </div>
      </Reveal>

      <div className="border-t border-line">
        {TEACHERS.map((t, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={t.nr} delay={Math.min(i * 40, 200)}>
              <div className={`border-b border-line transition-colors duration-300 ${isOpen ? "bg-ink/70" : "hover:bg-ink/40"}`}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 px-2 py-5 text-left sm:grid-cols-[64px_1fr_auto_auto] sm:gap-6 sm:px-5"
                  aria-expanded={isOpen}
                >
                  <span className="font-mono text-sm" style={{ color: t.kleur }}>
                    {t.nr}
                  </span>
                  <span>
                    <span className="block font-display text-xl font-semibold text-cream sm:text-2xl">{t.naam}</span>
                    <span className="mt-1 hidden font-mono text-[10px] uppercase tracking-[0.2em] sm:block" style={{ color: t.kleur }}>
                      {t.tag}
                    </span>
                  </span>
                  <span className="hidden border border-line px-2.5 py-1 font-mono text-[10px] tracking-[0.14em] text-fog md:block">
                    {t.moment}
                  </span>
                  <span
                    className={`flex h-8 w-8 items-center justify-center border transition-all duration-300 ${
                      isOpen ? "rotate-45 border-gold text-gold" : "border-line text-fog"
                    }`}
                  >
                    <svg viewBox="0 0 14 14" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
                      <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>

                <div className={`acc-body ${isOpen ? "open" : ""}`}>
                  <div className="acc-inner">
                    <div className="grid gap-8 px-2 pb-8 sm:px-5 lg:grid-cols-[340px_1fr] lg:gap-12 lg:pl-[88px]">
                      <div>
                        <p className="border-l-2 pl-4 font-display text-lg italic leading-relaxed text-cream/90" style={{ borderColor: t.kleur }}>
                          {t.citaat}
                        </p>
                        <p className="mt-4 text-[13px] leading-relaxed text-fog">{t.kern}</p>
                        <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-fog">
                          Vast moment: <span style={{ color: t.kleur }}>{t.moment}</span>
                        </p>
                      </div>
                      <div className="space-y-4">
                        {t.features.map((f) => (
                          <div key={f.titel} className="group border border-line bg-night/60 p-4 transition-all duration-300 hover:border-gold/40 sm:p-5">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <h4 className="font-display text-lg font-semibold text-cream">{f.titel}</h4>
                              <Chip tone="teal">{f.ui}</Chip>
                            </div>
                            <p className="mt-2 text-[13px] leading-relaxed text-fog">{f.bes}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
