import { type Author } from "@/interfaces/author";
import { cn } from "@/lib/utils";

import DateFormatter from "./date-formatter";

const mono = {
  fontFamily: '"Lucida Console", Monaco, "Courier New", monospace',
} as const;

type Props = {
  author: Author;
  date: string;
  className?: string;
};

export function PostMeta({ author, date, className }: Props) {
  return (
    <p
      className={cn("text-sm font-medium tracking-wide text-black/35", className)}
      style={mono}
    >
      <span>{author.name}</span>
      <span aria-hidden="true"> · </span>
      <DateFormatter dateString={date} />
    </p>
  );
}
