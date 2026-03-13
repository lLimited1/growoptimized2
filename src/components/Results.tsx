import { motion } from "motion/react";
import { Counter } from "./ui/Counter";

const metrics = [
  { val: "+30", lbl: "Lanzamientos en 2.5 años" },
  { val: "2–3", lbl: "Lanzamientos por mes" },
  { val: "7", lbl: "Con este sistema" },
  { val: "3", lbl: "Nichos validados" },
  { val: "+10–20%", lbl: "Mejora en asistencia" },
  { val: "+5–15%", lbl: "Mejora en tasa de compra" },
];

export const Results = () => {
  return (
    <section id="resultados" className="py-24 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-accent/5 blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          className="mb-16 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3 text-xs font-bold tracking-[0.2em] text-accent uppercase">
            <div className="h-[1px] w-8 bg-accent" />
            Resultados reales
            <div className="h-[1px] w-8 bg-accent" />
          </div>
          <h2 className="mb-6 font-display text-3xl font-bold leading-tight md:text-5xl tracking-tight text-white">
            Esto no nace de una idea bonita.<br />
            Nace de lo que ya hemos visto <span className="font-serif italic font-medium text-accent-light">funcionar.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-white/50 text-sm md:text-base">
            Nuestros procesos están validados por datos y experiencia real en el mercado, garantizando escalabilidad y previsibilidad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100, damping: 20 }}
              className="group relative flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] p-8 text-center backdrop-blur-sm transition-all hover:bg-white/[0.04] hover:border-white/10 min-h-[160px]"
            >
              {/* Card Glow on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl bg-radial-gradient from-accent/10 to-transparent pointer-events-none" />

              <div className="relative mb-3 font-display text-4xl font-bold tracking-tight text-white md:text-5xl group-hover:text-accent-light transition-colors">
                <Counter value={m.val} />
              </div>
              <div className="relative text-[10px] font-bold tracking-[0.15em] text-white/40 uppercase leading-relaxed max-w-[120px]">
                {m.lbl}
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-1/3" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
