import Link from "next/link";
import Image from "next/image";

import { HOMEPAGE_PRODUCTS } from "@/lib/products";
import { buttonVariants } from "@/components/ui/button";

export function ProductShowcase() {
  return (
    <section className="section-band-white mt-0 w-full self-stretch">
      <div className="grid grid-cols-4 gap-0">
        <div />
        <div className="col-span-2 flex flex-col items-center p-8 pt-0 text-center">
          <p className="text-eyebrow">Examples</p>
          <h2 className="mt-4 max-w-xl text-h2">
            One broken workflow at a time
          </h2>
          <p className="mt-5 max-w-md text-lead">
            Billing, announcements, attendance — common starting points, not a fixed package.
          </p>
        </div>
        <div />
      </div>

      <div className="mt-8 flex flex-col gap-0">
        {HOMEPAGE_PRODUCTS.map((product, index) => {
          const reversed = index % 2 === 1;

          return (
            <div
              key={product.id}
              className={`grid min-h-[28rem] grid-cols-1 border border-border ${
                product.imageSrc ? "lg:grid-cols-2" : ""
              }`}
            >
              <div
                className={`flex flex-col justify-center border-border p-8 lg:p-12 ${
                  product.imageSrc
                    ? reversed
                      ? "lg:order-2 lg:border-l"
                      : "lg:border-r"
                    : ""
                }`}
              >
                <p className="text-eyebrow">{product.label}</p>
                <h3 className="mt-4 text-h3 md:text-4xl md:leading-[1.1]">
                  {product.headline}
                </h3>
                <p className="mt-4 max-w-md text-body-sm">
                  {product.description}
                </p>
                <Link
                  href={product.href}
                  className="mt-6 text-sm font-medium text-link underline-offset-4 hover:underline"
                >
                  Learn more →
                </Link>
                <blockquote className="mt-8 border-l-2 border-border pl-4">
                  <p className="text-body-sm">
                    &ldquo;{product.testimonial.quote}&rdquo;
                  </p>
                  <footer className="mt-2 text-caption">
                    — {product.testimonial.role}, {product.testimonial.school}
                  </footer>
                </blockquote>
              </div>

              {product.imageSrc ? (
                <div
                  className={`relative min-h-[240px] bg-muted/20 p-6 lg:p-8 ${
                    reversed ? "lg:order-1" : ""
                  }`}
                >
                  <div className="relative h-full min-h-[220px] overflow-hidden border border-border bg-card">
                    <Image
                      src={product.imageSrc}
                      alt={product.title}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-foreground/5" />
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex justify-center pb-16 md:pb-28">
        <Link href="/contact" className={buttonVariants({ variant: "secondary" })}>
          See all products
        </Link>
      </div>
    </section>
  );
}
