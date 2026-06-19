import {
  PersonaPageLayout,
  createPersonaMetadata,
} from "@/components/persona-page-layout";
import { getPersonaById } from "@/lib/products";

const persona = getPersonaById("teachers")!;

export const metadata = createPersonaMetadata(persona);

export default function ForTeachersPage() {
  return <PersonaPageLayout personaId="teachers" />;
}
