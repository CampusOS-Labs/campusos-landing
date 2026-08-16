"use client";

import { useState } from "react";
import Link from "next/link";
import { ListIcon } from "@phosphor-icons/react";
import { buttonVariants } from "@/components/ui/button";
import { NeumorphicButton } from "@/components/ui/NeumorphicButton";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { PRODUCTS } from "@/lib/products";

const mobileLinkClassName =
  "block rounded-none px-3 py-2.5 text-base font-medium text-white transition-colors hover:bg-white/10";

const desktopLinkClassName =
  "px-2.5 py-1.5 text-sm font-medium text-white/80 transition-colors hover:text-white";

const productsTriggerClassName = cn(
  desktopLinkClassName,
  "h-auto rounded-none bg-transparent hover:bg-transparent focus:bg-transparent",
  "data-popup-open:bg-transparent data-popup-open:hover:bg-transparent",
  "data-open:bg-transparent data-open:hover:bg-transparent data-open:focus:bg-transparent",
  "focus-visible:ring-0 focus-visible:outline-none",
);

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-white bg-black text-white backdrop-blur-sm">
      <div className="relative flex h-16 w-full items-center px-4 sm:h-20 sm:px-6">
        <Link href="/" className="relative z-10 shrink-0 font-heading text-lg tracking-[-0.02em]">
          <span className="font-sans font-bold">Blackboard</span>
        </Link>

        <nav className="pointer-events-none absolute inset-0 hidden items-center justify-center lg:flex">
          <div className="pointer-events-auto flex items-center gap-1">
            <NavigationMenu className="max-w-none flex-none">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={productsTriggerClassName}>
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="p-1.5">
                    <ul className="flex w-56 flex-col gap-0.5">
                      {PRODUCTS.map((product) => (
                        <li key={product.id}>
                          <NavigationMenuLink
                            render={<Link href={product.href} />}
                            className="flex flex-col items-start gap-0.5 rounded-xl p-2.5 hover:bg-muted focus:bg-muted"
                          >
                            <span className="text-sm font-medium text-foreground">
                              {product.label}
                            </span>
                            <span className="text-xs leading-snug text-muted-foreground">
                              {product.role}
                            </span>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link href="/blogs" className={desktopLinkClassName}>
              Blog
            </Link>
            <Link href="/jobs" className={desktopLinkClassName}>
              Jobs
            </Link>
            <Link href="/stories" className={desktopLinkClassName}>
              Stories
            </Link>
          </div>
        </nav>

        <div className="relative z-10 ml-auto flex shrink-0 items-center gap-2">
          <NeumorphicButton href="/contact" compact className="hidden sm:inline-flex">
            Contact
          </NeumorphicButton>
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon-sm" }),
                "lg:hidden text-white",
              )}
              aria-label="Open menu"
            >
              <ListIcon className="size-5" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="overflow-y-auto border-l border-white/10 bg-black text-white"
            >
              <SheetHeader className="border-b border-white/10 pb-4">
                <SheetTitle className="text-white">Menu</SheetTitle>
              </SheetHeader>

              <nav className="flex flex-1 flex-col gap-6 px-4 pb-6">
                <div>
                  <p className="mb-2 px-3 text-xs font-medium uppercase tracking-widest text-white/50">
                    Products
                  </p>
                  <div className="flex flex-col gap-0.5">
                    {PRODUCTS.map((product) => (
                      <Link
                        key={product.id}
                        href={product.href}
                        className={mobileLinkClassName}
                        onClick={() => setMobileOpen(false)}
                      >
                        {product.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-2 px-3 text-xs font-medium uppercase tracking-widest text-white/50">
                    Navigation
                  </p>
                  <div className="flex flex-col gap-0.5">
                    <Link
                      href="/blogs"
                      className={mobileLinkClassName}
                      onClick={() => setMobileOpen(false)}
                    >
                      Blog
                    </Link>
                    <Link
                      href="/jobs"
                      className={mobileLinkClassName}
                      onClick={() => setMobileOpen(false)}
                    >
                      Jobs
                    </Link>
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
