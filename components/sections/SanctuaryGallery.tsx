"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = {
  left:         "https://i.imgur.com/DVBZdyr.jpg",
  topRight:     "https://i.imgur.com/InwSXQB.jpg",
  bottomRight:  "https://i.imgur.com/TOgwJz9.jpg",
};

export function SanctuaryGallery() {
  return (
    <section
      id="vision"
      className="py-16 lg:py-20"
      style={{ background: "#FCFBF8", borderBottom: "1px solid #DDD8CF" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-[#B59A5A]" />
            <p className="text-[10px] tracking-[0.28em] uppercase text-[#B59A5A] font-medium">
              The Sanctuary
            </p>
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl text-[#1C1917] leading-snug">
            A Space Built for the Soul
          </h2>
        </motion.div>

        {/* 3-image asymmetric grid: 65 / 35 */}
        <div
          className="grid gap-3"
          style={{ gridTemplateColumns: "65fr 35fr" }}
        >
          {/* Left — tall vertical image */}
          <motion.div
            className="overflow-hidden"
            style={{ aspectRatio: "4/5" }}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={images.left}
                alt="Exterior of Mikvah Laurentian"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                unoptimized
              />
            </div>
          </motion.div>

          {/* Right — two stacked images */}
          <div className="flex flex-col gap-3">
            <motion.div
              className="overflow-hidden flex-1"
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="relative w-full h-full overflow-hidden" style={{ minHeight: "200px" }}>
                <Image
                  src={images.topRight}
                  alt="Preparation rooms — Mikvah Laurentian"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  unoptimized
                />
              </div>
            </motion.div>

            <motion.div
              className="overflow-hidden flex-1"
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative w-full h-full overflow-hidden" style={{ minHeight: "200px" }}>
                <Image
                  src={images.bottomRight}
                  alt="Entrance — Mikvah Laurentian"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  unoptimized
                />
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
