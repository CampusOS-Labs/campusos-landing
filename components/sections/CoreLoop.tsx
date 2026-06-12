function PillarCell({
  title,
  blurb,
  align = "left",
}: {
  title: string;
  blurb: string;
  align?: "left" | "right";
}) {
  return (
    <div
      className={`flex h-full items-center border-r border-border p-8 ${align === "right" ? "justify-end" : "justify-center"}`}
    >
      <div className={`max-w-xs ${align === "right" ? "text-right" : "text-left"}`}>
        <h2 className="text-5xl font-light tracking-tight font-heading leading-[1.05]">
          {title}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {blurb}
        </p>
      </div>
    </div>
  );
}

function PillarRow({
  title,
  blurb,
  column = 2,
  align = "left",
}: {
  title: string;
  blurb: string;
  column?: 2 | 3;
  align?: "left" | "right";
}) {
  return (
    <div className="grid min-h-[36rem] grid-cols-4 gap-0 border border-border">
      <div className="border-r border-border" />

      {column === 2 ? (
        <PillarCell title={title} blurb={blurb} align={align} />
      ) : (
        <div className="border-r border-border" />
      )}

      {column === 3 ? (
        <PillarCell title={title} blurb={blurb} align={align} />
      ) : (
        <div className="border-r border-border" />
      )}

      <div />
    </div>
  );
}

export function CoreLoop() {
  return (
    <section className="mt-24 flex w-full flex-col gap-16 self-stretch">
      <PillarRow
        title="Connect"
        blurb="WhatsApp, payment gateways, accounting exports, your existing tools."
      />
      <PillarRow
        column={3}
        align="right"
        title="Audit"
        blurb="Unpaid fees, missed notices, duplicate records — flagged before they become end-of-term fires."
      />
      <PillarRow
        title="Run"
        blurb="One dashboard, one workflow, live at your school — not a platform you fight for six months."
      />
    </section>
  );
}
