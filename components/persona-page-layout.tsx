import { MockUiFrame } from "@/components/ui/mock-ui-frame";
import { NeumorphicButton } from "@/components/ui/NeumorphicButton";
import { getPersonaById, type PersonaDefinition } from "@/lib/products";
import { createPageMetadata } from "@/lib/site";
import { notFound } from "next/navigation";

type PersonaPageProps = {
  personaId: string;
};

export function createPersonaMetadata(persona: PersonaDefinition) {
  return createPageMetadata({
    title: `CampusOS for ${persona.label}`,
    description: persona.subhead,
    path: persona.href,
  });
}

export function PersonaPageLayout({ personaId }: PersonaPageProps) {
  const persona = getPersonaById(personaId);
  if (!persona) notFound();

  return (
    <main className="flex flex-1 flex-col items-center px-6 pt-32">
      <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
        For {persona.label.toLowerCase()}
      </p>
      <h1 className="mt-4 max-w-3xl text-center font-heading text-6xl font-light leading-[1.05] tracking-tight">
        {persona.headline}
      </h1>
      <p className="mt-4 max-w-xl text-center text-lg text-muted-foreground">{persona.subhead}</p>
      <NeumorphicButton href="/contact" className="mt-8">
        Contact us
      </NeumorphicButton>

      <div className="mt-16 w-full max-w-4xl">
        <MockUiFrame variant={persona.mockVariant}  className="min-h-[300px]" />
      </div>

      <div className="mt-24 w-full max-w-3xl border border-border">
        <div className="border-b border-border px-8 py-6">
          <h2 className="font-heading text-3xl font-light tracking-tight">
            What {persona.label.toLowerCase()} use CampusOS for
          </h2>
        </div>
        {persona.useCases.map((item, index) => (
          <div
            key={item}
            className={`flex gap-4 px-8 py-6 ${
              index < persona.useCases.length - 1 ? "border-b border-border" : ""
            }`}
          >
            <span className="font-heading text-2xl font-light tabular-nums text-muted-foreground">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 grid w-full max-w-5xl grid-cols-1 gap-0 border border-border md:grid-cols-3">
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
            <h3 className="mt-2 font-heading text-2xl font-light">{step.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
          </div>
        ))}
      </div>

    </main>
  );
}
