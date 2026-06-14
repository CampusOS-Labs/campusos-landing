import Link from "next/link";
import { NeumorphicButton } from "@/components/ui/NeumorphicButton";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
        404
      </p>
      <h1 className="mt-4 max-w-lg font-heading text-5xl font-light tracking-tight leading-[1.05]">
        This page doesn&apos;t exist
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground leading-relaxed">
        The link may be outdated, or the page may have moved. Head back home or
        get in touch if you need help.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <NeumorphicButton href="/">Back to home</NeumorphicButton>
        <Link
          href="/contact"
          className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          Contact us
        </Link>
      </div>
    </main>
  );
}
