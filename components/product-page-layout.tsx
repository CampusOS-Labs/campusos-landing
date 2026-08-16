import type { ProductDefinition } from "@/lib/products";

const mono = {
  fontFamily: '"Lucida Console", Monaco, "Courier New", monospace',
} as const;

type ProductPageLayoutProps = {
  product: ProductDefinition;
  children?: React.ReactNode;
};

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function ProductPageLayout({ product, children }: ProductPageLayoutProps) {
  const useCaseStart = 1;
  const outcomeStart = useCaseStart + product.useCases.length;

  return (
    <main className="flex flex-1 flex-col items-center">
      <section className="relative flex min-h-[calc(100dvh-4rem)] w-full flex-col overflow-hidden bg-white px-4 pt-8 pb-8 text-black sm:min-h-[calc(100dvh-5rem)] sm:px-6 sm:pb-10 lg:px-8">
        <div className="relative mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center">
          <div className="relative z-10 flex w-full flex-col items-center text-center">
            <p className="mb-4 text-sm font-medium tracking-wide text-black/35 sm:mb-5" style={mono}>
              {product.role}
            </p>
            <h1
              className="max-w-4xl text-5xl leading-[1.05] tracking-[-0.03em] text-black sm:text-6xl md:text-7xl"
              style={mono}
            >
              {product.label}
            </h1>
            <p className="mt-5 max-w-xl font-sans text-base leading-relaxed text-black/50 sm:mt-6 sm:text-lg">
              {product.headline}
            </p>
            <p className="mt-3 max-w-xl font-sans text-base leading-relaxed text-black/40 sm:text-[1.05rem]">
              {product.description}
            </p>
          </div>
        </div>
      </section>

      <section className="w-full self-stretch bg-black text-white">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-20 px-4 py-20 text-center sm:gap-24 sm:px-6 sm:py-28 md:gap-28 md:py-32 lg:px-8">
          {product.useCases.map((item, index) => (
            <div key={item} className="flex w-full max-w-2xl flex-col items-center gap-3 sm:gap-4">
              <p className="text-sm font-medium tracking-wide text-white/35" style={mono}>
                {pad(useCaseStart + index)}
              </p>
              <h2 className="font-sans text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl">
                {item}
              </h2>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full self-stretch border-t border-black/10 bg-white text-black">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-20 px-4 py-20 text-center sm:gap-24 sm:px-6 sm:py-28 md:gap-28 md:py-32 lg:px-8">
          {product.outcomes.map((paragraph, index) => (
            <div
              key={paragraph}
              className="flex w-full max-w-2xl flex-col items-center gap-3 sm:gap-4"
            >
              <p className="text-sm font-medium tracking-wide text-black/35" style={mono}>
                {pad(outcomeStart + index)}
              </p>
              <h2 className="font-sans text-3xl font-bold leading-[1.15] tracking-tight text-black sm:text-4xl">
                {paragraph}
              </h2>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full self-stretch bg-black text-white">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-10 px-4 py-20 text-center sm:gap-12 sm:px-6 sm:py-28 md:gap-14 md:py-32 lg:px-8">
          <div className="flex w-full max-w-2xl items-center gap-4" style={mono}>
            <p className="shrink-0 text-sm font-medium tracking-wide text-white/35">
              {product.label}
            </p>
            <div className="h-px min-w-0 flex-1 bg-white" aria-hidden="true" />
            <p className="shrink-0 text-sm font-medium tracking-wide text-white">from the field</p>
          </div>
          <p className="max-w-2xl font-sans text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl">
            &ldquo;{product.testimonial.quote}&rdquo;
          </p>
          <p className="max-w-md font-sans text-base leading-relaxed text-white/50">
            {product.testimonial.name}, {product.testimonial.role} · {product.testimonial.school}
          </p>
        </div>
      </section>

      {children}
    </main>
  );
}
