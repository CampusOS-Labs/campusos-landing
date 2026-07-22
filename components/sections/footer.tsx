"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { PRODUCTS } from "@/lib/products";

gsap.registerPlugin(ScrollTrigger);

const linkClassName = "motion-text-interactive text-lg text-white/60 hover:text-white sm:text-xl";

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

      gsap.set(words, { autoAlpha: 0, color: "#ffffff", filter: "blur(3px)", y: 8 });
      if (subheadEl) gsap.set(subheadEl, { autoAlpha: 0, filter: "blur(2px)", y: 8 });
      if (buttonEl) gsap.set(buttonEl, { autoAlpha: 0, y: 6 });

      matchMedia = gsap.matchMedia();

      matchMedia.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(words, {
          autoAlpha: 1,
          color: "#ffffff",
          filter: "blur(0px)",
          y: 0,
          clearProps: "filter",
        });
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
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 pt-12 md:grid-cols-4 md:gap-10 md:pt-16">
            <div>
              <p className="mb-2 text-lg font-bold text-white sm:text-xl">Product</p>
              <div className="flex flex-col gap-1">
                {PRODUCTS.map((item) => (
                  <Link key={item.id} href={item.href} className={linkClassName}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 text-lg font-bold text-white sm:text-xl">Company</p>
              <Link href="/blogs" className={`block ${linkClassName}`}>
                Blog
              </Link>
              <Link href="/jobs" className={`block ${linkClassName}`}>
                Jobs
                <span className="m-2 rounded-none bg-white p-0.5 text-black">
                  WE&apos;RE HIRING
                </span>
              </Link>
              <Link href="/team" className={`block ${linkClassName}`}>
                Team
              </Link>
            </div>
            <div>
              <p className="mb-2 text-lg font-bold text-white sm:text-xl">Legal</p>
              <div className="flex flex-col gap-1">
                <Link href="/privacy" className={linkClassName}>
                  Privacy
                </Link>
              </div>
            </div>
            <div>
              <p className="mb-2 text-lg font-bold text-white sm:text-xl">Follow</p>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`block ${linkClassName}`}
              >
                X
              </a>
              <a
                href="https://www.instagram.com/useBlackboard/"
                target="_blank"
                rel="noopener noreferrer"
                className={`block ${linkClassName}`}
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`block ${linkClassName}`}
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="mt-10 border-t border-white/15 md:mt-12" />
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between md:mt-20">
            <Link
              href="/"
              className="font-sans text-3xl font-bold leading-[1.15] tracking-tight text-white motion-text-interactive sm:text-4xl"
            >
              Blackboard
            </Link>
            <span className="text-base text-white/50 sm:text-lg">© 2026 Blackboard, Inc.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
