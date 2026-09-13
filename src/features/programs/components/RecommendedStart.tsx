type RecommendedStartProps = {
  children: string;
};

export function RecommendedStart({ children }: RecommendedStartProps) {
  return (
    <div className="rounded-lg border border-accent-green/40 bg-background-raised px-5 py-4">
      <p className="text-sm">
        <span className="font-semibold text-accent-green">Recommended starting point: </span>
        <span className="text-foreground-muted">{children}</span>
      </p>
    </div>
  );
}
