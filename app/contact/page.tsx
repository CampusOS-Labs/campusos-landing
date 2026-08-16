import { ContactForm } from "@/components/sections/contact-form";
import { createPageMetadata } from "@/lib/site";

const mono = {
  fontFamily: '"Lucida Console", Monaco, "Courier New", monospace',
} as const;

export const metadata = createPageMetadata({
  title: "Contact — talk to Blackboard",
  description:
    "Tell us what's breaking at your school. We'll help you fix billing, announcements, and operations.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="flex flex-1 flex-col items-center">
      <section className="w-full self-stretch bg-black text-white">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-3 px-4 py-20 text-center sm:gap-4 sm:px-6 sm:py-28 md:py-32 lg:px-8">
          <p className="text-sm font-medium tracking-wide text-white/35" style={mono}>
            Contact
          </p>
          <h1 className="max-w-2xl !font-sans text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl">
            tell us what&apos;s breaking
          </h1>
          <p className="mt-1 max-w-xl font-sans text-base leading-relaxed text-white sm:text-[1.05rem]">
            stop slowing your school down. get good at things that matter. let us help.
          </p>
        </div>
      </section>

      <section className="w-full self-stretch bg-white text-black">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-4 py-20 sm:px-6 sm:py-28 md:py-32 lg:px-8">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
