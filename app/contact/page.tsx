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
    <main className="flex flex-1 flex-col items-center px-6 pt-64 pb-24">
      <ContactForm />
    </main>
  );
}
