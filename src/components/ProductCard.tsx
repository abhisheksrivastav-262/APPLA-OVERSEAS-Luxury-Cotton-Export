import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/data/site";
import { BuyButton } from "./BuyModal";

export function VovikaMark({ small = false }: { small?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full bg-[#060f24] border border-[#C9A24B]/50 ${small ? "px-2.5 py-1" : "px-3.5 py-1.5"}`}>
      <span className={`font-display font-bold tracking-[0.2em] gold-text ${small ? "text-[10px]" : "text-[12px]"}`}>VOVIKA</span>
    </span>
  );
}

export function ProductCard({ p }: { p: Product }) {
  return (
    <div className="group rounded-[26px] overflow-hidden bg-white lux-card hover:-translate-y-2 hover:shadow-[0_30px_70px_-25px_rgba(10,26,60,0.45)] transition-all duration-500">
      <div className="relative h-64 overflow-hidden img-zoom">
        <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060f24]/55 via-transparent to-transparent" />
        {p.badge && <span className="absolute top-4 left-4 max-w-[60%] px-3 py-1.5 rounded-full text-[10px] font-bold tracking-[0.08em] uppercase bg-gradient-to-r from-[#A8822E] to-[#E8C97A] text-[#060f24] shadow-lg leading-tight">{p.badge}</span>}
        <span className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-[11px] font-semibold glass text-[#0A1A3C] border border-white/40">Export Quality</span>
        <span className="absolute bottom-3 left-4"><VovikaMark small /></span>
      </div>
      <div className="p-6">
        <p className="text-[11px] tracking-[0.25em] uppercase text-[#A8822E] font-semibold">{p.category}</p>
        <h3 className="mt-2 font-display text-[19px] font-semibold text-[#0A1A3C] leading-snug">{p.title}</h3>
        <div className="mt-4 grid grid-cols-2 gap-2 text-[12.5px]">
          {[["Material", p.material], ["Sizes", p.sizes], ["GSM / TC", p.gsm], ["MOQ", p.moq]].map(([k, v]) => (
            <div key={k} className="rounded-xl bg-[#FAF8F3] border border-[#C9A24B]/15 px-3 py-2">
              <p className="text-[#A8822E] text-[10px] tracking-[0.15em] uppercase font-semibold">{k}</p>
              <p className="text-[#0A1A3C] font-medium truncate" title={v}>{v}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 grid gap-2">
          <BuyButton product={p.title} />
          <Link href={`/contact?product=${encodeURIComponent(p.title)}`} className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-[#0A1A3C] text-[#E8C97A] text-sm font-semibold hover:bg-[#10265a] transition-colors">
            Send Inquiry <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
