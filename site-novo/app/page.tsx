import Image from "next/image";
import { FloatingWhatsappBar } from "../components/FloatingWhatsappBar";

/* WhatsApp — links diretos */
const WHATSAPP_NUMERO = "5521998522645";
const TEXTO_ORCAMENTO_EXCLUSIVO =
  "Olá! Vi o site da Tá Online e quero um diagnóstico pro meu negócio.";
const WHATSAPP_ORCAMENTO_EXCLUSIVO_HREF =
  "https://wa.me/5521998522645?text=Olá!%20Vi%20o%20site%20da%20Tá%20Online%20e%20quero%20um%20diagnóstico%20pro%20meu%20negócio.";
const TEXTO_WHATSAPP_GERAL = "Olá! Vi o site da Tá Online e quero falar com vocês.";
const WHATSAPP_GERAL_HREF = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(TEXTO_WHATSAPP_GERAL)}`;

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <header className="relative overflow-hidden bg-black hero-top-gradient">
        <div className="mx-auto max-w-6xl px-4 pt-12 pb-16 sm:px-6 sm:pb-24 lg:px-8 lg:pb-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 flex justify-center">
              <Image
                src="/logo.png"
                alt="Tá Online"
                width={800}
                height={300}
                priority
                className="logo-header h-auto w-auto max-w-full"
              />
            </div>
            <h1 className="text-3xl leading-tight font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Mais alunos. Mais pacientes. Mais clientes na sua barbearia. Sem mensalidade.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300 sm:text-xl">
              Seu negócio pronto para aparecer. Aumente o lucro. Tenha autoridade no mercado. Foco no dono de academia de Jiu Jitsu, clínica ou barbearia.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={WHATSAPP_GERAL_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan text-black shadow-cyan-glow hover:opacity-90 focus:ring-cyan focus:ring-offset-black inline-flex items-center justify-center rounded-lg px-8 py-4 text-base font-semibold transition-all focus:ring-2 focus:ring-offset-2 focus:outline-none"
              >
                Fale no WhatsApp com nossos especialistas
              </a>
              <a
                href="#valor"
                className="text-cyan border-cyan hover:bg-cyan/10 inline-flex items-center justify-center rounded-lg border-2 px-8 py-4 text-base font-semibold transition-colors"
              >
                Entenda a diferença
              </a>
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
              Não tem presença digital forte? O cliente treina, consulta ou corta cabelo no concorrente.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
              O público pesquisa tudo pelo celular antes de decidir. Quem não aparece com força perde. Simples assim.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-card border-white/5 rounded-xl border p-6">
              <div className="bg-cyan/10 text-cyan flex h-12 w-12 items-center justify-center rounded-lg text-xl font-bold">
                1
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                Site confuso = menos alunos, clientes ou pacientes
              </h3>
              <p className="mt-2 text-gray-400">
                Sem informações claras, telefone escondido, preço difícil? A pessoa vai embora. Cliente quer tudo fácil, direto e confiável.
              </p>
            </div>
            <div className="bg-card border-white/5 rounded-xl border p-6">
              <div className="bg-cyan/10 text-cyan flex h-12 w-12 items-center justify-center rounded-lg text-xl font-bold">
                2
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                Sua academia, clínica ou barbearia não está no topo da busca? O dinheiro vai pra outro.
              </h3>
              <p className="mt-2 text-gray-400">
                Se o Google não mostra seu nome, seu concorrente agradece. Presença forte garantida, você é encontrado primeiro.
              </p>
            </div>
            <div className="bg-card border-white/5 sm:col-span-2 lg:col-span-1 rounded-xl border p-6">
              <div className="bg-cyan/10 text-cyan flex h-12 w-12 items-center justify-center rounded-lg text-xl font-bold">
                3
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                Imagem amadora afasta e gera desconfiança
              </h3>
              <p className="mt-2 text-gray-400">
                Site velho, genérico, sem profissionalismo, derruba sua autoridade. Valorize a imagem da sua academia, clínica ou barbearia.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              O que você recebe com a Tá Online
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
              Seu site pronto. Seu nome no topo. Autoridade de verdade. Investimento único. Zero mensalidade.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <article className="bg-card border-white/5 hover:border-cyan/30 overflow-hidden rounded-2xl border transition-colors">
              <div className="bg-cyan h-2" />
              <div className="p-8">
                <h3 className="text-xl font-semibold text-white">
                  Sites que vendem de verdade
                </h3>
                <p className="mt-3 text-gray-400">
                  Páginas de Alta Conversão para captar mais alunos, clientes ou pacientes. Facilite o contato. Aumente seu faturamento sem enrolação.
                </p>
              </div>
            </article>
            <article className="bg-card border-white/5 hover:border-cyan/30 overflow-hidden rounded-2xl border transition-colors">
              <div className="bg-cyan h-2" />
              <div className="p-8">
                <h3 className="text-xl font-semibold text-white">
                  Seu nome aparece primeiro no Google
                </h3>
                <p className="mt-3 text-gray-400">
                  Sua academia, clínica ou barbearia fica fácil de achar. Mais gente chegando todos os dias. Mais credibilidade.
                </p>
              </div>
            </article>
            <article className="bg-card border-white/5 hover:border-cyan/30 overflow-hidden rounded-2xl border transition-colors">
              <div className="bg-cyan h-2" />
              <div className="p-8">
                <h3 className="text-xl font-semibold text-white">
                  Impecável no celular
                </h3>
                <p className="mt-3 text-gray-400">
                  Seu site rápido e bonito no smartphone. Cliente chega, se sente seguro e decide fácil.
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
              Investimento único. Mais lucro para sua academia, clínica ou barbearia.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-300">
              Valorize o negócio que você construiu. Resultados reais. Zero mensalidade. Você no controle.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="group relative overflow-hidden rounded-xl border border-cyan-400/30 bg-zinc-900/80 p-8 shadow-lg transition hover:shadow-cyan-500/30">
              <div
                className="pointer-events-none absolute inset-0 rounded-xl border border-cyan-400/20 opacity-60 blur-lg transition group-hover:opacity-80"
                style={{ filter: "drop-shadow(0 0 21px #06b6d4)" }}
              />
              <h3 className="relative z-10 mb-3 text-xl font-semibold text-white">
                Sites que vendem e captam mais clientes
              </h3>
              <p className="relative z-10 mb-5 text-zinc-300">
                Gasta com anúncio ou divulgação? Precisa de páginas que convertem visitas em mensagens no WhatsApp e ligações. Lotação garantida em pouco tempo.
              </p>
              <span className="relative z-10 inline-block rounded bg-cyan-500/10 px-3 py-1 text-xs font-medium tracking-wide text-cyan-300 uppercase">
                Mais contatos · Mais vendas
              </span>
            </div>
            <div className="group relative overflow-hidden rounded-xl border border-emerald-400/30 bg-zinc-900/80 p-8 shadow-lg transition hover:shadow-emerald-400/30">
              <div
                className="pointer-events-none absolute inset-0 rounded-xl border border-emerald-400/20 opacity-60 blur-lg transition group-hover:opacity-80"
                style={{ filter: "drop-shadow(0 0 21px #34d399)" }}
              />
              <h3 className="relative z-10 mb-3 text-xl font-semibold text-white">
                Estrutura digital profissional para seu negócio
              </h3>
              <p className="relative z-10 mb-5 text-zinc-300">
                Seu site institucional mostra credibilidade e destaca seus diferenciais. O cliente sente confiança já no primeiro clique.
              </p>
              <span className="relative z-10 inline-block rounded bg-emerald-500/10 px-3 py-1 text-xs font-medium tracking-wide text-emerald-300 uppercase">
                Profissional · Confiável
              </span>
            </div>
            <div className="group relative overflow-hidden rounded-xl border border-fuchsia-400/30 bg-zinc-900/80 p-8 shadow-lg transition hover:shadow-fuchsia-400/30">
              <div
                className="pointer-events-none absolute inset-0 rounded-xl border border-fuchsia-400/20 opacity-60 blur-lg transition group-hover:opacity-80"
                style={{ filter: "drop-shadow(0 0 21px #d946ef)" }}
              />
              <h3 className="relative z-10 mb-3 text-xl font-semibold text-white">
                Soluções digitais na sua mão
              </h3>
              <p className="relative z-10 mb-5 text-zinc-300">
                Sistemas de gestão para rotinas: cadastros, agendamentos, controle do jeito que seu time usa. Seu nome, sua marca. Sem mensalidade.
              </p>
              <span className="relative z-10 inline-block rounded bg-fuchsia-500/10 px-3 py-1 text-xs font-medium tracking-wide text-fuchsia-300 uppercase">
                Seu negócio forte · Investimento único
              </span>
            </div>
          </div>
          <div className="mt-16 flex flex-col items-center">
            <div className="flex max-w-2xl flex-col items-center rounded-lg border border-cyan-400/20 bg-zinc-900/80 px-8 py-6 shadow shadow-cyan-500/10">
              <span className="mb-2 text-base font-bold tracking-wider text-cyan-400 uppercase">
                Fale com a gente
              </span>
              <p className="mb-4 text-center text-zinc-200">
                Cada negócio é único. Entendemos seu desafio e trazemos a solução para sua academia, clínica ou barbearia. Fale direto com especialista.
              </p>
              <div className="flex w-full flex-col justify-center gap-4 sm:flex-row">
                <a
                  href={WHATSAPP_GERAL_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-cyan-400 px-7 py-4 text-center text-base font-semibold text-black shadow-sm shadow-cyan-500/40 transition-all hover:bg-cyan-300 hover:shadow-lg"
                >
                  WhatsApp
                </a>
                <a
                  href="https://wa.me/5521998522645?text=Olá!%20Vi%20o%20site%20da%20Tá%20Online%20e%20quero%20um%20diagnóstico%20pro%20meu%20negócio."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-cyan-400 bg-zinc-950/70 px-7 py-4 text-center text-base font-semibold text-cyan-300 transition-all hover:bg-cyan-400/10"
                >
                  Solicitar Orçamento Exclusivo
                </a>
              </div>
              <div className="mt-6 text-center text-xs tracking-tight text-zinc-400 italic">
                Invista uma vez só. O site é todo seu. Zero mensalidade. Você decide.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface border-white/5 border-t py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Quer mais clientes de verdade para sua barbearia, clínica ou academia?
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Clique e fale direto. Solução sem enrolação para dono de negócio sério.
          </p>
          <a
            href="https://wa.me/5521998522645?text=Olá!%20Vi%20o%20site%20da%20Tá%20Online%20e%20quero%20um%20diagnóstico%20pro%20meu%20negócio."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan text-black shadow-cyan-glow hover:opacity-90 focus:ring-cyan focus:ring-offset-surface mt-8 inline-flex items-center justify-center rounded-lg px-8 py-4 text-base font-semibold transition-all focus:ring-2 focus:ring-offset-2 focus:outline-none"
          >
            Solicitar Orçamento Exclusivo
          </a>
        </div>
      </section>

      <footer className="bg-black border-white/5 border-t pt-8 pb-28">
        <div className="mx-auto max-w-6xl space-y-1 px-4 text-center text-sm text-gray-400 sm:px-6 lg:px-8">
          <p>
            © {year}{" "}
            <span className="text-cyan font-semibold">Tá Online</span> — Sites que vendem e soluções digitais para academia de Jiu Jitsu, clínicas e barbearias terem autoridade real. Contato:{" "}
            <a
              href={WHATSAPP_GERAL_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan font-medium hover:underline"
            >
              +55 21 99852-2645
            </a>
            . Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-500">
            Investimento único. Sem mensalidade. O site é seu.
          </p>
        </div>
      </footer>

      <FloatingWhatsappBar
        orcamentoExclusivoHref={WHATSAPP_ORCAMENTO_EXCLUSIVO_HREF}
        whatsappGeralHref={WHATSAPP_GERAL_HREF}
      />
    </>
  );
}
