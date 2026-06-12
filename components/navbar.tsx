"use client"

import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { NeumorphicButton } from "@/components/ui/NeumorphicButton"
import { cn } from "@/lib/utils"

const solutions = [
  { title: "Billing Infrastructure", href: "/solutions/billing-infrastructure", description: "End-to-end fee collection and reconciliation for schools" },
  { title: "Announcements", href: "/solutions/announcements", description: "School-wide and personalized announcements delivered instantly" },
  { title: "Social Media", href: "/solutions/socials", description: "Manage your social media outreach, growth, and more" },
  { title: "Everything else", href: "/contact", description: "If an existing tool isn't good enought, contact us" }
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4 md:px-8">
        <Link href="/" className="font-bold text-lg shrink-0">
          CampusOS
        </Link>
        <div className="flex-1 flex justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="/blogs" className="px-2.5 py-1.5 text-sm font-medium text-muted-foreground">
                  Blog
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/case-studies" className="px-2.5 py-1.5 text-sm font-medium text-muted-foreground">
                  Case Studies
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-muted-foreground">Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[500px] gap-1 p-4 md:grid-cols-2">
                    {solutions.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink
                          href={item.href}
                          className={cn(
                            "block select-none p-3 leading-none no-underline outline-none transition-colors hover:bg-muted focus:bg-muted"
                          )}
                        >
                          <div className="text-sm font-medium leading-none">{item.title}</div>
                          <p className="line-clamp-2 mt-1 text-sm leading-snug text-muted-foreground">
                            {item.description}
                          </p>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/manifesto" className="px-2.5 py-1.5 text-sm font-medium text-muted-foreground">
                  Manifesto
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <NeumorphicButton href="/contact" compact>
          Contact
        </NeumorphicButton>
      </div>
    </header>
  )
}
