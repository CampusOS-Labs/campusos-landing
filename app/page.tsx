import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/home-hero";
import { TheShift } from "@/components/sections/the-shift";
import { createPageMetadata } from "@/lib/site";
import { CustomerStories } from "@/components/sections/CustomerStories";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Problems } from "@/components/sections/Problems";

export const metadata: Metadata = createPageMetadata({
  title: "Run your school without running on spreadsheets",
  description:
    "School infrastructure for every workflow — billing, announcements, and attendance that work in production.",
  path: "/",
});

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center">
      <HomeHero />
      <TheShift />
      <Problems />
      <HowItWorks />
      {/*<CapabilityGrid />*/}
      <CustomerStories />
    </main>
  );
}
