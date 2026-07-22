const ITEMS = [
  {
    number: "04",
    title: "plug it into your school in 15 minutes.",
  },
  {
    number: "05",
    title: "we audit your school for free, to find the gaps.",
  },
  {
    number: "06",
    title: "if you're not able to adopt within a week, 100% money back.",
  },
] as const;

export function Support() {
  return (
    <section className="flex min-h-[70vh] w-full flex-col justify-center self-stretch bg-white text-black">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-20 px-4 py-20 text-center sm:gap-24 sm:px-6 sm:py-28 md:gap-28 md:py-32 lg:px-8">
        {ITEMS.map((item) => (
          <div
            key={item.number}
            className="flex w-full max-w-2xl flex-col items-center gap-3 sm:gap-4"
          >
            <p
              className="text-sm font-medium tracking-wide text-black/35"
              style={{
                fontFamily: '"Lucida Console", Monaco, "Courier New", monospace',
              }}
            >
              {item.number}
            </p>
            <h2 className="font-sans text-3xl font-bold leading-[1.15] tracking-tight text-black sm:text-4xl">
              {item.title}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}
