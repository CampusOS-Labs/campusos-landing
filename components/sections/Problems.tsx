"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { PauseIcon, PlayIcon } from "@phosphor-icons/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ROTATION_MS = 10000;

const PAIN_POINTS = [
  {
    value: "fees",
    trigger: "Spreadsheets for fee follow-ups",
    summary:
      "Fee collections live across multiple trackers, so reminders and accountability fall through.",
    panel: {
      title: "Fees Follow-up",
      stat: "12 reminders pending in 4 different sheets",
      details: [
        { label: "Defaulters list", value: "Split across branch-wise trackers" },
        { label: "Parent nudges", value: "No single reminder trail per student" },
        { label: "Escalations", value: "Late because ownership is unclear" },
      ],
      contact: {
        role: "Finance owner",
        person: "Accounts Coordinator",
        channel: "finance@school.edu",
        note: "Needs one dashboard for reminders, calls, and payment status.",
      },
    },
  },
  {
    value: "comms",
    trigger: "WhatsApp chaos for parent communication",
    summary:
      "Critical parent updates are spread across too many chats, making follow-ups inconsistent.",
    panel: {
      title: "Parent Comms",
      stat: "7 unread WhatsApp groups across teams",
      details: [
        { label: "Broadcasts", value: "Same message repeated by 3 staff members" },
        { label: "Responses", value: "Unread parent questions after school hours" },
        { label: "Audit trail", value: "No shared history of who replied and when" },
      ],
      contact: {
        role: "Communication lead",
        person: "Front Desk Admin",
        channel: "frontdesk@school.edu",
        note: "Needs one inbox with ownership and response SLAs.",
      },
    },
  },
  {
    value: "reports",
    trigger: "Scattered admin tools with no single source of truth",
    summary:
      "Daily reporting takes manual copy-paste across disconnected systems before leadership review.",
    panel: {
      title: "Daily Reports",
      stat: "Manual exports from 3 tools before 6pm",
      details: [
        { label: "Attendance data", value: "Pulled from one app, retyped in another" },
        { label: "Collections report", value: "Built manually in end-of-day spreadsheets" },
        { label: "Leadership updates", value: "Delayed because data is never live" },
      ],
      contact: {
        role: "Operations lead",
        person: "School Coordinator",
        channel: "ops@school.edu",
        note: "Needs auto-generated reports from one reliable source.",
      },
    },
  },
] as const;

