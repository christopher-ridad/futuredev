import { Button } from "@/components/ui/Button";
import { PageContainer } from "@/components/ui/PageContainer";
import { externalLinks } from "@/constants/site";

export function JoinCtaSection() {
  return (
    <PageContainer className="py-16 sm:py-24">
      <div className="flex flex-col items-start gap-6 rounded-lg border border-border bg-background-raised p-10 sm:items-center sm:text-center">
        <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Ready to start building?
        </h2>
        <p className="max-w-xl text-foreground-muted">
          Join FutureDev and start learning alongside a community of student builders.
        </p>
        <Button href={externalLinks.discord} external>
          Join FutureDev
        </Button>
      </div>
    </PageContainer>
  );
}
