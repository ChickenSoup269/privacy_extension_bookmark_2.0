"use client";

import { useFont } from "./FontProvider";
import { Type } from "lucide-react";

export function FontToggle() {
  const { font, setFont } = useFont();

  return (
    <button
      onClick={() => setFont(font === "sans" ? "retro" : "sans")}
      className="p-2.5 border-2 border-black dark:border-white bg-white dark:bg-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all active:translate-y-0.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none flex items-center justify-center gap-2"
      aria-label="Toggle font"
    >
      <Type className="w-5 h-5" />
      <span className="font-black text-[10px] uppercase hidden sm:block">
        {font === "sans" ? "Sans" : "Retro"}
      </span>
    </button>
  );
}
