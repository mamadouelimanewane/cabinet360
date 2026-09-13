import Link from "next/link";

/** Mot-symbole CABINET360 — identique à celui de l'application. */
export function Logo({ light = false, className = "" }: { light?: boolean; className?: string }) {
  return (
    <Link href="/" aria-label="Cabinet 360 — accueil" className={`display inline-flex items-baseline font-extrabold tracking-tight text-2xl ${className}`}>
      <span className={light ? "text-white" : "text-green"}>CABINET</span>
      <span className="text-orange">360</span>
    </Link>
  );
}
