"use client";

import { useState } from "react";
import Link from "next/link";
import { ListIcon } from "@phosphor-icons/react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { LinkPending } from "@/components/ui/link-pending";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PRODUCTS } from "@/lib/products";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
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
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-foreground/80 hover:text-foreground">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[min(100vw-2rem,500px)] gap-1 p-4 md:grid-cols-2">
                    {PRODUCTS.map((item) => (
                      <li key={item.id}>
                        <NavigationMenuLink
                          href={item.href}
                          className={cn(
                            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary focus:bg-secondary",
                          )}
                        >
                          <div className="text-sm font-medium leading-none">{item.label}</div>
                          <p className="mt-1 line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {item.description}
                          </p>
                        </NavigationMenuLink>
                      </li>
                    ))}
                    <li className="md:col-span-2">
                      <NavigationMenuLink
                        href="/contact"
                        className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary focus:bg-secondary"
                      >
                        <div className="text-sm font-medium leading-none">Everything else</div>
                        <p className="mt-1 text-sm leading-snug text-muted-foreground">
                          If an existing tool isn&apos;t good enough, contact us
                        </p>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {NAV_LINKS.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink
                    href={link.href}
                    className="px-2.5 py-1.5 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: "secondary", size: "sm" }), "hidden sm:inline-flex")}
          >
            <LinkPending />
            Get Started
          </Link>
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon-sm" }),
                "lg:hidden",
              )}
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
                    Products
                  </p>
                  <div className="flex flex-col gap-0.5">
                    {PRODUCTS.map((item) => (
                      <Link
                        key={item.id}
                        href={item.href}
                        className={mobileLinkClassName}
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                    <Link
                      href="/contact"
                      className={mobileLinkClassName}
                      onClick={() => setMobileOpen(false)}
                    >
                      Everything else
                    </Link>
                  </div>
                </div>

                <div>
                  <p className="mb-2 px-3 text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground">
                    Company
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
