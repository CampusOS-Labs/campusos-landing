import { CaseStudyPreview } from "@/components/case-studies/case-study-preview";
import { getAllCaseStudies } from "@/lib/case-studies";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Case Studies",
  description: "Real schools fixing real workflows — one at a time.",
  path: "/case-studies",
});
export default function CaseStudies() {
  const allCaseStudies = getAllCaseStudies();

  return (
    <main className="flex flex-1 flex-col items-center px-4 pt-24 pb-16 sm:px-6 sm:pt-32 sm:pb-24">
      <h1 className="max-w-3xl text-center font-heading text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
        Case Studies
      </h1>
      <p className="mt-4 max-w-xl text-center text-base text-muted-foreground sm:text-lg">
        Real schools fixing real workflows — one at a time.
      </p>
      <div className="mt-10 w-full max-w-2xl space-y-12 sm:mt-16">
        {allCaseStudies.length > 0 ? (
          allCaseStudies.map((caseStudy) => (
            <CaseStudyPreview
              key={caseStudy.slug}
              title={caseStudy.title}
              date={caseStudy.date}
              excerpt={caseStudy.excerpt}
              slug={caseStudy.slug}
            />
          ))
        ) : (
          <p className="text-muted-foreground text-center">
            No case studies yet. Check back soon.
          </p>
        )}
      </div>
    </main>
  );
}
