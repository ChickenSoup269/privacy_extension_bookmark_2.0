"use client";

import Link from "next/link";
import { ArrowRight, Box } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { useScrollReveal } from "@/components/useScrollReveal";

export default function ProjectsPage() {
  const { t } = useLanguage();
  useScrollReveal();

  const projects = [
    {
      id: "zero-bookmark-manager",
      name: t("projects.bookmark_manager.name"),
      description: t("projects.bookmark_manager.desc"),
      privacyUrl: "/privacy/zero-bookmark-manager",
    },
    {
      id: "coming-soon",
      name: t("projects.coming_soon.name"),
      description: t("projects.coming_soon.desc"),
      privacyUrl: "#",
      disabled: true
    }
  ];

  return (
    <div className="min-h-screen py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 animate-reveal">
          <div>
            <div className="inline-block px-4 py-1 bg-black dark:bg-white text-white dark:text-black font-black text-sm uppercase mb-4">
              ECOSYSTEM
            </div>
            <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase whitespace-pre-line">
              {t("projects.title").split(' ').join('\n')}
            </h1>
          </div>
          <p className="max-w-xs text-xl font-bold border-l-4 border-black dark:border-white pl-6 italic">
            {t("projects.subtitle")}
          </p>
        </div>
        
        <div className="grid gap-12">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`premium-card p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-10 group reveal-on-scroll ${project.disabled ? 'opacity-50 grayscale' : ''}`}
            >
              <div className="flex gap-8 items-start">
                <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-800 border-2 border-black dark:border-white flex items-center justify-center font-black text-3xl group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors">
                  0{index + 1}
                </div>
                <div>
                  <h2 className="text-3xl font-black mb-2 uppercase italic">{project.name}</h2>
                  <p className="text-zinc-600 dark:text-zinc-400 font-bold text-lg">{project.description}</p>
                </div>
              </div>
              {!project.disabled && (
                <Link 
                  href={project.privacyUrl}
                  className="flex items-center gap-3 px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-black uppercase text-sm shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-none transition-all"
                >
                  {t("projects.privacy_policy")} <ArrowRight className="w-5 h-5" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
