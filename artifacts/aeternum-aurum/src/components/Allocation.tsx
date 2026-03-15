import { FadeIn } from "@/components/FadeIn";

const allocations = [
  { label: "Commodities & Real Assets", pct: 35, note: "Agro, energia, metais preciosos e índices globais" },
  { label: "Equities Long/Short", pct: 25, note: "Mercados desenvolvidos e emergentes" },
  { label: "Volatilidade & Derivativos", pct: 20, note: "Proteção e geração de alfa" },
  { label: "ISO 20022 Assets", pct: 12, note: "Ativos tokenizados e protocolos digitais" },
  { label: "Global Macro", pct: 8, note: "Câmbio, macro ciclos e soberanos globais" },
];

export default function Allocation() {
  return (
    <section id="alocacao" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-background">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="font-display text-3xl sm:text-4xl text-primary text-center mb-4 tracking-widest uppercase">
            Alocação Estratégica
          </h2>
          <p className="text-center text-muted-foreground text-xs tracking-widest uppercase mb-16">
            Portfólio Referência — Sujeito a ajustes táticos
          </p>
        </FadeIn>

        <div className="space-y-6">
          {allocations.map((a, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="sm:w-56 shrink-0">
                  <span className="font-display text-sm text-foreground tracking-wide">{a.label}</span>
                  <p className="text-[10px] text-muted-foreground/60 tracking-wider mt-0.5">{a.note}</p>
                </div>
                <div className="flex-1 flex items-center gap-4">
                  <div className="flex-1 h-[1px] bg-white/5 relative">
                    <div
                      className="absolute left-0 top-0 h-full bg-primary/50"
                      style={{ width: `${a.pct}%` }}
                    />
                  </div>
                  <span className="font-display text-2xl text-primary tabular-nums w-14 text-right">
                    {a.pct}%
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.7}>
          <p className="mt-12 text-[10px] text-muted-foreground/40 tracking-wider text-center leading-relaxed max-w-xl mx-auto">
            Alocações ilustrativas para fins de referência. Carteiras individuais são estruturadas conforme perfil, horizonte e objetivos de cada investidor.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
