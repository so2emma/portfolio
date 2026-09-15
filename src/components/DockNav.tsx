"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "experience", label: "experience", href: "#experience" },
  { id: "projects", label: "projects", href: "#projects" },
  { id: "education", label: "education", href: "#education" },
  { id: "contact", label: "contact", href: "#contact" },
];

export function DockNav() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 160 && rect.bottom >= 160) {
          current = sec.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: 60, opacity: 0, x: "-50%" }}
      animate={{ y: 0, opacity: 1, x: "-50%" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-1/2 bottom-[22px] z-50 flex items-center gap-[14px] sm:gap-[22px] px-[14px] sm:px-[20px] py-[10px] sm:py-[11px] rounded-full text-[13px] bg-white/[0.06] backdrop-blur-[20px] backdrop-saturate-[160%] border border-white/[0.12] shadow-[0_8px_28px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)] max-w-[calc(100vw-32px)] overflow-x-auto select-none"
      aria-label="Main Navigation"
    >
      <a
        href="#home"
        className="text-[var(--fg)] pr-[16px] border-r border-white/[0.14] whitespace-nowrap hidden sm:inline-block font-medium hover:opacity-85 transition-opacity"
      >
        emmanuel@oso:~$
      </a>

      <div className="flex items-center gap-[14px] sm:gap-[18px]">
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              className={`whitespace-nowrap px-[2px] py-[4px] transition-colors duration-180 relative ${
                isActive ? "text-[var(--fg)] font-medium" : "text-[var(--dim)] hover:text-[var(--fg)]"
              }`}
            >
              {item.label}
              {isActive && (
                <motion.span
                  layoutId="activeDockIndicator"
                  className="absolute -bottom-[2px] left-0 right-0 h-[1px] bg-[var(--fg)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          );
        })}

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--dim)] hover:text-[var(--fg)] transition-colors duration-180 whitespace-nowrap px-[2px] py-[4px] inline-flex items-center gap-1 group"
        >
          <span>resume</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-180 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </motion.nav>
  );
}
