import Allocation from "@/components/Allocation";
import Footer from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";

export default function AlocacoesPage() {
  return (
    <main className="pt-14 min-h-screen">
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/5 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/4 via-background to-background z-0" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="text-[10px] text-muted-foreground tracking-[0.3em] uppercase mb-4">Portfólio</p>
            <h1 className="font-display text-4xl sm:text-5xl text-primary uppercase tracking-widest mb-6">Alocações</h1>
            <p className="text-muted-foreground text-sm leading-relaxed font-light">
              Estrutura de alocação dinâmica, ajustada continuamente conforme cenário macroeconômico, liquidez global e oportunidades identificadas pelos nossos modelos.
            </p>
          </FadeIn>
        </div>
      </section>

      <Allocation />
      <Footer />
    </main>
  );
}
