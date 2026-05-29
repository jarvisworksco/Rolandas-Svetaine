import type { MetadataRoute } from "next";
import { siteData } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${siteData.domenas}`;
  const now = new Date();

  const staticPages = [
    { url: base, priority: 1.0 },
    { url: `${base}/paslaugos`, priority: 0.9 },
    { url: `${base}/apie-mus`, priority: 0.8 },
    { url: `${base}/galerija`, priority: 0.8 },
    { url: `${base}/kontaktai`, priority: 0.9 },
    { url: `${base}/privatumo-politika`, priority: 0.3 },
    { url: `${base}/slapuku-politika`, priority: 0.3 },
  ].map(({ url, priority }) => ({
    url,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority,
  }));

  const servicePages = siteData.paslaugos.map((p) => ({
    url: `${base}/paslaugos/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...staticPages, ...servicePages];
}
