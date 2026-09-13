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

      {project.links && (project.links.demo || project.links.repo) && (
        <div className="mt-auto flex gap-4 pt-2 text-sm font-medium">
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-green hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-green"
            >
              View demo
            </a>
          )}
          {project.links.repo && (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-violet hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-violet"
            >
              View code
            </a>
          )}
        </div>
      )}
    </article>
  );
}
