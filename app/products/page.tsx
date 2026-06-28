import Link from "next/link";

import { createPageMetadata } from "@/lib/site";
import { PRODUCTS } from "@/lib/products";

const PRODUCT_OPTIONS = [
  ...PRODUCTS.map((product) => ({
    id: product.id,
    label: product.label,
    description: product.description,
    href: product.href,
  })),
  {
    id: "everything-else",
    label: "Something else?",
    description: "something else you need help with, we're all ears.",
    href: "/contact",
  },
];

export const metadata = createPageMetadata({
  title: "Products",
  description: "Explore CampusOS products for billing, communication, attendance, and school growth.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <main className="flex flex-1 flex-col items-center px-4 pt-24 pb-16 sm:px-6 sm:pt-32 sm:pb-24">
      <p className="text-eyebrow">Products</p>
      <h1 className="mt-4 max-w-3xl text-center text-display">Choose a workflow to fix first</h1>
      <p className="mt-4 max-w-xl text-center text-lead">
        Start somewhere, pick one from below.
      </p>

      <div className="mt-10 grid w-full max-w-5xl gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCT_OPTIONS.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="group flex min-h-44 flex-col justify-between rounded-md border border-border bg-card p-6 transition-colors hover:bg-secondary/50"
          >
            <div>
              <h2 className="text-xl font-medium tracking-tight">{item.label}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
            <span className="mt-6 inline-flex items-center text-sm font-medium text-link underline-offset-4 group-hover:underline">
              Learn more
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
