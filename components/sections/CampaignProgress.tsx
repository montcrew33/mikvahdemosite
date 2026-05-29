"use client";

import { motion } from "framer-motion";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { campaignData } from "@/data/campaign";

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <div>
            <h2 className="font-serif text-3xl lg:text-4xl text-[#1A2B38] leading-snug mb-3">
              Building Mikvah Laurentian, together.
            </h2>
            <p className="text-[#5A7A85] leading-relaxed mb-10">
              Every dedication, every gift, every act of generosity brings us
              closer to opening the doors of this community's sacred mikvah.
            </p>

            {/* Progress */}
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

          {/* Right — stat grid */}
          <div className="grid grid-cols-2 gap-px bg-[#D0E5E5] border border-[#D0E5E5]">
            {[
              { label: "Raised",     value: formatCurrency(campaignData.raised),    color: "#1A2B38" },
              { label: "Goal",       value: formatCurrency(campaignData.goal),      color: "#1A2B38" },
              { label: "Funded",     value: `${campaignData.percentage}%`,          color: "#5BC8C8" },
              { label: "Remaining",  value: formatCurrency(campaignData.remaining), color: "#1E3A8A" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="bg-white px-6 py-7 text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <p className="font-serif text-2xl mb-1.5 leading-none" style={{ color: stat.color }}>
                  {stat.value}
                </p>
                <p className="text-[11px] tracking-[0.14em] uppercase text-[#8AAAB5]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
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
