"use client";

import { useLanguage } from "./LanguageProvider";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "vi" : "en")}
      className="px-4 py-1.5 border-2 border-black dark:border-white font-black text-[10px] uppercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all active:translate-y-0.5"
      aria-label="Toggle language"
    >
      {language === "en" ? "VI" : "EN"}
    </button>
  );
}
