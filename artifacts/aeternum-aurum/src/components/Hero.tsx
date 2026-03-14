import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { WireframeCube } from "@/components/WireframeCube";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden">
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

          <div className="flex flex-col sm:flex-row items-center gap-3 mt-12">
            <NavLink
              to="/acesso"
              className="px-8 py-3 bg-primary text-background text-[10px] tracking-[0.25em] uppercase font-sans hover:bg-primary/85 transition-all duration-300 min-w-[180px] text-center"
            >
              Solicitar Acesso
            </NavLink>
            <NavLink
              to="/login"
              className="px-8 py-3 border border-white/15 text-muted-foreground text-[10px] tracking-[0.25em] uppercase font-sans hover:border-white/30 hover:text-foreground transition-all duration-300 min-w-[180px] text-center"
            >
              Login
            </NavLink>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </section>
  );
}
