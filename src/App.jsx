import React from "react";

// MountResults - Landing Page (single-file React component using Tailwind CSS)
// Usage: drop this component into a Vite + React project with Tailwind configured

const WHATSAPP_NUMBER = "+55 31 992199320"; // substituir pelo número real
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`;

function IconCheck() {
  return (
    <svg
      className="w-5 h-5 inline-block mr-2"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 00-1.414-1.414L8 11.172 4.707 7.879a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function Logo({ className = "h-10" }) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <svg
        width="42"
        height="42"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <rect width="100" height="100" rx="18" fill="#1E3A5F" />
        <path d="M18 70 L50 26 L82 70 Z" fill="#3BAE79" />
      </svg>
      <div className="text-lg font-semibold leading-none">
        <span>Mount</span>
        <span className="text-green-500">Results</span>
      </div>
    </div>
  );
}

export default function MountResultsLanding() {
  return (
    <div className="antialiased text-slate-800 bg-white">
      {/* NAV */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#services"
              className="text-sm font-medium hover:text-slate-700"
            >
              Serviços
            </a>
            <a
              href="#process"
              className="text-sm font-medium hover:text-slate-700"
            >
              Como funciona
            </a>
            <a
              href="#cases"
              className="text-sm font-medium hover:text-slate-700"
            >
              Casos
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-slate-700"
            >
              Contato
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="ml-2 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-md text-sm"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M..." />
              </svg>
              WhatsApp
            </a>
          </nav>
          <div className="md:hidden">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-md text-sm"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="pt-12 pb-10 bg-gradient-to-b from-white to-slate-50">
          <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
                Soluções web enxutas, rápidas e orientadas a dados para negócios
                locais que querem crescer.
              </h1>
              <p className="text-slate-600 mb-6">
                Site leve + rastreamento completo + SEO local = mais contatos
                qualificados no WhatsApp e no Google Meu Negócio. Publicado em
                até 30 dias.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-md text-sm font-semibold"
                >
                  Solicitar orçamento
                </a>
                <a
                  href="#cases"
                  className="inline-flex items-center gap-2 border border-slate-200 px-4 py-3 rounded-md text-sm font-medium hover:bg-slate-50"
                >
                  Ver casos práticos
                </a>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 max-w-md">
                <div className="flex items-center gap-2">
                  <strong className="text-green-600">&lt;2s</strong>
                  <span className="text-sm text-slate-500">
                    Tempo de carregamento
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <strong className="text-green-600">GA4</strong>
                  <span className="text-sm text-slate-500">
                    Eventos configurados
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <strong className="text-green-600">SEO</strong>
                  <span className="text-sm text-slate-500">Checklist 100%</span>
                </div>
              </div>
            </div>

            <div className="order-first md:order-last">
              {/* Mock device with sample metrics */}
              <div className="w-full max-w-md mx-auto shadow-lg rounded-xl p-5 bg-white">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-sm font-semibold">
                      Resumo inicial (30 dias)
                    </h3>
                    <p className="text-xs text-slate-400">
                      Rastreamento e SEO local configurados
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold">↑ 42%</span>
                    <p className="text-xs text-slate-400">Novos contatos</p>
                  </div>
                </div>
                <div className="h-36 bg-gradient-to-r from-slate-50 to-white rounded-lg border border-slate-100 flex items-center justify-center text-slate-400">
                  Gráfico de performance (mock)
                </div>
                <ul className="mt-4 space-y-2 text-sm">
                  <li>
                    <IconCheck />
                    GA4: 10 eventos importantes
                  </li>
                  <li>
                    <IconCheck />
                    GSC: Propriedade verificada
                  </li>
                  <li>
                    <IconCheck />
                    Pixel: Conversões prontas
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES / DIFFERENTIALS */}
        <section id="services" className="py-14">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-4">
              Por que escolher a MountResults?
            </h2>
            <p className="text-slate-600 mb-8 max-w-2xl">
              Clareza, agilidade e mensurabilidade: entregamos sites que você
              consegue entender, manter e escalar — já com rastreamento e SEO
              local prontos.
            </p>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <article className="p-5 bg-white border border-slate-100 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Rastreio desde o dia 1</h3>
                <p className="text-sm text-slate-500 mb-3">
                  GA4, Search Console e Pixel configurados para medir conversões
                  reais.
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>
                    <IconCheck />
                    Eventos úteis prontos
                  </li>
                  <li>
                    <IconCheck />
                    Relatórios simples
                  </li>
                </ul>
              </article>

              <article className="p-5 bg-white border border-slate-100 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Páginas rápidas</h3>
                <p className="text-sm text-slate-500 mb-3">
                  Performance otimizada para celular — tempo de carregamento
                  abaixo de 2 segundos.
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>
                    <IconCheck />
                    Imagens responsivas e lazy-load
                  </li>
                  <li>
                    <IconCheck />
                    Build enxuto
                  </li>
                </ul>
              </article>

              <article className="p-5 bg-white border border-slate-100 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">SEO local</h3>
                <p className="text-sm text-slate-500 mb-3">
                  Otimização para Google Meu Negócio e termos locais que geram
                  visitas qualificadas.
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>
                    <IconCheck />
                    Checklist SEO 100%
                  </li>
                  <li>
                    <IconCheck />
                    Estrutura para anúncios
                  </li>
                </ul>
              </article>

              <article className="p-5 bg-white border border-slate-100 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">
                  Relatórios que você entende
                </h3>
                <p className="text-sm text-slate-500 mb-3">
                  Checklists visuais e um primeiro relatório prático ao publicar
                  o site.
                </p>
              </article>

              <article className="p-5 bg-white border border-slate-100 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Suporte honesto</h3>
                <p className="text-sm text-slate-500 mb-3">
                  Orientação técnica direta, sem jargões, com foco no retorno.
                </p>
              </article>

              <article className="p-5 bg-white border border-slate-100 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Pronto para anúncios</h3>
                <p className="text-sm text-slate-500 mb-3">
                  Estrutura de conversões pronta para Facebook/Google Ads desde
                  o lançamento.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="py-14 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Como funciona — em 4 passos
            </h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Processo claro e objetivo para tirar o site do papel até a geração
              de contatos.
            </p>

            <div className="grid gap-6 md:grid-cols-4">
              <div className="p-5 bg-white border border-slate-100 rounded-lg">
                <div className="text-2xl font-bold mb-2">1</div>
                <h4 className="font-semibold mb-1">Diagnóstico</h4>
                <p className="text-sm text-slate-500">
                  Entendemos seu negócio e prioridades.
                </p>
              </div>
              <div className="p-5 bg-white border border-slate-100 rounded-lg">
                <div className="text-2xl font-bold mb-2">2</div>
                <h4 className="font-semibold mb-1">Protótipo</h4>
                <p className="text-sm text-slate-500">
                  Você aprova o layout antes do desenvolvimento.
                </p>
              </div>
              <div className="p-5 bg-white border border-slate-100 rounded-lg">
                <div className="text-2xl font-bold mb-2">3</div>
                <h4 className="font-semibold mb-1">Publicação</h4>
                <p className="text-sm text-slate-500">
                  Site no ar em até 30 dias, com rastreamento ativo.
                </p>
              </div>
              <div className="p-5 bg-white border border-slate-100 rounded-lg">
                <div className="text-2xl font-bold mb-2">4</div>
                <h4 className="font-semibold mb-1">Relatório</h4>
                <p className="text-sm text-slate-500">
                  Checklist SEO e relatório inicial com próximos passos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section id="cases" className="py-14">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-6">Casos práticos</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <article className="p-5 bg-white border border-slate-100 rounded-lg shadow-sm">
                <h3 className="font-semibold">Oficina São Luís — Betim</h3>
                <p className="text-sm text-slate-500 mb-3">
                  Resultado: 40 novos leads no WhatsApp em 30 dias com
                  rastreamento completo.
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>
                    <IconCheck />
                    Site publicado em 18 dias
                  </li>
                  <li>
                    <IconCheck />
                    GSC + GA4 integrados
                  </li>
                </ul>
              </article>

              <article className="p-5 bg-white border border-slate-100 rounded-lg shadow-sm">
                <h3 className="font-semibold">Restaurante Dona Maria</h3>
                <p className="text-sm text-slate-500 mb-3">
                  Resultado: aumento de reservas vindas do Google Maps em 80%.
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>
                    <IconCheck />
                    Otimização de ficha no Google Meu Negócio
                  </li>
                  <li>
                    <IconCheck />
                    Checklist SEO local completo
                  </li>
                </ul>
              </article>

              <article className="p-5 bg-white border border-slate-100 rounded-lg shadow-sm">
                <h3 className="font-semibold">Clínica Bela Vida</h3>
                <p className="text-sm text-slate-500 mb-3">
                  Resultado: captura de pacientes por formulário e WhatsApp com
                  anúncios otimizados.
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>
                    <IconCheck />
                    Pixel configurado para conversões
                  </li>
                  <li>
                    <IconCheck />
                    Relatório inicial com ações
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* KEY MESSAGE */}
        <section className="py-14 bg-gradient-to-r from-white to-slate-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-xl font-semibold mb-3">
              Você só melhora o que mede.
            </h3>
            <p className="text-slate-600">
              Rápido no celular, visível no Google, pronto para anúncios.
              Relatórios que você entende, decisões que dão retorno.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="py-16 bg-slate-900 text-white">
          <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                Pronto para medir e crescer?
              </h2>
              <p className="text-slate-300 mb-4">
                Em até 30 dias, um site publicado, medindo o que importa e
                pronto para anúncios e SEO.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-md font-semibold"
              >
                Solicitar orçamento
              </a>
            </div>
            <form className="bg-slate-800 p-6 rounded-lg">
              <label className="block text-sm text-slate-300 mb-2">Nome</label>
              <input
                className="w-full mb-3 px-3 py-2 rounded bg-slate-900 border border-slate-700 text-white"
                placeholder="Seu nome"
              />
              <label className="block text-sm text-slate-300 mb-2">
                Empresa
              </label>
              <input
                className="w-full mb-3 px-3 py-2 rounded bg-slate-900 border border-slate-700 text-white"
                placeholder="Nome da empresa"
              />
              <label className="block text-sm text-slate-300 mb-2">
                Telefone / WhatsApp
              </label>
              <input
                className="w-full mb-3 px-3 py-2 rounded bg-slate-900 border border-slate-700 text-white"
                placeholder="(31) 9xxxx-xxxx"
              />
              <label className="block text-sm text-slate-300 mb-2">
                Mensagem (opcional)
              </label>
              <textarea
                className="w-full mb-4 px-3 py-2 rounded bg-slate-900 border border-slate-700 text-white"
                rows={3}
                placeholder="Como podemos ajudar?"
              ></textarea>
              <button
                type="button"
                onClick={() => window.open(WHATSAPP_URL, "_blank")}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded font-semibold"
              >
                Enviar e abrir WhatsApp
              </button>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-8 bg-white border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Logo className="h-8" />
              <div className="text-sm text-slate-500">
                MountResults — Soluções web orientadas a dados. Betim, MG — Em
                breve: Porto Rico e Chile
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <a
                href="#privacy"
                className="text-slate-500 hover:text-slate-700"
              >
                Política de Privacidade
              </a>
              <a
                href="#contact"
                className="text-slate-500 hover:text-slate-700"
              >
                Contato
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
