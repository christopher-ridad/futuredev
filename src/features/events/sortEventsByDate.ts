import type { FutureDevEvent } from "@/types";

export function sortEventsByDate(events: FutureDevEvent[]): FutureDevEvent[] {
  return [...events].sort((a, b) => a.date.localeCompare(b.date));
}
