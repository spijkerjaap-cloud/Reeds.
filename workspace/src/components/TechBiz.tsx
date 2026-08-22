import { ETHICS, ROADMAP, STACK, TIERS } from "../data";
import { Asterisk, Chip, Panel, Reveal, SectionHeader } from "./ui";

export default function TechBiz() {
  return (
    <section id="stack" className="section-anchor relative border-y border-line/60 bg-ink/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          nr="06"
          kicker="Tech Stack & Monetisatie"
          title={
            <>
              Gebouwd als een tempel, <em className="font-light text-gold">gerund als een eed</em>
            </>
          }
          lede="De stack kiest voor offline-first rust in plaats van engagement-metrics. En de verdienmodel-belofte luidt: de gebruiker betaalt voor verdieping, nooit voor verlossing — de kern van de methode blijft voor altijd gratis."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {/* stack */}
          <Reveal>
            <Panel className="h-full p-6 sm:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-gold">De technische keuzes</p>
              <div className="mt-5 divide-y divide-line">
                {STACK.map((s) => (
                  <div key={s.laag} className="group grid gap-1 py-3.5 transition-colors duration-200 hover:bg-night/50 sm:grid-cols-[150px_1fr] sm:gap-5 sm:px-2">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-fog">{s.laag}</p>
                      <p className="mt-0.5 font-mono text-[12px] font-bold text-teal">{s.keuze}</p>
                    </div>
                    <p className="text-[13px] leading-relaxed text-fog">{s.waarom}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 border-t border-line pt-4 font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-fog">
                Waarom geen Flutter? React Native deelt zijn web-DNA met dit blueprint — één team, één design-taal,
                drie platformen.
              </p>
            </Panel>
          </Reveal>

          {/* ethiek */}
          <Reveal delay={120}>
            <Panel className="h-full p-6 sm:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-gold">De ethische eed van het verdienmodel</p>
              <p className="mt-4 text-sm leading-relaxed text-fog">
                Een app over innerlijke rust mag geen onrustmachine zijn. Vijf harde beloften, vastgelegd vóór de
                eerste regel code:
              </p>
              <ul className="mt-5 space-y-3">
                {ETHICS.map((e, i) => (
                  <li key={i} className="flex gap-3 border border-line bg-night/50 p-3.5 text-[13px] leading-relaxed text-fog transition-colors duration-200 hover:border-gold/40">
                    <Asterisk className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </Panel>
          </Reveal>
        </div>

        {/* tiers — asymmetrisch */}
        <Reveal className="mt-6">
          <div className="grid gap-4 lg:grid-cols-[0.9fr_1.3fr_0.9fr]">
            {TIERS.map((t) => (
              <div
                key={t.naam}
                className={`relative flex flex-col border p-6 transition-all duration-300 sm:p-8 ${
                  t.featured
                    ? "corner-ticks border-gold/70 bg-panel shadow-[0_30px_80px_-30px_rgba(224,169,78,0.25)] lg:-my-5 lg:py-12"
                    : "border-line bg-night/50 hover:border-fog/40"
                }`}
              >
                {t.featured && (
                  <span className="absolute -top-3 left-6 bg-gold px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-night">
                    De kern van de methode
                  </span>
                )}
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className={`font-display text-3xl font-bold ${t.featured ? "text-gold" : "text-cream"}`}>{t.naam}</h3>
                  <Chip tone={t.featured ? "gold" : "fog"}>{t.tag}</Chip>
                </div>
                <p className="mt-2 font-mono text-sm text-cream/85">{t.prijs}</p>
                <ul className={`mt-5 space-y-2.5 border-t pt-5 ${t.featured ? "border-gold/30" : "border-line"}`}>
                  {t.items.map((it) => (
                    <li key={it} className="flex gap-2.5 text-[13px] leading-relaxed text-fog">
                      <svg viewBox="0 0 12 12" className={`mt-1 h-2.5 w-2.5 shrink-0 ${t.featured ? "text-gold" : "text-teal"}`} fill="none" aria-hidden="true">
                        <path d="M2 6.5l2.5 2.5L10 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {it}
                    </li>
                  ))}
                </ul>
                {t.featured && (
                  <p className="mt-auto pt-6 text-[12px] italic leading-relaxed text-fog">
                    14 dagen volledig gratis proberen — zonder creditcard, zonder automatische verlenging-stunt.
                    Opzeggen is één tik, net als je data wissen.
                  </p>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        {/* roadmap */}
        <Reveal className="mt-16">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold">Roadmap naar launch</p>
        </Reveal>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {ROADMAP.map((r, i) => (
            <Reveal key={r.fase} delay={i * 80}>
              <div className="group relative h-full border border-line bg-night/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-bold text-gold/70 transition-colors duration-300 group-hover:text-gold">{r.fase}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-fog">{r.week}</span>
                </div>
                <div className="mt-4 h-px w-8 bg-gold/40 transition-all duration-500 group-hover:w-full" />
                <p className="mt-4 text-[13px] leading-relaxed text-fog">{r.bes}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
