import { CaseStudy } from "@/interfaces/case-study";
import fs from "fs";
import matter from "gray-matter";
import { cache } from "react";
import { join } from "path";

const caseStudiesDirectory = join(process.cwd(), "_case-studies");

function readCaseStudyFromDisk(slug: string): CaseStudy | null {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(caseStudiesDirectory, `${realSlug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as CaseStudy;
}

export const getCaseStudyBySlug = cache((slug: string): CaseStudy | null => {
  return readCaseStudyFromDisk(slug);
});

function getCaseStudySlugs() {
  if (!fs.existsSync(caseStudiesDirectory)) {
    return [];
  }

  return fs.readdirSync(caseStudiesDirectory);
}

export const getAllCaseStudies = cache((): CaseStudy[] => {
  const slugs = getCaseStudySlugs();
  const caseStudies = slugs
    .map((slug) => getCaseStudyBySlug(slug.replace(/\.md$/, "")))
    .filter((caseStudy): caseStudy is CaseStudy => caseStudy !== null)
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  return caseStudies;
});
