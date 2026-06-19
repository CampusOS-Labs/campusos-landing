import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Values",
  description:
    "We work the best when we can rely on teammates with these values.",
  path: "/values",
});

const values = [
  {
    title: "Move Fast, Break Things",
    points: [
      "Don't just talk about it, do it.",
      "Do things that don't scale."
    ],
  },
  {
    title: "Collaboration",
    points: [
      "Ask questions.",
      "You might be wrong, then learn from it when you are.",
      "I hate meetings, so don't break your flow state. Look at your calendar and if you think this could be a slack message, let them know and cancel the meeting — Amaan.",

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
];

export default function ValuesPage() {
  return (
    <main className="flex-1 flex flex-col items-center pt-32 px-6 pb-24">
      <h1 className="text-6xl font-light tracking-tight text-center max-w-3xl font-heading leading-[1.05]">
        Our Values
      </h1>
      <p className="mt-4 text-center text-lg text-muted-foreground max-w-xl">
        We work the best when we can rely on teammates with these values.
      </p>

      <div className="mt-16 w-full max-w-3xl space-y-12">
        {values.map((value, index) => (
          <section
            key={value.title}
            className={index > 0 ? "pt-12 border-t" : undefined}
          >
            <h2 className="text-3xl font-light tracking-tight font-heading leading-[1.1]">
              {value.title}
            </h2>
            <ul className="mt-3 list-disc pl-5 space-y-1.5 text-muted-foreground leading-relaxed">
              {value.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
