import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllStories, getStoriesBySlug } from "@/lib/stories";
import markdownToHtml from "@/lib/markdownToHtml";
import { PostBody } from "@/components/blog/post-body";
import { PostMeta } from "@/components/blog/post-meta";
import { createPageMetadata } from "@/lib/site";

type Params = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export default async function StoriesPage(props: Params) {
  const params = await props.params;
  const stories = getStoriesBySlug(params.slug);

  if (!stories || stories.published === false) {
    notFound();
  }

  const content = await markdownToHtml(stories.content || "");

  return (
    <main className="flex flex-1 flex-col items-center px-4 pt-24 pb-16 sm:px-6 sm:pt-32 sm:pb-24">
      <article className="w-full max-w-3xl">
        <h1 className="font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
          {stories.title}
        </h1>
        <PostMeta author={stories.author} date={stories.date} />
        <hr className="my-8 border-border" />
        <PostBody content={content} />
      </article>
    </main>
  );
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const stories = getStoriesBySlug(params.slug);

  if (!stories || stories.published === false) {
    notFound();
  }

  return createPageMetadata({
    title: stories.title,
    description: stories.excerpt,
    path: `/stories/${stories.slug}`,
  });
}

export async function generateStaticParams() {
  const stories = getAllStories();

  return stories.map((stories) => ({
    slug: stories.slug,
  }));
}
