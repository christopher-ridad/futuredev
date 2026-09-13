import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { BuildExplorerSection } from "@/components/sections/BuildExplorerSection";
import { MentorshipSection } from "@/components/sections/MentorshipSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { JoinCtaSection } from "@/components/sections/JoinCtaSection";

const dividerClass = "border-t border-border";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className={dividerClass}>
        <AboutSection />
      </div>
      <div className={dividerClass}>
        <BuildExplorerSection />
      </div>
      <div className={dividerClass}>
        <MentorshipSection />
      </div>
      <div className={dividerClass}>
        <TeamSection />
      </div>
      <div className={dividerClass}>
        <FaqSection />
      </div>
      <div className={dividerClass}>
        <JoinCtaSection />
      </div>
    </>
  );
}
