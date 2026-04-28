"use client"

import { useEffect, useState } from "react"
import {
  ChevronLeft,
  ClipboardCheck,
  KeyRound,
  Bookmark,
  Code2,
  MonitorPlay,
  Database,
  Globe,
  CheckCircle2,
  Github,
  Mail,
} from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/LanguageProvider"
import { useScrollReveal } from "@/components/useScrollReveal"

export default function ZeroStartpagePrivacyPage() {
  const { t } = useLanguage()
  const [year, setYear] = useState(new Date().getFullYear())
  useScrollReveal()

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <div className="max-w-4xl mx-auto w-full px-6 py-12">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-4 py-2 border-2 border-black dark:border-white font-black text-xs uppercase bg-white dark:bg-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none transition-all mb-12"
        >
          <ChevronLeft className="w-4 h-4" /> {t("startpage_privacy.back")}
        </Link>

        <header className="mb-16 animate-reveal">
          <div className="inline-block px-3 py-1 bg-black dark:bg-white text-white dark:text-black font-black uppercase text-[10px] tracking-[0.3em] mb-4">
            {t("startpage_privacy.eyebrow")}
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tight leading-[1.05]">
            {t("startpage_privacy.title")}
          </h1>
          <p className="text-xl md:text-2xl font-black mt-2 text-zinc-500 uppercase tracking-wider">
            {t("startpage_privacy.subtitle")}
          </p>
          <p className="mt-8 text-lg font-bold leading-relaxed max-w-3xl">
            {t("startpage_privacy.intro")}
          </p>
        </header>

        <main className="pb-24">
          <div className="premium-card p-10 md:p-14 space-y-16 reveal-on-scroll">
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <ClipboardCheck className="w-6 h-6" />
                <h2 className="text-2xl md:text-3xl font-black uppercase italic">
                  {t("startpage_privacy.single_purpose_title")}
                </h2>
              </div>
              <p className="font-bold text-lg leading-relaxed border-2 border-black dark:border-white p-6 bg-zinc-50 dark:bg-zinc-900">
                {t("startpage_privacy.single_purpose_desc")}
              </p>
            </section>

            <section className="space-y-8">
              <div className="flex items-center gap-3">
                <KeyRound className="w-6 h-6" />
                <h2 className="text-2xl md:text-3xl font-black uppercase italic">
                  {t("startpage_privacy.permission_title")}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <article className="border-2 border-black dark:border-white p-6">
                  <h3 className="font-black uppercase text-sm mb-3 tracking-wide flex items-center gap-2">
                    <Bookmark className="w-4 h-4" />
                    {t("startpage_privacy.bookmarks_title")}
                  </h3>
                  <p className="font-bold leading-relaxed">
                    {t("startpage_privacy.bookmarks_desc")}
                  </p>
                </article>

                <article className="border-2 border-black dark:border-white p-6">
                  <h3 className="font-black uppercase text-sm mb-3 tracking-wide flex items-center gap-2">
                    <Code2 className="w-4 h-4" />
                    {t("startpage_privacy.scripting_title")}
                  </h3>
                  <p className="font-bold leading-relaxed">
                    {t("startpage_privacy.scripting_desc")}
                  </p>
                </article>

                <article className="border-2 border-black dark:border-white p-6">
                  <h3 className="font-black uppercase text-sm mb-3 tracking-wide flex items-center gap-2">
                    <MonitorPlay className="w-4 h-4" />
                    {t("startpage_privacy.tabs_title")}
                  </h3>
                  <p className="font-bold leading-relaxed">
                    {t("startpage_privacy.tabs_desc")}
                  </p>
                </article>

                <article className="border-2 border-black dark:border-white p-6">
                  <h3 className="font-black uppercase text-sm mb-3 tracking-wide flex items-center gap-2">
                    <Database className="w-4 h-4" />
                    {t("startpage_privacy.storage_title")}
                  </h3>
                  <p className="font-bold leading-relaxed">
                    {t("startpage_privacy.storage_desc")}
                  </p>
                </article>
              </div>

              <article className="border-2 border-black dark:border-white p-6 bg-zinc-100 dark:bg-zinc-900">
                <h3 className="font-black uppercase text-sm mb-4 tracking-wide flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  {t("startpage_privacy.host_title")}
                </h3>
                <p className="font-bold mb-4">
                  {t("startpage_privacy.host_intro")}
                </p>
                <ul className="space-y-3 font-bold">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>{t("startpage_privacy.host_item1")}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>{t("startpage_privacy.host_item2")}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>{t("startpage_privacy.host_item3")}</span>
                  </li>
                </ul>
                <p className="font-bold mt-5 pt-5 border-t border-black/20 dark:border-white/20">
                  {t("startpage_privacy.host_outro")}
                </p>
              </article>

              <div className="grid md:grid-cols-2 gap-6">
                <article className="border-2 border-black dark:border-white p-6">
                  <h3 className="font-black uppercase text-sm mb-3 tracking-wide flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    {t("startpage_privacy.source_title")}
                  </h3>
                  <p className="font-bold leading-relaxed mb-4">
                    {t("startpage_privacy.source_desc")}
                  </p>
                  <a
                    href="https://github.com/ChickenSoup269/Zero-Start-Page"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-black uppercase text-sm border-b-2 border-black dark:border-white pb-1"
                  >
                    <Github className="w-4 h-4" />
                    {t("startpage_privacy.source_link_label")}
                  </a>
                </article>

                <article className="border-2 border-black dark:border-white p-6">
                  <h3 className="font-black uppercase text-sm mb-3 tracking-wide flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    {t("startpage_privacy.contact_title")}
                  </h3>
                  <p className="font-bold leading-relaxed mb-4">
                    {t("startpage_privacy.contact_desc")}
                  </p>
                  <a
                    href={`mailto:${t("startpage_privacy.contact_email")}`}
                    className="font-black text-lg border-b-2 border-black dark:border-white break-all"
                  >
                    {t("startpage_privacy.contact_email")}
                  </a>
                </article>
              </div>
            </section>
          </div>
        </main>

        <footer className="text-center py-16 border-t-2 border-black dark:border-white opacity-60 text-xs font-black uppercase tracking-[0.2em] reveal-on-scroll">
          <p>{t("startpage_privacy.footer")}</p>
          <p className="mt-2">&copy; {year} Zero Startpage</p>
        </footer>
      </div>
    </div>
  )
}
