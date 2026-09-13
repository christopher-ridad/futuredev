import { Button } from "@/components/ui/Button";
import { PageContainer } from "@/components/ui/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { externalLinks } from "@/constants/site";

export function MentorshipSection() {
  return (
    <PageContainer id="mentorship" className="flex scroll-mt-24 flex-col gap-8 py-16 sm:py-24">
      <SectionHeading
        eyebrow="Mentorship"
        title="Learn with someone who's been there"
        subtitle="Each quarter, mentees are paired with a more experienced mentor for guidance on projects, coursework, and getting started in a track. Mentors help with code reviews, unblocking projects, and pointing you toward the right resources — whatever you need help with."
      />
      <div className="flex flex-wrap items-center gap-4">
        <Button href={externalLinks.mentorApplication} external>
          Apply as a mentor
        </Button>
        <span className="rounded-full border border-dashed border-border px-4 py-2 text-sm text-foreground-muted">
          Mentee applications opening soon
        </span>
      </div>
    </PageContainer>
  );
}
