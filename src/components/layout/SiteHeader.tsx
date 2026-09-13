"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { externalLinks, mainNavLinks, siteConfig } from "@/constants/site";

// The logo already links home, so the primary nav skips the explicit "Home" entry
// (the footer still shows it via the full mainNavLinks list). Anchor links (the
// homepage sections) cluster near the logo; real standalone pages like Mentors
// cluster near the CTA button, so the two kinds of links read as visually distinct.
const headerNavLinks = mainNavLinks.filter((link) => link.href !== "/");
const anchorNavLinks = headerNavLinks.filter((link) => link.href.includes("#"));
const pageNavLinks = headerNavLinks.filter((link) => !link.href.includes("#"));

type NavLinkProps = {
  href: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
  className?: string;
};

function NavLink({ href, label, isActive, onClick, className = "" }: NavLinkProps) {
  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      onClick={onClick}
      className={`text-sm font-medium transition-colors hover:text-accent-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-green ${
        isActive ? "text-accent-green" : "text-foreground-muted"
      } ${className}`}
    >
      {label}
    </Link>
  );
}

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="font-mono text-lg font-semibold tracking-tight text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-green"
            onClick={() => setIsMenuOpen(false)}
          >
            {siteConfig.name}
          </Link>

          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {anchorNavLinks.map((link) => (
                <li key={link.href}>
                  <NavLink href={link.href} label={link.label} isActive={pathname.startsWith(link.href)} />
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <nav aria-label="Pages">
            <ul className="flex items-center gap-8">
              {pageNavLinks.map((link) => (
                <li key={link.href}>
                  <NavLink href={link.href} label={link.label} isActive={pathname.startsWith(link.href)} />
                </li>
              ))}
            </ul>
          </nav>
          <Button href={externalLinks.discord} variant="primary" external>
            Join FutureDev
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-border p-2 text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-green md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="sr-only">Toggle navigation menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {isMenuOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border md:hidden">
          <ul className="flex flex-col gap-1 px-4 py-4 sm:px-6">
            {anchorNavLinks.map((link) => (
              <li key={link.href}>
                <NavLink
                  href={link.href}
                  label={link.label}
                  isActive={pathname.startsWith(link.href)}
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-md px-3 py-2"
                />
              </li>
            ))}
            <li className="my-2 border-t border-border" aria-hidden="true" />
            {pageNavLinks.map((link) => (
              <li key={link.href}>
                <NavLink
                  href={link.href}
                  label={link.label}
                  isActive={pathname.startsWith(link.href)}
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-md px-3 py-2"
                />
              </li>
            ))}
            <li className="pt-2">
              <Button href={externalLinks.discord} variant="primary" className="w-full" external>
                Join FutureDev
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
