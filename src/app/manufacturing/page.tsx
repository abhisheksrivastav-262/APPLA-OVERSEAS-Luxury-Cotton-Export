import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { IMAGES } from "@/data/site";

export const metadata = { title: "Manufacturing | APPLA OVERSEAS", description: "Yarn to export dispatch – inside APPLA's cotton bedding factory." };

const STEPS = [
  { t: "Yarn Selection", d: "Long-staple 60s cotton, lot-tested for strength & evenness.", img: IMAGES.cottonFold },
  { t: "Weaving", d: "200–500TC percale, sateen & dobby on precision looms.", img: IMAGES.fabric },
  { t: "Dyeing", d: "Low-liquor reactive dyeing, ΔE-controlled shade bands.", img: IMAGES.fabricColor },
  { t: "Printing", d: "Rotary & digital prints, colour-fast to wash grade 4+.", img: IMAGES.tshirts },
  { t: "Stitching", d: "12–14 SPI seams, French hems, needle detection.", img: IMAGES.sewing },
  { t: "Quality Inspection", d: "4-point fabric check + GSM, shrinkage & fastness lab.", img: IMAGES.warehouse },
  { t: "Packaging", d: "Vacuum + insert cards, barcoded export cartons.", img: IMAGES.warehouseBoxes },
  { t: "Export Dispatch", d: "Fumigated pallets to Nhava Sheva / Mundra, 40HQ tracked.", img: IMAGES.containersAerial },
];

export default function Manufacturing() {
  return (
    <div className="pt-28">
      <section className="relative py-16 overflow-hidden">
        <img src={IMAGES.sewing} alt="Manufacturing" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#060f24]/80" />
        <div className="relative max-w-7xl mx-auto px-6">
          <p className="text-[12px] tracking-[0.3em] uppercase text-[#E8C97A]">Yarn → Container</p>
          <h1 className="mt-3 font-display text-4xl md:text-6xl text-white font-semibold">Manufacturing Excellence</h1>
          <p className="mt-3 text-white/65 max-w-2xl">Eight controlled stages. One promise: every piece that ships feels identical to the approved sample.</p>
        </div>
      </section>
      <section className="py-20 bg-[#FAF8F3]">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading eyebrow="Timeline" title="Inside our factory" />
          <div className="space-y-6">
            {STEPS.map((s, i) => (
              <Reveal key={s.t} delay={0.05}>
                <div className={`grid md:grid-cols-2 gap-0 rounded-[28px] overflow-hidden bg-white lux-card ${i % 2 ? "md:[direction:rtl]" : ""}`}>
                  <div className="aspect-square"><img src={s.img} alt={s.t} className="w-full h-full object-cover" loading="lazy" /></div>
                  <div className="p-8 md:p-12 flex flex-col justify-center [direction:ltr]">
                    <span className="w-11 h-11 rounded-2xl grid place-items-center bg-[#0A1A3C] text-[#E8C97A] font-display font-bold text-lg">0{i + 1}</span>
                    <h3 className="mt-4 font-display text-2xl md:text-3xl text-[#0A1A3C] font-semibold">{s.t}</h3>
                    <p className="mt-2 text-[#0A1A3C]/65">{s.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/export" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0A1A3C] text-[#E8C97A] font-semibold">Next: Export Capabilities <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
