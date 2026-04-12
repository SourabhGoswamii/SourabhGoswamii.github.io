"use client";

import { useEffect, useState } from "react";

export default function ResumePage() {
  const [swing, setSwing] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setSwing((s) => !s), 1800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 select-none overflow-hidden relative">
      {/* Yellow tape stripes — top-left to bottom-right */}
      {[-20, 5, 30, 55, 80, 105].map((top, i) => (
        <div
          key={i}
          className="absolute w-[160%] h-[38px] pointer-events-none"
          style={{
            top: `${top}%`,
            left: "-30%",
            transform: "rotate(-12deg)",
            background:
              "repeating-linear-gradient(90deg, #facc15 0px, #facc15 60px, #1a1a1a 60px, #1a1a1a 120px)",
            opacity: 0.18,
          }}
        />
      ))}

      {/* Darker overlay tape (other diagonal) */}
      {[-10, 20, 50, 80].map((top, i) => (
        <div
          key={`b${i}`}
          className="absolute w-[160%] h-[28px] pointer-events-none"
          style={{
            top: `${top}%`,
            left: "-30%",
            transform: "rotate(10deg)",
            background:
              "repeating-linear-gradient(90deg, #facc15 0px, #facc15 60px, #000 60px, #000 120px)",
            opacity: 0.08,
          }}
        />
      ))}

      {/* Hanging sign */}
      <div className="relative flex flex-col items-center z-10">
        {/* String + nail */}
        <div className="flex flex-col items-center mb-0">
          <div className="w-[2px] h-10 bg-white/20 rounded-full" />
        </div>

        {/* Sign */}
        <div
          className="transition-transform duration-[1800ms] ease-in-out"
          style={{
            transform: swing ? "rotate(-4deg)" : "rotate(4deg)",
            transformOrigin: "top center",
          }}
        >
          {/* Chain dots */}
          <div className="flex justify-center gap-6 mb-1">
            <div className="flex flex-col gap-[3px] items-center">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-[2px] h-[2px] rounded-full bg-white/25"
                />
              ))}
            </div>
            <div className="flex flex-col gap-[3px] items-center">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-[2px] h-[2px] rounded-full bg-white/25"
                />
              ))}
            </div>
          </div>

          {/* Sign board */}
          <div
            className="relative px-10 py-8 rounded-sm border-2 border-amber-400/80"
            style={{
              background: "rgba(250, 204, 21, 0.06)",
              boxShadow:
                "0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
              minWidth: "300px",
            }}
          >
            {/* Bolt corners */}
            {[
              "top-2 left-2",
              "top-2 right-2",
              "bottom-2 left-2",
              "bottom-2 right-2",
            ].map((pos, i) => (
              <div
                key={i}
                className={`absolute ${pos} w-2 h-2 rounded-full bg-amber-400/40 border border-amber-400/30`}
              />
            ))}

            {/* Stripes across sign */}
            <div
              className="absolute inset-0 rounded-sm opacity-[0.04] pointer-events-none"
              style={{
                background:
                  "repeating-linear-gradient(45deg, #facc15 0px, #facc15 10px, transparent 10px, transparent 20px)",
              }}
            />

            <div className="relative flex flex-col items-center gap-3 text-center">
              <span className="text-[11px] font-mono text-amber-400/50 uppercase tracking-[0.25em]">
                Notice
              </span>
              <p className="text-[28px] font-bold text-amber-400 tracking-tight leading-tight">
                Under Maintenance
              </p>
              <div className="w-10 h-[1px] bg-amber-400/25 my-1" />
              <p className="text-[13.5px] text-yellow-200 font-bold font-mono leading-relaxed">
                Resume is being updated.
                <br />
                Check back soon.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Foreground tape strips — bold, prominent */}
      <div
        className="absolute top-0 left-0 w-full pointer-events-none z-20"
        style={{ height: "100%", overflow: "hidden" }}
      >
        {/* Top-left to bottom-right bold tape */}
        {[10, 55].map((top, i) => (
          <div
            key={`fg${i}`}
            className="absolute w-[200%] h-[44px]"
            style={{
              top: `${top}%`,
              left: "-50%",
              transform: "rotate(-14deg)",
              background:
                "repeating-linear-gradient(90deg, #facc15 0px, #facc15 80px, #1c1c1c 80px, #1c1c1c 160px)",
              opacity: 0.55,
              boxShadow: "0 2px 12px rgba(0,0,0,0.4)",
            }}
          >
            {/* Text on tape */}
            <div className="absolute inset-0 flex items-center overflow-hidden">
              {[...Array(8)].map((_, j) => (
                <span
                  key={j}
                  className="text-[11px] font-black text-black/70 uppercase tracking-[0.2em] mx-8 shrink-0"
                >
                  UNDER MAINTENANCE
                </span>
              ))}
            </div>
          </div>
        ))}

        {/* Bottom-left to top-right */}
        {[30, 75].map((top, i) => (
          <div
            key={`fg2${i}`}
            className="absolute w-[200%] h-[44px]"
            style={{
              top: `${top}%`,
              left: "-50%",
              transform: "rotate(14deg)",
              background:
                "repeating-linear-gradient(90deg, #facc15 0px, #facc15 80px, #1c1c1c 80px, #1c1c1c 160px)",
              opacity: 0.45,
              boxShadow: "0 2px 12px rgba(0,0,0,0.4)",
            }}
          >
            <div className="absolute inset-0 flex items-center overflow-hidden">
              {[...Array(8)].map((_, j) => (
                <span
                  key={j}
                  className="text-[11px] font-black text-black/70 uppercase tracking-[0.2em] mx-8 shrink-0"
                >
                  DO NOT ENTER
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
