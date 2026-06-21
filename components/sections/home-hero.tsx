"use client";

import { Fragment, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

import { buttonVariants } from "@/components/ui/button";
import { TrustedBy } from "@/components/sections/trusted-by";

function HeadlineWords({ text }: { text: string }) {
  const words = text.split(" ");

  return (
    <>
      {words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          {index > 0 ? " " : null}
          <span data-hero-word className="inline-block will-change-[transform,filter,opacity]">
            {word}
          </span>
        </Fragment>
      ))}
    </>
  );
}

export function HomeHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const headlineEl = headlineRef.current;
    if (!section || !headlineEl) return;

    let matchMedia: gsap.MatchMedia | undefined;

    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray<HTMLElement>("[data-hero-word]", headlineEl);
      const subheadEl = subheadRef.current;
      const buttonEl = buttonRef.current;

      if (words.length === 0) return;

      gsap.set(words, { autoAlpha: 0, filter: "blur(10px)", y: 18 });
      if (subheadEl) gsap.set(subheadEl, { autoAlpha: 0, filter: "blur(8px)", y: 12 });
      if (buttonEl) gsap.set(buttonEl, { autoAlpha: 0, y: 10 });

      matchMedia = gsap.matchMedia();

      matchMedia.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(words, { autoAlpha: 1, filter: "blur(0px)", y: 0, clearProps: "filter" });
        if (subheadEl) {
          gsap.set(subheadEl, { autoAlpha: 1, filter: "blur(0px)", y: 0, clearProps: "filter" });
        }
        if (buttonEl) gsap.set(buttonEl, { autoAlpha: 1, y: 0 });
      });

      matchMedia.add("(prefers-reduced-motion: no-preference)", () => {
        const timeline = gsap.timeline({ delay: 0.12 });

        timeline.to(words, {
          autoAlpha: 1,
          filter: "blur(0px)",
          y: 0,
          duration: 0.85,
          stagger: 0.07,
          ease: "power2.out",
          clearProps: "filter",
        });

        if (subheadEl) {
          timeline.to(
            subheadEl,
            {
              autoAlpha: 1,
              filter: "blur(0px)",
              y: 0,
              duration: 0.7,
              ease: "power2.out",
              clearProps: "filter",
            },
            "-=0.35",
          );
        }

        if (buttonEl) {
          timeline.to(
            buttonEl,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.55,
              ease: "power2.out",
            },
            "-=0.4",
          );
        }
      });
    }, section);

    return () => {
      matchMedia?.revert();
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative flex min-h-[calc(100dvh-4rem)] w-full flex-col items-center justify-start bg-white px-6 pt-24 pb-40 md:pt-32 md:pb-48"
    >
      <div className="flex w-full flex-col items-center text-center">
        <h1
          ref={headlineRef}
          className="max-w-3xl font-heading text-5xl font-normal leading-[1.05] tracking-[-0.03em] md:text-6xl"
        >
          <HeadlineWords text="Run your school" />
          <br />
          <HeadlineWords text="without running on spreadsheets" />
        </h1>
        <p ref={subheadRef} className="mt-5 max-w-lg text-lead">
          Save your school, use CampusOS
        </p>
        <Link ref={buttonRef} href="/contact" className={`${buttonVariants({ size: "lg" })} mt-8`}>
          Contact us
        </Link>
      </div>

      <TrustedBy className="absolute inset-x-0 bottom-12 mx-auto w-full shrink-0 md:bottom-16" />
    </div>
  );
}
