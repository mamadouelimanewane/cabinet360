import type { Metadata } from "next";
import { Database, FileDown, KeyRound, Lock, ScrollText, Server, ShieldCheck, UserCheck } from "lucide-react";
import { AppelAction, Section, Titre } from "@/components/Sections";

export const metadata: Metadata = { title: "Sécurité et données", description: "Chiffrement, journal d'audit, sauvegardes, rôles, réversibilité 24 h, déclaration CDP, séquestre du code : les engagements de Cabinet 360 sur vos données." };

const ENGAGEMENTS = [
  [FileDown, "Réversibilité en 24 h", "Vous pouvez exporter l'intégralité d'un dossier (écritures, balance, tiers, pièces, bulletins) en formats ouverts — Excel, CSV, FEC, PDF — à tout moment et sans condition. À la fin de la relation, les données sont restituées puis supprimées sous 30 jours."],
  [Lock, "Chiffrement", "Toutes les connexions sont chiffrées (TLS). Les mots de passe sont hachés ; les sessions sont signées et expirent. Les pièces sont stockées chiffrées au repos."],
  [UserCheck, "Rôles et permissions", "Administrateur, expert, collaborateur, assistant : chacun ne voit et ne modifie que ce que son rôle permet. Le portail client isole strictement chaque client."],
  [ScrollText, "Journal d'audit", "Chaque création, modification, validation ou suppression est tracée : qui, quand, quoi, avant et après. Consultable par l'administrateur du cabinet."],
  [Database, "Sauvegardes", "Sauvegardes automatiques de la base, données répliquées sur plusieurs serveurs ; restauration testée. Vos exports vous donnent en plus une copie sous votre contrôle."],
  [Server, "Hébergement", "Infrastructure cloud de niveau professionnel, surveillée en permanence, mises à jour de sécurité appliquées sans interruption de service. Option d'hébergement dédié en Afrique sur devis."],
  [ShieldCheck, "Données personnelles", "Traitement en cours de déclaration auprès de la Commission de protection des données personnelles du Sénégal (loi 2008-12). L'éditeur agit pour le seul compte du cabinet et ne communique aucune donnée à des tiers."],
  [KeyRound, "Continuité", "Le code source sera déposé auprès d'un tiers séquestre avant fin 2026, avec libération au profit des clients en cas de cessation d'activité de l'éditeur ; l'engagement figure au contrat. Documentation complète et procédures écrites."],
];

export default function Securite() {
  return (
    <>
      <Section className="!pb-6">
        <Titre eyebrow="Sécurité et données" titre="Vos dossiers restent les vôtres" texte="Un cabinet engage sa responsabilité sur chaque dossier. Voici, noir sur blanc, ce que nous garantissons — et ce que vous pouvez vérifier vous-même." />
      </Section>
      <Section className="!pt-0">
        <div className="grid md:grid-cols-2 gap-5">
          {ENGAGEMENTS.map(([Icone, t, s]) => {
            const I = Icone as typeof Lock;
            return (
              <div key={t as string} className="card p-6 flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-green-soft text-green flex items-center justify-center shrink-0"><I className="w-5 h-5" /></div>
                <div><h2 className="font-bold text-lg">{t as string}</h2><p className="text-ink-2 text-[15px] mt-1">{s as string}</p></div>
              </div>
            );
          })}
        </div>
      </Section>
      <Section className="bg-paper border-y border-rule">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold">Ce que dit le contrat</h2>
          <p className="text-ink-2 mt-3">Les engagements ci-dessus figurent dans le contrat d&apos;abonnement : propriété des données, réversibilité sous 24 heures ouvrées, confidentialité, disponibilité cible de 99,5 % mensuelle, correction des anomalies sous 48 heures ouvrées, séquestre du code. Le cabinet conserve la responsabilité professionnelle des travaux, déclarations et bulletins qu&apos;il émet ; l&apos;outil montre ses calculs pour permettre ce contrôle.</p>
          <p className="text-ink-2 mt-3">Vous voulez le contrat avant la démo ? Demandez-le, nous l&apos;envoyons.</p>
        </div>
      </Section>
      <AppelAction titre="Testez la réversibilité pendant l'essai" texte="Exportez un dossier complet dès le premier jour : c'est la meilleure preuve." />
    </>
  );
}
