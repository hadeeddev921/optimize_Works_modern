import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { LogoPreloader } from "@/components/LogoPreloader";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Optimize Works — Reducing Cost-to-Serve in Service-Led Organisations",
  description:
    "Optimize Works helps operations leaders in insurance and field service reduce cost-to-serve through practical, low-disruption AI and workflow optimisation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${outfit.variable}`}>
      <body>
        <LogoPreloader />
        <Nav />
        <ScrollReveal />
        {children}
        <Footer />
      </body>
    </html>
  );
}
