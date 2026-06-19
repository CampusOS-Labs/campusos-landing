import { HOW_IT_WORKS_STEPS } from "@/lib/products";
import { MockUiFrame } from "@/components/ui/mock-ui-frame";

export function HowItWorks() {
  return (
    <section className="mt-24 w-full self-stretch">
      <div className="grid grid-cols-4 gap-0">
        <div />
        <div className="col-span-2 flex flex-col items-center p-8 pt-0 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            How it works
          </p>
          <h2 className="mt-4 max-w-lg font-heading text-5xl font-light tracking-tight leading-[1.05]">
            Three steps to production-ready ops
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Same foundation underneath billing, announcements, and parent communication.
          </p>
        </div>
        <div />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-0 border-y border-border md:grid-cols-3">
        {HOW_IT_WORKS_STEPS.map((step, index) => (
          <div
            key={step.step}
            className={`flex flex-col border-border p-6 md:p-8 ${
              index < HOW_IT_WORKS_STEPS.length - 1 ? "md:border-r" : ""
            } ${index > 0 ? "border-t md:border-t-0" : ""}`}
          >
            <span className="text-xs font-medium tabular-nums text-muted-foreground">
              {step.step}
            </span>
            <h3 className="mt-3 font-heading text-3xl font-light tracking-tight">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            <div className="mt-6 flex-1">
              <MockUiFrame variant={step.mockVariant} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
