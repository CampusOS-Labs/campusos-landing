import Link from "next/link";
import Image from "next/image";

import { HOMEPAGE_PRODUCTS } from "@/lib/products";
import { MockUiFrame } from "@/components/ui/mock-ui-frame";
import { NeumorphicButton } from "@/components/ui/NeumorphicButton";

export function ProductShowcase() {
  return (
    <section className="mt-24 w-full self-stretch">
      <div className="grid grid-cols-4 gap-0">
        <div />
        <div className="col-span-2 flex flex-col items-center p-8 pt-0 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Products
          </p>
          <h2 className="mt-4 max-w-xl font-heading text-5xl font-light tracking-tight leading-[1.05]">
            One broken workflow at a time
          </h2>
        </div>
        <div />
      </div>

      <div className="mt-8 flex flex-col gap-0">
        {HOMEPAGE_PRODUCTS.map((product, index) => {
          const reversed = index % 2 === 1;

          return (
            <div
              key={product.id}
              className="grid min-h-[28rem] grid-cols-1 border border-border lg:grid-cols-2"
            >
              <div
                className={`flex flex-col justify-center border-border p-8 lg:p-12 ${
                  reversed ? "lg:order-2 lg:border-l" : "lg:border-r"
                }`}
              >
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  {product.label}
                </p>
                <h3 className="mt-4 font-heading text-4xl font-light tracking-tight leading-[1.1]">
                  {product.headline}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
                <Link
                  href={product.href}
                  className="mt-6 text-sm font-medium underline-offset-4 hover:underline"
                >
                  Learn more →
                </Link>
                <blockquote className="mt-8 border-l-2 border-border pl-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    &ldquo;{product.testimonial.quote}&rdquo;
                  </p>
                  <footer className="mt-2 text-xs text-muted-foreground">
                    — {product.testimonial.role}, {product.testimonial.school}
                  </footer>
                </blockquote>
              </div>

              <div
                className={`relative min-h-[240px] bg-muted/20 p-6 lg:p-8 ${
                  reversed ? "lg:order-1" : ""
                }`}
              >
                {product.imageSrc ? (
                  <div className="relative h-full min-h-[220px] overflow-hidden border border-border bg-white">
                    <Image
                      src={product.imageSrc}
                      alt={product.title}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-foreground/5" />
                  </div>
                ) : (
                  <MockUiFrame variant={product.mockVariant} className="h-full" />
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex justify-center">
        <NeumorphicButton href="/contact" compact>
          See all products
        </NeumorphicButton>
      </div>
    </section>
  );
}
