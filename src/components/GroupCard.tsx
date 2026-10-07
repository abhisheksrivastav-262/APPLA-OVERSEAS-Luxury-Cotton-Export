"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, X, Expand } from "lucide-react";
import type { Group } from "@/data/site";
import { BuyButton } from "./BuyModal";
import { WovicaMark } from "./ProductCard";

export function GroupCard({ g }: { g: Group }) {
  const [sel, setSel] = useState(0);
  const [zoom, setZoom] = useState(false);
  const v = g.variants[sel];

  return (
    <>
      <div className="rounded-[26px] overflow-hidden bg-white lux-card hover:-translate-y-2 hover:shadow-[0_30px_70px_-25px_rgba(10,26,60,0.45)] transition-all duration-500">
        {/* upar big size product — full photo, no cut */}
        <div className="relative bg-[#f4efe4]">
          <button onClick={() => setZoom(true)} aria-label={`${v.name} bada dekho`} className="block w-full cursor-zoom-in">
            <div className="aspect-square w-full">
              <img key={v.image} src={v.image} alt={`${g.title} – ${v.name}`} loading="lazy" className="w-full h-full object-cover" />
            </div>
          </button>
          {g.badge && <span className="absolute top-4 left-4 max-w-[60%] px-3 py-1.5 rounded-full text-[10px] font-bold tracking-[0.08em] uppercase bg-gradient-to-r from-[#A8822E] to-[#E8C97A] text-[#060f24] shadow-lg leading-tight pointer-events-none">{g.badge}</span>}
          <span className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-[11px] font-semibold glass text-[#0A1A3C] border border-white/40 pointer-events-none">Export Quality</span>
          <span className="absolute bottom-3 left-4 pointer-events-none"><WovicaMark small /></span>
          <span className="absolute bottom-3 right-4 w-9 h-9 rounded-full grid place-items-center bg-[#0A1A3C]/80 text-[#E8C97A] pointer-events-none"><Expand size={15} /></span>
        </div>

        <div className="p-6 pt-5">
          <h3 className="font-display text-[20px] font-semibold text-[#0A1A3C] leading-snug">{g.title}</h3>
          <p className="mt-1.5 text-[12px] font-bold tracking-wide text-[#0A1A3C]">{g.brandLine}</p>
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#A8822E]">Premium Quality</p>

          {/* niche 4 colour select options */}
          <p className="mt-4 text-[13px] font-semibold text-[#0A1A3C]">Colour: <span className="text-[#A8822E]">{v.name}</span></p>
          <div className="mt-2 grid gap-2" style={{ gridTemplateColumns: `repeat(${g.variants.length}, minmax(0,1fr))` }}>
            {g.variants.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setSel(i)}
                aria-label={t.name}
                title={t.name}
                className={`rounded-xl overflow-hidden border-2 bg-[#f4efe4] transition-all min-h-[64px] ${i === sel ? "border-[#A8822E] shadow-md" : "border-[#C9A24B]/25 opacity-80 hover:opacity-100"}`}
              >
                <div className="aspect-square w-full">
                  <img src={t.image} alt={t.name} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <p className={`text-[10px] font-semibold py-1 px-0.5 leading-tight truncate ${i === sel ? "bg-[#0A1A3C] text-[#E8C97A]" : "bg-white text-[#0A1A3C]/70"}`}>{t.name}</p>
              </button>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2 text-[12.5px]">
            {[["Material", g.material], ["Sizes", g.sizes], ["GSM / TC", g.gsm], ["MOQ", g.moq]].map(([k, val]) => (
              <div key={k} className="rounded-xl bg-[#FAF8F3] border border-[#C9A24B]/15 px-3 py-2">
                <p className="text-[#A8822E] text-[10px] tracking-[0.15em] uppercase font-semibold">{k}</p>
                <p className="text-[#0A1A3C] font-medium truncate" title={val}>{val}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-[13px] text-[#0A1A3C]/60">{g.desc}</p>

          <div className="mt-4 grid gap-2">
            <BuyButton key={v.name} product={`${g.title} – Colour: ${v.name}`} />
            <Link href={`/contact?product=${encodeURIComponent(`${g.title} – ${v.name}`)}`} className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-[#0A1A3C] text-[#E8C97A] text-sm font-semibold hover:bg-[#10265a] transition-colors">
              Send Inquiry <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {zoom && (
        <div onClick={() => setZoom(false)} className="fixed inset-0 z-[85] bg-[#060f24]/92 backdrop-blur grid place-items-center p-5 cursor-zoom-out">
          <button aria-label="Close" className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white grid place-items-center"><X size={20} /></button>
          <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={v.image} alt={`${g.title} – ${v.name}`} className="w-full max-h-[75svh] object-contain rounded-3xl border border-[#C9A24B]/40 bg-white/5" />
            <p className="mt-4 text-center text-white font-display text-xl">{v.name} • <span className="gold-text font-bold">{g.title}</span></p>
          </div>
        </div>
      )}
    </>
  );
}
