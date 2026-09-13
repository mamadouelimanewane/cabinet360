import type { Metadata } from "next";
import { AppelAction, Section, Titre } from "@/components/Sections";

export const metadata: Metadata = { title: "Fonctionnalités", description: "Tous les modules de Cabinet 360 : production comptable, états financiers et liasse, fiscalité, paie, GED, clients et missions, audit, portail client, pilotage." };

const MODULES: { titre: string; intro: string; points: string[] }[] = [
  { titre: "Production comptable", intro: "Le journal au bilan, sans ressaisie.", points: ["Plan de comptes SYSCOHADA révisé, plans spécifiques par dossier", "Import de balance depuis Excel, CSV, scan ou photo (OCR + IA)", "Saisie guidée, lettrage, rapprochement bancaire, écritures d'inventaire", "Immobilisations et amortissements (linéaire, dégressif), cessions", "Révision par cycle, points en suspens, notes de revue"] },
  { titre: "États financiers et liasse fiscale", intro: "Produits automatiquement dès que le journal est à jour.", points: ["Bilan, compte de résultat, TAFIRE, notes annexes (système normal et minimal)", "Liasse fiscale, contrôle de cohérence, export PDF et Excel", "FEC (fichier des écritures comptables) pour les contrôles", "Consolidation de groupe, comparatifs N / N-1"] },
  { titre: "Fiscalité", intro: "Les échéances de chaque dossier, sans les oublier.", points: ["Calendrier fiscal par régime (réel normal, simplifié, CGU)", "Déclarations TVA, IS, retenues à la source, patente", "Simulateur d'impôts et de charges", "Suivi des obligations et des pièces justificatives"] },
  { titre: "Paie", intro: "Sénégal et Côte d'Ivoire, exacte au franc.", points: ["Fiches salariés : situation familiale, sexe, enfants, cadre, transport, avantages en nature, coordonnées de règlement", "Variables du mois par dictée ou saisie : absences, heures supplémentaires, primes", "Bulletins A4, livre de paie Excel/CSV, déclarations sociales pré-remplies, ordre de paiement", "Suivi du règlement, annulation et revalidation d'une période"] },
  { titre: "GED et lecture automatique des pièces", intro: "Chaque pièce à sa place, lue par la machine.", points: ["Classement par dossier, exercice, type de pièce ; recherche plein texte", "OCR des factures, balances, relevés ; lecture IA des documents manuscrits (cahiers de caisse)", "Proposition d'écriture à valider, pièce attachée à l'écriture", "Archivage durable, journal des accès"] },
  { titre: "Clients, missions et facturation", intro: "Le cabinet comme entreprise.", points: ["Fiches clients complètes (NINEA, RCCM, régime, contacts, documents)", "Lettres de mission générées et signées électroniquement", "Planning, temps passé par collaborateur, rentabilité par mission", "Factures du cabinet avec lignes, échéances, relances"] },
  { titre: "Audit et conformité", intro: "Le dossier de travail structuré.", points: ["Dossier permanent et dossier de l'exercice, programmes de travail", "KYC et criblage des listes de sanctions", "Contrôles automatiques de cohérence, détection d'anomalies", "Journal d'audit de toutes les actions"] },
  { titre: "Portail client et WhatsApp", intro: "Vos clients vous envoient leurs pièces, pas des questions.", points: ["Espace client sécurisé par lien nominatif : pièces, états, factures", "Dépôt de documents depuis le téléphone", "Assistant WhatsApp : rappels d'échéances, réception de pièces", "Notifications par e-mail et WhatsApp"] },
  { titre: "Pilotage et intelligence artificielle", intro: "Le cabinet et ses clients en un coup d'œil.", points: ["Tableaux de bord du cabinet : dossiers, échéances, encours, temps", "Indicateurs financiers par client, prévisions, valorisation", "Nexus, l'assistant IA : réglementation OHADA, chiffres du dossier, rédaction", "Application Android et web mobile, trois thèmes d'affichage"] },
];

export default function Fonctionnalites() {
  return (
    <>
      <Section className="!pb-6">
        <Titre eyebrow="Fonctionnalités" titre="Le poste de travail complet du cabinet" texte="Neuf modules qui partagent les mêmes dossiers, les mêmes pièces et les mêmes utilisateurs. Rien à installer, rien à synchroniser." />
      </Section>
      <Section className="!pt-0">
        <div className="grid md:grid-cols-2 gap-6">
          {MODULES.map((m) => (
            <article key={m.titre} className="card p-6">
              <h2 className="text-xl font-bold">{m.titre}</h2>
              <p className="text-green font-semibold text-sm mt-1">{m.intro}</p>
              <ul className="mt-4 space-y-2 text-[15px] text-ink-2">
                {m.points.map((p) => <li key={p} className="flex gap-2"><span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-green shrink-0" />{p}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </Section>
      <AppelAction titre="Une démonstration vaut mieux qu'une liste" texte="30 minutes, sur vos dossiers, dans votre cabinet ou en visio." />
    </>
  );
}
