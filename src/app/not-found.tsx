import { Button } from "@/components/ui/Button";
import { PageContainer } from "@/components/ui/PageContainer";

export default function NotFound() {
  return (
    <PageContainer className="flex flex-col items-start gap-6 py-24">
      <span className="font-mono text-xs uppercase tracking-widest text-accent-green">404</span>
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        This page hasn&apos;t been built yet.
      </h1>
      <p className="max-w-xl text-foreground-muted">
        The page you&apos;re looking for doesn&apos;t exist. Head back home, or explore what
        FutureDev members have built.
      </p>
      <div className="flex flex-wrap gap-4">
        <Button href="/">Back home</Button>
        <Button href="/projects" variant="secondary">
          Explore Projects
        </Button>
      </div>
    </PageContainer>
  );
}
