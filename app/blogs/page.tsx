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
    <main className="flex flex-1 flex-col items-center px-4 pt-24 pb-16 sm:px-6 sm:pt-32 sm:pb-24">
      <h1 className="max-w-3xl text-center text-display">
        Blog
      </h1>
      <p className="mt-4 max-w-xl text-center text-lead">
        Thoughts on campus operations, education technology, and building better
        tools for schools.
      </p>
      <div className="mt-10 w-full max-w-2xl space-y-12 sm:mt-16">
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
