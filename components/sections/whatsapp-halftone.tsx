"use client";

import Image from "next/image";
import { HalftoneDots } from "@paper-design/shaders-react";

const WHATSAPP_MARK = "/logos/brands/whatsapp-mark.svg";

type WhatsAppHalftoneProps = {
  className?: string;
};

export function WhatsAppHalftone({ className }: WhatsAppHalftoneProps) {
  return (
    <div className={className}>
      <Image src={WHATSAPP_MARK} alt="WhatsApp" width={1} height={1} className="sr-only" />
      <div aria-hidden>
        <HalftoneDots
          image={WHATSAPP_MARK}
          fit="cover"
          type="gooey"
          grid="hex"
          colorBack="#f2f1e8"
          colorFront="#2b2b2b"
          originalColors={false}
          inverted={false}
          size={0.5}
          radius={1.25}
          contrast={0.4}
          grainMixer={0.2}
          grainOverlay={0.2}
          grainSize={0.5}
          scale={1.0}
          speed={0}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}
