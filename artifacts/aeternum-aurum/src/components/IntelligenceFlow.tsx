import { motion } from "framer-motion";

const nodes = [
  { id: "markets", label: "Mercados Financeiros", x: 50, y: 10, color: "rgba(198,167,92,0.8)" },
  { id: "geopolitics", label: "Geopolítica & Defesa", x: 15, y: 35, color: "rgba(198,167,92,0.55)" },
  { id: "macro", label: "Anúncios Macro", x: 85, y: 35, color: "rgba(198,167,92,0.55)" },
  { id: "commodities", label: "Commodities & Supply", x: 20, y: 68, color: "rgba(198,167,92,0.55)" },
  { id: "news", label: "Fluxo de Notícias 24/7", x: 80, y: 68, color: "rgba(198,167,92,0.55)" },
  { id: "core", label: "AETERNUM\nAURUM", x: 50, y: 50, color: "rgba(198,167,92,1)", isCore: true },
];

const edges = [
  { from: "geopolitics", to: "core" },
  { from: "macro", to: "core" },
  { from: "commodities", to: "core" },
  { from: "news", to: "core" },
  { from: "markets", to: "core" },
  { from: "geopolitics", to: "markets" },
  { from: "macro", to: "markets" },
];

function NodeDot({ node }: { node: typeof nodes[0] }) {
  return (
    <g>
      {node.isCore && (
        <motion.circle
          cx={`${node.x}%`} cy={`${node.y}%`}
          r={22}
          fill="none"
          stroke="rgba(198,167,92,0.08)"
          animate={{ r: [22, 30, 22] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      <motion.circle
        cx={`${node.x}%`} cy={`${node.y}%`}
        r={node.isCore ? 10 : 5}
        fill={node.isCore ? "rgba(198,167,92,0.12)" : "rgba(198,167,92,0.06)"}
        stroke={node.color}
        strokeWidth={node.isCore ? 1.2 : 0.8}
        animate={node.isCore ? { opacity: [0.8, 1, 0.8] } : {}}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
      <circle
        cx={`${node.x}%`} cy={`${node.y}%`}
        r={node.isCore ? 3.5 : 2}
        fill={node.color}
      />
    </g>
  );
}

function getNode(id: string) {
  return nodes.find((n) => n.id === id)!;
}

function Edge({ from, to, i }: { from: string; to: string; i: number }) {
  const f = getNode(from);
  const t = getNode(to);
  return (
    <g>
      <line
        x1={`${f.x}%`} y1={`${f.y}%`}
        x2={`${t.x}%`} y2={`${t.y}%`}
        stroke="rgba(198,167,92,0.08)"
        strokeWidth={0.7}
        strokeDasharray="3 5"
      />
      {/* Animated pulse dot */}
      <circle r={1.8} fill="rgba(198,167,92,0.7)">
        <animateMotion
          dur={`${1.8 + i * 0.35}s`}
          repeatCount="indefinite"
          begin={`${i * 0.4}s`}
        >
          <mpath href={`#edge-path-${i}`} />
        </animateMotion>
      </circle>
      <defs>
        <path
          id={`edge-path-${i}`}
          d={`M ${f.x} ${f.y} L ${t.x} ${t.y}`}
        />
      </defs>
    </g>
  );
}

export default function IntelligenceFlow() {
  return (
    <div className="w-full">
      <div className="text-center mb-4">
        <p className="text-[9px] text-muted-foreground/40 tracking-[0.3em] uppercase">Fluxo Global de Inteligência — Tempo Real</p>
      </div>
      <svg viewBox="0 0 100 80" className="w-full max-w-lg mx-auto block" style={{ overflow: "visible" }}>
        {edges.map((e, i) => <Edge key={i} from={e.from} to={e.to} i={i} />)}
        {nodes.map((n) => <NodeDot key={n.id} node={n} />)}
        {/* Labels */}
        {nodes.map((n) => (
          <text
            key={n.id + "-label"}
            x={`${n.x}%`}
            y={`${n.y + (n.isCore ? 5.5 : (n.y < 50 ? -3.5 : 4.5))}%`}
            textAnchor="middle"
            fontSize={n.isCore ? "3.2" : "2.8"}
            fill={n.isCore ? "rgba(198,167,92,0.7)" : "rgba(198,167,92,0.38)"}
            fontFamily="Inter, sans-serif"
            letterSpacing="0.4"
          >
            {n.label.split("\n").map((line, j) => (
              <tspan key={j} x={`${n.x}%`} dy={j === 0 ? 0 : "1.3em"}>
                {line}
              </tspan>
            ))}
          </text>
        ))}
      </svg>
    </div>
  );
}
