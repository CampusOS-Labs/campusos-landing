import { PersonaPageLayout } from "@/components/persona-page-layout";
import { createPersonaMetadata } from "@/lib/persona-metadata";
import { getPersonaById } from "@/lib/products";

const persona = getPersonaById("admins")!;

export const metadata = createPersonaMetadata(persona);

export default function ForAdminsPage() {
  return <PersonaPageLayout personaId="admins" />;
}
