import { useState } from "react";
import { PHONE_PARTS } from "../data";
import { Starfield } from "./ui";

export default function PhoneDemo() {
  const [idx, setIdx] = useState(3);
  const part = PHONE_PARTS[idx];

  return (
    <div className="flex flex-col items-center">
      {/* telefoon-frame */}
      <div className="relative w-[300px] sm:w-[320px]">
        <div className="rounded-[2.6rem] border border-line bg-[#060a18] p-2.5 shadow-[0_40px_90px_-20px_rgba(0,0,0,0.8)]">
          <div className="relative h-[600px] overflow-hidden rounded-[2rem] border border-line/60 bg-night">
            {/* luchtband per dagdeel, crossfade */}
            {PHONE_PARTS.map((p, i) => (
              <div
                key={p.id}
                className="absolute inset-x-0 top-0 h-44 transition-opacity duration-700"
                style={{ background: p.lucht, opacity: i === idx ? 1 : 0 }}
              />
            ))}
            {idx === 3 && <Starfield count={26} />}
            <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-transparent to-night" />

            {/* statusbalk */}
            <div className="relative z-10 flex items-center justify-between px-5 pt-3.5 font-mono text-[10px] tracking-widest text-cream/80">
              <span>{part.tijd}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              <span>87%</span>
            </div>

            {/* content, wisselt met animatie */}
            <div key={part.id} className="anim-fade-up relative z-10 flex h-[calc(100%-28px)] flex-col px-4 pt-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-fog">{part.label} · vandaag</p>
              <h3 className="mt-1 font-display text-2xl font-semibold italic text-cream">{part.groet}</h3>

              {/* streak + vibe */}
              <div className="mt-3 flex items-center gap-2">
                <span className="border border-gold/40 bg-gold/10 px-2 py-0.5 font-mono text-[10px] tracking-wider text-gold">
                  DAG 12
                </span>
                <span className="flex items-center gap-1.5 border border-line px-2 py-0.5 font-mono text-[10px] tracking-wider text-fog">
                  <svg viewBox="0 0 12 12" className="h-2 w-2" aria-hidden="true">
                    <circle cx="6" cy="6" r="5" fill="none" stroke="#e78fa3" strokeWidth="1.5" />
                    <circle cx="6" cy="6" r="2" fill="#e78fa3" />
                  </svg>
                  VIBE {part.vibe}
                </span>
              </div>

              {/* praktijkkaart */}
              <div className="corner-ticks mt-4 border border-line bg-ink/90 p-4">
                <div className="flex items-center justify-between">
                  <span
                    className="px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em]"
                    style={{ color: part.praktijk.kleur, border: `1px solid ${part.praktijk.kleur}55` }}
                  >
                    {part.praktijk.leraar}
                  </span>
                  <span className="font-mono text-[10px] text-fog">{part.praktijk.duur}</span>
                </div>
                <h4 className="mt-3 font-display text-xl font-semibold text-cream">{part.praktijk.titel}</h4>
                <p className="mt-1.5 text-[13px] leading-relaxed text-fog">{part.praktijk.beschrijving}</p>

                <button
                  type="button"
                  className="group mt-4 flex w-full items-center justify-center gap-2 bg-gold py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-night transition-colors duration-300 hover:bg-cream"
                >
                  <svg viewBox="0 0 14 14" className="h-3 w-3" aria-hidden="true">
                    <path d="M3 1.5l9 5.5-9 5.5z" fill="currentColor" />
                  </svg>
                  Start sessie
                </button>
              </div>

              {/* hierna */}
              <div className="mt-3 flex items-start gap-2 border border-line/70 bg-night/70 px-3 py-2.5">
                <svg viewBox="0 0 16 16" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-fog" fill="none" aria-hidden="true">
                  <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M8 4.5V8l2.5 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                <p className="font-mono text-[10px] leading-relaxed tracking-wide text-fog">
                  HIERNA → <span className="text-cream/80">{part.hierna}</span>
                </p>
              </div>

              <div className="mt-auto" />

              {/* tabbar */}
              <div className="mb-4 flex items-center justify-around border-t border-line/70 pt-3">
                {[
                  { d: "M8 1.5L14 5v6l-6 3.5L2 11V5z M8 1.5V14 M2 5l6 3.5L14 5", label: "Kompas", on: false },
                  { d: "M2 6l2-3h8l2 3v7H2z M2 6h12 M6 9h4", label: "Kast", on: false },
                  { d: "M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13z M8 5v3l2.2 1.4", label: "Vandaag", on: true },
                  { d: "M11.5 2.5A6 6 0 105 13.5 5 5 0 0111.5 2.5z", label: "Nacht", on: false },
                ].map((t) => (
                  <div key={t.label} className="flex flex-col items-center gap-1">
                    <svg viewBox="0 0 16 16" className={`h-4.5 w-4.5 ${t.on ? "text-gold" : "text-fog/60"}`} fill="none" aria-hidden="true">
                      <path d={t.d} stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className={`font-mono text-[8px] uppercase tracking-wider ${t.on ? "text-gold" : "text-fog/50"}`}>
                      {t.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* notch */}
        <div className="absolute left-1/2 top-2.5 h-5 w-24 -translate-x-1/2 rounded-full bg-[#060a18]" />
      </div>

      {/* dagdeel-kiezer */}
      <div className="mt-6 grid grid-cols-4 gap-1 border border-line bg-ink/70 p-1">
        {PHONE_PARTS.map((p, i) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setIdx(i)}
            className={`px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] transition-all duration-300 sm:px-4 ${
              i === idx ? "bg-gold text-night" : "text-fog hover:bg-line/40 hover:text-cream"
            }`}
            aria-pressed={i === idx}
          >
            {p.label}
          </button>
        ))}
      </div>
      <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-fog">
        ✳ Speel met de dag — de engine wisselt van leraar
      </p>
    </div>
  );
}
