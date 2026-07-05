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

const OTHER_LINKS = [{ href: "/manifesto", label: "Manifesto" }] as const;

const mobileLinkClassName =
  "block rounded-none px-3 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-secondary";

const mobileSubLinkClassName =
  "block rounded-none px-3 py-2 pl-7 text-sm text-foreground/70 transition-colors hover:bg-secondary";

const desktopLinkClassName =
  "px-2.5 py-1.5 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground";

type NavbarCaseStudy = {
  slug: string;
  title: string;
};

export function Navbar({ caseStudies }: { caseStudies: NavbarCaseStudy[] }) {
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
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-105 p-2">
                    {PRODUCTS.map((product) => (
                      <li key={product.id}>
                        <NavigationMenuLink
                          href={product.href}
                          className="block rounded-xl p-3 transition-colors hover:bg-muted"
                        >
                          <div className="text-sm font-medium text-foreground">{product.label}</div>
                          <div className="mt-0.5 text-xs text-muted-foreground line-clamp-1">
                            {product.description}
                          </div>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {caseStudies.length > 0 && (
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Case Studies</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-105 p-2">
                      {caseStudies.map((cs) => (
                        <li key={cs.slug}>
                          <NavigationMenuLink
                            href={`/case-studies/${cs.slug}`}
                            className="block rounded-xl px-4 py-3 transition-colors hover:bg-muted"
                          >
                            <div className="text-sm font-medium text-foreground">{cs.title}</div>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              )}
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
                  <p className="mb-2 px-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
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
                    {caseStudies.length > 0 && (
                      <>
                        <Link
                          href="/case-studies"
                          className={mobileLinkClassName}
                          onClick={() => setMobileOpen(false)}
                        >
                          All Case Studies
                        </Link>
                        {caseStudies.map((cs) => (
                          <Link
                            key={cs.slug}
                            href={`/case-studies/${cs.slug}`}
                            className={mobileSubLinkClassName}
                            onClick={() => setMobileOpen(false)}
                          >
                            {cs.title}
                          </Link>
                        ))}
                      </>
                    )}
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
