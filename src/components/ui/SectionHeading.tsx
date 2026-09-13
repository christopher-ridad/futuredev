type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  as: HeadingTag = "h2",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow && (
        <span className="font-mono text-xs uppercase tracking-widest text-accent-green">
          {eyebrow}
        </span>
      )}
      <HeadingTag className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </HeadingTag>
      {subtitle && (
        <p className="max-w-2xl text-base text-foreground-muted">{subtitle}</p>
      )}
    </div>
  );
}
