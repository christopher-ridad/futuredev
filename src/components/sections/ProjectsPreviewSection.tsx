import Link from "next/link";
import { PageContainer } from "@/components/ui/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/features/projects/components/ProjectCard";
import { projects } from "@/content/projects";

export function ProjectsPreviewSection() {
  return (
    <PageContainer className="flex flex-col gap-10 py-16 sm:py-24">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <SectionHeading eyebrow="Projects" title="Built by FutureDev members" />
        <Link
          href="/projects"
          className="text-sm font-medium text-accent-green hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-green"
        >
          View all projects →
        </Link>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </PageContainer>
  );
}
