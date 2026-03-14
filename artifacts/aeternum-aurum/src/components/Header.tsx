import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WireframeCube } from "@/components/WireframeCube";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Framework", to: "/framework" },
  { label: "Alocações", to: "/alocacoes" },
  { label: "Research", to: "/research" },
  { label: "Commodities", to: "/commodities" },
  { label: "Reports", to: "/reports" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-4">

        {/* Left: Logo + hamburger */}
        <div className="flex items-center gap-3">
          <button
            className="text-muted-foreground hover:text-foreground transition-colors p-1"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          <NavLink to="/" className="flex items-center gap-2.5 group" onClick={() => setMenuOpen(false)}>
            <WireframeCube className="w-6 h-6" animate={false} />
            <span className="font-display text-[11px] tracking-[0.22em] uppercase text-foreground/60 group-hover:text-foreground/90 transition-colors hidden sm:block">
              Aeternum Aurum
            </span>
          </NavLink>
        </div>

        {/* Right: CTA buttons */}
        <div className="flex items-center gap-2">
          <NavLink
            to="/acesso"
            className="hidden sm:flex items-center px-4 py-1.5 border border-primary/40 text-primary text-[9px] tracking-[0.2em] uppercase font-sans hover:bg-primary hover:text-background transition-all duration-200"
          >
            Solicitar Acesso
          </NavLink>
          <NavLink
            to="/login"
            className="flex items-center px-4 py-1.5 border border-white/10 text-muted-foreground text-[9px] tracking-[0.2em] uppercase font-sans hover:border-white/25 hover:text-foreground transition-all duration-200"
          >
            Login
          </NavLink>
        </div>
      </div>

      {/* Dropdown nav menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="border-t border-white/5 bg-background/98 backdrop-blur-sm"
          >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-0.5">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.to === "/"
                    ? location.pathname === "/"
                    : location.pathname.startsWith(link.to);
                return (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className={`py-2.5 px-3 text-[10px] tracking-[0.2em] uppercase font-sans border-l transition-colors ${
                      isActive
                        ? "border-primary text-primary"
                        : "border-transparent text-muted-foreground hover:text-foreground hover:border-white/20"
                    }`}
                  >
                    {link.label}
                  </NavLink>
                );
              })}
              {/* Mobile-only access button */}
              <div className="pt-3 mt-2 border-t border-white/5 sm:hidden">
                <NavLink
                  to="/acesso"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2.5 px-3 text-[10px] tracking-[0.2em] uppercase font-sans text-primary border-l border-primary/40"
                >
                  Solicitar Acesso
                </NavLink>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
