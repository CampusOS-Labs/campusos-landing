import { ContactForm } from "@/components/sections/contact-form";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Tell us what's breaking at your school. We'll help you fix billing, announcements, and operations.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="flex flex-1 flex-col items-center px-4 pt-24 pb-16 sm:px-6 sm:pt-32 sm:pb-24">
      <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
        Contact
      </p>
      <h1 className="mt-4 max-w-3xl text-center font-heading text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
        Tell us what&apos;s breaking
      </h1>
      <p className="mt-4 max-w-xl text-center text-base text-muted-foreground sm:text-lg">
        We&apos;ll help you fix your school.
      </p>
      <div className="mt-10 w-full sm:mt-16">
        <ContactForm />
      </div>
    </main>
  );
}
