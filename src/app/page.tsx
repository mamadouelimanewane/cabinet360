import Link from "next/link";
import { ArrowRight, BookOpenCheck, Calculator, FileSpreadsheet, FolderSearch, MessageCircle, ShieldCheck, Smartphone, Sparkles, Users } from "lucide-react";
import { BulletinMock } from "@/components/BulletinMock";
import { AppelAction, Section, Titre } from "@/components/Sections";
import { FORMULES, fmt } from "@/lib/site";

const BENEFICES = [
  { icone: BookOpenCheck, titre: "Des clôtures deux fois plus rapides", texte: "Import de balance (Excel, CSV, scan), lettrage, révision, états financiers et liasse conformes au SYSCOHADA révisé — sans ressaisie." },
  { icone: Calculator, titre: "Une paie sans erreur", texte: "Barèmes Sénégal et Côte d'Ivoire à jour : bulletins A4, déclarations IPRES, CSS, IPM, DGID (ou CNPS, CMU, ITS, FDFP) pré-remplies, ordre de paiement." },
  { icone: FolderSearch, titre: "Zéro ressaisie des pièces", texte: "Factures, balances et cahiers de caisse sont lus automatiquement, même manuscrits ; vous validez l'écriture proposée." },
  { icone: Users, titre: "Des clients servis", texte: "Portail client, dépôt de pièces, suivi des missions et lettres de mission signées ; notifications WhatsApp." },
  { icone: Smartphone, titre: "Votre cabinet dans la poche", texte: "Application Android et web mobile : consultez un dossier, validez une paie, répondez à un client depuis le terrain." },
  { icone: Sparkles, titre: "Un assistant qui connaît vos dossiers", texte: "Nexus, l'IA intégrée, répond sur la réglementation OHADA et sur les chiffres de vos clients." },
];

const MODULES = [
  ["Production comptable", "Journal, balance, grand-livre, lettrage, révision, immobilisations et amortissements"],
  ["États financiers et liasse", "Bilan, compte de résultat, TAFIRE, notes annexes, liasse fiscale, FEC, consolidation"],
  ["Fiscalité", "Obligations et calendrier fiscal, déclarations, simulateur d'impôts"],
  ["Paie", "Salariés, variables du mois, bulletins, livre de paie, déclarations sociales, ordre de paiement, suivi du règlement"],
  ["GED et lecture automatique", "Classement, OCR et IA sur factures, balances, cahiers de caisse ; archivage"],
  ["Clients et missions", "Fiches, lettres de mission, planning, temps passé, facturation, rentabilité par mission"],
  ["Audit et conformité", "Dossier de travail, contrôles, KYC, criblage sanctions, journal d'audit"],
  ["Portail client et WhatsApp", "Espace client sécurisé, dépôt de pièces, notifications, assistant WhatsApp"],
  ["Pilotage", "Tableaux de bord du cabinet, indicateurs par dossier, prévisions, valorisation"],
];

