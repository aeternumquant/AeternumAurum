import Agro from "@/components/Agro";
import Footer from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import EscudoReal from "@/components/EscudoReal";
import GovernancaEstrategica from "@/components/GovernancaEstrategica";

const stats = [
  { value: "20%", label: "Alocação em Commodities" },
  { value: "4", label: "Categorias cobertas" },
  { value: "12+", label: "Mercados monitorados" },
  { value: "Diária", label: "Frequência de rebalanceamento" },
];

const gatilhosOleo = [
  {
    num: "01",
    titulo: "Sanções & Embargos",
    desc: "Restrições a exportadores-chave (Irã, Venezuela, Rússia) reduzem a oferta global instantaneamente. Nossos modelos monitoram fluxos de tankers e dados de estoques do EIA para antecipar desequilíbrios.",
  },
  {
    num: "02",
    titulo: "Tensões no Estreito de Ormuz",
    desc: "Aproximadamente 20% do petróleo mundial transita pelo Estreito de Ormuz. Qualquer escalada no Golfo Pérsico é capturada como prêmio de risco em futuros WTI e Brent imediatamente.",
  },
  {
    num: "03",
    titulo: "Decisões da OPEP+",
    desc: "Cortes de produção coordenados elevam a backwardation — estrutura onde o petróleo físico imediato vale mais que o futuro. Capturamos esse diferencial via roll estrutural de contratos.",
  },
  {
    num: "04",
    titulo: "Pressão de Hedge de Refinarias",
    desc: "Refinarias e distribuidores de diesel são vendedores sistemáticos de futuros para proteger margens. Lemos o CFTC para identificar quando esse posicionamento comercial cria distorções exploráveis.",
  },
];

export default function CommoditiesPage() {
  return (
    <main className="pt-14 min-h-screen">
      {/* Hero */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/5 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/4 via-background to-background z-0" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="text-[10px] text-muted-foreground tracking-[0.3em] uppercase mb-4">Mercados Reais</p>
            <h1 className="font-display text-4xl sm:text-5xl text-primary uppercase tracking-widest mb-6">Commodities</h1>
            <p className="text-muted-foreground text-sm leading-relaxed font-light">
              Exposição estratégica a mercados de matérias-primas com vantagem informacional, expertise setorial e modelos quantitativos proprietários.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Métricas */}
      <section className="py-16 border-b border-white/5 bg-card/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
            {stats.map((s, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="none">
                <div className="text-center px-4">
                  <div className="font-display text-3xl sm:text-4xl text-primary mb-2">{s.value}</div>
                  <div className="text-[10px] text-muted-foreground tracking-widest uppercase">{s.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* O Escudo Real — componente nativo */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <EscudoReal />
        </div>
      </section>

      {/* Petróleo & Diesel */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card/10 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-[10px] text-muted-foreground tracking-[0.3em] uppercase mb-4">Energia Global</p>
            <h2 className="font-display text-3xl text-primary uppercase tracking-widest mb-4">
              Petróleo &amp; Diesel
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed font-light max-w-2xl mb-12">
              Tensões geopolíticas são o principal catalisador de altas abruptas no petróleo bruto e nos derivados — especialmente diesel. Nossos modelos identificam prêmios de risco antes de se materializarem no preço, capturando alta de forma estrutural, não especulativa.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
            {gatilhosOleo.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-6 border border-white/5 bg-background hover:bg-white/[0.015] transition-colors h-full">
                  <div className="flex items-start gap-4">
                    <span className="shrink-0 font-display text-2xl text-primary/25 leading-none">{t.num}</span>
                    <div>
                      <h4 className="font-display text-lg text-foreground tracking-wide uppercase mb-2">{t.titulo}</h4>
                      <p className="text-muted-foreground text-sm font-light leading-relaxed">{t.desc}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Como operamos a alta */}
          <FadeIn delay={0.4}>
            <div className="border border-primary/15 bg-primary/3 p-7">
              <p className="text-[10px] text-primary/60 tracking-widest uppercase mb-6">Como Operamos a Alta</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/5">
                {[
                  {
                    passo: "Leitura",
                    titulo: "Dados CFTC & EIA",
                    corpo: "Monitoramos relatórios semanais de posicionamento do CFTC e estoques do EIA para identificar desequilíbrios entre oferta física e demanda futura.",
                  },
                  {
                    passo: "Estrutura",
                    titulo: "Captura de Backwardation",
                    corpo: "Quando o mercado entra em backwardation — preço spot acima dos futuros — executamos roll estrutural de contratos longos para capturar o diferencial sem direcionalidade pura.",
                  },
                  {
                    passo: "Proteção",
                    titulo: "Put Options como Escudo",
                    corpo: "Em eventos de alta aguda (escaladas geopolíticas), adicionamos puts sobre derivados de petróleo para limitar downside e manter exposição assimétrica ao upside.",
                  },
                ].map((s, i) => (
                  <div key={i} className="sm:px-6 first:pl-0 last:pr-0 pt-6 sm:pt-0 first:pt-0">
                    <p className="text-[9px] text-primary/40 tracking-widest uppercase mb-1">{s.passo}</p>
                    <p className="font-display text-base text-primary mb-2">{s.titulo}</p>
                    <p className="text-muted-foreground text-xs leading-relaxed font-light">{s.corpo}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Impacto Estratégico & Governança — componente nativo */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <GovernancaEstrategica />
        </div>
      </section>

      <Agro />
      <Footer />
    </main>
  );
}
