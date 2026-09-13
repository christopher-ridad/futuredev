import { Button } from "@/components/ui/Button";
import { PageContainer } from "@/components/ui/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { externalLinks } from "@/constants/site";

export function MentorshipSection() {
  return (
    <PageContainer className="flex flex-col gap-8 py-16 sm:py-24">
      <SectionHeading
        eyebrow="Mentorship"
        title="Learn with someone who's been there"
        subtitle="Each semester, mentees are paired with a more experienced mentor for guidance on projects, coursework, and getting started in a track. Mentors help with code reviews, unblocking projects, and pointing you toward the right resources — whatever you need help with."
      />
      <div className="flex flex-wrap gap-4">
        <Button href={externalLinks.linktree} external>
          Apply as a mentee
        </Button>
        <Button href={externalLinks.linktree} variant="secondary" external>
          Apply as a mentor
        </Button>
      </div>
    </PageContainer>
  );
}
