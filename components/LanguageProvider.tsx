"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import en from "@/locales/en.json";
import vi from "@/locales/vi.json";

type Language = "en" | "vi";
type Translations = typeof en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const dictionaries = { en, vi };

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("vi");

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang && (savedLang === "en" || savedLang === "vi")) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (path: string) => {
    const keys = path.split(".");
    let result: any = dictionaries[language];
    for (const key of keys) {
      if (result && result[key]) {
        result = result[key];
      } else {
        return path;
      }
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
