import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const manifestoDirectory = join(process.cwd(), "_manifesto");

export function getManifesto() {
  const files = fs.readdirSync(manifestoDirectory);
  const mdFile = files.find((f) => f.endsWith(".md"));

  if (!mdFile) return null;

  const fullPath = join(manifestoDirectory, mdFile);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { data: data as { title: string; description: string }, content };
}
