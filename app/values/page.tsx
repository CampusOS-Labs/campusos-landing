import { ContentPageShell } from "@/components/content-page-shell";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Values",
  description: "We work the best when we can rely on teammates with these values.",
  path: "/values",
});

const values = [
  {
    title: "Move Fast, Break Things",
    points: [
      "Don't just talk about it, do it.",
      "Do things that don't scale.",
      "If it slows you down, cut it.",
    ],
  },
  {
    title: "Collaboration",
    points: [
      "Ask questions.",
      "You might be wrong, then learn from it when you are.",
      "Don't break your flow state. Look at your calendar and if you think this could be a message, let them know and cancel the meeting.",
    ],
  },
  {
    title: "About our software",
    points: [
      "Schools deserve to understand what they're running and own their data.",
      "Software should fit how schools already work.",
      "We build for educators and administrators, not ERP consultants.",
    ],
  },
  {
    title: "Support",
    points: [
      "Support should always be fast.",
      "Support should be an engineer, and easy to talk to.",
    ],
  },
];

export default function ValuesPage() {
  return (
    <ContentPageShell
      label="Company"
      title="Our Values"
      description="We work the best when we can rely on teammates with these values."
    >
      <div className="mx-auto max-w-3xl space-y-0">
        {values.map((value, index) => (
          <section
            key={value.title}
            className={`border border-border p-8 md:p-10 ${index > 0 ? "border-t-0" : ""}`}
          >
            <h2 className="font-heading text-3xl font-light leading-[1.1] tracking-tight">
              {value.title}
            </h2>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
              {value.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 size-1 shrink-0 bg-foreground" />
                  {point}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </ContentPageShell>
  );
}
