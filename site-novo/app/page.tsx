import Image from "next/image";
import { FloatingWhatsappBar } from "../components/FloatingWhatsappBar";

const WHATSAPP_NUMERO = "5521998522645";

/** Mensagem e URL exatas do orçamento exclusivo (diagnóstico). */
const TEXTO_ORCAMENTO_EXCLUSIVO =
  "Olá! Vi o site da Tá Online e quero um diagnóstico pro meu negócio.";
const WHATSAPP_ORCAMENTO_EXCLUSIVO_HREF = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(TEXTO_ORCAMENTO_EXCLUSIVO)}`;

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
              Mais clientes. Mais lucro. Sem mensalidade.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300 sm:text-xl">
              Academia, clínica, barbearia ou loja: a gente monta seu site e sua
              estrutura digital para você aparecer bem, vender mais e mandar no
              seu negócio.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={WHATSAPP_GERAL_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan text-black shadow-cyan-glow hover:opacity-90 focus:ring-cyan focus:ring-offset-black inline-flex items-center justify-center rounded-lg px-8 py-4 text-base font-semibold transition-all focus:ring-2 focus:ring-offset-2 focus:outline-none"
              >
                Falar no WhatsApp
              </a>
              <a
                href="#valor"
                className="text-cyan border-cyan hover:bg-cyan/10 inline-flex items-center justify-center rounded-lg border-2 px-8 py-4 text-base font-semibold transition-colors"
              >
                Por que isso importa
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
              Sem presença forte na internet, o cliente vai para o concorrente
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
              Hoje todo mundo pesquisa no celular. Se seu negócio parece fraco
              ou sumido, você perde dinheiro. Ponto.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-card border-white/5 rounded-xl border p-6">
              <div className="bg-cyan/10 text-cyan flex h-12 w-12 items-center justify-center rounded-lg text-xl font-bold">
                1
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                Site confuso = cliente que some
              </h3>
              <p className="mt-2 text-gray-400">
                Telefone escondido, preço nebuloso, bagunça no celular. O cliente
                não tem paciência. Ele fecha com quem deixa tudo óbvio.
              </p>
            </div>
            <div className="bg-card border-white/5 rounded-xl border p-6">
              <div className="bg-cyan/10 text-cyan flex h-12 w-12 items-center justify-center rounded-lg text-xl font-bold">
                2
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                Não aparece na busca = venda para outro
              </h3>
              <p className="mt-2 text-gray-400">
                Se o Google não te mostra, você não existe na hora da decisão.
                Quem aparece primeiro leva o cliente.
              </p>
            </div>
            <div className="bg-card border-white/5 sm:col-span-2 lg:col-span-1 rounded-xl border p-6">
              <div className="bg-cyan/10 text-cyan flex h-12 w-12 items-center justify-center rounded-lg text-xl font-bold">
                3
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                Cara de amador = desconfiança
              </h3>
              <p className="mt-2 text-gray-400">
                Se o site parece velho ou genérico, o cliente acha que o serviço
                também é. Imagem conta — e muito.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              O que a Tá Online entrega para você vender mais
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
              Projeto pronto para uso. Você no topo da mente do cliente. Pagamento
              único — zero mensalidade.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <article className="bg-card border-white/5 hover:border-cyan/30 overflow-hidden rounded-2xl border transition-colors">
              <div className="bg-cyan h-2" />
              <div className="p-8">
                <h3 className="text-xl font-semibold text-white">
                  Sites que vendem
                </h3>
                <p className="mt-3 text-gray-400">
                  Páginas de alta conversão: diretas, bonitas e feitas para o
                  cliente marcar, ligar ou chamar no WhatsApp. Menos enrolação,
                  mais resultado.
                </p>
              </div>
            </article>
            <article className="bg-card border-white/5 hover:border-cyan/30 overflow-hidden rounded-2xl border transition-colors">
              <div className="bg-cyan h-2" />
              <div className="p-8">
                <h3 className="text-xl font-semibold text-white">
                  Seu nome na frente na hora da busca
                </h3>
                <p className="mt-3 text-gray-400">
                  Ajustamos tudo para você ser achado quando alguém procura o que
                  você faz. Mais gente chegando na porta.
                </p>
              </div>
            </article>
            <article className="bg-card border-white/5 hover:border-cyan/30 overflow-hidden rounded-2xl border transition-colors">
              <div className="bg-cyan h-2" />
              <div className="p-8">
                <h3 className="text-xl font-semibold text-white">
                  Celular impecável
                </h3>
                <p className="mt-3 text-gray-400">
                  A maioria decide pelo smartphone. Seu site fica rápido, claro
                  e profissional no bolso do cliente.
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
              Um investimento. Seu negócio no alto. Sem mensalidade.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-300">
              Para quem cobra qualidade no salão, na academia ou na consulta: a
              mesma qualidade no digital. Autoridade total, lucro no foco.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="group relative overflow-hidden rounded-xl border border-cyan-400/30 bg-zinc-900/80 p-8 shadow-lg transition hover:shadow-cyan-500/30">
              <div
                className="pointer-events-none absolute inset-0 rounded-xl border border-cyan-400/20 opacity-60 blur-lg transition group-hover:opacity-80"
                style={{ filter: "drop-shadow(0 0 21px #06b6d4)" }}
              />
              <h3 className="relative z-10 mb-3 text-xl font-semibold text-white">
                Sites que vendem + páginas de alta conversão
              </h3>
              <p className="relative z-10 mb-5 text-zinc-300">
                Você gasta com anúncio? Então precisa de página que transforme
                visita em ligação ou WhatsApp. Objetivo claro: mais cliente na
                agenda.
              </p>
              <span className="relative z-10 inline-block rounded bg-cyan-500/10 px-3 py-1 text-xs font-medium tracking-wide text-cyan-300 uppercase">
                Mais contatos · mais vendas
              </span>
            </div>
            <div className="group relative overflow-hidden rounded-xl border border-emerald-400/30 bg-zinc-900/80 p-8 shadow-lg transition hover:shadow-emerald-400/30">
              <div
                className="pointer-events-none absolute inset-0 rounded-xl border border-emerald-400/20 opacity-60 blur-lg transition group-hover:opacity-80"
                style={{ filter: "drop-shadow(0 0 21px #34d399)" }}
              />
              <h3 className="relative z-10 mb-3 text-xl font-semibold text-white">
                Sua estrutura digital completa
              </h3>
              <p className="relative z-10 mb-5 text-zinc-300">
                Site institucional que conta quem você é, o que vende e por que
                confiar. Projeto pronto para uso — você passa segurança desde o
                primeiro clique.
              </p>
              <span className="relative z-10 inline-block rounded bg-emerald-500/10 px-3 py-1 text-xs font-medium tracking-wide text-emerald-300 uppercase">
                Profissional · confiável
              </span>
            </div>
            <div className="group relative overflow-hidden rounded-xl border border-fuchsia-400/30 bg-zinc-900/80 p-8 shadow-lg transition hover:shadow-fuchsia-400/30">
              <div
                className="pointer-events-none absolute inset-0 rounded-xl border border-fuchsia-400/20 opacity-60 blur-lg transition group-hover:opacity-80"
                style={{ filter: "drop-shadow(0 0 21px #d946ef)" }}
              />
              <h3 className="relative z-10 mb-3 text-xl font-semibold text-white">
                Sistemas para o seu negócio
              </h3>
              <p className="relative z-10 mb-5 text-zinc-300">
                Tecnologia de vendas e rotina sob medida: cadastros, formulários,
                fluxo do jeito que sua equipe trabalha. Tudo no seu nome. Sem
                aluguel mensal.
              </p>
              <span className="relative z-10 inline-block rounded bg-fuchsia-500/10 px-3 py-1 text-xs font-medium tracking-wide text-fuchsia-300 uppercase">
                Seu negócio no topo · pagamento único
              </span>
            </div>
          </div>
          <div className="mt-16 flex flex-col items-center">
            <div className="flex max-w-2xl flex-col items-center rounded-lg border border-cyan-400/20 bg-zinc-900/80 px-8 py-6 shadow shadow-cyan-500/10">
              <span className="mb-2 text-base font-bold tracking-wider text-cyan-400 uppercase">
                Vamos conversar?
              </span>
              <p className="mb-4 text-center text-zinc-200">
                Cada negócio é um caso. A gente ouve, entende e propõe o melhor
                caminho — sem pegadinha na primeira conversa.
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
                  href={WHATSAPP_ORCAMENTO_EXCLUSIVO_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-cyan-400 bg-zinc-950/70 px-7 py-4 text-center text-base font-semibold text-cyan-300 transition-all hover:bg-cyan-400/10"
                >
                  Solicitar Orçamento Exclusivo
                </a>
              </div>
              <div className="mt-6 text-center text-xs tracking-tight text-zinc-400 italic">
                Você paga uma vez. Fica com tudo. Sem mensalidade. Sua empresa manda.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface border-white/5 border-t py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Quer mais cliente e mais lucro com imagem de respeito?
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Chama no WhatsApp. Em dois toques você já está falando com a gente.
          </p>
          <a
            href={WHATSAPP_ORCAMENTO_EXCLUSIVO_HREF}
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
            <span className="text-cyan font-semibold">Tá Online</span> — sites e
            estrutura digital para seu negócio crescer. Contato:{" "}
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
            Pagamento único. Sem mensalidade. O projeto é seu.
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
