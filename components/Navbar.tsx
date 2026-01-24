"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { FontToggle } from "./FontToggle";
import { Shield } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export function Navbar() {
  const { t } = useLanguage();

  return (
    <nav className="glass-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="p-2 bg-black dark:bg-white text-white dark:text-black border-2 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none transition-all">
                <Shield className="h-6 w-6" />
              </div>
              <span className="font-black text-2xl tracking-[0.05em] uppercase italic group-hover:skew-x-[-12deg] transition-transform">
                {t("nav.title")}
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-12">
            <Link href="/" className="nav-link">
              {t("nav.home")}
            </Link>
            <Link href="/projects" className="nav-link">
              {t("nav.projects")}
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <FontToggle />
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
