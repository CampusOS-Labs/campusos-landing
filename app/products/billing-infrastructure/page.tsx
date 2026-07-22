import { ProductPageLayout } from "@/components/product-page-layout";
import { getProductById } from "@/lib/products";
import { createPageMetadata } from "@/lib/site";
import { notFound } from "next/navigation";

const product = getProductById("billing-infrastructure");

export const metadata = createPageMetadata({
  title: product ? `${product.label} — ${product.role}` : "Billy — our billing infrastructure",
  description: product?.description ?? "Fee collection that reconciles itself.",
  path: "/products/billing-infrastructure",
});

export default function BillingInfrastructurePage() {
  if (!product) notFound();
  return <ProductPageLayout product={product} />;
}
