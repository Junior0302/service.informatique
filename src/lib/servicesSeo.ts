import type { Metadata } from "next";
import { absoluteUrl, businessEmail, businessPhone, siteName, siteUrl } from "@/lib/seo";

export function buildServicesMetadata({
  title,
  description,
  canonicalPath,
}: {
  title: string;
  description: string;
  canonicalPath: string;
}): Metadata {
  const canonical = absoluteUrl(canonicalPath);

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName,
      type: "website",
      images: [
        {
          url: absoluteUrl("/opengraph-image"),
          width: 1200,
          height: 630,
          alt: `${siteName} - ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/twitter-image")],
    },
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteName,
    email: businessEmail,
    telephone: businessPhone,
    url: absoluteUrl("/fr/services"),
    areaServed: ["France", "Grand Est", "Strasbourg"],
    serviceType: [
      "Installation de postes",
      "Assistance informatique",
      "Maintenance informatique",
      "Cablage reseau",
      "Wi-Fi",
      "Support utilisateurs",
    ],
  };
}

export function buildFaqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildServiceSchema({
  title,
  description,
  canonicalPath,
}: {
  title: string;
  description: string;
  canonicalPath: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description,
    provider: {
      "@type": "LocalBusiness",
      name: siteName,
      email: businessEmail,
      telephone: businessPhone,
    },
    areaServed: ["France", "Grand Est", "Strasbourg"],
    url: absoluteUrl(canonicalPath),
  };
}
