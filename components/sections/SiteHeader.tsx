import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function SiteHeader() {
  return (
    <div className="bg-bg/85 border-line/60 sticky top-0 z-40 border-b backdrop-blur-md backdrop-saturate-150">
      <Container className="flex h-16 items-center justify-between">
        <a
          href="/"
          aria-label="Tá Online — página inicial"
          className="rounded-md transition-opacity hover:opacity-80"
        >
          <Logo size="md" />
        </a>
        <a
          href="#investimento"
          className="text-fg-muted hover:text-fg text-sm font-medium transition-colors"
        >
          Investimento
        </a>
      </Container>
    </div>
  );
}
