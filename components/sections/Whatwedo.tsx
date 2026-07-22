const ITEMS = [
  {
    number: "01",
    title: "fees that actually reconcile",
    paragraphs: [
      "Cash in one place, Excel in another, partials nowhere — Blackboard is the ledger. Reminders go out, payments land, finance stops doing end-of-term archaeology.",
    ],
  },
  {
    number: "02",
    title: "notices parents actually see",
    paragraphs: [
      "Direct WhatsApp to every parent — not a group chat burial. Send once. Stop answering the same question ten times.",
    ],
  },
  {
    number: "03",
    title: "one workflow, live",
    paragraphs: [
      "Not another 200-feature ERP. We pick the thing that's breaking — billing, announcements, or attendance — install it at your school, and keep your data exportable. Add the next when the first sticks.",
    ],
  },
] as const;

export function Whatwedo() {
  return (
    <section className="w-full bg-black text-white">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-20 px-4 py-20 text-center sm:gap-24 sm:px-6 sm:py-28 md:gap-28 md:py-32 lg:px-8">
        {ITEMS.map((item) => (
          <div key={item.number} className="flex w-full max-w-2xl flex-col items-center gap-3 sm:gap-4">
            <p
              className="text-sm font-medium tracking-wide text-white/35"
              style={{ fontFamily: '"Lucida Console", Monaco, "Courier New", monospace' }}
            >
              {item.number}
            </p>
            <h2 className="font-sans text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl">
              {item.title}
            </h2>
            <div className="mt-1 flex flex-col gap-4 text-base leading-relaxed text-white sm:text-[1.05rem]">
              {item.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
