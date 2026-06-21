import Link from "next/link";

import { PRODUCTS } from "@/lib/products";

export function Footer() {
  return (
    <footer className="mt-0 border-t border-border bg-background py-12 md:py-14">
      <div className="px-4 md:px-8">
        <div className="mx-auto max-w-275">
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-4 md:gap-10">
            <div>
              <p className="mb-2 text-base font-medium text-foreground">Product</p>
              <div className="flex flex-col gap-1">
                {PRODUCTS.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="text-base text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 text-base font-medium text-foreground">Company</p>
              <div className="flex flex-col gap-1">
                <Link
                  href="/blogs"
                  className="text-base text-muted-foreground transition-colors hover:text-foreground"
                >
                  Blog
                </Link>
                <Link
                  href="/manifesto"
                  className="text-base text-muted-foreground transition-colors hover:text-foreground"
                >
                  Manifesto
                </Link>
                <Link
                  href="/contact"
                  className="text-base text-muted-foreground transition-colors hover:text-foreground"
                >
                  Contact
                </Link>
                <Link
                  href="/values"
                  className="text-base text-muted-foreground transition-colors hover:text-foreground"
                >
                  Values
                </Link>
                <Link
                  href="/team"
                  className="text-base text-muted-foreground transition-colors hover:text-foreground"
                >
                  Team
                </Link>
              </div>
            </div>
            <div>
              <p className="mb-2 text-base font-medium text-foreground">Follow</p>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-base text-muted-foreground transition-colors hover:text-foreground"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-base text-muted-foreground transition-colors hover:text-foreground"
              >
                X (Twitter)
              </a>
              <a
                href="https://www.instagram.com/usecampusos/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-base text-muted-foreground transition-colors hover:text-foreground"
              >
                Instagram
              </a>
            </div>
            <div>
              <p className="mb-2 text-base font-medium text-foreground">Legal</p>
              <div className="flex flex-col gap-1">
                <Link
                  href="/privacy"
                  className="text-base text-muted-foreground transition-colors hover:text-foreground"
                >
                  Privacy
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-10 flex items-end justify-between md:mt-20">
            <Link href="/" className="font-heading text-lg font-normal tracking-[-0.02em] text-foreground">
              CampusOS
            </Link>
            <span className="text-sm text-muted-foreground">© 2026 CampusOS, Inc.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
