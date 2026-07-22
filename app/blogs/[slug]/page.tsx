import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { PostBody } from "@/components/blog/post-body";
import { PostMeta } from "@/components/blog/post-meta";
import { createPageMetadata } from "@/lib/site";

const mono = {
  fontFamily: '"Lucida Console", Monaco, "Courier New", monospace',
} as const;

type Params = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post || post.published === false) {
    notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main className="flex flex-1 flex-col items-center">
      <section className="w-full self-stretch bg-black text-white">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-3 px-4 py-20 text-center sm:gap-4 sm:px-6 sm:py-28 md:py-32 lg:px-8">
          <p className="text-sm font-medium tracking-wide text-white/35" style={mono}>
            Blog
          </p>
          <h1 className="max-w-2xl !font-sans text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl">
            {post.title}
          </h1>
          <PostMeta author={post.author} date={post.date} className="text-white/35" />
        </div>
      </section>

      <section className="w-full self-stretch bg-white text-black">
        <div className="mx-auto w-full max-w-5xl px-4 py-20 sm:px-6 sm:py-28 md:py-32 lg:px-8">
          <PostBody content={content} />
        </div>
      </section>
    </main>
  );
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post || post.published === false) {
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
