import Footer from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Cell
} from "recharts";

const GOLD = "#C6A75C";
const GOLD_DIM = "rgba(198,167,92,0.15)";

const dadosMes1 = [
  { semana: "Sem. 1", retorno: 1.2, evento: "Captura de Backwardation — Futuros de Petróleo" },
  { semana: "Sem. 2", retorno: 0.6, evento: "Custo de Hedge / Consolidação" },
  { semana: "Sem. 3", retorno: 1.9, evento: "Pico de Volatilidade Ouro/Prata" },
  { semana: "Sem. 4", retorno: 0.8, evento: "Rebalanceamento de Estoques" },
];

const dadosMes2 = [
  { semana: "Sem. 5", retorno: 0.5, evento: "Coleta de Theta Decay" },
  { semana: "Sem. 6", retorno: 2.0, evento: "Evento de Desvalorização Cambial (Put Options)" },
  { semana: "Sem. 7", retorno: 1.5, evento: "Captura de Gamma Squeeze" },
  { semana: "Sem. 8", retorno: 1.1, evento: "Reversão à Média" },
];

const TooltipPersonalizado = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-card border border-white/10 px-4 py-3 text-xs font-sans">
      <p className="text-muted-foreground tracking-wider uppercase mb-1">{label}</p>
      <p className="text-primary font-medium">+{payload[0].value.toFixed(1)}%</p>
      <p className="text-muted-foreground/60 mt-1 max-w-[200px] leading-relaxed">{payload[0].payload.evento}</p>
    </div>
  );
};

