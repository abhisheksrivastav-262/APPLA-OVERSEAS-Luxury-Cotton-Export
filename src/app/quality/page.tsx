import { ShieldCheck, FlaskConical, Ruler, Palette, BedDouble, Award, ClipboardCheck } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { IMAGES, QC_STEPS } from "@/data/site";

export const metadata = { title: "Quality | APPLA OVERSEAS", description: "100% cotton assurance, lab testing, ISO practices & hotel standards." };

export default function Quality() {
  return (
    <div className="pt-28">
      <section className="relative py-16 overflow-hidden">
        <img src={IMAGES.fabricColor} alt="Quality lab" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#060f24]/82" />
        <div className="relative max-w-7xl mx-auto px-6">
          <p className="text-[12px] tracking-[0.3em] uppercase text-[#E8C97A]">Lab-Verified Luxury</p>
          <h1 className="mt-3 font-display text-4xl md:text-6xl text-white font-semibold">Quality you can measure.</h1>
          <p className="mt-3 text-white/65 max-w-2xl">GSM, thread count, colour fastness, shrinkage & stitch density — checked on every lot, not just sampling day.</p>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading eyebrow="Assurance" title="Eight checks before dispatch" />
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
            {[
              [ShieldCheck, "100% Cotton Assurance", "Fibre + yarn verification, no hidden blends."],
              [Ruler, "Stitch Quality", "12–14 SPI, reinforced hems, needle detection."],
              [FlaskConical, "Fabric Testing", "GSM, tensile & pilling (grade 4+) per lot."],
              [Palette, "Colour Fastness", "Wash / rub / light fastness, ΔE shade bands."],
              [BedDouble, "Shrinkage Control", "Pre-shrunk, <3% after 5 washes."],
              [Award, "ISO Practices", "Documented QMS, batch traceability."],
              [FlaskConical, "OEKO-TEX Style", "Restricted-substance compliant dyes on request."],
              [ShieldCheck, "Hotel Standards", "200+ commercial washes without pilling."],
            ].map(([Icon, t, d]: any, i: number) => (
              <Reveal key={t} delay={(i % 4) * 0.07}>
                <div className="rounded-[24px] bg-[#FAF8F3] border border-[#C9A24B]/25 p-7 h-full hover:shadow-xl hover:-translate-y-1 transition-all">
                  <Icon size={24} className="text-[#A8822E]" />
                  <h3 className="mt-3 font-semibold text-[#0A1A3C] text-[15.5px]">{t}</h3>
                  <p className="mt-1.5 text-[13.5px] text-[#0A1A3C]/60">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 rounded-[28px] overflow-hidden relative">
            <img src={IMAGES.luxuryRoom} alt="Hotel quality" className="aspect-square w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#060f24]/90 to-transparent flex items-center">
              <p className="px-8 md:px-12 font-display text-2xl md:text-3xl text-white max-w-xl">“If it wouldn&apos;t pass a 5-star laundry, it doesn&apos;t ship.” — QC Head</p>
            </div>
          </Reveal>

          <div className="mt-12">
            <SectionHeading eyebrow="Strict QC Process" title="In-line se final packing tak" />
            <div className="grid md:grid-cols-2 gap-5">
              {QC_STEPS.map((s, i) => (
                <Reveal key={s.t} delay={(i % 2) * 0.08}>
                  <div className="rounded-[24px] bg-white lux-card p-7 flex gap-4 h-full border border-[#C9A24B]/25">
                    <span className="w-11 h-11 shrink-0 rounded-2xl grid place-items-center bg-[#0A1A3C] text-[#E8C97A] font-display font-bold">{i + 1}</span>
                    <div>
                      <h3 className="font-display text-xl text-[#0A1A3C] font-semibold flex items-center gap-2">{s.t} <ClipboardCheck size={17} className="text-[#A8822E]" /></h3>
                      <p className="mt-1.5 text-[14px] text-[#0A1A3C]/60">{s.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/certifications" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#A8822E] to-[#E8C97A] text-[#060f24] font-semibold">View Certifications <ArrowRight size={18} /></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
