"use client";

import { useEffect, useState } from "react";
import { Shield, Mail, ChevronLeft, Fingerprint, Github, AlertTriangle, Terminal, Bookmark, Keyboard, Star, Sparkles } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";
import { useScrollReveal } from "@/components/useScrollReveal";

export default function PrivacyDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const { t } = useLanguage();
  const [year, setYear] = useState(new Date().getFullYear());
  const [showSummary, setShowSummary] = useState(false);
  useScrollReveal();

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  // For this specific version, we only show details for zero-bookmark-manager
  const isZero = slug === "zero-bookmark-manager";

  return (
    <div className="flex flex-col min-h-screen">
      <div className="max-w-4xl mx-auto w-full px-6 py-12">
        <Link 
          href="/projects" 
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
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="px-6 py-2 border-2 border-black dark:border-white font-black uppercase text-xl italic bg-zinc-100 dark:bg-zinc-800">
              {isZero ? "Zero Bookmark Manager" : "Project Privacy"}
            </div>
            <button 
              onClick={() => setShowSummary(!showSummary)}
              className="flex items-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black font-black uppercase text-xs italic border-2 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none transition-all active:translate-y-1"
            >
              <Sparkles className="w-4 h-4" /> {t("privacy.summarize_btn")}
            </button>
          </div>

          {showSummary && (
            <div className="mt-10 p-8 border-4 border-dashed border-black dark:border-white bg-yellow-100 dark:bg-zinc-800 animate-reveal text-black dark:text-white">
               <h3 className="text-xl font-black uppercase mb-4 italic flex items-center gap-2">
                 <Sparkles className="w-5 h-5 text-yellow-600 dark:text-yellow-400" /> {t("privacy.summary_title")}
               </h3>
               <p className="font-bold text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t("privacy.summary_content") }} />
            </div>
          )}
        </header>

        <main className="pb-32">
          <div className="premium-card p-10 md:p-16 relative reveal-on-scroll">
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center border-2 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
              {isZero ? <Bookmark className="w-10 h-10" /> : <Fingerprint className="w-10 h-10" />}
            </div>
            
            <section className="space-y-24">
              {isZero && (
                <div className="reveal-on-scroll bg-zinc-50 dark:bg-zinc-900 border-2 border-black dark:border-white p-10">
                   <div className="flex items-center gap-4 mb-6">
                      <Star className="w-6 h-6" />
                      <h3 className="text-2xl font-black uppercase italic">{t("features.title")}</h3>
                   </div>
                   <div className="grid md:grid-cols-2 gap-4">
                      {[1,2,3,4,5,6].map(i => (
                        <div key={i} className="flex gap-2 items-center font-bold text-sm">
                           <div className="w-1.5 h-1.5 bg-black dark:bg-white"></div>
                           {t(`features.item${i}`)}
                        </div>
                      ))}
                   </div>
                   <div className="mt-8 pt-8 border-t border-black/10 flex items-center gap-4">
                      <Keyboard className="w-6 h-6" />
                      <span className="font-black uppercase text-xs italic">Shortcut: {t("home.how_to_shortcut")}</span>
                   </div>
                </div>
              )}

              {/* Data Section */}
              <div className="reveal-on-scroll">
                <div className="flex items-center gap-4 mb-12">
                  <div className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center border-2 border-black dark:border-white font-black text-xl italic">
                    01
                  </div>
                  <h2 className="text-3xl font-black uppercase italic tracking-tight">{t("privacy.access_title")}</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="group p-10 border-2 border-black dark:border-white hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                    <span className="font-black block text-xs uppercase mb-4 text-zinc-500 tracking-widest">{t("privacy.internal_data")}</span>
                    <p className="text-zinc-900 dark:text-zinc-100 font-bold text-xl leading-snug">{t("privacy.internal_desc")}</p>
                  </div>
                  <div className="group p-10 border-2 border-black dark:border-white hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                    <span className="font-black block text-xs uppercase mb-4 text-zinc-500 tracking-widest">{t("privacy.storage")}</span>
                    <p className="text-zinc-900 dark:text-zinc-100 font-bold text-xl leading-snug">{t("privacy.storage_desc")}</p>
                  </div>
                </div>
              </div>

              {/* Source/Links Section */}
              {isZero && (
                <div className="reveal-on-scroll">
                   <div className="flex items-center gap-4 mb-12">
                    <div className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center border-2 border-black dark:border-white font-black text-xl italic">
                      02
                    </div>
                    <h2 className="text-3xl font-black uppercase italic tracking-tight">{t("privacy.source_title")}</h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-10">
                     <div className="p-8 border-2 border-dashed border-black dark:border-white">
                        <p className="font-bold text-lg mb-6">{t("privacy.source_desc")}</p>
                        <a href="https://github.com/ChickenSoup269/Zero-Bookmark-Manager" target="_blank" className="inline-flex items-center gap-2 font-black uppercase text-sm border-b-2 border-black dark:border-white pb-1">
                           <Github className="w-4 h-4" /> GitHub Repository
                        </a>
                     </div>
                     <div className="p-8 bg-zinc-100 dark:bg-zinc-800 border-2 border-black dark:border-white">
                        <div className="flex items-center gap-2 mb-4">
                           <AlertTriangle className="w-5 h-5 text-yellow-500" />
                           <span className="font-black uppercase text-sm">{t("privacy.issues_title")}</span>
                        </div>
                        <p className="font-bold text-sm opacity-70">{t("privacy.issues_desc")}</p>
                     </div>
                  </div>
                </div>
              )}

              {/* Contact Section */}
              <div className="reveal-on-scroll pt-16 border-t-8 border-black dark:border-white">
                <div className="flex items-center gap-4 mb-10">
                  <Mail className="w-10 h-10" />
                  <h2 className="text-4xl font-black uppercase italic tracking-tighter">{t("privacy.contact")}</h2>
                </div>
                <div className="premium-card p-12 bg-black text-white dark:bg-white dark:text-black flex flex-col md:flex-row justify-between items-center gap-8">
                  <div className="space-y-4 text-center md:text-left">
                    <p className="text-zinc-400 dark:text-zinc-600 font-black uppercase text-xs tracking-[0.3em]">{t("privacy.contact_desc")}</p>
                    <a href="mailto:thientran01345@icloud.com" className="text-2xl md:text-4xl font-black hover:italic transition-all break-all border-b-2 border-white dark:border-black">
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
          &copy; {year} PRIVACY CENTER. {t("privacy.rights")}
        </footer>
      </div>
    </div>
  );
}
