"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface RenderingTab {
  id: string;
  label: string;
  src: string;
  description: string;
}

const tabs: RenderingTab[] = [
  {
    id: "floor-plan",
    label: "Floor Plan",
    src: "https://i.imgur.com/Ajs7oyP.jpg",
    description: "A thoughtfully designed layout ensuring privacy, flow, and dignity throughout.",
  },
  {
    id: "entrance",
    label: "Entrance",
    src: "https://i.imgur.com/TOgwJz9.jpg",
    description: "A graceful entrance foyer that invites guests with warmth and calm.",
  },
  {
    id: "womens-mikvah",
    label: "The Women's Mikvah",
    src: "https://i.imgur.com/FhvraiV.jpg",
    description: "Serene immersion rooms built to the highest halachic and aesthetic standards.",
  },
  {
    id: "mens-mikvah",
    label: "The Men's Mikvah",
    src: "https://i.imgur.com/yZzWygb.jpg",
    description: "A dedicated mikvah for men, built with the same reverence for halacha and community.",
  },
  {
    id: "prep-rooms",
    label: "Preparation Rooms",
    src: "https://i.imgur.com/InwSXQB.jpg",
    description: "Private, beautifully appointed preparation suites designed with care for every detail.",
  },
];

export function PresentingMikvah() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const active = tabs.find((t) => t.id === activeTab)!;

  return (
    <section
      className="py-24 lg:py-32"
      style={{ background: "#FFFFFF", borderTop: "1px solid #D0E5E5", borderBottom: "1px solid #D0E5E5" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header — no eyebrow */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10">
          <h2 className="font-serif text-3xl lg:text-4xl text-[#1A2B38]">
            Presenting Mikvah Laurentian
          </h2>
          <p className="text-[#5A7A85] text-sm max-w-xs leading-relaxed">
            Architectural renderings and floor plans of the completed building.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium transition-all rounded-sm ${
                activeTab === tab.id
                  ? "bg-[#5BC8C8] text-white"
                  : "bg-white border border-[#D0E5E5] text-[#2C4A55] hover:border-[#5BC8C8]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <div className="relative w-full rounded-sm overflow-hidden border border-[#D0E5E5]" style={{ aspectRatio: "16/9" }}>
              <Image
                src={active.src}
                alt={active.label}
                fill
                className="object-cover"
                unoptimized
                priority={activeTab === tabs[0].id}
              />
            </div>

            <div className="mt-5 flex items-start gap-3">
              <div className="h-px w-6 bg-[#5BC8C8] mt-2.5 flex-shrink-0" />
              <p className="text-[#5A7A85] leading-relaxed text-sm">{active.description}</p>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
