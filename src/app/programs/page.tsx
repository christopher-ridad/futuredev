import type { Metadata } from "next";
import { PageContainer } from "@/components/ui/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnchorQuickNav } from "@/components/shared/AnchorQuickNav";
import { RecommendedStart } from "@/features/programs/components/RecommendedStart";
import { BuildPathPanel } from "@/features/build-explorer/components/BuildPathPanel";
import { buildPaths } from "@/content/buildPaths";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore FutureDev's web, mobile, game, and AI programs — skills, technologies, workshops, and where to start for each track.",
};

export default function ProgramsPage() {
  return (
    <PageContainer className="flex flex-col gap-10 py-24">
      <SectionHeading
        as="h1"
        eyebrow="Programs"
        title="Learn by track"
        subtitle="Each program covers the skills, technologies, and workshops for one track, plus where to start."
      />

      <AnchorQuickNav
        ariaLabel="Jump to a program"
        items={buildPaths.map((buildPath) => ({
          id: buildPath.id,
          label: `${buildPath.emoji} ${buildPath.title}`,
        }))}
      />

      <div className="flex flex-col gap-16">
        {buildPaths.map((buildPath) => {
          const relatedProjects = projects.filter((project) =>
            buildPath.relatedProjectIds.includes(project.id),
          );

          return (
            <section
              key={buildPath.id}
              id={buildPath.id}
              className="flex scroll-mt-24 flex-col gap-6"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl" aria-hidden="true">
                  {buildPath.emoji}
                </span>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  {buildPath.title}
                </h2>
              </div>
              <RecommendedStart>{buildPath.recommendedStartingPoint}</RecommendedStart>
              <BuildPathPanel buildPath={buildPath} relatedProjects={relatedProjects} />
            </section>
          );
        })}
      </div>
    </PageContainer>
  );
}
