"use client";

import { useEffect } from "react";
import { NeumorphicButton } from "@/components/ui/NeumorphicButton";

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
      <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
        Something went wrong
      </p>
      <h1 className="mt-4 max-w-lg font-heading text-5xl font-light tracking-tight leading-[1.05]">
        We hit a snag
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground leading-relaxed">
        An unexpected error occurred while loading this page. Try again, or
        return home.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <button
          type="button"
          onClick={reset}
          className="rounded-2xl border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
        >
          Try again
        </button>
        <NeumorphicButton href="/">Back to home</NeumorphicButton>
      </div>
    </main>
  );
}
