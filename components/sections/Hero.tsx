"use client";

import { motion } from "framer-motion";

const HERO_IMAGE = "https://i.imgur.com/DVBZdyr.jpg";

interface HeroProps {
  onDedicate: () => void;
  onDonate: () => void;
}

export function Hero({ onDedicate, onDonate }: HeroProps) {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">

      {/* Full-bleed background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${HERO_IMAGE}")` }}
        role="img"
        aria-label="Exterior rendering of Mikvah Laurentian"
      />

      {/* Left-to-right gradient: darker behind text, fades right to preserve building */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(18,32,44,0.86) 0%, rgba(18,32,44,0.72) 35%, rgba(18,32,44,0.38) 65%, rgba(18,32,44,0.12) 100%)",
        }}
      />
      {/* Bottom vignette to ground the text block */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(18,32,44,0.55) 0%, transparent 40%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-20 lg:pb-28">
        <motion.div
          className="max-w-[560px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
        >
          {/* Headline */}
          <h1 className="font-serif text-[clamp(2.75rem,5.5vw,4.25rem)] leading-[1.07] text-white mb-4">
            Mikvah Laurentian
          </h1>

          {/* Subheadline */}
          <p className="font-serif text-[clamp(1.1rem,2vw,1.35rem)] text-white/82 italic leading-[1.55] mb-4">
            A new home for taharah, renewal, and generations of Jewish family life.
          </p>

          {/* Body */}
          <p className="text-white/65 text-[0.97rem] leading-relaxed mb-8 max-w-md">
            Together, we are building a sacred space for the Laurentian Jewish
            community — a place of dignity, purity, and continuity.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={onDedicate}
              className="px-6 py-3 bg-[#5BC8C8] text-white text-sm font-semibold hover:bg-[#3DA8A8] transition-colors rounded-sm shadow-md"
            >
              Dedicate a Space
            </button>
            <button
              onClick={onDonate}
              className="px-6 py-3 text-white text-sm font-semibold rounded-sm transition-colors"
              style={{
                background: "rgba(255,255,255,0.10)",
                border: "1px solid rgba(255,255,255,0.38)",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.18)")}
              onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.10)")}
            >
              Make a Gift
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-7 right-10 hidden lg:flex flex-col items-center gap-2 text-white/28">
        <div className="h-8 w-px bg-white/20" />
        <p className="text-[9px] tracking-[0.32em] uppercase" style={{ writingMode: "vertical-rl" }}>
          Scroll
        </p>
      </div>
    </section>
  );
}
