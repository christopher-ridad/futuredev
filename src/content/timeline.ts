import type { TimelineStep } from "@/types";

// A generalized version of FutureDev's real quarterly application timeline —
// exact dates shift each quarter, but the sequence and policies (rolling
// deadlines, 24-hour confirmation windows) stay the same.
export const applicationTimeline: TimelineStep[] = [
  {
    week: "Week 1",
    title: "Kick-Off Event",
    description:
      "Meet the FutureDev team, hear about this quarter's programs, and get introduced to each mentor and their track.",
  },
  {
    week: "Week 1",
    title: "Group matching form opens",
    description: "Applications for a mentor group open right after the Kick-Off Event.",
  },
  {
    week: "Week 2",
    title: "Group matching form closes",
    description: "Forms are reviewed on a rolling basis, so applying early helps your chances.",
  },
  {
    week: "Week 2",
    title: "Group matches finalized",
    description: "Matches are finalized once that round of forms closes.",
  },
  {
    week: "Week 3",
    title: "Matches released",
    description: "You'll get an email with your match and a confirmation form — you'll have 24 hours to confirm your spot.",
  },
  {
    week: "Week 3",
    title: "Acceptances finalized",
    description: "Anyone coming off the waitlist is emailed next, also with 24 hours to confirm.",
  },
  {
    week: "Week 3",
    title: "Spots finalized",
    description: "Your mentor reaches out directly to set up your first group meeting.",
  },
];
