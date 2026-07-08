"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  majorDedications,
  roomDedications,
  communityDedications,
  generalDonationTiers,
  type Dedication,
  type GeneralDonationTier,
} from "@/data/dedications";
import { InfoDrawer } from "@/components/ui/InfoDrawer";

function formatAmount(amount: number | null) {
  if (!amount) return null;
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(amount);
}

function DedicationCard({
  dedication,
  onSelectAvailable,
}: {
  dedication: Dedication;
  onSelectAvailable: () => void;
}) {
  const isReserved = dedication.status === "reserved";

  return (
    <motion.div
      className={cn(
        "relative flex flex-col overflow-hidden transition-shadow duration-300",
        !isReserved && "hover:shadow-[0_4px_20px_-6px_rgba(28,25,23,0.12)]"
      )}
      style={{ background: "#FFFFFF", border: "1px solid #E8E3DA" }}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.38 }}
    >
      {/* Top accent */}
      <div
        className="h-[3px] w-full"
        style={{ background: isReserved ? "#B59A5A" : "#1C1917" }}
      />

      <div className="p-5 flex flex-col flex-1">
        {dedication.amount && (
          <p className="font-serif text-xl mb-1 leading-none text-[#B59A5A]">
            {formatAmount(dedication.amount)}
          </p>
        )}

        <h3 className="font-serif text-[15px] text-[#1C1917] leading-snug mb-2 mt-1">
          {dedication.name}
        </h3>

        {dedication.description && (
          <p className="text-xs text-[#A8A29E] leading-relaxed mb-3 flex-1">
            {dedication.description}
          </p>
        )}

        {dedication.availableCount && dedication.availableCount > 1 && (
          <p className="text-xs text-[#78716C] mb-3">{dedication.availableCount} available</p>
        )}

        <div className="mt-auto pt-3 border-t border-[#EDE9E0]">
          {isReserved ? (
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#B59A5A] flex-shrink-0" />
              <p className="text-xs text-[#B59A5A] italic">Dedicated with gratitude</p>
            </div>
          ) : (
            <button
              onClick={onSelectAvailable}
              className="w-full py-2 border border-[#1C1917] text-[#1C1917] text-xs font-semibold hover:bg-[#1C1917] hover:text-[#FCFBF8] transition-colors tracking-wide"
            >
              [ Naming Opportunity Available ]
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function GeneralDonationCard({
  tier,
  onSelect,
}: {
  tier: GeneralDonationTier;
  onSelect: () => void;
}) {
  return (
    <motion.button
      className="relative flex flex-col items-center justify-center p-5 text-center group transition-shadow duration-300 hover:shadow-[0_4px_16px_-6px_rgba(28,25,23,0.12)]"
      style={{ background: "#FFFFFF", border: "1px solid #E8E3DA" }}
      onClick={onSelect}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35 }}
    >
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#B59A5A]" />

      {tier.amount != null ? (
        <>
          <p className="font-serif text-xl text-[#B59A5A] mb-0.5 mt-1">{formatAmount(tier.amount)}</p>
          <p className="text-[11px] text-[#A8A29E] leading-snug">{tier.label.split(" — ")[0]}</p>
        </>
      ) : (
        <>
          <p className="font-serif text-lg text-[#B59A5A] mb-0.5 mt-1">Custom</p>
          <p className="text-[11px] text-[#A8A29E]">Other amount</p>
        </>
      )}

      <p className="mt-3 text-xs text-[#78716C] font-semibold group-hover:text-[#1C1917] transition-colors">
        Donate →
      </p>
    </motion.button>
  );
}

function CategorySection({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-16">
      <div className="mb-6 pb-4 border-b border-[#DDD8CF]">
        <h3 className="font-serif text-2xl text-[#1C1917]">{title}</h3>
        {subtitle && <p className="text-sm text-[#A8A29E] mt-1 leading-relaxed">{subtitle}</p>}
      </div>
      {children}
    </div>
  );
}

export function Dedications() {
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    <section
      id="dedications"
      className="py-24 lg:py-32"
      style={{ background: "#F5F3EE" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#B59A5A]" />
            <p className="text-[11px] tracking-[0.25em] uppercase text-[#B59A5A] font-medium">
              Dedication Opportunities
            </p>
          </div>
          <h2 className="font-serif text-3xl lg:text-5xl text-[#1C1917] leading-tight mb-4">
            Leave your mark — forever.
          </h2>
          <p className="text-[#78716C] leading-relaxed max-w-2xl text-[1.05rem]">
            Each dedication is inscribed in the Wall of Honor and woven into the
            fabric of this sacred building — a legacy for your family, in memory
            of a loved one, or in honor of a milestone.
          </p>
        </div>

        <CategorySection
          title="Major Dedications"
          subtitle="Foundational naming opportunities for the building's most significant spaces."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {majorDedications.map((d) => (
              <DedicationCard
                key={d.id}
                dedication={d}
                onSelectAvailable={() => setInfoOpen(true)}
              />
            ))}
          </div>
        </CategorySection>

        <CategorySection
          title="Room & Space Dedications"
          subtitle="Name the rooms, suites, and special features of Mikvah Laurentian."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {roomDedications.map((d) => (
              <DedicationCard
                key={d.id}
                dedication={d}
                onSelectAvailable={() => setInfoOpen(true)}
              />
            ))}
          </div>
        </CategorySection>

        <CategorySection
          title="Community Dedications"
          subtitle="Every door, walkway, and space is an opportunity to give and be remembered."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {communityDedications.map((d) => (
              <DedicationCard
                key={d.id}
                dedication={d}
                onSelectAvailable={() => setInfoOpen(true)}
              />
            ))}
          </div>
        </CategorySection>

        <CategorySection
          title="General Donations"
          subtitle="Every gift — of any size — builds Mikvah Laurentian and earns a place on the Wall of Honor."
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {generalDonationTiers.map((t) => (
              <GeneralDonationCard
                key={t.id}
                tier={t}
                onSelect={() => setInfoOpen(true)}
              />
            ))}
          </div>
        </CategorySection>

      </div>

      <InfoDrawer open={infoOpen} onClose={() => setInfoOpen(false)} />
    </section>
  );
}
