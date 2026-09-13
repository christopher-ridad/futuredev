import Link from "next/link";
import { externalLinks, mainNavLinks, siteConfig } from "@/constants/site";
import { PageContainer } from "@/components/ui/PageContainer";

const communityLinks = [
  { label: "Discord", href: externalLinks.discord, external: true },
  { label: "Instagram", href: externalLinks.instagram, external: true },
  { label: "Mailing List", href: externalLinks.mailingList, external: true },
  { label: "Linktree", href: externalLinks.linktree, external: true },
  { label: "Contact", href: `mailto:${externalLinks.contactEmail}`, external: false },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <PageContainer className="flex flex-col gap-8 py-12 sm:flex-row sm:justify-between">
        <div className="flex flex-col gap-2">
          <span className="font-mono text-lg font-semibold text-foreground">
            {siteConfig.name}
          </span>
          <p className="max-w-sm text-sm text-foreground-muted">{siteConfig.description}</p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:gap-16">
          <nav aria-label="Footer site">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-foreground-muted">
              Site
            </h3>
            <ul className="flex flex-col gap-2">
              {mainNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-muted transition-colors hover:text-accent-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-green"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer community">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-foreground-muted">
              Community
            </h3>
            <ul className="flex flex-col gap-2">
              {communityLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-foreground-muted transition-colors hover:text-accent-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-green"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </PageContainer>
    </footer>
  );
}
