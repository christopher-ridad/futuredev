import { Tag } from "@/components/ui/Tag";
import type { FutureDevEvent } from "@/types";
import { formatEventDate } from "@/features/events/formatEventDate";
import { eventCategoryLabels } from "@/features/events/eventCategoryLabels";

type EventCardProps = {
  event: FutureDevEvent;
};

export function EventCard({ event }: EventCardProps) {
  return (
    <article className="flex flex-col gap-3 rounded-lg border border-border bg-background-raised p-6 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
      <div className="flex flex-col gap-2">
        <Tag>{eventCategoryLabels[event.category]}</Tag>
        <h3 className="text-lg font-semibold text-foreground">{event.title}</h3>
        <p className="text-sm text-foreground-muted">{event.description}</p>
      </div>

      <div className="flex shrink-0 flex-col gap-1 text-sm text-foreground-muted sm:text-right">
        <span className="font-mono text-accent-green">{formatEventDate(event.date)}</span>
        <span>{event.time}</span>
        <span>{event.location}</span>
      </div>
    </article>
  );
}
