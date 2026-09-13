import Image from "next/image";
import type { TeamMember } from "@/types";

type TeamMemberCardProps = {
  member: TeamMember;
};

function getInitials(name: string): string {
  const words = name.split(" ").filter(Boolean);
  const first = words[0]?.[0] ?? "";
  const last = words.length > 1 ? words[words.length - 1][0] : "";
  return `${first}${last}`.toUpperCase();
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <article className="flex flex-col gap-4 rounded-lg border border-border bg-background-raised p-6">
      <div className="flex items-center gap-4">
        {member.photo ? (
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full">
            <Image
              src={member.photo}
              alt={member.name}
              fill
              sizes="80px"
              className="object-cover"
              style={{
                objectPosition: member.photoZoom ? "center" : (member.photoPosition ?? "center"),
                transform: member.photoZoom
                  ? `scale(${member.photoZoom})`
                  : undefined,
              }}
            />
          </div>
        ) : (
          <span
            aria-hidden="true"
            className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-accent-green font-mono text-lg text-accent-green"
          >
            {getInitials(member.name)}
          </span>
        )}
        <div>
          <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
          <p className="text-sm text-accent-green">{member.role}</p>
        </div>
      </div>

      <p className="text-sm text-foreground-muted">
        {member.year}, {member.program} — {member.hometown}
      </p>

      <p className="text-sm text-foreground-muted">
        <span className="font-medium text-foreground">Fun fact: </span>
        {member.funFact}
      </p>
    </article>
  );
}
