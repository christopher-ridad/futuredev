import { LearningPathStage } from "@/features/learning/components/LearningPathStage";
import type { LearningPath } from "@/types";

type LearningPathSectionProps = {
  learningPath: LearningPath;
};

export function LearningPathSection({ learningPath }: LearningPathSectionProps) {
  return (
    <section id={learningPath.id} className="flex scroll-mt-24 flex-col gap-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          {learningPath.title}
        </h2>
        <p className="text-foreground-muted">{learningPath.description}</p>
      </div>

      <ol className="flex flex-col">
        {learningPath.stages.map((stage, index) => (
          <LearningPathStage
            key={stage.title}
            stage={stage}
            stageNumber={index + 1}
            isLast={index === learningPath.stages.length - 1}
          />
        ))}
      </ol>
    </section>
  );
}
