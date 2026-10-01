import Link from "next/link";
import { ArrowRight, Award, ClipboardCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CERTIFICATIONS, QC_STEPS, IMAGES } from "@/data/site";

export const metadata = { title: "Certifications & Quality Control | APPLA OVERSEAS", description: "OEKO-TEX Standard 100, GOTS, GRS, ISO 9001, BCI compliance with strict in-line and final packing QC." };

export default function CertificationsPage() {
  return (
    <div className="pt-28">
      <section className="relative py-16 overflow-hidden">
        <img src={IMAGES.fabricColor} alt="Certifications" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#060f24]/82" />
        <div className="relative max-w-7xl mx-auto px-6">
          <Reveal>
            <p className="text-[12px] tracking-[0.3em] uppercase text-[#E8C97A]">Export ka sabse bada hathiyar</p>
            <h1 className="mt-3 font-display text-4xl md:text-6xl text-white font-semibold">Quality & Certifications</h1>
            <p className="mt-3 text-white/65 max-w-2xl">Certificates with big logos — proof that Vovika textiles meet world standards.</p>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading eyebrow="Compliance" title="Certified for global shelves" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {CERTIFICATIONS.map((c, i) => (
              <Reveal key={c.short} delay={(i % 5) * 0.06}>
                <div className="rounded-[26px] bg-[#0A1A3C] border-2 border-[#C9A24B]/50 p-7 text-center h-full hover:-translate-y-1.5 hover:shadow-[0_25px_50px_-20px_rgba(201,162,75,0.5)] transition-all">
                  <div className="mx-auto w-20 h-20 rounded-full grid place-items-center bg-gradient-to-br from-[#A8822E] to-[#E8C97A] shadow-lg">
                    <Award size={34} className="text-[#060f24]" />
                  </div>
                  <p className="mt-4 font-display font-bold text-lg gold-text">{c.short}</p>
                  <p className="mt-1 text-[13px] font-semibold text-white">{c.full}</p>
                  <p className="mt-2 text-[12.5px] text-white/60 leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#FAF8F3]">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading eyebrow="Strict QC" title="Har product, 4-stage quality control" sub="In-line checking se final packing checking tak — step-by-step process." />
          <div className="grid md:grid-cols-2 gap-5">
            {QC_STEPS.map((s, i) => (
              <Reveal key={s.t} delay={(i % 2) * 0.08}>
                <div className="rounded-[24px] bg-white lux-card p-7 flex gap-4 h-full">
                  <span className="w-11 h-11 shrink-0 rounded-2xl grid place-items-center bg-[#0A1A3C] text-[#E8C97A]"><ClipboardCheck size={20} /></span>
                  <div>
                    <p className="text-[11px] tracking-[0.25em] uppercase text-[#A8822E] font-semibold">Step {i + 1}</p>
                    <h3 className="font-display text-xl text-[#0A1A3C] font-semibold">{s.t}</h3>
                    <p className="mt-1.5 text-[14px] text-[#0A1A3C]/60">{s.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/quality" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0A1A3C] text-[#E8C97A] font-semibold">Full Quality Process <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
