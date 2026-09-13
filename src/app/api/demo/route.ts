import { NextResponse } from "next/server";

/**
 * Demande de démonstration.
 *
 * Envoie un e-mail via Resend quand RESEND_API_KEY et DEMO_TO_EMAIL sont
 * définis ; sinon la demande est journalisée côté serveur et le navigateur
 * propose l'envoi par WhatsApp (le formulaire construit le message). Aucune
 * base de données : le CRM est tenu à part.
 */
interface Demande {
  nom?: unknown; cabinet?: unknown; telephone?: unknown; email?: unknown;
  dossiers?: unknown; outil?: unknown; message?: unknown; site?: unknown;
}

const texte = (v: unknown, max = 500) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let corps: Demande;
  try { corps = await req.json(); } catch { return NextResponse.json({ error: "Corps invalide" }, { status: 400 }); }

  // Champ « site » : piège à robots, doit rester vide.
  if (texte(corps.site)) return NextResponse.json({ ok: true });

  const d = {
    nom: texte(corps.nom, 120), cabinet: texte(corps.cabinet, 120), telephone: texte(corps.telephone, 40),
    email: texte(corps.email, 120), dossiers: texte(corps.dossiers, 20), outil: texte(corps.outil, 80), message: texte(corps.message, 2000),
  };
  if (!d.nom || !d.telephone) return NextResponse.json({ error: "Nom et téléphone sont requis." }, { status: 400 });
  if (d.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) return NextResponse.json({ error: "Adresse e-mail invalide." }, { status: 400 });

  const resume = [
    `Nom : ${d.nom}`, `Cabinet : ${d.cabinet || "—"}`, `Téléphone : ${d.telephone}`, `E-mail : ${d.email || "—"}`,
    `Dossiers : ${d.dossiers || "—"}`, `Outil actuel : ${d.outil || "—"}`, `Message : ${d.message || "—"}`,
  ].join("\n");

  const cle = process.env.RESEND_API_KEY;
  const destinataire = process.env.DEMO_TO_EMAIL;
  let envoye = false;
  if (cle && destinataire) {
    try {
      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${cle}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: process.env.DEMO_FROM_EMAIL ?? "Cabinet 360 <onboarding@resend.dev>",
          to: [destinataire],
          reply_to: d.email || undefined,
          subject: `Demande de démo — ${d.nom}${d.cabinet ? ` (${d.cabinet})` : ""}`,
          text: resume,
        }),
      });
      envoye = r.ok;
      if (!r.ok) console.error("[demo] Resend", r.status, await r.text());
    } catch (e) {
      console.error("[demo] Resend", e);
    }
  }
  if (!envoye) console.log("[demo] nouvelle demande\n" + resume);

  return NextResponse.json({ ok: true, envoye });
}
