import Link from "next/link";
import { PageContainer } from "@/components/ui/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EventCard } from "@/features/events/components/EventCard";
import { events } from "@/content/events";

export function EventsPreviewSection() {
  return (
    <PageContainer className="flex flex-col gap-10 py-16 sm:py-24">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <SectionHeading eyebrow="Events" title="Upcoming events" />
        <Link
          href="/events"
          className="text-sm font-medium text-accent-green hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-green"
        >
          View all events →
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </PageContainer>
  );
}
