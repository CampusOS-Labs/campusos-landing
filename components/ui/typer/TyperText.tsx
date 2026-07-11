"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { Typer, type TyperOptions } from "./typer";
import "./TyperText.css";

export type TyperTextStyle = CSSProperties & {
  "--typer-fg"?: string;
  "--typer-bg"?: string;
  "--typer-accent"?: string;
  "--typer-accent-ink"?: string;
  "--typer-radius"?: string;
};

type TyperTextProps = TyperOptions & {
  text: string;
  className?: string;
  style?: TyperTextStyle;
  threshold?: number;
};

export function TyperText({
  text,
  className,
  style,
  threshold = 0.4,
  fps,
  cycles,
  cycleLength,
  variations,
}: TyperTextProps) {
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const typer = new Typer(element, { fps, cycles, cycleLength, variations });
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      typer.finish();
      return () => typer.destroy();
    }

    if (!("IntersectionObserver" in window)) {
      typer.in();
      return () => typer.destroy();
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        typer.in();
        observer.disconnect();
      },
      { threshold },
    );
    observer.observe(element);

    return () => {
      observer.disconnect();
      typer.destroy();
    };
  }, [text, threshold, fps, cycles, cycleLength, variations]);

  return (
    <span data-typer-wrapper className={className} style={style}>
      <span className="sr-only">{text}</span>
      <span key={text} ref={elementRef} data-typer data-typer-type="initial" aria-hidden="true">
        {text}
      </span>
    </span>
  );
}
