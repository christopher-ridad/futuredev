import Link from "next/link";
import { Tag } from "@/components/ui/Tag";
import type { BuildPath, Project } from "@/types";

type BuildPathPanelProps = {
  buildPath: BuildPath;
  relatedProjects: Project[];
};

export function BuildPathPanel({ buildPath, relatedProjects }: BuildPathPanelProps) {
  return (
    <div
      id={`build-path-panel-${buildPath.id}`}
      role="tabpanel"
      className="grid gap-8 rounded-lg border border-border bg-background-raised p-6 sm:grid-cols-2 sm:p-8"
    >
      <div className="flex flex-col gap-6">
        <p className="text-foreground-muted">{buildPath.description}</p>

        <div>
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-widest text-foreground-muted">
            Skills you&apos;ll learn
          </h3>
          <ul className="flex flex-col gap-1 text-sm text-foreground">
            {buildPath.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-widest text-foreground-muted">
            Technologies
          </h3>
          <div className="flex flex-wrap gap-2">
            {buildPath.technologies.map((technology) => (
              <Tag key={technology}>{technology}</Tag>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-widest text-foreground-muted">
            FutureDev workshops
          </h3>
          <ul className="flex flex-col gap-1 text-sm text-foreground">
            {buildPath.workshops.map((workshop) => (
              <li key={workshop}>{workshop}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-widest text-foreground-muted">
            Curated resources
          </h3>
          <ul className="flex flex-col gap-1 text-sm">
            {buildPath.resources.map((resource) => (
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
        </div>

        <div>
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-widest text-foreground-muted">
            Beginner project ideas
          </h3>
          <ul className="flex flex-col gap-1 text-sm text-foreground">
            {buildPath.projectIdeas.map((idea) => (
              <li key={idea}>{idea}</li>
            ))}
          </ul>
        </div>

        {relatedProjects.length > 0 && (
          <div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-widest text-foreground-muted">
              Related projects
            </h3>
            <ul className="flex flex-col gap-1 text-sm">
              {relatedProjects.map((project) => (
                <li key={project.id}>
                  <Link
                    href="/projects"
                    className="text-accent-violet hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-violet"
                  >
                    {project.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
