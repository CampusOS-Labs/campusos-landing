import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-eyebrow">404</p>
      <h1 className="mt-4 max-w-lg font-heading text-5xl font-normal leading-[1.05] tracking-[-0.03em]">
        This page doesn&apos;t exist
      </h1>
      <p className="mt-5 max-w-md text-lead">
        The link may be outdated, or the page may have moved. Head back home or get in touch if you
        need help.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link href="/" className={buttonVariants({ size: "lg" })}>
          Back to home
        </Link>
        <Link href="/contact" className={buttonVariants({ variant: "link" })}>
          Contact us
        </Link>
      </div>
    </main>
  );
}
