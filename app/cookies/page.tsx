import Link from "next/link";
import { NeumorphicButton } from "@/components/ui/NeumorphicButton";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Cookie Policy",
  description:
    "How CampusOS uses cookies and similar technologies on our website and school operations platform.",
  path: "/cookies",
});

const sections = [
  {
    title: "1. What Are Cookies",
    content: (
      <p>
        Cookies are small text files stored on your device when you visit a website
        or use a web application. They help sites remember preferences, keep you
        signed in, and support core functionality.
      </p>
    ),
  },
  {
    title: "2. Cookies We Use",
    content: (
      <>
        <p>CampusOS uses a limited set of cookies:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            <span className="font-medium text-foreground">Authentication cookies</span>{" "}
            — keep school staff signed in to the CampusOS dashboard
          </li>
          <li>
            <span className="font-medium text-foreground">Preference cookies</span>{" "}
            — remember UI settings such as sidebar state (expires after 7 days)
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "3. What We Do Not Use",
    content: (
      <p>
        We do not use third-party advertising cookies or analytics cookies on our
        marketing website or school operations platform.
      </p>
    ),
  },
  {
    title: "4. Managing Cookies",
    content: (
      <>
        <p>
          Most browsers let you block or delete cookies through their settings.
          Blocking authentication cookies may prevent you from signing in to the
          CampusOS dashboard.
        </p>
        <p className="mt-4">
          For more on how we handle personal information, see our{" "}
          <Link
            href="/privacy"
            className="underline underline-offset-2 transition-colors hover:text-foreground"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    title: "5. Contact",
    content: (
      <p>
        Questions about this Cookie Policy? Reach us through our{" "}
        <Link
          href="/contact"
          className="underline underline-offset-2 transition-colors hover:text-foreground"
        >
          contact page
        </Link>
        .
      </p>
    ),
  },
];

export default function Cookies() {
  return (
    <main className="flex flex-1 flex-col items-center px-6 pt-32 pb-24">
      <h1 className="max-w-3xl text-center font-heading text-6xl font-light leading-[1.05] tracking-tight">
        Cookie Policy
      </h1>
      <p className="mt-4 max-w-xl text-center text-lg text-muted-foreground">
        Last updated: June 12, 2026
      </p>

      <div className="mt-16 max-w-2xl space-y-10">
        <p className="leading-relaxed text-muted-foreground">
          This Cookie Policy explains how CampusOS, Inc. uses cookies and similar
          technologies when you visit our website or use our services.
        </p>

        {sections.map((section) => (
          <section key={section.title}>
            <div className="mb-8 h-px w-full bg-muted" />
            <h2 className="font-heading text-3xl font-light leading-[1.1] tracking-tight">
              {section.title}
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
              {section.content}
            </div>
          </section>
        ))}
      </div>

      <NeumorphicButton href="/contact" className="mt-16">
        Contact us
      </NeumorphicButton>
    </main>
  );
}
