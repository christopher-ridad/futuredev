import type { ArchivedMentor, BuildCategory } from "@/types";

export function groupMentorsByTrack(mentors: ArchivedMentor[]): Record<BuildCategory, ArchivedMentor[]> {
  const groups: Record<BuildCategory, ArchivedMentor[]> = {
    web: [],
    mobile: [],
    game: [],
    technical: [],
  };

  for (const mentor of mentors) {
    groups[mentor.track].push(mentor);
  }

  return groups;
}
