import Footer from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import { NavLink } from "react-router-dom";

const papers = [
  { date: "Mar 2024", tag: "Macro", title: "Ciclos de Liquidez Global e Implicações para Mercados Emergentes", desc: "Análise dos principais determinantes de liquidez global e seu impacto nos fluxos de capital para economias emergentes em 2024–2025." },
  { date: "Fev 2024", tag: "Quantitative", title: "Modelos de Volatilidade Implícita em Commodities Agrícolas", desc: "Estudo sobre superfície de volatilidade em opções de soja e milho, com foco em arbitragem de estrutura temporal." },
  { date: "Jan 2024", tag: "Event-Driven", title: "M&A Cross-Border em Setores Regulados: Oportunidades e Riscos", desc: "Levantamento de 48 transações em setores regulados nos últimos 5 anos e sua correlação com retornos anormais." },
  { date: "Dez 2023", tag: "Risk", title: "Tail Risk Hedging em Carteiras Multi-Ativo", desc: "Estruturas de proteção eficientes para cenários de cauda: comparativo de abordagens com opções, volatilidade e metais." },
];

const tagColor: Record<string, string> = {
  Macro: "text-blue-400/70 border-blue-400/20",
  Quantitative: "text-purple-400/70 border-purple-400/20",
  "Event-Driven": "text-green-400/70 border-green-400/20",
  Risk: "text-orange-400/70 border-orange-400/20",
};

export default function ResearchPage() {
  return (
    <main className="pt-14 min-h-screen">
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/5 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/4 via-background to-background z-0" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="text-[10px] text-muted-foreground tracking-[0.3em] uppercase mb-4">Inteligência</p>
            <h1 className="font-display text-4xl sm:text-5xl text-primary uppercase tracking-widest mb-6">Research</h1>
            <p className="text-muted-foreground text-sm leading-relaxed font-light">
              Publicações proprietárias de análise macroeconômica, quantitativa e estratégica. Acesso completo reservado a parceiros qualificados.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto space-y-4">
          {papers.map((p, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="group p-6 border border-white/5 bg-card hover:bg-white/[0.02] transition-colors cursor-pointer">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <span className={`text-[9px] tracking-widest uppercase border px-2 py-0.5 font-sans ${tagColor[p.tag] ?? "text-primary/60 border-primary/20"}`}>
                      {p.tag}
                    </span>
                    <span className="text-[10px] text-muted-foreground/50 font-sans">{p.date}</span>
                  </div>
                  <span className="text-primary/40 group-hover:text-primary transition-colors text-xs">→</span>
                </div>
                <h3 className="font-display text-base sm:text-lg text-foreground tracking-wide mb-2 group-hover:text-primary/90 transition-colors">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5} direction="none">
          <div className="max-w-4xl mx-auto mt-10 text-center">
            <p className="text-[10px] text-muted-foreground/40 tracking-wider mb-6">
              Relatórios completos disponíveis mediante acesso autorizado.
            </p>
            <NavLink
              to="/acesso"
              className="inline-block px-8 py-3 border border-primary/30 text-primary text-[10px] tracking-[0.25em] uppercase font-sans hover:border-primary/60 hover:bg-primary/5 transition-all duration-200"
            >
              Solicitar Acesso
            </NavLink>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </main>
  );
}
