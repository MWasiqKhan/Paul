import type { Metadata, Viewport } from "next";
import { Fraunces, Literata, Space_Mono } from "next/font/google";
import Spine from "@/components/Spine";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], style: ["normal", "italic"], axes: ["opsz"], variable: "--font-fraunces", display: "swap" });
const literata = Literata({ subsets: ["latin"], style: ["normal", "italic"], axes: ["opsz"], variable: "--font-literata", display: "swap" });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], style: ["normal", "italic"], variable: "--font-space-mono", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Paul Gonave Tirogène | Auteur & Penseur",
    template: "%s | Paul Gonave Tirogène",
  },
  description:
    "Le site officiel de Paul Gonave Tirogène, auteur et penseur explorant l'éducation, le progrès et le développement humain.",
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%2310192B'/%3E%3Ccircle cx='50' cy='50' r='38' fill='none' stroke='%23C89B3C' stroke-width='4'/%3E%3Ctext x='50' y='63' font-family='Georgia,serif' font-weight='700' font-size='36' fill='%23C89B3C' text-anchor='middle'%3EPT%3C/text%3E%3C/svg%3E",
  },
};

export const viewport: Viewport = {
  themeColor: "#10192B",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${literata.variable} ${spaceMono.variable}`} suppressHydrationWarning>
      <head>
        {/* Enable reveal animations only when JS runs, before first paint (no flash, no hidden content without JS). */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a className="skip-link" href="#contenu">Aller au contenu</a>
        <Spine />
        <Topbar />
        <main id="contenu">{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
