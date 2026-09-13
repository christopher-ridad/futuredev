import { groupTimelineByWeek } from "@/features/mentors/groupTimelineByWeek";
import type { TimelineStep } from "@/types";

type ApplicationTimelineProps = {
  steps: TimelineStep[];
};

export function ApplicationTimeline({ steps }: ApplicationTimelineProps) {
  const weekGroups = groupTimelineByWeek(steps);

  return (
    <div className="flex flex-col gap-10">
      {weekGroups.map((group, groupIndex) => (
        <div key={`${groupIndex}-${group.week}`} className="flex flex-col gap-4">
          <h3 className="font-mono text-xs uppercase tracking-widest text-accent-green">
            {group.week}
          </h3>
          <ol className="flex flex-col">
            {group.steps.map((step, indexInGroup) => {
              const isLastInGroup = indexInGroup === group.steps.length - 1;

              return (
                <li key={step.number} className="relative flex gap-5 pb-8">
                  {!isLastInGroup && (
                    <span
                      aria-hidden="true"
                      className="absolute top-9 left-[15px] h-[calc(100%-2rem)] w-px bg-border"
                    />
                  )}
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border font-mono text-sm text-foreground-muted"
                  >
                    {step.number}
                  </span>
                  <div className="flex flex-col gap-1 pt-0.5">
                    <h4 className="text-base font-semibold text-foreground">{step.title}</h4>
                    <p className="text-sm text-foreground-muted">{step.description}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      ))}
    </div>
  );
}
