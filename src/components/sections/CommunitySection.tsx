import { Button } from "@/components/ui/Button";
import { PageContainer } from "@/components/ui/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { externalLinks } from "@/constants/site";

export function CommunitySection() {
  return (
    <PageContainer className="flex flex-col gap-8 py-16 sm:py-24">
      <SectionHeading
        eyebrow="Community"
        title="A place to ask, share, and build together"
        subtitle="Conversations, questions, and collaboration happen in our Discord — that's where the community lives day to day. Mentorship pairs experienced members with mentees for guidance throughout the semester."
      />
      <div className="flex flex-wrap gap-4">
        <Button href={externalLinks.discord} external>
          Join our Discord
        </Button>
        <Button href={externalLinks.instagram} variant="secondary" external>
          Follow on Instagram
        </Button>
      </div>
    </PageContainer>
  );
}
