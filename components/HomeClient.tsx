"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { SanctuaryGallery } from "@/components/sections/SanctuaryGallery";
import { CampaignProgress } from "@/components/sections/CampaignProgress";
import { Heritage } from "@/components/sections/Heritage";
import { VisitAccordion } from "@/components/sections/VisitAccordion";
import { BeforeAfterSlider } from "@/components/sections/BeforeAfterSlider";
import { Dedications } from "@/components/sections/Dedications";
import { ChanasSpace } from "@/components/sections/ChanasSpace";
import { WallOfHonor } from "@/components/sections/WallOfHonor";
import { CommunityVoices } from "@/components/sections/CommunityVoices";
import { InfoDrawer } from "@/components/ui/InfoDrawer";

export function HomeClient() {
  const [infoOpen, setInfoOpen] = useState(false);

  function scrollToDedications() {
    document.getElementById("dedications")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Header />

      <main className="overflow-x-hidden">
        <Hero
          onDedicate={scrollToDedications}
          onDonate={() => setInfoOpen(true)}
        />
        <SanctuaryGallery />
        <CampaignProgress />
        <Heritage />
        <VisitAccordion />
        <BeforeAfterSlider />
        <Dedications />
        <ChanasSpace />
        <WallOfHonor />
        <CommunityVoices />
      </main>

      <Footer />

      <InfoDrawer open={infoOpen} onClose={() => setInfoOpen(false)} />
    </>
  );
}
