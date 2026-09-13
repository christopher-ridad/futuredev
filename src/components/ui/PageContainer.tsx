import type { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function PageContainer({ children, className = "", id }: PageContainerProps) {
  return (
    <div id={id} className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
