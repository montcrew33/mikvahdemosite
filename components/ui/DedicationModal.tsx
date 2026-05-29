"use client";

import { useState } from "react";
import { Modal } from "./Modal";
import type { Dedication } from "@/data/dedications";

interface DedicationModalProps {
  dedication: Dedication | null;
  open: boolean;
  onClose: () => void;
}

const paymentOptions = [
  { value: "discuss", label: "Discuss payment options" },
  { value: "pledge", label: "Submit a pledge" },
  { value: "pay-now", label: "Pay now" },
  { value: "installments", label: "Arrange installments" },
];

function formatAmount(amount: number | null) {
  if (!amount) return "";
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function DedicationModal({ dedication, open, onClose }: DedicationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    displayName: "",
    honorMemory: "",
    paymentOption: "discuss",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  function handleClose() {
    setSubmitted(false);
    setForm({ fullName: "", email: "", phone: "", displayName: "", honorMemory: "", paymentOption: "discuss", message: "" });
    onClose();
  }

  if (!dedication) return null;

  return (
    <Modal open={open} onClose={handleClose} maxWidth="max-w-xl">
      <div className="px-5 sm:px-8 py-7 sm:py-8">
        {submitted ? (
          <div className="text-center py-8">
            <div className="text-4xl mb-4">✦</div>
            <h2 className="font-serif text-2xl text-[#1A2B38] mb-3">
              Thank you, {form.fullName || "dear friend"}
            </h2>
            <p className="text-[#5A6A75] leading-relaxed">
              Your dedication request for{" "}
              <strong className="text-[#1A2B38]">{dedication.name}</strong> has
              been received. A member of our campaign team will be in touch
              within 2–3 business days to complete your dedication.
            </p>
            <p className="mt-4 text-[#5A6A75] text-sm italic">
              "Each stone placed is a prayer for the generations to come."
            </p>
            <button
              onClick={handleClose}
              className="mt-8 px-6 py-2.5 bg-[#1A2B38] text-white text-sm font-semibold hover:bg-[#2C4A55] transition-colors rounded-sm"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="mb-6 pb-5 border-b border-[#E0D9CC]">
              <p className="text-xs tracking-[0.18em] uppercase text-[#B9963A] mb-1.5">
                Dedication Opportunity
              </p>
              <h2 className="font-serif text-2xl text-[#1A2B38]">
                Reserve a Dedication
              </h2>
            </div>

            {/* Selected dedication summary */}
            <div className="mb-6 p-4 bg-[#F0EAD8] border border-[#D8CCB8] rounded-sm">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-serif text-lg text-[#1A2B38]">{dedication.name}</p>
                  {dedication.description && (
                    <p className="text-sm text-[#6A7A85] mt-0.5">{dedication.description}</p>
                  )}
                </div>
                {dedication.amount && (
                  <p className="font-serif text-lg text-[#B9963A] whitespace-nowrap">
                    {formatAmount(dedication.amount)}
                  </p>
                )}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
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
                  label="Phone number"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Optional"
                />
                <FormField
                  label="Name for Wall of Honor"
                  name="displayName"
                  value={form.displayName}
                  onChange={handleChange}
                  placeholder="As you wish it to appear"
                />
                <FormField
                  label="In honor / in memory of"
                  name="honorMemory"
                  value={form.honorMemory}
                  onChange={handleChange}
                  placeholder="Optional dedication inscription"
                />
              </div>

              {/* Payment option */}
              <div>
                <label className="block text-xs tracking-wide uppercase text-[#6A7A85] mb-1.5">
                  Preferred arrangement
                </label>
                <select
                  name="paymentOption"
                  value={form.paymentOption}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 bg-white border border-[#D8CCB8] text-[#1A2B38] text-sm rounded-sm focus:outline-none focus:border-[#5BC8C8] transition-colors"
                >
                  {paymentOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs tracking-wide uppercase text-[#6A7A85] mb-1.5">
                  Message (optional)
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Any questions or notes for our campaign team…"
                  className="w-full px-3 py-2.5 bg-white border border-[#D8CCB8] text-[#1A2B38] text-sm rounded-sm focus:outline-none focus:border-[#5BC8C8] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#1A2B38] text-white text-sm font-semibold hover:bg-[#2C4A55] transition-colors rounded-sm mt-2"
              >
                Submit Dedication Request

              </button>
              <p className="text-xs text-center text-[#8A9AA5]">
                No payment is processed at this stage. Our team will follow up to complete your dedication.
              </p>
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
