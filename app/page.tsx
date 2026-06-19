import { NeumorphicButton } from "@/components/ui/NeumorphicButton";
import { CapabilityGrid } from "@/components/sections/capability-grid";
import { CustomerStories } from "@/components/sections/CustomerStories";
import { HowItWorks } from "@/components/sections/how-it-works";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { TheShift } from "@/components/sections/the-shift";
import { TrustedBy } from "@/components/sections/trusted-by";
import { WallOfLove } from "@/components/sections/wall-of-love";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Run your school without running on spreadsheets",
  description:
    "School infrastructure for every workflow — billing, announcements, and attendance that work in production.",
  path: "/",
});

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center">
      <div className="relative flex min-h-[calc(100dvh-4rem)] w-full flex-col items-center justify-center px-6 pb-28">
        <div className="flex w-full flex-col items-center text-center">
          <h1 className="max-w-3xl font-heading text-6xl font-light leading-[1.05] tracking-tight">
            Run your school
            <br />
            without running on spreadsheets
          </h1>
          <p className="mt-4 max-w-lg text-lg text-muted-foreground">
           Save your school, use CampusOS
          </p>
          <NeumorphicButton href="/contact" className="mt-8">
            Contact us
          </NeumorphicButton>
        </div>

        <TrustedBy className="absolute inset-x-0 bottom-8 mx-auto w-full shrink-0" />
      </div>

      <TheShift />
      <HowItWorks />
      <ProductShowcase />
      <CapabilityGrid />
      <WallOfLove />
      <CustomerStories />
    </main>
  );
}
