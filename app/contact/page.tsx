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
    <main className="flex-1 flex flex-col items-center pt-64 pb-24">
      <ContactForm />
    </main>
  );
}
