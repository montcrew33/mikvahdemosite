"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface InfoDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function InfoDrawer({ open, onClose }: InfoDrawerProps) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") onClose(); }
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-[#1C1917]/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer panel */}
          <motion.aside
            className="relative w-full max-w-md bg-[#FCFBF8] h-full flex flex-col overflow-y-auto"
            style={{ borderLeft: "1px solid #DDD8CF" }}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.32, ease: "easeOut" }}
          >
            {/* Close */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-[#DDD8CF]">
              <p className="text-[10px] tracking-[0.28em] uppercase text-[#A8A29E]">
                Mikvah Laurentian
              </p>
              <button
                onClick={onClose}
                className="p-1.5 text-[#78716C] hover:text-[#1C1917] transition-colors"
                aria-label="Close drawer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col px-8 py-10">
              {/* Ornament */}
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-[#B59A5A]" />
                <span className="text-[#B59A5A] text-xs" aria-hidden>✦</span>
              </div>

              <h2 className="font-serif text-2xl text-[#1C1917] leading-snug mb-4">
                Complete Your Dedication
              </h2>

              <p className="text-[#78716C] leading-relaxed mb-2">
                To finalize your dedication or make a secure donation, please
                proceed to our external giving portal, powered by our trusted
                payment partner.
              </p>
              <p className="text-[#78716C] leading-relaxed mb-8 text-sm">
                Your generosity builds this mikvah for the Laurentian Jewish
                community — for generations to come.
              </p>

              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 bg-[#1C1917] text-[#FCFBF8] text-sm font-semibold tracking-wide hover:bg-[#3D3830] transition-colors mb-4"
              >
                Proceed to Secure Gateway →
              </a>

              <p className="text-xs text-center text-[#A8A29E]">
                Encrypted &amp; PCI-compliant. No payment is processed on this site.
              </p>

              {/* Divider */}
              <div className="mt-10 pt-8 border-t border-[#DDD8CF]">
                <p className="text-xs text-[#A8A29E] uppercase tracking-wide mb-2">Questions?</p>
                <a
                  href="mailto:campaign@mikvahlaurentian.org"
                  className="text-sm text-[#B59A5A] hover:text-[#8C7540] transition-colors"
                >
                  campaign@mikvahlaurentian.org
                </a>
              </div>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
