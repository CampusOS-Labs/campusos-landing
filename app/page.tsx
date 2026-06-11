export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center pt-32">
      <h1 className="text-6xl font-light tracking-tight text-center max-w-3xl font-heading leading-[1.05]">
        Run your school<br />
        without running on spreadsheets
      </h1>
      <p className="mt-4 text-center text-lg text-muted-foreground max-w-xl">
        Better school ops, not a whole new stack
      </p>
      <a
        href="/contact"
        className="mt-8 inline-flex h-10 items-center justify-center rounded-2xl bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
      >
        Contact us
      </a>
    </main>
  );
}
