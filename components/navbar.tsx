"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [city, setCity] = useState("Loading...");
  const [temp, setTemp] = useState("--");

  useEffect(() => {
    setMounted(true);
    async function fetchWeather() {
      try {
        const res = await fetch("https://wttr.in/Paonta+Sahib?format=j1");
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();

        const currentTemp = data?.current_condition?.[0]?.temp_C || "--";

        setCity("Paonta Sahib");
        setTemp(currentTemp);
      } catch (err) {
        console.log("Weather fetch error", err);
        setCity("Paonta Sahib");
        setTemp("--");
      }
    }

    fetchWeather();
  }, []);

  return (
    <nav className="w-full backdrop-blur-md bg-transparent sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-10 h-[72px]">
        {/* LEFT */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-[#4f46e5] dark:text-[#7c8cf8] font-bold text-[26px] tracking-tight"
          >
            Sourabh
          </Link>

          <span className="hidden sm:block text-black/20 dark:text-white/20 text-[22px] font-light">
            |
          </span>

          {/* WEATHER */}
          <div className="hidden sm:flex items-center gap-2 text-[13px] text-gray-600 dark:text-white/40 bg-black/5 dark:bg-white/[0.03] px-3 py-1.5 rounded-full border border-black/10 dark:border-white/[0.05]">
            <span>{city}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80 dark:bg-amber-400/80 inline-block" />
            <span className="text-gray-900 dark:text-white/80 font-medium">
              {temp}°C
            </span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hidden md:flex items-center gap-1">
          {["Projects", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="relative px-5 py-2.5 text-[16px] text-gray-500 hover:text-gray-900 dark:text-white/50 dark:hover:text-white transition group rounded-md hover:bg-black/5 dark:hover:bg-white/[0.04]"
            >
              {item}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#4f46e5]/70 dark:bg-[#7c8cf8]/70 rounded-full transition-all duration-300 group-hover:w-[60%]" />
            </Link>
          ))}

          <span className="w-px h-6 bg-black/10 dark:bg-white/10 mx-3" />
          <Link
            href="/resume"
            className="relative px-5 py-2.5 text-[16px] text-[#4f46e5] dark:text-[#7c8cf8] group rounded-md hover:bg-[#4f46e5]/[0.06] dark:hover:bg-[#7c8cf8]/[0.06]"
          >
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
}
