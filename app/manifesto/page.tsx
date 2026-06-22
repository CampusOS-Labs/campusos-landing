import { getManifesto } from "@/lib/manifesto";
import markdownToHtml from "@/lib/markdownToHtml";
import { notFound } from "next/navigation";
import { createPageMetadata } from "@/lib/site";

export async function generateMetadata() {
  const manifesto = getManifesto();

  if (!manifesto) {
    return createPageMetadata({
      title: "Manifesto",
      path: "/manifesto",
    });
  }

  return createPageMetadata({
    title: "Manifesto",
    description: manifesto.data.description,
    path: "/manifesto",
  });
}

export default async function ManifestoPage() {
  const manifesto = getManifesto();

  if (!manifesto) notFound();

  const content = await markdownToHtml(manifesto.content);

  return (
    <>
      <main className="flex flex-1 flex-col items-center px-4 pt-24 sm:px-6 sm:pt-32">
        <p className="text-eyebrow">
          Manifesto
        </p>
        <h1 className="mt-4 max-w-3xl text-center text-display">
          {manifesto.data.title}
        </h1>
        <p className="mt-4 max-w-xl text-center text-lead">
          {manifesto.data.description}
        </p>

        <div className="mt-10 w-full max-w-2xl p-4 sm:mt-16 sm:p-8 md:p-12">
          <div
            className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-light prose-headings:tracking-tight"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </main>
    </>
  );
}
