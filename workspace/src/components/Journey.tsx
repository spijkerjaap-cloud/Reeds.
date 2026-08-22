import { JOURNEY } from "../data";
import { Chip, Reveal, SectionHeader } from "./ui";

export default function Journey() {
  return (
    <section id="journey" className="section-anchor relative border-y border-line/60 bg-ink/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          nr="02"
          kicker="User Journey"
          title={
            <>
              Zeven stops van <em className="font-light text-gold">dromer</em> naar{" "}
              <em className="font-light text-gold">belichaamde identiteit</em>
            </>
          }
          lede="De reis is ontworpen als een initiatie: laagdrempelig beginnen, snel iets voelen, en daarna pas verdiepen. De gebruiker is binnen één avond door de Poort en draait op dag 2 zijn eerste door de engine gecomponeerde routine."
        />

        <div className="relative ml-2 border-l border-line sm:ml-6">
          {JOURNEY.map((j, i) => (
            <Reveal key={j.dag + j.titel} delay={i * 60}>
              <article className="group relative mb-10 pl-8 last:mb-0 sm:pl-14">
                {/* node */}
                <span className="absolute -left-[7px] top-2 h-3.5 w-3.5 border border-gold bg-night transition-colors duration-300 group-hover:bg-gold sm:-left-[9px] sm:h-4 sm:w-4" />
                <span className="absolute -left-[1px] top-2 hidden h-px w-6 bg-line group-hover:bg-gold/50 sm:block sm:w-10" />

                <div className="corner-ticks border border-line bg-panel/70 p-6 transition-all duration-300 hover:border-gold/40 hover:bg-panel sm:p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="bg-gold px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-night">
                      {j.dag}
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.14em] text-fog">scherm: <span className="text-teal">{j.scherm}</span></span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-cream transition-colors duration-300 group-hover:text-gold sm:text-[1.7rem]">
                    {j.titel}
                  </h3>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-fog md:text-[15px]">{j.tekst}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {j.chips.map((c) => (
                      <Chip key={c} tone={c.toLowerCase().includes("dag 66") ? "gold" : "fog"}>
                        {c}
                      </Chip>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <p className="mt-12 max-w-2xl border-l-2 border-gold/60 pl-5 font-display text-lg italic leading-relaxed text-cream/85">
            Ontwerpregel van de journey: de gebruiker mag nooit meer dan één nieuw concept per dag leren.
            Spirituele diepgang is een dosering, geen stortvloed.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
