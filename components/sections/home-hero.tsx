"use client";

import { useEffect, useRef } from "react";
// import Image from "next/image";
import { gsap } from "gsap";

// import { NeumorphicButton } from "@/components/ui/NeumorphicButton";
import { TrustedBy } from "@/components/sections/trusted-by";
import { TileField } from "@/components/sections/tile-field/engine";
import { TyperText } from "@/components/ui/typer/TyperText";

export function HomeHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const tileFieldHostRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const host = tileFieldHostRef.current;
    if (!host) return;

    const tileField = new TileField(host);
    tileField.start();

    const onResize = () => tileField.resize();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      tileField.destroy();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative flex min-h-[calc(100dvh-3.5rem)] w-full flex-col bg-black px-4 pt-8 pb-8 text-white sm:min-h-[calc(100dvh-4rem)] sm:px-6 sm:pb-10 lg:px-8"
    >
      <div className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-8 text-center lg:grid-cols-2 lg:gap-12">
        <div className="relative flex min-h-80 w-full min-w-0 flex-col items-center justify-center">
          <div
            ref={tileFieldHostRef}
            aria-hidden
            className="pointer-events-none relative h-40 w-full max-w-[38rem] opacity-85"
          />
          {/*<h1 ref={headlineRef} className="relative z-10 w-fit max-w-full text-display text-foreground/35"> CampusOS
          </h1>*/}
          <p ref={subheadRef} className="mt-6 max-w-2xl text-lg leading-relaxed text-white/40">
            <TyperText
              text="Less calls. Less spreadsheets. More control."
              fps={20}
              cycles={3}
              style={{
                "--typer-fg": "#ffffff",
                "--typer-bg": "#000000",
                "--typer-accent": "#ff2e5e",
                "--typer-accent-ink": "#ffffff",
              }}
            />
          </p>
          {/*<div ref={buttonRef} className="mt-6 flex items-center gap-3 sm:mt-8">
            <NeumorphicButton href="/contact">Contact us</NeumorphicButton>
          </div>*/}
        </div>
        <div aria-hidden className="hidden min-h-96 min-w-0 lg:block" />
        {/* <div className="w-full max-w-90 justify-self-start overflow-hidden bg-card lg:max-w-85">
          <Image
            src="/calm-guy.jpg"
            alt="Calm person with hands on face"
            width={660}
            height={641}
            className="h-auto w-full object-cover"
            preload
            sizes="(max-width: 1024px) 360px, 340px"
          />
        </div> */}
      </div>
      <TrustedBy className="mt-10 w-full shrink-0" />
    </div>
  );
}
