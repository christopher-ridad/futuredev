import type { Metadata } from "next";
import { PageContainer } from "@/components/ui/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EventCard } from "@/features/events/components/EventCard";
import { sortEventsByDate } from "@/features/events/sortEventsByDate";
import { events } from "@/content/events";

export const metadata: Metadata = {
  title: "Events",
  description: "Workshops, socials, and sessions — all upcoming FutureDev events in one place.",
};

export default function EventsPage() {
  const sortedEvents = sortEventsByDate(events);

  return (
    <PageContainer className="flex flex-col gap-10 py-24">
      <SectionHeading
        as="h1"
        eyebrow="Events"
        title="Workshops, socials, and sessions"
        subtitle="All upcoming FutureDev events in one place."
      />
      <h2 className="sr-only">All events</h2>
      <div className="flex flex-col gap-4">
        {sortedEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </PageContainer>
  );
}
