import type { BuildPath } from "@/types";

export const buildPaths: BuildPath[] = [
  {
    id: "web",
    title: "A Website",
    emoji: "🌐",
    description:
      "Learn to build sites and web apps that run in the browser, from a static page to a full-stack project.",
    skills: ["HTML & CSS", "JavaScript fundamentals", "Responsive layout", "Working with APIs"],
    technologies: ["HTML/CSS", "JavaScript", "React", "Next.js"],
    workshops: ["Intro to Web Dev Workshop", "Building with React"],
    resources: [
      { label: "MDN Web Docs", url: "https://developer.mozilla.org" },
      { label: "The Odin Project", url: "https://www.theodinproject.com" },
      { label: "React documentation", url: "https://react.dev" },
    ],
    projectIdeas: [
      "A personal portfolio site",
      "A campus club or event finder",
      "A shared to-do list for study groups",
    ],
    relatedProjectIds: ["campus-eats"],
    recommendedStartingPoint:
      "Start with HTML & CSS, then build a personal portfolio site to practice what you've learned.",
  },
  {
    id: "mobile",
    title: "A Mobile App",
    emoji: "📱",
    description:
      "Build native-feeling apps for iOS and Android using modern cross-platform tooling.",
    skills: ["UI fundamentals", "Navigation & state", "Working with device APIs", "Shipping builds"],
    technologies: ["React Native", "Expo", "Swift"],
    workshops: ["Building Your First App", "From Prototype to App Store"],
    resources: [
      { label: "React Native documentation", url: "https://reactnative.dev" },
      { label: "Expo documentation", url: "https://docs.expo.dev" },
    ],
    projectIdeas: [
      "A habit or workout tracker",
      "A study-group matching app",
      "A campus events app with reminders",
    ],
    relatedProjectIds: ["studybuddy"],
    recommendedStartingPoint:
      "Get comfortable with JavaScript first, then follow the Expo docs to build and run your first app.",
  },
  {
    id: "game",
    title: "A Game",
    emoji: "🎮",
    description: "Design and build playable games, from a small prototype to a finished game jam entry.",
    skills: ["Game loops & physics", "Sprite/asset workflows", "Level design", "Player input"],
    technologies: ["Unity", "C#", "Godot"],
    workshops: ["Intro to Game Dev with Unity", "Game Jam Prep Night"],
    resources: [
      { label: "Unity Learn", url: "https://learn.unity.com" },
      { label: "Godot documentation", url: "https://docs.godotengine.org" },
    ],
    projectIdeas: [
      "A short platformer level",
      "A top-down dungeon crawler",
      "A local two-player party game",
    ],
    relatedProjectIds: ["pixel-dungeon-crawl"],
    recommendedStartingPoint:
      "Work through Unity Learn's beginner path, then build a short platformer level to practice.",
  },
  {
    id: "ai",
    title: "Something with AI",
    emoji: "🤖",
    description: "Explore machine learning and applied AI by building projects with real models and APIs.",
    skills: ["Python fundamentals", "Working with data", "Using ML/LLM APIs", "Model basics"],
    technologies: ["Python", "PyTorch", "OpenAI API"],
    workshops: ["Intro to Python for AI", "Building with LLM APIs"],
    resources: [
      { label: "Google's Machine Learning Crash Course", url: "https://developers.google.com/machine-learning/crash-course" },
      { label: "OpenAI API documentation", url: "https://platform.openai.com/docs" },
    ],
    projectIdeas: [
      "A study notes summarizer",
      "A chatbot for a specific topic you know well",
      "An image classifier for a hobby project",
    ],
    relatedProjectIds: ["notesum"],
    recommendedStartingPoint:
      "Get comfortable with Python, then try building a simple chatbot with the OpenAI API.",
  },
];
