import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/home-hero";
import { createPageMetadata } from "@/lib/site";
import { Problems } from "@/components/sections/Problems";
import { Solutions } from "@/components/sections/Solutions";

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
      <Problems />
      <Solutions />
      {/*<CustomerStories />*/}
    </main>
  );
}
