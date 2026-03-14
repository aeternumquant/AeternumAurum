import { Globe, LineChart, ShieldAlert } from "lucide-react";
import { WireframeCube } from "@/components/WireframeCube";
import { FadeIn } from "@/components/FadeIn";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[100dvh] flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden">
        {/* Subtle animated background gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background z-0" />
        
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
          <WireframeCube className="w-24 h-28 sm:w-32 sm:h-36 mb-12" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-[0.2em] text-foreground font-light mb-6">
              Aeternum Aurum <span className="text-primary/90">Partners</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="flex flex-col items-center"
          >
            <p className="font-sans text-[10px] sm:text-xs tracking-[0.3em] text-muted-foreground uppercase">
              Plataforma Privada de Inteligência de Capital
            </p>
            
            <div className="w-24 sm:w-32 h-[1px] bg-primary/60 my-8 shadow-[0_0_8px_rgba(198,167,92,0.5)]" />
            
            <p className="font-sans text-[9px] sm:text-[10px] tracking-[0.25em] text-muted-foreground uppercase flex items-center gap-2 sm:gap-4 flex-wrap justify-center">
              <span>Global Macro</span>
              <span className="text-primary/40">|</span>
              <span>Event-Driven</span>
              <span className="text-primary/40">|</span>
              <span>Quantitative Risk</span>
            </p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent" />
        </motion.div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative bg-card/30">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl text-primary text-center mb-16 tracking-widest uppercase">
              Filosofia de Capital
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: Globe,
                title: "Global Macro",
                desc: "Análise profunda de tendências macroeconômicas globais, ciclos de liquidez e políticas monetárias para identificar distorções sistêmicas."
              },
              {
                icon: LineChart,
                title: "Event-Driven",
                desc: "Identificação cirúrgica de oportunidades em eventos corporativos complexos, fusões, aquisições e reestruturações de capital."
              },
              {
                icon: ShieldAlert,
                title: "Quantitative Risk",
                desc: "Emprego de modelos matemáticos proprietários e aprendizado de máquina para mitigação ativa de riscos e preservação patrimonial."
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.2}>
                <div className="group h-full p-8 border border-white/5 bg-card hover:bg-white/[0.02] transition-colors duration-500 rounded-sm">
                  <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 group-hover:border-primary/40 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-4 tracking-wider uppercase">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3. METRICS SECTION */}
      <section className="py-20 border-y border-white/5 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 divide-x divide-white/5">
            {[
              { value: "US$ 2.4B", label: "Ativos sob gestão" },
              { value: "18.7%", label: "Retorno médio anual" },
              { value: "0.94", label: "Índice Sharpe" },
              { value: "32+", label: "Anos de experiência" }
            ].map((metric, i) => (
              <FadeIn key={i} delay={i * 0.15} direction="none" className="text-center px-4">
                <div className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary mb-3">
                  {metric.value}
                </div>
                <div className="font-sans text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest">
                  {metric.label}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </section>

      {/* 4. PRINCIPLES SECTION */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-card/20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16">
            {[
              {
                title: "Independência",
                desc: "Estrutura proprietária que garante alinhamento absoluto. Gestão imune a conflitos de interesse institucionais."
              },
              {
                title: "Disciplina",
                desc: "Processos de investimento sistemáticos. Rigor empírico sobrepõe vieses comportamentais em todos os cenários."
              },
              {
                title: "Confidencialidade",
                desc: "Arquitetura operacional desenhada para garantir discrição absoluta e segurança da informação dos nossos parceiros."
              }
            ].map((principle, i) => (
              <FadeIn key={i} delay={i * 0.2} direction="left">
                <div className="relative pl-6 border-l border-primary/40 py-2 group hover:border-primary transition-colors duration-500">
                  <h4 className="font-display text-lg text-foreground uppercase tracking-widest mb-3">
                    {principle.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed font-light">
                    {principle.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="py-12 border-t border-primary/20 bg-background flex flex-col items-center justify-center text-center px-4">
        <FadeIn delay={0.2} direction="none" className="flex flex-col items-center">
          <WireframeCube className="w-8 h-8 mb-6 opacity-50" animate={false} />
          
          <h5 className="font-display text-sm tracking-[0.3em] text-foreground/80 uppercase mb-4">
            Aeternum Aurum Partners
          </h5>
          
          <div className="space-y-2 text-[10px] text-muted-foreground/60 tracking-wider font-light">
            <p>© {new Date().getFullYear()} Todos os direitos reservados.</p>
            <p className="max-w-md mx-auto leading-relaxed">
              Material de caráter informativo, destinado exclusivamente a investidores profissionais. 
              Não constitui oferta pública de valores mobiliários.
            </p>
          </div>
        </FadeIn>
      </footer>

    </div>
  );
}
