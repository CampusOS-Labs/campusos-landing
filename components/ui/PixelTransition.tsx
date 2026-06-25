"use client";

import { useRef, useEffect, useState, useCallback, useEffectEvent, type ReactNode } from "react";
import { gsap } from "gsap";
import "./PixelTransition.css";

interface PixelTransitionProps {
  firstContent: ReactNode;
  secondContent: ReactNode;
  gridSize?: number;
  pixelColor?: string;
  animationStepDuration?: number;
  once?: boolean;
  autoPlay?: boolean;
  aspectRatio?: string;
  className?: string;
  style?: React.CSSProperties;
}

const EMPTY_STYLE: React.CSSProperties = {};

function PixelTransition({
  firstContent,
  secondContent,
  gridSize = 7,
  pixelColor = "currentColor",
  animationStepDuration = 0.3,
  once = false,
  autoPlay = false,
  aspectRatio = "100%",
  className = "",
  style = EMPTY_STYLE,
}: PixelTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pixelGridRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLDivElement>(null);
  const delayedCallRef = useRef<gsap.core.Tween | null>(null);
  const mountedRef = useRef(false);

  const [isActive, setIsActive] = useState(false);

  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches);

  useEffect(() => {
    const pixelGridEl = pixelGridRef.current;
    if (!pixelGridEl) return;

    pixelGridEl.innerHTML = "";

    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixelated-image-card__pixel");
        const size = 100 / gridSize;
        pixel.style.cssText = `background-color:${pixelColor};width:${size}%;height:${size}%;left:${col * size}%;top:${row * size}%;`;
        pixelGridEl.appendChild(pixel);
      }
    }
  }, [gridSize, pixelColor]);

  const animatePixels = useCallback(
    (activate: boolean) => {
      setIsActive(activate);

      const pixelGridEl = pixelGridRef.current;
      const activeEl = activeRef.current;
      if (!pixelGridEl || !activeEl) return;

      const pixels = pixelGridEl.querySelectorAll<HTMLElement>(".pixelated-image-card__pixel");
      if (!pixels.length) return;

      gsap.killTweensOf(pixels);
      if (delayedCallRef.current) {
        delayedCallRef.current.kill();
      }

      gsap.set(pixels, { display: "none" });

      const totalPixels = pixels.length;
      const staggerDuration = animationStepDuration / totalPixels;

      gsap.to(pixels, {
        display: "block",
        duration: 0,
        stagger: {
          each: staggerDuration,
          from: "random",
        },
      });

      delayedCallRef.current = gsap.delayedCall(animationStepDuration, () => {
        activeEl.style.display = activate ? "block" : "none";
        activeEl.style.pointerEvents = activate ? "none" : "";
      });

      gsap.to(pixels, {
        display: "none",
        duration: 0,
        delay: animationStepDuration,
        stagger: {
          each: staggerDuration,
          from: "random",
        },
      });
    },
    [setIsActive, animationStepDuration],
  );

  const animatePixelsEvent = useEffectEvent((activate: boolean) => {
    animatePixels(activate);
  });

  useEffect(() => {
    if (!autoPlay || mountedRef.current) return;
    mountedRef.current = true;

    const timer = requestAnimationFrame(() => {
      animatePixelsEvent(true);
    });

    return () => cancelAnimationFrame(timer);
  }, [autoPlay]);

  const handleEnter = () => {
    if (!isActive) animatePixels(true);
  };
  const handleLeave = () => {
    if (isActive && !once) animatePixels(false);
  };
  const handleClick = () => {
    if (!isActive) animatePixels(true);
    else if (isActive && !once) animatePixels(false);
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <div
      ref={containerRef}
      className={`pixelated-image-card ${className}`}
      style={style}
      onMouseEnter={!isTouchDevice ? handleEnter : undefined}
      onMouseLeave={!isTouchDevice ? handleLeave : undefined}
      onClick={isTouchDevice ? handleClick : undefined}
      onFocus={!isTouchDevice ? handleEnter : undefined}
      onBlur={!isTouchDevice ? handleLeave : undefined}
      onKeyDown={isTouchDevice ? handleKeyDown : undefined}
      role={isTouchDevice ? "button" : undefined}
      aria-pressed={isTouchDevice ? isActive : undefined}
      tabIndex={0}
    >
      <div style={{ paddingTop: aspectRatio }} />
      <div className="pixelated-image-card__default" aria-hidden={isActive}>
        {firstContent}
      </div>
      <div className="pixelated-image-card__active" ref={activeRef} aria-hidden={!isActive}>
        {secondContent}
      </div>
      <div className="pixelated-image-card__pixels" ref={pixelGridRef} />
    </div>
  );
}

export default PixelTransition;
