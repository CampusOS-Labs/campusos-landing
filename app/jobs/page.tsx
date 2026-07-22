import Link from "next/link";
import { JobsOpenPositions } from "@/components/sections/JobsOpenPositions";
import { createPageMetadata } from "@/lib/site";

const mono = {
  fontFamily: '"Lucida Console", Monaco, "Courier New", monospace',
} as const;

export const metadata = createPageMetadata({
  title: "Jobs — build for schools",
  description:
    "Join Blackboard. Help schools fix billing, announcements, and attendance — without another ERP.",
  path: "/jobs",
});

export default function JobsPage() {
  return (
    <main className="flex flex-1 flex-col items-center">
      <section className="relative flex min-h-[calc(100dvh-4rem)] w-full flex-col overflow-hidden bg-white px-4 pt-8 pb-8 text-black sm:min-h-[calc(100dvh-5rem)] sm:px-6 sm:pb-10 lg:px-8">
        <div className="relative mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center">
          <div className="relative z-10 flex w-full flex-col items-center text-center">
            <h1
              className="max-w-4xl text-5xl leading-[1.05] tracking-[-0.03em] text-black sm:text-6xl md:text-7xl"
              style={mono}
            >
              Build for schools
            </h1>
            <p className="mt-5 max-w-xl font-sans text-base leading-relaxed text-black/50 sm:mt-6 sm:text-lg">
              Help schools drop the spreadsheets, group-chat chaos, and ERP theater. We&apos;re
              hiring people who want school ops to finally work. If you think you&apos;re a good fit
              email{" "}
              <a
                href="mailto:amaan@poke.com"
                className="text-black underline-offset-4 hover:opacity-70"
              >
                amaan@poke.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <JobsOpenPositions />

      <section className="w-full self-stretch bg-white text-black">
        <div className="mx-auto flex w-full max-w-5xl justify-center px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
          <p className="max-w-md text-center font-sans text-base leading-relaxed text-black/50">
            Don&apos;t see a fit?{" "}
            <Link href="/contact" className="text-black underline-offset-4 hover:opacity-70">
              Write us anyway
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
