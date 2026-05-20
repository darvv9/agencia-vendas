import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { NicheContent } from "@/lib/content/types";

type Props = { content: NicheContent };

export function FAQ({ content }: Props) {
  const { faq } = content;
  return (
    <Section variant="surface" ariaLabel="Perguntas frequentes">
      <Container size="narrow">
        <div className="text-center">
          <p className="font-display text-fg-subtle text-xs tracking-[0.25em] uppercase">
            Perguntas frequentes
          </p>
          <h2 className="font-display text-fg mt-4 text-3xl tracking-tight sm:text-4xl md:text-5xl">
            {faq.title}
          </h2>
          <p className="text-fg-muted mt-5 text-lg">{faq.intro}</p>
        </div>
        <ul className="mt-12 space-y-3">
          {faq.items.map((item, i) => (
            <li
              key={i}
              className="border-line bg-card overflow-hidden rounded-2xl border"
            >
              <details className="group">
                <summary className="text-fg flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left font-medium select-none">
                  <span className="text-base sm:text-lg">{item.q}</span>
                  <svg
                    className="text-fg-subtle h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </summary>
                <div className="border-line text-fg-muted border-t px-6 py-5 text-[0.97rem] leading-relaxed">
                  {item.a}
                </div>
              </details>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
