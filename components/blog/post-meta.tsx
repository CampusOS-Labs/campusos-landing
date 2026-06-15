import { type Author } from "@/interfaces/author";

import DateFormatter from "./date-formatter";

type Props = {
  author: Author;
  date: string;
};

export function PostMeta({ author, date }: Props) {
  return (
    <div className="mt-4 text-sm text-muted-foreground">
      <span className="font-medium text-foreground">{author.name}</span>
      <span aria-hidden="true"> · </span>
      <DateFormatter dateString={date} />
    </div>
  );
}
