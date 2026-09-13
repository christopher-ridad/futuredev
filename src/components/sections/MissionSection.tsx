import { PageContainer } from "@/components/ui/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function MissionSection() {
  return (
    <PageContainer className="py-16 sm:py-24">
      <SectionHeading
        eyebrow="Our mission"
        title="Mentorship in technology"
        subtitle="FutureDev exists to build a community centered around mentorship in tech. Members join learning-focused group sessions to build real skills alongside people who've been there — not by watching from the sidelines, but by building."
      />
    </PageContainer>
  );
}
