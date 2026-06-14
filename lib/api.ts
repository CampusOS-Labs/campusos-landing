import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { cache } from "react";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");

function readPostFromDisk(slug: string): Post | null {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export const getPostBySlug = cache((slug: string): Post | null => {
  return readPostFromDisk(slug);
});

export function getPostSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs.readdirSync(postsDirectory);
}

export const getAllPosts = cache((): Post[] => {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug.replace(/\.md$/, "")))
    .filter((post): post is Post => post !== null)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
});
