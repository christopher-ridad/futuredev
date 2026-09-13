export const siteConfig = {
  name: "FutureDev",
  tagline: "Build the things you wish existed.",
  description:
    "FutureDev is a student community where members learn web, mobile, game, and AI development by building real projects alongside other developers.",
  // Set NEXT_PUBLIC_SITE_URL in production (e.g. on Vercel) once the site has a real domain.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export const mainNavLinks = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "Projects", href: "/projects" },
  { label: "Events", href: "/events" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
] as const;

export const externalLinks = {
  discord: "https://discord.gg/hKTTRRVbHb",
  instagram: "https://www.instagram.com/nufuturedev",
  linktree: "https://linktr.ee/nufuturedev",
} as const;
