"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export function PcbName() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="w-full max-w-[840px] overflow-x-auto select-none py-1">
      <svg
        viewBox="-12 -10 750 135"
        className="w-full h-auto min-w-[580px] drop-shadow-[0_2px_12px_rgba(255,255,255,0.06)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="OSO EMMANUEL - PCB Circuit Chip Typography"
      >
        <defs>
          <linearGradient id="chipGradFull" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#D5D5D5" />
          </linearGradient>

          <filter id="traceGlowFull" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="0.8" floodColor="#FFFFFF" floodOpacity="0.5" />
          </filter>
        </defs>

        {/* ========================================================================= */}
        {/* PCB CIRCUIT TRACES (UNDERLAY WIRES WITH 90-DEGREE BUS ROUTING)             */}
        {/* ========================================================================= */}
        <g
          stroke="#C8C8C8"
          strokeWidth="1.2"
          strokeLinecap="square"
          strokeLinejoin="miter"
          opacity="0.85"
        >
          {/* Main continuous bottom bus tracks */}
          <path d="M -6 98 H 732" />
          <path d="M -3 104 H 736" />

          {/* Traces under 'O' (0..46) */}
          <path d="M -6 14 H -10 V 98" />
          <path d="M -3 34 H -6 V 104" />
          <path d="M 23 24 V 74" />

          {/* Traces under 'S' (58..102) */}
          <path d="M 52 14 H 56 V 34 H 52 V 74 H 56 V 98" />
          <path d="M 104 14 H 108 V 98" />

          {/* Traces under second 'O' (114..160) */}
          <path d="M 137 24 V 74" />
          <path d="M 162 14 H 166 V 98" />

          {/* Bridge from OSO to EMMANUEL */}
          <path d="M 166 48 H 186 V 98" />
          <path d="M 170 68 H 190 V 104" />

          {/* Traces under 'E' (194..240) */}
          <path d="M 216 28 V 34 H 230" />
          <path d="M 216 68 V 74 H 230" />

          {/* Traces under first 'M' (250..298) */}
          <path d="M 270 46 V 68 H 278 V 46" />
          <path d="M 274 68 V 98" />

          {/* Traces under second 'M' (308..356) */}
          <path d="M 328 46 V 68 H 336 V 46" />
          <path d="M 332 68 V 98" />

          {/* Traces under 'A' (366..412) */}
          <path d="M 386 46 V 68 H 394 V 46" />
          <path d="M 390 68 V 98" />

          {/* Traces under 'N' (422..470) */}
          <path d="M 439 26 V 34 H 453 V 54 H 461" />

          {/* Traces under 'U' (480..528) */}
          <path d="M 474 14 H 478 V 98 H 532 V 14 H 528" />
          <path d="M 499 14 V 74 H 509 V 14" />

          {/* Traces under second 'E' (538..584) */}
          <path d="M 560 28 V 34 H 574" />
          <path d="M 560 68 V 74 H 574" />

          {/* Traces under 'L' (594..640) */}
          <path d="M 616 24 V 74 H 636" />
        </g>

        {/* Solder Vias / Test Points */}
        <g fill="#AFAFAF">
          <circle cx="-10" cy="14" r="1.5" />
          <circle cx="-6" cy="34" r="1.5" />
          <circle cx="52" cy="14" r="1.5" />
          <circle cx="108" cy="14" r="1.5" />
          <circle cx="166" cy="14" r="1.5" />
          <circle cx="186" cy="48" r="1.5" />
          <circle cx="230" cy="34" r="1.5" />
          <circle cx="298" cy="14" r="1.5" />
          <circle cx="356" cy="14" r="1.5" />
          <circle cx="412" cy="14" r="1.5" />
          <circle cx="470" cy="14" r="1.5" />
          <circle cx="528" cy="14" r="1.5" />
          <circle cx="574" cy="34" r="1.5" />
          <circle cx="636" cy="74" r="1.5" />
          <circle cx="732" cy="98" r="1.5" />
          <circle cx="736" cy="104" r="1.5" />
        </g>

        {/* ========================================================================= */}
        {/* MODULAR SILICON CHIP BLOCKS (OSO EMMANUEL)                                 */}
        {/* ========================================================================= */}
        <g fill="url(#chipGradFull)" stroke="#1A1A1A" strokeWidth="1">
          {/* ======================== 'O' (x: 0) ======================== */}
          <rect x="0" y="0" width="46" height="16" rx="2" />
          <rect x="0" y="20" width="15" height="16" rx="2" />
          <rect x="0" y="40" width="15" height="16" rx="2" />
          <rect x="0" y="60" width="15" height="16" rx="2" />
          <rect x="0" y="80" width="46" height="16" rx="2" />
          <rect x="31" y="20" width="15" height="16" rx="2" />
          <rect x="31" y="40" width="15" height="16" rx="2" />
          <rect x="31" y="60" width="15" height="16" rx="2" />

          {/* ======================== 'S' (x: 56) ======================= */}
          <rect x="56" y="0" width="46" height="16" rx="2" />
          <rect x="56" y="20" width="15" height="16" rx="2" />
          <rect x="56" y="40" width="46" height="16" rx="2" />
          <rect x="87" y="60" width="15" height="16" rx="2" />
          <rect x="56" y="80" width="46" height="16" rx="2" />

          {/* ======================== 'O' (x: 112) ====================== */}
          <rect x="112" y="0" width="46" height="16" rx="2" />
          <rect x="112" y="20" width="15" height="16" rx="2" />
          <rect x="112" y="40" width="15" height="16" rx="2" />
          <rect x="112" y="60" width="15" height="16" rx="2" />
          <rect x="112" y="80" width="46" height="16" rx="2" />
          <rect x="143" y="20" width="15" height="16" rx="2" />
          <rect x="143" y="40" width="15" height="16" rx="2" />
          <rect x="143" y="60" width="15" height="16" rx="2" />

          {/* ===================== 'E' (x: 194) ========================= */}
          <rect x="194" y="0" width="15" height="16" rx="2" />
          <rect x="194" y="20" width="15" height="16" rx="2" />
          <rect x="194" y="40" width="15" height="16" rx="2" />
          <rect x="194" y="60" width="15" height="16" rx="2" />
          <rect x="194" y="80" width="15" height="16" rx="2" />
          <rect x="211" y="0" width="28" height="16" rx="2" />
          <rect x="211" y="40" width="20" height="16" rx="2" />
          <rect x="211" y="80" width="28" height="16" rx="2" />

          {/* ===================== 'M' (x: 250) ========================= */}
          <rect x="250" y="0" width="14" height="16" rx="2" />
          <rect x="250" y="20" width="14" height="16" rx="2" />
          <rect x="250" y="40" width="14" height="16" rx="2" />
          <rect x="250" y="60" width="14" height="16" rx="2" />
          <rect x="250" y="80" width="14" height="16" rx="2" />
          <rect x="266" y="20" width="13" height="16" rx="2" />
          <rect x="266" y="40" width="13" height="16" rx="2" />
          <rect x="281" y="0" width="14" height="16" rx="2" />
          <rect x="281" y="20" width="14" height="16" rx="2" />
          <rect x="281" y="40" width="14" height="16" rx="2" />
          <rect x="281" y="60" width="14" height="16" rx="2" />
          <rect x="281" y="80" width="14" height="16" rx="2" />

          {/* ===================== 'M' (x: 306) ========================= */}
          <rect x="306" y="0" width="14" height="16" rx="2" />
          <rect x="306" y="20" width="14" height="16" rx="2" />
          <rect x="306" y="40" width="14" height="16" rx="2" />
          <rect x="306" y="60" width="14" height="16" rx="2" />
          <rect x="306" y="80" width="14" height="16" rx="2" />
          <rect x="322" y="20" width="13" height="16" rx="2" />
          <rect x="322" y="40" width="13" height="16" rx="2" />
          <rect x="337" y="0" width="14" height="16" rx="2" />
          <rect x="337" y="20" width="14" height="16" rx="2" />
          <rect x="337" y="40" width="14" height="16" rx="2" />
          <rect x="337" y="60" width="14" height="16" rx="2" />
          <rect x="337" y="80" width="14" height="16" rx="2" />

          {/* ===================== 'A' (x: 362) ========================= */}
          <rect x="362" y="0" width="44" height="16" rx="2" />
          <rect x="362" y="20" width="14" height="16" rx="2" />
          <rect x="362" y="40" width="14" height="16" rx="2" />
          <rect x="362" y="60" width="14" height="16" rx="2" />
          <rect x="362" y="80" width="14" height="16" rx="2" />
          <rect x="378" y="40" width="13" height="16" rx="2" />
          <rect x="392" y="20" width="14" height="16" rx="2" />
          <rect x="392" y="40" width="14" height="16" rx="2" />
          <rect x="392" y="60" width="14" height="16" rx="2" />
          <rect x="392" y="80" width="14" height="16" rx="2" />

          {/* ===================== 'N' (x: 418) ========================= */}
          <rect x="418" y="0" width="14" height="16" rx="2" />
          <rect x="418" y="20" width="14" height="16" rx="2" />
          <rect x="418" y="40" width="14" height="16" rx="2" />
          <rect x="418" y="60" width="14" height="16" rx="2" />
          <rect x="418" y="80" width="14" height="16" rx="2" />
          <rect x="434" y="20" width="13" height="16" rx="2" />
          <rect x="440" y="40" width="13" height="16" rx="2" />
          <rect x="446" y="60" width="13" height="16" rx="2" />
          <rect x="450" y="0" width="14" height="16" rx="2" />
          <rect x="450" y="20" width="14" height="16" rx="2" />
          <rect x="450" y="40" width="14" height="16" rx="2" />
          <rect x="450" y="60" width="14" height="16" rx="2" />
          <rect x="450" y="80" width="14" height="16" rx="2" />

          {/* ===================== 'U' (x: 476) ========================= */}
          <rect x="476" y="0" width="15" height="16" rx="2" />
          <rect x="476" y="20" width="15" height="16" rx="2" />
          <rect x="476" y="40" width="15" height="16" rx="2" />
          <rect x="476" y="60" width="15" height="16" rx="2" />
          <rect x="476" y="80" width="46" height="16" rx="2" />
          <rect x="507" y="0" width="15" height="16" rx="2" />
          <rect x="507" y="20" width="15" height="16" rx="2" />
          <rect x="507" y="40" width="15" height="16" rx="2" />
          <rect x="507" y="60" width="15" height="16" rx="2" />

          {/* ===================== 'E' (x: 534) ========================= */}
          <rect x="534" y="0" width="15" height="16" rx="2" />
          <rect x="534" y="20" width="15" height="16" rx="2" />
          <rect x="534" y="40" width="15" height="16" rx="2" />
          <rect x="534" y="60" width="15" height="16" rx="2" />
          <rect x="534" y="80" width="15" height="16" rx="2" />
          <rect x="551" y="0" width="28" height="16" rx="2" />
          <rect x="551" y="40" width="20" height="16" rx="2" />
          <rect x="551" y="80" width="28" height="16" rx="2" />

          {/* ===================== 'L' (x: 590) ========================= */}
          <rect x="590" y="0" width="15" height="16" rx="2" />
          <rect x="590" y="20" width="15" height="16" rx="2" />
          <rect x="590" y="40" width="15" height="16" rx="2" />
          <rect x="590" y="60" width="15" height="16" rx="2" />
          <rect x="590" y="80" width="46" height="16" rx="2" />
        </g>

        {/* Ambient Signal Pulse Line */}
        {!shouldReduceMotion && (
          <motion.path
            d="M -10 98 H 732"
            stroke="#FFFFFF"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeDasharray="30 180"
            initial={{ strokeDashoffset: 210 }}
            animate={{ strokeDashoffset: -210 }}
            transition={{
              repeat: Infinity,
              duration: 3.5,
              ease: "linear",
            }}
            filter="url(#traceGlowFull)"
            opacity="0.8"
          />
        )}
      </svg>
    </div>
  );
}
