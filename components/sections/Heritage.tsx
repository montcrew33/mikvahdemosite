"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const HERITAGE_IMAGE = "https://i.imgur.com/wkRmukO.jpg";

export function Heritage() {
  return (
    <section
      id="heritage"
      className="py-0 overflow-hidden"
      style={{ borderBottom: "1px solid #DDD8CF" }}
    >
      <div
        className="grid grid-cols-1 lg:grid-cols-2"
        style={{ minHeight: "640px" }}
      >

        {/* Left — vertical image */}
        <motion.div
          className="relative overflow-hidden"
          style={{ minHeight: "420px" }}
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <Image
            src={HERITAGE_IMAGE}
            alt="Heritage of Mikvah Laurentian — Sainte-Agathe Jewish Community"
            fill
            className="object-cover"
            unoptimized
          />
          {/* Warm overlay */}
          <div
            className="absolute inset-0"
            style={{ background: "rgba(28,25,23,0.18)" }}
          />
        </motion.div>

        {/* Right — text */}
        <motion.div
          className="flex flex-col justify-center px-10 py-16 lg:py-24 lg:px-16"
          style={{ background: "#FAF7F2" }}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#B59A5A]" />
            <p className="text-[10px] tracking-[0.28em] uppercase text-[#B59A5A] font-medium">
              The Heritage
            </p>
          </div>

          <h2 className="font-serif text-3xl lg:text-[2.4rem] text-[#1C1917] leading-snug mb-6">
            The Cornerstone of Continuity
          </h2>

          <div className="w-10 h-px bg-[#DDD8CF] mb-8" />

          <div className="space-y-5 text-[#78716C] leading-[1.85] text-[1.02rem]">
            <p>
              A Mikvah is not simply a ritual bath — it is the foundational
              institution of Jewish life. Jewish law establishes it before a
              synagogue, a Torah scroll, or a communal hall: without a mikvah,
              a community cannot fully flourish.
            </p>
            <p>
              Steeped in thousands of years of tradition, the Mikvah is the
              living root of family purity, spiritual renewal, and the unbroken
              continuity of the Jewish people. It is where <em>taharah</em> — the
              sacred state of purity — is achieved, where the cycle of life is
              consecrated, and where every Jewish woman is honored as the
              <em> akeres habayis</em>, the very cornerstone of the home.
            </p>
            <p>
              To build a Mikvah is to invest in the soul of the Sainte-Agathe
              Jewish Community itself — for this generation, and every generation
              that follows.
            </p>
          </div>

          <div className="mt-10 flex gap-4">
            <a
              href="#dedications"
              className="px-6 py-3 bg-[#1C1917] text-[#FCFBF8] text-sm font-semibold tracking-wide hover:bg-[#3D3830] transition-colors"
            >
              Dedicate a Space
            </a>
            <a
              href="#"
              className="px-6 py-3 border border-[#1C1917] text-[#1C1917] text-sm font-semibold tracking-wide hover:bg-[#1C1917] hover:text-[#FCFBF8] transition-colors"
            >
              Book a Visit
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
