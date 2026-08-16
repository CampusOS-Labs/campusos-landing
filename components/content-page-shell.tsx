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
      className={`flex flex-1 flex-col items-center px-4 pt-24 sm:px-6 sm:pt-32 ${fullWidth ? "w-full" : ""}`}
    >
      {label ? <p className="text-eyebrow">{label}</p> : null}
      <h1 className={`${label ? "mt-4" : ""} max-w-3xl text-center text-display`}>{title}</h1>
      {description ? <p className="mt-5 max-w-xl text-center text-lead">{description}</p> : null}
      <div className={`mt-10 w-full sm:mt-16 ${fullWidth ? "" : "max-w-5xl"}`}>{children}</div>
    </main>
  );
}
