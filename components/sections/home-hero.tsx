"use client";

import { Fragment, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

import { NeumorphicButton } from "@/components/ui/NeumorphicButton";
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
  const buttonRef = useRef<HTMLDivElement>(null);

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
      className="relative flex min-h-[58dvh] w-full flex-col items-start justify-start bg-background px-4 pt-20 pb-2 sm:min-h-[60dvh] sm:px-6 sm:pt-24 sm:pb-3 md:min-h-[64dvh] md:pt-28 md:pb-4 lg:min-h-[48dvh] lg:pt-20 lg:pb-2"
    >
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-start gap-4 text-left lg:grid-cols-2 lg:gap-6">
        <div className="flex flex-col items-start lg:items-end lg:text-right">
          <h1 ref={headlineRef} className="w-fit max-w-full text-display">
            <HeadlineWords text="less calls" />
            <br />
            <HeadlineWords text="less spreadsheets" />
            <br />
            <HeadlineWords text="more control" />
          </h1>
          <div ref={buttonRef} className="mt-6 flex items-center gap-3 sm:mt-8">
            <NeumorphicButton href="/contact" blue>Contact us</NeumorphicButton>
          </div>
        </div>
        <div className="w-full max-w-[360px] justify-self-start overflow-hidden border border-border/60 bg-card lg:max-w-[340px]">
          <Image
            src="/calm-guy.jpg"
            alt="Calm person with hands on face"
            width={660}
            height={641}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </div>
      <TrustedBy className="mt-12 w-full shrink-0 sm:mt-14 md:mt-16" />
    </div>
  );
}
