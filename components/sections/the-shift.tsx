"use client";

import { Fragment, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ShiftSegment = {
  text: string;
};

const SHIFT_LINE_ONE = "Your school doesn't break in one place.";

const SHIFT_LINE_TWO: ShiftSegment[] = [
  { text: "It" },
  { text: "breaks" },
  { text: "in" },
  { text: "the" },
  { text: "handoffs" },
  { text: "—" },
  { text: "between" },
  { text: "spreadsheets," },
  { text: "WhatsApp" },
  { text: "groups," },
  { text: "and" },
  { text: "whoever" },
  { text: "remembered" },
  { text: "to" },
  { text: "update" },
  { text: "the" },
  { text: "register." },
];

function ShiftWord({ segment }: { segment: ShiftSegment }) {
  return (
    <span data-shift-word className="inline text-muted-foreground">
      {segment.text}
    </span>
  );
}

function ShiftWords({
  segments,
  className,
}: {
  segments: ShiftSegment[];
  className?: string;
}) {
  return (
    <span className={className}>
      {segments.map((segment, index) => (
        <Fragment key={`${segment.text}-${index}`}>
          {index > 0 ? " " : null}
          <ShiftWord segment={segment} />
        </Fragment>
      ))}
    </span>
  );
}

export function TheShift() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    if (!section || !text) return;

    let matchMedia: gsap.MatchMedia | undefined;

    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray<HTMLElement>("[data-shift-word]", section);
      if (words.length === 0) return;

      const mutedColor = getComputedStyle(document.documentElement)
        .getPropertyValue("--muted-foreground")
        .trim();
      const activeColor = getComputedStyle(document.documentElement)
        .getPropertyValue("--foreground")
        .trim();

      gsap.set(words, { autoAlpha: 0, color: mutedColor });

      matchMedia = gsap.matchMedia();

      matchMedia.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(words, { autoAlpha: 1, color: activeColor });
      });

      matchMedia.add("(prefers-reduced-motion: no-preference)", () => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: text,
            start: "top 85%",
            end: "bottom 35%",
            scrub: true,
          },
        });

        words.forEach((word) => {
          timeline.to(word, {
            autoAlpha: 1,
            color: activeColor,
            ease: "none",
            duration: 1,
          });
        });

        ScrollTrigger.refresh();
      });
    }, section);

    return () => {
      matchMedia?.revert();
      ctx.revert();
    };
  }, []);

  const lineOneSegments = SHIFT_LINE_ONE.split(" ").map((text) => ({ text }));

  return (
    <section
      ref={sectionRef}
      className="section-band-white relative mt-24 w-full self-stretch overflow-hidden md:mt-36 lg:mt-48"
    >
      <div className="relative mx-auto flex min-h-[100dvh] max-w-4xl flex-col justify-center px-6 py-20 text-center md:px-8 md:py-24">
        <p className="text-eyebrow">The shift</p>
        <p
          ref={textRef}
          className="mt-6 font-heading text-3xl font-normal leading-[1.12] tracking-[-0.03em] md:text-4xl lg:text-[2.75rem]"
        >
          <ShiftWords segments={lineOneSegments} className="block" />
          <ShiftWords segments={SHIFT_LINE_TWO} className="mt-3 block" />
        </p>
      </div>
    </section>
  );
}
