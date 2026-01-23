import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Navbar } from "@/components/Navbar";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ChatbotUI } from "@/components/ChatbotUI";
import { BackgroundEffects } from "@/components/BackgroundEffects";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <BackgroundEffects />
        <ThemeProvider
          attribute="class"
          defaultTheme="yellow"
          enableSystem
          disableTransitionOnChange
          themes={["light", "dark", "yellow"]}
        >
          <LanguageProvider>
            <Navbar />
            {children}
            <ScrollToTop />
            <ChatbotUI />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
