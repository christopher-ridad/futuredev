import type { Metadata } from "next";
import { PageContainer } from "@/components/ui/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EmptyState } from "@/components/ui/EmptyState";
import { MentorArchiveList } from "@/features/mentors/components/MentorArchiveList";
import { ApplicationTimeline } from "@/features/mentors/components/ApplicationTimeline";
import { mentorArchive } from "@/content/mentors";
import { applicationTimeline } from "@/content/timeline";

export const metadata: Metadata = {
  title: "Mentors",
  description:
    "Meet FutureDev's current and past mentors across web, mobile, game, and technical development.",
};

export default function MentorsPage() {
  return (
    <PageContainer className="flex flex-col gap-16 py-24">
      <SectionHeading
        as="h1"
        eyebrow="Mentors"
        title="Learn from people who've been there"
        subtitle="Every quarter, mentors run small pods teaching web, mobile, game, and technical development."
      />

      <section className="flex flex-col gap-6">
        <SectionHeading eyebrow="This quarter" title="Current mentor groups" />
        <EmptyState
          title="Groups are being finalized"
          description="Mentor groups for this quarter haven't been set yet. Follow our Discord or Instagram for updates."
        />
      </section>

      <section className="flex flex-col gap-8">
        <SectionHeading
          eyebrow="How it works"
          title="Application timeline"
          subtitle="A general sense of how each quarter's matching process goes. Exact dates shift, but the sequence stays the same."
        />
        <ApplicationTimeline steps={applicationTimeline} />
      </section>

      <section className="flex flex-col gap-6">
        <SectionHeading eyebrow="Archive" title="Past mentors & curricula" />
        <MentorArchiveList mentors={mentorArchive} />
      </section>
    </PageContainer>
  );
}
