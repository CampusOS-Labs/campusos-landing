import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllCaseStudies, getCaseStudyBySlug } from "@/lib/case-studies";
import markdownToHtml from "@/lib/markdownToHtml";
import { PostBody } from "@/components/blog/post-body";
import DateFormatter from "@/components/blog/date-formatter";
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
    <main className="flex-1 flex flex-col items-center pt-32 px-6">
      <article className="max-w-3xl w-full">
        <h1 className="text-5xl font-heading font-semibold tracking-tight leading-tight">
          {caseStudy.title}
        </h1>
        <div className="mt-4 text-muted-foreground">
          <DateFormatter dateString={caseStudy.date} />
        </div>
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
