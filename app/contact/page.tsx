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
    <main className="flex flex-1 flex-col items-center px-6 pt-32 pb-24">
      <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
        Contact
      </p>
      <h1 className="mt-4 max-w-3xl text-center font-heading text-6xl font-light leading-[1.05] tracking-tight">
        Tell us what&apos;s breaking
      </h1>
      <p className="mt-4 max-w-xl text-center text-lg text-muted-foreground">
        We&apos;ll help you fix your school.
      </p>
      <div className="mt-16 w-full">
        <ContactForm />
      </div>
    </main>
  );
}
