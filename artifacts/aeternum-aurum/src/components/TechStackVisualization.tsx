import { motion } from "framer-motion";
import { useState } from "react";

const layers = [
  {
    index: "01",
    label: "Analysis",
    name: "MenthorQ",
    location: "Miami, FL",
    tag: "Quantitative Engine",
    desc: "Processes 95% of global derivative flows for predictive structural analysis. Identifies Net GEX exposure and volatility surfaces across all major asset classes.",
    badges: ["Net GEX", "Volatility Surface", "95% Flow Coverage"],
    color: "from-primary/10 to-primary/3",
    border: "border-primary/25",
    dotColor: "bg-primary",
  },
  {
    index: "02",
    label: "Intelligence",
    name: "Grok Heavy AI",
    location: "U.S. Infrastructure",
    tag: "AI Signal Processing",
    desc: "Processes real-time macro-sentiment, filters market noise, and ensures ISO 20022 compliance. Monitors geopolitical signals and central bank flows continuously.",
    badges: ["ISO 20022", "Macro Sentiment", "Real-Time"],
    color: "from-primary/7 to-primary/2",
    border: "border-primary/15",
    dotColor: "bg-primary/70",
  },
  {
    index: "03",
    label: "Execution",
    name: "Antigravity",
    location: "U.S. Brokerages",
    tag: "Automated Execution",
    desc: "The execution layer connecting directly to trusted U.S. brokerages for instant, automated hedging with sub-millisecond order routing and full regulatory compliance.",
    badges: ["Sub-ms Routing", "U.S. Brokerages", "Full Audit Trail"],
    color: "from-primary/4 to-transparent",
    border: "border-primary/8",
    dotColor: "bg-primary/50",
  },
];

const FlowDot = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary/60"
    initial={{ top: "0%", opacity: 0 }}
    animate={{ top: "100%", opacity: [0, 1, 1, 0] }}
    transition={{ duration: 1.4, delay, repeat: Infinity, ease: "linear" }}
  />
);

export default function TechStackVisualization() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-[9px] text-muted-foreground/50 tracking-[0.35em] uppercase mb-2">Architecture</p>
        <h3 className="font-display text-2xl text-primary uppercase tracking-widest">TRL 7+ Technology Stack</h3>
        <p className="text-[10px] text-muted-foreground tracking-widest uppercase mt-2">
          Análise · Inteligência · Execução
        </p>
      </div>

      {/* Layers */}
      <div className="relative">
        {layers.map((layer, i) => (
          <div key={i} className="relative">
            {/* Layer card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              onClick={() => setActive(active === i ? null : i)}
              className={`
                relative overflow-hidden cursor-pointer border bg-gradient-to-b ${layer.color} ${layer.border}
                transition-all duration-500 group
                ${active === i ? "shadow-[0_0_40px_-10px_rgba(198,167,92,0.15)]" : ""}
              `}
              style={{
                marginBottom: i < layers.length - 1 ? 0 : 0,
                transform: `perspective(1200px) rotateX(${i === 0 ? 2 : i === 2 ? -2 : 0}deg)`,
              }}
            >
              {/* Subtle grid pattern */}
              <div className="absolute inset-0 opacity-[0.015]"
                style={{
                  backgroundImage: "linear-gradient(rgba(198,167,92,1) 1px, transparent 1px), linear-gradient(90deg, rgba(198,167,92,1) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              <div className="relative z-10 p-6 sm:p-8 flex flex-col sm:flex-row gap-5 sm:gap-8">
                {/* Left: index + name */}
                <div className="shrink-0 sm:w-44">
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`w-1.5 h-1.5 rounded-full ${layer.dotColor} transition-all duration-300 ${active === i ? "scale-150" : ""}`} />
                    <span className="text-[9px] text-muted-foreground/40 tracking-[0.3em] uppercase">{layer.index} — {layer.label}</span>
                  </div>
                  <p className="font-display text-2xl text-primary tracking-wide leading-none mb-1">{layer.name}</p>
                  <p className="text-[9px] text-muted-foreground/50 tracking-wider">{layer.location}</p>
                  <span className="inline-block mt-3 text-[8px] tracking-widest uppercase border border-primary/15 text-primary/50 px-2 py-0.5">
                    {layer.tag}
                  </span>
                </div>

                {/* Right: description + badges */}
                <div className="flex-1 sm:border-l border-white/5 sm:pl-8">
                  <p className="text-muted-foreground text-[13px] leading-relaxed font-light mb-4">{layer.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {layer.badges.map((b, j) => (
                      <span key={j} className="text-[8px] tracking-widest uppercase bg-primary/5 border border-primary/10 text-primary/60 px-2.5 py-1">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover shimmer line */}
              <motion.div
                className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent w-full"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: active === i ? 1 : 0, opacity: active === i ? 1 : 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>

            {/* Connector between layers */}
            {i < layers.length - 1 && (
              <div className="relative h-10 flex items-center justify-center">
                <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-primary/10" />
                <FlowDot delay={i * 0.5} />
                <FlowDot delay={i * 0.5 + 0.7} />
                {/* Arrow head */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-0.5">
                  <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[5px] border-t-primary/25" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom label */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-10 flex items-center justify-center gap-3"
      >
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/15" />
        <span className="text-[9px] text-muted-foreground/30 tracking-[0.3em] uppercase">U.S. Brokerages · Instant Execution</span>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/15" />
      </motion.div>
    </div>
  );
}
