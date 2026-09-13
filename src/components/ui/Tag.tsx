import type { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
};

export function Tag({ children }: TagProps) {
  return (
    <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground-muted">
      {children}
    </span>
  );
}
