"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const LOGO_BLUE  = "https://i.imgur.com/mFubCKO.png";
const LOGO_WHITE = "https://i.imgur.com/Jfm4CIJ.png";

const navItems = [
  { label: "Vision",       href: "#vision" },
  { label: "Heritage",     href: "#heritage" },
  { label: "Our Story",    href: "/history" },
  { label: "Dedications",  href: "#dedications" },
  { label: "Wall of Honor", href: "#wall-of-honor" },
];

export function Header() {
  const [scrolled, setScrolled]   = useState(false);
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
          ? "bg-[#FCFBF8]/97 backdrop-blur-sm shadow-sm border-b border-[#DDD8CF]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-[76px] sm:h-[88px] lg:h-[100px]">

          {/* Logo */}
          <a href="#" className="flex items-center flex-shrink-0">
            <Image
              src={LOGO_WHITE}
              alt="Living Waters — Mikvah Laurentian"
              width={260} height={85}
              className={cn(
                "h-[56px] sm:h-[68px] lg:h-[80px] w-auto object-contain absolute transition-opacity duration-300",
                scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
              )}
              priority unoptimized
            />
            <Image
              src={LOGO_BLUE}
              alt="Living Waters — Mikvah Laurentian"
              width={260} height={85}
              className={cn(
                "h-[56px] sm:h-[68px] lg:h-[80px] w-auto object-contain transition-opacity duration-300",
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
                  "text-sm font-medium tracking-wide transition-colors",
                  scrolled
                    ? "text-[#3D3830] hover:text-[#1C1917]"
                    : "text-white/85 hover:text-white drop-shadow-sm"
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Booking Portal text link + Dedicate a Space button */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="#"
              className={cn(
                "text-sm font-semibold uppercase tracking-wider transition-colors",
                scrolled ? "text-slate-500 hover:text-slate-900" : "text-slate-200 hover:text-white"
              )}
            >
              Booking Portal ↗
            </a>
            <a
              href="#dedications"
              className={cn(
                "px-5 py-2 text-sm font-semibold tracking-wide transition-all border",
                scrolled
                  ? "border-[#1C1917] text-[#1C1917] hover:bg-[#1C1917] hover:text-[#FCFBF8]"
                  : "border-white/65 text-white hover:bg-white/10"
              )}
            >
              Dedicate a Space
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className={cn(
              "lg:hidden p-3 transition-colors",
              scrolled ? "text-[#1C1917]" : "text-white"
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#FCFBF8] border-t border-[#DDD8CF]">
          <nav className="px-6 py-5 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-[#3D3830] hover:text-[#1C1917] transition-colors tracking-wide"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#"
              className="text-sm font-semibold uppercase tracking-wider text-slate-500 hover:text-slate-900 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Booking Portal ↗
            </a>
            <a
              href="#dedications"
              className="mt-1 px-5 py-2.5 border border-[#1C1917] text-[#1C1917] text-sm font-semibold text-center tracking-wide hover:bg-[#1C1917] hover:text-[#FCFBF8] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Dedicate a Space
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
