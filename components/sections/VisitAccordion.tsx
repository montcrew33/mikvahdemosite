"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const items = [
  {
    id: 1,
    title: "The Preparation Process",
    body: "Each visit begins in your own private preparation suite — a calm, unhurried room appointed with warm lighting, a deep soaking tub, and everything you need for a thorough and meditative preparation. Our spa-like environment is designed to slow you down and center you before your immersion, transforming what could feel like a routine into a genuinely sacred transition.",
  },
  {
    id: 2,
    title: "Customs & Taharah",
    body: "Mikvah Laurentian is built and operated in strict adherence to Orthodox Halacha. The waters are sourced and maintained according to the highest standards of kashrus under rabbinic supervision. For those new to the practice of Family Purity, a knowledgeable and sensitive guide is available to answer questions and walk you through the immersion process with warmth and discretion.",
  },
  {
    id: 3,
    title: "What is Provided",
    body: "We provide freshly laundered, luxuriously soft towels, premium grooming products, a plush robe, and all preparation essentials. Simply arrive; everything you need is thoughtfully prepared for you. Our goal is that every woman leaves feeling cared for and renewed — body and soul.",
  },
  {
    id: 4,
    title: "Reservations & Donations",
    body: "Appointments are required and can be made online or by calling our attendant directly. The mikvah operates on a donation basis — a suggested usage donation is deeply appreciated and ensures we can continue serving our community beautifully. No woman is ever turned away for financial reasons.",
  },
];

export function VisitAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      className="py-20 lg:py-28"
      style={{ background: "#F5F3EE", borderBottom: "1px solid #DDD8CF" }}
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#B59A5A]" />
            <p className="text-[10px] tracking-[0.28em] uppercase text-[#B59A5A] font-medium">
              Preparing for Your Visit
            </p>
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl text-[#1C1917] leading-snug">
            Everything You Need to Know
          </h2>
        </motion.div>

        {/* Accordion items */}
        <div className="divide-y" style={{ borderTop: "1px solid #DDD8CF", borderBottom: "1px solid #DDD8CF" }}>
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <button
                className="w-full flex items-center justify-between py-5 text-left group"
                onClick={() => setOpen(open === item.id ? null : item.id)}
                aria-expanded={open === item.id}
              >
                <h3 className="font-serif text-[1.05rem] text-[#1C1917] group-hover:text-[#B59A5A] transition-colors pr-4">
                  {item.title}
                </h3>
                <span className="flex-shrink-0 text-[#B59A5A]">
                  {open === item.id
                    ? <Minus size={16} />
                    : <Plus size={16} />
                  }
                </span>
              </button>

              <AnimatePresence>
                {open === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-[#78716C] leading-relaxed text-[0.97rem]">
                      {item.body}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Book CTA */}
        <div className="mt-10 flex justify-center">
          <a
            href="#"
            className="px-7 py-3 border border-[#1C1917] text-[#1C1917] text-sm font-semibold tracking-wide hover:bg-[#1C1917] hover:text-[#FCFBF8] transition-colors"
          >
            Book a Visit
          </a>
        </div>

      </div>
    </section>
  );
}
