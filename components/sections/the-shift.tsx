"use client";

import { Fragment, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { GrainGradient } from "@paper-design/shaders-react";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  // Halftone shader animation disabled (kept for quick re-enable).
  // const [shaderSpeed, setShaderSpeed] = useState(() =>
  //   typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  //     ? 0
  //     : 1,
  // );

  // useEffect(() => {
  //   const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  //
  //   const updateSpeed = () => {
  //     setShaderSpeed(mediaQuery.matches ? 0 : 1);
  //   };
  //   mediaQuery.addEventListener("change", updateSpeed);
  //
  //   return () => {
  //     mediaQuery.removeEventListener("change", updateSpeed);
  //   };
  // }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const text = textRef.current;
    if (!section || !container || !text) return;

    let matchMedia: gsap.MatchMedia | undefined;

    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray<HTMLElement>("[data-shift-word]", section);
      if (words.length === 0) return;

      const sectionStyles = getComputedStyle(section);
      const rootStyles = getComputedStyle(document.documentElement);
      const mutedColor =
        sectionStyles.getPropertyValue("--shift-word-muted").trim() ||
        rootStyles.getPropertyValue("--muted-foreground").trim();
      const activeColor =
        sectionStyles.getPropertyValue("--shift-word-active").trim() ||
        rootStyles.getPropertyValue("--foreground").trim();

      gsap.set(words, { autoAlpha: 0, color: mutedColor, y: 10, filter: "blur(3px)" });

      matchMedia = gsap.matchMedia();

      matchMedia.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(words, { autoAlpha: 1, color: activeColor, y: 0, filter: "blur(0px)", clearProps: "filter" });
      });

      matchMedia.add("(prefers-reduced-motion: no-preference)", () => {
        const scrollDistance = Math.max(words.length * 34, 620);
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top 74%",
            end: `+=${scrollDistance}`,
            scrub: 0.35,
            invalidateOnRefresh: true,
          },
        });

        timeline.to(words, {
          autoAlpha: 1,
          color: activeColor,
          y: 0,
          filter: "blur(0px)",
          ease: "none",
          duration: 0.6,
          stagger: 0.08,
          clearProps: "filter",
        });

        const refresh = () => ScrollTrigger.refresh();
        refresh();
        window.addEventListener("load", refresh);
        window.addEventListener("resize", refresh);

        return () => {
          window.removeEventListener("load", refresh);
          window.removeEventListener("resize", refresh);
        };
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
      className="section-band-shift-shader relative w-full self-stretch overflow-hidden"
    >
      {/* Halftone shader animation disabled (kept for quick re-enable).
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <GrainGradient
          colors={["#c6750c", "#beae60", "#d7cbc6"]}
          colorBack="#000a0f"
          softness={0.7}
          intensity={0.15}
          noise={0.5}
          shape="wave"
          speed={shaderSpeed}
          scale={1}
          rotation={0}
          offsetX={0}
          offsetY={0}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      */}
      <div
        ref={containerRef}
        className="relative z-10 mx-auto flex min-h-[70dvh] max-w-4xl flex-col items-center justify-center px-4 py-16 text-center text-white sm:min-h-[78dvh] sm:px-6 sm:py-20 md:min-h-[86dvh] md:px-8 md:py-24"
      >
      <p>
      	The shift
      </p>
        <p
          ref={textRef}
          className="mt-4 font-heading text-2xl font-normal leading-[1.12] tracking-[-0.03em] sm:mt-6 sm:text-3xl md:text-4xl lg:text-[2.75rem]"
        >
          <ShiftWords segments={lineOneSegments} className="block" />
          <ShiftWords segments={SHIFT_LINE_TWO} className="mt-3 block" />
        </p>
      </div>
    </section>
  );
}
