"use client";

import Image from "next/image";
import { ImageDithering } from "@paper-design/shaders-react";

type FounderPortraitProps = {
  src: string;
  alt: string;
  className?: string;
};

export function FounderPortrait({ src, alt, className }: FounderPortraitProps) {
  return (
    <div className={className}>
      <Image src={src} alt={alt} width={1} height={1} unoptimized className="sr-only" />
      <div aria-hidden>
        <ImageDithering
          image={src}
          fit="cover"
          type="8x8"
          size={1}
          colorSteps={4}
          originalColors
          inverted={false}
          colorFront="#000000"
          colorBack="#111111"
          colorHighlight="#000000"
          scale={1.55}
          offsetX={-0.1}
          offsetY={-0.06}
          speed={0}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}
