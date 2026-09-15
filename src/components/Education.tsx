"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ScrollReveal } from "./ScrollReveal";

export function Education() {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-[64px] sm:py-[96px] border-t border-[var(--line)]">
      <div className="max-w-[880px] mx-auto px-[24px]">
        <ScrollReveal>
          <h2 className="text-[14px] font-bold text-[var(--fg)] mb-[36px] tracking-normal">
            <span className="text-[var(--dim)] font-normal">~/education</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[32px] sm:gap-[48px]">
          {/* Degree column */}
          <ScrollReveal delay={0.1}>
            <div>
              <p className="text-[12px] text-[var(--dim)] mb-[16px] font-mono">degree</p>
              <div className="space-y-0">
                {education.degrees.map((deg, idx) => (
                  <div
                    key={idx}
                    className={`py-[12px] text-[13.5px] ${
                      idx !== 0 ? "border-t border-[var(--line)]" : ""
                    }`}
                  >
                    <a
                      href={deg.link || "#"}
                      className="flex justify-between items-baseline gap-[10px] group transition-colors"
                    >
                      <span className="text-[var(--fg)] group-hover:underline">
                        {deg.institution} — {deg.title}
                      </span>
                      <span className="text-[var(--dim)] text-[11px] shrink-0 font-mono">
                        {deg.period}
                      </span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Certifications column */}
          <ScrollReveal delay={0.2}>
            <div>
              <p className="text-[12px] text-[var(--dim)] mb-[16px] font-mono">
                {education.certificationsTitle}
              </p>
              <div className="space-y-0">
                {education.certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className={`py-[12px] text-[13.5px] ${
                      idx !== 0 ? "border-t border-[var(--line)]" : ""
                    }`}
                  >
                    <a
                      href={cert.link || "#"}
                      className="flex justify-between items-baseline gap-[10px] group transition-colors"
                    >
                      <span className="text-[var(--fg)] group-hover:underline">
                        {cert.title}
                      </span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
