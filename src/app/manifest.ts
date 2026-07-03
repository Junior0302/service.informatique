import type { MetadataRoute } from "next";
import { siteName } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  const manifest: MetadataRoute.Manifest = {
    name: siteName,
    short_name: siteName,
    description:
      "Service informatique de proximite : installation de postes, maintenance, assistance utilisateur, cablage reseau, Wi-Fi et interventions sur site.",
    start_url: "/fr",
    display: "standalone",
    background_color: "#f3f5f8",
    theme_color: "#082556",
    icons: [
      {
        src: "/images/favicon/10.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/images/favicon/9.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };

  return manifest;
}
