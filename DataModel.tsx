import { ENTITIES, FUNNEL } from "../data";
import { Panel, Reveal, SectionHeader } from "./ui";

const REGELS = [
  {
    titel: "Maximaal drie praktijken actief",
    tekst: "De 'actieve_praktijken'-array op het gebruikersprofiel heeft een harde limiet van 3. Nieuwe praktijken openen pas als er een oude is afgerond tot gewoonte (21 sessies). De kast toont sloten mét reden — geen verborgen content, maar zichtbare groei.",
  },
  {
    titel: "Alles in blokken van 1–3 minuten",
    tekst: "micro_content is de kleinste eenheid: één audio, één kaart, één prompt. De engine stapelt blokken tot een dag; de gebruiker ziet nooit 'een bibliotheek van 220 items', alleen 'wat nu'. Diepte zonder drempel.",
  },
  {
    titel: "Moment + energie als tag-systeem",
    tekst: "Elke praktijk draagt twee metadata: moment (ontwaken → nacht) en energie (activerend, kalmerend, anker). Daarmee kan de engine zonder redeneren in natuurlijke taal altijd een passende, veilige combinatie bouwen — kalmerend vóór het slapen, activerend nooit na 20:00.",
  },
  {
    titel: "Voelen voor en na, niet ernaar",
    tekst: "Elke sessie logt vibe_voor en vibe_na. Die delta's — niet de voltooiingspercentages — voeden de engine en de statistieken. Het dashboard toont: 'SATS doet jouw naald +9. Presentiepauzes +4.' De gebruiker leert zijn eigen instrument kennen.",
  },
];

export default function DataModel() {
  return (
    <section id="data" className="section-anchor mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
      <SectionHeader
        nr="05"
        kicker="Database & Content Structuur"
        title={
          <>
            Diep als een oceaan, <em className="font-light text-gold">ondiep als een badje</em>
          </>
        }
        lede="Tien leraren is veel — te veel om in één keer te serveren. Het datamodel is daarom ontworpen als een doseersysteem: alles bestaat, maar de gebruiker ontmoet nooit meer dan één blokje tegelijk."
      />

      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        {/* schema's */}
        <div>
          <Reveal>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.26em] text-gold">Zeven tabellen, één loop</p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {ENTITIES.map((e, i) => (
              <Reveal key={e.naam} delay={i * 50}>
                <div className="group h-full border border-line bg-panel/60 transition-all duration-300 hover:border-gold/40">
                  <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
                    <span className="font-mono text-[12px] font-bold tracking-wider text-gold">{e.naam}</span>
                    <svg viewBox="0 0 14 14" className="h-3 w-3 text-fog" fill="none" aria-hidden="true">
                      <ellipse cx="7" cy="3.5" rx="5" ry="2" stroke="currentColor" strokeWidth="1.1" />
                      <path d="M2 3.5v7c0 1.1 2.2 2 5 2s5-.9 5-2v-7" stroke="currentColor" strokeWidth="1.1" />
                      <path d="M2 7c0 1.1 2.2 2 5 2s5-.9 5-2" stroke="currentColor" strokeWidth="1.1" />
                    </svg>
                  </div>
                  <ul className="space-y-1 px-4 py-3">
                    {e.velden.map((v) => (
                      <li key={v} className="font-mono text-[11px] leading-relaxed text-fog">
                        <span className={v.includes("pk") ? "text-teal" : v.includes("→") ? "text-lav" : v.includes("enum") ? "text-cream/80" : ""}>
                          {v}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
            <Reveal delay={350}>
              <div className="flex h-full flex-col justify-center border border-dashed border-line bg-night/40 p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">Relatie-kern</p>
                <p className="mt-2 font-mono text-[11px] leading-loose text-fog">
                  leraar 1—n praktijk 1—n micro_content<br />
                  gebruiker 1—n kompas (per domein)<br />
                  gebruiker 1—n routine_dag 1—n sessie<br />
                  sessie n—1 praktijk
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* trechter + regels */}
        <div>
          <Reveal delay={100}>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.26em] text-gold">De content-trechter</p>
          </Reveal>
          <Reveal delay={140}>
            <Panel className="p-6">
              <div className="space-y-2">
                {FUNNEL.map((f, i) => (
                  <div key={f.label} className="group">
                    <div
                      className="flex items-center justify-between border border-line bg-ink/70 px-4 py-3 transition-all duration-300 hover:border-gold/50 hover:bg-ink"
                      style={{ width: `${f.breedte}%`, minWidth: "200px" }}
                    >
                      <span className="font-display text-base font-semibold text-cream">{f.label}</span>
                      <span className="font-mono text-[10px] text-fog">{f.sub}</span>
                    </div>
                    {i < FUNNEL.length - 1 && (
                      <div className="ml-8 my-1 h-3 w-px bg-line" aria-hidden="true" />
                    )}
                  </div>
                ))}
              </div>
              <p className="mt-5 border-t border-line pt-4 text-[13px] leading-relaxed text-fog">
                De gebruiker ervaart alleen de onderste laag: <span className="text-cream">maximaal zes blokken per
                dag</span>. De volle breedte van de canon bestaat — geduldig wachtend in de kast.
              </p>
            </Panel>
          </Reveal>

          <Reveal delay={200}>
            <p className="mb-4 mt-10 font-mono text-[10px] uppercase tracking-[0.26em] text-gold">Vier anti-overweldigingsregels</p>
          </Reveal>
          <div className="space-y-3">
            {REGELS.map((r, i) => (
              <Reveal key={r.titel} delay={i * 60}>
                <div className="group flex gap-4 border border-line bg-panel/50 p-4 transition-all duration-300 hover:border-gold/40 hover:bg-panel">
                  <svg viewBox="0 0 20 20" className="mt-1 h-4 w-4 shrink-0 text-gold" fill="none" aria-hidden="true">
                    <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M6.5 10.5l2.5 2.5 4.5-5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-cream">{r.titel}</h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-fog">{r.tekst}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
