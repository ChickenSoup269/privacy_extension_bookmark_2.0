"use client";

import * as React from "react";
import { Moon, Sun, Palette } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="p-2 w-10 h-10" />;
  }

  const themes = [
    { name: "light", icon: <Sun className="h-5 w-5" /> },
    { name: "dark", icon: <Moon className="h-5 w-5" /> },
    { name: "yellow", icon: <Palette className="h-5 w-5" /> },
  ];

  const cycleTheme = () => {
    const currentIndex = themes.findIndex((t) => t.name === theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex].name);
  };

  const currentTheme = themes.find((t) => t.name === theme) || themes[0];

  return (
    <button
      onClick={cycleTheme}
      className="p-2.5 border-2 border-black dark:border-white bg-white dark:bg-black yellow:bg-yellow-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black yellow:hover:bg-black yellow:hover:text-white transition-all active:translate-y-0.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] yellow:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none"
      aria-label="Toggle theme"
    >
      {currentTheme.icon}
    </button>
  );
}
