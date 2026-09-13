export type BuildCategory = "web" | "mobile" | "game" | "ai";

export type ProjectCategory = BuildCategory;

export type ProjectLinks = {
  demo?: string;
  repo?: string;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  category: ProjectCategory;
  technologies: string[];
  links?: ProjectLinks;
};

export type EventCategory =
  | "workshop"
  | "social"
  | "project-session"
  | "speaker"
  | "hackathon";

// Named FutureDevEvent (not Event) to avoid shadowing the DOM Event type.
export type FutureDevEvent = {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: EventCategory;
  registrationUrl?: string;
};

export type BuildPathResource = {
  label: string;
  url: string;
};

export type BuildPath = {
  id: BuildCategory;
  title: string;
  emoji: string;
  description: string;
  skills: string[];
  technologies: string[];
  workshops: string[];
  resources: BuildPathResource[];
  projectIdeas: string[];
  relatedProjectIds: string[];
  recommendedStartingPoint: string;
};

export type LearningStage = {
  title: string;
  description: string;
  skills: string[];
  resources: BuildPathResource[];
  workshops: string[];
  practiceProjectIdeas: string[];
};

export type LearningPath = {
  id: BuildCategory;
  title: string;
  description: string;
  stages: LearningStage[];
};
