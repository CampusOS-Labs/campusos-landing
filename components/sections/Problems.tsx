"use client";

export function Problems() {
  const painPoints = [
    "Spreadsheets for fee follow-ups",
    "WhatsApp chaos for parent communication",
    "Scattered admin tools with no single source of truth",
  ];

  return (
    <section className="section-band-white mt-20 w-full self-stretch md:mt-28 lg:mt-36">
      <div className="mx-auto grid min-h-[70vh] w-full max-w-6xl grid-cols-1 gap-10 px-4 py-16 md:min-h-[76vh] md:px-8 md:py-20 lg:grid-cols-2 lg:gap-14 lg:px-12 lg:py-24">
        <div className="space-y-8">
          <div>
            <p className="text-eyebrow">The problem</p>
            <h2 className="mt-3 text-h2 md:text-4xl">Say goodbye to your school&apos;s messy ops stack</h2>
            <p className="mt-4 max-w-xl text-body md:text-lg">
              If your team is still juggling chats, sheets, and disconnected tools, important work slips
              through every day.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {painPoints.map((point) => (
              <article
                key={point}
                className="rounded-2xl border border-border/70 bg-card p-4 shadow-[0_1px_0_0_rgba(15,23,42,0.04)]"
              >
                <p className="text-body-sm text-foreground">{point}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-black p-6 md:p-8">
          <div className="space-y-4">
            <div className="rounded-xl border border-white/15 bg-white/5 p-4">
              <p className="text-body-sm text-white/70">Fees Follow-up</p>
              <p className="mt-1 text-sm text-white">12 reminders pending in 4 different sheets</p>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 p-4">
              <p className="text-body-sm text-white/70">Parent Comms</p>
              <p className="mt-1 text-sm text-white">7 unread WhatsApp groups across teams</p>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 p-4">
              <p className="text-body-sm text-white/70">Daily Reports</p>
              <p className="mt-1 text-sm text-white">Manual exports from 3 tools before 6pm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
