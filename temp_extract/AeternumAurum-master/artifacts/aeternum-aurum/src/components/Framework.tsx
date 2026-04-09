import { Globe, LineChart, ShieldAlert } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

export default function FrameworkSection() {
  return (
    <section id="framework" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative bg-card/30">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="font-display text-3xl sm:text-4xl text-primary text-center mb-4 tracking-widest uppercase">
            Filosofia de Capital
          </h2>
          <p className="text-center text-muted-foreground text-xs tracking-widest uppercase mb-16">
            Framework de Investimento
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {[
            {
              icon: Globe,
              title: "Global Macro",
              desc: "Análise profunda de tendências macroeconômicas globais, ciclos de liquidez e políticas monetárias para identificar distorções sistêmicas.",
            },
            {
              icon: LineChart,
              title: "Event-Driven",
              desc: "Identificação cirúrgica de oportunidades em eventos corporativos complexos, fusões, aquisições e reestruturações de capital.",
            },
            {
              icon: ShieldAlert,
              title: "Quantitative Risk",
              desc: "Emprego de modelos matemáticos proprietários e aprendizado de máquina para mitigação ativa de riscos e preservação patrimonial.",
            },
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
  );
}
