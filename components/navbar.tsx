"use client";

import { useState } from "react";
import Link from "next/link";
import { ListIcon } from "@phosphor-icons/react";
import { buttonVariants } from "@/components/ui/button";
import { NeumorphicButton } from "@/components/ui/NeumorphicButton";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/products", label: "Products" },
  { href: "/blogs", label: "Blog" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/manifesto", label: "Manifesto" },
] as const;

const mobileLinkClassName =
  "block rounded-md px-3 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-secondary";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-7xl items-center gap-3 px-4 sm:h-16 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0 font-heading text-lg tracking-[-0.02em]">
          <span className="font-sans font-bold">CampusOS</span>
        </Link>

        <div className="hidden flex-1 justify-center lg:flex">
          <nav className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-2.5 py-1.5 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          <NeumorphicButton href="/contact" compact className="hidden sm:inline-flex">
            Contact
          </NeumorphicButton>
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              className={cn(buttonVariants({ variant: "ghost", size: "icon-sm" }), "lg:hidden")}
              aria-label="Open menu"
            >
              <ListIcon className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="overflow-y-auto">
              <SheetHeader className="border-b border-border pb-4">
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>

              <nav className="flex flex-1 flex-col gap-6 px-4 pb-6">
                <div>
                  <p className="mb-2 px-3 text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground">
                    Navigation
                  </p>
                  <div className="flex flex-col gap-0.5">
                    {NAV_LINKS.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={mobileLinkClassName}
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                    <Link
                      href="/contact"
                      className={mobileLinkClassName}
                      onClick={() => setMobileOpen(false)}
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
