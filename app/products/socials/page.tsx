import { ProductPageLayout } from "@/components/product-page-layout";
import { getProductById } from "@/lib/products";
import { createPageMetadata } from "@/lib/site";
import { notFound } from "next/navigation";

const product = getProductById("socials");

export const metadata = createPageMetadata({
  title: "Social Media",
  description: "Your school's story published consistently.",
  path: "/products/socials",
});

export default function SocialsPage() {
  if (!product) notFound();
  return <ProductPageLayout product={product} />;
}
