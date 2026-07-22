import "server-only";

import { Stories } from "@/interfaces/stories";
import fs from "fs";
import matter from "gray-matter";
import { cache } from "react";
import { join } from "path";

const storiesDirectory = join(process.cwd(), "_stories");

function readStoriesFromDisk(slug: string): Stories | null {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(storiesDirectory, `${realSlug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Stories;
}

export const getStoriesBySlug = cache((slug: string): Stories | null => {
  return readStoriesFromDisk(slug);
});

function getStoriesSlugs() {
  if (!fs.existsSync(storiesDirectory)) {
    return [];
  }

  return fs.readdirSync(storiesDirectory);
}

export const getAllStories = cache((): Stories[] => {
  const slugs = getStoriesSlugs();
  const caseStudies = slugs
    .map((slug) => getStoriesBySlug(slug.replace(/\.md$/, "")))
    .filter((stories): stories is Stories => stories !== null)
    .filter((stories) => stories.published !== false)
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  return caseStudies;
});
