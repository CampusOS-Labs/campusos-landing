import { NeumorphicButton } from "@/components/ui/NeumorphicButton";

const headerGridClass = "grid grid-cols-4 gap-0";
const storyGridClass =
  "grid grid-cols-[1fr_2.5fr_1.25fr_1fr] gap-0";
const storyGridClassTextLeft =
  "grid grid-cols-[1fr_1.25fr_2.5fr_1fr] gap-0";

export function CustomerStories() {
  return (
    <section className="mt-24 flex w-full flex-col gap-8 self-stretch">
      <div className={headerGridClass}>
        <div />

        <div className="flex items-end justify-start p-8 pt-0">
          <h2 className="max-w-xs text-left text-5xl font-light tracking-tight font-heading leading-[1.05]">
            Customer Stories
          </h2>
        </div>

        <div className="flex items-end justify-end p-8 pt-0">
          <p className="max-w-xs text-right text-sm leading-relaxed text-muted-foreground">
            Real schools fixing real workflows, one at a time
          </p>
        </div>

        <div />
      </div>

      <div
        className={`${storyGridClass} min-h-[36rem] border border-border`}
      >
        <div className="border-r border-border" />

        <div className="border-r border-border" aria-hidden />

        <div className="flex items-center justify-center border-r border-border p-8">
          <div className="flex max-w-sm flex-col items-center gap-6 text-center">
            <h2 className="text-4xl font-light tracking-tight font-heading leading-[1.1]">
              How Kidzee, Vadgaon Sheri handles their billing infra with CampusOS
            </h2>
            <NeumorphicButton href="/case-studies/kidzee-vadgaon-sheri" compact>
              Read more about it
            </NeumorphicButton>
          </div>
        </div>
        <div />
      </div>

      <div
        className={`${storyGridClassTextLeft} min-h-[36rem] border border-border`}
      >
        <div className="border-r border-border" />

        <div className="flex items-center justify-center border-r border-border p-8">
          <div className="flex max-w-sm flex-col items-center gap-6 text-center">
            <h2 className="text-4xl font-light tracking-tight font-heading leading-[1.1]">
              How Kidzee, Mundhwa handles their attendance and announcements with CampusOS
            </h2>
            <NeumorphicButton href="/case-studies/kidzee-mundhwa" compact>
              Read more about it
            </NeumorphicButton>
          </div>
        </div>

        <div className="border-r border-border" aria-hidden />

        <div />
      </div>
    </section>
  );
}
