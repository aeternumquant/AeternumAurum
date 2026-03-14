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
  { label: "Acesso", to: "/acesso" },
  { label: "Reports", to: "/reports" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-6">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3 shrink-0 group">
          <WireframeCube className="w-7 h-7" animate={false} />
          <span className="font-display text-sm tracking-[0.2em] uppercase text-foreground/80 group-hover:text-foreground transition-colors hidden sm:block">
            Aeternum Aurum
          </span>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.to === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(link.to);
            return (
              <NavLink
                key={link.to}
                to={link.to}
                className={`relative px-4 py-1.5 text-[10px] tracking-[0.2em] uppercase font-sans transition-colors duration-200 ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-x-3 -bottom-[1px] h-[1px] bg-primary"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
                {link.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Partner badge */}
        <a
          href="/acesso"
          className="hidden lg:flex items-center gap-2 px-4 py-1.5 border border-primary/30 text-primary text-[9px] tracking-[0.2em] uppercase font-sans hover:border-primary/60 hover:bg-primary/5 transition-all duration-200 shrink-0"
        >
          Partner Access
        </a>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-muted-foreground hover:text-foreground transition-colors p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-white/5 bg-background/95 backdrop-blur-sm"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
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
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
