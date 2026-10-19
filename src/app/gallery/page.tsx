"use client";
import { useState } from "react";
import { X, Play } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { GALLERY } from "@/data/site";

const CATS = ["All", "Manufacturing", "Bedsheets", "Protectors", "Comforters"];

type GalleryItem = (typeof GALLERY)[number];

export default function GalleryPage() {
  const [cat, setCat] = useState("All");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const list = GALLERY.filter((g) => cat === "All" || g.cat === cat);

  return (
    <div className="pt-28">
      <section className="relative py-16 overflow-hidden bg-[#060f24]">
        <div className="absolute inset-0" style={{ background: "radial-gradient(700px 260px at 80% 0%, #C9A24B44, transparent), radial-gradient(600px 240px at 15% 40%, #1A357366, transparent)" }} />
        <div className="relative max-w-7xl mx-auto px-6">
          <p className="text-[12px] tracking-[0.3em] uppercase text-[#E8C97A]">Masonry Gallery</p>
          <h1 className="mt-3 font-display text-4xl md:text-6xl text-white font-semibold">Craft, in pictures & motion.</h1>
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
            {list.map((g, i) => {
              const isVideo = "type" in g && g.type === "video";
              const displayImg = isVideo && "poster" in g && g.poster ? g.poster : g.src;

              return (
                <Reveal key={g.src + i} className="mb-5 break-inside-avoid">
                  <button onClick={() => setActiveItem(g)} className="block w-full rounded-3xl overflow-hidden img-zoom lux-card relative group text-left">
                    <img src={displayImg} alt={g.title} loading="lazy" className="w-full object-cover" />
                    {isVideo && (
                      <div className="absolute inset-0 grid place-items-center bg-black/25 group-hover:bg-black/40 transition-colors">
                        <span className="w-14 h-14 rounded-full bg-gradient-to-br from-[#A8822E] to-[#E8C97A] text-[#060f24] grid place-items-center shadow-lg group-hover:scale-110 transition-transform">
                          <Play size={24} fill="currentColor" className="ml-1" />
                        </span>
                      </div>
                    )}
                    <span className="absolute bottom-4 left-4 right-4 glass rounded-2xl px-4 py-2.5 text-[13px] font-semibold text-[#0A1A3C] flex justify-between items-center">
                      <span>{g.title}</span>
                      <span className="text-[#A8822E] text-[11px] tracking-widest uppercase">{isVideo ? "Video" : g.cat}</span>
                    </span>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
      {activeItem && (
        <div onClick={() => setActiveItem(null)} className="fixed inset-0 z-[90] bg-[#060f24]/92 backdrop-blur grid place-items-center p-4 sm:p-6 cursor-zoom-out">
          <button className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white grid place-items-center hover:bg-white/20 transition-colors z-10"><X size={20} /></button>
          {"type" in activeItem && activeItem.type === "video" ? (
            <div onClick={(e) => e.stopPropagation()} className="cursor-default max-w-md w-full bg-black rounded-3xl overflow-hidden border border-[#C9A24B]/40 shadow-2xl">
              <video
                src={activeItem.src}
                controls
                autoPlay
                playsInline
                poster={"poster" in activeItem ? activeItem.poster : undefined}
                className="w-full max-h-[82vh] object-contain bg-black block"
              />
              <div className="p-4 bg-[#0A1A3C] text-center border-t border-[#C9A24B]/20">
                <p className="text-white font-medium text-sm">{activeItem.title}</p>
                <p className="text-[#E8C97A] text-xs uppercase tracking-wider mt-1">Live Factory Video • With Sound</p>
              </div>
            </div>
          ) : (
            <img src={activeItem.src} alt={activeItem.title} className="max-h-[85vh] max-w-full rounded-3xl border border-[#C9A24B]/40 shadow-2xl" />
          )}
        </div>
      )}
    </div>
  );
}
