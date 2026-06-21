import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export type MockUiVariant =
  | "billing"
  | "announcements"
  | "attendance"
  | "socials"
  | "connect"
  | "audit"
  | "run";

type MockUiFrameProps = {
  variant: MockUiVariant;
  className?: string;
  label?: string;
};

function Chrome({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex h-full min-h-[220px] flex-col border border-border bg-white">
      <div className="flex items-center gap-2 border-b border-border bg-white px-3 py-2">
        <div className="flex gap-1">
          <span className="size-2 rounded-full bg-border" />
          <span className="size-2 rounded-full bg-border" />
          <span className="size-2 rounded-full bg-border" />
        </div>
        <span className="ml-2 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          {title}
        </span>
      </div>
      <div className="flex-1 p-3">{children}</div>
    </div>
  );
}

function BillingMock() {
  return (
    <Chrome title="CampusOS · Billing">
      <div className="space-y-2">
        <div className="flex items-center justify-between border border-border bg-white px-3 py-2">
          <div>
            <p className="text-xs font-medium">Arjun Mehta · Class 3A</p>
            <p className="text-[10px] text-muted-foreground">Term 2 fees · Due Mar 15</p>
          </div>
          <span className="bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
            Paid
          </span>
        </div>
        <div className="flex items-center justify-between border border-border bg-white px-3 py-2">
          <div>
            <p className="text-xs font-medium">Priya Sharma · Class 1B</p>
            <p className="text-[10px] text-muted-foreground">Term 2 fees · Due Mar 15</p>
          </div>
          <span className="bg-amber-500/10 px-2 py-0.5 text-[10px] font-medium text-amber-700">
            ₹12,400 due
          </span>
        </div>
        <div className="flex items-center justify-between border border-border bg-white px-3 py-2">
          <div>
            <p className="text-xs font-medium">Rohan Patel · Class 5C</p>
            <p className="text-[10px] text-muted-foreground">Activity fee · Due Mar 20</p>
          </div>
          <span className="bg-amber-500/10 px-2 py-0.5 text-[10px] font-medium text-amber-700">
            ₹2,500 due
          </span>
        </div>
        <div className="mt-2 grid grid-cols-3 gap-2">
          <div className="border border-border bg-white p-2 text-center">
            <p className="text-sm font-semibold font-heading tabular-nums">97.2%</p>
            <p className="text-[9px] text-muted-foreground">Collected</p>
          </div>
          <div className="border border-border bg-white p-2 text-center">
            <p className="text-sm font-semibold font-heading tabular-nums">23</p>
            <p className="text-[9px] text-muted-foreground">Pending</p>
          </div>
          <div className="border border-border bg-white p-2 text-center">
            <p className="text-sm font-semibold font-heading tabular-nums">₹4.2L</p>
            <p className="text-[9px] text-muted-foreground">This month</p>
          </div>
        </div>
      </div>
    </Chrome>
  );
}

