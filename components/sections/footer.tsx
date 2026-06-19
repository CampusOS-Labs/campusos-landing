import Link from "next/link";

import { PERSONAS, PRODUCTS } from "@/lib/products";

export function Footer() {
  return (
    <footer className="mt-0 py-12 md:py-14" style={{ backgroundColor: "#000000" }}>
      <div className="px-4 md:px-8">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-5 md:gap-10">
            <div>
              <p className="mb-2 text-[16px] text-white">Product</p>
              <div className="flex flex-col gap-1">
                {PRODUCTS.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="text-[16px] text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 text-[16px] text-white">For schools</p>
              <div className="flex flex-col gap-1">
                {PERSONAS.map((persona) => (
                  <Link
                    key={persona.id}
                    href={persona.href}
                    className="text-[16px] text-white/70 transition-colors hover:text-white"
                  >
                    {persona.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 text-[16px] text-white">Company</p>
              <div className="flex flex-col gap-1">
                <Link
                  href="/blogs"
                  className="text-[16px] text-white/70 transition-colors hover:text-white"
                >
                  Blog
                </Link>
                <Link
                  href="/manifesto"
                  className="text-[16px] text-white/70 transition-colors hover:text-white"
                >
                  Manifesto
                </Link>
                <Link
                  href="/contact"
                  className="text-[16px] text-white/70 transition-colors hover:text-white"
                >
                  Contact
                </Link>
                <Link
                  href="/values"
                  className="text-[16px] text-white/70 transition-colors hover:text-white"
                >
                  Values
                </Link>
                <Link
                  href="/team"
                  className="text-[16px] text-white/70 transition-colors hover:text-white"
                >
                  Team
                </Link>
              </div>
            </div>
            <div>
              <p className="mb-2 text-[16px] text-white">Follow</p>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[16px] text-white/70 transition-colors hover:text-white"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[16px] text-white/70 transition-colors hover:text-white"
              >
                X (Twitter)
              </a>
              <a
                href="https://www.instagram.com/usecampusos/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[16px] text-white/70 transition-colors hover:text-white"
              >
                Instagram
              </a>
            </div>
            <div>
              <p className="mb-2 text-[16px] text-white">Legal</p>
              <div className="flex flex-col gap-1">
                <Link
                  href="/privacy"
                  className="text-[16px] text-white/70 transition-colors hover:text-white"
                >
                  Privacy
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-10 flex items-end justify-between md:mt-20">
            <Link href="/" className="text-lg font-bold text-white">
              CampusOS
            </Link>
            <span className="text-[14px] text-white/40">© 2026 CampusOS, Inc.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
