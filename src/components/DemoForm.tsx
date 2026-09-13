"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, MessageCircle } from "lucide-react";
import { lienWhatsApp } from "@/lib/site";

const VIDE = { nom: "", cabinet: "", telephone: "", email: "", dossiers: "", outil: "", message: "", site: "" };

export function DemoForm() {
  const [f, setF] = useState(VIDE);
  const [etat, setEtat] = useState<"saisie" | "envoi" | "ok" | "erreur">("saisie");
  const [erreur, setErreur] = useState("");
  const set = (k: keyof typeof VIDE, v: string) => setF({ ...f, [k]: v });

  const messageWhatsApp = () =>
    `Bonjour, je souhaite une démonstration de Cabinet 360.\nNom : ${f.nom}\nCabinet : ${f.cabinet || "—"}\nTéléphone : ${f.telephone}\nDossiers : ${f.dossiers || "—"}\nOutil actuel : ${f.outil || "—"}${f.message ? `\n${f.message}` : ""}`;

  const envoyer = async (e: React.FormEvent) => {
    e.preventDefault();
    setEtat("envoi"); setErreur("");
    try {
      const r = await fetch("/api/demo", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(f) });
      const d = await r.json();
      if (!r.ok) { setErreur(d.error || "Envoi impossible. Réessayez ou écrivez-nous sur WhatsApp."); setEtat("erreur"); return; }
      setEtat("ok");
    } catch {
      setErreur("Connexion impossible. Écrivez-nous sur WhatsApp, le message est déjà prêt."); setEtat("erreur");
    }
  };

  if (etat === "ok") {
    return (
      <div className="card p-8 text-center">
        <CheckCircle2 className="w-10 h-10 text-green mx-auto" />
        <h2 className="text-2xl font-bold mt-3">Demande reçue, merci {f.nom.split(" ")[0]}.</h2>
        <p className="text-ink-2 mt-2">Nous vous rappelons au {f.telephone} sous 24 heures ouvrées pour fixer la démonstration. Pour aller plus vite :</p>
        <a href={lienWhatsApp(messageWhatsApp())} className="btn btn-primary mt-5" rel="noopener"><MessageCircle className="w-4 h-4" /> Nous écrire sur WhatsApp</a>
      </div>
    );
  }

  const champ = "mt-1 w-full rounded-xl border border-rule bg-paper px-3.5 py-2.5 text-[15px] focus:outline-none focus:ring-2 focus:ring-green/30 focus:border-green";
  const label = "block text-sm font-semibold text-ink";

  return (
    <form onSubmit={envoyer} className="card p-6 md:p-8 grid gap-4" noValidate>
      <div className="grid sm:grid-cols-2 gap-4">
        <label className={label}>Votre nom *<input required className={champ} value={f.nom} onChange={(e) => set("nom", e.target.value)} autoComplete="name" /></label>
        <label className={label}>Cabinet<input className={champ} value={f.cabinet} onChange={(e) => set("cabinet", e.target.value)} autoComplete="organization" /></label>
        <label className={label}>Téléphone (WhatsApp) *<input required type="tel" className={champ} value={f.telephone} onChange={(e) => set("telephone", e.target.value)} placeholder="77 000 00 00" autoComplete="tel" /></label>
        <label className={label}>E-mail<input type="email" className={champ} value={f.email} onChange={(e) => set("email", e.target.value)} autoComplete="email" /></label>
        <label className={label}>Nombre de dossiers clients
          <select className={champ} value={f.dossiers} onChange={(e) => set("dossiers", e.target.value)}>
            <option value="">—</option><option>1 à 10</option><option>10 à 30</option><option>30 à 100</option><option>Plus de 100</option>
          </select>
        </label>
        <label className={label}>Outil actuel
          <select className={champ} value={f.outil} onChange={(e) => set("outil", e.target.value)}>
            <option value="">—</option><option>Excel</option><option>Sage</option><option>Ciel</option><option>Odoo</option><option>Autre logiciel</option><option>Aucun</option>
          </select>
        </label>
      </div>
      <label className={label}>Ce qui vous prend le plus de temps aujourd&apos;hui<textarea rows={3} className={champ} value={f.message} onChange={(e) => set("message", e.target.value)} /></label>
      <input type="text" name="site" tabIndex={-1} autoComplete="off" value={f.site} onChange={(e) => set("site", e.target.value)} className="hidden" aria-hidden="true" />
      {erreur && <p className="text-sm text-red-700 font-semibold">{erreur}</p>}
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
        <button type="submit" disabled={etat === "envoi" || !f.nom || !f.telephone} className="btn btn-primary justify-center disabled:opacity-60">
          {etat === "envoi" ? <Loader2 className="w-4 h-4 animate-spin" /> : null} Demander la démo
        </button>
        <a href={lienWhatsApp(messageWhatsApp())} className="btn btn-ghost justify-center" rel="noopener"><MessageCircle className="w-4 h-4" /> Ou par WhatsApp</a>
      </div>
      <p className="text-xs text-ink-3">Vos coordonnées servent uniquement à organiser la démonstration. Pas de newsletter sans votre accord.</p>
    </form>
  );
}
