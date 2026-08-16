import { getAllPosts } from "@/lib/api";
import { PostPreview } from "@/components/blog/post-preview";
import { createPageMetadata } from "@/lib/site";

const mono = {
  fontFamily: '"Lucida Console", Monaco, "Courier New", monospace',
} as const;

export const metadata = createPageMetadata({
  title: "Blog — writing from Blackboard",
  description:
    "Thoughts on campus operations, education technology, and building better tools for schools.",
  path: "/blogs",
});

export default function Blogs() {
  const allPosts = getAllPosts();

  return (
    <main className="flex flex-1 flex-col items-center">
      <section className="w-full self-stretch bg-black text-white">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-3 px-4 py-20 text-center sm:gap-4 sm:px-6 sm:py-28 md:py-32 lg:px-8">
          <p className="text-sm font-medium tracking-wide text-white/35" style={mono}>
            Blog
          </p>
          <h1 className="max-w-2xl !font-sans text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl">
            writing from Blackboard
          </h1>
          <p className="mt-1 max-w-xl font-sans text-base leading-relaxed text-white sm:text-[1.05rem]">
            Thoughts on campus operations, education technology, and building better tools for
            schools.
          </p>
        </div>
      </section>

      <section className="w-full self-stretch bg-white text-black">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-20 px-4 py-20 text-center sm:gap-24 sm:px-6 sm:py-28 md:gap-28 md:py-32 lg:px-8">
          {allPosts.length > 0 ? (
            allPosts.map((post, index) => (
              <PostPreview
                key={post.slug}
                number={String(index + 1).padStart(2, "0")}
                title={post.title}
                date={post.date}
                excerpt={post.excerpt}
                slug={post.slug}
              />
            ))
          ) : (
            <p className="font-sans text-base text-black/50 sm:text-[1.05rem]">No posts yet. Check back soon.</p>
          )}
        </div>
      </section>
    </main>
  );
}
