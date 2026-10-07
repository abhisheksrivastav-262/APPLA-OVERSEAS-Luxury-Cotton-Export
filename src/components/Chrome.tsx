"use client";
import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { SITE } from "@/data/site";

export function Floating() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <>
      <a href={SITE.whatsapp} target="_blank" aria-label="WhatsApp"
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 w-14 h-14 rounded-full grid place-items-center bg-[#25D366] text-white shadow-[0_16px_40px_-10px_rgba(37,211,102,0.7)] hover:scale-110 active:scale-95 transition-transform pulse-glow" style={{ marginBottom: "env(safe-area-inset-bottom)" }}>
        <MessageCircle size={26} />
      </a>
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Scroll to top"
        className={`fixed bottom-5 left-5 sm:bottom-6 sm:left-6 z-50 w-12 h-12 rounded-full grid place-items-center bg-[#0A1A3C] text-[#E8C97A] border border-[#C9A24B]/40 shadow-xl transition-all hover:-translate-y-1 active:scale-95 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
        <ArrowUp size={20} />
      </button>
    </>
  );
}

export function Preloader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, []);
  if (done) return null;
  return (
    <div className="fixed inset-0 z-[100] bg-[#060f24] grid place-items-center">
      <div className="text-center">
        <img src="/wovica-logo.jpeg" alt="Wovica" className="w-20 h-20 mx-auto rounded-full object-cover border-2 border-[#C9A24B]/70 shadow-2xl animate-float-slow bg-white" />
        <p className="mt-5 font-display tracking-[0.35em] text-[#E8C97A] text-sm">APPLA OVERSEAS</p>
        <div className="mt-4 h-[3px] w-44 mx-auto rounded-full bg-white/10 overflow-hidden">
          <div className="h-full w-full bg-gradient-to-r from-[#A8822E] via-[#F4E3B2] to-[#A8822E] animate-shimmer" />
        </div>
      </div>
    </div>
  );
}
