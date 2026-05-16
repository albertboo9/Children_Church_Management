import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Children Church Management",
  description: "Plateforme professionnelle de gestion des enfants du culte",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${outfit.variable}`}>
      <body
        className="min-h-screen bg-background font-sans antialiased text-foreground overflow-x-hidden relative"
      >
        {/* Subtle animated background gradient for premium feel */}
        <div className="fixed inset-0 z-[-1] h-full w-full bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(100,50,255,0.1)_0,rgba(100,50,255,0)_50%,rgba(100,50,255,0)_100%)] dark:bg-slate-950 dark:bg-[radial-gradient(100%_50%_at_50%_0%,rgba(100,50,255,0.15)_0,rgba(100,50,255,0)_50%,rgba(100,50,255,0)_100%)]"></div>
        {children}
      </body>
    </html>
  );
}
