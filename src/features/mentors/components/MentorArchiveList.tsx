import { buildPaths } from "@/content/buildPaths";
import { groupMentorsByTrack } from "@/features/mentors/groupMentorsByTrack";
import type { ArchivedMentor } from "@/types";

type MentorArchiveListProps = {
  mentors: ArchivedMentor[];
};

export function MentorArchiveList({ mentors }: MentorArchiveListProps) {
  const mentorsByTrack = groupMentorsByTrack(mentors);

  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {buildPaths.map((buildPath) => {
        const trackMentors = mentorsByTrack[buildPath.id];
        if (trackMentors.length === 0) return null;

        return (
          <div key={buildPath.id} className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground-muted">
              {buildPath.title}
            </h3>
            <ul className="flex flex-col gap-2">
              {trackMentors.map((mentor) => (
                <li
                  key={mentor.name}
                  className="flex flex-col gap-1 rounded-lg border border-border bg-background-raised px-4 py-3"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-foreground">{mentor.name}</span>
                    <span className="shrink-0 text-xs text-foreground-muted">
                      {mentor.seasons.join(", ")}
                    </span>
                  </div>
                  {mentor.outlineUrl && (
                    <a
                      href={mentor.outlineUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-fit text-xs text-accent-green hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-green"
                    >
                      View outline →
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
