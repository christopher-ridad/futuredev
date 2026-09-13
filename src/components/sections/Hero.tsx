import { Button } from "@/components/ui/Button";
import { PageContainer } from "@/components/ui/PageContainer";
import { externalLinks, siteConfig } from "@/constants/site";

export function Hero() {
  return (
    <PageContainer className="flex flex-col gap-6 py-24 sm:py-32">
      <span className="font-mono text-xs uppercase tracking-widest text-accent-green">
        {siteConfig.name}
      </span>
      <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
        {siteConfig.tagline}
      </h1>
      <p className="max-w-2xl text-lg text-foreground-muted">{siteConfig.description}</p>
      <div className="flex flex-wrap gap-4 pt-2">
        <Button href={externalLinks.discord} external>
          Join FutureDev
        </Button>
        <Button href="/#get-started" variant="secondary">
          Explore Programs
        </Button>
      </div>
    </PageContainer>
  );
}
