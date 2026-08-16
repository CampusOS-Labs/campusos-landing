import { PersonaPageLayout } from "@/components/persona-page-layout";
import { createPersonaMetadata } from "@/lib/persona-metadata";
import { getPersonaById } from "@/lib/products";

const persona = getPersonaById("owners")!;

export const metadata = createPersonaMetadata(persona);

export default function ForOwnersPage() {
  return <PersonaPageLayout personaId="owners" />;
}
