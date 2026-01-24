import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import { FontProvider } from "@/components/FontProvider";
import { Navbar } from "@/components/Navbar";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ChatbotUI } from "@/components/ChatbotUI";
import { BackgroundEffects } from "@/components/BackgroundEffects";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const gohu = localFont({
  src: "../public/fonts/GohuFont11NerdFontPropo-Regular.ttf",
  variable: "--font-gohu",
});

export const metadata: Metadata = {
  title: "Privacy Center",
  description: "Privacy Policies for our project ecosystem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${gohu.variable}`}>
      <body className="antialiased">
        <BackgroundEffects />
        <ThemeProvider
          attribute="class"
          defaultTheme="yellow"
          enableSystem
          disableTransitionOnChange
          themes={["light", "dark", "yellow"]}
        >
          <FontProvider fontStyles={{ retro: gohu.style.fontFamily, sans: inter.style.fontFamily }}>
            <LanguageProvider>
              <Navbar />
              {children}
              <ScrollToTop />
              <ChatbotUI />
            </LanguageProvider>
          </FontProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
