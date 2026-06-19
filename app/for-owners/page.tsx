import {
  PersonaPageLayout,
  createPersonaMetadata,
} from "@/components/persona-page-layout";
import { getPersonaById } from "@/lib/products";

const persona = getPersonaById("owners")!;

export const metadata = createPersonaMetadata(persona);

export default function ForOwnersPage() {
  return <PersonaPageLayout personaId="owners" />;
}
