"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      className="relative"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      <SunIcon
        weight="bold"
        className="size-[1.15rem] rotate-0 scale-100 transition-all duration-200 dark:-rotate-90 dark:scale-0"
        aria-hidden="true"
      />
      <MoonIcon
        weight="bold"
        className="absolute size-[1.15rem] rotate-90 scale-0 transition-all duration-200 dark:rotate-0 dark:scale-100"
        aria-hidden="true"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
