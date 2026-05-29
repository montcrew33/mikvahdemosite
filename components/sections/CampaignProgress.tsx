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
      style={{ background: "#FFFFFF", borderBottom: "1px solid #D0E5E5" }}
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
            <div className="relative w-full aspect-square overflow-hidden rounded-sm">
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
            <h2 className="font-serif text-3xl lg:text-4xl text-[#1A2B38] leading-snug mb-3">
              Building Mikvah Laurentian, together.
            </h2>
            <p className="text-[#5A7A85] leading-relaxed mb-10">
              Every dedication, every gift, every act of generosity brings us
              closer to opening the doors of this community's sacred mikvah.
            </p>

            <div>
              <div className="flex items-baseline justify-between mb-3">
                <p className="font-serif text-xl text-[#1A2B38]">
                  {formatCurrency(campaignData.raised)} raised
                </p>
                <p className="text-sm text-[#8AAAB5]">
                  of {formatCurrency(campaignData.goal)}
                </p>
              </div>
              <ProgressBar percentage={campaignData.percentage} />
              <div className="mt-3 flex items-center gap-2">
                <p className="text-sm text-[#5BC8C8] font-semibold">
                  {campaignData.percentage}% funded
                </p>
                <span className="text-[#D0E5E5]">·</span>
                <p className="text-sm text-[#8AAAB5]">
                  {formatCurrency(campaignData.remaining)} remaining
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* CTA row */}
        <div className="mt-12 pt-8 border-t border-[#D0E5E5] flex flex-wrap gap-4 items-center">
          <a
            href="#dedications"
            className="px-6 py-3 bg-[#5BC8C8] text-white text-sm font-semibold hover:bg-[#3DA8A8] transition-colors rounded-sm"
          >
            See Dedication Opportunities
          </a>
          <p className="text-sm text-[#8AAAB5]">
            Every dedication is inscribed in the Wall of Honor forever.
          </p>
        </div>
      </div>
    </section>
  );
}
