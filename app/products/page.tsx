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
  description:
    "Explore CampusOS products for billing, communication, attendance, and school growth.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <main className="flex flex-1 flex-col items-center px-4 pt-24 pb-16 sm:px-6 sm:pt-32 sm:pb-24">
      <p className="text-eyebrow">Products</p>
      <h1 className="mt-4 max-w-3xl text-center text-display">What we currently help with</h1>
      <div className="mt-10 flex w-full max-w-3xl flex-col gap-4 sm:mt-16">
        {PRODUCT_OPTIONS.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="group flex min-h-28 flex-col justify-between rounded-none border border-border bg-card p-5 transition-colors hover:bg-secondary/50"
          >
            <div>
              <h2 className="text-center text-xl font-medium tracking-tight">{item.label}</h2>
              <p className="mt-3 text-sm text-center leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
