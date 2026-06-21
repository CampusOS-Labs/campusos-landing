"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { buttonVariants } from "@/components/ui/button";
import { PRODUCTS } from "@/lib/products";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full  bg-white/95 backdrop-blur-sm">
      <div className="flex h-16 items-center px-4 md:px-8">
        <Link href="/" className="shrink-0 font-heading text-lg tracking-[-0.02em]">
        <span className="font-sans font-bold ">CampusOS</span>
      </Link>
        <div className="flex flex-1 justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-muted-foreground">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[500px] gap-1 p-4 md:grid-cols-2">
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
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/blogs"
                  className="px-2.5 py-1.5 text-sm font-medium text-muted-foreground"
                >
                  Blog
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/case-studies"
                  className="px-2.5 py-1.5 text-sm font-medium text-muted-foreground"
                >
                  Case Studies
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/manifesto"
                  className="px-2.5 py-1.5 text-sm font-medium text-muted-foreground"
                >
                  Manifesto
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <Link href="/contact" className={buttonVariants({ variant: "secondary", size: "sm" })}>
            Contact
          </Link>
          <Link href="/contact" className={buttonVariants({ variant: "default", size: "sm" })}>
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}
