import Link from "next/link";

const mono = {
  fontFamily: '"Lucida Console", Monaco, "Courier New", monospace',
} as const;

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center self-stretch bg-black text-white">
      <section className="flex w-full flex-1 flex-col items-center justify-center">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-3 px-4 py-20 text-center sm:gap-4 sm:px-6 sm:py-28 md:py-32 lg:px-8">
          <p className="text-sm font-medium tracking-wide text-white/35" style={mono}>
            404
          </p>
          <h1 className="max-w-2xl !font-sans text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl">
            this page doesn&apos;t exist
          </h1>
          <p className="mt-1 max-w-xl font-sans text-base leading-relaxed text-white sm:text-[1.05rem]">
            The link may be outdated, or the page may have moved.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 font-sans text-base sm:text-[1.05rem]">
            <Link href="/" className="text-white underline-offset-4 transition-opacity hover:opacity-70">
              Back to home
            </Link>
            <Link
              href="/contact"
              className="text-white/60 underline-offset-4 transition-opacity hover:text-white hover:opacity-70"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
