"use client";
import { useEffect, useRef, useState } from "react";
import { STATS } from "@/data/site";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const t0 = performance.now();
        const tick = (t: number) => {
          const p = Math.min((t - t0) / 1600, 1);
          setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export function Stats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {STATS.map((s) => (
        <div key={s.label} className="rounded-3xl p-6 text-center bg-white/5 border border-[#C9A24B]/25 backdrop-blur hover:bg-white/10 transition-colors">
          <p className="font-display text-3xl md:text-4xl font-bold gold-text"><Counter value={s.value} suffix={s.suffix} /></p>
          <p className="mt-2 text-[12px] tracking-[0.18em] uppercase text-white/60">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