function AnnouncementsMock() {
  return (
    <Chrome title="CampusOS · Announcements">
      <div className="space-y-2">
        <div className="border border-border bg-white p-3">
          <p className="text-[10px] font-medium uppercase tracking-wider text-emerald-700">
            WhatsApp · Direct message
          </p>
          <p className="mt-2 text-xs font-medium">PTM Reminder — Saturday 10am</p>
          <p className="mt-1 text-[10px] leading-relaxed text-muted-foreground">
            Dear parents, Parent-Teacher Meeting is scheduled for Saturday at 10:00 AM. Please confirm
            attendance.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="border border-border bg-white p-2">
            <p className="text-lg font-semibold font-heading tabular-nums">847</p>
            <p className="text-[9px] text-muted-foreground">Sent</p>
          </div>
          <div className="border border-border bg-white p-2">
            <p className="text-lg font-semibold font-heading tabular-nums">98.4%</p>
            <p className="text-[9px] text-muted-foreground">Read rate</p>
          </div>
        </div>
        <div className="flex gap-1">
          {["All parents", "Unpaid fees", "Class 3A"].map((tag) => (
            <span
              key={tag}
              className="border border-border bg-white px-2 py-0.5 text-[9px] text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Chrome>
  );
}

function AttendanceMock() {
  return (
    <Chrome title="CampusOS · Attendance">
      <div className="space-y-2">
        <div className="flex items-center justify-between border border-border bg-white px-3 py-2">
          <div className="flex items-center gap-2">
            <span className="flex size-6 items-center justify-center bg-emerald-500/10 text-[10px] font-medium text-emerald-700">
              ✓
            </span>
            <div>
              <p className="text-xs font-medium">Ms. Ananya · Class 2A</p>
              <p className="text-[10px] text-muted-foreground">Checked in 8:42 AM · GPS verified</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between border border-border bg-white px-3 py-2">
          <div className="flex items-center gap-2">
            <span className="flex size-6 items-center justify-center bg-emerald-500/10 text-[10px] font-medium text-emerald-700">
              ✓
            </span>
            <div>
              <p className="text-xs font-medium">Mr. Rajesh · Class 4B</p>
              <p className="text-[10px] text-muted-foreground">Checked in 8:38 AM · GPS verified</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between border border-border bg-white px-3 py-2">
          <div className="flex items-center gap-2">
            <span className="flex size-6 items-center justify-center bg-amber-500/10 text-[10px] font-medium text-amber-700">
              …
            </span>
            <div>
              <p className="text-xs font-medium">Ms. Kavita · Class 1C</p>
              <p className="text-[10px] text-muted-foreground">Not checked in yet</p>
            </div>
          </div>
        </div>
        <div className="mt-1 border border-dashed border-border bg-white/50 p-2 text-center">
          <p className="text-[10px] text-muted-foreground">Live · 18 of 21 teachers on campus</p>
        </div>
      </div>
    </Chrome>
  );
}

function SocialsMock() {
  return (
    <Chrome title="CampusOS · Social">
      <div className="grid grid-cols-2 gap-2">
        <div className="aspect-square border border-border bg-gradient-to-br from-violet-100 to-white p-2">
          <p className="text-[9px] font-medium">Instagram</p>
          <p className="mt-4 text-[10px] text-muted-foreground">Admissions open…</p>
        </div>
        <div className="aspect-square border border-border bg-gradient-to-br from-blue-100 to-white p-2">
          <p className="text-[9px] font-medium">Facebook</p>
          <p className="mt-4 text-[10px] text-muted-foreground">Sports day recap…</p>
        </div>
      </div>
      <div className="mt-2 border border-border bg-white p-2">
        <p className="text-[10px] font-medium">Scheduled · Thu 4:00 PM</p>
        <p className="text-[9px] text-muted-foreground">Annual day rehearsal highlights</p>
      </div>
    </Chrome>
  );
}

function ConnectMock() {
  return (
    <Chrome title="CampusOS · Connect">
      <div className="grid grid-cols-2 gap-2">
        {["WhatsApp", "Razorpay", "UPI", "Tally export"].map((item) => (
          <div
            key={item}
            className="flex items-center gap-2 border border-border bg-white px-2 py-2"
          >
            <span className="size-2 bg-emerald-500" />
            <span className="text-[10px] font-medium">{item}</span>
          </div>
        ))}
      </div>
      <p className="mt-2 text-center text-[9px] text-muted-foreground">
        4 integrations · All connected
      </p>
    </Chrome>
  );
}

function AuditMock() {
  return (
    <Chrome title="CampusOS · Audit">
      <div className="space-y-2">
        {[
          { flag: "23 unpaid fee records", severity: "high" },
          { flag: "4 duplicate parent contacts", severity: "medium" },
          { flag: "12 unread notice follow-ups", severity: "medium" },
        ].map((item) => (
          <div
            key={item.flag}
            className="flex items-center justify-between border border-border bg-white px-3 py-2"
          >
            <p className="text-[10px] font-medium">{item.flag}</p>
            <span
              className={cn(
                "px-1.5 py-0.5 text-[9px] font-medium uppercase",
                item.severity === "high"
                  ? "bg-red-500/10 text-red-700"
                  : "bg-amber-500/10 text-amber-700",
              )}
            >
              Flag
            </span>
          </div>
        ))}
      </div>
    </Chrome>
  );
}

function RunMock() {
  return (
    <Chrome title="CampusOS · Dashboard">
      <div className="grid grid-cols-2 gap-2">
        <div className="border border-border bg-white p-2">
          <p className="text-lg font-semibold font-heading">₹4.2L</p>
          <p className="text-[9px] text-muted-foreground">Collected this month</p>
        </div>
        <div className="border border-border bg-white p-2">
          <p className="text-lg font-semibold font-heading">98.4%</p>
          <p className="text-[9px] text-muted-foreground">Notice read rate</p>
        </div>
        <div className="border border-border bg-white p-2">
          <p className="text-lg font-semibold font-heading">18/21</p>
          <p className="text-[9px] text-muted-foreground">Teachers on campus</p>
        </div>
        <div className="border border-border bg-white p-2">
          <p className="text-lg font-semibold font-heading">3</p>
          <p className="text-[9px] text-muted-foreground">Flags to review</p>
        </div>
      </div>
    </Chrome>
  );
}

const MOCK_COMPONENTS: Record<MockUiVariant, () => ReactNode> = {
  billing: BillingMock,
  announcements: AnnouncementsMock,
  attendance: AttendanceMock,
  socials: SocialsMock,
  connect: ConnectMock,
  audit: AuditMock,
  run: RunMock,
};

export function MockUiFrame({ variant, className, label }: MockUiFrameProps) {
  const Mock = MOCK_COMPONENTS[variant];

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      {label ? (
        <span className="absolute left-3 top-3 z-10 border border-border bg-white/90 px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider text-muted-foreground backdrop-blur-sm">
          {label}
        </span>
      ) : null}
      <Mock />
    </div>
  );
}
