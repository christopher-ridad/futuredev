import { PageContainer } from "@/components/ui/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faq } from "@/content/faq";

export function FaqSection() {
  return (
    <PageContainer id="faq" className="flex scroll-mt-24 flex-col gap-10 py-16 sm:py-24">
      <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
      <div className="flex flex-col divide-y divide-border border-y border-border">
        {faq.map((item) => (
          <details key={item.question} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-foreground [&::-webkit-details-marker]:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-green">
              {item.question}
              <span
                aria-hidden="true"
                className="shrink-0 font-mono text-accent-green transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="pt-3 text-sm text-foreground-muted">{item.answer}</p>
          </details>
        ))}
      </div>
    </PageContainer>
  );
}
