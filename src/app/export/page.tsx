import Link from "next/link";
import { ArrowRight, Globe2, Tags, Package, Ship, FileCheck, Container } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { IMAGES, COUNTRIES } from "@/data/site";

export const metadata = { title: "Export | APPLA OVERSEAS", description: "Worldwide export – OEM, private label, bulk containers & documentation." };

export default function ExportPage() {
  return (
    <div className="pt-28">
      <section className="relative py-20 overflow-hidden">
        <img src={IMAGES.containersAerial} alt="Export" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#060f24]/80" />
        <div className="relative max-w-7xl mx-auto px-6">
          <Reveal>
            <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-[#C9A24B]/40 text-[#E8C97A] text-[12px] tracking-[0.25em] uppercase"><Globe2 size={14} /> FOB • CIF • DDP</p>
            <h1 className="mt-4 font-display text-4xl md:text-6xl text-white font-semibold max-w-3xl">Worldwide export, <span className="gold-text">without friction.</span></h1>
            <p className="mt-4 text-white/65 max-w-2xl">OEM manufacturing, private label, bulk containers and documentation — handled by an in-house export desk.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact" className="px-7 py-4 rounded-full bg-gradient-to-r from-[#A8822E] to-[#E8C97A] text-[#060f24] font-semibold">Request Quote <ArrowRight size={17} className="inline" /></Link>
              <Link href="/products" className="px-7 py-4 rounded-full border border-white/30 text-white font-semibold">Browse Catalog</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading eyebrow="Services" title="Export services, end to end" />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              [Tags, "OEM Manufacturing", "Your tech pack, fabric, GSM & sizes. Sampling in 7–10 days."],
              [Package, "Private Label", "Woven labels, hangtags, insert cards & retail-ready polybags."],
              [Container, "Bulk & Containers", "Mixed-container loading plans to minimise landed cost."],
              [Ship, "Global Logistics", "Nhava Sheva / Mundra → your port. Sea + air options, insured."],
              [FileCheck, "Documentation", "Invoice, packing list, COO, fumigation, BL — bank-ready sets."],
              [Globe2, "25+ Countries", "USA, UK, EU, GCC, Australia with lane-wise transit planning."],
            ].map(([Icon, t, d]: any, i: number) => (
              <Reveal key={t} delay={(i % 3) * 0.08}>
                <div className="rounded-[26px] bg-[#FAF8F3] border border-[#C9A24B]/25 p-8 h-full hover:bg-white hover:shadow-xl transition-all">
                  <Icon size={26} className="text-[#A8822E]" />
                  <h3 className="mt-4 font-display text-xl text-[#0A1A3C] font-semibold">{t}</h3>
                  <p className="mt-2 text-[14px] text-[#0A1A3C]/60">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#060f24] grain relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="text-[12px] tracking-[0.3em] uppercase text-[#E8C97A]">Countries Served</p>
            <h2 className="mt-3 font-display text-3xl md:text-[44px] text-white font-semibold">Glowing routes from India.</h2>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {COUNTRIES.map((c) => <span key={c} className="px-4 py-2 rounded-full bg-white/5 border border-[#C9A24B]/30 text-[#E8C97A] text-[13px]">{c}</span>)}
            </div>
            <p className="mt-6 text-white/55 text-[14px]">Indicative transit: USA East 28–32 days • UK/EU 22–26 • UAE 7–10 • Australia 20–24.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-[30px] overflow-hidden border border-[#C9A24B]/30">
              <img src={IMAGES.containers} alt="Containers" className="aspect-square w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
