import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { AppelAction, Section, Titre } from "@/components/Sections";
import { FORMULES, SERVICES, fmt } from "@/lib/site";

export const metadata: Metadata = { title: "Tarifs", description: "Solo 25 000 F, Cabinet 75 000 F, Cabinet+ 150 000 F par mois. Annuel = 10 mois. Essai 30 jours avec 3 dossiers migrés offerts. Migration, formation, paramétrage." };

const FAQ = [
  ["Y a-t-il des frais d'installation ?", "Non. Rien à installer : un navigateur suffit. La migration de 3 dossiers est offerte pendant l'essai ; au-delà, 50 000 F par dossier."],
  ["Que se passe-t-il à la fin de l'essai ?", "Vous choisissez une formule et un rythme (mensuel ou annuel), ou vous partez avec l'export complet de vos données. Aucun engagement avant."],
  ["Puis-je changer de formule ?", "À tout moment, à la hausse comme à la baisse ; la différence est calculée au prorata."],
  ["Comment payer ?", "Virement bancaire, Wave ou Orange Money. Une facture est émise pour chaque paiement, au nom de l'éditeur (NINEA 007579347)."],
  ["Un tarif pour les membres de l'Ordre ?", "Une remise de 20 % est prévue dans le cadre d'une convention avec l'Ordre. Demandez-nous où en est le partenariat."],
  ["Et pour les écoles ?", "Licences pédagogiques gratuites pour les enseignants et étudiants inscrits, sur demande."],
];

export default function Tarifs() {
  return (
    <>
      <Section className="!pb-8">
        <Titre eyebrow="Tarifs" titre="Pour le prix d'un abonnement, sans licence ni serveur" texte="Une licence de bureau classique coûte plusieurs millions plus la maintenance et un informaticien. Cabinet 360 est à un tiers, mises à jour comprises." centre />
        <div className="grid md:grid-cols-3 gap-5 items-start">
          {FORMULES.map((f) => {
            const populaire = "populaire" in f && f.populaire;
            return (
              <div key={f.nom} className={`card p-7 relative ${populaire ? "border-green ring-2 ring-green/20" : ""}`}>
                {populaire && <span className="absolute -top-3 left-6 text-[11px] font-bold uppercase tracking-widest bg-orange text-[#1a1200] px-3 py-1 rounded-full">Le plus choisi</span>}
                <p className="display font-bold text-2xl">{f.nom}</p>
                <p className="text-ink-3">{f.cible}</p>
                <p className="mt-5 display font-extrabold text-4xl tabular">{fmt(f.prix)} F<span className="text-base font-semibold text-ink-3"> / mois</span></p>
                <p className="text-sm text-ink-3 tabular">soit {fmt(f.prix * 10)} F par an (10 mois payés)</p>
                <ul className="mt-6 space-y-2 text-[15px]">{f.inclus.map((i) => <li key={i} className="flex gap-2"><Check className="w-4 h-4 text-green mt-1 shrink-0" />{i}</li>)}</ul>
                <Link href="/demo" className={`btn w-full justify-center mt-7 ${populaire ? "btn-primary" : "btn-ghost"}`}>Commencer l&apos;essai</Link>
              </div>
            );
          })}
        </div>
        <p className="mt-6 text-center text-sm text-ink-2">Tous les prix en francs CFA, hors taxes. Essai de 30 jours sans engagement, 3 dossiers migrés offerts.</p>
      </Section>

      <Section className="bg-paper border-y border-rule">
        <Titre eyebrow="Services" titre="On fait la migration et la formation avec vous" />
        <div className="grid md:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <div key={s.nom} className="border-t-2 border-green pt-4">
              <p className="font-bold">{s.nom}</p>
              <p className="display font-extrabold text-2xl mt-1">{s.prix}</p>
              <p className="text-ink-2 text-sm mt-2">{s.detail}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-2xl bg-orange-soft p-6 md:flex items-center justify-between gap-6">
          <div>
            <p className="font-bold text-lg">Tarif fondateur — 5 premiers cabinets</p>
            <p className="text-ink-2 mt-1">3 mois offerts, migration et formation comprises, puis −50 % à vie sur la formule choisie. En échange : 30 minutes de retour par semaine et un témoignage.</p>
          </div>
          <Link href="/demo" className="btn btn-primary shrink-0 mt-4 md:mt-0">Devenir cabinet fondateur</Link>
        </div>
      </Section>

      <Section>
        <Titre eyebrow="Questions fréquentes" titre="Avant de vous décider" />
        <dl className="grid md:grid-cols-2 gap-x-10 gap-y-6 max-w-5xl">
          {FAQ.map(([q, r]) => <div key={q}><dt className="font-bold">{q}</dt><dd className="text-ink-2 mt-1 text-[15px]">{r}</dd></div>)}
        </dl>
      </Section>

      <AppelAction titre="Commencez par une démo, décidez après l'essai" texte="On vous montre l'outil sur vos dossiers, on migre 3 dossiers, vous jugez sur pièces pendant 30 jours." />
    </>
  );
}
