import type { Metadata } from "next";
import { DemoForm } from "@/components/DemoForm";
import { Section } from "@/components/Sections";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Demander une démo", description: "Une démonstration de 30 minutes de Cabinet 360 sur vos propres dossiers, dans votre cabinet ou en visio, puis 30 jours d'essai avec 3 dossiers migrés." };

export default function Demo() {
  return (
    <Section>
      <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 items-start">
        <div>
          <p className="eyebrow mb-3">Démonstration</p>
          <h1 className="text-4xl font-extrabold leading-tight">30 minutes, sur vos dossiers</h1>
          <p className="mt-4 text-lg text-ink-2">Dans votre cabinet ou en visio. Préparez une balance et une fiche de salarié : on importe, on sort le bilan, on fait la paie devant vous.</p>
          <ol className="mt-8 space-y-4">
            {[
              ["Démo", "30 minutes, sur votre cas. Vos questions, pas un diaporama."],
              ["Essai", "30 jours, 3 dossiers migrés par nous, formation de vos collaborateurs."],
              ["Décision", "Vous choisissez une formule — ou vous partez avec l'export complet de vos données."],
            ].map(([t, s], i) => (
              <li key={t} className="flex gap-4">
                <span className="w-8 h-8 rounded-full bg-green text-white display font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                <div><p className="font-bold">{t}</p><p className="text-ink-2 text-sm">{s}</p></div>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-sm text-ink-2">Vous préférez appeler ? <a href={SITE.telephoneLien} className="font-bold text-green">{SITE.telephone}</a></p>
        </div>
        <DemoForm />
      </div>
    </Section>
  );
}
