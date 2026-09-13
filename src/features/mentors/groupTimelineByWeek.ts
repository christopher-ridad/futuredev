import type { TimelineStep } from "@/types";

export type NumberedTimelineStep = TimelineStep & { number: number };

export type TimelineWeekGroup = {
  week: string;
  steps: NumberedTimelineStep[];
};

export function groupTimelineByWeek(steps: TimelineStep[]): TimelineWeekGroup[] {
  const groups: TimelineWeekGroup[] = [];

  steps.forEach((step, index) => {
    const numberedStep = { ...step, number: index + 1 };
    const currentGroup = groups.at(-1);
    if (currentGroup && currentGroup.week === step.week) {
      currentGroup.steps.push(numberedStep);
    } else {
      groups.push({ week: step.week, steps: [numberedStep] });
    }
  });

  return groups;
}
