import { NeumorphicButton } from "@/components/ui/NeumorphicButton";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Social Media",
  description:
    "Your school's story published consistently across Instagram, X, Facebook, and LinkedIn.",
  path: "/solutions/socials",
});
export default function Socials() {
  return (
    <main className="flex-1 flex flex-col items-center pt-32 px-6">
      <h1 className="text-6xl font-light tracking-tight text-center max-w-3xl font-heading leading-[1.05]">
        Social Media
      </h1>
      <p className="mt-4 text-center text-lg text-muted-foreground max-w-xl">
        {/*Manage your social media outreach, growth, and more*/}
        Your school's story published consistently.
      </p>
      <div className="mt-16 grid w-full max-w-5xl grid-cols-3 gap-4">
        <div className="aspect-[2/1] rounded-xl border bg-white flex flex-col items-center justify-center gap-1.5 px-4 text-center">
          <span className="text-4xl font-semibold font-heading">4</span>
          <span className="text-sm font-medium">Channels, one dashboard</span>
          <span className="text-xs text-muted-foreground leading-snug max-w-[220px]">
            Instagram, X, Facebook, and LinkedIn scheduled and published together.
          </span>
        </div>
        <div className="aspect-[2/1] rounded-xl border bg-white flex flex-col items-center justify-center gap-1.5 px-4 text-center">
          <span className="text-4xl font-semibold font-heading">3×</span>
          <span className="text-sm font-medium">Posting consistency</span>
          <span className="text-xs text-muted-foreground leading-snug max-w-[220px]">
            Schools on CampusOS post regularly without a dedicated marketing hire.
          </span>
        </div>
        <div className="aspect-[2/1] rounded-xl border bg-white flex flex-col items-center justify-center gap-1.5 px-4 text-center">
          <span className="text-4xl font-semibold font-heading">2.1×</span>
          <span className="text-sm font-medium">Engagement lift</span>
          <span className="text-xs text-muted-foreground leading-snug max-w-[220px]">
            Strategic timing and editing turn campus footage into stories parents share.
          </span>
        </div>
      </div>
      <div className="w-full border-t mt-24 mb-24" />
      <h2 className="text-5xl font-light tracking-tight text-center max-w-3xl font-heading leading-[1.05] mb-12">
        Outcomes for Social Media
      </h2>
      <div className="max-w-2xl space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          Your school&apos;s story deserves to be told consistently, beautifully, and without a
          dedicated marketing team. CampusOS will help you plan, create, and publish content
          across Instagram, X, Facebook, and LinkedIn from one dashboard.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          If you cannot be actively involved in this process, think of us as a service-based
          company. We&apos;ll research, ideate, plan your content, edit your footage, manage your
          socials, and post them strategically as brand scalers.
        </p>
      </div>
      <NeumorphicButton href="/contact" className="mt-12">
        Get started
      </NeumorphicButton>
    </main>
  );
}
