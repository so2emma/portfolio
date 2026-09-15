"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ScrollReveal } from "./ScrollReveal";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-[64px] sm:py-[96px] border-t border-[var(--line)]">
      <div className="max-w-[880px] mx-auto px-[24px]">
        <ScrollReveal>
          <div className="flex items-center justify-between mb-[36px]">
            <h2 className="text-[14px] font-bold text-[var(--fg)] tracking-normal">
              <span className="text-[var(--dim)] font-normal">~/projects</span> — 4 curated repositories
            </h2>
            <a
              href="https://github.com/so2emma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] text-[var(--dim)] hover:text-[var(--fg)] transition-colors inline-flex items-center gap-1 font-mono group"
            >
              <span>all repositories</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-180 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </ScrollReveal>

        <div className="space-y-0">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <ScrollReveal key={project.id} delay={0.08 * (idx + 1)}>
              <div
                className={`grid grid-cols-[36px_1fr] sm:grid-cols-[44px_1fr_auto] gap-3 sm:gap-[20px] py-[22px] items-start transition-colors ${
                  idx !== 0 ? "border-t border-[var(--line)]" : ""
                }`}
              >
                {/* Index number */}
                <span className="text-[var(--dim)] text-[13px] pt-[2px] font-mono">
                  {project.id}
                </span>

                {/* Project details */}
                <div>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5"
                  >
                    <h3 className="text-[15px] font-bold text-[var(--fg)] m-0 group-hover:underline">
                      {project.name}
                    </h3>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[var(--dim)] transition-transform duration-180 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--fg)]" />
                  </a>

                  <p className="text-[13.5px] text-[var(--dim)] mt-[8px] max-w-[520px] leading-[1.65]">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-[8px] mt-[12px]">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] text-[var(--dim)] border border-[var(--line)] px-[8px] py-[2px] rounded-none hover:border-[var(--dim)] hover:text-[var(--fg)] transition-colors font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Link on GitHub */}
                <div className="col-span-2 sm:col-span-1 pl-[36px] sm:pl-0 flex sm:flex-col gap-1 sm:gap-[6px] text-[12.5px] sm:text-right whitespace-nowrap text-[var(--dim)] font-mono">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b border-[var(--line)] hover:border-[var(--fg)] hover:text-[var(--fg)] transition-colors pb-[1px]"
                  >
                    github ↗
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
