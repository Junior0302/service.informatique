import type { MetadataRoute } from "next";
import { serviceSlugs } from "@/lib/servicesSiteContent";
import { localeUrl, type SeoLocale } from "@/lib/seo";

const locales: SeoLocale[] = ["fr", "en", "zh"];

const staticRoutes = [
  "/services",
  "/services/domaines",
  "/services/a-propos",
  "/services/faq",
  "/services/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = locales.flatMap((locale) =>
    staticRoutes.map((route) => ({
      url: localeUrl(locale, route),
      lastModified: now,
      changeFrequency: route === "/services" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "/services" ? 1 : route === "/services/contact" ? 0.9 : 0.7,
    }))
  );

  const serviceEntries = locales.flatMap((locale) =>
    serviceSlugs.map((slug) => ({
      url: localeUrl(locale, `/services/domaines/${slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }))
  );

  return [...staticEntries, ...serviceEntries];
}
