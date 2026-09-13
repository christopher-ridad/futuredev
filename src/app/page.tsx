import { Hero } from "@/components/sections/Hero";
import { MissionSection } from "@/components/sections/MissionSection";
import { BuildExplorerSection } from "@/components/sections/BuildExplorerSection";
import { ProgramsPreviewSection } from "@/components/sections/ProgramsPreviewSection";
import { ProjectsPreviewSection } from "@/components/sections/ProjectsPreviewSection";
import { EventsPreviewSection } from "@/components/sections/EventsPreviewSection";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { JoinCtaSection } from "@/components/sections/JoinCtaSection";

const dividerClass = "border-t border-border";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className={dividerClass}>
        <MissionSection />
      </div>
      <div className={dividerClass}>
        <BuildExplorerSection />
      </div>
      <div className={dividerClass}>
        <ProgramsPreviewSection />
      </div>
      <div className={dividerClass}>
        <ProjectsPreviewSection />
      </div>
      <div className={dividerClass}>
        <EventsPreviewSection />
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
