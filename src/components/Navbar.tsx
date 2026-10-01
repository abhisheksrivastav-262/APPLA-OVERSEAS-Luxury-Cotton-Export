"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { SITE } from "@/data/site";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/wovica", label: "Wovica Brand" },
  { href: "/products", label: "Products" },
  { href: "/bedsheets", label: "Bedsheet Types" },
  { href: "/manufacturing", label: "Manufacturing" },
  { href: "/export", label: "Export" },
  { href: "/quality", label: "Quality" },
  { href: "/certifications", label: "Certifications" },
  { href: "/gallery", label: "Gallery" },
  { href: "/quote", label: "Request a Quote" },
  { href: "/contact", label: "Contact" },
];

const DESK = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/wovica", label: "Wovica" },
  { href: "/products", label: "Products" },
  { href: "/manufacturing", label: "Manufacturing" },
  { href: "/export", label: "Export" },
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

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-[70] transition-colors duration-300 ${
          solid
            ? "bg-white/[0.97] shadow-[0_10px_40px_-15px_rgba(6,15,36,0.35)] border-b border-[#C9A24B]/25"
            : "bg-gradient-to-b from-black/55 via-black/25 to-transparent border-b border-transparent"
        }`}
        style={{ transform: "translateZ(0)", WebkitTransform: "translateZ(0)" }}
      >
        <div className={`hidden md:block overflow-hidden transition-all ${scrolled ? "max-h-0" : "max-h-10"} bg-[#060f24] text-white/80 text-[12px]`}>
          <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
            <p className="tracking-wide">{SITE.parentLine} • {SITE.brandLine}</p>
            <div className="flex items-center gap-5">
              <a href={SITE.phoneHref} className="hover:text-[#E8C97A]">{SITE.phone}</a>
              <a href={`mailto:${SITE.email}`} className="hover:text-[#E8C97A]">{SITE.email}</a>
            </div>
          </div>
        </div>
        <nav className="max-w-7xl mx-auto px-5 md:px-6 py-3.5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3" aria-label="APPLA Overseas home">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#0A1A3C] via-[#10265a] to-[#0A1A3C] border border-[#C9A24B]/50 grid place-items-center shadow-lg shrink-0">
              <span className="font-display text-[#E8C97A] text-xl font-bold">A</span>
            </div>
            <div className="leading-tight">
              <p className="font-display font-bold tracking-[0.18em] text-[15px] gold-text">APPLA OVERSEAS</p>
              <p className={`text-[10px] tracking-[0.22em] uppercase ${solid ? "text-[#A8822E]" : "text-[#E8C97A] drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]"}`}>Wovica • Luxury Cotton Export</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
            {DESK.map((l) => {
              const active = path === l.href;
              return (
                <Link key={l.href} href={l.href}
                  className={`px-3 py-2 rounded-full text-[13px] font-medium tracking-wide transition-all ${active ? "bg-[#0A1A3C] text-[#E8C97A]" : solid ? "text-[#0A1A3C]/80 hover:bg-[#0A1A3C]/5 hover:text-[#0A1A3C]" : "text-white/85 hover:bg-white/10 hover:text-white"}`}>
                  {l.label}
                </Link>
              );
            })}
            <Link href="/quote" className="ml-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#A8822E] to-[#E0BE6F] text-[#060f24] text-[13px] font-semibold shadow-[0_10px_30px_-10px_rgba(201,162,75,0.7)] hover:-translate-y-0.5 transition-all">
              Request a Quote
            </Link>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <a href={SITE.phoneHref} aria-label="Call APPLA Overseas" className="w-11 h-11 grid place-items-center rounded-full bg-[#0A1A3C] text-[#E8C97A] border border-[#C9A24B]/40 shadow-md active:scale-95 transition-transform">
              <Phone size={18} />
            </a>
            <button onClick={() => setOpen(true)} aria-label="Open menu" className="w-11 h-11 grid place-items-center rounded-full bg-[#0A1A3C] text-[#E8C97A] border border-[#C9A24B]/40 shadow-md active:scale-95 transition-transform">
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </header>

      {/* overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[75] bg-[#060f24]/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />
      {/* side drawer from header */}
      <aside className={`fixed inset-y-0 right-0 z-[80] w-[86%] max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out lg:hidden ${open ? "translate-x-0" : "translate-x-full"}`} aria-hidden={!open}>
        <div className="flex items-center justify-between px-5 py-4 bg-[#060f24] border-b border-[#C9A24B]/30">
          <div>
            <p className="font-display font-bold tracking-[0.18em] text-[14px] gold-text">APPLA OVERSEAS</p>
            <p className="text-[10px] tracking-[0.22em] uppercase text-[#E8C97A]/80">Wovica • Luxury Cotton Export</p>
          </div>
          <button onClick={() => setOpen(false)} aria-label="Close menu" className="w-11 h-11 grid place-items-center rounded-full bg-white/10 text-[#E8C97A] border border-[#C9A24B]/40 active:scale-95 transition-transform">
            <X size={20} />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-4 py-4 grid gap-1 content-start">
          {LINKS.map((l) => {
            const active = path === l.href;
            return (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                className={`px-4 py-3.5 rounded-xl text-[16px] font-medium min-h-[48px] flex items-center justify-between ${active ? "bg-[#0A1A3C] text-[#E8C97A]" : "text-[#0A1A3C]/80 hover:bg-[#F4EFE4]"}`}>
                {l.label}
                <ChevronRight size={17} className={active ? "text-[#E8C97A]" : "text-[#C9A24B]"} />
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-[#C9A24B]/20 bg-[#FAF8F3]">
          <Link href="/quote" onClick={() => setOpen(false)} className="w-full py-4 rounded-xl text-center font-semibold bg-gradient-to-r from-[#A8822E] to-[#E8C97A] text-[#060f24] min-h-[52px] flex items-center justify-center">
            Request a Quote →
          </Link>
          <a href={SITE.phoneHref} className="mt-2 block text-center text-[14px] font-medium text-[#0A1A3C]/70">{SITE.phone}</a>
        </div>
      </aside>
    </>
  );
}
