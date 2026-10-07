"use client";
import { useState } from "react";
import { X } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { GALLERY } from "@/data/site";

const CATS = ["All", "Bedsheets", "Protectors", "Comforters"];

export default function GalleryPage() {
  const [cat, setCat] = useState("All");
  const [light, setLight] = useState<string | null>(null);
  const list = GALLERY.filter((g) => cat === "All" || g.cat === cat);
  return (
    <div className="pt-28">
      <section className="relative py-16 overflow-hidden bg-[#060f24]">
        <div className="absolute inset-0" style={{ background: "radial-gradient(700px 260px at 80% 0%, #C9A24B44, transparent), radial-gradient(600px 240px at 15% 40%, #1A357366, transparent)" }} />
        <div className="relative max-w-7xl mx-auto px-6">
          <p className="text-[12px] tracking-[0.3em] uppercase text-[#E8C97A]">Masonry Gallery</p>
          <h1 className="mt-3 font-display text-4xl md:text-6xl text-white font-semibold">Craft, in pictures.</h1>
        </div>
      </section>
      <section className="py-14 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 mb-8">
            {CATS.map((c) => (
              <button key={c} onClick={() => setCat(c)} className={`px-5 py-2.5 rounded-full text-[13.5px] font-semibold border transition-all ${cat === c ? "bg-[#0A1A3C] text-[#E8C97A] border-[#0A1A3C]" : "bg-white text-[#0A1A3C]/70 border-[#C9A24B]/30"}`}>{c}</button>
            ))}
          </div>
          <div className="columns-1 sm:columns-2 md:columns-3 gap-5 [column-fill:balance]">
            {list.map((g, i) => (
              <Reveal key={g.src + i} className="mb-5 break-inside-avoid">
                <button onClick={() => setLight(g.src)} className="block w-full rounded-3xl overflow-hidden img-zoom lux-card relative group text-left">
                  <img src={g.src} alt={g.title} loading="lazy" className="w-full object-cover" />
                  <span className="absolute bottom-4 left-4 right-4 glass rounded-2xl px-4 py-2.5 text-[13px] font-semibold text-[#0A1A3C] flex justify-between">{g.title}<span className="text-[#A8822E] text-[11px] tracking-widest uppercase">{g.cat}</span></span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {light && (
        <div onClick={() => setLight(null)} className="fixed inset-0 z-[90] bg-[#060f24]/92 backdrop-blur grid place-items-center p-6 cursor-zoom-out">
          <button className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white grid place-items-center"><X size={20} /></button>
          <img src={light} alt="Preview" className="max-h-[85vh] max-w-full rounded-3xl border border-[#C9A24B]/40 shadow-2xl" />
        </div>
      )}
    </div>
  );
}
