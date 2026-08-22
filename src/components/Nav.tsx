import { useEffect, useState } from "react";
import { Asterisk, useScrollProgress } from "./ui";

const LINKS = [
  { id: "concept", label: "01 Concept" },
  { id: "journey", label: "02 Journey" },
  { id: "features", label: "03 Features" },
  { id: "engine", label: "04 Engine" },
  { id: "data", label: "05 Data" },
  { id: "stack", label: "06 Stack & Biz" },
];

export default function Nav() {
  const progress = useScrollProgress();
  const [active, setActive] = useState("");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    LINKS.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-night/85 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="group flex items-center gap-2.5">
          <Asterisk className="h-4 w-4 text-gold transition-transform duration-500 group-hover:rotate-90" />
          <span className="font-display text-lg font-bold tracking-wide text-cream">REEDS</span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.22em] text-fog sm:inline">
            · app blueprint v1.0
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors duration-300 ${
                active === l.id ? "bg-gold/15 text-gold" : "text-fog hover:text-cream"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-fog md:inline">
            10 leraren · 3 pijlers
          </span>
          <span className="border border-gold/40 px-2 py-0.5 font-mono text-[10px] tracking-[0.14em] text-gold">
            V1.0
          </span>
        </div>
      </div>
      <div className="h-[2px] w-full bg-line/40">
        <div className="h-full bg-gold transition-[width] duration-150 ease-out" style={{ width: `${progress * 100}%` }} />
      </div>
    </header>
  );
}
