"use client";

import React, { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { Send, CheckCircle2, Mail } from "lucide-react";

export function Contact() {
  const [status, setStatus] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission / terminal prompt response
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus("> message sent — thank you. I'll get back to you shortly.");
      setFormData({ name: "", email: "", message: "" });
    }, 400);
  };

  return (
    <section id="contact" className="py-[64px] sm:py-[96px] border-t border-[var(--line)]">
      <div className="max-w-[560px] mx-auto px-[24px]">
        <ScrollReveal>
          <h2 className="text-[14px] font-bold text-[var(--fg)] mb-[36px] tracking-normal">
            <span className="text-[var(--dim)] font-normal">~/contact</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <p className="max-w-[460px] text-[14.5px] text-[var(--dim)] mb-[32px] leading-[1.6]">
            Got a project or opportunity? Open to backend engineering roles — Java,
            Spring Boot, PHP — and reach out directly below.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-[22px]">
            <div>
              <label
                htmlFor="name"
                className="text-[11px] text-[var(--dim)] block mb-[4px] font-mono select-none"
              >
                name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="jane doe"
                className="bg-transparent border-0 border-b border-[var(--line)] text-[var(--fg)] font-mono text-[14px] py-[10px] px-[2px] w-full transition-colors duration-200 focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0 focus:border-b-[var(--fg)] focus-visible:border-b-[var(--fg)] placeholder-[#4a4a4a] rounded-none"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-[11px] text-[var(--dim)] block mb-[4px] font-mono select-none"
              >
                email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="jane@company.com"
                className="bg-transparent border-0 border-b border-[var(--line)] text-[var(--fg)] font-mono text-[14px] py-[10px] px-[2px] w-full transition-colors duration-200 focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0 focus:border-b-[var(--fg)] focus-visible:border-b-[var(--fg)] placeholder-[#4a4a4a] rounded-none"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-[11px] text-[var(--dim)] block mb-[4px] font-mono select-none"
              >
                message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="what are you building?"
                className="bg-transparent border-0 border-b border-[var(--line)] text-[var(--fg)] font-mono text-[14px] py-[10px] px-[2px] w-full transition-colors duration-200 focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0 focus:border-b-[var(--fg)] focus-visible:border-b-[var(--fg)] placeholder-[#4a4a4a] resize-y rounded-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 border border-[var(--fg)] text-[var(--fg)] px-[18px] py-[9px] text-[13px] font-mono transition-all duration-180 hover:bg-[var(--invert-bg)] hover:text-[var(--invert-fg)] cursor-pointer w-fit group disabled:opacity-50"
            >
              <span>{isSubmitting ? "transmitting..." : "send"}</span>
              <Send className="w-3.5 h-3.5 transition-transform duration-180 group-hover:translate-x-0.5" />
            </button>

            <div className="min-h-[20px]">
              {status && (
                <p className="text-[13px] text-[var(--dim)] font-mono flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--fg)] inline" />
                  <span>{status}</span>
                </p>
              )}
            </div>
          </form>
        </ScrollReveal>

        <ScrollReveal delay={0.22}>
          <p className="text-[13px] text-[var(--dim)] font-mono mt-[32px]">
            or skip the form —{" "}
            <a
              href="mailto:osoemmanuel1969@gmail.com"
              className="border-b border-[var(--line)] hover:border-[var(--fg)] pb-[1px] transition-colors inline-flex items-center gap-1 text-[var(--fg)]"
            >
              <Mail className="w-3 h-3 text-[var(--dim)]" />
              <span>osoemmanuel1969@gmail.com</span>
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
