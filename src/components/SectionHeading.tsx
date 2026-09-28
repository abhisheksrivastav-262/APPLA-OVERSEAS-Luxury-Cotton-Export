import { Reveal } from "./Reveal";

export function SectionHeading({ eyebrow, title, sub, dark = false, center = true }: { eyebrow: string; title: string; sub?: string; dark?: boolean; center?: boolean }) {
  return (
    <Reveal className={`${center ? "text-center mx-auto" : "text-left"} max-w-3xl mb-12`}>
      <p className="inline-flex items-center gap-2 text-[11.5px] font-semibold tracking-[0.3em] uppercase text-[#A8822E]">
        <span className="w-8 h-px bg-[#C9A24B]" />{eyebrow}<span className="w-8 h-px bg-[#C9A24B]" />
      </p>
      <h2 className={`mt-4 font-display text-3xl md:text-[44px] leading-[1.12] font-semibold text-balance ${dark ? "text-white" : "text-[#0A1A3C]"}`}>{title}</h2>
      {sub && <p className={`mt-4 text-[15.5px] leading-relaxed ${dark ? "text-white/65" : "text-[#0A1A3C]/65"}`}>{sub}</p>}
    </Reveal>
  );
}
