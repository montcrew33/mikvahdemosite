"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  percentage: number;
  className?: string;
}

export function ProgressBar({ percentage, className = "" }: ProgressBarProps) {
  return (
    <div
      className={`relative h-3 w-full overflow-hidden rounded-sm ${className}`}
      style={{ background: "#D8E8E8" }}
      role="progressbar"
      aria-valuenow={percentage}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <motion.div
        className="absolute inset-y-0 left-0 rounded-sm"
        style={{ background: "linear-gradient(90deg, #1E3A8A 0%, #5BC8C8 100%)" }}
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.3, ease: "easeOut", delay: 0.15 }}
      />
    </div>
  );
}
