"use client";

import { Fragment, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { buttonVariants } from "@/components/ui/button";
import { PRODUCTS } from "@/lib/products";

gsap.registerPlugin(ScrollTrigger);

const linkClassName = "text-base text-white/60 transition-colors hover:text-white";

const FOOTER_HEADLINE = "Your spreadsheets are optional now";
const FOOTER_SUBHEAD =
  "Fix one broken workflow — installed, trained, and working in production.";

function HeadlineWords({ text }: { text: string }) {
  const words = text.split(" ");

  return (
    <>
      {words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          {index > 0 ? " " : null}
          <span
            data-footer-word
            className="inline-block text-white will-change-[transform,filter,opacity]"
          >
            {word}
          </span>
        </Fragment>
      ))}
    </>
  );
}

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    const headlineEl = headlineRef.current;
    if (!footer || !headlineEl) return;

    let matchMedia: gsap.MatchMedia | undefined;

    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray<HTMLElement>("[data-footer-word]", headlineEl);
      const subheadEl = subheadRef.current;
      const buttonEl = buttonRef.current;

      if (words.length === 0) return;

      gsap.set(words, { autoAlpha: 0, color: "#ffffff", filter: "blur(10px)", y: 18 });
      if (subheadEl) gsap.set(subheadEl, { autoAlpha: 0, filter: "blur(8px)", y: 12 });
      if (buttonEl) gsap.set(buttonEl, { autoAlpha: 0, y: 10 });

      matchMedia = gsap.matchMedia();

      matchMedia.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(words, { autoAlpha: 1, color: "#ffffff", filter: "blur(0px)", y: 0, clearProps: "filter" });
        if (subheadEl) {
          gsap.set(subheadEl, { autoAlpha: 1, filter: "blur(0px)", y: 0, clearProps: "filter" });
        }
        if (buttonEl) gsap.set(buttonEl, { autoAlpha: 1, y: 0 });
      });

      matchMedia.add("(prefers-reduced-motion: no-preference)", () => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: footer,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        });

        timeline.to(words, {
          autoAlpha: 1,
          color: "#ffffff",
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

        ScrollTrigger.refresh();
      });
    }, footer);

    return () => {
      matchMedia?.revert();
      ctx.revert();
    };
  }, []);

  return (
    <footer ref={footerRef} className="mt-0 bg-black py-12 text-white md:py-14">
      <div className="px-4 md:px-8">
        <div className="mx-auto max-w-275">
          <div className="border-b border-white/10 pb-12 md:pb-16">
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
              <h2
                ref={headlineRef}
                className="font-heading text-4xl font-normal leading-[1.1] tracking-[-0.03em] text-white md:text-5xl"
              >
                <HeadlineWords text={FOOTER_HEADLINE} />
              </h2>
              <p ref={subheadRef} className="mt-5 max-w-lg text-lg leading-relaxed text-white/60">
                {FOOTER_SUBHEAD}
              </p>
              <Link
                ref={buttonRef}
                href="/contact"
                className={`${buttonVariants({ variant: "inverse", size: "lg" })} mt-8`}
              >
                Contact us
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-6 pt-12 md:grid-cols-4 md:gap-10 md:pt-16">
            <div>
              <p className="mb-2 text-base font-medium text-white">Product</p>
              <div className="flex flex-col gap-1">
                {PRODUCTS.map((item) => (
                  <Link key={item.id} href={item.href} className={linkClassName}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 text-base font-medium text-white">Company</p>
              <div className="flex flex-col gap-1">
                <Link href="/blogs" className={linkClassName}>
                  Blog
                </Link>
                <Link href="/manifesto" className={linkClassName}>
                  Manifesto
                </Link>
                <Link href="/contact" className={linkClassName}>
                  Contact
                </Link>
                <Link href="/values" className={linkClassName}>
                  Values
                </Link>
                <Link href="/team" className={linkClassName}>
                  Team
                </Link>
              </div>
            </div>
            <div>
              <p className="mb-2 text-base font-medium text-white">Follow</p>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`block ${linkClassName}`}
              >
                LinkedIn
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`block ${linkClassName}`}
              >
                X (Twitter)
              </a>
              <a
                href="https://www.instagram.com/usecampusos/"
                target="_blank"
                rel="noopener noreferrer"
                className={`block ${linkClassName}`}
              >
                Instagram
              </a>
            </div>
            <div>
              <p className="mb-2 text-base font-medium text-white">Legal</p>
              <div className="flex flex-col gap-1">
                <Link href="/privacy" className={linkClassName}>
                  Privacy
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 flex items-end justify-between md:mt-20">
            <Link
              href="/"
              className="font-heading text-lg font-normal tracking-[-0.02em] text-white"
            >
              CampusOS
            </Link>
            <span className="text-sm text-white/50">© 2026 CampusOS, Inc.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
