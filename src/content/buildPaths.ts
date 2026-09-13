import type { BuildPath } from "@/types";

// Content grounded in FutureDev's actual mentor-group curricula (Web Dev, Mobile Dev,
// Game Dev, and LeetCode/Recruitment Foundations outlines).
export const buildPaths: BuildPath[] = [
  {
    id: "web",
    title: "Web Development",
    emoji: "🌐",
    description:
      "Learn to build sites and web apps that run in the browser, from a static personal page to a full-stack project with a real backend.",
    skills: [
      "HTML & CSS",
      "Flexbox layout & responsive design",
      "JavaScript fundamentals & the DOM",
      "React components, props & state",
      "Fetching data from APIs",
      "Git & GitHub workflow",
    ],
    technologies: ["HTML/CSS", "JavaScript", "React", "Vite", "Git/GitHub"],
    resources: [
      { label: "MDN Web Docs", url: "https://developer.mozilla.org" },
      { label: "React documentation", url: "https://react.dev" },
      { label: "Vite documentation", url: "https://vite.dev" },
    ],
    projectIdeas: [
      "A personal portfolio site",
      "A calendar or to-do list app",
      "A study tool like flashcards",
    ],
    relatedProjectIds: ["personal-portfolio-site", "campus-clubs"],
  },
  {
    id: "mobile",
    title: "Mobile Development",
    emoji: "📱",
    description:
      "Build a real mobile app for iOS and Android with React Native, from your first screen to an app you can install on your phone.",
    skills: [
      "React Native fundamentals",
      "Building UIs with reusable components",
      "Navigation between screens",
      "Managing state & user input",
      "Persisting data locally",
    ],
    technologies: ["React Native", "Expo", "TypeScript"],
    resources: [
      { label: "React Native documentation", url: "https://reactnative.dev" },
      { label: "Expo documentation", url: "https://docs.expo.dev" },
    ],
    projectIdeas: ["A personal journal", "A habit tracker", "A recipe book", "An expense tracker"],
    relatedProjectIds: ["habit-tracker"],
  },
  {
    id: "game",
    title: "Game Development",
    emoji: "🎮",
    description:
      "Design and build playable games in Unity, from your first GameObject to a finished, playtested prototype.",
    skills: [
      "GameObjects, Components & Prefabs",
      "Input, camera & physics",
      "Animation & state machines",
      "Game design & rapid prototyping",
      "Playtesting & iterating on feedback",
    ],
    technologies: ["Unity", "C#"],
    resources: [
      { label: "Unity Learn", url: "https://learn.unity.com" },
      { label: "LearnOpenGL (for graphics-curious devs)", url: "https://learnopengl.com" },
    ],
    projectIdeas: [
      "A small prototype built around one core mechanic",
      "A short platformer level",
      "A top-down dungeon crawler",
    ],
    relatedProjectIds: ["loot-table-tool", "glyphrender"],
  },
  {
    id: "technical",
    title: "Technical Development",
    emoji: "💻",
    description:
      "Sharpen the core engineering skills behind everything else: data structures, algorithms, and how to talk about your work in interviews.",
    skills: [
      "Arrays, strings, sets & hashing",
      "Two pointers, sliding window & binary search",
      "Linked lists, stacks, queues, trees & graphs",
      "Behavioral interview storytelling (STAR method)",
    ],
    technologies: ["Python", "C++"],
    resources: [{ label: "LeetCode", url: "https://leetcode.com" }],
    projectIdeas: [
      "A tracker for LeetCode problems solved by pattern",
      "A mock interview with a friend using the STAR method",
    ],
    relatedProjectIds: [],
  },
];
