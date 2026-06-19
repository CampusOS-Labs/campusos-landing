import {
  PersonaPageLayout,
  createPersonaMetadata,
} from "@/components/persona-page-layout";
import { getPersonaById } from "@/lib/products";

const persona = getPersonaById("admins")!;

export const metadata = createPersonaMetadata(persona);

export default function ForAdminsPage() {
  return <PersonaPageLayout personaId="admins" />;
}
