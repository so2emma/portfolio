"use client";

import React, { useEffect, useRef, useState } from "react";
import { PORTFOLIO_DATA, EcgModeConfig } from "@/data/portfolio";
import { Activity } from "lucide-react";

type ModeKey = "rest" | "active" | "stress" | "idle";

const COL_STEP = 2; // px per sample column

function randRange([lo, hi]: [number, number]): number {
  return lo + Math.random() * (hi - lo);
}

function gauss(x: number, mu: number, sigma: number): number {
  return Math.exp(-((x - mu) * (x - mu)) / (2 * sigma * sigma));
}

function ecgWave(phase: number): number {
  let y = 0;
  y += 0.1 * gauss(phase, 0.1, 0.025); // P wave
  y -= 0.1 * gauss(phase, 0.19, 0.008); // Q
  y += 1.0 * gauss(phase, 0.21, 0.006); // R spike
  y -= 0.25 * gauss(phase, 0.23, 0.008); // S
  y += 0.2 * gauss(phase, 0.4, 0.035); // T wave
  return y;
}

export function EcgMonitor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [currentMode, setCurrentMode] = useState<ModeKey>("active");
  const [readoutText, setReadoutText] = useState<string>("— bpm");
  const [isBeating, setIsBeating] = useState<boolean>(false);

  const modeRef = useRef<ModeKey>("active");
  modeRef.current = currentMode;

  const stateRef = useRef({
    targetBpm: randRange(PORTFOLIO_DATA.ecgModes.active.range),
    currentBpm: randRange(PORTFOLIO_DATA.ecgModes.active.range),
    currentAmp: PORTFOLIO_DATA.ecgModes.active.amp,
    phaseAcc: 0,
    prevPhase: 0,
    samples: [] as number[],
    cw: 0,
    ch: 0,
    lastT: 0,
  });

  const handleModeChange = (next: ModeKey) => {
    setCurrentMode(next);
    modeRef.current = next;
    const cfg = PORTFOLIO_DATA.ecgModes[next];
    stateRef.current.targetBpm = randRange(cfg.range);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      const cw = rect.width;
      const ch = rect.height;

      stateRef.current.cw = cw;
      stateRef.current.ch = ch;

      canvas.width = Math.floor(cw * dpr);
      canvas.height = Math.floor(ch * dpr);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.ceil(cw / COL_STEP) + 2;
      if (stateRef.current.samples.length !== count) {
        stateRef.current.samples = new Array(count).fill(0);
      }
    };

    resize();
    window.addEventListener("resize", resize);

    if (reduceMotion) {
      // Static single-cycle trace for reduced motion
      const { cw, ch, samples } = stateRef.current;
      ctx.clearRect(0, 0, cw, ch);
      const midY = ch / 2;
      const ampPx = ch * 0.42;

      ctx.beginPath();
      ctx.strokeStyle = "#EDEDED";
      ctx.lineWidth = 1.3;

      for (let i = 0; i < samples.length; i++) {
        const x = i * COL_STEP;
        const phase = (i / samples.length) % 1;
        const y = midY - ecgWave(phase) * ampPx;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      setReadoutText(
        `${Math.round(stateRef.current.currentBpm)} bpm · ${
          PORTFOLIO_DATA.ecgModes[modeRef.current].label
        }`
      );
      return () => {
        window.removeEventListener("resize", resize);
      };
    }

    // Interval for organic random walk
    const walkInterval = setInterval(() => {
      const activeMode = modeRef.current;
      const cfg: EcgModeConfig = PORTFOLIO_DATA.ecgModes[activeMode];
      if (activeMode === "idle") {
        stateRef.current.targetBpm = 0;
        return;
      }
      const [lo, hi] = cfg.range;
      const wobble = (hi - lo) * 0.15;
      stateRef.current.targetBpm = Math.min(
        hi,
        Math.max(lo, stateRef.current.targetBpm + (Math.random() - 0.5) * wobble * 2)
      );
    }, 2200);

    let animationFrameId: number;
    stateRef.current.lastT = performance.now();

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - stateRef.current.lastT) / 1000);
      stateRef.current.lastT = now;

      const activeMode = modeRef.current;
      const cfg: EcgModeConfig = PORTFOLIO_DATA.ecgModes[activeMode];
      const st = stateRef.current;

      st.currentBpm += (st.targetBpm - st.currentBpm) * 0.03;
      st.currentAmp += (cfg.amp - st.currentAmp) * 0.04;

      if (activeMode !== "idle" && st.currentBpm > 0.5) {
        const noise = activeMode === "stress" ? (Math.random() - 0.5) * cfg.jitter : 0;
        st.phaseAcc += dt * (st.currentBpm / 60) * (1 + noise);
      }

      const phase = st.phaseAcc % 1;
      if (phase < st.prevPhase) {
        setIsBeating(true);
        setTimeout(() => setIsBeating(false), 90);
      }
      st.prevPhase = phase;

      const baseline = activeMode === "idle" ? (Math.random() - 0.5) * 0.01 : 0;
      const sample = activeMode === "idle" ? baseline : ecgWave(phase) * st.currentAmp;

      st.samples.push(sample);
      st.samples.shift();

      ctx.clearRect(0, 0, st.cw, st.ch);
      const midY = st.ch / 2;
      const ampPx = st.ch * 0.42;

      ctx.beginPath();
      ctx.strokeStyle = "#EDEDED";
      ctx.lineWidth = 1.3;

      for (let i = 0; i < st.samples.length; i++) {
        const x = i * COL_STEP;
        const y = midY - st.samples[i] * ampPx;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      setReadoutText(
        activeMode === "idle"
          ? "idle"
          : `${Math.round(st.currentBpm)} bpm · ${cfg.label}`
      );

      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resize);
      clearInterval(walkInterval);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const modes: ModeKey[] = ["rest", "active", "stress", "idle"];

  return (
    <div className="mt-[40px] relative">
      <canvas
        ref={canvasRef}
        className="block w-full h-[220px] outline-none border-none"
        aria-label="ECG heartbeat waveform monitor simulation"
      />

      <div className="absolute top-[12px] left-[14px] flex items-center gap-[8px] text-[13px] text-[var(--fg)] select-none pointer-events-none font-mono">
        <span
          className={`w-[7px] h-[7px] rounded-full bg-[var(--fg)] transition-all duration-75 ${
            isBeating ? "scale-[1.7] opacity-60" : "scale-100 opacity-100"
          }`}
          aria-hidden="true"
        />
        <Activity className="w-3.5 h-3.5 text-[var(--dim)]" aria-hidden="true" />
        <span>{readoutText}</span>
      </div>

      <div className="absolute bottom-[10px] right-[12px] flex gap-[6px] select-none">
        {modes.map((mode) => {
          const isActive = currentMode === mode;
          return (
            <button
              key={mode}
              type="button"
              onClick={() => handleModeChange(mode)}
              className={`font-mono text-[11px] px-[10px] py-[3px] rounded-full transition-all duration-180 border ${
                isActive
                  ? "bg-[var(--invert-bg)] text-[var(--invert-fg)] border-[var(--invert-bg)] font-semibold shadow-sm"
                  : "bg-transparent text-[var(--dim)] border-[var(--line)] hover:text-[var(--fg)] hover:border-[var(--dim)]"
              }`}
            >
              {mode}
            </button>
          );
        })}
      </div>
    </div>
  );
}
