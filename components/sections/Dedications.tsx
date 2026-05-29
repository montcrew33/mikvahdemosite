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
import { DedicationModal } from "@/components/ui/DedicationModal";
import { DonationModal } from "@/components/ui/DonationModal";

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
  onSelect,
}: {
  dedication: Dedication;
  onSelect: (d: Dedication) => void;
}) {
  const isReserved = dedication.status === "reserved";

  return (
    <motion.div
      className={cn(
        "relative flex flex-col rounded-sm overflow-hidden transition-shadow duration-300",
        !isReserved && "hover:shadow-[0_4px_20px_-6px_rgba(26,43,56,0.14)]"
      )}
      style={{
        background: "#FFFFFF",
        border: "1px solid #E0EAEA",
      }}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.38 }}
    >
      {/* Top accent */}
      <div
        className="h-[3px] w-full"
        style={{ background: isReserved ? "#5BC8C8" : "#1E3A8A" }}
      />

      <div className="p-5 flex flex-col flex-1">
        {dedication.amount && (
          <p className="font-serif text-xl mb-1 leading-none text-[#5BC8C8]">
            {formatAmount(dedication.amount)}
          </p>
        )}

        <h3 className="font-serif text-[15px] text-[#1A2B38] leading-snug mb-2 mt-1">
          {dedication.name}
        </h3>

        {dedication.description && (
          <p className="text-xs text-[#7A9AA5] leading-relaxed mb-3 flex-1">
            {dedication.description}
          </p>
        )}

        {dedication.availableCount && dedication.availableCount > 1 && (
          <p className="text-xs text-[#8AAAB5] mb-3">{dedication.availableCount} available</p>
        )}

        <div className="mt-auto pt-3 border-t border-[#E8F2F2]">
          {isReserved ? (
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#5BC8C8] flex-shrink-0" />
              <p className="text-xs text-[#5BC8C8] italic">Reserved with gratitude</p>
            </div>
          ) : (
            <button
              onClick={() => onSelect(dedication)}
              className="w-full py-2 bg-[#5BC8C8] text-white text-xs font-semibold hover:bg-[#3DA8A8] transition-colors rounded-sm"
            >
              Dedicate
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
  onSelect: (t: GeneralDonationTier) => void;
}) {
  return (
    <motion.button
      className="relative flex flex-col items-center justify-center rounded-sm p-5 text-center group transition-shadow duration-300 hover:shadow-[0_4px_16px_-6px_rgba(26,43,56,0.14)]"
      style={{ background: "#FFFFFF", border: "1px solid #E0EAEA" }}
      onClick={() => onSelect(tier)}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35 }}
    >
      <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-sm bg-[#5BC8C8]" />

      {tier.amount != null ? (
        <>
          <p className="font-serif text-xl text-[#5BC8C8] mb-0.5 mt-1">{formatAmount(tier.amount)}</p>
          <p className="text-[11px] text-[#8AAAB5] leading-snug">{tier.label.split(" — ")[0]}</p>
        </>
      ) : (
        <>
          <p className="font-serif text-lg text-[#5BC8C8] mb-0.5 mt-1">Custom</p>
          <p className="text-[11px] text-[#8AAAB5]">Other amount</p>
        </>
      )}

      <p className="mt-3 text-xs text-[#5BC8C8] font-semibold group-hover:text-[#1A2B38] transition-colors">
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
      <div className="mb-6 pb-4 border-b border-[#D0E5E5]">
        <h3 className="font-serif text-2xl text-[#1A2B38]">{title}</h3>
        {subtitle && <p className="text-sm text-[#7A9AA5] mt-1 leading-relaxed">{subtitle}</p>}
      </div>
      {children}
    </div>
  );
}

export function Dedications() {
  const [selectedDedication, setSelectedDedication] = useState<Dedication | null>(null);
  const [selectedTier, setSelectedTier] = useState<GeneralDonationTier | null>(null);
  const [dedicationOpen, setDedicationOpen] = useState(false);
  const [donationOpen, setDonationOpen] = useState(false);

  return (
    <section id="dedications" className="py-24 lg:py-32" style={{ background: "#F3FAFA" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#5BC8C8]" />
            <p className="text-[11px] tracking-[0.25em] uppercase text-[#5BC8C8] font-medium">
              Dedication Opportunities
            </p>
          </div>
          <h2 className="font-serif text-3xl lg:text-5xl text-[#1A2B38] leading-tight mb-4">
            Leave your mark — forever.
          </h2>
          <p className="text-[#5A7A85] leading-relaxed max-w-2xl text-[1.05rem]">
            Each dedication is inscribed in the Wall of Honor and woven into the
            fabric of this sacred building. A dedication is a legacy — for your
            family, in memory of a loved one, or in honor of a milestone.
          </p>
        </div>

        <CategorySection
          title="Major Dedications"
          subtitle="Foundational naming opportunities for the building's most significant spaces."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {majorDedications.map((d) => (
              <DedicationCard key={d.id} dedication={d} onSelect={(d) => { setSelectedDedication(d); setDedicationOpen(true); }} />
            ))}
          </div>
        </CategorySection>

        <CategorySection
          title="Room & Space Dedications"
          subtitle="Name the rooms, suites, and special features of Mikvah Laurentian."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {roomDedications.map((d) => (
              <DedicationCard key={d.id} dedication={d} onSelect={(d) => { setSelectedDedication(d); setDedicationOpen(true); }} />
            ))}
          </div>
        </CategorySection>

        <CategorySection
          title="Community Dedications"
          subtitle="Every door, walkway, and space is an opportunity to give and be remembered."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {communityDedications.map((d) => (
              <DedicationCard key={d.id} dedication={d} onSelect={(d) => { setSelectedDedication(d); setDedicationOpen(true); }} />
            ))}
          </div>
        </CategorySection>

        <CategorySection
          title="General Donations"
          subtitle="Every gift — of any size — builds Mikvah Laurentian and earns a place on our Wall of Honor."
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {generalDonationTiers.map((t) => (
              <GeneralDonationCard key={t.id} tier={t} onSelect={(t) => { setSelectedTier(t); setDonationOpen(true); }} />
            ))}
          </div>
        </CategorySection>

      </div>

      <DedicationModal dedication={selectedDedication} open={dedicationOpen} onClose={() => setDedicationOpen(false)} />
      <DonationModal tier={selectedTier} open={donationOpen} onClose={() => setDonationOpen(false)} />
    </section>
  );
}
