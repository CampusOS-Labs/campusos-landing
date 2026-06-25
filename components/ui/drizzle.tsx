"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type DrizzleProps = {
  /** Rendered canvas size in CSS pixels. */
  size?: number;
  className?: string;
  /** Accessible label; omit to render purely decorative. */
  label?: string;
};

/**
 * Pixel "drizzle" loader — a small grid of pixels that pulse in a diagonal
 * wave. Drawn in `currentColor`, so it inherits text color (black on light
 * surfaces, white on dark, white inside the primary button).
 *
 * Adapted from the whimsically.app "drizzle" loader; the metrics are scaled to
 * the canvas size so it reads well both inline (buttons) and at full size.
 */
export function Drizzle({ size = 56, className, label }: DrizzleProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 2;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    // Resolve `currentColor` to an rgb triple so we can animate the alpha.
    const computed = getComputedStyle(canvas).color.match(/\d+(\.\d+)?/g);
    const [r, g, b] = computed ? computed.map(Number) : [255, 255, 255];

    const grid = size >= 32 ? 5 : 3;
    const gap = size / (grid + 1);
    const px = Math.max(1, Math.round(size / 32));
    const center = size / 2;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    const start = performance.now();

    const draw = (a: number) => {
      ctx.clearRect(0, 0, size, size);
      for (let row = 0; row < grid; row++) {
        for (let col = 0; col < grid; col++) {
          const ox = (row - (grid - 1) / 2) * gap;
          const oy = (col - (grid - 1) / 2) * gap;
          const wave = Math.max(0, Math.sin(0.003 * a - 0.55 * row - 0.3 * col));
          const alpha = 0.08 + 0.78 * Math.pow(wave, 1.5);
          ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
          ctx.fillRect(Math.round(center + ox), Math.round(center + oy), px, px);
        }
      }
    };

    if (reduceMotion) {
      // Static dotted glyph — no animation for reduced-motion users.
      draw(0);
      return;
    }

    const loop = () => {
      draw(performance.now() - start);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(raf);
  }, [size]);

  return (
    <canvas
      ref={canvasRef}
      role={label ? "status" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={cn("inline-block", className)}
      style={{ width: size, height: size, imageRendering: "pixelated" }}
    />
  );
}
