import type { Metadata } from "next";
import { SimulateurPaie } from "@/components/SimulateurPaie";
import { Section } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Simulateur de paie Sénégal 2026 (gratuit)",
  description: "Calculez un bulletin de paie sénégalais : IPRES, CSS, IR selon les parts, TRIMF, CFCE, net à payer et coût employeur. Gratuit, barème 2026, même moteur que Cabinet 360.",
};

export default function PageSimulateur() {
  return (
    <Section>
      <div className="max-w-2xl mb-10">
        <p className="eyebrow mb-3">Outil gratuit</p>
        <h1 className="text-4xl font-extrabold leading-tight">Simulateur de paie Sénégal 2026</h1>
        <p className="mt-4 text-lg text-ink-2">Du salaire de base au net à payer : IPRES, CSS, impôt sur le revenu selon les parts (femme mariée comprise), TRIMF, CFCE et coût employeur. Le même moteur que dans Cabinet 360.</p>
      </div>
      <SimulateurPaie />
    </Section>
  );
}
