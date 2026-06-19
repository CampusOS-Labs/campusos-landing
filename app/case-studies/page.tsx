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
    <main className="flex-1 flex flex-col items-center pt-32 px-6 pb-24">
      <h1 className="text-6xl font-light tracking-tight text-center max-w-3xl font-heading leading-[1.05]">
        Case Studies
      </h1>
      <p className="mt-4 text-center text-lg text-muted-foreground max-w-xl">
        Real schools fixing real workflows — one at a time.
      </p>
      <div className="mt-16 max-w-2xl w-full space-y-12">
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
