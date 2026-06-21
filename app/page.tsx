import { HomeHero } from "@/components/sections/home-hero";
import { TheShift } from "@/components/sections/the-shift";
import { CapabilityGrid } from "@/components/sections/capability-grid";
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
      <HomeHero />
      <TheShift />
      <CapabilityGrid />
    </main>
  );
}
