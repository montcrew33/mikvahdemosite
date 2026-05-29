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
      className="px-5 py-5 text-center rounded-sm"
      style={{
        background: "#FFFFFF",
        border: "1px solid #D0E5E5",
        boxShadow: "0 1px 6px rgba(26,43,56,0.05)",
      }}
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.38, delay }}
    >
      <div className="flex items-center justify-center gap-1.5 mb-3">
        <div className="h-px w-5 bg-[#5BC8C8]/50" />
        <div className="w-1 h-1 rounded-full bg-[#5BC8C8]/60" />
        <div className="h-px w-5 bg-[#5BC8C8]/50" />
      </div>

      <p className="font-serif text-[15px] text-[#1A2B38] leading-snug">{displayName}</p>
      {honorText && (
        <p className="text-[11px] text-[#7A9AA5] mt-2 italic leading-relaxed">{honorText}</p>
      )}

      <div className="flex items-center justify-center gap-1.5 mt-3">
        <div className="h-px w-5 bg-[#D0E5E5]/80" />
        <div className="w-1 h-1 rounded-full bg-[#D0E5E5]" />
        <div className="h-px w-5 bg-[#D0E5E5]/80" />
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
        background: "linear-gradient(180deg, #E6F4F4 0%, #DCF0F0 100%)",
        borderTop: "1px solid #C5E0E0",
        borderBottom: "1px solid #C5E0E0",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-12 bg-[#5BC8C8]/60" />
            <span className="text-[#5BC8C8] text-base" aria-hidden>✦</span>
            <div className="h-px w-12 bg-[#5BC8C8]/60" />
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl text-[#1A2B38] mb-4">
            Wall of Honor
          </h2>
          <p className="text-[#3A6A78] leading-relaxed max-w-xl mx-auto">
            With gratitude to the families and donors building this mikvah for
            generations. Your names are woven into the fabric of this sacred space.
          </p>
        </div>

        {/* Tiers */}
        <div className="space-y-14">
          {donorWall.map((tier) => (
            <div key={tier.id}>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-[#A8D5D5]" />
                <p className="text-[11px] tracking-[0.22em] uppercase text-[#3A9898] font-medium px-2">
                  {tier.tierName}
                </p>
                <div className="h-px flex-1 bg-[#A8D5D5]" />
              </div>

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
            className="inline-block px-10 py-8 rounded-sm"
            style={{ background: "#FFFFFF", border: "1px solid #C5E0E0" }}
          >
            <p className="font-serif text-xl text-[#1A2B38] mb-2">Join the Wall of Honor</p>
            <p className="text-sm text-[#5A7A85] mb-6 max-w-xs">
              Your name can be among those who built this sacred space for the
              Laurentian community.
            </p>
            <a
              href="#dedications"
              className="inline-block px-7 py-3 bg-[#5BC8C8] text-white text-sm font-semibold hover:bg-[#3DA8A8] transition-colors rounded-sm"
            >
              Make a Dedication
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
