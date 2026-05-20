import { Container } from "@/components/ui/Container";

export default function ScaffoldHome() {
  return (
    <main
      data-theme="personal"
      className="bg-bg text-fg flex min-h-screen items-center"
    >
      <Container className="py-24 text-center">
        <p className="font-display text-fg-subtle text-xs tracking-[0.25em] uppercase">
          tá online.
        </p>
        <h1 className="font-display text-fg mt-6 text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Em revisão.
          <span className="block">Volte em breve.</span>
        </h1>
        <p className="text-fg-muted mt-6 text-lg">
          Estamos preparando a nova versão do site.
        </p>
      </Container>
    </main>
  );
}
