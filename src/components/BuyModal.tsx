"use client";
import { useState } from "react";
import { X, ShoppingBag, Send } from "lucide-react";
import { SITE } from "@/data/site";

export function BuyButton({ product, full = false }: { product: string; full?: boolean }) {
  const [open, setOpen] = useState(false);
  const [f, setF] = useState({ name: "", phone: "", email: "", qty: "", city: "", address: "", note: "" });
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF({ ...f, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg =
      `Hello ${SITE.name}, I want to BUY this product:%0A%0A` +
      `*Product:* ${encodeURIComponent(product)}%0A` +
      `*Name:* ${encodeURIComponent(f.name)}%0A` +
      `*Phone:* ${encodeURIComponent(f.phone)}%0A` +
      `*Email:* ${encodeURIComponent(f.email)}%0A` +
      `*Quantity:* ${encodeURIComponent(f.qty)}%0A` +
      `*City / Port:* ${encodeURIComponent(f.city)}%0A` +
      `*Address:* ${encodeURIComponent(f.address)}%0A` +
      `*Note:* ${encodeURIComponent(f.note)}`;
    window.open(`https://wa.me/918445357038?text=${msg}`, "_blank");
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`flex items-center justify-center gap-2 rounded-2xl font-semibold text-sm transition-all hover:-translate-y-0.5 ${
          full ? "w-full py-3.5 bg-gradient-to-r from-[#A8822E] to-[#E8C97A] text-[#060f24]" : "w-full py-3 bg-gradient-to-r from-[#A8822E] to-[#E8C97A] text-[#060f24]"
        }`}
      >
        <ShoppingBag size={16} /> Buy Now
      </button>

      {open && (
        <div className="fixed inset-0 z-[85] grid place-items-center p-4">
          <div className="absolute inset-0 bg-[#060f24]/80 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="relative w-full max-w-lg rounded-[28px] bg-white p-7 sm:p-9 max-h-[92svh] overflow-y-auto shadow-2xl">
            <button onClick={() => setOpen(false)} aria-label="Close" className="absolute top-4 right-4 w-10 h-10 grid place-items-center rounded-full bg-[#0A1A3C]/5 text-[#0A1A3C] hover:bg-[#0A1A3C] hover:text-[#E8C97A] transition-colors">
              <X size={19} />
            </button>
            <p className="text-[11px] tracking-[0.28em] uppercase text-[#A8822E] font-semibold">Buy Now</p>
            <h3 className="mt-1 font-display text-2xl text-[#0A1A3C] font-semibold leading-snug">{product}</h3>
            <p className="mt-1 text-[13px] text-[#0A1A3C]/60">Details bhariye — order seedha hamare WhatsApp par aayega.</p>
            <form onSubmit={submit} className="mt-5 grid gap-3">
              <div className="grid sm:grid-cols-2 gap-3">
                <input required value={f.name} onChange={set("name")} placeholder="Your name *" className="px-4 py-3 rounded-xl bg-[#FAF8F3] border border-[#C9A24B]/30 text-base outline-none focus:border-[#A8822E]" />
                <input required value={f.phone} onChange={set("phone")} placeholder="Phone / WhatsApp *" className="px-4 py-3 rounded-xl bg-[#FAF8F3] border border-[#C9A24B]/30 text-base outline-none focus:border-[#A8822E]" />
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <input value={f.email} onChange={set("email")} type="email" placeholder="Email" className="px-4 py-3 rounded-xl bg-[#FAF8F3] border border-[#C9A24B]/30 text-base outline-none focus:border-[#A8822E]" />
                <input required value={f.qty} onChange={set("qty")} placeholder="Quantity (e.g. 500 sets) *" className="px-4 py-3 rounded-xl bg-[#FAF8F3] border border-[#C9A24B]/30 text-base outline-none focus:border-[#A8822E]" />
              </div>
              <input value={f.city} onChange={set("city")} placeholder="City / Delivery port" className="px-4 py-3 rounded-xl bg-[#FAF8F3] border border-[#C9A24B]/30 text-base outline-none focus:border-[#A8822E]" />
              <input value={f.address} onChange={set("address")} placeholder="Full address" className="px-4 py-3 rounded-xl bg-[#FAF8F3] border border-[#C9A24B]/30 text-base outline-none focus:border-[#A8822E]" />
              <textarea value={f.note} onChange={set("note")} rows={2} placeholder="Size, colour, packaging note..." className="px-4 py-3 rounded-xl bg-[#FAF8F3] border border-[#C9A24B]/30 text-base outline-none focus:border-[#A8822E]" />
              <button className="mt-1 w-full py-4 rounded-2xl bg-[#25D366] text-white font-semibold flex items-center justify-center gap-2 min-h-[52px]">
                <Send size={17} /> Confirm Order on WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
