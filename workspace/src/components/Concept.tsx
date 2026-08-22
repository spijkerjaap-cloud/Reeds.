import { useEffect, useState } from "react";
import { PILLARS, PRINCIPLES } from "../data";
import { Chip, Panel, Reveal, SectionHeader } from "./ui";

const WORDS = ["herhaalt", "voelt", "gelooft", "bent"];

export default function Concept() {
  const [wi, setWi] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setWi((v) => (v + 1) % WORDS.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="concept" className="section-anchor relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
      <SectionHeader
        nr="01"
        kicker="Concept & Filosofie"
        title={
          <>
            De naam is het product: <em className="font-light text-gold">het is reeds geschied.</em>
          </>
        }
        lede="De meeste manifestatie-apps verkopen hoop op later. REEDS verkoopt herinnering aan nu — Neville Goddard's 'it is done' als ontwerpbrief voor elk scherm."
      />

      {/* roterend statement */}
      <Reveal>
        <Panel className="mb-14 overflow-hidden px-6 py-10 sm:px-12 sm:py-14">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold">Kernboodschap</p>
          <p className="mt-5 font-display text-3xl font-semibold leading-tight text-cream sm:text-5xl">
            Je wordt niet wat je wilt.
            <br />
            Je wordt wat je{" "}
            <span className="relative inline-block min-w-[5.2ch] text-gold">
              <span key={wi} className="word-swap inline-block italic">
                {WORDS[wi]}
              </span>
              <span className="absolute inset-x-0 -bottom-1 h-px bg-gold/50" />
            </span>
            <br />
            <span className="text-fog">REEDS helpt je het elke dag te worden.</span>
          </p>
          <p className="mt-7 max-w-2xl text-sm leading-relaxed text-fog md:text-base">
            „Aanvaard het gevoel van de vervulde wens" — Neville Goddard. Geen enkel scherm van REEDS eindigt daarom
            in een checkbox. Elke sessie eindigt in een <span className="text-cream">voelbare staat</span>, en die
            staat — niet het gedrag — is wat de app meet, doseert en versterkt.
          </p>
        </Panel>
      </Reveal>

      {/* naam + belofte */}
      <div className="mb-14 grid gap-6 lg:grid-cols-2">
        <Reveal delay={80}>
          <Panel className="h-full p-7 sm:p-9">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-fog">Waarom 'REEDS'</p>
            <h3 className="mt-4 font-display text-2xl font-semibold text-cream sm:text-3xl">
              Eén woord dat de hele theorie draagt
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-fog md:text-base">
              <span className="font-semibold text-cream">REEDS</span> komt van het oudste manifestatie-principe dat er
              is: <em className="text-gold">'het is reeds geschied.'</em> Goddard leerde dat verbeelding geen
              voorbereiding op de toekomst is, maar een herinnering aan een toekomst die al bestaat. De app heet
              daarom niet 'Manifest' of 'DreamBig' — die namen ademen verlangen. REEDS ademt voltooiing.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-fog md:text-base">
              Consequentie in de UI: nergens staat 'je doel van morgen', overal staat 'je leven dat je je herinnert'.
              Streaks heten geen streaks maar <span className="text-cream">'bewijs'</span>. De vibratie-meter heet geen
              moodtracker maar <span className="text-cream">'de naald'</span>. Taal is architectuur.
            </p>
          </Panel>
        </Reveal>
        <Reveal delay={160}>
          <Panel className="h-full p-7 sm:p-9">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-fog">De belofte aan de gebruiker</p>
            <h3 className="mt-4 font-display text-2xl font-semibold text-cream sm:text-3xl">
              Van dromen naar belichamen, in drie pijlers
            </h3>
            <div className="mt-5 space-y-4">
              {PILLARS.map((p) => (
                <div key={p.cijfer} className="group flex gap-5 border border-line bg-night/50 p-4 transition-all duration-300 hover:border-gold/50 hover:bg-ink">
                  <span className="font-display text-4xl font-black leading-none text-gold/40 transition-colors duration-300 group-hover:text-gold">
                    {p.cijfer}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3">
                      <h4 className="font-display text-lg font-semibold text-cream">{p.naam}</h4>
                      <Chip tone="gold">{p.fase}</Chip>
                    </div>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-fog">{p.tekst}</p>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {p.tools.map((t) => (
                        <Chip key={t}>{t}</Chip>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        </Reveal>
      </div>

      {/* principes */}
      <Reveal>
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold">De vijf ontwerpwetten</p>
      </Reveal>
      <div className="mt-6 border-t border-line">
        {PRINCIPLES.map((p, i) => (
          <Reveal key={p.nr} delay={i * 70}>
            <div className="group grid gap-3 border-b border-line py-6 transition-all duration-300 hover:bg-ink/50 sm:grid-cols-[90px_280px_1fr] sm:gap-8 sm:px-4">
              <span className="font-mono text-sm text-gold/60 transition-colors duration-300 group-hover:text-gold">{p.nr}</span>
              <h3 className="font-display text-xl font-semibold text-cream transition-transform duration-300 group-hover:translate-x-1 sm:text-2xl">
                {p.titel}
              </h3>
              <p className="text-sm leading-relaxed text-fog md:text-base">{p.tekst}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
