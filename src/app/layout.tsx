import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage", display: "swap", weight: ["500", "600", "700", "800"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "Cabinet 360 — Logiciel de cabinet d'expertise comptable OHADA", template: "%s · Cabinet 360" },
  description:
    "Comptabilité SYSCOHADA révisé, liasse fiscale, paie Sénégal et Côte d'Ivoire, GED avec lecture automatique des pièces, portail client, WhatsApp et assistant IA. En ligne, sur mobile, pour le prix d'un abonnement.",
  openGraph: { title: "Cabinet 360", description: SITE.slogan, siteName: "Cabinet 360", locale: "fr_SN", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${manrope.variable} ${bricolage.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
