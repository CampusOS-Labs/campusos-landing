import Image from "next/image";

import { IntegrationsLogoLoop } from "@/components/sections/integrations-logo-loop";
import { WhatsAppChatMock } from "@/components/whatsapp/whatsapp-chat-mock";
import { CAPABILITIES, type Capability, type CapabilityIcon } from "@/lib/products";

function CapabilityGlyph({
  icon,
  className,
}: {
  icon: CapabilityIcon;
  className?: string;
}) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (icon) {
    case "ledger":
      return (
        <svg {...common}>
          <rect x="4" y="3" width="16" height="18" />
          <line x1="8" y1="8" x2="16" y2="8" />
          <line x1="8" y1="12" x2="16" y2="12" />
          <line x1="8" y1="16" x2="13" y2="16" />
        </svg>
      );
    case "broadcast":
      return (
        <svg {...common}>
          <circle cx="12" cy="18" r="1" />
          <path d="M8.5 14.5a5 5 0 0 1 7 0" />
          <path d="M6 12a9 9 0 0 1 12 0" />
        </svg>
      );
    case "integrations":
      return (
        <svg {...common}>
          <circle cx="7" cy="12" r="3" />
          <circle cx="17" cy="12" r="3" />
          <line x1="10" y1="12" x2="14" y2="12" />
        </svg>
      );
    case "dashboard":
      return (
        <svg {...common}>
          <polyline points="3 14 8 14 10 9 13 17 15 12 21 12" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3l7 3v5c0 4-3 7-7 8-4-1-7-4-7-8V6l7-3z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      );
  }
}

function CapabilityVisual({ capability }: { capability: Capability }) {
  if (capability.visual === "whatsapp-chat") {
    return (
      <figure className="flex w-full items-center justify-center bg-muted/20 p-6 md:p-10 xl:p-12">
        <WhatsAppChatMock className="w-full max-w-[360px]" />
      </figure>
    );
  }

  if (capability.visual === "payment-stack") {
    return <IntegrationsLogoLoop />;
  }

  if (capability.imageSrc && capability.imageWidth && capability.imageHeight) {
    return (
      <figure className="flex w-full items-center justify-center bg-muted/20 p-6 md:p-10 xl:p-12">
        <Image
          src={capability.imageSrc}
          alt={capability.imageAlt ?? capability.title}
          width={capability.imageWidth}
          height={capability.imageHeight}
          className="h-auto w-full max-w-full"
          style={
            capability.imageMaxWidth
              ? { maxWidth: `min(100%, ${capability.imageMaxWidth}px)` }
              : undefined
          }
          sizes={
            capability.imageMaxWidth
              ? `${capability.imageMaxWidth}px`
              : "(max-width: 1024px) 100vw, 50vw"
          }
        />
      </figure>
    );
  }

  if (!capability.icon) return null;

  return (
    <figure className="flex w-full items-center justify-center bg-muted/20 p-6 md:p-10 xl:p-12">
      <div className="flex aspect-square w-full max-w-md items-center justify-center bg-white">
        <CapabilityGlyph icon={capability.icon} className="size-28 text-muted-foreground/70 md:size-36" />
      </div>
    </figure>
  );
}

function CapabilityRow({ capability }: { capability: Capability }) {
  return (
    <article className="grid grid-cols-1 items-center lg:grid-cols-2">
      <CapabilityVisual capability={capability} />

      <div className="flex flex-col justify-center px-6 py-10 md:px-10 lg:px-14 lg:py-16 xl:px-20 xl:py-20">
        <h3 className="font-heading text-4xl font-normal leading-[1.08] tracking-[-0.03em] md:text-5xl xl:text-6xl">
          {capability.title}
        </h3>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:max-w-none md:text-xl md:leading-relaxed">
          {capability.description}
        </p>
        {capability.imageCaption ? (
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-greige md:max-w-none md:text-base">
            {capability.imageCaption}
          </p>
        ) : null}
      </div>
    </article>
  );
}

export function CapabilityGrid() {
  return (
    <section className="section-band-white mt-0 w-full self-stretch">
      <div className="w-full px-4 pb-16 md:px-10 md:pb-28 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-4xl pt-8 text-center md:pt-12">
          <p className="text-eyebrow">Capabilities</p>
          <h2 className="mt-4 font-heading text-5xl font-normal leading-[1.05] tracking-[-0.03em] md:text-6xl">
            Not just reliable. Built for how schools work.
          </h2>
        </div>

        <div className="mt-12 flex flex-col gap-16 md:mt-20 md:gap-24">
          {CAPABILITIES.map((capability) => (
            <div key={capability.title}>
              <CapabilityRow capability={capability} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
