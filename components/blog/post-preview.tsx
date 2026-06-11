import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
};

export function PostPreview({ title, date, excerpt, slug }: Props) {
  return (
    <article>
      <h2 className="text-2xl font-heading font-semibold tracking-tight">
        <Link href={`/blogs/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h2>
      <div className="mt-1 text-sm text-muted-foreground">
        <DateFormatter dateString={date} />
      </div>
      <p className="mt-2 text-muted-foreground leading-relaxed">{excerpt}</p>
    </article>
  );
}
