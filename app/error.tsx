"use client";

import Link from "next/link";
import { useEffect } from "react";

import { buttonVariants } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-eyebrow">Something went wrong</p>
      <h1 className="mt-4 max-w-lg font-heading text-5xl font-normal leading-[1.05] tracking-[-0.03em]">
        We hit a snag
      </h1>
      <p className="mt-5 max-w-md text-lead">
        An unexpected error occurred while loading this page. Try again, or
        return home.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <button type="button" onClick={reset} className={buttonVariants({ variant: "secondary" })}>
          Try again
        </button>
        <Link href="/" className={buttonVariants()}>
          Back to home
        </Link>
      </div>
    </main>
  );
}
