import type { Metadata } from "next";
import { PageContainer } from "@/components/ui/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnchorQuickNav } from "@/components/shared/AnchorQuickNav";
import { LearningPathSection } from "@/features/learning/components/LearningPathSection";
import { learningPaths } from "@/content/resources";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Structured, self-paced learning paths for web, mobile, and game development, plus core technical skills — no account needed.",
};

export default function ResourcesPage() {
  return (
    <PageContainer className="flex flex-col gap-10 py-24">
      <SectionHeading
        as="h1"
        eyebrow="Resources"
        title="Learning paths"
        subtitle="Structured, self-paced paths for each track — no account needed, and nothing is tracked."
      />

      <AnchorQuickNav
        ariaLabel="Jump to a learning path"
        items={learningPaths.map((learningPath) => ({
          id: learningPath.id,
          label: learningPath.title,
        }))}
      />

      <div className="flex flex-col gap-16">
        {learningPaths.map((learningPath) => (
          <LearningPathSection key={learningPath.id} learningPath={learningPath} />
        ))}
      </div>
    </PageContainer>
  );
}
