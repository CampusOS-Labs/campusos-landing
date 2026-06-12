import { CaseStudy } from "@/interfaces/case-study";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const caseStudiesDirectory = join(process.cwd(), "_case-studies");

export function getCaseStudySlugs() {
  return fs.readdirSync(caseStudiesDirectory);
}

export function getCaseStudyBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(caseStudiesDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as CaseStudy;
}

export function getAllCaseStudies(): CaseStudy[] {
  const slugs = getCaseStudySlugs();
  const caseStudies = slugs
    .map((slug) => getCaseStudyBySlug(slug))
    .sort((a, b) => (a.date > b.date ? -1 : 1));
  return caseStudies;
}
