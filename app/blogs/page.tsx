import { getAllPosts } from "@/lib/api";
import { PostPreview } from "@/components/blog/post-preview";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Blog",
  description:
    "Thoughts on campus operations, education technology, and building better tools for schools.",
  path: "/blogs",
});
export default function Blogs() {
  const allPosts = getAllPosts();

  return (
    <main className="flex-1 flex flex-col items-center pt-32 px-6 pb-24">
      <h1 className="text-6xl font-light tracking-tight text-center max-w-3xl font-heading leading-[1.05]">
        Blog
      </h1>
      <p className="mt-4 text-center text-lg text-muted-foreground max-w-xl">
        Thoughts on campus operations, education technology, and building better
        tools for schools.
      </p>
      <div className="mt-16 max-w-2xl w-full space-y-12">
        {allPosts.length > 0 ? (
          allPosts.map((post) => (
            <PostPreview
              key={post.slug}
              title={post.title}
              date={post.date}
              excerpt={post.excerpt}
              slug={post.slug}
            />
          ))
        ) : (
          <p className="text-muted-foreground text-center">
            No posts yet. Check back soon.
          </p>
        )}
      </div>
    </main>
  );
}
