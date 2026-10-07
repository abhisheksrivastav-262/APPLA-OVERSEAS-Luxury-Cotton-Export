"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Group } from "@/data/site";

export function HeroSlider({ groups }: { groups: Group[] }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || groups.length < 2) return;
    const t = setInterval(() => setI((v) => (v + 1) % groups.length), 4500);
    return () => clearInterval(t);
  }, [paused, groups.length]);

  const g = groups[i];
  if (!g) return null;
  const cover = g.variants[0];

  return (
    <div
      className="relative rounded-[30px] overflow-hidden border border-[#C9A24B]/40 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] bg-[#0A1A3C] max-w-xl w-full mx-auto lg:mx-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
    >
      {/* square photo in square box — poori photo, no cut, no line */}
      <div className="relative aspect-square bg-[#0A1A3C]">
        <AnimatePresence>
          <motion.img
            key={g.slug}
            src={cover.image}
            alt={g.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        {g.badge && (
          <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-[0.1em] uppercase bg-gradient-to-r from-[#A8822E] to-[#E8C97A] text-[#060f24] shadow-lg">
            {g.badge}
          </span>
        )}
        <span className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-[11px] font-semibold glass text-[#0A1A3C] border border-white/40">
          {i + 1} / {groups.length}
        </span>
      </div>

      {/* info panel — hamesha visible, koi animation-block nahi */}
      <div className="px-5 py-4 bg-[#0A1A3C] border-t border-[#C9A24B]/25">
        <p className="text-[11px] tracking-[0.25em] uppercase text-[#E8C97A] font-semibold">{g.category} • {g.variants.length} colours</p>
        <h3 className="mt-1 font-display text-lg sm:text-xl text-white font-semibold leading-snug">
          {g.title}
        </h3>
        <div className="mt-2.5 flex items-center justify-between gap-3">
          <Link href="/products" className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#E8C97A] hover:gap-2.5 transition-all min-h-[44px]">
            View Collection <ArrowRight size={16} />
          </Link>
          <div className="flex items-center gap-2">
            <button onClick={() => setI((i - 1 + groups.length) % groups.length)} aria-label="Previous product" className="w-11 h-11 rounded-full grid place-items-center bg-white/10 border border-white/25 text-white hover:bg-[#C9A24B] hover:text-[#060f24] transition-colors">
              <ChevronLeft size={18} />
            </button>
            <button onClick={() => setI((i + 1) % groups.length)} aria-label="Next product" className="w-11 h-11 rounded-full grid place-items-center bg-white/10 border border-white/25 text-white hover:bg-[#C9A24B] hover:text-[#060f24] transition-colors">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        <div className="mt-2.5 flex gap-1.5">
          {groups.map((_, d) => (
            <button key={d} onClick={() => setI(d)} aria-label={`Slide ${d + 1}`} className={`h-1.5 rounded-full transition-all ${d === i ? "w-8 bg-[#E8C97A]" : "w-3 bg-white/30 hover:bg-white/50"}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
