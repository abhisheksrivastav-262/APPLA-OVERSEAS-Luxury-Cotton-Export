"use client";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { GroupCard } from "@/components/GroupCard";
import { CATEGORIES, GROUPS } from "@/data/site";

export default function ProductsPage() {
  const [cat, setCat] = useState<string>("All");
  const [q, setQ] = useState("");
  const list = useMemo(() => GROUPS.filter((p) => (cat === "All" || p.category === cat) && (p.title + p.material + p.desc + p.variants.map((v) => v.name).join(" ")).toLowerCase().includes(q.toLowerCase())), [cat, q]);

  return (
    <div className="pt-28">
      <section className="relative py-16 overflow-hidden bg-[#060f24]">
        <div className="absolute inset-0" style={{ background: "radial-gradient(700px 260px at 20% 0%, #C9A24B44, transparent), radial-gradient(600px 240px at 85% 40%, #1A357366, transparent)" }} />
        <div className="relative max-w-7xl mx-auto px-6">
          <p className="text-[12px] tracking-[0.3em] uppercase text-[#E8C97A]">Catalog • 12 Exclusive Designs</p>
          <h1 className="mt-3 font-display text-4xl md:text-6xl text-white font-semibold">Product Collection</h1>
          <p className="mt-3 text-white/65 max-w-2xl">Filter by category. Every card shows material, sizes, GSM and MOQ — click inquiry to get a 24-hr quote.</p>
        </div>
      </section>

      <section className="py-14 bg-[#FAF8F3] min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((c) => (
                  <button key={c} onClick={() => setCat(c)} className={`px-5 py-2.5 rounded-full text-[13.5px] font-semibold border transition-all ${cat === c ? "bg-[#0A1A3C] text-[#E8C97A] border-[#0A1A3C]" : "bg-white text-[#0A1A3C]/70 border-[#C9A24B]/30 hover:border-[#C9A24B]"}`}>{c}</button>
                ))}
              </div>
              <div className="relative w-full lg:w-80">
                <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A8822E]" />
                <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search cotton, hotel, quilt..." className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-[#C9A24B]/30 text-[14px] outline-none focus:border-[#A8822E]" />
              </div>
            </div>
          </Reveal>
          <p className="mt-6 text-[13px] text-[#0A1A3C]/55">{list.length} ranges • {cat} • 15 colours, zero repeats</p>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {list.map((p) => <Reveal key={p.slug}><GroupCard g={p} /></Reveal>)}
          </div>
          {list.length === 0 && <p className="text-center py-20 text-[#0A1A3C]/60">No matches. Try “cotton” or “hotel”.</p>}
        </div>
      </section>
    </div>
  );
}
