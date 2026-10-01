"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Product } from "@/data/site";

export function HeroSlider({ items }: { items: Product[] }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || items.length < 2) return;
    const t = setInterval(() => setI((v) => (v + 1) % items.length), 4000);
    return () => clearInterval(t);
  }, [paused, items.length]);

  const p = items[i];
  if (!p) return null;

  return (
    <div
      className="relative rounded-[30px] overflow-hidden border border-[#C9A24B]/40 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] bg-[#0A1A3C]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
    >
      <div className="relative h-[380px] sm:h-[440px] lg:h-[520px]">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={p.slug}
            src={p.image}
            alt={p.title}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-[#060f24]/90 via-[#060f24]/15 to-transparent" />
        {p.badge && (
          <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-[0.1em] uppercase bg-gradient-to-r from-[#A8822E] to-[#E8C97A] text-[#060f24] shadow-lg">
            {p.badge}
          </span>
        )}
        <span className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-[11px] font-semibold glass text-[#0A1A3C] border border-white/40">
          {i + 1} / {items.length}
        </span>
      </div>

      <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6">
        <p className="text-[11px] tracking-[0.25em] uppercase text-[#E8C97A] font-semibold">{p.category} • Vovika Range</p>
        <AnimatePresence mode="wait">
          <motion.h3
            key={p.slug + "-t"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="mt-1 font-display text-xl sm:text-2xl text-white font-semibold leading-snug"
          >
            {p.title}
          </motion.h3>
        </AnimatePresence>
        <div className="mt-3 flex items-center justify-between gap-3">
          <Link href="/products" className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#E8C97A] hover:gap-2.5 transition-all">
            View Collection <ArrowRight size={16} />
          </Link>
          <div className="flex items-center gap-2">
            <button onClick={() => setI((i - 1 + items.length) % items.length)} aria-label="Previous" className="w-10 h-10 rounded-full grid place-items-center bg-white/10 border border-white/25 text-white hover:bg-[#C9A24B] hover:text-[#060f24] transition-colors">
              <ChevronLeft size={18} />
            </button>
            <button onClick={() => setI((i + 1) % items.length)} aria-label="Next" className="w-10 h-10 rounded-full grid place-items-center bg-white/10 border border-white/25 text-white hover:bg-[#C9A24B] hover:text-[#060f24] transition-colors">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        <div className="mt-3 flex gap-1.5">
          {items.map((_, d) => (
            <button key={d} onClick={() => setI(d)} aria-label={`Slide ${d + 1}`} className={`h-1.5 rounded-full transition-all ${d === i ? "w-8 bg-[#E8C97A]" : "w-3 bg-white/30 hover:bg-white/50"}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
