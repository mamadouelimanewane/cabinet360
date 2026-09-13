import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/fonctionnalites", "/paie", "/tarifs", "/securite", "/simulateur-paie", "/demo", "/mentions-legales"];
  return pages.map((p) => ({ url: `${SITE.url}${p}`, lastModified: new Date(), changeFrequency: "monthly", priority: p === "" ? 1 : 0.7 }));
}
