import { Terminal } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] py-[40px] pb-[100px] text-[12px] font-mono text-[var(--dim)]">
      <div className="max-w-[880px] mx-auto px-[24px] flex justify-between items-center flex-wrap gap-[12px]">
        <span className="flex items-center gap-1.5">
          <Terminal className="w-3.5 h-3.5 text-[var(--dim)]" aria-hidden="true" />
          <span>© {new Date().getFullYear()} Emmanuel Oso</span>
        </span>
        <span>built with care, tested with a screen reader</span>
      </div>
    </footer>
  );
}
