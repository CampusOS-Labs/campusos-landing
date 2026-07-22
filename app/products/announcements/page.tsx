import { ProductPageLayout } from "@/components/product-page-layout";
import { getProductById } from "@/lib/products";
import { createPageMetadata } from "@/lib/site";
import { notFound } from "next/navigation";

const product = getProductById("announcements");

export const metadata = createPageMetadata({
  title: product ? `${product.label} — ${product.role}` : "Relay — our announcements product",
  description: product?.description ?? "Notices that reach every parent on WhatsApp.",
  path: "/products/announcements",
});

export default function AnnouncementsPage() {
  if (!product) notFound();
  return <ProductPageLayout product={product} />;
}
