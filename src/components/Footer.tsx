"use client";
import Link from "next/link";
import { Phone, Mail, MapPin, Globe, AtSign, Share2, MessageCircle } from "lucide-react";
import { SITE } from "@/data/site";

export default function Footer() {
  return (
    <footer className="relative bg-[#060f24] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.15]" style={{ background: "radial-gradient(800px 300px at 20% 0%, #C9A24B55, transparent), radial-gradient(700px 300px at 90% 30%, #1A357388, transparent)" }} />
      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="mb-12 rounded-[26px] p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 justify-between bg-white/[0.05] border border-[#C9A24B]/25">
          <div>
            <p className="font-display text-2xl font-semibold">Trade offers & new collections, monthly.</p>
            <p className="text-white/55 text-sm mt-1">Join 2,000+ buyers. No spam — only export lots & launches.</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row w-full md:w-auto gap-2">
            <input required type="email" placeholder="Work email" className="flex-1 md:w-72 px-5 py-3.5 rounded-full bg-white/10 border border-white/15 text-base placeholder:text-white/40 outline-none focus:border-[#C9A24B] min-h-[52px]" />
            <button className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#A8822E] to-[#E8C97A] text-[#060f24] text-sm font-bold shrink-0 min-h-[52px]">Subscribe</button>
          </form>
        </div>
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#C9A24B] to-[#7a5f1e] grid place-items-center">
                <span className="font-display text-xl font-bold text-[#060f24]">A</span>
              </div>
              <div>
                <p className="font-display font-bold tracking-[0.15em]">APPLA OVERSEAS</p>
                <p className="text-[11px] tracking-[0.25em] text-[#E8C97A] uppercase">Luxury Cotton Export</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">Premium Cotton Textile Manufacturer & Exporter. Crafting Premium Cotton Comfort for the World.</p>
            <div className="flex gap-2.5 mt-5">
              {[Globe, AtSign, Share2, MessageCircle].map((Icon, i) => (
                <a key={i} href={i === 3 ? SITE.whatsapp : "#"} target="_blank" className="w-9 h-9 rounded-full grid place-items-center border border-white/15 text-white/70 hover:text-[#060f24] hover:bg-[#E8C97A] hover:border-[#E8C97A] transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[#E8C97A] text-[12px] tracking-[0.25em] uppercase mb-4">Quick Links</p>
            <div className="grid gap-2.5 text-sm">
              {[["/", "Home"], ["/about", "About"], ["/products", "Products"], ["/manufacturing", "Manufacturing"], ["/export", "Export"], ["/gallery", "Gallery"], ["/contact", "Contact"]].map(([h, l]) => (
                <Link key={h} href={h} className="text-white/65 hover:text-[#E8C97A] transition-colors w-fit">{l}</Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[#E8C97A] text-[12px] tracking-[0.25em] uppercase mb-4">Collections</p>
            <div className="grid gap-2.5 text-sm text-white/65">
              <span>Pure Cotton Bedsheets</span><span>Luxury Comforters</span><span>Mattress Protectors</span><span>Hotel Linen Collection</span><span>OEM Manufacturing</span>
            </div>
          </div>
          <div>
            <p className="text-[#E8C97A] text-[12px] tracking-[0.25em] uppercase mb-4">Contact</p>
            <div className="grid gap-3 text-sm text-white/70">
              <a href={SITE.phoneHref} className="flex gap-2.5 hover:text-[#E8C97A]"><Phone size={16} className="shrink-0 mt-0.5 text-[#E8C97A]" />{SITE.phone}</a>
              <a href={`mailto:${SITE.email}`} className="flex gap-2.5 hover:text-[#E8C97A]"><Mail size={16} className="shrink-0 mt-0.5 text-[#E8C97A]" />{SITE.email}</a>
              <p className="flex gap-2.5"><MapPin size={16} className="shrink-0 mt-0.5 text-[#E8C97A]" />{SITE.address}</p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-[13px] text-white/45">
          <p>Copyright © 2026 APPLA OVERSEAS. All Rights Reserved.</p>
          <p>Owner: {SITE.owner} • Muzaffarnagar, India</p>
        </div>
      </div>
    </footer>
  );
}
