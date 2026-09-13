import type { Metadata } from "next";
import { PageContainer } from "@/components/ui/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MissionSection } from "@/components/sections/MissionSection";
import { MentorshipSection } from "@/components/sections/MentorshipSection";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { JoinCtaSection } from "@/components/sections/JoinCtaSection";
import { siteConfig } from "@/constants/site";

export const metadata: Metadata = {
  title: "About",
  description: "Who FutureDev is, our mission, mentorship, and community — and how to get involved.",
};

const dividerClass = "border-t border-border";

export default function AboutPage() {
  return (
    <>
      <PageContainer className="flex flex-col gap-6 py-24">
        <SectionHeading as="h1" eyebrow="About" title="Who we are" subtitle={siteConfig.description} />
      </PageContainer>
      <div className={dividerClass}>
        <MissionSection />
      </div>
      <div className={dividerClass}>
        <MentorshipSection />
      </div>
      <div className={dividerClass}>
        <CommunitySection />
      </div>
      <div className={dividerClass}>
        <JoinCtaSection />
      </div>
    </>
  );
}
