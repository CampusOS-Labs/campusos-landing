"use client";

import { useLinkStatus } from "next/link";
import { Drizzle } from "@/components/ui/drizzle";

/**
 * Inline loader that appears while the parent <Link> navigation is pending.
 * Must be rendered as a descendant of a next/link <Link>.
 */
export function LinkPending({ size = 14 }: { size?: number }) {
  const { pending } = useLinkStatus();
  if (!pending) return null;
  return <Drizzle size={size} label="Loading" />;
}
