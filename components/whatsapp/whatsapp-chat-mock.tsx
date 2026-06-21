"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { cn } from "@/lib/utils";

import styles from "./whatsapp-chat-mock.module.css";

gsap.registerPlugin(ScrollTrigger);

export type WhatsAppChatMockProps = {
  className?: string;
  animate?: boolean;
  parentName?: string;
  studentName?: string;
  studentClass?: string;
  payUrl?: string;
};

function BubbleTail({ side }: { side: "in" | "out" }) {
  const className = side === "in" ? styles.tailIn : styles.tailOut;

  return (
    <svg
      className={className}
      viewBox="0 0 14 18"
      fill="currentColor"
      aria-hidden
    >
      <path d="M14 18H0C0 18 2 8 14 0V18Z" stroke="rgba(0,0,0,0.06)" strokeWidth="0.66" />
    </svg>
  );
}

function ReadChecks() {
  return (
    <svg className={styles.readChecks} viewBox="0 0 17 17" aria-hidden>
      <path
        d="M1.5 8.5L5 12l10-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 8.5L8.5 12l10-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden>
      <path d="M10 2v16M2 10h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function StickerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
      <rect x="4" y="4" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M14 14l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
      <rect x="3" y="7" width="18" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <circle cx="12" cy="13.5" r="4" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <circle cx="18" cy="10" r="1.2" fill="currentColor" />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
      <rect x="9" y="4" width="6" height="11" rx="3" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M6 12a6 6 0 0 0 12 0M12 18v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function WhatsAppChatMock({
  className,
  animate = true,
  parentName = "Anjali",
  studentName = "Aarav",
  studentClass = "Class 5B",
  payUrl = "https://pay.campusos.in/aarav",
}: WhatsAppChatMockProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animate) return;

    const root = rootRef.current;
    if (!root) return;

    const date = root.querySelector<HTMLElement>('[data-wa-part="date"]');
    const incoming = root.querySelector<HTMLElement>('[data-wa-part="incoming"]');
    const outgoing = root.querySelector<HTMLElement>('[data-wa-part="outgoing"]');
    const checks = root.querySelector<HTMLElement>('[data-wa-part="checks"]');

    if (!date || !incoming || !outgoing) return;

    let matchMedia: gsap.MatchMedia | undefined;

    const ctx = gsap.context(() => {
      matchMedia = gsap.matchMedia();

      matchMedia.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([date, incoming, outgoing, checks], { autoAlpha: 1, y: 0, scale: 1 });
      });

      matchMedia.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set([date, incoming, outgoing], { autoAlpha: 0, y: 14 });
        if (checks) gsap.set(checks, { autoAlpha: 0, scale: 0.6 });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: "top 85%",
            once: true,
          },
          defaults: { ease: "power2.out" },
        });

        timeline
          .to(date, { autoAlpha: 1, y: 0, duration: 0.35 })
          .to(incoming, { autoAlpha: 1, y: 0, duration: 0.45 }, "-=0.1")
          .to(outgoing, { autoAlpha: 1, y: 0, duration: 0.4 }, "+=0.35");

        if (checks) {
          timeline.to(checks, { autoAlpha: 1, scale: 1, duration: 0.25, ease: "back.out(2)" }, "-=0.1");
        }
      });
    }, root);

    return () => {
      matchMedia?.revert();
      ctx.revert();
    };
  }, [animate]);

  return (
    <div
      ref={rootRef}
      className={cn(styles.shell, className)}
      role="img"
      aria-label={`WhatsApp conversation: fee notice for ${studentName}, parent reply with payment confirmation`}
    >
      <div className={styles.background} aria-hidden />

      <div className={styles.chat}>
        <div className={styles.dateRow} data-wa-part="date">
          <span className={styles.datePill}>Today</span>
        </div>

        <div className={styles.messageRowIn} data-wa-part="incoming">
          <div className={styles.bubbleInRich}>
            <BubbleTail side="in" />
            <p className={styles.messageTextRich}>
              Hi {parentName}, Term 2 fees for {studentName} are now open.
            </p>
            <div className={styles.linkPreview}>
              <div className={styles.previewSwatch} aria-hidden />
              <div className={styles.previewBody}>
                <p className={styles.previewTitle}>Pay Term 2 Fees</p>
                <p className={styles.previewMeta}>
                  {studentName} · {studentClass}
                </p>
                <p className={styles.previewMeta}>pay.campusos.in</p>
              </div>
            </div>
            <a className={styles.linkUrl} href={payUrl} tabIndex={-1}>
              {payUrl}
            </a>
            <div className={cn(styles.timeRow, styles.timeRowAbsolute)}>
              <span className={styles.time}>08:21</span>
            </div>
          </div>
        </div>

        <div className={styles.messageRowOut} data-wa-part="outgoing">
          <div className={styles.bubbleOut}>
            <BubbleTail side="out" />
            <p className={styles.messageText}>Paid just now — thank you! ✅</p>
            <div className={cn(styles.timeRow, styles.timeRowAbsolute)}>
              <span className={styles.time}>08:24</span>
              <span data-wa-part="checks">
                <ReadChecks />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.inputBar} aria-hidden>
        <div className={styles.inputRow}>
          <span className={styles.iconButton}>
            <PlusIcon />
          </span>
          <div className={styles.inputField}>
            <span className="flex-1 pb-0.5 text-base leading-[21px] tracking-[-0.02em] text-transparent">
              Message
            </span>
            <StickerIcon />
          </div>
          <span className={styles.iconButton}>
            <CameraIcon />
          </span>
          <span className={styles.iconButton}>
            <MicIcon />
          </span>
        </div>
        <div className={styles.homeIndicator}>
          <span className={styles.homeIndicatorBar} />
        </div>
      </div>
    </div>
  );
}