export default function Accueil() {
  return (
    <>
      {/* Héros */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_var(--green-soft),_transparent_55%)]" />
        <div className="container-site grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center py-16 md:py-24">
          <div>
            <p className="eyebrow mb-4">Logiciel de cabinet d&apos;expertise comptable · zone OHADA</p>
            <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.05] text-ink">
              Tout votre cabinet OHADA, <span className="text-green">en ligne</span>, sur mobile, <span className="text-green">avec l&apos;IA</span>.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-ink-2 max-w-xl">
              Comptabilité SYSCOHADA révisé, liasse, paie, GED, portail client et WhatsApp — pour le prix d&apos;un abonnement, sans serveur ni informaticien. Vos dossiers clôturés deux fois plus vite.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/demo" className="btn btn-primary justify-center">Demander une démo de 30 min <ArrowRight className="w-4 h-4" /></Link>
              <Link href="/simulateur-paie" className="btn btn-ghost justify-center">Essayer le simulateur de paie</Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-2">
              <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-green" /> Vos données exportables en 24 h</li>
              <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-green" /> Essai 30 jours, 3 dossiers migrés offerts</li>
              <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-green" /> Conçu à Dakar</li>
            </ul>
          </div>
          <div className="lg:pl-6">
            <BulletinMock />
          </div>
        </div>
      </section>

      {/* Pour qui */}
      <Section className="bg-paper border-y border-rule !py-10">
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {[
            ["Cabinets d'expertise comptable", "de 1 à 15 collaborateurs, des dizaines de dossiers à clôturer chaque mois"],
            ["Comptables agréés", "qui tiennent seuls la comptabilité et la paie de leurs clients"],
            ["PME et écoles", "qui tiennent leur comptabilité en interne ou forment aux métiers du chiffre"],
          ].map(([t, s]) => (
            <div key={t}>
              <p className="display font-bold text-lg">{t}</p>
              <p className="text-ink-2 text-sm mt-1">{s}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Bénéfices */}
      <Section>
        <Titre eyebrow="Ce que vous gagnez" titre="Le temps de vos collaborateurs, la sérénité de vos déclarations" texte="Cabinet 360 n'est pas un logiciel de plus : c'est le poste de travail complet du cabinet, pensé pour les règles OHADA et les administrations sénégalaise et ivoirienne." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {BENEFICES.map(({ icone: Icone, titre, texte }) => (
            <div key={titre} className="card p-6">
              <div className="w-11 h-11 rounded-xl bg-green-soft text-green flex items-center justify-center mb-4"><Icone className="w-5 h-5" /></div>
              <h3 className="font-bold text-lg">{titre}</h3>
              <p className="mt-2 text-ink-2 text-[15px]">{texte}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Paie */}
      <Section className="bg-green-deep text-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow !text-orange mb-3">Module paie</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">La paie sénégalaise, exacte au franc, en un clic</h2>
            <p className="mt-4 text-white/75 text-lg">Parts fiscales (y compris la femme mariée), TRIMF, plafonds IPRES 2026, IPM, avantages en nature, accident du travail selon la classe de risque : le moteur applique le Code général des impôts et les règles IPRES/CSS, et le prouve sur chaque bulletin.</p>
            <ul className="mt-6 space-y-3 text-white/85">
              {[
                "Bulletins A4 imprimables, livre de paie Excel/CSV",
                "Bordereaux IPRES, CSS, IPM et état DGID pré-remplis avec annexe nominative",
                "Ordre de paiement banque ou Mobile Money (Wave, Orange Money, Free Money)",
                "Suivi du règlement : validée → payée, avec date et référence",
                "Côte d'Ivoire : CNPS, CMU, ITS 2024, FDFP",
              ].map((t) => <li key={t} className="flex gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-orange shrink-0" />{t}</li>)}
            </ul>
            <div className="mt-8 flex gap-3 flex-wrap">
              <Link href="/paie" className="btn btn-orange">Découvrir le module paie</Link>
              <Link href="/simulateur-paie" className="btn border border-white/25 text-white hover:bg-white/10">Simulateur gratuit</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              ["IPRES", "RG plafonné 432 000 F · RC cadres 1 296 000 F"],
              ["CSS", "PF 7 % · AT 1, 3 ou 5 % · plafond 63 000 F"],
              ["DGID", "IR barème art. 173 · réduction art. 174 · TRIMF · CFCE 3 %"],
              ["IPM", "Cotisation maladie, assiette plafonnée 250 000 F"],
            ].map(([o, t]) => (
              <div key={o} className="rounded-2xl bg-white/5 border border-white/10 p-5">
                <p className="display font-extrabold text-2xl text-orange">{o}</p>
                <p className="mt-2 text-sm text-white/70">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Modules */}
      <Section>
        <Titre eyebrow="Un seul outil" titre="Neuf modules, un seul abonnement" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
          {MODULES.map(([t, s]) => (
            <div key={t} className="border-t-2 border-green pt-4">
              <p className="font-bold">{t}</p>
              <p className="text-ink-2 text-sm mt-1">{s}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link href="/fonctionnalites" className="btn btn-ghost">Toutes les fonctionnalités <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </Section>

      {/* Confiance */}
      <Section className="bg-paper border-y border-rule">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-start">
          <Titre eyebrow="Ce que vous ne perdez pas" titre="Vos données vous appartiennent" texte="Un cabinet ne confie pas ses dossiers à un logiciel : il les confie à un contrat, une garantie de sortie et des preuves." />
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              [ShieldCheck, "Réversibilité 24 h", "Export complet de tout dossier (Excel, CSV, FEC), à tout moment, sans condition."],
              [FileSpreadsheet, "Vos habitudes conservées", "Import depuis Sage, Excel ou tout autre outil ; coexistence pendant l'essai."],
              [ShieldCheck, "Sécurité documentée", "Chiffrement, journal d'audit, sauvegardes quotidiennes, rôles et permissions, déclaration CDP."],
              [MessageCircle, "Un interlocuteur", "Ligne WhatsApp directe, corrections sous 48 h ouvrées, formation sur place."],
            ].map(([Icone, t, s]) => {
              const I = Icone as typeof ShieldCheck;
              return (
                <div key={t as string} className="flex gap-3">
                  <I className="w-5 h-5 text-green shrink-0 mt-1" />
                  <div><p className="font-bold">{t as string}</p><p className="text-ink-2 text-sm mt-1">{s as string}</p></div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Tarifs */}
      <Section>
        <Titre eyebrow="Tarifs" titre="Pour le prix d'un abonnement" texte="Sans licence, sans serveur, sans informaticien. Annuel = 10 mois payés. Essai de 30 jours avec 3 dossiers migrés offerts." centre />
        <div className="grid md:grid-cols-3 gap-5">
          {FORMULES.map((f) => (
            <div key={f.nom} className={`card p-6 ${"populaire" in f && f.populaire ? "border-green ring-2 ring-green/20" : ""}`}>
              <p className="display font-bold text-xl">{f.nom}</p>
              <p className="text-ink-3 text-sm">{f.cible}</p>
              <p className="mt-4 display font-extrabold text-3xl tabular">{fmt(f.prix)} F <span className="text-base font-semibold text-ink-3">/ mois</span></p>
              <ul className="mt-4 space-y-1.5 text-sm text-ink-2">{f.inclus.map((i) => <li key={i}>· {i}</li>)}</ul>
            </div>
          ))}
        </div>
        <p className="text-center mt-8"><Link href="/tarifs" className="font-bold text-green hover:underline">Détail des formules et services →</Link></p>
      </Section>

      <AppelAction titre="Voyez-le sur vos propres dossiers" texte="Une démonstration de 30 minutes dans votre cabinet : on importe une de vos balances, on sort le bilan, on fait la paie d'un salarié. Ensuite, 30 jours d'essai avec 3 dossiers migrés par nous." />
    </>
  );
}
