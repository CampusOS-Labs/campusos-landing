import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { TheShift } from "@/components/sections/the-shift";
import { CapabilityGrid } from "@/components/sections/capability-grid";
import { TrustedBy } from "@/components/sections/trusted-by";
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
      <div className="relative flex min-h-[calc(100dvh-4rem)] w-full flex-col items-center justify-start bg-white px-6 pt-24 pb-28 md:pt-32">
        <div className="flex w-full flex-col items-center text-center">
          <h1 className="max-w-3xl font-heading text-5xl font-normal leading-[1.05] tracking-[-0.03em] md:text-6xl">
            Run your school
            <br />
            without running on spreadsheets
          </h1>
          <p className="mt-5 max-w-lg text-lead">
            School infrastructure for billing, announcements, and attendance — built for production, not pilots.
          </p>
          <Link href="/contact" className={`${buttonVariants({ size: "lg" })} mt-8`}>
            Contact us
          </Link>
        </div>

        <TrustedBy className="absolute inset-x-0 bottom-8 mx-auto w-full shrink-0" />
      </div>

      <TheShift />
      <CapabilityGrid />

    </main>
  );
}
