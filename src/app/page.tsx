"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Globe2, Factory, Leaf, ShieldCheck, Star, ChevronDown, Award, Truck, Scissors } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Stats } from "@/components/Stats";
import { ProductCard, VovikaMark } from "@/components/ProductCard";
import { HeroSlider } from "@/components/HeroSlider";
import { VideoSection } from "@/components/VideoSection";
import { IMAGES, PRODUCTS, COUNTRIES, TESTIMONIALS, FAQS, SITE, CERTIFICATIONS } from "@/data/site";

const fadeUp = { initial: { opacity: 0, y: 34 }, animate: { opacity: 1, y: 0 } };

export default function Home() {
  const sliderItems = [
    "signature-400tc-white-bedsheet",
    "vovika-satin-bedsheet",
    "down-comforter-500tc",
    "waterproof-mattress-protector",
    "vovika-jacquard-bedcover",
  ].map((s) => PRODUCTS.find((p) => p.slug === s)!).filter(Boolean);
  const featured = [
    "vovika-pure-cotton-bedsheet",
    "down-comforter-500tc",
    "waterproof-mattress-protector",
    "vovika-jacquard-bedcover",
    "hotel-stripe-bedsheet",
    "terry-pillow-protector-pair",
    "vovika-percale-bedsheet",
    "oem-private-label",
  ].map((s) => PRODUCTS.find((p) => p.slug === s)!).filter(Boolean);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  return (
    <div className="bg-white">
      {/* 1. HERO */}
      <section className="relative min-h-[100svh] flex items-center hero-vignette overflow-hidden">
        <img src={IMAGES.hero} alt="Luxury cotton bedroom" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 pt-32 sm:pt-36 pb-14 w-full grid lg:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeUp} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="max-w-3xl">
            <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-[#C9A24B]/40 text-[#E8C97A] text-[12px] tracking-[0.25em] uppercase">
              <BadgeCheck size={15} /> Appla Overseas • Leading Home Textile Manufacturer & Exporter
            </p>
            <h1 className="mt-6 font-display text-white text-[34px] sm:text-[42px] md:text-[60px] leading-[1.08] font-semibold text-balance">
              Premium Cotton Textile <span className="gold-text">Manufacturer</span> & Exporter
            </h1>
            <p className="mt-5 text-white/75 text-[15px] md:text-lg max-w-xl">Supplying Luxury Bedding Solutions Across Global Markets — bedsheets, comforters, protectors & hotel linen to 25+ countries.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/products" className="px-7 py-4 rounded-full bg-gradient-to-r from-[#A8822E] to-[#E8C97A] text-[#060f24] font-semibold text-[15px] shadow-[0_18px_45px_-12px_rgba(201,162,75,0.8)] hover:-translate-y-0.5 transition-transform flex items-center justify-center gap-2 min-h-[52px]">
                Explore Collection <ArrowRight size={18} />
              </Link>
              <Link href="/quote" className="px-7 py-4 rounded-full glass-dark border border-white/25 text-white font-semibold text-[15px] hover:bg-white/10 transition-colors text-center min-h-[52px]">
                Request a Quote
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-white/70 text-[13px]">
              {[["400TC Pure Cotton", "✓"], ["OEM Private Label", "✓"], ["25+ Countries", "✓"]].map(([t]) => (
                <span key={t} className="flex items-center gap-2"><span className="w-5 h-5 rounded-full grid place-items-center bg-[#C9A24B]/20 border border-[#C9A24B]/50 text-[#E8C97A] text-[11px]">✓</span>{t}</span>
              ))}
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}>
            <HeroSlider items={sliderItems} />
          </motion.div>
        </div>
      </section>

      {/* 2. TRUSTED STRIP */}
      <section className="bg-[#060f24] border-y border-[#C9A24B]/20">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap items-center justify-center md:justify-between gap-4 text-[13px] tracking-[0.2em] uppercase text-white/50">
          {["Hotel Grade", "100% Cotton", "OEM Ready", "Container Shipping", "ISO Practices"].map((t) => (
            <span key={t} className="flex items-center gap-2"><Star size={13} className="text-[#C9A24B]" />{t}</span>
          ))}
        </div>
      </section>

      {/* VOVIKA BRAND BAND */}
      <section className="bg-gradient-to-r from-[#060f24] via-[#0A1A3C] to-[#060f24] border-b border-[#C9A24B]/25">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-10 grid lg:grid-cols-[auto_1fr_auto] gap-6 items-center">
          <Reveal className="text-center lg:text-left">
            <p className="text-[11px] tracking-[0.3em] uppercase text-white/50">Introducing</p>
            <p className="font-display font-bold tracking-[0.2em] text-4xl sm:text-5xl gold-text">VOVIKA</p>
            <p className="mt-1 text-[12px] tracking-[0.2em] uppercase text-[#E8C97A]/80">Our Premium Home Textile Range</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-display text-[16px] sm:text-lg text-white/85 leading-relaxed text-center lg:text-left">“{SITE.brandQuote}”</p>
          </Reveal>
          <Reveal delay={0.15} className="text-center">
            <Link href="/vovika" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#A8822E] to-[#E8C97A] text-[#060f24] font-semibold text-[14px] min-h-[52px]">
              Explore Vovika <ArrowRight size={17} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 3. ABOUT */}
      <section className="py-20 md:py-28 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <img src={IMAGES.fabric} alt="Cotton fabric" className="rounded-[20px] sm:rounded-[26px] h-48 sm:h-72 w-full object-cover lux-card" loading="lazy" />
              <img src={IMAGES.sewing} alt="Stitching unit" className="rounded-[20px] sm:rounded-[26px] h-48 sm:h-72 w-full object-cover mt-6 sm:mt-8 lux-card" loading="lazy" />
              <div className="col-span-2 rounded-[20px] sm:rounded-[26px] overflow-hidden relative lux-card">
                <img src={IMAGES.hotel2} alt="Luxury hotel bedding" className="h-48 sm:h-56 w-full object-cover" loading="lazy" />
                <div className="absolute bottom-4 left-4 glass rounded-2xl px-5 py-3 border border-[#C9A24B]/30">
                  <p className="font-display text-2xl font-bold text-[#0A1A3C]">20+ Years</p>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-[#A8822E]">Since 2006 • Export Excellence</p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[12px] tracking-[0.3em] uppercase text-[#A8822E] font-semibold">About APPLA Overseas</p>
            <h2 className="mt-3 font-display text-3xl md:text-[46px] leading-tight text-[#0A1A3C] font-semibold">Muzaffarnagar craftsmanship, <span className="gold-text">world-class</span> bedding.</h2>
            <p className="mt-5 text-[#0A1A3C]/65 leading-relaxed">Since 2006, led by Ravindra Singhwal, APPLA OVERSEAS manufactures pure-cotton bedsheets, comforters, mattress & pillow protectors and complete hotel linen systems — engineered for importers, retailers and hospitality groups.</p>
            <div className="mt-7 grid sm:grid-cols-2 gap-4">
              {[[Factory, "In-house stitching", "Cut-to-pack under one roof"], [ShieldCheck, "Export QA lab", "4-point + GSM + fastness checks"], [Leaf, "Responsible cotton", "BCI & eco-dye options"], [Truck, "Global logistics", "FOB / CIF / DDP + documents"]].map(([Icon, t, d]: any) => (
                <div key={t as string} className="rounded-2xl bg-white border border-[#C9A24B]/20 p-5 hover:shadow-xl transition-shadow">
                  <Icon size={22} className="text-[#A8822E]" />
                  <p className="mt-2 font-semibold text-[#0A1A3C] text-[15px]">{t as string}</p>
                  <p className="text-[13.5px] text-[#0A1A3C]/60">{d as string}</p>
                </div>
              ))}
            </div>
            <Link href="/about" className="mt-7 inline-flex items-center gap-2 font-semibold text-[#0A1A3C] border-b-2 border-[#C9A24B] pb-1 hover:gap-3 transition-all">Our Story & Infrastructure <ArrowRight size={17} /></Link>
          </Reveal>
        </div>
      </section>

      {/* 4. PRODUCT SLIDER */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading eyebrow="Signature Collection" title="Luxury pieces global buyers reorder" sub="Export-tested bestsellers across bedsheets, comforters, protectors and hotel systems." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((p) => <Reveal key={p.slug}><ProductCard p={p} /></Reveal>)}
          </div>
          <div className="text-center mt-10">
            <Link href="/products" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0A1A3C] text-[#E8C97A] font-semibold hover:-translate-y-0.5 transition-transform">View All 20+ Products <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="py-20 md:py-28 bg-[#0A1A3C] relative overflow-hidden grain">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading dark eyebrow="Why Global Buyers Choose Us" title="Built for importers, retailers & hotel groups" sub="Consistent GSM, honest timelines and documentation that clears customs without drama." />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              [Award, "Hotel quality, retail finish", "300–500TC cotton, reinforced stitching, commercial-laundry safe."],
              [Scissors, "True OEM atelier", "Your tech pack → sampling in 7–10 days → bulk with your labels."],
              [Globe2, "Export without friction", "Fumigated pallets, barcoded cartons, COO, phytosanitary & BL support."],
            ].map(([Icon, t, d]: any, i: number) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="rounded-[28px] p-8 bg-white/[0.06] border border-[#C9A24B]/25 backdrop-blur hover:bg-white/[0.1] transition-colors h-full">
                  <div className="w-14 h-14 rounded-2xl grid place-items-center bg-gradient-to-br from-[#C9A24B] to-[#7a5f1e] text-[#060f24]"><Icon size={26} /></div>
                  <h3 className="mt-5 font-display text-xl text-white font-semibold">{t as string}</h3>
                  <p className="mt-2 text-white/60 text-[14.5px] leading-relaxed">{d as string}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. MANUFACTURING */}
      <section className="py-20 md:py-28 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="text-[12px] tracking-[0.3em] uppercase text-[#A8822E] font-semibold">Manufacturing Excellence</p>
            <h2 className="mt-3 font-display text-3xl md:text-[44px] text-[#0A1A3C] font-semibold leading-tight">Yarn to container, <span className="gold-text">obsessively controlled.</span></h2>
            <div className="mt-8 space-y-0">
              {["Yarn Selection – long-staple cotton only", "Weaving – 200–500TC precision looms", "Dyeing & Printing – reactive, colour-fast", "Stitching – 12–14 SPI luxury seams", "4-Stage QC – GSM, fastness, shrinkage", "Export Packing – vacuum + fumigated pallets"].map((s, i) => (
                <div key={s} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="w-9 h-9 rounded-full grid place-items-center bg-[#0A1A3C] text-[#E8C97A] text-[13px] font-bold shrink-0">{i + 1}</span>
                    {i < 5 && <span className="w-px flex-1 bg-[#C9A24B]/40 my-1" />}
                  </div>
                  <p className="pb-7 pt-1.5 font-medium text-[#0A1A3C]/85 text-[15px]">{s}</p>
                </div>
              ))}
            </div>
            <Link href="/manufacturing" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-[#0A1A3C] text-[#0A1A3C] font-semibold hover:bg-[#0A1A3C] hover:text-[#E8C97A] transition-colors">Inside Our Factory <ArrowRight size={17} /></Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative">
              <img src={IMAGES.cottonFold} alt="Cotton production" className="rounded-[30px] h-[560px] w-full object-cover lux-card" loading="lazy" />
              <div className="absolute -bottom-6 -left-4 md:-left-8 glass rounded-3xl px-7 py-5 border border-[#C9A24B]/30 shadow-2xl">
                <p className="font-display text-3xl font-bold text-[#0A1A3C]">100K+ units</p>
                <p className="text-[12px] tracking-[0.2em] uppercase text-[#A8822E]">Monthly Capacity</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. STATS */}
      <section className="py-16 bg-[#060f24] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(700px 260px at 50% 0%, #C9A24B66, transparent)" }} />
        <div className="relative max-w-7xl mx-auto px-6"><Stats /></div>
      </section>

      {/* 8. EXPORT MAP */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="text-[12px] tracking-[0.3em] uppercase text-[#A8822E] font-semibold">Export Worldwide</p>
            <h2 className="mt-3 font-display text-3xl md:text-[44px] text-[#0A1A3C] font-semibold">From Muzaffarnagar to <span className="gold-text">25+ countries.</span></h2>
            <p className="mt-4 text-[#0A1A3C]/65">FOB Nhava Sheva / Mundra, CIF to your port, DDP for retail chains. Complete documentation included.</p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {COUNTRIES.map((c) => (
                <span key={c} className="px-4 py-2 rounded-full bg-[#0A1A3C] text-[#E8C97A] text-[13px] font-medium border border-[#C9A24B]/30 hover:bg-[#10265a] transition-colors">{c}</span>
              ))}
            </div>
            <Link href="/export" className="mt-8 inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-[#A8822E] to-[#E8C97A] text-[#060f24] font-semibold">Export Capabilities <ArrowRight size={17} /></Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-[30px] overflow-hidden lux-card relative">
              <img src={IMAGES.containersAerial} alt="Export containers" className="h-[440px] w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060f24]/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 glass rounded-2xl p-5 border border-[#C9A24B]/30 flex items-center gap-4">
                <Globe2 className="text-[#0A1A3C]" size={30} />
                <div><p className="font-semibold text-[#0A1A3C] text-[15px]">40HQ in 25–35 days</p><p className="text-[13px] text-[#0A1A3C]/60">Fumigated • Barcoded • Insured</p></div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. HOTEL SHOWCASE */}
      <section className="py-20 md:py-28 bg-[#060f24] grain relative">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading dark eyebrow="Hotel Linen Showcase" title="Bedding guests photograph" sub="Crisp whites, stripe dobbies and duvet systems trusted by hospitality groups." />
          <div className="grid md:grid-cols-3 gap-6">
            {[IMAGES.hotel1, IMAGES.hotel2, IMAGES.hotelBed].map((src, i) => (
              <Reveal key={src} delay={i * 0.1}>
                <div className="rounded-[28px] overflow-hidden img-zoom border border-[#C9A24B]/25 h-80 relative group">
                  <img src={src} alt="Hotel bedding" className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060f24]/85 via-transparent to-transparent" />
                  <p className="absolute bottom-5 left-5 right-5 text-white font-display text-lg">{["Executive Suite Whites", "Signature Stripe Dobby", "Cloud Duvet System"][i]}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS STRIP */}
      <section className="py-16 bg-white border-y border-[#C9A24B]/20">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="flex flex-col md:flex-row md:items-center gap-6 justify-between">
            <div>
              <p className="text-[11.5px] font-semibold tracking-[0.3em] uppercase text-[#A8822E]">Certified Quality</p>
              <h2 className="mt-2 font-display text-2xl md:text-3xl text-[#0A1A3C] font-semibold">OEKO-TEX • GOTS • GRS • ISO 9001 • BCI</h2>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {CERTIFICATIONS.map((c) => (
                <span key={c.short} className="px-4 py-2.5 rounded-full bg-[#0A1A3C] border border-[#C9A24B]/40 font-display font-bold text-[13px] gold-text">{c.short}</span>
              ))}
              <Link href="/certifications" className="px-4 py-2.5 rounded-full border-2 border-[#A8822E] text-[#0A1A3C] text-[13px] font-bold hover:bg-[#A8822E] hover:text-white transition-colors">View All →</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <VideoSection />

      {/* 10. TESTIMONIALS */}
      <section className="py-20 md:py-28 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading eyebrow="Client Love" title="What global partners say" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <div className="rounded-[26px] bg-white lux-card p-7 h-full flex flex-col">
                  <div className="flex gap-1 text-[#C9A24B]">{[...Array(5)].map((_, s) => <Star key={s} size={15} fill="currentColor" />)}</div>
                  <p className="mt-4 text-[14px] text-[#0A1A3C]/75 leading-relaxed flex-1">“{t.text}”</p>
                  <div className="mt-5 flex items-center gap-3">
                    <img src={t.image} alt={t.name} className="w-11 h-11 rounded-full object-cover border-2 border-[#C9A24B]/40" loading="lazy" />
                    <div><p className="font-semibold text-[14px] text-[#0A1A3C]">{t.name}</p><p className="text-[12px] text-[#0A1A3C]/55">{t.role}</p></div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading eyebrow="Questions" title="Export FAQs" />
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <div key={i} className={`rounded-2xl border overflow-hidden transition-colors ${faqOpen === i ? "border-[#C9A24B]/60 bg-[#FAF8F3]" : "border-[#0A1A3C]/10 bg-white"}`}>
                <button onClick={() => setFaqOpen(faqOpen === i ? null : i)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-[#0A1A3C] text-[15.5px]">
                  {f.q}<ChevronDown size={19} className={`shrink-0 transition-transform ${faqOpen === i ? "rotate-180 text-[#A8822E]" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all ${faqOpen === i ? "max-h-60" : "max-h-0"}`}>
                  <p className="px-6 pb-6 text-[14.5px] text-[#0A1A3C]/65 leading-relaxed">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <Reveal className="max-w-7xl mx-auto rounded-[32px] overflow-hidden relative">
          <img src={IMAGES.bedroomWhite} alt="Contact CTA" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060f24]/92 via-[#0A1A3C]/80 to-[#0A1A3C]/40" />
          <div className="relative p-10 md:p-16 max-w-2xl">
            <p className="text-[12px] tracking-[0.3em] uppercase text-[#E8C97A]">Ready to source?</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl text-white font-semibold leading-tight">Get your export quote in 24 hours.</h2>
            <p className="mt-4 text-white/65">Share product, quantity & destination port — {SITE.owner} responds personally.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact" className="px-7 py-4 rounded-full bg-gradient-to-r from-[#A8822E] to-[#E8C97A] text-[#060f24] font-semibold">Start Export Inquiry</Link>
              <a href={SITE.whatsapp} target="_blank" className="px-7 py-4 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10">WhatsApp Us</a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
