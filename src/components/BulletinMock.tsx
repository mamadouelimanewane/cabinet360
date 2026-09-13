import { calculateSenegalPayroll } from "@/lib/paie-senegal";
import { fmt } from "@/lib/site";

/**
 * Aperçu d'un bulletin de paie sénégalais, calculé avec le vrai moteur de
 * Cabinet 360 au moment du rendu : les montants affichés sont exacts.
 */
export function BulletinMock() {
  const r = calculateSenegalPayroll({
    baseSalary: 450_000,
    absencesDays: 0,
    overtimeHours: 0,
    bonuses: 0,
    transportAllowance: 20_800,
    maritalStatus: "MARIE",
    childrenCount: 2,
    isCadre: false,
  });
  const d = r.detail;
  const lignes: [string, string, string?][] = [
    ["Salaire de base", fmt(450_000)],
    ["Indemnité de transport", fmt(20_800)],
    ["IPRES régime général 5,6 %", `−${fmt(d.ipresRegimeGeneral)}`, fmt(d.ipresRegimeGeneralPatronal)],
    ["CSS prestations familiales 7 %", "", fmt(d.cssPrestationsFamiliales)],
    ["CSS accidents du travail 1 %", "", fmt(d.cssAccidentTravail)],
    ["CFCE 3 %", "", fmt(d.cfce)],
    [`Impôt sur le revenu (${d.parts.toLocaleString("fr-FR")} parts)`, `−${fmt(d.impotRevenu)}`],
    ["TRIMF", `−${fmt(d.trimf)}`],
  ];
  return (
    <div className="card p-5 md:p-6 shadow-[0_30px_60px_-30px_rgba(11,61,46,.45)] text-[13px] rotate-[-1.5deg] hover:rotate-0 transition-transform duration-300">
      <div className="flex justify-between items-start border-b-2 border-ink pb-3 mb-3">
        <div>
          <p className="display font-bold text-base">SARL Diallo &amp; Fils</p>
          <p className="text-ink-3 text-xs">NINEA 00•••••••2A2 · Dakar</p>
        </div>
        <div className="text-right">
          <p className="display font-bold uppercase tracking-widest text-xs">Bulletin de paie</p>
          <p className="text-ink-2">Septembre 2026</p>
        </div>
      </div>
      <div className="flex justify-between text-xs mb-3">
        <span><b>Aminata Ndiaye</b> — Assistante comptable</span>
        <span className="text-ink-3">mariée, 2 enfants</span>
      </div>
      <table className="w-full">
        <thead>
          <tr className="text-[10px] uppercase tracking-wider text-ink-3">
            <th className="text-left font-semibold pb-1">Rubrique</th>
            <th className="text-right font-semibold pb-1">Salarié</th>
            <th className="text-right font-semibold pb-1">Employeur</th>
          </tr>
        </thead>
        <tbody className="tabular">
          {lignes.map(([l, s, e]) => (
            <tr key={l} className="border-t border-rule/70">
              <td className="py-1 pr-2">{l}</td>
              <td className="py-1 text-right">{s}</td>
              <td className="py-1 text-right text-ink-3">{e ?? ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-green-soft p-3">
          <p className="text-[10px] uppercase tracking-wider text-green-deep/70">Net à payer</p>
          <p className="display font-extrabold text-xl text-green-deep tabular">{fmt(r.netSalary)} F</p>
        </div>
        <div className="rounded-xl bg-ground p-3">
          <p className="text-[10px] uppercase tracking-wider text-ink-3">Coût employeur</p>
          <p className="display font-extrabold text-xl tabular">{fmt(r.grossSalary + r.employerContributions)} F</p>
        </div>
      </div>
      <p className="mt-3 text-[10px] text-ink-3">Calculé par le moteur de paie Cabinet 360 — barème Sénégal 2026 (CGI art. 173-174, IPRES, CSS).</p>
    </div>
  );
}
