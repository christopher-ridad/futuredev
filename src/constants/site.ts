export const siteConfig = {
  name: "FutureDev",
  tagline: "Build the things you wish existed.",
  description:
    "FutureDev is a Northwestern student community, founded in 2024, where members explore web development, mobile app creation, game production, and other tech skills by building real projects in small mentor-guided pods.",
  // Set NEXT_PUBLIC_SITE_URL in production (e.g. on Vercel) once the site has a real domain.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

// "Home" is kept here for the footer and sitemap, but SiteHeader filters it
// out of the primary nav since the logo already links home.
export const mainNavLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Programs", href: "/#get-started" },
  { label: "Apply", href: "/#mentorship" },
  { label: "Team", href: "/#team" },
  { label: "Mentors", href: "/mentors" },
  { label: "FAQ", href: "/#faq" },
] as const;

export const externalLinks = {
  discord: "https://discord.gg/hKTTRRVbHb",
  instagram: "https://www.instagram.com/nufuturedev",
  linktree: "https://linktr.ee/nufuturedev",
  // Mentor Interest Form, Fall 2026.
  mentorApplication:
    "https://docs.google.com/forms/d/e/1FAIpQLSc2i0TIpbqTaiAs5YmnRqgrSQODHwQTzHpS7gi0fXpJikyB1A/viewform?usp=publish-editor",
  mailingList:
    "https://docs.google.com/forms/d/e/1FAIpQLScf6d8xhdLYJaJJCgZCeJr9bgTfhX0dM5xV3OywhDGA4yupfA/viewform?usp=sharing",
  contactEmail: "nufuturedev@gmail.com",
} as const;
