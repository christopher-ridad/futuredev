import { Tag } from "@/components/ui/Tag";
import type { BuildPath } from "@/types";

type ProgramCardProps = {
  buildPath: BuildPath;
};

export function ProgramCard({ buildPath }: ProgramCardProps) {
  return (
    <article className="flex flex-col gap-4 rounded-lg border border-border bg-background-raised p-6">
      <h3 className="text-lg font-semibold text-foreground">{buildPath.title}</h3>
      <p className="text-sm text-foreground-muted">{buildPath.description}</p>
      <div className="flex flex-wrap gap-2">
        {buildPath.technologies.map((technology) => (
          <Tag key={technology}>{technology}</Tag>
        ))}
      </div>
    </article>
  );
}
