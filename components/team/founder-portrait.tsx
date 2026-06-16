"use client";

import { ImageDithering } from "@paper-design/shaders-react";

type FounderPortraitProps = {
  src: string;
  alt: string;
  className?: string;
};

export function FounderPortrait({ src, alt, className }: FounderPortraitProps) {
  return (
    <div
      className={className}
      role="img"
      aria-label={alt}
    >
      <ImageDithering
        image={src}
        fit="cover"
        type="8x8"
        size={1}
        colorSteps={4}
        originalColors
        inverted={false}
        colorFront="#141414"
        colorBack="#f5f5f5"
        colorHighlight="#141414"
        scale={1.55}
        offsetX={-0.1}
        offsetY={-0.06}
        speed={0}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
