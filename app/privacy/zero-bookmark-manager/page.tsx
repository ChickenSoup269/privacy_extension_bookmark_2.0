"use client";

import { useEffect, useState } from "react";
import { Shield, HardDrive, Mail, ChevronLeft, Fingerprint, Github, AlertTriangle, Terminal } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { useScrollReveal } from "@/components/useScrollReveal";

export default function PrivacyDetail() {
  const { t } = useLanguage();
  const [year, setYear] = useState(new Date().getFullYear());
  useScrollReveal();

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="max-w-4xl mx-auto w-full px-6 py-12">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 px-4 py-2 border-2 border-black dark:border-white font-black text-xs uppercase bg-white dark:bg-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none transition-all mb-12"
        >
          <ChevronLeft className="w-4 h-4" /> {t("privacy.back")}
        </Link>

        <header className="mb-20 animate-reveal">
          <div className="inline-block px-3 py-1 bg-black dark:bg-white text-white dark:text-black font-black uppercase text-[10px] tracking-[0.3em] mb-4">
            Official Compliance
          </div>
          <h1 
            className="text-6xl md:text-8xl font-black mb-6 uppercase italic tracking-tighter leading-none"
            dangerouslySetInnerHTML={{ __html: t("privacy.title") }}
          />
        </header>

        <main className="pb-32">
          <div className="premium-card p-10 md:p-16 relative reveal-on-scroll">
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center border-2 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
              <Fingerprint className="w-10 h-10" />
            </div>
            
            <section className="space-y-24">
              {/* Permission & Data Section */}
              <div className="reveal-on-scroll">
                <div className="flex items-center gap-4 mb-12">
                  <div className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center border-2 border-black dark:border-white font-black text-xl italic">
                    01
                  </div>
                  <h2 className="text-3xl font-black uppercase italic tracking-tight">{t("privacy.permission_title")}</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="group p-10 border-2 border-black dark:border-white hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors relative overflow-hidden">
                    <span className="font-black block text-xs uppercase mb-4 text-zinc-500 tracking-widest flex items-center gap-2">
                       <Shield className="w-4 h-4" /> {t("privacy.bookmarks_title")}
                    </span>
                    <p className="text-zinc-900 dark:text-zinc-100 font-bold text-xl leading-snug">{t("privacy.bookmarks_desc")}</p>
                  </div>
                  <div className="group p-10 border-2 border-black dark:border-white hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors relative overflow-hidden">
                    <span className="font-black block text-xs uppercase mb-4 text-zinc-500 tracking-widest flex items-center gap-2">
                       <HardDrive className="w-4 h-4" /> {t("privacy.storage_title")}
                    </span>
                    <p className="text-zinc-900 dark:text-zinc-100 font-bold text-xl leading-snug">{t("privacy.storage_desc")}</p>
                  </div>
                </div>
              </div>

              {/* Data Usage Section */}
              <div className="reveal-on-scroll">
                <div className="flex items-center gap-4 mb-12">
                  <div className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center border-2 border-black dark:border-white font-black text-xl italic">
                    02
                  </div>
                  <h2 className="text-3xl font-black uppercase italic tracking-tight">{t("privacy.usage_title")}</h2>
                </div>
                <div className="p-10 border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-900 italic font-bold text-2xl">
                   {t("privacy.usage_desc")}
                </div>
              </div>

              {/* Source Code Section */}
              <div className="reveal-on-scroll">
                <div className="flex items-center gap-4 mb-12">
                  <div className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center border-2 border-black dark:border-white font-black text-xl italic">
                    03
                  </div>
                  <h2 className="text-3xl font-black uppercase italic tracking-tight">{t("privacy.source_title")}</h2>
                </div>
                <div className="flex flex-col md:flex-row gap-10 items-stretch">
                   <div className="flex-1 p-8 border-2 border-dashed border-black dark:border-white">
                      <p className="font-bold text-lg mb-6">{t("privacy.source_desc")}</p>
                      <a 
                        href="https://github.com/ChickenSoup269/Zero-Bookmark-Manager/releases"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-black uppercase text-sm border-b-2 border-black dark:border-white pb-1"
                      >
                         <Github className="w-4 h-4" /> View Releases
                      </a>
                   </div>
                   <div className="flex-1 p-8 bg-black text-white dark:bg-white dark:text-black space-y-4">
                      <div className="flex items-center gap-2 mb-2">
                         <AlertTriangle className="w-5 h-5 text-yellow-500" />
                         <span className="font-black uppercase text-sm">{t("privacy.issues_title")}</span>
                      </div>
                      <p className="font-bold opacity-80">{t("privacy.issues_desc")}</p>
                   </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="reveal-on-scroll pt-16 border-t-8 border-black dark:border-white">
                <div className="flex items-center gap-4 mb-10">
                  <Mail className="w-10 h-10" />
                  <h2 className="text-4xl font-black uppercase italic tracking-tighter">{t("privacy.contact")}</h2>
                </div>
                <div className="premium-card p-12 bg-black text-white dark:bg-white dark:text-black flex flex-col md:flex-row justify-between items-center gap-8">
                  <div className="space-y-4 text-center md:text-left">
                    <p className="text-zinc-400 dark:text-zinc-600 font-black uppercase text-xs tracking-[0.3em]">{t("privacy.contact_desc")}</p>
                    <a 
                      href="mailto:thientran01345@icloud.com"
                      className="text-2xl md:text-4xl font-black hover:italic transition-all break-all border-b-2 border-white dark:border-black"
                    >
                      thientran01345@icloud.com
                    </a>
                  </div>
                  <Terminal className="w-20 h-20 opacity-10 hidden lg:block animate-pulse" />
                </div>
              </div>
            </section>
          </div>
        </main>

        <footer className="text-center py-20 border-t-2 border-black dark:border-white opacity-40 text-[10px] font-black uppercase tracking-[0.5em] reveal-on-scroll">
          &copy; {year} PRACY BOOKMARK. {t("privacy.rights")}
        </footer>
      </div>
    </div>
  );
}
