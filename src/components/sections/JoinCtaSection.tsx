import { Button } from "@/components/ui/Button";
import { PageContainer } from "@/components/ui/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { externalLinks } from "@/constants/site";

export function JoinCtaSection() {
  return (
    <PageContainer className="py-16 sm:py-24">
      <div className="flex flex-col items-start gap-6 rounded-lg border border-border bg-background-raised p-10 sm:items-center sm:text-center">
        <SectionHeading
          align="center"
          eyebrow="Community"
          title="Ready to start building?"
          subtitle="Conversations, questions, and collaboration happen in our Discord — that's where the community lives day to day, with mentorship pairing experienced members and mentees for guidance throughout the semester."
        />
        <div className="flex flex-wrap justify-center gap-4">
          <Button href={externalLinks.discord} external>
            Join our Discord
          </Button>
          <Button href={externalLinks.instagram} variant="secondary" external>
            Follow on Instagram
          </Button>
        </div>
      </div>
    </PageContainer>
  );
}
