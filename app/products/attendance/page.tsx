import { ProductPageLayout } from "@/components/product-page-layout";
import { getProductById } from "@/lib/products";
import { createPageMetadata } from "@/lib/site";
import { notFound } from "next/navigation";

const product = getProductById("attendance");

export const metadata = createPageMetadata({
  title: product ? `${product.label} — ${product.role}` : "Shift — our attendance product",
  description: product?.description ?? "See who's on campus in real time.",
  path: "/products/attendance",
});

export default function AttendancePage() {
  if (!product) notFound();
  return <ProductPageLayout product={product} />;
}
