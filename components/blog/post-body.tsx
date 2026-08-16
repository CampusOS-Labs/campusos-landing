type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div
      className="blog-prose prose prose-lg mx-auto max-w-2xl font-sans text-black prose-headings:font-sans prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-black prose-p:font-sans prose-p:text-black/90 prose-li:font-sans prose-li:text-black/90 prose-strong:font-sans prose-strong:text-black prose-a:text-black prose-a:underline-offset-4 hover:prose-a:opacity-70 [&_h1]:!font-sans [&_h2]:!font-sans [&_h3]:!font-sans [&_h4]:!font-sans [&_h5]:!font-sans [&_h6]:!font-sans"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
