import { NeumorphicButton } from "@/components/ui/NeumorphicButton";
import { cn } from "@/lib/utils";

const STORIES = [
  {
    title: "How Kidzee, Vadgaon Sheri handles their billing infra with CampusOS",
    href: "/case-studies/billing-infra",
    textOnLeft: false,
  },
  {
    title: "How Kidzee, Mundhwa handles their attendance and announcements with CampusOS",
    href: "/case-studies/attendance-announcements",
    textOnLeft: true,
  },
] as const;

function StoryRow({
  title,
  href,
  textOnLeft,
}: {
  title: string;
  href: string;
  textOnLeft: boolean;
}) {
  return (
    <article
      className={cn(
        "grid min-h-144 grid-cols-1 items-center",
        textOnLeft
          ? "lg:grid-cols-[1fr_1.25fr_2.5fr_1fr]"
          : "lg:grid-cols-[1fr_2.5fr_1.25fr_1fr]",
      )}
    >
      <div
        className={cn(
          "flex flex-col justify-center px-4 py-6 md:px-6 md:py-8 lg:px-8",
          textOnLeft ? "lg:col-start-2" : "lg:col-start-3",
        )}
      >
        <h3 className="max-w-xl font-heading text-2xl font-normal leading-[1.12] tracking-[-0.03em] md:text-3xl lg:text-4xl">
          {title}
        </h3>
        <div className="mt-6">
          <NeumorphicButton href={href} compact>
            Read more about it
          </NeumorphicButton>
        </div>
      </div>
    </article>
  );
}

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

        <div className="mt-8 flex flex-col gap-8 md:mt-10 md:gap-10">
          {STORIES.map((story) => (
            <StoryRow
              key={story.href}
              title={story.title}
              href={story.href}
              textOnLeft={story.textOnLeft}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
