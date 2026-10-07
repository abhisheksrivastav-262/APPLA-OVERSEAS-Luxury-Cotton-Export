import Link from "next/link";
import { ArrowRight, Crown, BedDouble, Layers, ShieldCheck, Shirt } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { GroupCard } from "@/components/GroupCard";
import { GROUPS, SITE } from "@/data/site";

export const metadata = { title: "Wovica — Premium Home Textile Brand | APPLA OVERSEAS", description: "Introducing Wovica – our premium home textile range: bedsheets, comforters, protectors and bedcovers crafted for international markets." };

export default function WovicaPage() {
  const range = GROUPS;
  return (
    <div className="pt-28">
      <section className="relative py-20 overflow-hidden bg-[#060f24]">
        <div className="absolute inset-0" style={{ background: "radial-gradient(800px 300px at 50% 0%, #C9A24B55, transparent), radial-gradient(600px 260px at 10% 50%, #1A357366, transparent), radial-gradient(600px 260px at 90% 60%, #1A357355, transparent)" }} />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-dark border border-[#C9A24B]/50 text-[12px] tracking-[0.3em] uppercase text-[#E8C97A]"><Crown size={14} /> Flagship Brand</span>
            <img src="/wovica-logo.jpeg" alt="Wovica flagship brand logo" className="mx-auto w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-4 border-[#C9A24B]/60 shadow-[0_0_60px_-10px_rgba(201,162,75,0.7)] bg-white" />
            <p className="mt-6 font-display font-bold tracking-[0.25em] text-5xl md:text-7xl gold-text">WOVICA</p>
            <h1 className="mt-4 font-display text-2xl md:text-4xl text-white font-semibold">Introducing Wovica – Our Premium Home Textile Range</h1>
            <p className="mt-4 text-white/65 max-w-2xl mx-auto">Appla Overseas (parent manufacturing company) ka flagship premium brand — bedsheets, comforters, protectors aur bedcovers, international markets ke liye crafted.</p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 bg-[#FAF8F3]">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal className="rounded-[30px] bg-white lux-card p-8 md:p-12 text-center">
            <p className="text-[11px] tracking-[0.3em] uppercase text-[#A8822E] font-semibold">Parent • Flagship</p>
            <p className="mt-4 font-display text-xl md:text-2xl text-[#0A1A3C] leading-relaxed">“{SITE.brandQuote}”</p>
            <p className="mt-5 text-[13px] tracking-[0.2em] uppercase text-[#0A1A3C]/50">Appla Overseas • Parent Company — Wovica • Flagship Brand</p>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading eyebrow="The Range" title="Wovica collections" sub="Bedsheet, comforter set, protector aur bedcover — high-quality range ek jagah." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[[BedDouble, "Printed Bedsheets", "100% pure cotton floral prints with contrast borders."], [Layers, "Satin Bedsheets", "Premium quality satin — chocolate, navy, grey & charcoal."], [ShieldCheck, "Fitted Bedsheets", "Deep-pocket solid fitted sheets with full elastic."], [Shirt, "Protectors", "AquaShield white & grey waterproof mattress protectors."], [Layers, "Comforter 4 Pcs Sets", "Reversible comforters — navy, olive & terracotta."]].map(([Icon, t, d]: any, i: number) => (
              <Reveal key={t} delay={i * 0.07}>
                <div className="rounded-[26px] bg-[#FAF8F3] border border-[#C9A24B]/25 p-7 h-full text-center">
                  <div className="mx-auto w-14 h-14 rounded-2xl grid place-items-center bg-[#0A1A3C] text-[#E8C97A]"><Icon size={24} /></div>
                  <h3 className="mt-4 font-display text-lg text-[#0A1A3C] font-semibold">{t}</h3>
                  <p className="mt-1.5 text-[13.5px] text-[#0A1A3C]/60">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading eyebrow="Shop Wovica" title="4 ranges, 15 colours" sub="Har range me photos ek line me — colour chuno, Buy Now dabao." />
          <div className="grid md:grid-cols-2 gap-6">
            {range.map((p) => <Reveal key={p.slug}><GroupCard g={p} /></Reveal>)}
          </div>
          <div className="text-center mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/products" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0A1A3C] text-[#E8C97A] font-semibold">Full Catalog <ArrowRight size={18} /></Link>
            <Link href="/quote" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#A8822E] to-[#E8C97A] text-[#060f24] font-semibold">Bulk Inquiry</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
