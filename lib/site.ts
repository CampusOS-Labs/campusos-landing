import type { Metadata } from "next";

export const SITE_NAME = "CampusOS";
export const SITE_TAGLINE = "Campus Operating System";
export const SITE_DESCRIPTION =
  "School infrastructure for every workflow — billing, announcements, and operations that stop living in spreadsheets.";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://usecampusos.vercel.app";

type PageMetadataOptions = {
  title: string;
  description?: string;
  path?: string;
};

export function createPageMetadata({
  title,
  description = SITE_DESCRIPTION,
  path = "",
}: PageMetadataOptions): Metadata {
  const url = new URL(path, SITE_URL).toString();

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title,
      description,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
