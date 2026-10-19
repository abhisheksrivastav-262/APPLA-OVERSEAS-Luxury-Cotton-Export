import { Clapperboard } from "lucide-react";
import { Reveal } from "./Reveal";

export function VideoSection() {
  return (
    <section className="py-20 md:py-28 bg-[#060f24] grain relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-10">
          <p className="inline-flex items-center gap-2 text-[11.5px] font-semibold tracking-[0.3em] uppercase text-[#E8C97A]">
            <Clapperboard size={15} /> Real Factory Glimpse
          </p>
          <h2 className="mt-4 font-display text-3xl md:text-[44px] text-white font-semibold">Inside Appla Overseas</h2>
          <p className="mt-3 text-white/60 text-[15px]">Direct look at our active weaving floor and production in action.</p>
        </Reveal>
        <Reveal>
          <div>
            <div className="max-w-xl mx-auto rounded-[30px] overflow-hidden border-2 border-[#C9A24B]/50 shadow-[0_30px_80px_-20px_rgba(201,162,75,0.35)] bg-black">
              <video
                controls
                playsInline
                preload="metadata"
                poster="/products/wovica-video-poster.jpg"
                className="w-full max-h-[75vh] mx-auto object-contain bg-black block"
              >
                <source src="/products/wovica-brand-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
              <span className="px-4 py-2 rounded-full bg-white/5 border border-[#C9A24B]/30 text-[#E8C97A] text-[12px] font-semibold tracking-[0.15em] uppercase">Appla Production Floor</span>
              <span className="px-4 py-2 rounded-full bg-white/5 border border-[#C9A24B]/30 text-white/80 text-[12px] font-semibold tracking-[0.15em] uppercase">Original Factory Audio</span>
              <span className="px-4 py-2 rounded-full bg-white/5 border border-[#C9A24B]/30 text-white/60 text-[12px] font-semibold tracking-[0.15em] uppercase">Full Length (1m 27s)</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
