"use client";

import { motion } from "framer-motion";

const BG_IMAGE = "https://i.imgur.com/wkRmukO.jpg";

export function WhyThisMikvah() {
  return (
    <section
      id="vision"
      className="relative py-28 lg:py-40 overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${BG_IMAGE}")` }}
      />
      {/* Light overlay so text stays crisp */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(255,255,255,0.84)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Title */}
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#5BC8C8] font-medium mb-5">
            Mikvah Laurentian
          </p>

          {/* Tagline */}
          <h2 className="font-serif text-3xl lg:text-4xl text-[#1A2B38] leading-snug mb-6">
            Living Waters.<br />Living Relationships.
          </h2>

          <div className="w-12 h-px bg-[#5BC8C8] mx-auto mb-8" />

          {/* Body copy */}
          <div className="space-y-5 text-[#3A5A68] leading-[1.85] text-[1.05rem]">
            <p>
              Today, we invite Hashem in. To our family. Our community. Our city.
              We invite growth and wholeness. Kedusha and continuity. Bracha and
              renewal. It is said that when you build a mikvah, Hashem becomes an
              active investor in the growth of your city.
            </p>
            <p>
              Today, we'd like you to be one of our investors, too. To join with
              Hashem as an equal partner in the wellbeing of our community and
              health of our families. Give now and make the bracha come alive for you.
            </p>
            <p>
              Your support is essential to getting our mikvah built and making a
              keli for living brachos for everyone — whether or not you use the
              mikvah personally. In giving, you honor the akeres habayis in your life.
            </p>
            <p>
              A Jewish woman gives so much of herself — physically, spiritually,
              mentally and emotionally — to build and raise the next generation.
              Today, we honor and invest in her.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a
              href="#dedications"
              className="px-7 py-3.5 bg-[#5BC8C8] text-white text-sm font-semibold hover:bg-[#3DA8A8] transition-colors rounded-sm"
            >
              Dedicate a Space
            </a>
            <a
              href="#dedications"
              className="px-7 py-3.5 border border-[#5BC8C8] text-[#1A2B38] text-sm font-semibold hover:bg-[#5BC8C8]/10 transition-colors rounded-sm"
            >
              Make a Gift
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
