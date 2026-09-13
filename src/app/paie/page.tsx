import type { Metadata } from "next";
import Link from "next/link";
import { AppelAction, Section, Titre } from "@/components/Sections";
import { BulletinMock } from "@/components/BulletinMock";

export const metadata: Metadata = { title: "Paie Sénégal et Côte d'Ivoire", description: "Module paie Cabinet 360 : barèmes Sénégal 2026 (IPRES, CSS, IPM, IR, TRIMF, CFCE) et Côte d'Ivoire (CNPS, CMU, ITS 2024, FDFP), bulletins, déclarations pré-remplies, ordre de paiement." };

const ETAPES = [
  ["Fiche salarié", "Situation familiale, sexe (règle de la femme mariée), enfants à charge, conjoint sans revenu, statut cadre, transport, avantages en nature, mode de règlement."],
  ["Variables du mois", "Absences, heures supplémentaires, primes — saisies ou dictées. Le reste vient de la fiche."],
  ["Validation", "Le calcul est refait côté serveur à partir des fiches ; chaque bulletin est figé avec son détail, imprimable à l'identique plus tard."],
  ["Documents", "Bulletins A4, livre de paie Excel/CSV, bordereaux par organisme avec annexe nominative, ordre de paiement groupé par mode."],
  ["Règlement", "Exécutez l'ordre auprès de la banque ou de l'opérateur, puis constatez le paiement (date, mode, référence). Une période non payée peut être annulée et revalidée."],
];

const SN = [
  ["IPRES", "Régime général 5,6 % / 8,4 % (plafond 432 000 F) · régime complémentaire cadres 2,4 % / 3,6 % (plafond 1 296 000 F)"],
  ["CSS", "Prestations familiales 7 % · accidents du travail 1, 3 ou 5 % selon la classe de risque · plafond 63 000 F"],
  ["IPM", "Cotisation maladie aux taux de l'institution de l'entreprise, assiette plafonnée à 250 000 F"],
  ["IR", "Abattement 30 % plafonné, barème progressif annuel (art. 173), réduction pour charges de famille selon les parts (art. 174), femme mariée imposée comme célibataire sauf conjoint sans revenu"],
  ["TRIMF", "Sur le brut imposable annuel, par part"],
  ["CFCE", "3 % du brut social, à la charge de l'employeur"],
  ["Transport", "Indemnité exonérée jusqu'à 20 800 F ; l'excédent réintégré"],
];
const CI = [
  ["CNPS", "Retraite 6,3 % / 7,7 % (plafond 3 375 000 F) · prestations familiales 5 % · maternité 0,75 % · accidents du travail 2 à 5 % (plafond 70 000 F)"],
  ["CMU", "Forfait 500 F salarié + 500 F employeur"],
  ["ITS", "Barème mensuel 2024 (0 à 32 %), réduction pour charges de famille par demi-part"],
  ["FDFP", "Taxe d'apprentissage 0,4 % · formation professionnelle continue 1,2 %"],
  ["Transport", "Indemnité exonérée jusqu'à 30 000 F"],
];

export default function Paie() {
  return (
    <>
      <section className="container-site grid lg:grid-cols-2 gap-12 items-center py-16 md:py-20">
        <div>
          <p className="eyebrow mb-3">Module paie</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">La paie sénégalaise, exacte au franc — et la preuve sur le bulletin</h1>
          <p className="mt-5 text-lg text-ink-2">Le moteur applique le Code général des impôts et les règles IPRES / CSS / IPM, cas par cas : parts fiscales, femme mariée, veuf ou divorcé avec enfants, avantages en nature, classe de risque. Chaque rubrique du bulletin montre sa base et son taux.</p>
          <div className="mt-6 flex gap-3 flex-wrap">
            <Link href="/simulateur-paie" className="btn btn-primary">Tester le simulateur gratuit</Link>
            <Link href="/demo" className="btn btn-ghost">Demander une démo</Link>
          </div>
        </div>
        <BulletinMock />
      </section>

      <Section className="bg-paper border-y border-rule">
        <Titre eyebrow="Du salarié au paiement" titre="Cinq étapes, aucune ressaisie" />
        <ol className="grid md:grid-cols-5 gap-5">
          {ETAPES.map(([t, s], i) => (
            <li key={t} className="relative">
              <span className="display text-4xl font-extrabold text-green-soft absolute -top-3 -left-1 select-none">{i + 1}</span>
              <p className="font-bold relative">{t}</p>
              <p className="text-sm text-ink-2 mt-1 relative">{s}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-5">Sénégal — barème 2026</h2>
            <dl className="divide-y divide-rule">
              {SN.map(([o, t]) => <div key={o} className="py-3 grid grid-cols-[90px_1fr] gap-3"><dt className="display font-bold text-green">{o}</dt><dd className="text-ink-2 text-[15px]">{t}</dd></div>)}
            </dl>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-5">Côte d&apos;Ivoire — réforme ITS 2024</h2>
            <dl className="divide-y divide-rule">
              {CI.map(([o, t]) => <div key={o} className="py-3 grid grid-cols-[90px_1fr] gap-3"><dt className="display font-bold text-green">{o}</dt><dd className="text-ink-2 text-[15px]">{t}</dd></div>)}
            </dl>
            <p className="mt-6 text-sm text-ink-3">Autres pays OHADA : ajoutés pays par pays, avec barèmes sourcés et validés. Parlez-nous de vos dossiers au Mali, au Burkina, au Bénin, au Togo ou au Cameroun.</p>
          </div>
        </div>
      </Section>

      <Section className="bg-paper border-y border-rule">
        <Titre eyebrow="Déclarations" titre="Les bordereaux arrivent pré-remplis" texte="Un bordereau par organisme, avec assiettes, taux, parts salariale et patronale, montant à verser et annexe nominative — à reporter sur le formulaire ou le portail de l'organisme." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[["IPRES", "Régime général et complémentaire"], ["CSS", "Prestations familiales, accidents du travail"], ["IPM", "Cotisation maladie"], ["DGID", "IR retenu, TRIMF, CFCE"], ["CNPS", "Retraite, PF, maternité, AT"], ["CNAM", "CMU"], ["DGI", "ITS (état 301)"], ["FDFP", "Taxe d'apprentissage, FPC"]].map(([o, t]) => (
            <div key={o} className="card p-4"><p className="display font-extrabold text-xl text-green">{o}</p><p className="text-sm text-ink-2 mt-1">{t}</p></div>
          ))}
        </div>
        <p className="mt-6 text-sm text-ink-3">Les barèmes sont vérifiés par un référent fiscal et mis à jour à chaque loi de finances. Le cabinet conserve la responsabilité des bulletins et déclarations qu&apos;il émet ; l&apos;outil montre ses calculs pour permettre ce contrôle.</p>
      </Section>

      <AppelAction titre="Faites la paie d'un de vos salariés pendant la démo" texte="Apportez une fiche de salarié : on sort le bulletin, les bordereaux et l'ordre de paiement devant vous." />
    </>
  );
}
