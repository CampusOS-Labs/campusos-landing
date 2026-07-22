import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/home-hero";
import { createPageMetadata } from "@/lib/site";
// import { Problems } from "@/components/sections/Problems";
import { Whatwedo } from "@/components/sections/Whatwedo";
import { Support } from "@/components/sections/Support";
import { Validation } from "@/components/sections/Validation";
// import { Solutions } from "@/components/sections/Solutions";

export const metadata: Metadata = createPageMetadata({
  title: "Blackboard — school infrastructure",
  description:
    "Billy, Relay, and Shift — billing, announcements, and attendance that work in production. Less calls. Less spreadsheets. More control.",
  path: "/",
});

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center">
      <HomeHero />
      <Whatwedo />
      <Support />
      <Validation />
      {/*<Problems />
      <Solutions />*/}
      {/*<CustomerStories />*/}
    </main>
  );
}
