import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard, VovikaMark } from "@/components/ProductCard";
import { BEDSHEET_TYPES, PRODUCTS, IMAGES, SITE } from "@/data/site";

export const metadata = { title: "Types of Bedsheets | Vovika – APPLA OVERSEAS", description: "Premium pure cotton, satin, percale, combed cotton, silk & microfiber bedsheets – manufacturer & exporter." };

export default function BedsheetsPage() {
  const sheets = PRODUCTS.filter((p) => p.category === "Bedsheets");
  return (
    <div className="pt-28">
      <section className="relative py-16 overflow-hidden">
        <img src={IMAGES.heroBed2} alt="Types of bedsheets" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#060f24]/80" />
        <div className="relative max-w-7xl mx-auto px-6">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-[#C9A24B]/40 text-[#E8C97A] text-[12px] tracking-[0.25em] uppercase"><VovikaMark small /> Bedsheet Guide</span>
            <h1 className="mt-4 font-display text-4xl md:text-6xl text-white font-semibold">Types of Bedsheets</h1>
            <p className="mt-3 text-white/65 max-w-2xl">Appla Overseas ek agrani home textile manufacturer aur exporter hai — har weave, har budget ke liye bedsheet.</p>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading eyebrow="Weave Guide" title="6 weaves, one factory" sub="Feel, thread-count aur best-use — buyer guide ke saath." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BEDSHEET_TYPES.map((b, i) => (
              <Reveal key={b.name} delay={(i % 3) * 0.07}>
                <div className="rounded-[24px] bg-[#FAF8F3] border border-[#C9A24B]/25 p-7 h-full hover:shadow-xl hover:-translate-y-1 transition-all">
                  <p className="font-display text-xl text-[#0A1A3C] font-semibold">{b.name}</p>
                  <div className="mt-3 space-y-1.5 text-[13.5px]">
                    <p className="flex gap-2 text-[#0A1A3C]/70"><Check size={15} className="text-[#A8822E] shrink-0 mt-0.5" /><span><b>Weave:</b> {b.weave}</span></p>
                    <p className="flex gap-2 text-[#0A1A3C]/70"><Check size={15} className="text-[#A8822E] shrink-0 mt-0.5" /><span><b>Feel:</b> {b.feel}</span></p>
                    <p className="flex gap-2 text-[#0A1A3C]/70"><Check size={15} className="text-[#A8822E] shrink-0 mt-0.5" /><span><b>Best for:</b> {b.best}</span></p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading eyebrow="Shop" title="All bedsheet products" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sheets.map((p) => <Reveal key={p.slug}><ProductCard p={p} /></Reveal>)}
          </div>
          <div className="text-center mt-10">
            <Link href={`/quote`} className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0A1A3C] text-[#E8C97A] font-semibold">Bulk Inquiry for {SITE.brand} Bedsheets <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
