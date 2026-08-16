"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

// import { NeumorphicButton } from "@/components/ui/NeumorphicButton";
// import { TrustedBy } from "@/components/sections/trusted-by";
// import { TileField } from "@/components/sections/tile-field/engine";
import { TyperText } from "@/components/ui/typer/TyperText";

export function HomeHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  // const tileFieldHostRef = useRef<HTMLDivElement>(null);

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

  // useEffect(() => {
  //   const host = tileFieldHostRef.current;
  //   if (!host) return;
  //
  //   const tileField = new TileField(host);
  //   tileField.start();
  //
  //   const onResize = () => tileField.resize();
  //   window.addEventListener("resize", onResize);
  //
  //   return () => {
  //     window.removeEventListener("resize", onResize);
  //     tileField.destroy();
  //   };
  // }, []);

  return (
    <div
      ref={sectionRef}
      className="relative flex min-h-[calc(100dvh-4rem)] w-full flex-col overflow-hidden bg-white px-4 pt-8 pb-8 text-black sm:min-h-[calc(100dvh-5rem)] sm:px-6 sm:pb-10 lg:px-8"
    >
      {/* Centered hero stack — wave sits behind the copy like Human Delta */}
      <div className="relative mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center">
        {/* <div
          ref={tileFieldHostRef}
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 h-[min(48vh,440px)] w-screen -translate-x-1/2 -translate-y-1/2 opacity-90"
        /> */}

        <div className="relative z-10 flex w-full flex-col items-center text-center">
          <h1
            ref={headlineRef}
            className="max-w-4xl text-5xl leading-[1.05] tracking-[-0.03em] text-black sm:text-6xl md:text-7xl"
            style={{ fontFamily: '"Lucida Console", Monaco, "Courier New", monospace' }}
          >
            <span data-hero-word className="inline-block">
              Blackboard
            </span>
          </h1>

          <p
            ref={subheadRef}
            className="mt-5 max-w-xl leading-relaxed text-black/50 sm:mt-6 font-black sm:text-lg"
          >
            <TyperText
              text="Less calls. Less spreadsheets. More control."
              fps={20}
              cycles={3}
              style={{
                "--typer-fg": "rgba(0,0,0,0.55)",
                "--typer-bg": "#ffffff",
                "--typer-accent": "#b8b8b8",
                "--typer-accent-ink": "#ffffff",
              }}
            />
          </p>

          {/*<div ref={buttonRef} className="mt-8 flex items-center justify-center sm:mt-10">
            <NeumorphicButton href="/contact">Contact</NeumorphicButton>
          </div>*/}
        </div>
      </div>

      {/*<TrustedBy className="relative z-10 mt-10 w-full shrink-0" />*/}
    </div>
  );
}
