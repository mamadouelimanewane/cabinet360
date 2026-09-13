import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export function Section({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container-site">{children}</div>
    </section>
  );
}

export function Titre({ eyebrow, titre, texte, centre = false }: { eyebrow?: string; titre: string; texte?: string; centre?: boolean }) {
  return (
    <div className={`max-w-2xl ${centre ? "mx-auto text-center" : ""} mb-10`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-3xl md:text-4xl font-bold text-ink">{titre}</h2>
      {texte && <p className="mt-4 text-lg text-ink-2">{texte}</p>}
    </div>
  );
}

export function AppelAction({ titre, texte }: { titre: string; texte: string }) {
  return (
    <Section>
      <div className="rounded-3xl bg-green-deep text-white p-8 md:p-14 grid md:grid-cols-[1.5fr_1fr] gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">{titre}</h2>
          <p className="mt-4 text-white/75 text-lg max-w-xl">{texte}</p>
        </div>
        <div className="flex flex-col sm:flex-row md:flex-col gap-3 md:items-end">
          <Link href="/demo" className="btn btn-orange justify-center">Demander une démo <ArrowRight className="w-4 h-4" /></Link>
          <Link href="/tarifs" className="btn justify-center border border-white/25 text-white hover:bg-white/10">Voir les tarifs</Link>
        </div>
      </div>
    </Section>
  );
}
