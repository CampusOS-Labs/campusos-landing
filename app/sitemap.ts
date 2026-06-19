import type { MetadataRoute } from "next";

import { getAllPosts } from "@/lib/api";
import { getAllCaseStudies } from "@/lib/case-studies";
import { PERSONAS, PRODUCTS } from "@/lib/products";
import { SITE_URL } from "@/lib/site";

const staticRoutes = [
  "",
  "/blogs",
  "/case-studies",
  "/contact",
  "/manifesto",
  "/privacy",
  "/values",
  "/team",
  ...PRODUCTS.map((p) => p.href),
  ...PERSONAS.map((p) => p.href),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = staticRoutes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
  }));

  const blogEntries = getAllPosts().map((post) => ({
    url: `${SITE_URL}/blogs/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  const caseStudyEntries = getAllCaseStudies().map((caseStudy) => ({
    url: `${SITE_URL}/case-studies/${caseStudy.slug}`,
    lastModified: new Date(caseStudy.date),
  }));

  return [...staticEntries, ...blogEntries, ...caseStudyEntries];
}
