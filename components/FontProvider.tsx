"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type FontType = "sans" | "retro";

interface FontContextType {
  font: FontType;
  setFont: (font: FontType) => void;
}

const FontContext = createContext<FontContextType | undefined>(undefined);

export function FontProvider({ 
  children,
  fontStyles 
}: { 
  children: React.ReactNode;
  fontStyles: { retro: string; sans: string };
}) {
  const [font, setFontState] = useState<FontType>("retro");

  const applyFont = (f: FontType) => {
    const root = document.documentElement;
    root.style.setProperty("--font-family", fontStyles[f]);
  };

  useEffect(() => {
    const savedFont = localStorage.getItem("font-preference") as FontType;
    if (savedFont && (savedFont === "sans" || savedFont === "retro")) {
      setFontState(savedFont);
      applyFont(savedFont);
    } else {
      applyFont(font);
    }
  }, []);

  const setFont = (f: FontType) => {
    setFontState(f);
    localStorage.setItem("font-preference", f);
    applyFont(f);
  };

  return (
    <FontContext.Provider value={{ font, setFont }}>
      {children}
    </FontContext.Provider>
  );
}

export function useFont() {
  const context = useContext(FontContext);
  if (context === undefined) {
    throw new Error("useFont must be used within a FontProvider");
  }
  return context;
}
