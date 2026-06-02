"use client";

import { motion } from "framer-motion";

export function ChanasSpace() {
  return (
    <section
      className="py-0 overflow-hidden"
      style={{ background: "#FAF7F2", borderBottom: "1px solid #DDD8CF" }}
    >
      <div
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2"
        style={{ minHeight: "520px" }}
      >

        {/* Left — portrait placeholder */}
        <motion.div
          className="relative flex items-stretch"
          style={{ minHeight: "360px" }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div
            className="w-full h-full"
            style={{
              background: "linear-gradient(135deg, #EDE9E0 0%, #DDD8CF 100%)",
              minHeight: "360px",
            }}
          >
            {/* Elegant portrait placeholder */}
            <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-12">
              <div
                className="w-28 h-28 rounded-full mb-2"
                style={{ background: "#D4BA7A", opacity: 0.35 }}
              />
              <div
                className="h-px w-16"
                style={{ background: "#B59A5A", opacity: 0.4 }}
              />
              <p
                className="text-[10px] tracking-[0.28em] uppercase mt-2"
                style={{ color: "#A8A29E" }}
              >
                Portrait
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right — copy */}
        <motion.div
          className="flex flex-col justify-center px-10 py-16 lg:py-20 lg:px-16"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#B59A5A]" />
            <p className="text-[10px] tracking-[0.28em] uppercase text-[#B59A5A] font-medium">
              Nurturing Deep Connections
            </p>
          </div>

          <h2 className="font-serif text-3xl lg:text-[2.2rem] text-[#1C1917] leading-snug mb-6">
            Chana&rsquo;s Space
          </h2>

          <div className="w-10 h-px bg-[#DDD8CF] mb-8" />

          <blockquote
            className="font-serif italic text-[#3D3830] leading-relaxed mb-6"
            style={{ fontSize: "clamp(1.05rem, 1.6vw, 1.2rem)" }}
          >
            &ldquo;A mikvah is not the end of preparation — it is the beginning
            of intentional relationship. We offer a space for learning how to
            truly be present with one another: body, spirit, and soul.&rdquo;
          </blockquote>

          <p className="text-[#78716C] leading-relaxed mb-8 text-sm">
            Chana&rsquo;s Space is dedicated to the practice of Taharas HaMishpacha
            and the art of intentional, connected relationships. Through
            workshops, guidance, and the beauty of this sacred mikvah,
            couples discover a rhythm of renewal woven into the fabric of
            everyday life.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-2 self-start px-6 py-2.5 border border-[#1C1917] text-[#1C1917] text-sm font-semibold tracking-wide hover:bg-[#1C1917] hover:text-[#FCFBF8] transition-colors"
          >
            Follow @chanacarlebach
          </a>
        </motion.div>

      </div>
    </section>
  );
}
