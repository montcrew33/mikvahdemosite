"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface ContactCTAProps {
  onDedicate: () => void;
  onDonate: () => void;
}

export function ContactCTA({ onDedicate, onDonate }: ContactCTAProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClass =
    "w-full px-3 py-2.5 bg-white border border-[#D0E5E5] text-[#1A2B38] text-sm placeholder-[#A0BFC8] rounded-sm focus:outline-none focus:border-[#5BC8C8] transition-colors";

  return (
    <section id="contact" className="py-24 lg:py-36" style={{ background: "#1A2B38" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#5BC8C8]" />
              <p className="text-[11px] tracking-[0.25em] uppercase text-[#5BC8C8] font-medium">
                Join the Campaign
              </p>
            </div>

            <h2 className="font-serif text-4xl lg:text-5xl text-white leading-[1.15] mb-6">
              Help complete Mikvah Laurentian
            </h2>

            <p className="text-[#7AAABB] leading-relaxed mb-10 max-w-md text-[1.05rem]">
              Your gift helps build a place of taharah, dignity, and renewal for
              generations of Jewish families. Every dedication, every donation,
              brings us closer to opening these sacred doors.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={onDedicate}
                className="px-7 py-3.5 bg-[#5BC8C8] text-white text-sm font-semibold hover:bg-[#3DA8A8] transition-colors rounded-sm"
              >
                Dedicate a Space
              </button>
              <button
                onClick={onDonate}
                className="px-7 py-3.5 border border-white/30 text-white text-sm font-semibold hover:bg-white/8 hover:border-white/55 transition-colors rounded-sm"
              >
                Make a General Donation
              </button>
            </div>

            <div className="pt-8 border-t border-[#2A4055]">
              <p className="text-[11px] tracking-[0.18em] uppercase text-[#3A6A78] mb-3">Campaign Office</p>
              <a href="mailto:campaign@mikvahlaurentian.org" className="block text-[#5BC8C8] text-sm hover:text-[#8ADEDE] transition-colors mb-1">
                campaign@mikvahlaurentian.org
              </a>
              <p className="text-[#3A6A78] text-sm">Laurentian Jewish Community</p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            <div className="rounded-sm p-8 lg:p-10" style={{ background: "#FFFFFF" }}>
              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-3xl text-[#5BC8C8] mb-4">✦</div>
                  <h3 className="font-serif text-xl text-[#1A2B38] mb-3">
                    Thank you, {form.firstName}
                  </h3>
                  <p className="text-[#5A7A85] leading-relaxed text-sm">
                    Your message has been received. A member of our campaign team
                    will be in touch with you shortly.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-serif text-xl text-[#1A2B38] mb-6">Get in touch</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs tracking-wide uppercase text-[#5A7A85] mb-1.5">
                          First name <span className="text-[#5BC8C8]">*</span>
                        </label>
                        <input type="text" name="firstName" value={form.firstName} onChange={handleChange} required placeholder="First" className={inputClass} />
                      </div>
                      <div>
                        <label className="block text-xs tracking-wide uppercase text-[#5A7A85] mb-1.5">
                          Last name <span className="text-[#5BC8C8]">*</span>
                        </label>
                        <input type="text" name="lastName" value={form.lastName} onChange={handleChange} required placeholder="Last" className={inputClass} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs tracking-wide uppercase text-[#5A7A85] mb-1.5">
                        Email <span className="text-[#5BC8C8]">*</span>
                      </label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-xs tracking-wide uppercase text-[#5A7A85] mb-1.5">Message</label>
                      <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Questions about dedications, payments, or the campaign…" className={`${inputClass} resize-none`} />
                    </div>
                    <button type="submit" className="w-full py-3 bg-[#5BC8C8] text-white text-sm font-semibold hover:bg-[#3DA8A8] transition-colors rounded-sm">
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
