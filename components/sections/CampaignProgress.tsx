"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { campaignData } from "@/data/campaign";

const SKETCH_IMAGE = "https://i.imgur.com/zqDFHux.jpg";

function formatCurrency(n: number) {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(n);
}

export function CampaignProgress() {
  return (
    <section
      id="campaign"
      className="py-20 lg:py-28"
      style={{ background: "#FCFBF8", borderBottom: "1px solid #DDD8CF" }}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — building sketch */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="w-full"
          >
            <div className="relative w-full aspect-square overflow-hidden" style={{ border: "1px solid #DDD8CF" }}>
              <Image
                src={SKETCH_IMAGE}
                alt="Architectural sketch of Mikvah Laurentian"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </motion.div>

          {/* Right — copy + progress */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#B59A5A]" />
              <p className="text-[10px] tracking-[0.28em] uppercase text-[#B59A5A] font-medium">
                Campaign Progress
              </p>
            </div>

            <h2 className="font-serif text-3xl lg:text-4xl text-[#1C1917] leading-snug mb-3">
              Building Mikvah Laurentian, together.
            </h2>
            <p className="text-[#78716C] leading-relaxed mb-10">
              Every dedication, every gift, every act of generosity brings us
              closer to opening the doors of this community&rsquo;s sacred mikvah.
            </p>

            <div>
              <div className="flex items-baseline justify-between mb-3">
                <p className="font-serif text-2xl text-[#1C1917]">
                  {formatCurrency(campaignData.raised)}{" "}
                  <span className="text-base font-sans text-[#78716C]">raised</span>
                </p>
                <p className="text-sm text-[#A8A29E]">
                  of {formatCurrency(campaignData.goal)} goal
                </p>
              </div>
              <ProgressBar percentage={campaignData.percentage} />
              <div className="mt-3 flex items-center gap-2">
                <p className="text-sm text-[#B59A5A] font-semibold">
                  {campaignData.percentage}% funded
                </p>
                <span className="text-[#DDD8CF]">·</span>
                <p className="text-sm text-[#A8A29E]">
                  {formatCurrency(campaignData.remaining)} remaining
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* CTA row */}
        <div className="mt-12 pt-8 border-t border-[#DDD8CF] flex flex-wrap gap-4 items-center">
          <a
            href="#dedications"
            className="px-6 py-3 bg-[#1C1917] text-[#FCFBF8] text-sm font-semibold hover:bg-[#3D3830] transition-colors tracking-wide"
          >
            See Dedication Opportunities
          </a>
          <p className="text-sm text-[#A8A29E]">
            Every dedication is inscribed in the Wall of Honor forever.
          </p>
        </div>
      </div>
    </section>
  );
}
