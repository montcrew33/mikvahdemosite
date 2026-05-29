"use client";

import { useState } from "react";
import { Modal } from "./Modal";
import type { GeneralDonationTier } from "@/data/dedications";

interface DonationModalProps {
  tier: GeneralDonationTier | null;
  open: boolean;
  onClose: () => void;
}

function formatAmount(amount: number | null) {
  if (!amount) return "";
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function DonationModal({ tier, open, onClose }: DonationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [customAmount, setCustomAmount] = useState("");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    displayName: "",
    honorMemory: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  function handleClose() {
    setSubmitted(false);
    setCustomAmount("");
    setForm({ fullName: "", email: "", displayName: "", honorMemory: "" });
    onClose();
  }

  if (!tier) return null;

  const displayAmount =
    tier.amount != null ? formatAmount(tier.amount) : customAmount ? `$${customAmount}` : "your gift";

  return (
    <Modal open={open} onClose={handleClose} maxWidth="max-w-lg">
      <div className="px-5 sm:px-8 py-7 sm:py-8">
        {submitted ? (
          <div className="text-center py-8">
            <div className="text-4xl mb-4">✦</div>
            <h2 className="font-serif text-2xl text-[#1A2B38] mb-3">
              Thank you, {form.fullName || "dear friend"}
            </h2>
            <p className="text-[#5A6A75] leading-relaxed">
              Your gift of <strong className="text-[#1A2B38]">{displayAmount}</strong> to
              Mikvah Laurentian has been received. You will receive a confirmation
              by email shortly.
            </p>
            <p className="mt-4 text-[#5A6A75] text-sm italic">
              "Every gift, of every size, builds this sacred space."
            </p>
            <button
              onClick={handleClose}
              className="mt-8 px-6 py-2.5 bg-[#1A2B38] text-[white] text-sm tracking-wide hover:bg-[#2A4A58] transition-colors rounded-sm"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6 pb-5 border-b border-[#E0D9CC]">
              <p className="text-xs tracking-[0.18em] uppercase text-[#B9963A] mb-1.5">
                General Donation
              </p>
              <h2 className="font-serif text-2xl text-[#1A2B38]">Make a Gift</h2>
            </div>

            {/* Amount display */}
            <div className="mb-6 p-4 bg-[#F0EAD8] border border-[#D8CCB8] rounded-sm text-center">
              {tier.amount != null ? (
                <>
                  <p className="font-serif text-3xl text-[#B9963A]">{formatAmount(tier.amount)}</p>
                  <p className="text-sm text-[#6A7A85] mt-1">{tier.label}</p>
                </>
              ) : (
                <div>
                  <p className="text-sm text-[#6A7A85] mb-2">Enter your gift amount</p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="font-serif text-2xl text-[#B9963A]">$</span>
                    <input
                      type="number"
                      min="1"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      placeholder="Amount"
                      className="w-32 text-center px-3 py-1.5 bg-white border border-[#D8CCB8] font-serif text-2xl text-[#1A2B38] rounded-sm focus:outline-none focus:border-[#5BC8C8]"
                    />
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <FormField
                label="Full name"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
              <FormField
                label="Email address"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
              <FormField
                label="Name for Wall of Honor"
                name="displayName"
                value={form.displayName}
                onChange={handleChange}
                placeholder="As you wish it to appear (optional)"
              />
              <FormField
                label="In honor / in memory of"
                name="honorMemory"
                value={form.honorMemory}
                onChange={handleChange}
                placeholder="Optional"
              />

              {/* Payment placeholder */}
              <div className="p-4 bg-[#F0EAD8] border border-dashed border-[#C8BFA8] rounded-sm text-center">
                <p className="text-xs text-[#8A9AA5] uppercase tracking-wide mb-1">Payment</p>
                <p className="text-sm text-[#6A7A85]">Secure payment form will be integrated here.</p>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#1A2B38] text-[white] text-sm font-semibold hover:bg-[#2A4A58] transition-colors rounded-sm mt-2"
              >
                Continue to Donation
              </button>
            </form>
          </>
        )}
      </div>
    </Modal>
  );
}

interface FormFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}

function FormField({ label, name, value, onChange, type = "text", required, placeholder }: FormFieldProps) {
  return (
    <div>
      <label className="block text-xs tracking-wide uppercase text-[#6A7A85] mb-1.5">
        {label}
        {required && <span className="text-[#B9963A] ml-0.5">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full px-3 py-2.5 bg-white border border-[#D8CCB8] text-[#1A2B38] text-sm placeholder-[#B0A898] rounded-sm focus:outline-none focus:border-[#5BC8C8] transition-colors"
      />
    </div>
  );
}
