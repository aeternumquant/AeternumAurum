import Hero from "@/components/Hero";
import FrameworkSection from "@/components/Framework";
import Allocation from "@/components/Allocation";
import Agro from "@/components/Agro";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import AnimatedCounter from "@/components/AnimatedCounter";

const metrics = [
  { value: "US$ 2.4M", label: "Ativos sob gestão" },
  { value: "28.2%", label: "Retorno médio anual" },
  { value: "0.94", label: "Índice Sharpe" },
  { value: "23+", label: "Anos de experiência" },
];

export default function Home() {
  return (
    <main className="pt-14">
      <Hero />
      <FrameworkSection />
      <Allocation />
      <Agro />

      {/* Metrics strip */}
      <section className="py-20 border-y border-white/5 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 divide-x divide-white/5">
            {metrics.map((m, i) => (
              <div key={i} className="text-center px-4">
                <AnimatedCounter
                  value={m.value}
                  className="font-display sm:text-4xl lg:text-5xl text-primary mb-3 text-center text-[35px]"
                />
                <div className="font-sans text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
