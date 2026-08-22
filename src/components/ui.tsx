import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";

/* Reveal on scroll */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-in");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ ["--rd" as string]: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* Panel met gouden hoek-ticks (blueprint-handtekening) */
export function Panel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`corner-ticks border border-line bg-panel/60 ${className}`}>{children}</div>;
}

/* Sectiekop: nummer, kicker, titel, lede */
export function SectionHeader({
  nr,
  kicker,
  title,
  lede,
}: {
  nr: string;
  kicker: string;
  title: ReactNode;
  lede?: string;
}) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="flex items-center gap-4">
        <span className="font-mono text-[11px] tracking-[0.3em] text-gold">SECTIE {nr}</span>
        <span className="h-px flex-1 bg-line" />
        <span className="font-mono text-[11px] tracking-[0.3em] text-fog">{kicker}</span>
      </div>
      <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-cream sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {lede && <p className="mt-5 max-w-2xl text-base leading-relaxed text-fog md:text-lg">{lede}</p>}
    </Reveal>
  );
}

/* Kleine monospace chip */
export function Chip({ children, tone = "fog" }: { children: ReactNode; tone?: "gold" | "fog" | "teal" }) {
  const tones: Record<string, string> = {
    gold: "border-gold/40 text-gold",
    fog: "border-line text-fog",
    teal: "border-teal/40 text-teal",
  };
  return (
    <span className={`inline-block border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] ${tones[tone]}`}>
      {children}
    </span>
  );
}

/* Roterend kompasroos-SVG */
export function Compass({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" fill="none" className={`spin-slow ${className}`} aria-hidden="true">
      <circle cx="200" cy="200" r="196" stroke="#e0a94e" strokeOpacity="0.25" strokeWidth="1" />
      <circle cx="200" cy="200" r="160" stroke="#e0a94e" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="3 7" />
      <circle cx="200" cy="200" r="120" stroke="#f0e7d3" strokeOpacity="0.1" strokeWidth="1" />
      {Array.from({ length: 24 }).map((_, i) => {
        const a = (i * Math.PI * 2) / 24;
        const long = i % 6 === 0;
        const r1 = long ? 120 : 150;
        const r2 = 196;
        return (
          <line
            key={i}
            x1={200 + Math.cos(a) * r1}
            y1={200 + Math.sin(a) * r1}
            x2={200 + Math.cos(a) * r2}
            y2={200 + Math.sin(a) * r2}
            stroke="#e0a94e"
            strokeOpacity={long ? 0.5 : 0.22}
            strokeWidth={long ? 1.4 : 1}
          />
        );
      })}
      <path d="M200 60 L212 200 L200 340 L188 200 Z" fill="#e0a94e" fillOpacity="0.5" />
      <path d="M60 200 L200 188 L340 200 L200 212 Z" fill="#f0e7d3" fillOpacity="0.22" />
      <circle cx="200" cy="200" r="6" fill="#e0a94e" />
      <circle cx="200" cy="200" r="14" stroke="#e0a94e" strokeOpacity="0.6" strokeWidth="1" />
    </svg>
  );
}

/* Kleine asterisk-ster (signatuur-glyf) */
export function Asterisk({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <path d="M12 2v20M3.5 7l17 10M20.5 7l-17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* Sterrenveld — ambient achtergrond */
export function Starfield({ count = 70, className = "" }: { count?: number; className?: string }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        s: Math.random() * 2 + 1,
        tw: 3 + Math.random() * 5,
        td: Math.random() * 6,
      })),
    [count]
  );
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {stars.map((st) => (
        <span
          key={st.id}
          className="star"
          style={{
            left: `${st.x}%`,
            top: `${st.y}%`,
            width: `${st.s}px`,
            height: `${st.s}px`,
            ["--tw" as string]: `${st.tw}s`,
            ["--td" as string]: `${st.td}s`,
          }}
        />
      ))}
    </div>
  );
}

/* Knop */
export function GoldLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-3 border border-gold/50 bg-gold/10 px-5 py-3 font-mono text-[12px] uppercase tracking-[0.18em] text-gold transition-all duration-300 hover:bg-gold hover:text-night"
    >
      {children}
      <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" aria-hidden="true">
        <path d="M10 3v12m0 0l-4.5-4.5M10 15l4.5-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

/* Hook: scroll-progress 0..1 */
export function useScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? h.scrollTop / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return p;
}
