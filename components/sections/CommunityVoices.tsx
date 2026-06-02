"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    id: 1,
    quote:
      "The care and intention behind every detail of this mikvah is extraordinary. It truly feels like a place where something sacred happens. Our community is so fortunate.",
    author: "R.K.",
    location: "Sainte-Agathe-des-Monts",
  },
  {
    id: 2,
    quote:
      "I have been to many mikvaos, and this is on another level — private, dignified, and beautiful. The preparation rooms are immaculate. I felt genuinely honored.",
    author: "M.F.",
    location: "Laurentian Community",
  },
  {
    id: 3,
    quote:
      "For the first time, going to the mikvah felt like something I looked forward to, not something I rushed through. This space changes the entire experience.",
    author: "D.L.",
    location: "Montreal",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M7 1l1.55 3.14L12 4.73l-2.5 2.43.59 3.44L7 9.01 4.91 10.6l.59-3.44L3 4.73l3.45-.59L7 1z"
            fill="#B59A5A"
          />
        </svg>
      ))}
    </div>
  );
}

export function CommunityVoices() {
  return (
    <section
      className="py-20 lg:py-28"
      style={{ background: "#F5F3EE", borderBottom: "1px solid #DDD8CF" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#B59A5A]" />
            <p className="text-[10px] tracking-[0.28em] uppercase text-[#B59A5A] font-medium">
              Community Voices
            </p>
            <div className="h-px w-8 bg-[#B59A5A]" />
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl text-[#1C1917]">
            Words from Our Community
          </h2>
        </motion.div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              className="flex flex-col p-8"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E8E3DA",
              }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Stars />

              <blockquote className="font-serif italic text-[#3D3830] leading-relaxed flex-1 mb-6 text-[0.97rem]">
                &ldquo;{review.quote}&rdquo;
              </blockquote>

              <div className="border-t border-[#EDE9E0] pt-4">
                <p className="text-sm font-semibold text-[#1C1917]">{review.author}</p>
                <p className="text-xs text-[#A8A29E] mt-0.5">{review.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Primary CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1C1917] text-[#FCFBF8] text-sm font-semibold tracking-wide hover:bg-[#3D3830] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="opacity-75">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
            </svg>
            Share Your Experience on Google
          </a>
        </motion.div>

      </div>
    </section>
  );
}
