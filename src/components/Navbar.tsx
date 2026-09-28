"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { SITE } from "@/data/site";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/manufacturing", label: "Manufacturing" },
  { href: "/export", label: "Export" },
  { href: "/quality", label: "Quality" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setOpen(false);
  }, [path]);

  // Lock background scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-[70] transition-colors duration-300 ${
        solid
          ? "bg-white/[0.97] shadow-[0_10px_40px_-15px_rgba(6,15,36,0.35)] border-b border-[#C9A24B]/25"
          : "bg-gradient-to-b from-black/55 via-black/25 to-transparent border-b border-transparent"
      }`}
      style={{ transform: "translateZ(0)", WebkitTransform: "translateZ(0)" }}
    >
      {/* top bar */}
      <div className={`hidden md:block overflow-hidden transition-all ${scrolled ? "max-h-0" : "max-h-10"} bg-[#060f24] text-white/80 text-[12px]`}>
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <p className="tracking-wide">Crafting Premium Cotton Comfort for the World • 25+ Countries Served</p>
          <div className="flex items-center gap-5">
            <a href={SITE.phoneHref} className="hover:text-[#E8C97A]">{SITE.phone}</a>
            <a href={`mailto:${SITE.email}`} className="hover:text-[#E8C97A]">{SITE.email}</a>
          </div>
        </div>
      </div>
      <nav className="max-w-7xl mx-auto px-5 md:px-6 py-3.5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group" aria-label="APPLA Overseas home">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#0A1A3C] via-[#10265a] to-[#0A1A3C] border border-[#C9A24B]/50 grid place-items-center shadow-lg shrink-0">
            <span className="font-display text-[#E8C97A] text-xl font-bold">A</span>
          </div>
          <div className="leading-tight">
            <p className={`font-display font-bold tracking-[0.18em] text-[15px] ${solid ? "text-[#0A1A3C]" : "text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]"}`}>APPLA OVERSEAS</p>
            <p className={`text-[10px] tracking-[0.28em] uppercase ${solid ? "text-[#A8822E]" : "text-[#E8C97A] drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]"}`}>Luxury Cotton Export</p>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {LINKS.map((l) => {
            const active = path === l.href;
            return (
              <Link key={l.href} href={l.href}
                className={`px-3.5 py-2 rounded-full text-[13.5px] font-medium tracking-wide transition-all ${active ? "bg-[#0A1A3C] text-[#E8C97A]" : solid ? "text-[#0A1A3C]/80 hover:bg-[#0A1A3C]/5 hover:text-[#0A1A3C]" : "text-white/85 hover:bg-white/10 hover:text-white"}`}>
                {l.label}
              </Link>
            );
          })}
          <Link href="/contact" className="ml-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#A8822E] to-[#E0BE6F] text-[#060f24] text-[13.5px] font-semibold shadow-[0_10px_30px_-10px_rgba(201,162,75,0.7)] hover:shadow-[0_14px_36px_-10px_rgba(201,162,75,0.9)] hover:-translate-y-0.5 transition-all">
            Export Inquiry
          </Link>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <a href={SITE.phoneHref} aria-label="Call APPLA Overseas" className="w-11 h-11 grid place-items-center rounded-full bg-[#0A1A3C] text-[#E8C97A] border border-[#C9A24B]/40 shadow-md active:scale-95 transition-transform">
            <Phone size={18} />
          </a>
          <button onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} className="w-11 h-11 grid place-items-center rounded-full bg-[#0A1A3C] text-[#E8C97A] border border-[#C9A24B]/40 shadow-md active:scale-95 transition-transform">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-[80svh] overflow-y-auto" : "max-h-0"}`}>
        <div className="px-5 pb-8 pt-1 grid gap-1 bg-white border-t border-[#C9A24B]/20">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className={`px-4 py-3.5 rounded-xl text-[16px] font-medium min-h-[48px] flex items-center ${path === l.href ? "bg-[#0A1A3C] text-[#E8C97A]" : "text-[#0A1A3C]/80 hover:bg-[#F4EFE4]"}`}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="mt-2 px-4 py-4 rounded-xl text-center font-semibold bg-gradient-to-r from-[#0A1A3C] to-[#1A3573] text-[#E8C97A] min-h-[52px] flex items-center justify-center">
            Export Inquiry →
          </Link>
        </div>
      </div>
    </header>
  );
}
