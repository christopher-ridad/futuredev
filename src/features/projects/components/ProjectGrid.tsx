import { EmptyState } from "@/components/ui/EmptyState";
import { ProjectCard } from "@/features/projects/components/ProjectCard";
import type { Project } from "@/types";

type ProjectGridProps = {
  projects: Project[];
};

export function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <EmptyState
        title="No projects match this filter"
        description="Try a different category, or check back soon as more projects are added."
      />
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
