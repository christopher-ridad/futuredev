import type { Project } from "@/types";

// Projects grounded in real deliverables from FutureDev mentor curricula
// (not real member submissions — replace with actual projects as they're built).
export const projects: Project[] = [
  {
    id: "personal-portfolio-site",
    name: "Personal Portfolio Site",
    description:
      "The first project every Web Dev mentee builds — a personal site used to practice HTML, CSS, and later JavaScript and React.",
    category: "web",
    technologies: ["HTML/CSS", "JavaScript"],
  },
  {
    id: "campus-clubs",
    name: "Campus Clubs",
    description:
      "A club messaging app for campus organizations, inspired by wanting a better GroupMe for clubs — a capstone from FutureDev's Advanced App Development track, built as a monorepo with a web and mobile app sharing the same backend.",
    category: "web",
    technologies: ["Next.js", "Expo", "Turborepo", "TypeScript"],
  },
  {
    id: "habit-tracker",
    name: "Habit Tracker",
    description:
      "A React Native app for building and tracking daily habits — one of the real project options from FutureDev's Mobile Dev track.",
    category: "mobile",
    technologies: ["React Native", "Expo", "AsyncStorage"],
  },
  {
    id: "loot-table-tool",
    name: "Custom Loot Table Tool",
    description:
      "A custom Unity Editor tool built with ScriptableObjects, letting designers configure loot probabilities without touching code — from FutureDev's Game Dev mentorship.",
    category: "game",
    technologies: ["Unity", "C#"],
  },
  {
    id: "glyphrender",
    name: "GlyphRender",
    description:
      "A small text-rendering engine built from scratch in OpenGL, using FreeType to turn font files into on-screen text — the capstone of FutureDev's text rendering course.",
    category: "game",
    technologies: ["C++", "OpenGL", "FreeType2"],
  },
];
