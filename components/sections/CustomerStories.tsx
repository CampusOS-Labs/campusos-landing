import { NeumorphicButton } from "@/components/ui/NeumorphicButton";

const STORIES = [
  {
    title: "Building a brain for your school with Slate",
    href: "/case-studies/introducing-slate",
  },
  {
    title: "How Kidzee, Vadgaon Sheri handles their billing infra with CampusOS",
    href: "/case-studies/billing-infra",
  },
  {
    title: "What a fried chicken shop taught us about social media",
    href: "/case-studies/shaamas",
  },
  {
    title: "How Kidzee, Mundhwa handles their attendance and announcements with CampusOS",
    href: "/case-studies/attendance-announcements",
  },
] as const;

export function CustomerStories() {
  return (
    <section className="section-band-white w-full self-stretch overflow-x-clip pb-10 md:pb-14">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl pt-6 text-center md:pt-8">
          <h2 className="font-heading text-5xl font-light tracking-tight leading-[1.05]">
            Customer Stories
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lead">
            Real schools fixing real workflows, one at a time
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:mt-10 md:grid-cols-2 lg:gap-8">
          {STORIES.map((story) => (
            <article
              key={story.href}
              className="flex min-h-72 flex-col justify-between rounded-3xl border border-border/70 bg-card p-6 shadow-[0_1px_0_0_rgba(15,23,42,0.04)] md:p-8"
            >
              <h3 className="max-w-xl font-heading text-2xl font-normal leading-[1.12] tracking-[-0.03em] md:text-3xl">
                {story.title}
              </h3>
              <div className="mt-6">
                <NeumorphicButton href={story.href} compact>
                  Read more about it
                </NeumorphicButton>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
