type AnchorQuickNavItem = {
  id: string;
  label: string;
};

type AnchorQuickNavProps = {
  items: AnchorQuickNavItem[];
  ariaLabel: string;
};

export function AnchorQuickNav({ items, ariaLabel }: AnchorQuickNavProps) {
  return (
    <nav aria-label={ariaLabel} className="flex flex-wrap gap-2">
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground-muted transition-colors hover:border-accent-green hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-green"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
