import { CAPABILITIES } from "@/lib/products";

export function CapabilityGrid() {
  return (
    <section className="mt-24 w-full self-stretch px-6">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-4 gap-0">
          <div />
          <div className="col-span-2 p-8 pt-0 text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Capabilities
            </p>
            <h2 className="mt-4 font-heading text-5xl font-light tracking-tight leading-[1.05]">
              Not just faster. Built for how schools work.
            </h2>
          </div>
          <div />
        </div>

        <div className="mt-8 grid grid-cols-1 border border-border md:grid-cols-3">
          {CAPABILITIES.map((capability, index) => {
            const Icon = capability.icon;
            const col = index % 3;
            const row = Math.floor(index / 3);
            const isLastRow = row === 2;

            return (
              <div
                key={capability.title}
                className={`flex gap-4 border-border p-6 ${
                  col < 2 ? "md:border-r" : ""
                } ${!isLastRow ? "border-b md:border-b" : ""}`}
              >
                <span className="flex size-9 shrink-0 items-center justify-center border border-border bg-muted/30">
                  <Icon className="size-4" weight="duotone" />
                </span>
                <div>
                  <h3 className="text-sm font-medium">{capability.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {capability.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
