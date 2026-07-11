"use client";

import { useState } from "react";
import Link from "next/link";
import { ListIcon } from "@phosphor-icons/react";
import { buttonVariants } from "@/components/ui/button";
import { NeumorphicButton } from "@/components/ui/NeumorphicButton";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { PRODUCTS } from "@/lib/products";

const OTHER_LINKS = [] as const;

const mobileLinkClassName =
  "block rounded-none px-3 py-2.5 text-base font-medium text-white transition-colors hover:bg-white/10";

const mobileSubLinkClassName =
  "block rounded-none px-3 py-2 pl-7 text-sm text-white/70 transition-colors hover:bg-white/10";

const desktopLinkClassName =
  "px-2.5 py-1.5 text-sm font-medium text-white/80 transition-colors hover:text-white";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/95 text-white backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-7xl items-center gap-3 px-4 sm:h-16 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0 font-heading text-lg tracking-[-0.02em]">
          <span className="font-sans font-bold">CampusOS</span>
        </Link>

        <div className="hidden flex-1 justify-center lg:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white data-open:bg-white/10 data-popup-open:bg-white/10">Products</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-neutral-900 text-white">
                  <ul className="w-105 p-2">
                    {PRODUCTS.map((product) => (
                      <li key={product.id}>
                        <NavigationMenuLink
                          href={product.href}
                          className="block rounded-xl p-3 transition-colors hover:bg-white/10"
                        >
                          <div className="text-sm font-medium text-white">{product.label}</div>
                          <div className="mt-0.5 text-xs text-white/50 line-clamp-1">
                            {product.description}
                          </div>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {OTHER_LINKS.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <Link href={link.href} className={desktopLinkClassName}>
                    {link.label}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          <NeumorphicButton href="/contact" compact className="hidden sm:inline-flex">
            Contact
          </NeumorphicButton>
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              className={cn(buttonVariants({ variant: "ghost", size: "icon-sm" }), "lg:hidden text-white")}
              aria-label="Open menu"
            >
              <ListIcon className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="overflow-y-auto border-l border-white/10 bg-black text-white">
              <SheetHeader className="border-b border-white/10 pb-4">
                <SheetTitle className="text-white">Menu</SheetTitle>
              </SheetHeader>

              <nav className="flex flex-1 flex-col gap-6 px-4 pb-6">
                <div>
                  <p className="mb-2 px-3 text-xs font-medium uppercase tracking-widest text-white/50">
                    Navigation
                  </p>
                  <div className="flex flex-col gap-0.5">
                    <Link
                      href="/products"
                      className={mobileLinkClassName}
                      onClick={() => setMobileOpen(false)}
                    >
                      All Products
                    </Link>
                    {PRODUCTS.map((product) => (
                      <Link
                        key={product.id}
                        href={product.href}
                        className={mobileSubLinkClassName}
                        onClick={() => setMobileOpen(false)}
                      >
                        {product.label}
                      </Link>
                    ))}
                    {OTHER_LINKS.map((link) => (
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
