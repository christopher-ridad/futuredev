import type { Project } from "@/types";

// Placeholder projects — replace with real member submissions.
export const projects: Project[] = [
  {
    id: "campus-eats",
    name: "Campus Eats",
    description:
      "A web app for browsing dining hall menus and crowd-sourced wait times across campus.",
    category: "web",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: { repo: "https://github.com" },
  },
  {
    id: "studybuddy",
    name: "StudyBuddy",
    description:
      "A mobile app that matches students into study groups based on shared classes and availability.",
    category: "mobile",
    technologies: ["React Native", "Expo", "Firebase"],
    links: { repo: "https://github.com" },
  },
  {
    id: "pixel-dungeon-crawl",
    name: "Pixel Dungeon Crawl",
    description:
      "A 2D roguelike built during a game jam, with procedurally generated dungeon layouts.",
    category: "game",
    technologies: ["Unity", "C#"],
    links: { demo: "https://itch.io" },
  },
  {
    id: "notesum",
    name: "NoteSum",
    description:
      "An AI-powered tool that summarizes lecture notes and generates practice questions from them.",
    category: "ai",
    technologies: ["Python", "FastAPI", "OpenAI API"],
    links: { repo: "https://github.com" },
  },
];
