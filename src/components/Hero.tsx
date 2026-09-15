"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ScrollReveal } from "./ScrollReveal";
import { EcgMonitor } from "./EcgMonitor";
import { ArrowRight, Mail } from "lucide-react";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Hero() {
  const getSocialIcon = (type: string) => {
    switch (type) {
      case "linkedin":
        return <LinkedinIcon className="w-3.5 h-3.5 inline-block mr-1 text-[var(--dim)] group-hover:text-[var(--fg)] transition-colors" />;
      case "email":
        return <Mail className="w-3.5 h-3.5 inline-block mr-1 text-[var(--dim)] group-hover:text-[var(--fg)] transition-colors" />;
      default:
        return null;
    }
  };

  return (
    <section id="home" className="pt-[56px] pb-[120px]">
      <div className="max-w-[880px] mx-auto px-[24px]">
        {/* Name ASCII Art Banner */}
        <ScrollReveal delay={0.05}>
          <div className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden mb-[22px] py-1">
            <pre
              className="whitespace-pre text-[clamp(6px,1.25vw,11.5px)] text-[var(--fg)] select-none opacity-95"
              style={{
                fontFamily:
                  'ui-monospace, "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
                fontWeight: 700,
                lineHeight: 1.28,
                letterSpacing: "-0.015em",
              }}
              aria-label="OSO EMMANUEL"
            >
              {PORTFOLIO_DATA.asciiArt.trim()}
            </pre>
          </div>
        </ScrollReveal>

        {/* Role with blinking terminal cursor */}
        <ScrollReveal delay={0.1}>
          <p className="text-[13px] text-[var(--dim)] mb-[10px] flex items-center font-mono">
            <span>{PORTFOLIO_DATA.name} — {PORTFOLIO_DATA.role}</span>
            <span className="inline-block w-[8px] h-[15px] ml-1 bg-[var(--fg)] animate-cursor-blink" />
          </p>
        </ScrollReveal>

        {/* Bio */}
        <ScrollReveal delay={0.15}>
          <div className="space-y-[10px] max-w-[620px] text-[14.5px] leading-[1.6]">
            {PORTFOLIO_DATA.summary.map((paragraph, idx) => (
              <p key={idx} className="m-0 text-[var(--fg)]">
                {paragraph}
              </p>
            ))}
          </div>
        </ScrollReveal>

        {/* CTA Buttons */}
        <ScrollReveal delay={0.2}>
          <div className="mt-[24px] flex items-center gap-[14px] flex-wrap">
            <a
              href="#experience"
              className="inline-flex items-center gap-2 border border-[var(--fg)] text-[var(--fg)] px-[18px] py-[9px] text-[13px] transition-all duration-180 hover:bg-[var(--invert-bg)] hover:text-[var(--invert-fg)] group font-mono"
            >
              <span>See experience</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-180 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="border-b border-[var(--line)] hover:border-[var(--fg)] text-[13px] pb-[1px] transition-colors duration-200 text-[var(--fg)] inline-flex items-center gap-1 group font-mono"
            >
              <span>or just email me</span>
              <span className="transition-transform duration-180 group-hover:translate-x-0.5">→</span>
            </a>
          </div>
        </ScrollReveal>

        {/* Social Links */}
        <ScrollReveal delay={0.25}>
          <div className="flex flex-wrap gap-x-[18px] gap-y-[6px] mt-[26px] text-[13px] font-mono">
            {PORTFOLIO_DATA.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-[var(--dim)] hover:text-[var(--fg)] hover:underline inline-flex items-center group transition-colors"
              >
                {getSocialIcon(s.type)}
                <span>{s.display}</span>
              </a>
            ))}
          </div>
        </ScrollReveal>

        {/* Canvas ECG Toy */}
        <ScrollReveal delay={0.3}>
          <EcgMonitor />
        </ScrollReveal>
      </div>
    </section>
  );
}
