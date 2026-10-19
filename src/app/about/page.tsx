import Link from "next/link";
import { ArrowRight, Target, Eye, Factory, Users, Leaf, Package } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Stats } from "@/components/Stats";
import { WovicaMark } from "@/components/ProductCard";
import { IMAGES, SITE } from "@/data/site";

export const metadata = { title: "About Us | APPLA OVERSEAS", description: "About APPLA OVERSEAS – premium cotton textile manufacturer & exporter from Muzaffarnagar, India." };

export default function About() {
  return (
    <div className="pt-28">
      <section className="relative py-20 overflow-hidden">
        <img src={IMAGES.fabric} alt="About APPLA" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#060f24]/78" />
        <div className="relative max-w-7xl mx-auto px-6">
          <Reveal>
            <p className="text-[12px] tracking-[0.3em] uppercase text-[#E8C97A]">About Us • Est. 2006</p>
            <h1 className="mt-3 font-display text-4xl md:text-6xl text-white font-semibold max-w-3xl">The house behind the world&apos;s softest cotton.</h1>
            <p className="mt-4 text-white/65 max-w-2xl">Established in 2006 in Muzaffarnagar by Company Owners & Founders <strong className="text-white">Ravi Singhwal</strong> and <strong className="text-white">Ravindra Singhwal</strong> — 20+ years of textile-sector experience behind APPLA OVERSEAS, parent company of flagship premium brand <span className="text-[#E8C97A] font-semibold">Wovica</span>.</p>
            <div className="mt-6 flex items-center gap-3">
              <img src="/wovica-logo.jpeg" alt="Wovica logo" className="w-14 h-14 rounded-full object-cover border-2 border-[#C9A24B]/60 shadow-lg bg-white" />
              <div><WovicaMark /><p className="mt-1 text-[12px] tracking-[0.2em] uppercase text-white/50">Flagship Premium Brand</p></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-14 bg-white border-b border-[#C9A24B]/15">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[["2006", "Company Established"], ["20+", "Years in Textiles"], ["100K+", "Units / Month"], ["25+", "Countries Served"]].map(([v, l]) => (
            <Reveal key={l}>
              <p className="font-display text-3xl md:text-4xl font-bold gold-text">{v}</p>
              <p className="mt-1 text-[11px] tracking-[0.2em] uppercase text-[#0A1A3C]/55">{l}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-[42px] text-[#0A1A3C] font-semibold leading-tight">Manufacturing excellence, <span className="gold-text">not trading.</span></h2>
            <p className="mt-5 text-[#0A1A3C]/65 leading-relaxed">We own our stitching, finishing and packing lines. Every lot is GSM-verified, needle-checked and shade-banded before it leaves for Nhava Sheva or Mundra. Monthly capacity exceeds 100,000 units across 500+ designs.</p>
            <div className="mt-7 grid sm:grid-cols-2 gap-4">
              {[[Factory, "Infrastructure", "Cutting, stitching, finishing, vacuum packing"], [Users, "Skilled Workforce", "120+ artisans, QC engineers & merchandisers"], [Package, "Production Capacity", "100K+ units / month, 40HQ in 35 days"], [Leaf, "Sustainability", "BCI cotton, low-liquor dyeing, plastic-lite packs"]].map(([Icon, t, d]: any) => (
                <div key={t} className="rounded-2xl bg-white border border-[#C9A24B]/20 p-5">
                  <Icon size={22} className="text-[#A8822E]" />
                  <p className="mt-2 font-semibold text-[#0A1A3C]">{t}</p>
                  <p className="text-[13.5px] text-[#0A1A3C]/60">{d}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <img src={IMAGES.sewing} alt="Factory" className="rounded-3xl aspect-square w-full object-cover lux-card" loading="lazy" />
              <img src={IMAGES.fabricColor} alt="Textile" className="rounded-3xl aspect-square w-full object-cover mt-6 sm:mt-8 lux-card" loading="lazy" />
              <img src={IMAGES.warehouse} alt="Warehouse" className="rounded-3xl aspect-square w-full object-cover lux-card" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Leadership & Founders Section */}
      <section className="py-20 bg-white border-b border-[#C9A24B]/15">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading eyebrow="Leadership" title="Company Owners & Founders" sub="The visionaries and textile industry pioneers behind APPLA OVERSEAS & Wovica." />
          <div className="mt-12 grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {SITE.founders.map((founder, idx) => (
              <Reveal key={founder.name} delay={idx * 0.1}>
                <div className="rounded-[28px] bg-[#FAF8F3] border border-[#C9A24B]/30 p-8 text-center lux-card relative overflow-hidden group hover:border-[#C9A24B] transition-all">
                  <div className="mx-auto w-20 h-20 rounded-full bg-[#0A1A3C] border-2 border-[#C9A24B] grid place-items-center text-[#E8C97A] font-display text-2xl font-bold shadow-md group-hover:scale-105 transition-transform">
                    {founder.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <h3 className="mt-5 font-display text-2xl text-[#0A1A3C] font-semibold">{founder.name}</h3>
                  <p className="mt-1 text-[13px] tracking-[0.2em] uppercase font-semibold text-[#A8822E]">{founder.role}</p>
                  <p className="mt-3 text-[14px] text-[#0A1A3C]/70 leading-relaxed">
                    Driving manufacturing excellence, export relations, and pioneering quality cotton bedding for international and domestic markets since 2006.
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          {[[Target, "Our Mission", "To make Indian cotton the world's most trusted bedding — honest GSM, fair pricing, on-time containers."], [Eye, "Our Vision", "To be the preferred OEM atelier for 200+ global bedding brands by 2030, with fully traceable cotton."]].map(([Icon, t, d]: any, i: number) => (
            <Reveal key={t} delay={i * 0.1}>
              <div className="rounded-[28px] p-9 bg-[#0A1A3C] text-white border border-[#C9A24B]/25 h-full">
                <Icon size={30} className="text-[#E8C97A]" />
                <h3 className="mt-4 font-display text-2xl font-semibold">{t}</h3>
                <p className="mt-2 text-white/65">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16 bg-[#060f24]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading dark eyebrow="Scale" title="Numbers that ship" />
          <Stats />
          <div className="text-center mt-10">
            <Link href="/manufacturing" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#A8822E] to-[#E8C97A] text-[#060f24] font-semibold">See Manufacturing <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
