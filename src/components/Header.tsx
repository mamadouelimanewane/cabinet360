"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { SITE } from "@/lib/site";

const LIENS = [
  { href: "/fonctionnalites", label: "Fonctionnalités" },
  { href: "/paie", label: "Paie" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/securite", label: "Sécurité" },
  { href: "/simulateur-paie", label: "Simulateur de paie" },
];

export function Header() {
  const pathname = usePathname();
  const [ouvert, setOuvert] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur border-b border-rule">
      <div className="container-site flex items-center justify-between h-16">
        <Logo />
        <nav className="hidden lg:flex items-center gap-1" aria-label="Navigation principale">
          {LIENS.map((l) => {
            const actif = pathname === l.href;
            return (
              <Link key={l.href} href={l.href} aria-current={actif ? "page" : undefined}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${actif ? "bg-green-soft text-green-deep" : "text-ink-2 hover:text-ink hover:bg-ground"}`}>
                {l.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden lg:flex items-center gap-2">
          <a href={SITE.app} className="btn btn-ghost !py-2" rel="noopener">Se connecter</a>
          <Link href="/demo" className="btn btn-primary !py-2">Demander une démo</Link>
        </div>
        <button type="button" onClick={() => setOuvert(!ouvert)} aria-expanded={ouvert} aria-controls="menu-mobile" aria-label="Menu"
          className="lg:hidden p-2 rounded-lg text-ink-2 hover:bg-ground">
          {ouvert ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {ouvert && (
        <div id="menu-mobile" className="lg:hidden border-t border-rule bg-paper">
          <nav className="container-site py-3 flex flex-col gap-1" aria-label="Navigation mobile">
            {LIENS.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOuvert(false)} className="px-3 py-3 rounded-lg font-semibold text-ink-2 hover:bg-ground">{l.label}</Link>
            ))}
            <div className="flex gap-2 pt-2">
              <a href={SITE.app} className="btn btn-ghost flex-1 justify-center" rel="noopener">Se connecter</a>
              <Link href="/demo" onClick={() => setOuvert(false)} className="btn btn-primary flex-1 justify-center">Demander une démo</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
