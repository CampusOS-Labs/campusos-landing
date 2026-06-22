import Image from "next/image";

import { IntegrationsLogoLoop } from "@/components/sections/integrations-logo-loop";
import { cn } from "@/lib/utils";
import { CAPABILITIES, type Capability, type CapabilityComparisonImage } from "@/lib/products";

function WhatsAppComparisonVisual({ images }: { images: CapabilityComparisonImage[] }) {
  const [group, direct] = images;
  const phoneWidth =
    "w-[min(78vw,720px)] sm:w-[min(70vw,820px)] lg:w-[340px] xl:w-[380px] 2xl:w-[420px]";

  return (
    <figure className="flex w-full items-center justify-center overflow-visible px-0 py-4 sm:py-6 md:py-8 lg:items-end lg:justify-start lg:py-6 xl:py-8">
      <div className="flex items-end justify-center lg:justify-start">
        {group ? (
          <div
            className={cn(
              "relative z-10 shrink-0 origin-bottom -rotate-6 sm:-rotate-8",
              phoneWidth,
            )}
          >
            <Image
              src={group.src}
              alt={group.alt}
              width={1920}
              height={2160}
              className="h-auto w-full object-contain drop-shadow-sm"
              sizes="(max-width: 1024px) 78vw, 420px"
              priority
            />
          </div>
        ) : null}
        {direct ? (
          <div
            className={cn(
              "relative z-20 shrink-0 origin-bottom rotate-6 sm:rotate-8",
              "-ml-[48vw] sm:-ml-[44vw] lg:-ml-[220px] xl:-ml-[250px] 2xl:-ml-[280px]",
              phoneWidth,
            )}
          >
            <Image
              src={direct.src}
              alt={direct.alt}
              width={1920}
              height={2160}
              className="h-auto w-full object-contain drop-shadow-sm"
              sizes="(max-width: 1024px) 78vw, 420px"
              priority
            />
          </div>
        ) : null}
      </div>
      <figcaption className="sr-only">
        Side-by-side WhatsApp comparison: a cluttered school group chat versus a direct fee payment
        message from the school.
      </figcaption>
    </figure>
  );
}

function CapabilityImage({ capability }: { capability: Capability }) {
  if (!capability.imageSrc) return null;

  return (
    <figure className="flex w-full items-center justify-center bg-white p-4 md:p-5">
      <Image
        src={capability.imageSrc}
        alt={capability.imageAlt ?? capability.title}
        width={1920}
        height={2160}
        className="h-auto w-full object-contain"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </figure>
  );
}

function CapabilityPlaceholder({ title }: { title: string }) {
  return (
    <figure className="flex w-full items-center justify-center bg-white p-4 md:p-5">
      <div
        aria-hidden
        className="flex aspect-4/3 w-full max-w-md items-center justify-center border border-dashed border-border/80 bg-white"
      >
        <span className="px-4 text-center text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
          {title}
        </span>
      </div>
    </figure>
  );
}

function CapabilityVisual({ capability }: { capability: Capability }) {
  if (capability.visual === "payment-stack") {
    return <IntegrationsLogoLoop compact />;
  }

  if (capability.visual === "whatsapp-comparison" && capability.comparisonImages) {
    return <WhatsAppComparisonVisual images={capability.comparisonImages} />;
  }

  if (capability.imageSrc) {
    return <CapabilityImage capability={capability} />;
  }

  return <CapabilityPlaceholder title={capability.title} />;
}

function CapabilityCopy({ capability }: { capability: Capability }) {
  return (
    <>
      <h3 className="text-h3">
        {capability.title}
      </h3>
      <p className="mt-3 max-w-xl text-body md:text-lg">
        {capability.description}
      </p>
      {capability.imageCaption ? (
        <p className="mt-3 max-w-xl text-body-sm text-greige">
          {capability.imageCaption}
        </p>
      ) : null}
    </>
  );
}

function CapabilityRow({
  capability,
  visualOnLeft,
}: {
  capability: Capability;
  visualOnLeft: boolean;
}) {
  return (
    <article className="grid grid-cols-1 items-center overflow-visible lg:grid-cols-2">
      <div className={cn(!visualOnLeft && "lg:order-2")}>
        <CapabilityVisual capability={capability} />
      </div>

      <div
        className={cn(
          "flex flex-col justify-center px-4 py-6 md:px-6 md:py-8 lg:px-8",
          !visualOnLeft && "lg:order-1",
        )}
      >
        <CapabilityCopy capability={capability} />
      </div>
    </article>
  );
}

export function CapabilityGrid() {
  return (
    <section className="section-band-white mt-16 w-full self-stretch overflow-x-clip md:mt-36 lg:mt-48">
      <div className="w-full px-4 pb-10 md:px-8 md:pb-14 lg:px-12">
        <div className="mx-auto max-w-2xl pt-6 text-center md:pt-8">
          <p className="text-eyebrow">Capabilities</p>
          <h2 className="mt-3 text-h2 md:text-4xl">
            Not just faster. Built for how schools work.
          </h2>
        </div>

        <div className="mt-8 flex flex-col gap-8 md:mt-10 md:gap-10">
          {CAPABILITIES.map((capability, index) => (
            <div key={capability.title}>
              <CapabilityRow capability={capability} visualOnLeft={index % 2 === 0} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
