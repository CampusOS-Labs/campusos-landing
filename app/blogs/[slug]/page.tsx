import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { PostBody } from "@/components/blog/post-body";
import { PostMeta } from "@/components/blog/post-meta";
import { createPageMetadata } from "@/lib/site";

type Params = {
  params: Promise<{ slug: string }>;
};

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main className="flex flex-1 flex-col items-center px-4 pt-24 pb-16 sm:px-6 sm:pt-32 sm:pb-24">
      <article className="w-full max-w-3xl">
        <h1 className="font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
          {post.title}
        </h1>
        <PostMeta author={post.author} date={post.date} />
        <hr className="my-8 border-border" />
        <PostBody content={content} />
      </article>
    </main>
  );
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return createPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blogs/${post.slug}`,
  });
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
