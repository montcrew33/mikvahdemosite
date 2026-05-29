"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// Image #1 (https://imgur.com/undefined) was not a valid URL — using 4 images.
const IMAGES = [
  { id: "bp-2", src: "https://i.imgur.com/evHkdw4.jpg", alt: "Construction progress" },
  { id: "bp-3", src: "https://i.imgur.com/NXYKckw.jpg", alt: "Construction progress" },
  { id: "bp-4", src: "https://i.imgur.com/jagqXhI.jpg", alt: "Construction progress" },
  { id: "bp-5", src: "https://i.imgur.com/EjmnXuc.jpg", alt: "Construction progress" },
];

export function BuildingProgress() {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(dir: "left" | "right") {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -360 : 360, behavior: "smooth" });
  }

  return (
    <section
      id="updates"
      className="py-24 lg:py-32"
      style={{ background: "#FFFFFF", borderTop: "1px solid #D0E5E5" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#5BC8C8]" />
              <p className="text-[11px] tracking-[0.25em] uppercase text-[#5BC8C8] font-medium">
                Construction Updates
              </p>
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl text-[#1A2B38] mb-3">
              Building Progress
            </h2>
            <p className="text-[#5A7A85] leading-relaxed max-w-lg">
              From excavation to framing, the mikvah is already taking shape.
              Follow the progress made possible by our community.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <button onClick={() => scroll("left")} className="p-2.5 border border-[#D0E5E5] text-[#2C4A55] hover:border-[#5BC8C8] transition-colors rounded-sm" aria-label="Scroll left">
              <ChevronLeft size={18} />
            </button>
            <button onClick={() => scroll("right")} className="p-2.5 border border-[#D0E5E5] text-[#2C4A55] hover:border-[#5BC8C8] transition-colors rounded-sm" aria-label="Scroll right">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Scroll reel — images only, no descriptions */}
        <div ref={scrollRef} className="flex gap-5 overflow-x-auto pb-2 hide-scrollbar">
          {IMAGES.map((img, i) => (
            <motion.div
              key={img.id}
              className="flex-shrink-0 w-[72vw] sm:w-80 lg:w-96"
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.42, delay: i * 0.06 }}
            >
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[#D0E5E5]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
