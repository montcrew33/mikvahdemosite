"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { CampaignProgress } from "@/components/sections/CampaignProgress";
import { WhyThisMikvah } from "@/components/sections/WhyThisMikvah";
import { PresentingMikvah } from "@/components/sections/PresentingMikvah";
import { Dedications } from "@/components/sections/Dedications";
import { WallOfHonor } from "@/components/sections/WallOfHonor";
import { BuildingProgress } from "@/components/sections/BuildingProgress";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { DonationModal } from "@/components/ui/DonationModal";
import { generalDonationTiers } from "@/data/dedications";

export default function HomePage() {
  const [heroDonateOpen, setHeroDonateOpen] = useState(false);

  const defaultTier = generalDonationTiers[0];

  function scrollToDedications() {
    document.getElementById("dedications")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Header />

      <main className="overflow-x-hidden">
        <Hero
          onDedicate={scrollToDedications}
          onDonate={() => setHeroDonateOpen(true)}
        />
        <CampaignProgress />
        <WhyThisMikvah />
        <PresentingMikvah />
        <Dedications />
        <WallOfHonor />
        <BuildingProgress />
        <ContactCTA
          onDedicate={scrollToDedications}
          onDonate={() => setHeroDonateOpen(true)}
        />
      </main>

      <Footer />

      {/* Global donation modal triggered from Hero / ContactCTA */}
      <DonationModal
        tier={heroDonateOpen ? defaultTier : null}
        open={heroDonateOpen}
        onClose={() => setHeroDonateOpen(false)}
      />
    </>
  );
}
