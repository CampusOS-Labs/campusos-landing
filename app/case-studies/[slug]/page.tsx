import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllCaseStudies, getCaseStudyBySlug } from "@/lib/case-studies";
import markdownToHtml from "@/lib/markdownToHtml";
import { PostBody } from "@/components/blog/post-body";
import { PostMeta } from "@/components/blog/post-meta";
import { createPageMetadata } from "@/lib/site";

type Params = {
  params: Promise<{ slug: string }>;
};

export default async function CaseStudyPage(props: Params) {
  const params = await props.params;
  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    notFound();
  }

  const content = await markdownToHtml(caseStudy.content || "");

  return (
    <main className="flex flex-1 flex-col items-center px-4 pt-24 pb-16 sm:px-6 sm:pt-32 sm:pb-24">
      <article className="w-full max-w-3xl">
        <h1 className="font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
          {caseStudy.title}
        </h1>
        <PostMeta author={caseStudy.author} date={caseStudy.date} />
        <hr className="my-8 border-border" />
        <PostBody content={content} />
      </article>
    </main>
  );
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    notFound();
  }

  return createPageMetadata({
    title: caseStudy.title,
    description: caseStudy.excerpt,
    path: `/case-studies/${caseStudy.slug}`,
  });
}

export async function generateStaticParams() {
  const caseStudies = getAllCaseStudies();

  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}
