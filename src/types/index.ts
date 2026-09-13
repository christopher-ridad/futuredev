export type BuildCategory = "web" | "mobile" | "game" | "technical";

export type ProjectCategory = BuildCategory;

export type Project = {
  id: string;
  name: string;
  description: string;
  category: ProjectCategory;
  technologies: string[];
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
  resources: BuildPathResource[];
  projectIdeas: string[];
  relatedProjectIds: string[];
};

export type ArchivedMentor = {
  name: string;
  track: BuildCategory;
  seasons: string[];
  // Link to the mentor's real curriculum outline, when available.
  outlineUrl?: string;
};

export type TimelineStep = {
  week: string;
  title: string;
  description: string;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  year: string;
  program: string;
  hometown: string;
  funFact: string;
  // Set once a real photo file is added under public/team/.
  photo?: string;
  // CSS object-position for the circular crop (e.g. "50% 20%"), tuned per photo
  // so the face is centered instead of the geometric center of the image.
  // Ignored when photoZoom is set (object-position is forced to center).
  photoPosition?: string;
  // Extra zoom (CSS scale factor) for full-body photos where the face is small.
  photoZoom?: number;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type GalleryPhoto = {
  src: string;
  alt: string;
};
