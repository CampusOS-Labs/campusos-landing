import { Drizzle } from "@/components/ui/drizzle";

export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-1 flex-col items-center justify-center gap-4 text-foreground">
      <Drizzle size={56} label="Loading" />
      <p className="text-caption">Loading…</p>
    </div>
  );
}
