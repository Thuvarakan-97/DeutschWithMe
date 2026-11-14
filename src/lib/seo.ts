import type { Metadata } from "next";

const explicitSiteAddress = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const vercelProductionAddress =
  process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
const configuredSiteAddress =
  explicitSiteAddress ||
  (vercelProductionAddress
    ? `https://${vercelProductionAddress}`
    : undefined);

export const siteUrl = configuredSiteAddress
  ? new URL(configuredSiteAddress)
  : undefined;

export const metadataBase =
  siteUrl ?? new URL("https://example.invalid");

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  noIndex = false,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: siteUrl ? { canonical: new URL(path, siteUrl) } : undefined,
    robots: noIndex ? { index: false, follow: true } : undefined,
    openGraph: {
      title,
      description,
      siteName: "DeutschWithMe",
      locale: "en_GB",
      type: "website",
      url: siteUrl ? new URL(path, siteUrl) : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
