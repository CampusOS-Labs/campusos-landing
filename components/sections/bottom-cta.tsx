import { NeumorphicButton } from "@/components/ui/NeumorphicButton";

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
    <section
      className="mt-24 w-full self-stretch py-16 md:py-20"
      style={{ backgroundColor: "#000000" }}
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <h2 className="font-heading text-4xl font-light tracking-tight leading-[1.1] text-white md:text-5xl">
          {headline}
        </h2>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/60 md:text-base">
          {subhead}
        </p>
        <NeumorphicButton href={buttonHref} className="mt-8">
          {buttonLabel}
        </NeumorphicButton>
      </div>
    </section>
  );
}
