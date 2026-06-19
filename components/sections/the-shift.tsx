import { SHIFT_STATS } from "@/lib/products";

export function TheShift() {
  return (
    <section className="mt-24 w-full max-w-5xl px-6">
      <div className="grid grid-cols-4 gap-0 border border-border">
        <div className="border-r border-border" />
        <div className="col-span-2 border-r border-border p-8">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            The shift
          </p>
          <p className="mt-6 font-heading text-3xl font-light leading-[1.15] tracking-tight md:text-4xl">
            Your school doesn&apos;t break in one place. It breaks in the handoffs — between
            spreadsheets, WhatsApp groups, and whoever remembered to update the register and excel sheets.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            CampusOS fixes one workflow at a time. Connect your tools, audit what&apos;s broken,
            and run operations that work in production — not another ERP you fight for six months.
          </p>
        </div>
        <div />
      </div>

      <div className="mt-0 grid grid-cols-3 gap-0 border border-t-0 border-border">
        {SHIFT_STATS.map((stat, index) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center justify-center border-border px-6 py-10 text-center ${
              index < SHIFT_STATS.length - 1 ? "border-r" : ""
            }`}
          >
            <span className="font-heading text-5xl font-light tracking-tight tabular-nums">
              {stat.value}
            </span>
            <span className="mt-2 max-w-[180px] text-sm text-muted-foreground">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
