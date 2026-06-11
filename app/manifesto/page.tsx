import { getManifesto } from "@/lib/manifesto";
import markdownToHtml from "@/lib/markdownToHtml";

export default async function Manifesto() {
  const manifesto = getManifesto();

  if (!manifesto) return null;

  const content = await markdownToHtml(manifesto.content);

  return (
    <main className="flex-1 flex flex-col items-center pt-32 px-6">
      <h1 className="text-6xl font-light tracking-tight text-center max-w-3xl font-heading leading-[1.05]">
        {manifesto.data.title}
      </h1>
      <p className="mt-4 text-center text-lg text-muted-foreground max-w-xl">
        {manifesto.data.description}
      </p>
      <div
        className="mt-16 max-w-2xl prose prose-lg"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </main>
  );
}
