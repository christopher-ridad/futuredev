import { Tag } from "@/components/ui/Tag";
import type { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex flex-col gap-4 rounded-lg border border-border bg-background-raised p-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
        <p className="text-sm text-foreground-muted">{project.description}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <Tag key={technology}>{technology}</Tag>
        ))}
      </div>
    </article>
  );
}
