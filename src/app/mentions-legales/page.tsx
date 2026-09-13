import type { Metadata } from "next";
import { Section } from "@/components/Sections";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Mentions légales" };

export default function MentionsLegales() {
  return (
    <Section>
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold">Mentions légales</h1>
        <h2 className="text-xl font-bold mt-8">Éditeur du site et du logiciel</h2>
        <p className="mt-2 text-ink-2">{SITE.editeur.nom} — {SITE.editeur.forme}<br />NINEA {SITE.editeur.ninea} · RCCM {SITE.editeur.rccm}<br />{SITE.editeur.adresse}<br />Téléphone : {SITE.telephone}{SITE.email ? <><br />E-mail : {SITE.email}</> : null}</p>
        <h2 className="text-xl font-bold mt-8">Hébergement</h2>
        <p className="mt-2 text-ink-2">Site et application hébergés sur une infrastructure cloud professionnelle (Vercel Inc., États-Unis ; base de données MongoDB Atlas). Les données des dossiers sont exportables à tout moment par le cabinet ; voir la page Sécurité.</p>
        <h2 className="text-xl font-bold mt-8">Données personnelles</h2>
        <p className="mt-2 text-ink-2">Les informations saisies dans le formulaire de démonstration servent uniquement à organiser cette démonstration et ne sont transmises à aucun tiers. Vous pouvez demander leur suppression par simple message au numéro ci-dessus. Le traitement des données des dossiers clients dans le logiciel fait l&apos;objet d&apos;une déclaration auprès de la Commission de protection des données personnelles (loi n° 2008-12 du 25 janvier 2008).</p>
        <h2 className="text-xl font-bold mt-8">Propriété intellectuelle</h2>
        <p className="mt-2 text-ink-2">Cabinet 360, son code, ses textes et ses éléments graphiques sont la propriété de l&apos;éditeur. Les marques citées (Sage, Ciel, Odoo, Wave, Orange Money, Free Money) appartiennent à leurs titulaires respectifs.</p>
      </div>
    </Section>
  );
}