export default function ExecucaoPage() {
  const total1 = dadosMes1.reduce((s, d) => s + d.retorno, 0).toFixed(1);
  const total2 = dadosMes2.reduce((s, d) => s + d.retorno, 0).toFixed(1);

  return (
    <main className="pt-14 min-h-screen">
      {/* Hero */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background z-0" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="text-[10px] text-muted-foreground tracking-[0.3em] uppercase mb-4">Desempenho</p>
            <h1 className="font-display text-4xl sm:text-5xl text-primary uppercase tracking-widest mb-4">Execução</h1>
            <p className="text-muted-foreground text-sm leading-relaxed font-light max-w-xl mx-auto">
              Relatórios de execução mensais detalhando cada estratégia, gatilho de entrada e retorno semanal capturado pelos nossos modelos quantitativos.
            </p>
          </FadeIn>

          {/* Resumo */}
          <FadeIn delay={0.3} direction="none">
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-0 border border-white/5 max-w-sm mx-auto divide-y sm:divide-y-0 sm:divide-x divide-white/5">
              <div className="flex-1 w-full py-4 px-6 text-center">
                <div className="font-display text-3xl text-primary">+{total1}%</div>
                <div className="text-[10px] text-muted-foreground tracking-widest uppercase mt-1">Mês 1 — Commodities</div>
              </div>
              <div className="flex-1 w-full py-4 px-6 text-center">
                <div className="font-display text-3xl text-primary">+{total2}%</div>
                <div className="text-[10px] text-muted-foreground tracking-widest uppercase mt-1">Mês 2 — Câmbio / Derivativos</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Mês 1 — Ciclo de Commodities */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <p className="text-[10px] text-muted-foreground tracking-[0.3em] uppercase mb-2">Mês 1</p>
                <h2 className="font-display text-2xl sm:text-3xl text-foreground uppercase tracking-widest">
                  O Ciclo de Commodities
                </h2>
              </div>
              <div className="text-right">
                <div className="font-display text-3xl text-primary">+{total1}%</div>
                <div className="text-[10px] text-muted-foreground tracking-wider uppercase">Retorno acumulado</div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="w-full h-64 sm:h-80 mb-8">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dadosMes1} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="2 4" stroke="rgba(255,255,255,0.04)" vertical={false} />
                  <XAxis dataKey="semana" tick={{ fill: "#8A8A8A", fontSize: 10, fontFamily: "Inter" }} axisLine={false} tickLine={false} />
                  <YAxis
                    tickFormatter={(v) => `+${v}%`}
                    tick={{ fill: "#8A8A8A", fontSize: 10, fontFamily: "Inter" }}
                    axisLine={false}
                    tickLine={false}
                    domain={[0, 2.5]}
                  />
                  <Tooltip content={<TooltipPersonalizado />} cursor={{ stroke: GOLD, strokeWidth: 1, strokeDasharray: "4 3" }} />
                  <ReferenceLine y={0} stroke="rgba(255,255,255,0.05)" />
                  <Line
                    type="monotone"
                    dataKey="retorno"
                    stroke={GOLD}
                    strokeWidth={1.5}
                    dot={{ fill: GOLD, strokeWidth: 0, r: 4 }}
                    activeDot={{ fill: GOLD, stroke: "rgba(198,167,92,0.3)", strokeWidth: 6, r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {dadosMes1.map((d, i) => (
                <div key={i} className="p-4 border border-white/5 bg-card/40">
                  <div className="font-display text-xl text-primary mb-1">+{d.retorno.toFixed(1)}%</div>
                  <div className="text-[9px] text-muted-foreground/50 tracking-wider uppercase mb-2">{d.semana}</div>
                  <div className="text-[10px] text-muted-foreground/70 leading-relaxed">{d.evento}</div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-8 p-5 border border-white/5 bg-card/30">
              <p className="text-[10px] text-primary/60 tracking-widest uppercase mb-2">Insight Operacional</p>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">
                Utilizando dados de pressão de hedge do CFTC para identificar choques de oferta. Retornos gerados via roll estrutural — não direcionalidade especulativa.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Mês 2 — Derivativos de Câmbio */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card/10">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <p className="text-[10px] text-muted-foreground tracking-[0.3em] uppercase mb-2">Mês 2</p>
                <h2 className="font-display text-2xl sm:text-3xl text-foreground uppercase tracking-widest">
                  Derivativos de Câmbio &amp; Arbitragem
                </h2>
              </div>
              <div className="text-right">
                <div className="font-display text-3xl text-primary">+{total2}%</div>
                <div className="text-[10px] text-muted-foreground tracking-wider uppercase">Retorno acumulado</div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="w-full h-64 sm:h-80 mb-8">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dadosMes2} margin={{ top: 10, right: 20, left: -10, bottom: 0 }} barSize={36}>
                  <CartesianGrid strokeDasharray="2 4" stroke="rgba(255,255,255,0.04)" vertical={false} />
                  <XAxis dataKey="semana" tick={{ fill: "#8A8A8A", fontSize: 10, fontFamily: "Inter" }} axisLine={false} tickLine={false} />
                  <YAxis
                    tickFormatter={(v) => `+${v}%`}
                    tick={{ fill: "#8A8A8A", fontSize: 10, fontFamily: "Inter" }}
                    axisLine={false}
                    tickLine={false}
                    domain={[0, 2.5]}
                  />
                  <Tooltip content={<TooltipPersonalizado />} cursor={{ fill: GOLD_DIM }} />
                  <Bar dataKey="retorno" radius={[2, 2, 0, 0]}>
                    {dadosMes2.map((_, i) => (
                      <Cell key={i} fill={i === 1 ? GOLD : `rgba(198,167,92,${0.45 + i * 0.08})`} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {dadosMes2.map((d, i) => (
                <div key={i} className="p-4 border border-white/5 bg-background/60">
                  <div className="font-display text-xl text-primary mb-1">+{d.retorno.toFixed(1)}%</div>
                  <div className="text-[9px] text-muted-foreground/50 tracking-wider uppercase mb-2">{d.semana}</div>
                  <div className="text-[10px] text-muted-foreground/70 leading-relaxed">{d.evento}</div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-8 p-5 border border-white/5 bg-background/60">
              <p className="text-[10px] text-primary/60 tracking-widest uppercase mb-2">Insight Operacional</p>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">
                Explorando "Gamma Walls" e posicionamento de dealers. Lemos a estrutura de leilão onde dealers são forçados a fazer hedge, capturando aceleração de preços antes da reversão à média.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
