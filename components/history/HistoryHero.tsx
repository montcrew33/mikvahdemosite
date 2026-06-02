"use client";

/*
 * CINEMAGRAPH HERO
 *
 * This component is ready to receive a looping "Living Waters" cinemagraph.
 * To activate the video, replace the placeholder <div> below with:
 *
 *   <video
 *     autoPlay
 *     loop
 *     muted
 *     playsInline
 *     className="absolute inset-0 w-full h-full object-cover"
 *     poster="/videos/living-waters-poster.jpg"
 *   >
 *     <source src="/videos/living-waters.mp4" type="video/mp4" />
 *   </video>
 *
 * The poster image provides a still frame while the video loads.
 * Recommended: a subtle slow-motion clip of water surface — no camera movement,
 * only the water moving. This creates the "cinemagraph" effect.
 */

import { motion } from "framer-motion";

const FALLBACK_BG = "https://i.imgur.com/KEQX9HW.jpg";

export function HistoryHero() {
  return (
    <section
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{ aspectRatio: "21/9", minHeight: "420px" }}
      aria-label="History of the Mikvah — hero"
    >

      {/* ── VIDEO / CINEMAGRAPH PLACEHOLDER ──
          Replace this div with the <video> tag above when the asset is ready. */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${FALLBACK_BG}")` }}
        role="img"
        aria-label="Exterior of Mikvah Laurentian"
      />

      {/* Dark editorial overlay — preserves image depth without competing with text */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(14, 12, 10, 0.62)" }}
      />
      {/* Subtle bottom gradient to anchor the text block */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(14,12,10,0.50) 0%, transparent 60%)",
        }}
      />

      {/* ── HERO TEXT ── */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          {/* Eyebrow */}
          <p className="text-[10px] tracking-[0.32em] uppercase text-white/52 font-sans mb-5">
            Mikvah Laurentian &mdash; Heritage
          </p>

          {/* H1 */}
          <h1
            className="font-serif text-white leading-[1.1]"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}
          >
            The Enduring Legacy
            <br />
            of the Mikvah.
          </h1>

          {/* Decorative rule */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-16 bg-white/25" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#B59A5A]/65" />
            <div className="h-px w-16 bg-white/25" />
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/28">
        <p className="text-[9px] tracking-[0.3em] uppercase font-sans">Read</p>
        <div className="h-7 w-px bg-white/20" />
      </div>
    </section>
  );
}
