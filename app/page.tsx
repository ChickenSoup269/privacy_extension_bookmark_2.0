"use client";

import { Lock, EyeOff, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { useScrollReveal } from "@/components/useScrollReveal";

export default function Home() {
  const { t } = useLanguage();
  useScrollReveal();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-24 md:py-32 px-4 text-center border-b-4 border-black dark:border-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-24 h-24 border-2 border-black dark:border-white skew-x-12 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-black dark:border-white skew-y-12 animate-pulse delay-700"></div>
        </div>

        <div className="relative z-10 animate-reveal">
          <h1 
            className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-[0.8] uppercase italic"
            dangerouslySetInnerHTML={{ __html: t("home.hero_title") }}
          />
          <p className="max-w-2xl mx-auto text-xl md:text-2xl text-zinc-900 dark:text-zinc-100 font-bold bg-white dark:bg-black p-4 border-2 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
            {t("home.hero_subtitle")}
          </p>
          <div className="mt-16 flex justify-center">
            <Link 
              href="/projects" 
              className="group flex items-center gap-4 px-12 py-5 bg-black dark:bg-white text-white dark:text-black font-black uppercase tracking-[0.2em] border-2 border-black dark:border-white shadow-[10px_10px_0px_0px_rgba(0,0,0,0.2)] dark:shadow-[10px_10px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              {t("home.view_projects")}
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-8 reveal-on-scroll">
            <div className="inline-block px-4 py-1 bg-black dark:bg-white text-white dark:text-black font-black text-sm uppercase skew-x-[-10deg]">
              {t("home.philosophy_title")}
            </div>
            <h2 className="text-5xl md:text-6xl font-black leading-tight italic">
              PRIVACY IS A <br /> 
              <span className="bg-black text-white dark:bg-white dark:text-black px-4">RIGHT</span>
            </h2>
            <p 
              className="text-xl text-zinc-800 dark:text-zinc-200 leading-relaxed font-bold"
              dangerouslySetInnerHTML={{ __html: t("home.philosophy_text") }}
            />
          </div>
          
          <div className="grid gap-10">
            <div className="premium-card p-10 flex gap-8 reveal-on-scroll">
              <div className="flex-shrink-0 w-16 h-16 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center border-2 border-black dark:border-white">
                <Lock className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-black mb-3">{t("home.security_title")}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 font-bold">{t("home.security_text")}</p>
              </div>
            </div>
            
            <div className="premium-card p-10 flex gap-8 reveal-on-scroll">
              <div className="flex-shrink-0 w-16 h-16 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center border-2 border-black dark:border-white">
                <EyeOff className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-black mb-3">{t("home.transparency_title")}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 font-bold">{t("home.transparency_text")}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
