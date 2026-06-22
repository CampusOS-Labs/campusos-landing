import Image from "next/image";

import PixelTransition from "@/components/ui/PixelTransition";
import { BillingStackLoop } from "@/components/sections/billing-stack-loop";
import { PRODUCT_FAQ, type ProductDefinition } from "@/lib/products";

type ProductPageLayoutProps = {
  product: ProductDefinition;
  children?: React.ReactNode;
  showBillingStack?: boolean;
};

export function ProductPageLayout({
  product,
  children,
  showBillingStack = false,
}: ProductPageLayoutProps) {
  return (
    <main className="flex flex-1 flex-col items-center px-4 pt-24 sm:px-6 sm:pt-32">
      <p className="text-eyebrow">{product.label}</p>
      <h1 className="mt-4 max-w-3xl text-center text-display">
        {product.title}
      </h1>
      <p className="mt-5 max-w-xl text-center text-lead">{product.headline}</p>

      {product.imageSrc ? (
        <PixelTransition
          firstContent={<div className="h-full w-full bg-white" />}
          secondContent={
            <Image
              src={product.imageSrc}
              alt={product.title}
              className="h-full w-full object-cover"
              width={1200}
              height={538}
              priority
              sizes="(max-width: 768px) 100vw, 896px"
            />
          }
          gridSize={30}
          pixelColor="#ffffff"
          animationStepDuration={0.8}
          autoPlay
          once
          aspectRatio="44.85%"
          className="mt-16 w-full max-w-4xl"
          style={{ backgroundColor: "#ffffff" }}
        />
      ) : null}

      <div className="mt-16 grid w-full max-w-5xl grid-cols-1 gap-0 border border-border md:grid-cols-3">
        {product.stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`flex aspect-[2/1] flex-col items-center justify-center gap-1.5 border-border bg-white px-4 py-6 text-center ${
              index < product.stats.length - 1 ? "md:border-r" : ""
            } ${index > 0 ? "border-t md:border-t-0" : ""}`}
          >
            <span className="font-heading text-4xl font-semibold tabular-nums">{stat.value}</span>
            <span className="text-sm font-medium">{stat.label}</span>
            <span className="max-w-[220px] text-caption">
              {stat.detail}
            </span>
          </div>
        ))}
      </div>

      <div className="mb-24 mt-24 w-full border-t" />

      <div className="w-full max-w-3xl">
        <h2 className="text-h2 sm:text-4xl">
          What schools use this for
        </h2>
        <ul className="mt-6 space-y-3">
          {product.useCases.map((item) => (
            <li key={item} className="text-body-sm flex gap-3">
              <span className="mt-1.5 size-1.5 shrink-0 bg-foreground" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-24 mt-24 w-full border-t" />

      <h2 className="mb-12 max-w-3xl text-center text-display-sm">
        Outcomes for {product.label.toLowerCase()}
      </h2>
      <div className="max-w-2xl space-y-6">
        {product.outcomes.map((paragraph) => (
          <p key={paragraph} className="text-body">
            {paragraph}
          </p>
        ))}
      </div>

      <blockquote className="mt-16 max-w-2xl border-l-2 border-border pl-6">
        <p className="text-lg font-light leading-relaxed">&ldquo;{product.testimonial.quote}&rdquo;</p>
        <cite className="mt-4 block text-sm not-italic text-muted-foreground">
          — {product.testimonial.name}, {product.testimonial.role} · {product.testimonial.school}
        </cite>
      </blockquote>

      {showBillingStack ? (
        <>
          <div className="mb-24 mt-24 w-full border-t" />
          <div className="mb-12 text-center">
            <h2 className="text-display-sm">
              Built with the entire stack in mind
            </h2>
            <p className="mx-auto mt-1 max-w-2xl text-lead">
              Collect from systems you already trust.
            </p>
          </div>
          <BillingStackLoop />
        </>
      ) : null}

      {children}

      <div className="mb-24 mt-24 w-full border-t" />

      <h2 className="mb-8 text-h2 sm:text-3xl">Questions?</h2>
      <div className="w-full max-w-2xl divide-y divide-border border border-border">
        {PRODUCT_FAQ.map((item) => (
          <details key={item.question} className="group px-6 py-4">
            <summary className="cursor-pointer list-none text-sm font-medium [&::-webkit-details-marker]:hidden">
              {item.question}
            </summary>
            <p className="text-body-sm mt-3">{item.answer}</p>
          </details>
        ))}
      </div>

    </main>
  );
}
