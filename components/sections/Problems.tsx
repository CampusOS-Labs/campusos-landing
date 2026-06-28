"use client";

import { useEffect, useMemo, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PAIN_POINTS = [
  {
    value: "fees",
    trigger: "fees stuck in spreadsheet hell",
  },
  {
    value: "comms",
    trigger: "teach kids, then teach parents",
  },
  {
    value: "reports",
    trigger: "daily reports, more like 'where did my day go'",
  },
] as const;

const ROTATION_MS = 10000;

export function Problems() {
  const tabValues = useMemo(() => PAIN_POINTS.map((point) => point.value), []);
  const [activeTab, setActiveTab] = useState<(typeof PAIN_POINTS)[number]["value"]>(tabValues[0]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveTab((prev) => {
        const nextIndex = (tabValues.indexOf(prev) + 1) % tabValues.length;
        return tabValues[nextIndex];
      });
    }, ROTATION_MS);

    return () => window.clearInterval(timer);
  }, [tabValues]);

  return (
    <section className="section-band-white w-full self-stretch">
      <Tabs
        value={activeTab}
        onValueChange={(value) => {
          if (typeof value === "string") {
            setActiveTab(value as (typeof PAIN_POINTS)[number]["value"]);
          }
        }}
        className="mx-auto grid min-h-[70vh] w-full max-w-6xl grid-cols-1 gap-10 px-4 pt-6 pb-16 md:min-h-[76vh] md:px-8 md:pt-8 md:pb-20 lg:grid-cols-2 lg:gap-14 lg:px-12 lg:pt-10 lg:pb-24"
      >
        <div className="space-y-8">
          <div>
            <p className="text-eyebrow">The problem</p>
            <h2 className="mt-3 text-h2">
              run a school, not a circus
            </h2>
          </div>

          <TabsList className="grid h-auto grid-cols-1 gap-2 bg-transparent p-0">
            {PAIN_POINTS.map((point) => (
              <TabsTrigger
                key={point.value}
                value={point.value}
                className="hover:cursor-pointer justify-start border border-border/70 bg-card p-4 text-left text-foreground shadow-[0_1px_0_0_rgba(15,23,42,0.04)] data-active:border-foreground data-active:bg-foreground data-active:text-background data-active:shadow-[0_10px_30px_-18px_rgba(0,0,0,0.45)] aria-selected:border-foreground aria-selected:bg-foreground aria-selected:text-background aria-selected:shadow-[0_10px_30px_-18px_rgba(0,0,0,0.45)]"
              >
                <p className="text-sm leading-relaxed text-inherit">{point.trigger}</p>
              </TabsTrigger>
            ))}
          </TabsList>        </div>

        <div className="relative min-h-105 overflow-hidden bg-card p-6 md:min-h-115 md:p-8">
          <TabsContent value="fees" className="mt-0">
            {/*<SpreadsheetMock />*/}
           spreadsheet mock haha
          </TabsContent>
          <TabsContent value="comms" className="mt-0">
            {/*<WhatsAppMock />*/}
            whastapp mock haha
          </TabsContent>
          <TabsContent value="reports" className="mt-0">
            {/*<ScatteredToolsMock />*/}
            scattered tools mock haha
          </TabsContent>
        </div>
      </Tabs>
    </section>
  );
}
