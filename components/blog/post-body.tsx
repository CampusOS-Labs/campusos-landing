type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div
      className="prose prose-lg mx-auto max-w-2xl text-foreground prose-headings:text-foreground prose-p:text-foreground/90 prose-li:text-foreground/90 prose-strong:text-foreground prose-a:text-foreground prose-a:underline-offset-4 hover:prose-a:text-foreground/80 dark:prose-invert dark:prose-headings:text-foreground dark:prose-p:text-foreground/90 dark:prose-li:text-foreground/90 dark:prose-strong:text-foreground dark:prose-a:text-foreground"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
