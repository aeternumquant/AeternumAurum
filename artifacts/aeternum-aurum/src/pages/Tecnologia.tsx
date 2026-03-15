import Footer from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import techImg from "@assets/image_1773589744061.png";

const stack = [
  {
    layer: "01 — Analysis",
    name: "MenthorQ",
    location: "Miami, FL",
    desc: "Processes 95% of global derivative flows for predictive structural analysis. Identifies Net GEX exposure and volatility surfaces across all major asset classes in real time.",
    tag: "Quantitative Engine",
  },
  {
    layer: "02 — Intelligence",
    name: "Grok Heavy AI",
    location: "U.S. Infrastructure",
    desc: "Processes real-time macro-sentiment, filters market noise, and ensures ISO 20022 compliance. Continuously monitors geopolitical signals and central bank flows.",
    tag: "AI / Signal Processing",
  },
  {
    layer: "03 — Execution",
    name: "Antigravity",
    location: "U.S. Brokerages",
    desc: "The execution layer connecting directly to trusted U.S. brokerages for instant, automated hedging. Sub-millisecond order routing with full audit trail and regulatory compliance.",
    tag: "Automated Execution",
  },
];

const zones = [
  { city: "Rio Verde", desc: "Maior polo exportador de soja e milho de Goiás" },
  { city: "Goiânia", desc: "Centro financeiro e hub de liquidação de capital" },
  { city: "Jataí", desc: "Zona estratégica de grãos e proteína animal" },
  { city: "Catalão", desc: "Mineração e processamento industrial pesado" },
];

export default function TecnologiaPage() {
  return (
    <main className="pt-14 min-h-screen">
      {/* Hero */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeIn>
            <p className="text-[10px] text-muted-foreground tracking-[0.3em] uppercase mb-4">TRL 7+ Certified</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground uppercase tracking-widest mb-4 leading-tight">
              Tecnologia <span className="text-primary">U.S.</span><br />Aplicada ao Brasil
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-light max-w-2xl mt-4">
              Validando ferramentas quantitativas americanas de nível TRL 7+ no maior hub agroindustrial do Brasil — o estado de Goiás — resolvendo a ausência crítica de ferramentas modernas de gestão de risco digital para ativos reais de alto valor.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Reference image */}
      <section className="border-b border-white/5 bg-card/10 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <FadeIn>
            <img
              src={techImg}
              alt="TRL 7+ Technology Stack and Goiás Pilot Zone"
              className="w-full rounded-sm opacity-90 border border-white/5"
              style={{ filter: "brightness(0.92) contrast(1.05)" }}
            />
          </FadeIn>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="font-display text-3xl text-primary uppercase tracking-widest mb-4 text-center">
              The TRL 7+ Technology Stack
            </h2>
            <p className="text-center text-muted-foreground text-xs tracking-widest uppercase mb-16">
              Três camadas integradas — Análise · Inteligência · Execução
            </p>
          </FadeIn>

          <div className="space-y-4">
            {stack.map((item, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="group flex flex-col sm:flex-row gap-6 p-7 border border-white/5 bg-card hover:bg-white/[0.018] transition-colors duration-500">
                  <div className="shrink-0 sm:w-52">
                    <p className="text-[10px] text-muted-foreground/50 tracking-widest uppercase mb-1">{item.layer}</p>
                    <p className="font-display text-xl text-primary tracking-wide">{item.name}</p>
                    <p className="text-[10px] text-muted-foreground/60 mt-1 tracking-wider">{item.location}</p>
                  </div>
                  <div className="flex-1 border-l border-white/5 sm:pl-6">
                    <span className="inline-block text-[9px] tracking-widest uppercase border border-primary/20 text-primary/60 px-2 py-0.5 mb-3">{item.tag}</span>
                    <p className="text-muted-foreground text-sm leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Goiás Pilot Zone */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-card/15">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="font-display text-3xl text-primary uppercase tracking-widest mb-4 text-center">
              Goiás Pilot Zone
            </h2>
            <p className="text-center text-muted-foreground text-xs tracking-widest uppercase mb-16">
              Multi-bilhões em exportações · Minerais · Soja · Proteína Animal
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {zones.map((z, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div className="p-6 border border-white/5 bg-background hover:bg-white/[0.015] transition-colors group">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-2 h-2 rounded-full bg-primary/60 mt-2 group-hover:bg-primary transition-colors" />
                    <div>
                      <h4 className="font-display text-lg text-foreground tracking-wider uppercase mb-1">{z.city}</h4>
                      <p className="text-muted-foreground text-sm font-light leading-relaxed">{z.desc}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
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
