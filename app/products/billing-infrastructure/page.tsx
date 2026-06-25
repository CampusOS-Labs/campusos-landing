import { ProductPageLayout } from "@/components/product-page-layout";
import { getProductById } from "@/lib/products";
import { createPageMetadata } from "@/lib/site";
import { notFound } from "next/navigation";

const product = getProductById("billing-infrastructure");

export const metadata = createPageMetadata({
  title: "Billing Infrastructure",
  description: "Fee collection that reconciles itself — one source of truth for school finance.",
  path: "/products/billing-infrastructure",
});

export default function BillingInfrastructurePage() {
  if (!product) notFound();
  return <ProductPageLayout product={product} showBillingStack />;
}
