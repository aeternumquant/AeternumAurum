import FrameworkSection from "@/components/Framework";
import Footer from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";

const steps = [
  { num: "01", title: "Identificação de Oportunidades", desc: "Mapeamento sistemático de distorções de preço em mercados globais via modelos quantitativos e análise fundamentalista." },
  { num: "02", title: "Validação e Due Diligence", desc: "Processo rigoroso de validação com múltiplas camadas de análise. Independência entre as equipes de pesquisa e gestão." },
  { num: "03", title: "Construção do Portfólio", desc: "Sizing baseado em volatilidade ajustada ao risco. Diversificação multidimensional por ativo, região e fator de risco." },
  { num: "04", title: "Monitoramento Ativo", desc: "Acompanhamento em tempo real com sistemas proprietários de alerta e re-balanceamento tático conforme condições de mercado." },
];

export default function FrameworkPage() {
  return (
    <main className="pt-14 min-h-screen">
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/5 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/4 via-background to-background z-0" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="text-[10px] text-muted-foreground tracking-[0.3em] uppercase mb-4">Metodologia</p>
            <h1 className="font-display text-4xl sm:text-5xl text-primary uppercase tracking-widest mb-6">Framework</h1>
            <p className="text-muted-foreground text-sm leading-relaxed font-light">
              Nossa metodologia de investimento integra análise macroeconômica, modelos quantitativos e inteligência de risco para gerar retornos consistentes e assimétricos.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-10">
            {steps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="flex gap-8 border-b border-white/5 pb-10 last:border-0 last:pb-0">
                  <span className="font-display text-4xl text-primary/20 shrink-0 tabular-nums">{step.num}</span>
                  <div>
                    <h3 className="font-display text-lg text-foreground uppercase tracking-wider mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-light">{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <FrameworkSection />
      <Footer />
    </main>
  );
}
