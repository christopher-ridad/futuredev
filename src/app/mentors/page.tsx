import type { Metadata } from "next";
import { PageContainer } from "@/components/ui/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EmptyState } from "@/components/ui/EmptyState";
import { MentorArchiveList } from "@/features/mentors/components/MentorArchiveList";
import { mentorArchive } from "@/content/mentors";

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

      <section className="flex flex-col gap-6">
        <SectionHeading eyebrow="Archive" title="Past mentors & curricula" />
        <MentorArchiveList mentors={mentorArchive} />
      </section>
    </PageContainer>
  );
}
