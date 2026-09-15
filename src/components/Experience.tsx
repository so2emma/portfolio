"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ScrollReveal } from "./ScrollReveal";

export function Experience() {
  return (
    <section id="experience" className="py-[64px] sm:py-[96px] border-t border-[var(--line)]">
      <div className="max-w-[880px] mx-auto px-[24px]">
        <ScrollReveal>
          <h2 className="text-[14px] font-bold text-[var(--fg)] mb-[36px] tracking-normal">
            <span className="text-[var(--dim)] font-normal">~/experience</span> — 4 roles since 2022
          </h2>
        </ScrollReveal>

        <div className="space-y-0">
          {PORTFOLIO_DATA.experiences.map((exp, idx) => (
            <ScrollReveal key={exp.id} delay={0.08 * (idx + 1)}>
              <div
                className={`grid grid-cols-[36px_1fr] sm:grid-cols-[44px_1fr_auto] gap-3 sm:gap-[20px] py-[22px] items-start transition-colors ${
                  idx !== 0 ? "border-t border-[var(--line)]" : ""
                }`}
              >
                {/* Index number */}
                <span className="text-[var(--dim)] text-[13px] pt-[2px] font-mono">
                  {exp.id}
                </span>

                {/* Role details */}
                <div>
                  <h3 className="text-[15px] font-bold text-[var(--fg)] m-0">
                    {exp.role} — {exp.company}
                  </h3>
                  <p className="text-[13.5px] text-[var(--dim)] mt-[8px] max-w-[520px] leading-[1.65]">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-[8px] mt-[12px]">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] text-[var(--dim)] border border-[var(--line)] px-[8px] py-[2px] rounded-none hover:border-[var(--dim)] hover:text-[var(--fg)] transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Date range */}
                <div className="col-span-2 sm:col-span-1 pl-[36px] sm:pl-0 flex sm:flex-col gap-1 sm:gap-[6px] text-[12.5px] sm:text-right whitespace-nowrap text-[var(--dim)] font-mono">
                  <span>{exp.startDate}</span>
                  <span>→ {exp.endDate}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
