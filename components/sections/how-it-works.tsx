"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { HOW_IT_WORKS_STEPS } from "@/lib/products";

gsap.registerPlugin(ScrollTrigger);

type HowItWorksStep = (typeof HOW_IT_WORKS_STEPS)[number];

function StepSlideVisual({ step }: { step: HowItWorksStep }) {
  if (step.imageSrc) {
    return (
      <div className="relative h-full w-full overflow-hidden border border-border bg-white">
        <Image
          src={step.imageSrc}
          alt={step.title}
          fill
          className="object-cover object-top"
          sizes="(max-width: 1280px) 50vw, 640px"
        />
        <div className="absolute inset-0 ring-1 ring-inset ring-foreground/5" />
      </div>
    );
  }

  return (
    <div
      className="h-full min-h-60 w-full border border-dashed border-border bg-muted/15"
      aria-hidden
    />
  );
}

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement>(null);
  const textPanelsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    const slides = slidesRef.current;
    const textPanels = textPanelsRef.current.filter(Boolean) as HTMLDivElement[];

    if (!section || !pin || !slides || textPanels.length === 0) return;

    let matchMedia: gsap.MatchMedia | undefined;

    const ctx = gsap.context(() => {
      const getSlideHeight = () => slides.querySelector("[data-slide]")?.clientHeight ?? 760;

      matchMedia = gsap.matchMedia();

      matchMedia.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(slides, { clearProps: "transform" });
        textPanels.forEach((panel, index) => {
          gsap.set(panel, { autoAlpha: index === 0 ? 1 : 0 });
        });
        setActiveIndex(0);
      });

      matchMedia.add("(min-width: 1024px)", () => {
        const setActivePanel = (index: number) => {
          textPanels.forEach((panel, panelIndex) => {
            gsap.set(panel, { autoAlpha: panelIndex === index ? 1 : 0 });
          });
          setActiveIndex(index);
        };

        setActivePanel(0);

        const stepCount = HOW_IT_WORKS_STEPS.length;
        const stepDuration = 1 / (stepCount - 1);

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: pin,
            start: "top top+=96",
            end: () => `+=${getSlideHeight() * (stepCount - 1) + window.innerHeight * 0.35}`,
            pin: true,
            pinSpacing: true,
            scrub: true,
            snap: {
              snapTo: stepDuration,
              duration: { min: 0.15, max: 0.35 },
              delay: 0.05,
              ease: "power1.inOut",
            },
            onUpdate: (self) => {
              const index = Math.min(stepCount - 1, Math.round(self.progress * (stepCount - 1)));
              setActiveIndex(index);
            },
          },
        });

        timeline.to(
          slides,
          {
            y: () => -getSlideHeight() * (stepCount - 1),
            ease: "none",
            duration: 1,
          },
          0,
        );

        for (let index = 1; index < stepCount; index += 1) {
          const at = index * stepDuration;
          timeline.to(textPanels[index - 1], { autoAlpha: 0, duration: 0.08 }, at - 0.04);
          timeline.to(textPanels[index], { autoAlpha: 1, duration: 0.08 }, at - 0.04);
        }

        ScrollTrigger.refresh();
      });

      matchMedia.add("(max-width: 1023px)", () => {
        gsap.set(slides, { clearProps: "transform" });
        textPanels.forEach((panel) => {
          gsap.set(panel, { autoAlpha: 1, clearProps: "all" });
        });
        setActiveIndex(0);
      });
    }, section);

    return () => {
      matchMedia?.revert();
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="section-band-white mt-0 w-full self-stretch">
      <div className="grid grid-cols-4 gap-0">
        <div />
        <div className="col-span-2 flex flex-col items-center p-8 pt-0 text-center">
          <p className="text-eyebrow">How we work</p>
          <h2 className="mt-4 max-w-lg font-heading text-5xl font-normal leading-[1.05] tracking-[-0.03em]">
            Start with your pain point
          </h2>
          <p className="mt-5 max-w-md text-lead">
            Every school breaks differently. We build whatever fix hurts most right now — not a
            product you have to buy into.
          </p>
        </div>
        <div />
      </div>

      {/* Desktop: pinned sticky scroll */}
      <div ref={pinRef} className="relative mt-8 hidden border-y border-border lg:block">
        <div className="grid min-h-[min(88vh,760px)] grid-cols-2">
          <div className="overflow-hidden border-r border-border">
            <div ref={slidesRef} className="will-change-transform">
              {HOW_IT_WORKS_STEPS.map((step) => (
                <div
                  key={step.step}
                  data-slide
                  className="flex h-[min(88vh,760px)] items-stretch justify-center p-4 xl:p-6"
                >
                  <StepSlideVisual step={step} />
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-start p-8 xl:p-12">
            {HOW_IT_WORKS_STEPS.map((step, index) => (
              <div
                key={step.step}
                ref={(node) => {
                  textPanelsRef.current[index] = node;
                }}
                className="absolute inset-x-8 top-12 flex flex-col xl:inset-x-12 xl:top-16"
                aria-hidden={activeIndex !== index}
              >
                <span className="text-xs font-medium tabular-nums text-muted-foreground">
                  {step.step}
                </span>
                <h3 className="mt-3 font-heading text-4xl font-normal tracking-[-0.03em]">{step.title}</h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: stacked cards */}
      <div className="mt-8 flex flex-col gap-0 border-y border-border lg:hidden">
        {HOW_IT_WORKS_STEPS.map((step, index) => (
          <div
            key={step.step}
            className={`flex flex-col border-border p-6 ${
              index < HOW_IT_WORKS_STEPS.length - 1 ? "border-b" : ""
            }`}
          >
            <span className="text-xs font-medium tabular-nums text-muted-foreground">
              {step.step}
            </span>
            <h3 className="mt-3 font-heading text-3xl font-normal tracking-[-0.03em]">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            <div className="mt-6 min-h-60">
              <StepSlideVisual step={step} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
