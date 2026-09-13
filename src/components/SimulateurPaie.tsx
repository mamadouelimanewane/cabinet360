"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { calculateSenegalPayroll } from "@/lib/paie-senegal";
import { fmt } from "@/lib/site";

/** Simulateur public de paie Sénégal — même moteur que Cabinet 360. */
export function SimulateurPaie() {
  const [p, setP] = useState({
    baseSalary: 350_000, transportAllowance: 20_800, bonuses: 0, overtimeHours: 0, absencesDays: 0,
    maritalStatus: "CELIBATAIRE", sexe: "M" as "M" | "F", childrenCount: 0, conjointsSansRevenu: 0, isCadre: false,
    accidentRate: 0.01, benefitsInKind: 0,
  });
  const set = <K extends keyof typeof p>(k: K, v: (typeof p)[K]) => setP({ ...p, [k]: v });
  const r = useMemo(() => calculateSenegalPayroll(p), [p]);
  const d = r.detail;

  const num = "mt-1 w-full rounded-xl border border-rule bg-paper px-3 py-2 text-[15px] tabular focus:outline-none focus:ring-2 focus:ring-green/30 focus:border-green";
  const lab = "block text-sm font-semibold";

  const lignes: [string, number, number?][] = [
    ["IPRES régime général (5,6 % / 8,4 %)", -d.ipresRegimeGeneral, d.ipresRegimeGeneralPatronal],
    ["IPRES régime complémentaire (2,4 % / 3,6 %)", -d.ipresRegimeComplementaire, d.ipresRegimeComplementairePatronal],
    ["CSS prestations familiales (7 %)", 0, d.cssPrestationsFamiliales],
    [`CSS accidents du travail (${(p.accidentRate * 100).toFixed(0)} %)`, 0, d.cssAccidentTravail],
    ["CFCE (3 %)", 0, d.cfce],
    [`Impôt sur le revenu (${d.parts.toLocaleString("fr-FR")} part${d.parts > 1 ? "s" : ""})`, -d.impotRevenu, 0],
    [`TRIMF (${d.partsTrimf.toLocaleString("fr-FR")} part${d.partsTrimf > 1 ? "s" : ""})`, -d.trimf, 0],
  ];

  return (
    <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 items-start">
      <form className="card p-6 grid gap-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid sm:grid-cols-2 gap-4">
          <label className={lab}>Salaire de base mensuel (F)<input type="number" min={0} step={1000} className={num} value={p.baseSalary} onChange={(e) => set("baseSalary", Number(e.target.value))} /></label>
          <label className={lab}>Indemnité de transport (F)<input type="number" min={0} step={100} className={num} value={p.transportAllowance} onChange={(e) => set("transportAllowance", Number(e.target.value))} /><span className="text-xs text-ink-3">Exonérée jusqu&apos;à 20 800 F</span></label>
          <label className={lab}>Primes du mois (F)<input type="number" min={0} step={1000} className={num} value={p.bonuses} onChange={(e) => set("bonuses", Number(e.target.value))} /></label>
          <label className={lab}>Avantages en nature (F)<input type="number" min={0} step={1000} className={num} value={p.benefitsInKind} onChange={(e) => set("benefitsInKind", Number(e.target.value))} /></label>
          <label className={lab}>Heures supplémentaires<input type="number" min={0} className={num} value={p.overtimeHours} onChange={(e) => set("overtimeHours", Number(e.target.value))} /></label>
          <label className={lab}>Jours d&apos;absence<input type="number" min={0} max={30} className={num} value={p.absencesDays} onChange={(e) => set("absencesDays", Number(e.target.value))} /></label>
          <label className={lab}>Situation familiale
            <select className={num} value={p.maritalStatus} onChange={(e) => set("maritalStatus", e.target.value)}>
              <option value="CELIBATAIRE">Célibataire</option><option value="MARIE">Marié(e)</option><option value="VEUF">Veuf / veuve</option><option value="DIVORCE">Divorcé(e)</option>
            </select>
          </label>
          <label className={lab}>Sexe
            <select className={num} value={p.sexe} onChange={(e) => set("sexe", e.target.value as "M" | "F")}><option value="M">Homme</option><option value="F">Femme</option></select>
          </label>
          <label className={lab}>Enfants à charge<input type="number" min={0} max={20} className={num} value={p.childrenCount} onChange={(e) => set("childrenCount", Number(e.target.value))} /></label>
          <label className={lab}>Conjoints sans revenu<input type="number" min={0} max={4} className={num} value={p.conjointsSansRevenu} onChange={(e) => set("conjointsSansRevenu", Number(e.target.value))} /></label>
          <label className={lab}>Accident du travail
            <select className={num} value={p.accidentRate} onChange={(e) => set("accidentRate", Number(e.target.value))}><option value={0.01}>1 % — bureaux, commerce</option><option value={0.03}>3 % — risque moyen</option><option value={0.05}>5 % — BTP, industrie</option></select>
          </label>
          <label className="flex items-center gap-2 mt-6 text-sm font-semibold"><input type="checkbox" checked={p.isCadre} onChange={(e) => set("isCadre", e.target.checked)} /> Cadre (régime complémentaire IPRES)</label>
        </div>
        <p className="text-xs text-ink-3">Barème Sénégal 2026 : CGI art. 173-174, plafonds IPRES 432 000 / 1 296 000 F, CSS 63 000 F. IPM non incluse (propre à chaque entreprise). Résultat indicatif : le bulletin officiel relève de l&apos;employeur ou de son cabinet.</p>
      </form>

      <div className="card p-6 md:p-7">
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="rounded-xl bg-green-soft p-4"><p className="text-[11px] uppercase tracking-wider text-green-deep/70">Net à payer</p><p className="display font-extrabold text-2xl md:text-3xl text-green-deep tabular">{fmt(r.netSalary)} F</p></div>
          <div className="rounded-xl bg-ground p-4"><p className="text-[11px] uppercase tracking-wider text-ink-3">Coût employeur</p><p className="display font-extrabold text-2xl md:text-3xl tabular">{fmt(r.grossSalary + r.employerContributions)} F</p></div>
        </div>
        <table className="w-full text-sm">
          <thead><tr className="text-[10px] uppercase tracking-wider text-ink-3"><th className="text-left font-semibold pb-2">Rubrique</th><th className="text-right font-semibold pb-2">Salarié</th><th className="text-right font-semibold pb-2">Employeur</th></tr></thead>
          <tbody className="tabular">
            <tr className="border-t border-rule font-bold"><td className="py-1.5">Salaire brut</td><td className="text-right">{fmt(r.grossSalary)}</td><td></td></tr>
            {d.remunerationHeuresSup > 0 && <tr className="border-t border-rule/60"><td className="py-1.5 pl-3 text-ink-2">dont heures supplémentaires</td><td className="text-right text-ink-2">{fmt(d.remunerationHeuresSup)}</td><td></td></tr>}
            {lignes.filter(([, s, e]) => s !== 0 || (e ?? 0) !== 0).map(([l, s, e]) => (
              <tr key={l} className="border-t border-rule/60"><td className="py-1.5">{l}</td><td className="text-right">{s ? fmt(s) : ""}</td><td className="text-right text-ink-2">{e ? fmt(e) : ""}</td></tr>
            ))}
            <tr className="border-t border-rule"><td className="py-1.5 text-ink-2">Base imposable mensuelle</td><td className="text-right text-ink-2">{fmt(r.taxableIncome)}</td><td></td></tr>
            <tr className="border-t border-rule font-bold"><td className="py-1.5">Total retenues</td><td className="text-right">−{fmt(r.socialSecurity + r.taxes)}</td><td className="text-right">{fmt(r.employerContributions)}</td></tr>
            {d.avantagesNature > 0 && <tr className="border-t border-rule/60"><td className="py-1.5 text-ink-2">Avantages en nature (non versés)</td><td className="text-right text-ink-2">−{fmt(d.avantagesNature)}</td><td></td></tr>}
          </tbody>
        </table>
        {r.avertissements.length > 0 && <ul className="mt-3 text-xs text-orange-700">{r.avertissements.map((a) => <li key={a}>{a}</li>)}</ul>}
        <div className="mt-6 rounded-2xl bg-orange-soft p-4 text-sm">
          <p className="font-bold">Dans Cabinet 360, ce calcul devient un bulletin A4, un bordereau IPRES/CSS/DGID et un ordre de paiement — pour tous vos salariés, en un clic.</p>
          <Link href="/demo" className="btn btn-primary mt-3 !py-2">Voir sur mes dossiers</Link>
        </div>
      </div>
    </div>
  );
}
