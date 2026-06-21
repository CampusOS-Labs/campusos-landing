"use client";

import LogoLoop from "@/components/ui/LogoLoop";
import { PAYMENT_STACK_LOGOS } from "@/lib/payment-stack-logos";

type IntegrationsLogoLoopProps = {
  compact?: boolean;
};

export function IntegrationsLogoLoop({ compact = false }: IntegrationsLogoLoopProps) {
  return (
    <figure
      className={`flex w-full items-center justify-center bg-white ${
        compact ? "p-4 md:p-5" : "p-6 md:p-10 xl:p-12"
      }`}
    >
      <div
        className={`relative w-full overflow-hidden [&_.logoloop__item_img]:opacity-80 ${
          compact ? "h-10 max-w-5xl" : "h-16 max-w-xl md:h-20 md:max-w-2xl"
        }`}
      >
        <LogoLoop
          logos={PAYMENT_STACK_LOGOS}
          speed={60}
          direction="left"
          logoHeight={compact ? 28 : 40}
          gap={compact ? 48 : 56}
          hoverSpeed={0}
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Payment methods supported through Razorpay and UPI"
        />
      </div>
    </figure>
  );
}
