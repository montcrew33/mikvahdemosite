"use client";

import { motion } from "framer-motion";
import { donorWall } from "@/data/donors";

function DonorPlaque({ displayName, honorText, delay = 0 }: {
  displayName: string;
  honorText?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className="px-5 py-5 text-center"
      style={{
        background: "#FFFFFF",
        border: "1px solid #E8E3DA",
      }}
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.38, delay }}
    >
      <div className="flex items-center justify-center gap-1.5 mb-3">
        <div className="h-px w-5 bg-[#B59A5A]/45" />
        <div className="w-1 h-1 rounded-full bg-[#B59A5A]/55" />
        <div className="h-px w-5 bg-[#B59A5A]/45" />
      </div>

      <p className="font-serif text-[15px] text-[#1C1917] leading-snug">{displayName}</p>
      {honorText && (
        <p className="text-[11px] text-[#A8A29E] mt-2 italic leading-relaxed">{honorText}</p>
      )}

      <div className="flex items-center justify-center gap-1.5 mt-3">
        <div className="h-px w-5 bg-[#DDD8CF]/80" />
        <div className="w-1 h-1 rounded-full bg-[#DDD8CF]" />
        <div className="h-px w-5 bg-[#DDD8CF]/80" />
      </div>
    </motion.div>
  );
}

export function WallOfHonor() {
  return (
    <section
      id="wall-of-honor"
      className="py-24 lg:py-36"
      style={{
        background: "#FAF7F2",
        borderTop: "1px solid #DDD8CF",
        borderBottom: "1px solid #DDD8CF",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-12 bg-[#B59A5A]/50" />
            <span className="text-[#B59A5A] text-base" aria-hidden>✦</span>
            <div className="h-px w-12 bg-[#B59A5A]/50" />
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl text-[#1C1917] mb-4">
            Wall of Honor
          </h2>
          <p className="text-[#78716C] leading-relaxed max-w-xl mx-auto">
            With gratitude to the families and donors building this mikvah for
            generations. Your names are woven into the fabric of this sacred space.
          </p>
        </div>

        {/* Hierarchical tier grid */}
        <div className="space-y-14">
          {donorWall.map((tier) => (
            <div key={tier.id}>
              {/* Tier label */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-[#DDD8CF]" />
                <p className="text-[10px] tracking-[0.22em] uppercase text-[#B59A5A] font-medium px-2">
                  {tier.tierName}
                </p>
                <div className="h-px flex-1 bg-[#DDD8CF]" />
              </div>

              {/* Responsive grid scaled to donor count */}
              <div
                className={`grid gap-4 ${
                  tier.donors.length === 1
                    ? "grid-cols-1 max-w-xs mx-auto"
                    : tier.donors.length === 2
                    ? "grid-cols-1 sm:grid-cols-2 max-w-lg mx-auto"
                    : tier.donors.length <= 3
                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-3xl mx-auto"
                    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                }`}
              >
                {tier.donors.map((donor, i) => (
                  <DonorPlaque
                    key={donor.id}
                    displayName={donor.displayName}
                    honorText={donor.honorText}
                    delay={i * 0.05}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div
            className="inline-block px-10 py-8"
            style={{ background: "#FFFFFF", border: "1px solid #DDD8CF" }}
          >
            <p className="font-serif text-xl text-[#1C1917] mb-2">Join the Wall of Honor</p>
            <p className="text-sm text-[#78716C] mb-6 max-w-xs">
              Your name can be among those who built this sacred space for the
              Laurentian community.
            </p>
            <a
              href="#dedications"
              className="inline-block px-7 py-3 bg-[#1C1917] text-[#FCFBF8] text-sm font-semibold hover:bg-[#3D3830] transition-colors tracking-wide"
            >
              Make a Dedication
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
