"use client";
import { useState } from "react";
import { Send, MessageCircle, FileText } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SITE, IMAGES } from "@/data/site";

export default function QuotePage() {
  const [f, setF] = useState({ name: "", company: "", email: "", phone: "", material: "", size: "", qty: "", port: "", date: "", note: "" });
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setF({ ...f, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg =
      `*BULK INQUIRY – ${SITE.name}*%0A%0A` +
      `*Name:* ${encodeURIComponent(f.name)}%0A` +
      `*Company:* ${encodeURIComponent(f.company)}%0A` +
      `*Email:* ${encodeURIComponent(f.email)}%0A` +
      `*Phone:* ${encodeURIComponent(f.phone)}%0A` +
      `*Material Required:* ${encodeURIComponent(f.material)}%0A` +
      `*Size Required:* ${encodeURIComponent(f.size)}%0A` +
      `*Order Quantity (MOQ):* ${encodeURIComponent(f.qty)}%0A` +
      `*Destination Port:* ${encodeURIComponent(f.port)}%0A` +
      `*Target Date:* ${encodeURIComponent(f.date)}%0A` +
      `*Note:* ${encodeURIComponent(f.note)}`;
    window.open(`https://wa.me/918445357038?text=${msg}`, "_blank");
  };

  return (
    <div className="pt-28">
      <section className="relative py-16 overflow-hidden">
        <img src={IMAGES.containers} alt="Bulk inquiry" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#060f24]/82" />
        <div className="relative max-w-7xl mx-auto px-6">
          <Reveal>
            <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-[#C9A24B]/40 text-[#E8C97A] text-[12px] tracking-[0.25em] uppercase"><FileText size={14} /> B2B • Bulk Inquiry</p>
            <h1 className="mt-4 font-display text-4xl md:text-6xl text-white font-semibold">Request a Quote</h1>
            <p className="mt-3 text-white/65 max-w-2xl">Contact Us ki jagah seedha Bulk Inquiry — material, size, quantity aur port batayein, 24 hours me quotation.</p>
          </Reveal>
        </div>
      </section>

      <section className="py-14 bg-[#FAF8F3]">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal>
            <form onSubmit={submit} className="rounded-[28px] bg-white lux-card p-7 sm:p-10">
              <h2 className="font-display text-2xl text-[#0A1A3C] font-semibold">Bulk Inquiry Form</h2>
              <p className="text-[13.5px] text-[#0A1A3C]/60 mt-1">Submit karte hi inquiry hamare WhatsApp par pahunchegi.</p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <input required value={f.name} onChange={set("name")} placeholder="Your name *" className="px-5 py-3.5 rounded-2xl bg-[#FAF8F3] border border-[#C9A24B]/25 text-base outline-none focus:border-[#A8822E]" />
                <input value={f.company} onChange={set("company")} placeholder="Company / Brand" className="px-5 py-3.5 rounded-2xl bg-[#FAF8F3] border border-[#C9A24B]/25 text-base outline-none focus:border-[#A8822E]" />
                <input required value={f.email} onChange={set("email")} type="email" placeholder="Business email *" className="px-5 py-3.5 rounded-2xl bg-[#FAF8F3] border border-[#C9A24B]/25 text-base outline-none focus:border-[#A8822E]" />
                <input required value={f.phone} onChange={set("phone")} placeholder="Phone / WhatsApp *" className="px-5 py-3.5 rounded-2xl bg-[#FAF8F3] border border-[#C9A24B]/25 text-base outline-none focus:border-[#A8822E]" />
                <select required value={f.material} onChange={set("material")} className="px-5 py-3.5 rounded-2xl bg-[#FAF8F3] border border-[#C9A24B]/25 text-base outline-none focus:border-[#A8822E] text-[#0A1A3C]">
                  <option value="">Material required *</option>
                  <option>Premium Pure Cotton</option><option>Premium Satin</option><option>Percale</option>
                  <option>Combed Cotton</option><option>Premium Silk</option><option>Microfiber</option>
                  <option>Hotel Linen Mix</option><option>OEM Custom</option>
                </select>
                <input required value={f.size} onChange={set("size")} placeholder="Size required (e.g. King 108x108) *" className="px-5 py-3.5 rounded-2xl bg-[#FAF8F3] border border-[#C9A24B]/25 text-base outline-none focus:border-[#A8822E]" />
                <input required value={f.qty} onChange={set("qty")} placeholder="Order quantity / MOQ *" className="px-5 py-3.5 rounded-2xl bg-[#FAF8F3] border border-[#C9A24B]/25 text-base outline-none focus:border-[#A8822E]" />
                <input required value={f.port} onChange={set("port")} placeholder="Destination port *" className="px-5 py-3.5 rounded-2xl bg-[#FAF8F3] border border-[#C9A24B]/25 text-base outline-none focus:border-[#A8822E]" />
                <input value={f.date} onChange={set("date")} placeholder="Target delivery date" className="px-5 py-3.5 rounded-2xl bg-[#FAF8F3] border border-[#C9A24B]/25 text-base outline-none focus:border-[#A8822E] sm:col-span-2" />
                <textarea value={f.note} onChange={set("note")} rows={3} placeholder="Design, GSM, packaging note..." className="px-5 py-3.5 rounded-2xl bg-[#FAF8F3] border border-[#C9A24B]/25 text-base outline-none focus:border-[#A8822E] sm:col-span-2" />
              </div>
              <button className="mt-6 w-full py-4 rounded-2xl bg-[#0A1A3C] text-[#E8C97A] font-semibold flex items-center justify-center gap-2 min-h-[52px]"><Send size={17} /> Send Bulk Inquiry</button>
              <a href={SITE.whatsapp} target="_blank" className="mt-3 w-full py-4 rounded-2xl bg-[#25D366] text-white font-semibold flex items-center justify-center gap-2 min-h-[52px]"><MessageCircle size={18} /> WhatsApp Direct</a>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
