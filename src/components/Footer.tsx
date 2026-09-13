import Link from "next/link";
import Image from "next/image";
import { SITE, lienWhatsApp } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-green-deep text-white/85 mt-24">
      <div className="container-site py-14 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-3 text-sm max-w-xs text-white/70">{SITE.slogan}</p>
          <p className="mt-6 text-xs uppercase tracking-widest text-white/50">Édité par</p>
          <a href="https://processingenierie.sn" className="inline-block mt-2" rel="noopener">
            <Image src="/logo/processingenierie-horizontal-blanc-orange.svg" alt="processingenierie" width={208} height={38} />
          </a>
        </div>
        <div>
          <p className="font-bold text-white mb-3">Produit</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/fonctionnalites" className="hover:text-white">Fonctionnalités</Link></li>
            <li><Link href="/paie" className="hover:text-white">Paie Sénégal et Côte d&apos;Ivoire</Link></li>
            <li><Link href="/tarifs" className="hover:text-white">Tarifs</Link></li>
            <li><Link href="/securite" className="hover:text-white">Sécurité et données</Link></li>
            <li><Link href="/simulateur-paie" className="hover:text-white">Simulateur de paie gratuit</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-white mb-3">Cabinet</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/demo" className="hover:text-white">Demander une démo</Link></li>
            <li><a href={SITE.app} className="hover:text-white" rel="noopener">Se connecter</a></li>
            <li><Link href="/mentions-legales" className="hover:text-white">Mentions légales</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-white mb-3">Contact</p>
          <ul className="space-y-2 text-sm">
            <li><a href={SITE.telephoneLien} className="hover:text-white">{SITE.telephone}</a></li>
            <li><a href={lienWhatsApp("Bonjour, je souhaite en savoir plus sur Cabinet 360.")} className="hover:text-white" rel="noopener">WhatsApp</a></li>
            {SITE.email && <li><a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a></li>}
            <li className="text-white/60">{SITE.editeur.adresse}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-site py-4 text-xs text-white/50 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} {SITE.editeur.nom} — {SITE.editeur.forme}. NINEA {SITE.editeur.ninea} · RCCM {SITE.editeur.rccm}</span>
          <span>Conçu et hébergé pour la zone OHADA</span>
        </div>
      </div>
    </footer>
  );
}
