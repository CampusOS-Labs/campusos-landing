import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

type BottomCtaProps = {
  headline?: string;
  subhead?: string;
  buttonLabel?: string;
  buttonHref?: string;
};

export function BottomCta({
  headline = "Your spreadsheets are optional now",
  subhead = "Fix one broken workflow — installed, trained, and working in production.",
  buttonLabel = "Contact us",
  buttonHref = "/contact",
}: BottomCtaProps) {
  return (
    <section className="mt-0 w-full self-stretch border-t border-border bg-background section-pad">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <h2 className="font-heading text-4xl font-normal leading-[1.1] tracking-[-0.03em] md:text-5xl">
          {headline}
        </h2>
        <p className="mt-5 max-w-lg text-lead">{subhead}</p>
        <Link href={buttonHref} className={`${buttonVariants({ size: "lg" })} mt-8`}>
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
