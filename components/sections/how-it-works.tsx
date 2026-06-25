import { HOW_IT_WORKS_STEPS, type HowItWorksStep } from "@/lib/products";
import { cn } from "@/lib/utils";

function HowItWorksStepCard({
  step,
  index,
  total,
}: {
  step: HowItWorksStep;
  index: number;
  total: number;
}) {
  return (
    <article
      className={cn(
        "flex min-h-full flex-col p-6 md:p-8 lg:p-10",
        index < total - 1 && "border-b border-border md:border-b-0 md:border-r",
      )}
    >
      <div className="flex items-center gap-3">
        <span className="text-xs font-medium tabular-nums text-muted-foreground">{step.step}</span>
        <span className="hidden h-px flex-1 bg-border md:block" aria-hidden />
      </div>

      <h3 className="mt-4 text-h3">{step.title}</h3>
      <p className="mt-3 text-body-sm md:text-base">{step.description}</p>
    </article>
  );
}

export function HowItWorks() {
  return (
    <section className="section-band-white w-full self-stretch">
      <div className="w-full px-4 pb-10 md:px-8 md:pb-14 lg:px-12">
        <div className="mx-auto max-w-2xl pt-6 text-center md:pt-8">
          <p className="text-eyebrow">How we work</p>
          <h2 className="mt-3 text-h2 lg:text-5xl">Let us help</h2>
          <p className="mx-auto mt-4 max-w-md text-lead">
            We diagnose the gaps, tailor the setup, and launch it with your team on campus.
          </p>
        </div>

        <div className="mt-10 border border-border md:mt-14">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {HOW_IT_WORKS_STEPS.map((step, index) => (
              <HowItWorksStepCard
                key={step.step}
                step={step}
                index={index}
                total={HOW_IT_WORKS_STEPS.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
