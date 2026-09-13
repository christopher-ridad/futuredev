import type { Metadata } from "next";
import { Suspense } from "react";
import { PageContainer } from "@/components/ui/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectsExplorer } from "@/features/projects/components/ProjectsExplorer";
import { ProjectGrid } from "@/features/projects/components/ProjectGrid";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Browse projects built by FutureDev members, filterable by web, mobile, game, and AI.",
};

export default function ProjectsPage() {
  return (
    <PageContainer className="flex flex-col gap-10 py-24">
      <SectionHeading
        as="h1"
        eyebrow="Projects"
        title="Built by FutureDev members"
        subtitle="Browse projects by category to see what members have built."
      />
      <h2 className="sr-only">All projects</h2>
      {/* Suspense keeps this page statically prerendered — only the
          searchParams-aware filter UI below is client-rendered. */}
      <Suspense fallback={<ProjectGrid projects={projects} />}>
        <ProjectsExplorer projects={projects} />
      </Suspense>
    </PageContainer>
  );
}
