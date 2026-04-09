import { motion } from "framer-motion";
import { useState } from "react";

const cities = [
  { id: "goiania", name: "Goiânia", x: 68, y: 34, desc: "Centro financeiro e hub de liquidação" },
  { id: "rioverde", name: "Rio Verde", x: 28, y: 58, desc: "Maior polo exportador de soja e milho" },
  { id: "jatai", name: "Jataí", x: 18, y: 68, desc: "Zona estratégica de grãos e proteína" },
  { id: "catalao", name: "Catalão", x: 78, y: 56, desc: "Mineração e processamento industrial" },
];

const connections = [
  { from: "goiania", to: "rioverde" },
  { from: "goiania", to: "catalao" },
  { from: "goiania", to: "jatai" },
  { from: "rioverde", to: "jatai" },
  { from: "catalao", to: "rioverde" },
];

// Goiás approximate outline as SVG path (simplified polygon)
const GOIAS_PATH = `
  M 55,2 L 72,5 L 88,12 L 95,20 L 98,30 L 92,38 L 95,46
  L 90,58 L 82,65 L 80,74 L 72,80 L 62,84 L 52,82
  L 42,78 L 30,80 L 20,76 L 12,68 L 8,58 L 10,46
  L 5,36 L 8,24 L 18,14 L 30,8 L 42,4 Z
`;

function getPos(id: string) {
  return cities.find((c) => c.id === id)!;
}

const PulseDot = ({ x, y, active }: { x: number; y: number; active: boolean }) => (
  <g>
    {active && (
      <motion.circle
        cx={`${x}%`} cy={`${y}%`} r={12}
        fill="none" stroke="rgba(198,167,92,0.3)"
        initial={{ r: 6, opacity: 0.6 }}
        animate={{ r: 20, opacity: 0 }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
      />
    )}
    <circle cx={`${x}%`} cy={`${y}%`} r={5} fill="rgba(198,167,92,0.15)" stroke="rgba(198,167,92,0.5)" strokeWidth={1} />
    <circle cx={`${x}%`} cy={`${y}%`} r={2.5} fill={active ? "rgba(198,167,92,0.9)" : "rgba(198,167,92,0.4)"} />
  </g>
);

const FlowLine = ({ from, to }: { from: string; to: string }) => {
  const f = getPos(from);
  const t = getPos(to);
  return (
    <line
      x1={`${f.x}%`} y1={`${f.y}%`}
      x2={`${t.x}%`} y2={`${t.y}%`}
      stroke="rgba(198,167,92,0.12)" strokeWidth={0.8}
      strokeDasharray="3 4"
    />
  );
};

export default function GoiasMap() {
  const [hovered, setHovered] = useState<string | null>(null);
  const active = hovered ?? "goiania";

  return (
    <div className="w-full relative">
      <div className="text-center mb-6">
        <p className="text-[9px] text-muted-foreground/40 tracking-[0.3em] uppercase mb-1">Zona Piloto</p>
        <h4 className="font-display text-xl text-primary uppercase tracking-widest">Estado de Goiás</h4>
      </div>

      <div className="relative max-w-sm mx-auto">
        <svg viewBox="0 0 100 90" className="w-full" style={{ overflow: "visible" }}>
          {/* State outline */}
          <path
            d={GOIAS_PATH}
            fill="rgba(198,167,92,0.03)"
            stroke="rgba(198,167,92,0.18)"
            strokeWidth={0.6}
          />

          {/* Grid overlay */}
          <defs>
            <pattern id="mapgrid" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="rgba(198,167,92,0.04)" strokeWidth="0.3" />
            </pattern>
          </defs>
          <path d={GOIAS_PATH} fill="url(#mapgrid)" />

          {/* Connection lines */}
          {connections.map((c, i) => <FlowLine key={i} from={c.from} to={c.to} />)}

          {/* Animated flow dots on connections */}
          {connections.map((conn, i) => {
            const f = getPos(conn.from);
            const t = getPos(conn.to);
            return (
              <motion.circle
                key={i}
                r={1.2}
                fill="rgba(198,167,92,0.6)"
                initial={{ offsetDistance: "0%" } as any}
                animate={{ offsetDistance: "100%" } as any}
                transition={{ duration: 2.5 + i * 0.4, repeat: Infinity, ease: "linear", delay: i * 0.6 }}
              >
                <animateMotion dur={`${2.5 + i * 0.4}s`} repeatCount="indefinite" begin={`${i * 0.6}s`}>
                  <mpath href={`#line-${i}`} />
                </animateMotion>
              </motion.circle>
            );
          })}

          {/* Hidden paths for animateMotion */}
          <defs>
            {connections.map((conn, i) => {
              const f = getPos(conn.from);
              const t = getPos(conn.to);
              return (
                <path
                  key={i}
                  id={`line-${i}`}
                  d={`M ${f.x} ${f.y} L ${t.x} ${t.y}`}
                  fill="none"
                />
              );
            })}
          </defs>

          {/* City nodes */}
          {cities.map((city) => (
            <g
              key={city.id}
              style={{ cursor: "pointer" }}
              onMouseEnter={() => setHovered(city.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <PulseDot x={city.x} y={city.y} active={active === city.id} />
              {/* Label */}
              <text
                x={`${city.x + (city.x > 60 ? 3 : -3)}%`}
                y={`${city.y - 4}%`}
                textAnchor={city.x > 60 ? "start" : "end"}
                fontSize="3.8"
                fill={active === city.id ? "rgba(198,167,92,0.9)" : "rgba(198,167,92,0.45)"}
                fontFamily="Inter, sans-serif"
                letterSpacing="0.5"
              >
                {city.name.toUpperCase()}
              </text>
            </g>
          ))}
        </svg>

        {/* Info panel */}
        <div className="mt-4 min-h-[36px] text-center">
          {cities.map((c) => (
            <div
              key={c.id}
              className={`transition-all duration-300 ${active === c.id ? "opacity-100" : "opacity-0 absolute"}`}
            >
              <p className="font-display text-base text-primary">{c.name}</p>
              <p className="text-[10px] text-muted-foreground/60 tracking-wider">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
