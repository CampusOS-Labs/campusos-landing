import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { PostBody } from "@/components/blog/post-body";
import DateFormatter from "@/components/blog/date-formatter";

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
    <main className="flex-1 flex flex-col items-center pt-32 px-6">
      <article className="max-w-3xl w-full">
        <h1 className="text-5xl font-heading font-semibold tracking-tight leading-tight">
          {post.title}
        </h1>
        <div className="mt-4 text-muted-foreground">
          <DateFormatter dateString={post.date} />
        </div>
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

  return {
    title: `${post.title} | CampusOS Blog`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
