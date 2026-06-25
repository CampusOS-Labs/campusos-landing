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

      gsap.set(words, { autoAlpha: 0, filter: "blur(3px)", y: 8 });
      if (subheadEl) gsap.set(subheadEl, { autoAlpha: 0, filter: "blur(2px)", y: 8 });
      if (buttonEl) gsap.set(buttonEl, { autoAlpha: 0, y: 6 });

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
          duration: 0.5,
          stagger: 0.035,
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
              duration: 0.4,
              ease: "power2.out",
              clearProps: "filter",
            },
            "-=0.2",
          );
        }

        if (buttonEl) {
          timeline.to(
            buttonEl,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.32,
              ease: "power2.out",
            },
            "-=0.18",
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
      className="relative flex min-h-[calc(100dvh-3.5rem)] w-full flex-col items-center justify-between bg-background px-4 pt-16 pb-6 sm:min-h-[calc(100dvh-4rem)] sm:px-6 sm:pt-24 sm:pb-8 md:pt-32 md:pb-10"
    >
      <div className="flex w-full flex-col items-center text-center">
        <h1
          ref={headlineRef}
          className="w-fit max-w-full text-display"
        >
          <HeadlineWords text="Less spreadsheets chaos." />
          <br />
          <HeadlineWords text="Fewer follow-up calls." />
          <br />
          <span className="inline-block whitespace-nowrap">
            <HeadlineWords text="One operating system for your school." />
          </span>
        </h1>
        <p ref={subheadRef} className="mt-4 max-w-lg text-lead sm:mt-5">
         Stop wasting hours on spreadsheets, WhatsApp groups, and bloated ERP apps.
        </p>
        <div className="mt-6 flex items-center gap-3 sm:mt-8">
          <Link ref={buttonRef} href="/contact" className={buttonVariants({ size: "lg" })}>
            Contact us
          </Link>
        </div>
      </div>
      <TrustedBy className="mt-10 w-full shrink-0 sm:mt-12 md:absolute md:bottom-10 md:left-1/2 md:mt-0 md:-translate-x-1/2" />
    </div>
  );
}
