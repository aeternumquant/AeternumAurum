import { NavLink } from "react-router-dom";
import { WireframeCube } from "@/components/WireframeCube";

const links = [
  { label: "Framework", to: "/framework" },
  { label: "Alocações", to: "/alocacoes" },
  { label: "Research", to: "/research" },
  { label: "Commodities", to: "/commodities" },
  { label: "Acesso", to: "/acesso" },
  { label: "Reports", to: "/reports" },
];

export default function Footer() {
  return (
    <footer className="py-16 border-t border-primary/20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-8">
          <WireframeCube className="w-8 h-8 opacity-40" animate={false} />

          <h5 className="font-display text-sm tracking-[0.3em] text-foreground/70 uppercase">
            Aeternum Aurum Partners
          </h5>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className="text-[9px] text-muted-foreground/50 tracking-widest uppercase hover:text-muted-foreground transition-colors"
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="w-16 h-[1px] bg-primary/20" />

          <div className="space-y-2 text-[10px] text-muted-foreground/40 tracking-wider font-light">
            <p>© {new Date().getFullYear()} Aeternum Aurum Partners. Todos os direitos reservados.</p>
            <p className="max-w-md mx-auto leading-relaxed">
              Material destinado exclusivamente a investidores profissionais qualificados. Não constitui oferta pública de valores mobiliários.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
