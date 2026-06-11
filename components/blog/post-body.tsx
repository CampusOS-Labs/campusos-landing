type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div
      className="prose prose-lg max-w-2xl mx-auto"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
