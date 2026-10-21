import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

/** Builds a Metadata object following "[Page topic] in [City], [State] | [Practice Name]". */
export function pageMetadata(topic: string, description: string, path = ""): Metadata {
  const title = `${topic} in ${siteConfig.address.city}, ${siteConfig.address.state} | ${siteConfig.practiceName}`;
  const url = `${siteConfig.siteUrl}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.practiceName,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
