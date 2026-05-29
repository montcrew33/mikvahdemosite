"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

// Blue version — used on light/scrolled nav
const LOGO_BLUE = "https://i.imgur.com/mFubCKO.png";
// White version — used over the hero image
const LOGO_WHITE = "https://i.imgur.com/Jfm4CIJ.png";

const navItems = [
  { label: "Vision", href: "#vision" },
  { label: "Campaign", href: "#campaign" },
  { label: "Dedications", href: "#dedications" },
  { label: "Wall of Honor", href: "#wall-of-honor" },
  { label: "Updates", href: "#updates" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 60); }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-white/97 backdrop-blur-sm shadow-sm border-b border-[#D0E5E5]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-[88px] lg:h-[100px]">

          {/* Logo — white over hero, blue when scrolled */}
          <a href="#" className="flex items-center flex-shrink-0">
            {/* White logo: visible only over the hero (not scrolled) */}
            <Image
              src={LOGO_WHITE}
              alt="Living Waters — Mikvah Laurentian"
              width={260}
              height={85}
              className={cn(
                "h-[72px] lg:h-[84px] w-auto object-contain absolute transition-opacity duration-300",
                scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
              )}
              priority
              unoptimized
            />
            {/* Blue logo: visible when scrolled */}
            <Image
              src={LOGO_BLUE}
              alt="Living Waters — Mikvah Laurentian"
              width={260}
              height={85}
              className={cn(
                "h-[72px] lg:h-[84px] w-auto object-contain transition-opacity duration-300",
                scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
              )}
              unoptimized
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[#5BC8C8]",
                  scrolled ? "text-[#1A2B38]" : "text-white drop-shadow-sm"
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Donate CTA */}
          <div className="hidden lg:block">
            <a
              href="#dedications"
              className={cn(
                "px-5 py-2 text-sm font-semibold transition-colors rounded-sm",
                scrolled
                  ? "bg-[#5BC8C8] text-white hover:bg-[#3DA8A8]"
                  : "bg-white/15 border border-white/40 text-white hover:bg-white/25 backdrop-blur-sm"
              )}
            >
              Donate
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className={cn("lg:hidden p-2 transition-colors", scrolled ? "text-[#1A2B38]" : "text-white")}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#D0E5E5]">
          <nav className="px-6 py-5 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-[#2C4A55] hover:text-[#5BC8C8] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#dedications"
              className="mt-2 px-5 py-2.5 bg-[#5BC8C8] text-white text-sm font-semibold text-center rounded-sm"
              onClick={() => setMobileOpen(false)}
            >
              Donate
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
