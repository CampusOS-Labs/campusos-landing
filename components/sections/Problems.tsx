"use client";

import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const headerGridClass = "grid grid-cols-4 gap-0";

const gaps = [
  {
    conflict: '"Fee paid in cash" vs "Still marked unpaid in Excel"',
    sources: "Finance / Class teacher",
    severity: "Critical" as const,
    href: "/solutions/billing-infrastructure",
    cta: "Learn how we fix billing",
  },
  {
    conflict: '"Notice sent in WhatsApp group" vs "Parent never saw it"',
    sources: "Admin / Parent inbox",
    severity: "Warning" as const,
    href: "/solutions/announcements",
    cta: "See how parents actually get the message",
  },
  {
    conflict: '"Timetable updated" vs "Substitute not notified"',
    sources: "Office / Staff group",
    severity: "Warning" as const,
    href: "/solutions/announcements",
    cta: "Learn how to notify every teacher",
  },
  {
    conflict: '"Tuition due Friday" vs "Reminder sent Monday after deadline"',
    sources: "Billing / Announcements",
    severity: "Critical" as const,
    href: "/solutions/billing-infrastructure",
    cta: "Fix fee reminders before they're late",
  },
] as const;

function SeverityBadge({ severity }: { severity: "Critical" | "Warning" }) {
  return (
    <span
      className={
        severity === "Critical"
          ? "text-xs uppercase tracking-wide text-destructive"
          : "text-xs uppercase tracking-wide text-muted-foreground"
      }
    >
      {severity}
    </span>
  );
}

function GapCard({
  conflict,
  sources,
  severity,
  href,
  cta,
  borderRight,
  borderBottom,
}: {
  conflict: string;
  sources: string;
  severity: "Critical" | "Warning";
  href: string;
  cta: string;
  borderRight?: boolean;
  borderBottom?: boolean;
}) {
  return (
    <Tooltip trackCursorAxis="both">
      <TooltipTrigger
        render={
          <Link
            href={href}
            className={cn(
              "flex h-full flex-col justify-between p-8 transition-colors hover:bg-muted/40",
              borderRight && "border-r border-border",
              borderBottom && "border-b border-border",
            )}
          />
        }
      >
        <p className="text-sm leading-relaxed">{conflict}</p>

        <div className="mt-6 flex items-end justify-between gap-4">
          <p className="text-xs text-muted-foreground">{sources}</p>
          <SeverityBadge severity={severity} />
        </div>
      </TooltipTrigger>

      <TooltipContent
        side="top"
        sideOffset={12}
        hideArrow
        className="pointer-events-none max-w-56 text-center"
      >
        {cta}
      </TooltipContent>
    </Tooltip>
  );
}

export function Problems() {
  return (
    <section className="mt-24 flex w-full flex-col gap-8 self-stretch">
      <div className={headerGridClass}>
        <div />

        <div className="flex items-end justify-start p-8 pt-0">
          <h2 className="max-w-xs text-left text-5xl font-light tracking-tight font-heading leading-[1.05]">
            See where schools fail
          </h2>
        </div>

        <div className="flex items-end justify-end p-8 pt-0">
          <p className="max-w-xs text-right text-sm leading-relaxed text-muted-foreground">
            One pass finds every gap — and the exact workflow that caused it.
          </p>
        </div>

        <div />
      </div>
    </section>
  );
}
