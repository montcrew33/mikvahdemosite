import type { Metadata } from "next";
import { Lora, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "600"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Mikvah Laurentian | Living Waters Capital Campaign",
  description:
    "A sacred space for taharah, renewal, and generations of Jewish family life. Join the Laurentian Jewish community in building Mikvah Laurentian.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${lora.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-white font-sans text-[#1A2B38] antialiased">
        {children}
      </body>
    </html>
  );
}
