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
  "/products",
  "/privacy",
  "/values",
  "/team",
  ...PRODUCTS.map((p) => p.href),
  ...PERSONAS.map((p) => p.href),
];

const absoluteUrl = (path: string) => new URL(path, SITE_URL).toString();

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = staticRoutes.map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
  }));

  const blogEntries = getAllPosts().map((post) => ({
    url: absoluteUrl(`/blogs/${post.slug}`),
    lastModified: new Date(post.date),
  }));

  const caseStudyEntries = getAllCaseStudies().map((caseStudy) => ({
    url: absoluteUrl(`/case-studies/${caseStudy.slug}`),
    lastModified: new Date(caseStudy.date),
  }));

  return [...staticEntries, ...blogEntries, ...caseStudyEntries];
}