export function Problems() {
  const tabValues = useMemo(() => PAIN_POINTS.map((point) => point.value), []);
  const [activeTab, setActiveTab] = useState<(typeof PAIN_POINTS)[number]["value"]>(tabValues[0]);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  // Timestamp the current cycle effectively started at; pausedElapsed carries
  // progress across a pause so resume continues from where it stopped.
  const startedAtRef = useRef(0);
  const pausedElapsedRef = useRef(0);

  useEffect(() => {
    if (isPaused) return;

    startedAtRef.current = Date.now() - pausedElapsedRef.current;

    const timer = window.setInterval(() => {
      const elapsed = Date.now() - startedAtRef.current;
      if (elapsed >= ROTATION_MS) {
        // Advance in place — no effect restart, so the timer never thrashes.
        startedAtRef.current = Date.now();
        pausedElapsedRef.current = 0;
        setProgress(0);
        setActiveTab((prev) => {
          const nextIndex = (tabValues.indexOf(prev) + 1) % tabValues.length;
          return tabValues[nextIndex];
        });
      } else {
        setProgress((elapsed / ROTATION_MS) * 100);
      }
    }, 50);

    return () => window.clearInterval(timer);
  }, [isPaused, tabValues]);

  return (
    <section className="section-band-white mt-20 w-full self-stretch md:mt-28 lg:mt-36">
      <Tabs
        value={activeTab}
        onValueChange={(value) => {
          if (typeof value === "string") {
            startedAtRef.current = Date.now();
            pausedElapsedRef.current = 0;
            setProgress(0);
            setActiveTab(value as (typeof PAIN_POINTS)[number]["value"]);
          }
        }}
        className="mx-auto grid min-h-[70vh] w-full max-w-6xl grid-cols-1 gap-10 px-4 py-16 md:min-h-[76vh] md:px-8 md:py-20 lg:grid-cols-2 lg:gap-14 lg:px-12 lg:py-24"
      >
        <div className="space-y-8">
          <div>
            <p className="text-eyebrow">The problem</p>
            <h2 className="mt-3 text-h2 md:text-4xl">Say goodbye to your school&apos;s messy ops stack</h2>
            <p className="mt-4 max-w-xl text-body md:text-lg">
              If your team is still juggling chats, sheets, and disconnected tools, important work slips
              through every day.
            </p>
          </div>

          <TabsList className="grid h-auto grid-cols-1 gap-2 bg-transparent p-0">
            {PAIN_POINTS.map((point) => (
              <TabsTrigger
                key={point.value}
                value={point.value}
                className="justify-start rounded-2xl border border-border/70 bg-card p-4 text-left text-foreground shadow-[0_1px_0_0_rgba(15,23,42,0.04)] data-active:border-foreground data-active:bg-foreground data-active:text-background data-active:shadow-[0_10px_30px_-18px_rgba(0,0,0,0.45)] aria-selected:border-foreground aria-selected:bg-foreground aria-selected:text-background aria-selected:shadow-[0_10px_30px_-18px_rgba(0,0,0,0.45)]"
              >
                <p className="text-sm leading-relaxed text-inherit">{point.trigger}</p>
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="flex items-center gap-3">
            <div className="h-1 w-full overflow-hidden rounded-full bg-border/60">
              <div
                className="h-full rounded-full bg-foreground transition-[width] duration-75 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>
            <button
              type="button"
              aria-pressed={isPaused}
              aria-label={isPaused ? "Resume tab auto-rotation" : "Pause tab auto-rotation"}
              onClick={() =>
                setIsPaused((prev) => {
                  if (!prev) {
                    // Pausing: remember how far into the cycle we are.
                    pausedElapsedRef.current = Math.min(Date.now() - startedAtRef.current, ROTATION_MS);
                  }
                  return !prev;
                })
              }
              className="shrink-0 rounded-md border border-border/70 bg-card p-1.5 text-foreground transition-colors hover:bg-muted"
            >
              {isPaused ? <PlayIcon className="size-3.5" aria-hidden="true" /> : <PauseIcon className="size-3.5" aria-hidden="true" />}
            </button>
          </div>

          {PAIN_POINTS.map((point) => (
            <TabsContent
              key={point.value}
              value={point.value}
              className="mt-0 rounded-2xl border border-border/70 bg-card p-5"
            >
              <p className="text-body-sm text-muted-foreground">{point.summary}</p>
            </TabsContent>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 md:p-8">
          {PAIN_POINTS.map((point) => (
            <TabsContent key={point.value} value={point.value} className="mt-0 space-y-4">
              <div className="rounded-xl border border-border bg-muted p-4">
                <p className="text-body-sm">{point.panel.title}</p>
                <p className="mt-1 text-sm text-foreground">{point.panel.stat}</p>
              </div>

              {point.panel.details.map((detail) => (
                <div key={detail.label} className="rounded-xl border border-border bg-muted p-4">
                  <p className="text-body-sm">{detail.label}</p>
                  <p className="mt-1 text-sm text-foreground">{detail.value}</p>
                </div>
              ))}

              <div className="rounded-xl border border-border bg-secondary p-4">
                <p className="text-body-sm">Primary contact</p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  {point.panel.contact.role}: {point.panel.contact.person}
                </p>
                <p className="mt-1 text-sm text-foreground">{point.panel.contact.channel}</p>
                <p className="mt-2 text-sm text-muted-foreground">{point.panel.contact.note}</p>
              </div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </section>
  );
}
