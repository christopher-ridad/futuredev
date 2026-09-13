import { BuildExplorer } from "@/features/build-explorer/components/BuildExplorer";
import { PageContainer } from "@/components/ui/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function BuildExplorerSection() {
  return (
    <PageContainer id="get-started" className="scroll-mt-24 flex flex-col gap-10 py-16 sm:py-24">
      <SectionHeading
        eyebrow="Get started"
        title="What do you want to build?"
        subtitle="Pick a track to see the skills, technologies, and resources that'll get you there."
      />
      <BuildExplorer />
    </PageContainer>
  );
}
