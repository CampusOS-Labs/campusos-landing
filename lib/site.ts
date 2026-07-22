import type { Metadata } from "next";

export const SITE_NAME = "Blackboard";
export const SITE_TAGLINE = "school infrastructure";
export const SITE_DESCRIPTION =
  "Billy, Relay, and Shift — billing, announcements, and attendance that work in production. Less calls. Less spreadsheets. More control.";
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
