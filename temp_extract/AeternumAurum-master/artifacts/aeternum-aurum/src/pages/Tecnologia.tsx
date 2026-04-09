import Footer from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import TechStackVisualization from "@/components/TechStackVisualization";
import GoiasMap from "@/components/GoiasMap";

export default function TecnologiaPage() {
  return (
    <main className="pt-14 min-h-screen">
      {/* Herói */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeIn>
            <p className="text-[10px] text-muted-foreground tracking-[0.3em] uppercase mb-4">TRL 7+ Certificado</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground uppercase tracking-widest mb-4 leading-tight">
              Tecnologia <span className="text-primary">EUA</span><br />Aplicada ao Brasil
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-light max-w-2xl mt-4">
              Validando ferramentas quantitativas americanas de nível TRL 7+ no maior hub agroindustrial do Brasil — o estado de Goiás — resolvendo a ausência crítica de ferramentas modernas de gestão de risco digital para ativos reais de alto valor.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Stack Tecnológico */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-background border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <TechStackVisualization />
        </div>
      </section>

      {/* Zona Piloto — Goiás com mapa SVG */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-card/15">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="font-display text-3xl text-primary uppercase tracking-widest mb-4 text-center">
              Zona Piloto — Goiás
            </h2>
            <p className="text-center text-muted-foreground text-xs tracking-widest uppercase mb-12">
              Multi-bilhões em exportações · Minerais · Soja · Proteína Animal
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mapa SVG interativo */}
            <FadeIn delay={0.15}>
              <div className="border border-white/5 bg-background/60 p-6">
                <GoiasMap />
              </div>
            </FadeIn>

            {/* Info cards */}
            <div className="space-y-4">
              {[
                { cidade: "Rio Verde", desc: "Maior polo exportador de soja e milho de Goiás. Principal destino de hedge de grãos via mercado futuro." },
                { cidade: "Goiânia", desc: "Centro financeiro e hub de liquidação de capital. Base operacional para estruturação de contratos." },
                { cidade: "Jataí", desc: "Zona estratégica de grãos e proteína animal. Alta demanda por hedge de insumos (diesel e fertilizantes)." },
                { cidade: "Catalão", desc: "Mineração e processamento industrial pesado. Exportador de nióbio — metal estratégico global." },
              ].map((z, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="p-5 border border-white/5 bg-background hover:bg-white/[0.015] transition-colors group">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-2 h-2 rounded-full bg-primary/60 mt-2 group-hover:bg-primary transition-colors" />
                      <div>
                        <h4 className="font-display text-base text-foreground tracking-wider uppercase mb-1">{z.cidade}</h4>
                        <p className="text-muted-foreground text-sm font-light leading-relaxed">{z.desc}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <FadeIn delay={0.5}>
            <div className="mt-10 p-6 border border-primary/20 bg-primary/4">
              <p className="text-[10px] text-primary/70 tracking-widest uppercase mb-2">Síntese</p>
              <p className="text-foreground/80 text-sm leading-relaxed font-light">
                Um polo exportador de múltiplos bilhões de dólares — minerais, soja, proteína bovina — atualmente restringido por frameworks analógicos. O deployment do stack tecnológico americano resolve instantaneamente a lacuna crítica de ferramentas digitais modernas de gestão de risco para ativos reais de alto valor.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
