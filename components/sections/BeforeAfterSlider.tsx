"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronsLeftRight } from "lucide-react";

const BEFORE_IMAGE = "https://i.imgur.com/gSDQQ5R.jpg"; // before
const AFTER_IMAGE  = "https://i.imgur.com/DVBZdyr.jpg"; // finished mikvah building (hero image)

export function BeforeAfterSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos]   = useState(50);
  const [dragging, setDragging]     = useState(false);

  const updatePos = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePos(e.clientX);
  }
  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!dragging) return;
    updatePos(e.clientX);
  }
  function onPointerUp() { setDragging(false); }

  return (
    <section
      className="py-20 lg:py-28"
      style={{ background: "#FCFBF8", borderBottom: "1px solid #DDD8CF" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#B59A5A]" />
            <p className="text-[10px] tracking-[0.28em] uppercase text-[#B59A5A] font-medium">
              The Transformation
            </p>
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl text-[#1C1917] leading-snug">
            From Foundation to Sanctuary
          </h2>
          <p className="mt-3 text-[#78716C] text-sm">
            Drag the divider to reveal the finished mikvah.
          </p>
        </motion.div>

        {/* Slider */}
        <motion.div
          ref={containerRef}
          className="relative w-full select-none overflow-hidden"
          style={{
            aspectRatio: "16/7",
            cursor: dragging ? "grabbing" : "col-resize",
            border: "1px solid #DDD8CF",
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* BEFORE — raw framing (full width, always visible) */}
          <div className="absolute inset-0">
            <Image
              src={BEFORE_IMAGE}
              alt="Raw construction framing — before"
              fill
              className="object-cover"
              unoptimized
              priority
            />
          </div>

          {/* AFTER — finished room (revealed from left) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <div className="absolute inset-0" style={{ width: `${10000 / sliderPos}%`, maxWidth: "none" }}>
              <Image
                src={AFTER_IMAGE}
                alt="Finished immersion room — after"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>

          {/* Divider line */}
          <div
            className="absolute top-0 bottom-0 w-px bg-white/80"
            style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
          />

          {/* Handle */}
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white/95 border border-[#DDD8CF]"
            style={{ left: `${sliderPos}%` }}
          >
            <ChevronsLeftRight size={16} className="text-[#78716C]" />
          </div>

          {/* Labels */}
          <div className="absolute bottom-3 left-3 px-2 py-0.5 bg-[#1C1917]/70 text-white text-[10px] tracking-widest uppercase pointer-events-none">
            Before
          </div>
          <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-[#1C1917]/70 text-white text-[10px] tracking-widest uppercase pointer-events-none">
            After
          </div>
        </motion.div>

      </div>
    </section>
  );
}
