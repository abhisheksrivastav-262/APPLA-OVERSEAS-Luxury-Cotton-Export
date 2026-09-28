"use client";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SITE, IMAGES } from "@/data/site";

function Form() {
  const params = useSearchParams();
  const prefill = params.get("product") || "";
  const [sent, setSent] = useState(false);
  return (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="rounded-[28px] bg-white lux-card p-8 md:p-10">
      <h2 className="font-display text-2xl text-[#0A1A3C] font-semibold">Export Inquiry Form</h2>
      <p className="text-[13.5px] text-[#0A1A3C]/60 mt-1">Replies within 24 hours with quotation & sampling plan.</p>
      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        <input required placeholder="Full name *" className="px-5 py-3.5 rounded-2xl bg-[#FAF8F3] border border-[#C9A24B]/25 text-[14px] outline-none focus:border-[#A8822E]" />
        <input required placeholder="Company / Brand *" className="px-5 py-3.5 rounded-2xl bg-[#FAF8F3] border border-[#C9A24B]/25 text-[14px] outline-none focus:border-[#A8822E]" />
        <input required type="email" placeholder="Business email *" className="px-5 py-3.5 rounded-2xl bg-[#FAF8F3] border border-[#C9A24B]/25 text-[14px] outline-none focus:border-[#A8822E]" />
        <input placeholder="WhatsApp / Phone" className="px-5 py-3.5 rounded-2xl bg-[#FAF8F3] border border-[#C9A24B]/25 text-[14px] outline-none focus:border-[#A8822E]" />
        <input defaultValue={prefill} placeholder="Product of interest" className="px-5 py-3.5 rounded-2xl bg-[#FAF8F3] border border-[#C9A24B]/25 text-[14px] outline-none focus:border-[#A8822E] sm:col-span-2" />
        <div className="grid grid-cols-2 gap-4 sm:col-span-2">
          <input placeholder="Est. quantity" className="px-5 py-3.5 rounded-2xl bg-[#FAF8F3] border border-[#C9A24B]/25 text-[14px] outline-none focus:border-[#A8822E]" />
          <input placeholder="Destination port / country" className="px-5 py-3.5 rounded-2xl bg-[#FAF8F3] border border-[#C9A24B]/25 text-[14px] outline-none focus:border-[#A8822E]" />
        </div>
        <textarea rows={4} placeholder="Specs: fabric, thread count, sizes, packaging..." className="px-5 py-3.5 rounded-2xl bg-[#FAF8F3] border border-[#C9A24B]/25 text-[14px] outline-none focus:border-[#A8822E] sm:col-span-2" />
      </div>
      {sent
        ? <p className="mt-6 rounded-2xl bg-green-50 border border-green-200 text-green-800 text-[14px] px-5 py-4">Thank you — your inquiry is noted. We reply within 24 hours. For instant response: <a className="font-semibold underline" href={SITE.whatsapp} target="_blank">WhatsApp us</a>.</p>
        : <button className="mt-6 w-full py-4 rounded-2xl bg-[#0A1A3C] text-[#E8C97A] font-semibold flex items-center justify-center gap-2 hover:bg-[#10265a] transition-colors">Send Export Inquiry <Send size={17} /></button>}
      <a href={SITE.whatsapp} target="_blank" className="mt-3 w-full py-4 rounded-2xl bg-[#25D366] text-white font-semibold flex items-center justify-center gap-2"><MessageCircle size={18} /> WhatsApp: {SITE.phone}</a>
    </form>
  );
}

export default function ContactPage() {
  return (
    <div className="pt-28">
      <section className="relative py-16 overflow-hidden">
        <img src={IMAGES.bedroomWhite} alt="Contact" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#060f24]/80" />
        <div className="relative max-w-7xl mx-auto px-6">
          <p className="text-[12px] tracking-[0.3em] uppercase text-[#E8C97A]">Let&apos;s Talk Business</p>
          <h1 className="mt-3 font-display text-4xl md:text-6xl text-white font-semibold">Contact & Export Desk</h1>
        </div>
      </section>
      <section className="py-16 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-8">
          <Reveal className="lg:col-span-2">
            <div className="rounded-[28px] bg-[#0A1A3C] text-white p-8 md:p-10 h-full border border-[#C9A24B]/25">
              <p className="text-[12px] tracking-[0.3em] uppercase text-[#E8C97A]">APPLA OVERSEAS</p>
              <div className="mt-6 space-y-5 text-[14.5px]">
                <a href={SITE.phoneHref} className="flex gap-3 hover:text-[#E8C97A]"><Phone size={18} className="text-[#E8C97A] shrink-0" />{SITE.phone}</a>
                <a href={`mailto:${SITE.email}`} className="flex gap-3 hover:text-[#E8C97A]"><Mail size={18} className="text-[#E8C97A] shrink-0" />{SITE.email}</a>
                <p className="flex gap-3"><MapPin size={18} className="text-[#E8C97A] shrink-0" />{SITE.address}</p>
                <p className="flex gap-3 text-white/70"><Clock size={18} className="text-[#E8C97A] shrink-0" />{SITE.hours}</p>
              </div>
              <div className="mt-8 rounded-2xl overflow-hidden border border-[#C9A24B]/25">
                <iframe title="APPLA Overseas Map" src="https://www.google.com/maps?q=Sisona+Road+Basant+Vihar+Saket+Muzaffarnagar+Uttar+Pradesh+251001&output=embed" className="w-full h-64 grayscale-[0.2]" loading="lazy" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-3">
            <Suspense fallback={<div className="rounded-[28px] bg-white p-10">Loading form…</div>}><Form /></Suspense>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
