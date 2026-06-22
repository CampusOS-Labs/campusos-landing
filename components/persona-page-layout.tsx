import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { getPersonaById } from "@/lib/products";
import { notFound } from "next/navigation";

type PersonaPageProps = {
  personaId: string;
};

export function PersonaPageLayout({ personaId }: PersonaPageProps) {
  const persona = getPersonaById(personaId);
  if (!persona) notFound();

  return (
    <main className="flex flex-1 flex-col items-center px-4 pt-24 sm:px-6 sm:pt-32">
      <p className="text-eyebrow">For {persona.label.toLowerCase()}</p>
      <h1 className="mt-4 max-w-3xl text-center text-display">
        {persona.headline}
      </h1>
      <p className="mt-5 max-w-xl text-center text-lead">{persona.subhead}</p>
      <Link href="/contact" className={`${buttonVariants({ size: "lg" })} mt-8`}>
        Contact us
      </Link>

      <div className="mt-16 w-full max-w-3xl surface-panel sm:mt-24">
        <div className="border-b border-border px-5 py-5 sm:px-8 sm:py-6">
          <h2 className="text-h2 sm:text-3xl">
            What {persona.label.toLowerCase()} use CampusOS for
          </h2>
        </div>
        {persona.useCases.map((item, index) => (
          <div
            key={item}
            className={`flex gap-4 px-5 py-5 sm:px-8 sm:py-6 ${
              index < persona.useCases.length - 1 ? "border-b border-border" : ""
            }`}
          >
            <span className="font-heading text-2xl font-normal tabular-nums text-muted-foreground">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="text-body-sm">{item}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 grid w-full max-w-5xl grid-cols-1 gap-0 surface-panel md:grid-cols-3">
        {[
          { step: "01", title: "Connect", text: "WhatsApp, payments, your existing tools." },
          { step: "02", title: "Audit", text: "See what's broken before term-end fires." },
          { step: "03", title: "Run", text: "One workflow live in under a week." },
        ].map((step, index) => (
          <div
            key={step.step}
            className={`p-8 ${index < 2 ? "md:border-r md:border-border" : ""} ${
              index > 0 ? "border-t md:border-t-0 border-border" : ""
            }`}
          >
            <span className="text-xs text-muted-foreground">{step.step}</span>
            <h3 className="mt-2 text-h3">{step.title}</h3>
            <p className="text-body-sm mt-2">{step.text}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
