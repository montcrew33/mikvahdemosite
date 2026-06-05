"use client";

import { motion } from "framer-motion";

const HERO_IMAGE = "https://i.imgur.com/DVBZdyr.jpg";

interface HeroProps {
  onDedicate: () => void;
  onDonate: () => void;
}

export function Hero({ onDedicate, onDonate }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Full-bleed background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${HERO_IMAGE}")` }}
        role="img"
        aria-label="Exterior rendering of Mikvah Laurentian"
      />

      {/* Editorial dark overlay — no glassmorphism */}
      <div className="absolute inset-0" style={{ background: "rgba(14,12,10,0.58)" }} />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(14,12,10,0.48) 0%, transparent 55%)" }}
      />

      {/* Centered content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 lg:px-10 pt-28 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* H1 */}
          <h1
            className="font-serif text-white leading-[1.08] mb-6"
            style={{ fontSize: "clamp(2.8rem, 6.5vw, 5.25rem)" }}
          >
            Mikvah Laurentian
            <br />
            Living Waters
          </h1>

          {/* Decorative rule */}
          <div className="flex items-center justify-center gap-4 mb-7">
            <div className="h-px w-14 bg-white/28" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#B59A5A]/70" />
            <div className="h-px w-14 bg-white/28" />
          </div>

          {/* Subheadline */}
          <p
            className="font-serif italic text-white/78 leading-relaxed mb-10 mx-auto"
            style={{ fontSize: "clamp(1rem, 1.8vw, 1.25rem)", maxWidth: "38rem" }}
          >
            Securing the legacy of our newly completed sanctuary for
            generations of Jewish family life in the heart of the Laurentians.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={onDedicate}
              className="px-7 py-3.5 bg-white text-[#1C1917] text-sm font-semibold tracking-wide hover:bg-white/92 transition-colors"
            >
              Dedicate a Space
            </button>
            <button
              onClick={onDonate}
              className="px-7 py-3.5 text-white text-sm font-semibold tracking-wide border border-white/48 hover:bg-white/10 transition-colors"
            >
              Make a Gift
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <p className="text-[9px] tracking-[0.3em] uppercase font-sans">Scroll</p>
        <div className="h-8 w-px bg-white/22" />
      </div>
    </section>
  );
}
