import Link from "next/link";
import DateFormatter from "./date-formatter";

const mono = {
  fontFamily: '"Lucida Console", Monaco, "Courier New", monospace',
} as const;

type Props = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  number?: string;
};

export function PostPreview({ title, date, excerpt, slug, number }: Props) {
  return (
    <article className="flex w-full max-w-2xl flex-col items-center gap-3 text-center sm:gap-4">
      {number ? (
        <p className="text-sm font-medium tracking-wide text-black/35" style={mono}>
          {number}
        </p>
      ) : null}
      <h2 className="!font-sans text-3xl font-bold leading-[1.15] tracking-tight text-black sm:text-4xl">
        <Link href={`/blogs/${slug}`} className="transition-opacity hover:opacity-70">
          {title}
        </Link>
      </h2>
      <p className="text-sm font-medium tracking-wide text-black/35" style={mono}>
        <DateFormatter dateString={date} />
      </p>
      <p className="mt-1 max-w-xl font-sans text-base leading-relaxed text-black sm:text-[1.05rem]">
        {excerpt}
      </p>
    </article>
  );
}
