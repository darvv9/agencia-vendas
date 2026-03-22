import Image from "next/image";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <header className="relative overflow-hidden bg-black hero-top-gradient">
        <div style={{ isolation: "isolate" }}>
          <div className="mx-auto max-w-6xl px-4 pt-12 pb-16 sm:px-6 sm:pb-24 lg:px-8 lg:pb-32">
            <div className="mx-auto max-w-4xl text-center">
              <div
                className="mb-8 flex justify-center"
                style={{ background: "transparent", border: 0 }}
              >
                <Image
                  src="/logo.png"
                  alt="Tá Online"
                  width={800}
                  height={300}
                  priority
                  className="logo-header"
                />
              </div>
              <h1 className="text-3xl leading-tight font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Sua empresa no lugar certo, na hora certa.
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300 sm:text-xl">
                Autoridade digital e mais faturamento para clínicas e negócios
                locais. Seja encontrado, confiado e escolhido — com presença
                online que converte visitantes em clientes.
              </p>
              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="https://wa.me/5511978481415"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan text-black shadow-cyan-glow hover:opacity-90 focus:ring-cyan focus:ring-offset-black inline-flex items-center justify-center rounded-lg px-8 py-4 text-base font-semibold transition-all focus:ring-2 focus:ring-offset-2 focus:outline-none"
                >
                  Falar com Especialista
                </a>
                <a
                  href="#valor"
                  className="text-cyan border-cyan hover:bg-cyan/10 inline-flex items-center justify-center rounded-lg border-2 px-8 py-4 text-base font-semibold transition-colors"
                >
                  Por que autoridade digital
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section
        id="valor"
        className="bg-surface border-white/5 border-y py-16 sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Sem autoridade digital, seu negócio fica invisível
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
              Negócios de alta performance precisam de presença que inspire
              confiança e apareça quando o cliente busca.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-card border-white/5 rounded-xl border p-6">
              <div className="bg-cyan/10 text-cyan flex h-12 w-12 items-center justify-center rounded-lg text-xl font-bold">
                1
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                Visitante desiste antes de converter
              </h3>
              <p className="mt-2 text-gray-400">
                Sites lentos ou confusos fazem o visitante sair em segundos.
                Quem sai não vira lead nem venda.
              </p>
            </div>
            <div className="bg-card border-white/5 rounded-xl border p-6">
              <div className="bg-cyan/10 text-cyan flex h-12 w-12 items-center justify-center rounded-lg text-xl font-bold">
                2
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                Invisível no Google
              </h3>
              <p className="mt-2 text-gray-400">
                Sem otimização, seu negócio não aparece quando o cliente busca.
                A concorrência leva a venda.
              </p>
            </div>
            <div className="bg-card border-white/5 sm:col-span-2 lg:col-span-1 rounded-xl border p-6">
              <div className="bg-cyan/10 text-cyan flex h-12 w-12 items-center justify-center rounded-lg text-xl font-bold">
                3
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                Imagem que não convence
              </h3>
              <p className="mt-2 text-gray-400">
                Layout desatualizado ou quebrado no celular gera desconfiança.
                Quem transmite autoridade ganha a escolha.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              O que entregamos para negócios de alta performance
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
              Soluções de autoridade digital: sites que posicionam clínicas,
              lojas e serviços no lugar certo, na hora certa.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <article className="bg-card border-white/5 hover:border-cyan/30 overflow-hidden rounded-2xl border transition-colors">
              <div className="bg-cyan h-2" />
              <div className="p-8">
                <h3 className="text-xl font-semibold text-white">
                  Implementação de Autoridade Digital
                </h3>
                <p className="mt-3 text-gray-400">
                  Da estratégia ao site no ar: estrutura, copy e jornada
                  pensadas para posicionar sua clínica ou negócio local como
                  referência na mente do cliente.
                </p>
              </div>
            </article>
            <article className="bg-card border-white/5 hover:border-cyan/30 overflow-hidden rounded-2xl border transition-colors">
              <div className="bg-cyan h-2" />
              <div className="p-8">
                <h3 className="text-xl font-semibold text-white">
                  Otimização para Google
                </h3>
                <p className="mt-3 text-gray-400">
                  Seu negócio preparado para aparecer nas buscas. Estrutura,
                  velocidade e conteúdo alinhados às melhores práticas de SEO.
                </p>
              </div>
            </article>
            <article className="bg-card border-white/5 hover:border-cyan/30 overflow-hidden rounded-2xl border transition-colors">
              <div className="bg-cyan h-2" />
              <div className="p-8">
                <h3 className="text-xl font-semibold text-white">
                  Design Responsivo
                </h3>
                <p className="mt-3 text-gray-400">
                  Layout que funciona em celular, tablet e desktop. Experiência
                  profissional em qualquer dispositivo.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        id="investimento"
        className="relative border-y border-white/10 bg-zinc-950 px-4 py-20 sm:px-0"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Investir em Presença de Alto Nível
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-300">
              Soluções para profissionais e negócios que exigem alta
              performance, credibilidade instantânea e conversão real.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="group relative overflow-hidden rounded-xl border border-cyan-400/30 bg-zinc-900/80 p-8 shadow-lg transition hover:shadow-cyan-500/30">
              <div
                className="pointer-events-none absolute inset-0 rounded-xl border border-cyan-400/20 opacity-60 blur-lg transition group-hover:opacity-80"
                style={{ filter: "drop-shadow(0 0 21px #06b6d4)" }}
              />
              <h3 className="relative z-10 mb-3 text-xl font-semibold text-white">
                Presença Digital de Autoridade
              </h3>
              <p className="relative z-10 mb-5 text-zinc-300">
                Landing Pages premium desenhadas para quem investe pesado em
                tráfego e deseja conquistar leads de alto ticket. Design
                exclusivo, copywriting persuasivo e performance inigualável
                para resultados imediatos.
              </p>
              <span className="relative z-10 inline-block rounded bg-cyan-500/10 px-3 py-1 text-xs font-medium tracking-wide text-cyan-300 uppercase">
                Exclusivo para quem busca alta conversão
              </span>
            </div>
            <div className="group relative overflow-hidden rounded-xl border border-emerald-400/30 bg-zinc-900/80 p-8 shadow-lg transition hover:shadow-emerald-400/30">
              <div
                className="pointer-events-none absolute inset-0 rounded-xl border border-emerald-400/20 opacity-60 blur-lg transition group-hover:opacity-80"
                style={{ filter: "drop-shadow(0 0 21px #34d399)" }}
              />
              <h3 className="relative z-10 mb-3 text-xl font-semibold text-white">
                Ecossistema de Vendas Completo
              </h3>
              <p className="relative z-10 mb-5 text-zinc-300">
                Sites institucionais robustos, rápidos, com estrutura que
                transmite confiança desde o primeiro acesso. Foco em trajetória
                de credibilidade, segurança e autoridade para seu negócio
                prosperar.
              </p>
              <span className="relative z-10 inline-block rounded bg-emerald-500/10 px-3 py-1 text-xs font-medium tracking-wide text-emerald-300 uppercase">
                Segurança & Performance
              </span>
            </div>
            <div className="group relative overflow-hidden rounded-xl border border-fuchsia-400/30 bg-zinc-900/80 p-8 shadow-lg transition hover:shadow-fuchsia-400/30">
              <div
                className="pointer-events-none absolute inset-0 rounded-xl border border-fuchsia-400/20 opacity-60 blur-lg transition group-hover:opacity-80"
                style={{ filter: "drop-shadow(0 0 21px #d946ef)" }}
              />
              <h3 className="relative z-10 mb-3 text-xl font-semibold text-white">
                Engenharia Sob Medida
              </h3>
              <p className="relative z-10 mb-5 text-zinc-300">
                Desenvolvimento de sistemas personalizados e soluções complexas.
                Projetos desenhados do zero para necessidades específicas —
                tecnologia, automação e diferenciação, sempre entrega única e
                propriedade total.
              </p>
              <span className="relative z-10 inline-block rounded bg-fuchsia-500/10 px-3 py-1 text-xs font-medium tracking-wide text-fuchsia-300 uppercase">
                Solução Exclusiva
              </span>
            </div>
          </div>
          <div className="mt-16 flex flex-col items-center">
            <div className="flex max-w-2xl flex-col items-center rounded-lg border border-cyan-400/20 bg-zinc-900/80 px-8 py-6 shadow shadow-cyan-500/10">
              <span className="mb-2 text-base font-bold tracking-wider text-cyan-400 uppercase">
                Consultoria Flexível
              </span>
              <p className="mb-4 text-center text-zinc-200">
                Compreendemos que negócios de elite possuem necessidades únicas.
                Cada orçamento é planejado após uma análise estratégica e
                consultiva, garantindo a melhor solução para o seu cenário.
              </p>
              <div className="flex w-full flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="https://wa.me/5511978481415"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-cyan-400 px-7 py-4 text-base font-semibold text-black shadow-sm shadow-cyan-500/40 transition-all hover:bg-cyan-300 hover:shadow-lg"
                >
                  Agendar Consultoria Estratégica
                </a>
                <a
                  href="mailto:atendimento@agenciataonline.com.br?subject=Solicitar%20Orçamento%20Exclusivo"
                  className="rounded-lg border border-cyan-400 bg-zinc-950/70 px-7 py-4 text-base font-semibold text-cyan-300 transition-all hover:bg-cyan-400/10"
                >
                  Solicitar Orçamento Exclusivo
                </a>
              </div>
              <div className="mt-6 text-center text-xs tracking-tight text-zinc-400 italic">
                Entrega única, sem mensalidades. O código é seu, pertence à sua
                empresa.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface border-white/5 border-t py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Pronto para colocar sua empresa no lugar certo?
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Fale com um especialista e receba uma proposta sem compromisso.
          </p>
          <a
            href="https://wa.me/5511978481415"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan text-black shadow-cyan-glow hover:opacity-90 focus:ring-cyan focus:ring-offset-surface mt-8 inline-flex items-center justify-center rounded-lg px-8 py-4 text-base font-semibold transition-all focus:ring-2 focus:ring-offset-2 focus:outline-none"
          >
            Falar com Especialista
          </a>
        </div>
      </section>

      <a
        href="https://wa.me/5511978481415"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-cyan text-black shadow-cyan-glow hover:opacity-90 focus:ring-cyan focus:ring-offset-black fixed right-6 bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full transition-all hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:outline-none"
        aria-label="Falar com Especialista"
      >
        <svg
          className="h-8 w-8 shrink-0"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      <footer className="bg-black border-white/5 border-t py-8">
        <div className="mx-auto max-w-6xl space-y-1 px-4 text-center text-sm text-gray-400 sm:px-6 lg:px-8">
          <p>
            © {year}{" "}
            <span className="text-cyan font-semibold">Tá Online</span> —
            Autoridade digital para negócios de alta performance. Contato:{" "}
            <a
              href="https://wa.me/5511978481415"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan font-medium hover:underline"
            >
              +55 11 97848-1415
            </a>
            . Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-500">
            Projeto de entrega única com documentação de autonomia para o
            cliente.
          </p>
        </div>
      </footer>
    </>
  );
}