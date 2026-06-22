import { WALL_OF_LOVE } from "@/lib/products";

export function WallOfLove() {
  return (
    <section className="mt-24 w-full self-stretch px-6">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-4 gap-0">
          <div />
          <div className="col-span-2 p-8 pt-0 text-center">
            <p className="text-eyebrow">
              Wall of love
            </p>
            <h2 className="mt-4 text-h2 font-light tracking-tight">
              Schools that stopped fighting their ops
            </h2>
          </div>
          <div />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-0 border border-border md:grid-cols-2">
          {WALL_OF_LOVE.map((item, index) => (
            <blockquote
              key={item.quote}
              className={`border-border p-8 ${
                index % 2 === 0 ? "md:border-r" : ""
              } ${index < 2 ? "border-b md:border-b" : ""}`}
            >
              <p className="font-heading text-xl font-light leading-snug tracking-tight">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="mt-6 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{item.name}</span>
                <span className="mx-2">·</span>
                {item.school}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
