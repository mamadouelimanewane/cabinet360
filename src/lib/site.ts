/** Constantes du site — un seul endroit pour les coordonnées et l'offre. */

export const SITE = {
  nom: "Cabinet 360",
  slogan: "Tout votre cabinet OHADA, en ligne, sur mobile, avec l'IA.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://cabinet360.sn",
  app: "https://expert-pi.vercel.app",
  telephone: "+221 77 752 92 88",
  telephoneLien: "tel:+221777529288",
  whatsapp: "221777529288",
  /** Vide tant que l'adresse professionnelle n'est pas confirmée : le site n'affiche alors que le téléphone. */
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  editeur: {
    nom: "processingenierie",
    forme: "Entreprise individuelle de Mamadou Dia",
    ninea: "007579347",
    rccm: "SN DKR 2019 A 25701",
    adresse: "Hann Maristes 2, n° 145, Dakar, Sénégal",
  },
} as const;

export const FORMULES = [
  {
    nom: "Solo",
    prix: 25_000,
    cible: "Comptable agréé seul",
    inclus: ["1 utilisateur", "25 dossiers clients", "Comptabilité, liasse, fiscalité", "Paie Sénégal et Côte d'Ivoire", "Support par e-mail"],
  },
  {
    nom: "Cabinet",
    prix: 75_000,
    cible: "2 à 5 collaborateurs",
    populaire: true,
    inclus: ["5 utilisateurs", "100 dossiers clients", "Tout Solo", "GED et lecture automatique des pièces", "Portail client", "Support e-mail + WhatsApp", "Formation ½ journée"],
  },
  {
    nom: "Cabinet +",
    prix: 150_000,
    cible: "5 à 15 collaborateurs",
    inclus: ["Utilisateurs et dossiers illimités", "Tout Cabinet", "WhatsApp et assistant IA Nexus", "Audit et conformité", "Support prioritaire, ligne directe", "Formation 1 journée sur place"],
  },
] as const;

export const SERVICES = [
  { nom: "Migration d'un dossier", prix: "50 000 F", detail: "Balance, tiers, immobilisations, salariés — repris depuis Sage, Excel ou tout autre outil." },
  { nom: "Formation", prix: "150 000 F / jour", detail: "Sur place, pour vos collaborateurs, sur vos dossiers." },
  { nom: "Paramétrage", prix: "sur devis", detail: "Plan de comptes spécifique, modèles d'états, intégrations." },
] as const;

export const fmt = (n: number) => n.toLocaleString("fr-FR");

export function lienWhatsApp(message: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}
