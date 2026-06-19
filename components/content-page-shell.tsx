import type { ReactNode } from "react";

type ContentPageShellProps = {
  label?: string;
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  fullWidth?: boolean;
};

export function ContentPageShell({
  label,
  title,
  description,
  children,
  fullWidth = false,
}: ContentPageShellProps) {
  return (
    <main
      className={`flex flex-1 flex-col items-center px-6 pt-32 ${fullWidth ? "w-full" : ""}`}
    >
      {label ? (
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {label}
        </p>
      ) : null}
      <h1
        className={`${label ? "mt-4" : ""} max-w-3xl text-center font-heading text-6xl font-light leading-[1.05] tracking-tight`}
      >
        {title}
      </h1>
      {description ? (
        <p className="mt-4 max-w-xl text-center text-lg text-muted-foreground">{description}</p>
      ) : null}
      <div className={`mt-16 w-full ${fullWidth ? "" : "max-w-5xl"}`}>{children}</div>
    </main>
  );
}
