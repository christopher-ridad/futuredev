import { Tag } from "@/components/ui/Tag";
import type { LearningStage } from "@/types";

type LearningPathStageProps = {
  stage: LearningStage;
  stageNumber: number;
  isLast: boolean;
};

export function LearningPathStage({ stage, stageNumber, isLast }: LearningPathStageProps) {
  return (
    <li className="relative flex gap-5 pb-10">
      {!isLast && (
        <span
          aria-hidden="true"
          className="absolute top-9 left-[15px] h-[calc(100%-2rem)] w-px bg-border"
        />
      )}
      <span
        aria-hidden="true"
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent-green font-mono text-sm text-accent-green"
      >
        {stageNumber}
      </span>

      <div className="flex flex-1 flex-col gap-3 pt-0.5">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{stage.title}</h3>
          <p className="text-sm text-foreground-muted">{stage.description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {stage.skills.map((skill) => (
            <Tag key={skill}>{skill}</Tag>
          ))}
        </div>

        <ul className="flex flex-col gap-1 text-sm">
          {stage.resources.map((resource) => (
            <li key={resource.url}>
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-green hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-green"
              >
                {resource.label}
              </a>
            </li>
          ))}
        </ul>

        {stage.practiceProjectIdeas.length > 0 && (
          <p className="text-sm text-foreground-muted">
            <span className="font-medium text-foreground">Try building: </span>
            {stage.practiceProjectIdeas.join(" · ")}
          </p>
        )}
      </div>
    </li>
  );
}
