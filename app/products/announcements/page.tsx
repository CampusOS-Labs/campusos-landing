import { ProductPageLayout } from "@/components/product-page-layout";
import { getProductById } from "@/lib/products";
import { createPageMetadata } from "@/lib/site";
import { notFound } from "next/navigation";

const product = getProductById("announcements");

export const metadata = createPageMetadata({
  title: "Announcements",
  description: "Notices that reach every parent on WhatsApp, as a direct message.",
  path: "/products/announcements",
});

export default function AnnouncementsPage() {
  if (!product) notFound();
  return <ProductPageLayout product={product} />;
}
