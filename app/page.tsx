import type { Metadata } from "next";
import { HomeClient } from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "Mikvah Laurentian | Living Waters Capital Campaign",
  description:
    "Join the Sainte-Agathe Jewish Community in building Mikvah Laurentian — a sacred sanctuary for Taharah, Family Purity, and generations of Jewish life in the Laurentians.",
  keywords: [
    "Laurentians Mikvah",
    "Sainte-Agathe Jewish Community",
    "Taharah",
    "Family Purity",
    "Mikvah Laurentian",
    "Jewish ritual bath Quebec",
    "mikvah capital campaign",
    "Laurentian Jewish community",
  ],
  openGraph: {
    title: "Mikvah Laurentian | Living Waters Capital Campaign",
    description:
      "A sacred space for Taharah, renewal, and generations of Jewish family life. Join us in building Mikvah Laurentian.",
    locale: "en_CA",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function HomePage() {
  return <HomeClient />;
}
