import { PersonaPageLayout } from "@/components/persona-page-layout";
import { createPersonaMetadata } from "@/lib/persona-metadata";
import { getPersonaById } from "@/lib/products";

const persona = getPersonaById("teachers")!;

export const metadata = createPersonaMetadata(persona);

export default function ForTeachersPage() {
  return <PersonaPageLayout personaId="teachers" />;
}
