import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Mikvah Laurentian | Living Waters Capital Campaign",
    template: "%s | Mikvah Laurentian",
  },
  description:
    "A sacred space for taharah, renewal, and generations of Jewish family life. Join the Sainte-Agathe Jewish Community in building Mikvah Laurentian.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${playfair.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-[#FCFBF8] font-sans text-[#1C1917] antialiased">
        {children}
      </body>
    </html>
  );
}
