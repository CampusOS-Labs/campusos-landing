import { ProductPageLayout } from "@/components/product-page-layout";
import { getProductById } from "@/lib/products";
import { createPageMetadata } from "@/lib/site";
import { notFound } from "next/navigation";

const product = getProductById("attendance");

export const metadata = createPageMetadata({
  title: "Attendance",
  description: "Teachers check in on their phone. See who's on campus in real time.",
  path: "/products/attendance",
});

export default function AttendancePage() {
  if (!product) notFound();
  return <ProductPageLayout product={product} />;
}
