import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { NicheContent } from "@/lib/content/types";

type Props = { content: NicheContent };

export function Dores({ content }: Props) {
  const { dores } = content;
  return (
    <Section variant="surface" ariaLabel="Problemas que resolvemos">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-fg text-3xl tracking-tight sm:text-4xl md:text-5xl">
            {dores.title}
          </h2>
          <p className="text-fg-muted mt-5 text-lg">{dores.intro}</p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {dores.items.map((item, i) => (
            <article
              key={i}
              className="border-line bg-card relative rounded-2xl border p-7 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="bg-primary/10 text-primary font-display flex h-10 w-10 items-center justify-center rounded-full text-base font-semibold">
                {i + 1}
              </div>
              <p className="text-fg mt-5 text-lg leading-snug font-medium">
                {item.title}
              </p>
            </article>
          ))}
        </div>
        <p className="text-fg-subtle mt-12 text-center text-sm sm:text-base">
          {dores.closing}
        </p>
      </Container>
    </Section>
  );
}
