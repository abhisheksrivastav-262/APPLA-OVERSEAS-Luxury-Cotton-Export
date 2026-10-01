"use client";
import { useEffect, useState } from "react";
import { Play, Clapperboard } from "lucide-react";
import { Reveal } from "./Reveal";
import { IMAGES } from "@/data/site";

export function VideoSection() {
  const [hasVideo, setHasVideo] = useState<boolean | null>(null);

  useEffect(() => {
    fetch("/brand-film.mp4", { method: "HEAD" })
      .then((r) => setHasVideo(r.ok))
      .catch(() => setHasVideo(false));
  }, []);

  const showVideo = hasVideo === true;

  return (
    <section className="py-20 md:py-28 bg-[#060f24] grain relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-10">
          <p className="inline-flex items-center gap-2 text-[11.5px] font-semibold tracking-[0.3em] uppercase text-[#E8C97A]">
            <Clapperboard size={15} /> Our Story on Film
          </p>
          <h2 className="mt-4 font-display text-3xl md:text-[44px] text-white font-semibold">Inside Appla Overseas</h2>
          <p className="mt-3 text-white/60 text-[15px]">Yarn to container — watch how Wovica bedding is crafted for the world.</p>
        </Reveal>
        <Reveal>
          {hasVideo === null ? (
            <div className="w-full h-[320px] sm:h-[440px] rounded-[30px] bg-white/5 border border-[#C9A24B]/20 animate-pulse" />
          ) : showVideo ? (
            <video
              controls
              preload="metadata"
              poster={IMAGES.hero}
              className="w-full rounded-[30px] border border-[#C9A24B]/40 shadow-2xl max-h-[70vh] bg-black"
            >
              <source src="/brand-film.mp4" type="video/mp4" />
            </video>
          ) : (
            <div className="relative rounded-[30px] overflow-hidden border border-[#C9A24B]/30">
              <img src={IMAGES.sewing} alt="Factory film coming soon" className="w-full h-[320px] sm:h-[440px] object-cover opacity-60" loading="lazy" />
              <div className="absolute inset-0 grid place-items-center bg-[#060f24]/55">
                <div className="text-center px-6">
                  <span className="mx-auto w-20 h-20 rounded-full grid place-items-center bg-gradient-to-br from-[#A8822E] to-[#E8C97A] text-[#060f24] shadow-[0_0_50px_-5px_rgba(201,162,75,0.8)]">
                    <Play size={30} fill="currentColor" />
                  </span>
                  <p className="mt-5 font-display text-2xl text-white font-semibold">Brand Film — Coming Soon</p>
                  <p className="mt-2 text-white/60 text-sm max-w-md">Video slot ready hai. Video milte hi <b>public/brand-film.mp4</b> me add kar dijiye — yahan khud chal padegi.</p>
                </div>
              </div>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
