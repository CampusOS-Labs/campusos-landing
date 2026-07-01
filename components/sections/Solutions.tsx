"use client";

import { useState } from "react";
import Image from "next/image";

const SOLUTIONS = [
  {
    value: "billing",
    trigger: "if fee reconciliation is the problem",
    title: "Start with Billing",
    blurb: "stop calling parents, let us handle it for you, integrated into your existing system",
    imageSrc: "/placeholder.svg",
    imageAlt: "Billing placeholder image",
  },
  {
    value: "announcements",
    trigger: "if sending announcements is the problem",
    title: "Start with Announcements",
    blurb: (
      <>
        stop manually typing messages in 2026, send <strong>personalized</strong> messages in
        bulk, all through WhatsApp
      </>
    ),
    imageSrc: "/placeholder.svg",
    imageAlt: "Announcements placeholder image",
  },
  {
    value: "attendance",
    trigger: "if attendance tracking is the problem",
    title: "Start with Attendance",
    blurb: "track teachers, student and more in real time, so nothing slips through the cracks",
    imageSrc: "/placeholder.svg",
    imageAlt: "Attendance placeholder image",
  },
  {
    value: "something else",
    trigger: "if something else is the problem",
    title: "start by contacting us",
    blurb: "we're here to help, but we need to hear it from you. Reach out.",
    imageSrc: "/placeholder.svg",
    imageAlt: "contact us placeholder image",
  },
] as const;

export function Solutions() {
  const [activeSolution, setActiveSolution] = useState<(typeof SOLUTIONS)[number]["value"]>(
    SOLUTIONS[0].value,
  );
  const selected = SOLUTIONS.find((item) => item.value === activeSolution) ?? SOLUTIONS[0];

  return (
    <section className="section-band-white w-full self-stretch">
      <div className="mx-auto grid min-h-[calc(100dvh-3.5rem)] w-full max-w-6xl grid-cols-1 content-center gap-10 px-4 py-12 sm:min-h-[calc(100dvh-4rem)] md:px-8 md:py-16 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-12">
        <div className="space-y-8">
          <div>
            <p className="text-eyebrow">The solution</p>
            <h2 className="mt-3 text-h2">solutions built for your school</h2>
          </div>

          <div className="grid gap-2">
            {SOLUTIONS.map((item) => {
              const isActive = item.value === activeSolution;
              return (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => setActiveSolution(item.value)}
                  className={`hover:cursor-pointer justify-start border p-4 text-left shadow-[0_1px_0_0_rgba(15,23,42,0.04)] transition-colors ${
                    isActive
                      ? "border-foreground bg-foreground text-background shadow-[0_10px_30px_-18px_rgba(0,0,0,0.45)]"
                      : "border-border/70 bg-card text-foreground"
                  }`}
                >
                  <p className="text-sm leading-relaxed text-inherit">{item.trigger}</p>
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative min-h-105 overflow-hidden bg-card p-6 md:min-h-115 md:p-8">
          <p className="text-eyebrow">{selected.title}</p>
          <p className="mt-3 text-lg leading-relaxed">{selected.blurb}</p>
          <div className="mt-6 flex h-full items-center justify-center">
            <Image
              src={selected.imageSrc}
              alt={selected.imageAlt}
              width={640}
              height={640}
              className="h-120 w-auto max-w-full object-contain object-center md:h-136"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
