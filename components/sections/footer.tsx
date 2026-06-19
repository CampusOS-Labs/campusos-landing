import Link from "next/link"

const solutions = [
  { title: "Billing Infrastructure", href: "/solutions/billing-infrastructure" },
  { title: "Announcements", href: "/solutions/announcements" },
  { title: "Attendance", href: "/solutions/attendance" },
  { title: "Social Media", href: "/solutions/socials" },
]

export function Footer() {
  return (
    <footer className="mt-16 md:mt-24 py-12 md:py-14" style={{ backgroundColor: "#000000" }}>
      <div className="px-4 md:px-8">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-4 md:gap-10">
            <div>
              <p className="text-[16px] text-white mb-2">Product</p>
              <div className="flex flex-col gap-1">
                {solutions.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="text-[16px] text-white/70 hover:text-white transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[16px] text-white mb-2">Company</p>
              <div className="flex flex-col gap-1">
                <Link href="/blogs" className="text-[16px] text-white/70 hover:text-white transition-colors">
                  Blog
                </Link>
                <Link href="/manifesto" className="text-[16px] text-white/70 hover:text-white transition-colors">
                  Manifesto
                </Link>
                <Link href="/contact" className="text-[16px] text-white/70 hover:text-white transition-colors">
                  Contact
                </Link>
                <Link href="/values" className="text-[16px] text-white/70 hover:text-white transition-colors">
                  Values
                </Link>
                <Link href="/team" className="text-[16px] text-white/70 hover:text-white transition-colors">
                 Team
                </Link>
              </div>
            </div>
            <div>
              <p className="text-[16px] text-white mb-2">Follow</p>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[16px] text-white/70 hover:text-white transition-colors block"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[16px] text-white/70 hover:text-white transition-colors block"
              >
                X (Twitter)
              </a>
              <a
                href="https://www.instagram.com/usecampusos/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[16px] text-white/70 hover:text-white transition-colors block"
              >
                Instagram
              </a>
            </div>
            <div>
              <p className="text-[16px] text-white mb-2">Legal</p>
              <div className="flex flex-col gap-1">
                <Link href="/privacy" className="text-[16px] text-white/70 hover:text-white transition-colors">
                  Privacy
                </Link>
                <Link href="/cookies" className="text-[16px] text-white/70 hover:text-white transition-colors">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-10 md:mt-20 flex items-end justify-between">
            <Link href="/" className="font-bold text-lg text-white">
              CampusOS
            </Link>
            <span className="text-[14px] text-white/40">© 2026 CampusOS, Inc.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
