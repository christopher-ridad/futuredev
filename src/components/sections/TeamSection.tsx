import { PageContainer } from "@/components/ui/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TeamMemberCard } from "@/features/team/components/TeamMemberCard";
import { team } from "@/content/team";

export function TeamSection() {
  return (
    <PageContainer id="team" className="flex scroll-mt-24 flex-col gap-10 py-16 sm:py-24">
      <SectionHeading eyebrow="Meet the team" title="Executive Board" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </PageContainer>
  );
}
