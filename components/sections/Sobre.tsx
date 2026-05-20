import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { NicheContent } from "@/lib/content/types";

/* TODO: substituir o avatar placeholder pela foto real.
   Quando o usuário enviar a foto, colocar em /public/sobre.jpg
   e substituir o bloco "avatar placeholder" abaixo por <Image src="/sobre.jpg" ... />. */

type Props = { content: NicheContent };

export function Sobre({ content }: Props) {
  const { sobre } = content;
  return (
    <Section ariaLabel="Sobre">
      <Container>
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[auto_1fr] md:gap-14">
          {/* avatar placeholder */}
          <div
            aria-hidden
            className="border-line from-surface to-card relative mx-auto h-32 w-32 shrink-0 overflow-hidden rounded-full border-2 bg-gradient-to-br shadow-inner sm:h-40 sm:w-40 md:h-48 md:w-48"
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 50% 35%, color-mix(in oklab, var(--accent) 60%, transparent) 0%, transparent 65%)",
              }}
            />
            <div className="font-display text-fg-subtle/60 absolute inset-0 flex items-center justify-center text-5xl tracking-tight">
              tá.
            </div>
          </div>

          <div className="text-center md:text-left">
            <p className="font-display text-fg-subtle text-xs tracking-[0.25em] uppercase">
              Quem faz
            </p>
            <h2 className="font-display text-fg mt-4 text-3xl tracking-tight sm:text-4xl">
              {sobre.title}
            </h2>
            <div className="mt-6 space-y-4">
              {sobre.paragraphs.map((p, i) => (
                <p key={i} className="text-fg-muted text-lg leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
