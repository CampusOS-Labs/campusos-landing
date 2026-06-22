import { type PersonaDefinition } from "@/lib/products";
import { createPageMetadata } from "@/lib/site";

export function createPersonaMetadata(persona: PersonaDefinition) {
  return createPageMetadata({
    title: `CampusOS for ${persona.label}`,
    description: persona.subhead,
    path: persona.href,
  });
}
