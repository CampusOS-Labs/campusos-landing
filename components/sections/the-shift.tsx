"use client";

import { Fragment, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { GoogleSheetsIcon, WhatsAppIcon } from "@/components/sections/shift-inline-icons";

gsap.registerPlugin(ScrollTrigger);

type ShiftSegment = {
  text: string;
  icon?: "sheets" | "whatsapp";
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
  { text: "spreadsheets,", icon: "sheets" },
  { text: "WhatsApp", icon: "whatsapp" },
  { text: "groups," },
  { text: "and" },
  { text: "whoever" },
  { text: "remembered" },
  { text: "to" },
  { text: "update" },
  { text: "the" },
  { text: "register." },
];

function ShiftInlineIcon({ name }: { name: "sheets" | "whatsapp" }) {
  if (name === "sheets") {
    return <GoogleSheetsIcon />;
  }

  return <WhatsAppIcon />;
}

function ShiftWord({ segment }: { segment: ShiftSegment }) {
  const commaMatch = segment.text.match(/^(.*?)([,.!?;:]+)$/);

  if (segment.icon) {
    const label = commaMatch ? `${commaMatch[1]}${commaMatch[2]}` : segment.text;

    return (
      <span
        data-shift-word
        className="inline-flex items-center gap-[0.35em] text-muted-foreground"
      >
        <ShiftInlineIcon name={segment.icon} />
        <span>{label}</span>
      </span>
    );
  }

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
      className="section-band-white relative mt-0 w-full self-stretch overflow-hidden"
    >
      <div className="relative mx-auto max-w-4xl px-6 section-pad text-center md:px-8">
        <p className="text-eyebrow">The shift</p>
        <p
          ref={textRef}
          className="mt-8 font-heading text-4xl font-normal leading-[1.08] tracking-[-0.03em] md:text-5xl lg:text-6xl"
        >
          <ShiftWords segments={lineOneSegments} className="block" />
          <ShiftWords segments={SHIFT_LINE_TWO} className="mt-3 block" />
        </p>
      </div>
    </section>
  );
}
